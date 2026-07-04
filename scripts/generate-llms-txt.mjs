// Regenerates public/llms.txt before every build — a plain-markdown summary of the site
// aimed at LLMs, per the emerging https://llmstxt.org convention. Built from local data
// only (not Sanity), same reasoning as generate-sitemap.mjs: local slugs are the ones
// confirmed to render today, so this stays in sync with what's actually live.
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

import { countries } from '../src/data/destinations.ts'
import { journeys } from '../src/data/journeys.ts'
import { articles } from '../src/data/articles.ts'
import { experiences } from '../src/data/experiences.ts'

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const BASE_URL = 'https://stillwildsafaris.com'

function section(title, lines) {
  if (!lines.length) return ''
  return `## ${title}\n\n${lines.join('\n')}\n\n`
}

function main() {
  const collectionLines = Object.entries(journeys).map(
    ([slug, j]) => `- [${j.title.replace('\n', ' ')}](${BASE_URL}/safari-collections/${slug}): ${j.subtitle}`,
  )

  const destinationLines = Object.values(countries).flatMap((c) => [
    `- [${c.name}](${BASE_URL}/destinations/${c.slug}): ${c.heroSubtitle}`,
    ...c.parks.map((p) => `  - [${p.name}](${BASE_URL}/destinations/${c.slug}/${p.slug}): ${p.blurb}`),
  ])

  const experienceLines = experiences.map(
    (e) => `- [${e.shortTitle}](${BASE_URL}/experiences/${e.slug}): ${e.excerpt}`,
  )

  const storyLines = articles.map((a) => `- [${a.title}](${BASE_URL}/stories/${a.slug}): ${a.excerpt}`)

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
