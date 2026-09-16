// Regenerates public/sitemap.xml before every build. Static marketing pages are
// hardcoded below; destination/park/collection/story/experience pages are read
// live from Sanity, keyed by slug.
import { createClient } from '@sanity/client'
import { writeFileSync, readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)))

function loadEnvFile(file) {
  const filePath = path.join(rootDir, file)
  if (!existsSync(filePath)) return
  for (const line of readFileSync(filePath, 'utf8').split('\n')) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/)
    if (!match) continue
    const key = match[1]
    if (process.env[key] !== undefined) continue
    let value = (match[2] ?? '').trim()
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1)
    process.env[key] = value
  }
}

loadEnvFile('.env.local')
loadEnvFile('.env')

const BASE_URL = 'https://stillwildsafaris.com'

const STATIC_PAGES = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/safari-collections', changefreq: 'weekly', priority: '0.9' },
  { loc: '/destinations', changefreq: 'weekly', priority: '0.9' },
  { loc: '/stories', changefreq: 'weekly', priority: '0.8' },
  { loc: '/contact', changefreq: 'monthly', priority: '0.8' },
  { loc: '/about', changefreq: 'monthly', priority: '0.7' },
  { loc: '/work-with-us', changefreq: 'monthly', priority: '0.6' },
  { loc: '/know-before-you-go', changefreq: 'monthly', priority: '0.6' },
  { loc: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
]

const projectId = process.env.VITE_SANITY_PROJECT_ID ?? ''
const dataset = process.env.VITE_SANITY_DATASET ?? 'production'
const apiVersion = process.env.VITE_SANITY_API_VERSION ?? '2025-01-01'

const sanityClient = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: true, perspective: 'published' })
  : null

async function fetchSanity(query, label) {
  if (!sanityClient) return []
  try {
    return (await sanityClient.fetch(query)) ?? []
  } catch (err) {
    console.warn(`[sitemap] Sanity fetch for ${label} failed:`, err.message)
    return []
  }
}

async function fetchDynamicEntries() {
  const [destinations, tourPackages, stories, experiences] = await Promise.all([
    fetchSanity(
      `*[_type == "destination" && defined(slug.current)]{ "slug": slug.current, parks[]{ "slug": slug.current } }`,
      'destinations',
    ),
    fetchSanity(`*[_type == "tourPackage" && defined(slug.current)]{ "slug": slug.current }`, 'tour packages'),
    fetchSanity(`*[_type == "story" && defined(slug.current)]{ "slug": slug.current }`, 'stories'),
    fetchSanity(`*[_type == "experience" && defined(slug.current)]{ "slug": slug.current }`, 'experiences'),
  ])

  return { destinations, tourPackages, stories, experiences }
}

function urlEntry({ loc, changefreq, priority }) {
  return `  <url>\n    <loc>${BASE_URL}${loc}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
}

async function main() {
  const { destinations, tourPackages, stories, experiences } = await fetchDynamicEntries()

  const entries = [...STATIC_PAGES]

  for (const country of destinations) {
    entries.push({ loc: `/destinations/${country.slug}`, changefreq: 'monthly', priority: '0.8' })
    for (const park of country.parks ?? []) {
      entries.push({ loc: `/destinations/${country.slug}/${park.slug}`, changefreq: 'monthly', priority: '0.7' })
    }
  }

  for (const pkg of tourPackages) {
    entries.push({ loc: `/safari-collections/${pkg.slug}`, changefreq: 'monthly', priority: '0.8' })
  }

  for (const story of stories) {
    entries.push({ loc: `/stories/${story.slug}`, changefreq: 'monthly', priority: '0.6' })
  }

  for (const exp of experiences) {
    entries.push({ loc: `/experiences/${exp.slug}`, changefreq: 'monthly', priority: '0.6' })
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries
    .map(urlEntry)
    .join('\n')}\n</urlset>\n`

  const outPath = path.join(rootDir, 'public', 'sitemap.xml')
  writeFileSync(outPath, xml)
  console.log(`[sitemap] wrote ${entries.length} URLs to public/sitemap.xml`)
}

main()
