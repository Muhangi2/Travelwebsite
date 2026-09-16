// Regenerates public/llms.txt before every build — a plain-markdown summary of the site
// aimed at LLMs, per the emerging https://llmstxt.org convention. Reads live content
// straight from Sanity.
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
    console.warn(`[llms.txt] Sanity fetch for ${label} failed:`, err.message)
    return []
  }
}

function section(title, lines) {
  if (!lines.length) return ''
  return `## ${title}\n\n${lines.join('\n')}\n\n`
}

async function main() {
  const [tourPackages, destinations, experiences, stories] = await Promise.all([
    fetchSanity(
      `*[_type == "tourPackage" && defined(slug.current)]{ title, subtitle, "slug": slug.current }`,
      'tour packages',
    ),
    fetchSanity(
      `*[_type == "destination" && defined(slug.current)]{ name, heroSubtitle, "slug": slug.current, parks[]{ name, blurb, "slug": slug.current } }`,
      'destinations',
    ),
    fetchSanity(
      `*[_type == "experience" && defined(slug.current)]{ shortTitle, excerpt, "slug": slug.current }`,
      'experiences',
    ),
    fetchSanity(
      `*[_type == "story" && defined(slug.current)]{ title, excerpt, "slug": slug.current }`,
      'stories',
    ),
  ])

  const collectionLines = tourPackages.map(
    (j) => `- [${(j.title ?? '').replace('\n', ' ')}](${BASE_URL}/safari-collections/${j.slug}): ${j.subtitle ?? ''}`,
  )

  const destinationLines = destinations.flatMap((c) => [
    `- [${c.name}](${BASE_URL}/destinations/${c.slug}): ${c.heroSubtitle ?? ''}`,
    ...(c.parks ?? []).map((p) => `  - [${p.name}](${BASE_URL}/destinations/${c.slug}/${p.slug}): ${p.blurb ?? ''}`),
  ])

  const experienceLines = experiences.map(
    (e) => `- [${e.shortTitle}](${BASE_URL}/experiences/${e.slug}): ${e.excerpt ?? ''}`,
  )

  const storyLines = stories.map((a) => `- [${a.title}](${BASE_URL}/stories/${a.slug}): ${a.excerpt ?? ''}`)

  const moreLines = [
    `- [About](${BASE_URL}/about)`,
    `- [Know Before You Go](${BASE_URL}/know-before-you-go): Visa requirements, health advice, packing list, pricing and cancellation policy.`,
    `- [Work With Us](${BASE_URL}/work-with-us)`,
    `- [Contact](${BASE_URL}/contact)`,
  ]

  const body = [
    '# Still Wild Safaris',
    '',
    '> Bespoke luxury safari experiences in Uganda, Rwanda and Kenya. Expert-guided gorilla trekking, wildlife safaris and cultural journeys.',
    '',
    'Still Wild Safaris designs private, expert-guided safaris across Uganda, Rwanda and Kenya, including gorilla and chimpanzee trekking, Big Five game drives, and tailor-made itineraries with hand-selected luxury and mid-range lodges.',
    '',
    section('Safari Collections', collectionLines),
    section('Destinations', destinationLines),
    section('Experiences', experienceLines),
    section('Stories', storyLines),
    section('More', moreLines),
  ]
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trimEnd()

  const outPath = path.join(rootDir, 'public', 'llms.txt')
  writeFileSync(outPath, `${body}\n`)
  console.log(
    `[llms.txt] wrote ${collectionLines.length} collections, ${destinationLines.length} destination entries, ${experienceLines.length} experiences, ${storyLines.length} stories`,
  )
}

main()
