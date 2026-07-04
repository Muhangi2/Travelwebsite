// Regenerates public/sitemap.xml before every build. Static marketing pages are
// hardcoded below; destination/park/collection/story/experience pages are the
// UNION of local data (src/data/*.ts) and live Sanity documents, keyed by slug.
// This is deliberately additive rather than Sanity-replaces-local: browser-side
// Sanity fetches on production currently don't render (verified — a real Sanity
// "experience" doc redirects home instead of loading), so local slugs are the
// only ones confirmed live. Merging means new Sanity content is picked up as
// soon as it's reachable, without risking dropping pages that are live today.
import { createClient } from '@sanity/client'
import { writeFileSync, readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

import { countries as localCountries } from '../src/data/destinations.ts'
import { journeys as localJourneys } from '../src/data/journeys.ts'
import { articles as localArticles } from '../src/data/articles.ts'
import { experiences as localExperiences } from '../src/data/experiences.ts'

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

// Local fallbacks — same slugs the app itself falls back to when a Sanity
// document type has no entries yet (see src/sanity/*.ts hooks).
const localDestinations = Object.values(localCountries).map((c) => ({
  slug: c.slug,
  parks: c.parks.map((p) => ({ slug: p.slug })),
}))
const localTourPackages = Object.keys(localJourneys).map((slug) => ({ slug }))
const localStories = localArticles.map((a) => ({ slug: a.slug }))
const localExperienceSlugs = localExperiences.map((e) => ({ slug: e.slug }))

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

function mergeBySlug(local, sanity) {
  const bySlug = new Map(local.map((item) => [item.slug, item]))
  for (const item of sanity) {
    if (!bySlug.has(item.slug)) bySlug.set(item.slug, item)
  }
  return [...bySlug.values()]
}

function mergeDestinations(local, sanity) {
  const bySlug = new Map(local.map((c) => [c.slug, { slug: c.slug, parks: [...c.parks] }]))
  for (const country of sanity) {
    const existing = bySlug.get(country.slug)
    if (!existing) {
      bySlug.set(country.slug, { slug: country.slug, parks: [...(country.parks ?? [])] })
      continue
    }
    existing.parks = mergeBySlug(existing.parks, country.parks ?? [])
  }
  return [...bySlug.values()]
}

async function fetchDynamicEntries() {
  const [sanityDestinations, sanityTourPackages, sanityStories, sanityExperiences] = await Promise.all([
    fetchSanity(
      `*[_type == "destination" && defined(slug.current)]{ "slug": slug.current, parks[]{ "slug": slug.current } }`,
      'destinations',
    ),
    fetchSanity(`*[_type == "tourPackage" && defined(slug.current)]{ "slug": slug.current }`, 'tour packages'),
    fetchSanity(`*[_type == "story" && defined(slug.current)]{ "slug": slug.current }`, 'stories'),
    fetchSanity(`*[_type == "experience" && defined(slug.current)]{ "slug": slug.current }`, 'experiences'),
  ])

  return {
    destinations: mergeDestinations(localDestinations, sanityDestinations),
    tourPackages: mergeBySlug(localTourPackages, sanityTourPackages),
    stories: mergeBySlug(localStories, sanityStories),
    experiences: mergeBySlug(localExperienceSlugs, sanityExperiences),
  }
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
