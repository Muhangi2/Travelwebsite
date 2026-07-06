// Serves the just-built dist/ folder, visits every URL from public/sitemap.xml with a
// headless browser, and writes the fully-rendered HTML back into dist/<route>/index.html.
//
// Why: this app is a client-rendered SPA (index.html ships an empty #root + a script tag).
// Search crawlers that execute JS (Googlebot) are fine either way, but most AI crawlers
// (GPTBot, ClaudeBot, PerplexityBot) fetch raw HTML and don't run JS, so without this step
// they see an empty page. Netlify/Vercel serve the static file at a matching path if one
// exists and only fall back to the SPA rewrite for routes with no prerendered file, so this
// is additive — client-side navigation and unlisted routes still work exactly as before.
import { chromium } from 'playwright'
import { createServer } from 'node:http'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Vercel's build container doesn't have the shared libraries (libnspr4, libnss3, etc.)
// that Playwright's own downloaded Chromium needs, and there's no apt access at build time
// to add them. @sparticuz/chromium ships a Chromium build with those libs statically
// bundled, built for exactly this serverless/CI constraint — so we swap to it there.
async function launchBrowser() {
  if (process.env.VERCEL) {
    const { default: sparticuzChromium } = await import('@sparticuz/chromium')
    return chromium.launch({
      executablePath: await sparticuzChromium.executablePath(),
      args: sparticuzChromium.args,
      headless: true,
    })
  }
  return chromium.launch()
}

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const distDir = path.join(rootDir, 'dist')
const PORT = 4571
const BASE_URL = 'https://stillwildsafaris.com'

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
}

// The prerender loop overwrites dist/index.html and dist/<route>/index.html as it goes,
// so the fallback response for not-yet-rendered routes must come from this in-memory copy
// of the pristine build output — never re-read from disk, or later routes would bootstrap
// from an already-prerendered page (leaking its title/meta into the next route).
function startServer(shellHtml) {
  const server = createServer(async (req, res) => {
    const urlPath = decodeURIComponent((req.url ?? '/').split('?')[0])
    const filePath = path.join(distDir, urlPath)
    const hasExt = path.extname(urlPath) !== ''

    if (hasExt && existsSync(filePath) && !statSync(filePath).isDirectory()) {
      const data = await readFile(filePath)
      const ext = path.extname(filePath)
      res.writeHead(200, { 'Content-Type': MIME[ext] ?? 'application/octet-stream' })
      res.end(data)
      return
    }

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(shellHtml)
  })
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)))
}

async function getRoutes() {
  const xml = await readFile(path.join(rootDir, 'public', 'sitemap.xml'), 'utf8')
  const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)]
  return matches.map((m) => m[1].replace(BASE_URL, '') || '/')
}

async function main() {
  if (!existsSync(distDir)) {
    console.error('[prerender] dist/ not found — run vite build first')
    process.exit(1)
  }

  const shellHtml = await readFile(path.join(distDir, 'index.html'), 'utf8')
  const server = await startServer(shellHtml)
  const routes = await getRoutes()
  const browser = await launchBrowser()
  const page = await browser.newPage()

  console.log(`[prerender] rendering ${routes.length} routes...`)

  for (const route of routes) {
    const url = `http://localhost:${PORT}${route}`
    await page.goto(url, { waitUntil: 'load', timeout: 30_000 })
    await page.waitForSelector('#root :is(h1, h2)', { timeout: 8_000 }).catch(() => {})
    await page.waitForTimeout(300)

    const html = await page.content()
    const outDir = route === '/' ? distDir : path.join(distDir, route)
    await mkdir(outDir, { recursive: true })
    await writeFile(path.join(outDir, 'index.html'), html)
    console.log(`[prerender] ${route}`)
  }

  await browser.close()
  server.close()
}

main().catch((err) => {
  console.error('[prerender] failed:', err)
  process.exit(1)
})
