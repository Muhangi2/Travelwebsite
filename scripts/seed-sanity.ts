// One-off migration: push the hardcoded content in src/data/*.ts into Sanity.
// Run with:  node --env-file=.env.local scripts/seed-sanity.ts
import { createClient, type SanityClient } from '@sanity/client'
import { randomUUID } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

import { countries, type Country, type Park } from '../src/data/destinations.ts'
import { journeys, type JourneyData } from '../src/data/journeys.ts'
import { experiences, type Experience } from '../src/data/experiences.ts'
import { articles, type Article, type ArticleBlock } from '../src/data/articles.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC_DIR = join(__dirname, '..', 'public')

// Client is created lazily (only when actually seeding, not when this module is imported
// for verification) so importing the builder functions below never requires env vars or
// makes a network call.
let client: SanityClient | null = null
function getClient(): SanityClient {
  if (client) return client
  const projectId = process.env.VITE_SANITY_PROJECT_ID
  const dataset = process.env.VITE_SANITY_DATASET || 'production'
  const apiVersion = process.env.VITE_SANITY_API_VERSION || '2025-01-01'
  const token = process.env.SANITY_API_KEY
  if (!projectId || !token) {
    throw new Error('Missing VITE_SANITY_PROJECT_ID or SANITY_API_KEY — set them in .env.local and run with --env-file=.env.local')
  }
  client = createClient({ projectId, dataset, apiVersion, token, useCdn: false })
  return client
}

const key = () => randomUUID()

type MediaImage = { _type: 'mediaImage'; path: string; alt: string } | undefined
export function img(path: string | undefined, alt = ''): MediaImage {
  if (!path) return undefined
  return { _type: 'mediaImage', path, alt }
}

// ── Uploaded-asset cache (only used for story mainImages, which need a real Sanity asset) ──
const assetCache = new Map<string, string>()

async function uploadImage(publicPath: string): Promise<{ _type: 'image'; asset: { _type: 'reference'; _ref: string } } | undefined> {
  if (!publicPath) return undefined
  const cached = assetCache.get(publicPath)
  if (cached) return { _type: 'image', asset: { _type: 'reference', _ref: cached } }

  const filePath = join(PUBLIC_DIR, publicPath.replace(/^\//, ''))
  if (!existsSync(filePath)) {
    console.warn(`  ! missing local file, skipping upload: ${filePath}`)
    return undefined
  }
  let uploadingClient: SanityClient
  try {
    uploadingClient = getClient()
  } catch {
    // No credentials configured (e.g. running scripts/verify-seed.ts without a token) — skip
    // the upload rather than fail; callers that need the real asset run this via `main()`.
    return undefined
  }
  const buffer = readFileSync(filePath)
  const filename = publicPath.split('/').pop()!
  const asset = await uploadingClient.assets.upload('image', buffer, { filename })
  assetCache.set(publicPath, asset._id)
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
}

// ───────────────────────────── Destinations ─────────────────────────────

export function toPark(p: Park) {
  return {
    _type: 'park',
    _key: key(),
    slug: { _type: 'slug', current: p.slug },
    name: p.name,
    blurb: p.blurb,
    image: img(p.image, p.name),
    location: p.location,
    size: p.size,
    altitude: p.altitude,
    bestTime: p.bestTime,
    overview: p.overview,
    attractions: (p.attractions ?? []).map((a) => ({
      _type: 'parkAttraction',
      _key: key(),
      title: a.title,
      body: a.body,
      image: img(a.image, a.title),
    })),
    activities: (p.activities ?? []).map((a) => ({
      _type: 'parkActivity',
      _key: key(),
      title: a.title,
      body: a.body,
      image: img(a.image, a.title),
    })),
    faqs: (p.faqs ?? []).map((f) => ({ _type: 'faqItem', _key: key(), q: f.q, a: f.a })),
    metaDescription: p.metaDescription,
    whyVisit: p.whyVisit,
    gettingThere: p.gettingThere,
    whereToStay: p.whereToStay?.map((w) => ({ _type: 'whereToStayCategory', _key: key(), category: w.category, picks: w.picks })),
    practicalInfo: p.practicalInfo?.map((i) => ({ _type: 'practicalInfoItem', _key: key(), label: i.label, body: i.body })),
  }
}

export function toDestinationDoc(c: Country, sortOrder: number) {
  return {
    _id: `destination-${c.slug}`,
    _type: 'destination',
    name: c.name,
    slug: { _type: 'slug', current: c.slug },
    heroTitle: c.heroTitle,
    heroSubtitle: c.heroSubtitle,
    heroImage: img(c.heroImage, c.name),
    exploreIntro: c.exploreIntro,
    parkSummary: c.parkSummary,
    parkSummaryImage: img(c.parkSummaryImage, c.name),
    parks: (c.parks ?? []).map(toPark),
    privilegedAccess: (c.privilegedAccess ?? []).map((pa) => ({
      _type: 'privilegedAccess',
      _key: key(),
      title: pa.title,
      location: pa.location,
      body: pa.body,
      image: img(pa.image, pa.title),
    })),
    lodges: (c.lodges ?? []).map((l) => ({
      _type: 'lodge',
      _key: key(),
      name: l.name,
      location: l.location,
      body: l.body,
      image: img(l.image, l.name),
    })),
    travelStats: c.travelStats ? { _type: 'travelStats', ...c.travelStats } : undefined,
    whyVisit: c.whyVisit
      ? {
          _type: 'whyVisit',
          intro: c.whyVisit.intro,
          bullets: (c.whyVisit.bullets ?? []).map((b) =>
            typeof b === 'string'
              ? { _type: 'whyVisitBullet', _key: key(), title: b, body: undefined }
              : { _type: 'whyVisitBullet', _key: key(), title: b.title, body: b.body },
          ),
          stats: (c.whyVisit.stats ?? []).map((s) => ({ _type: 'statItem', _key: key(), number: s.number, label: s.label })),
        }
      : undefined,
    seasons: (c.seasons ?? []).map((s) => ({
      _type: 'season',
      _key: key(),
      name: s.name,
      dates: s.dates,
      wildlife: s.wildlife,
      description: s.description,
      image: img(s.image, s.name),
    })),
    specialistQuote: c.specialistQuote ? { _type: 'specialistQuote', ...c.specialistQuote } : undefined,
    conservation: c.conservation
      ? {
          _type: 'conservation',
          intro: c.conservation.intro,
          stats: (c.conservation.stats ?? []).map((s) => ({ _type: 'statItem', _key: key(), number: s.number, label: s.label })),
          partners: c.conservation.partners,
        }
      : undefined,
    countryFaqs: (c.countryFaqs ?? []).map((f) => ({ _type: 'countryFaq', _key: key(), question: f.question, answer: f.answer })),
    seoKeywords: c.seoKeywords,
    sortOrder,
  }
}

// ───────────────────────────── Tour packages ─────────────────────────────

type TourCard = {
  id: string
  image: string
  country?: string
  tags: string[]
  title: string
  duration: string
  highlight?: boolean
}

// Mirrors the listing-card metadata hardcoded in src/components/collections/CollectionsGrid.tsx —
// duration/tags/highlight/listing-image live there rather than in src/data/journeys.ts.
export const tourCards: TourCard[] = [
  { id: '2-day-rwanda-gorilla', image: '/images/activities/gorilla-trekking/1-mgl-gorilla-bb.jpg', country: 'RWANDA · UGANDA', tags: ['Luxury Adventure'], title: '2 Days from Rwanda to the Mountain Gorillas', duration: '2 Days / 1 Night' },
  { id: '3-day-kigali-gorilla', image: '/images/activities/gorilla-trekking/4-mgl-gorilla-bb.jpg', country: 'RWANDA · UGANDA', tags: ['Luxury Adventure', 'Photography Focus'], title: '3 Days from Kigali into Gorilla Country', duration: '3 Days / 2 Nights' },
  { id: '4-day-rwanda-uganda-primate', image: '/images/activities/gorilla-trekking/35-mount-gahinga-lodge-golden-monkey.jpg', country: 'RWANDA · UGANDA', tags: ['Luxury Adventure', 'Photography Focus'], title: '4-Day Rwanda–Uganda Primate Safari', duration: '4 Days / 3 Nights' },
  { id: '5-day-kigali-great-apes', image: '/images/activities/gorilla-trekking/18-kibale-lodge-chimpanzee-tadevs-vs-08183.jpg', country: 'RWANDA · UGANDA', tags: ['Luxury Adventure', 'Family-Friendly', 'Photography Focus'], title: "5 Days from Kigali Among Uganda's Great Apes", duration: '5 Days / 4 Nights', highlight: true },
  { id: '3-day-classic-uganda-gorilla', image: '/images/activities/gorilla-trekking/8-gorilla-ah1i2661.jpg', country: 'UGANDA', tags: ['Luxury Adventure', 'Family-Friendly'], title: '3-Day Classic Uganda Gorilla Safari', duration: '3 Days / 2 Nights' },
  { id: '3-day-kigali-uganda-gorilla', image: '/images/activities/gorilla-trekking/11-gorilla-ah1i2713.jpg', country: 'RWANDA · UGANDA', tags: ['Luxury Adventure'], title: '3-Day Gorilla Safari — Kigali to Uganda', duration: '3 Days / 2 Nights' },
  { id: '4-day-luxury-flyin-gorilla', image: '/images/activities/gorilla-trekking/10-gorilla-ah1i2740.jpg', country: 'UGANDA', tags: ['Luxury Adventure'], title: '4-Day Luxury Uganda Gorilla Trekking (Fly-In)', duration: '4 Days / 3 Nights' },
  { id: '8-day-western-circuit-primate', image: '/images/activities/gorilla-trekking/19-chimp-kya-bbp-img-20190218-wa0007.jpg', country: 'UGANDA', tags: ['Luxury Adventure', 'Family-Friendly', 'Photography Focus'], title: '8-Day Western Circuit Primate & Wildlife', duration: '8 Days / 7 Nights', highlight: true },
  { id: '10-day-grand-uganda-safari', image: '/images/parks/uganda/murchison-falls/mf-1.jpg', country: 'UGANDA', tags: ['Luxury Adventure', 'Family-Friendly', 'Photography Focus'], title: '10-Day Grand Uganda Safari — The Complete Loop', duration: '10 Days / 9 Nights' },
  { id: '9-day-rhythm-roots', image: '/images/parks/uganda/murchison-falls/dsc-7062.jpg', country: 'UGANDA', tags: ['Photography Focus'], title: 'Rhythm & Roots — 9-Day Creative Safari', duration: '9 Days / 8 Nights' },
  { id: '11-day-primate-fishing', image: '/images/parks/uganda/murchison-falls/dsc-6828.jpg', country: 'UGANDA', tags: ['Luxury Adventure', 'Family-Friendly'], title: 'Uganda Primate & Fishing Safari — 11 Days', duration: '11 Days / 10 Nights' },
  { id: '7-day-shoebill-primates', image: '/images/activities/gorilla-trekking/33-mount-gahinga-lodge-gorilla.jpg', country: 'UGANDA', tags: ['Luxury Adventure', 'Photography Focus'], title: '7-Day Shoebill & Primates Fly-In Safari', duration: '7 Days / 6 Nights' },
  { id: 'deep-dive-creative', image: '/images/parks/uganda/murchison-falls/dsc-7442.jpg', country: 'UGANDA', tags: ['Photography Focus'], title: 'The Deep Dive — 12-Day Creative Residency', duration: '12 Days / 11 Nights' },
  { id: 'wild-muse-creative', image: '/images/parks/uganda/murchison-falls/dsc-6828.jpg', country: 'UGANDA', tags: ['Photography Focus'], title: 'The Wild Muse — 7-Day Creative Safari', duration: '7 Days / 6 Nights' },
]

const TIER_LABEL_TO_VALUE: Record<string, string> = {
  Luxury: 'luxury',
  'Mid-Range': 'midRange',
  Budget: 'budget',
  'Fly Camp': 'flyCamp',
}

export function parseAccommodation(raw: string): { accommodationTier?: string; accommodation?: string } {
  if (!raw || raw === '—') return { accommodationTier: 'none' }
  const m = raw.match(/^(Luxury|Mid-Range|Budget|Fly Camp):\s*(.*)$/)
  if (!m) return { accommodation: raw }
  return { accommodationTier: TIER_LABEL_TO_VALUE[m[1]], accommodation: m[2] }
}

export function toTourPackageDoc(card: TourCard, journey: JourneyData, sortOrder: number) {
  return {
    _id: `tourPackage-${card.id}`,
    _type: 'tourPackage',
    title: card.title,
    slug: { _type: 'slug', current: card.id },
    country: card.country,
    duration: card.duration,
    tags: card.tags,
    highlight: card.highlight ?? false,
    listImage: img(card.image, card.title),
    detailTitle: journey.title !== card.title ? journey.title : undefined,
    subtitle: journey.subtitle,
    heroImage: img(journey.heroImage, card.title),
    overview: journey.overview,
    days: (journey.days ?? []).map((d) => {
      const { accommodationTier, accommodation } = parseAccommodation(d.accommodation)
      return {
        _type: 'journeyDay',
        _key: key(),
        day: d.day,
        title: d.title,
        body: d.body,
        accommodationTier,
        accommodation,
        meals: d.meals,
        image: img(d.image, d.title),
      }
    }),
    highlights: journey.highlights,
    included: journey.included,
    notIncluded: journey.notIncluded,
    faq: (journey.faq ?? []).map((f) => ({ _type: 'faqItem', _key: key(), q: f.q, a: f.a })),
    waypoints: (journey.waypoints ?? []).map((w) => ({
      _type: 'routeWaypoint',
      _key: key(),
      name: w.name,
      lng: w.coords[0],
      lat: w.coords[1],
    })),
    sortOrder,
  }
}

// ───────────────────────────── Experiences ─────────────────────────────

export function toExperienceDoc(e: Experience, sortOrder: number) {
  return {
    _id: `experience-${e.slug}`,
    _type: 'experience',
    title: e.title,
    slug: { _type: 'slug', current: e.slug },
    badge: e.badge,
    shortTitle: e.shortTitle,
    excerpt: e.excerpt,
    cta: e.cta,
    image: img(e.image, e.title),
    tagline: e.tagline,
    intro: e.intro,
    highlights: (e.highlights ?? []).map((h) => ({ _type: 'experienceHighlight', _key: key(), title: h.title, body: h.body })),
    locations: (e.locations ?? []).map((l) => ({
      _type: 'experienceLocation',
      _key: key(),
      name: l.name,
      country: l.country,
      description: l.description,
      image: img(l.image, l.name),
    })),
    gallery: (e.gallery ?? []).map((g) => ({ _type: 'mediaImage', _key: key(), path: g, alt: e.title })),
    sortOrder,
  }
}

// ───────────────────────────── Stories ─────────────────────────────

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

// Local dates are display strings like "Jun 2026" (no day-of-month). Parsing that with the
// platform Date constructor resolves in the *server's* local timezone, which can roll the UTC
// instant back into the previous month (e.g. this script runs in Africa/Kampala, UTC+3) — and
// the site later re-renders that instant in the *visitor's* local timezone, so most Western
// visitors would see the wrong month. Anchor to noon UTC on the 1st instead, which is stable
// across every real-world timezone offset.
export function parsePublishedAt(display: string): string {
  const match = display.trim().match(/^([A-Za-z]{3,})\s+(\d{4})$/)
  if (!match) return new Date().toISOString()
  const monthIndex = MONTHS.indexOf(match[1].slice(0, 3).toLowerCase())
  const year = Number(match[2])
  if (monthIndex === -1 || Number.isNaN(year)) return new Date().toISOString()
  return new Date(Date.UTC(year, monthIndex, 1, 12, 0, 0)).toISOString()
}

function articleBlockToPortableText(block: ArticleBlock) {
  if (block.kind === 'heading') {
    return {
      _type: 'block',
      _key: key(),
      style: block.level === 2 ? 'h2' : 'h3',
      markDefs: [],
      children: [{ _type: 'span', _key: key(), text: block.text, marks: [] }],
    }
  }
  if (block.kind === 'list') {
    return block.items.map((item) => ({
      _type: 'block',
      _key: key(),
      style: 'normal',
      listItem: 'bullet',
      level: 1,
      markDefs: [],
      children: [{ _type: 'span', _key: key(), text: item, marks: [] }],
    }))
  }
  if (block.kind === 'table') {
    return {
      _type: 'articleTable',
      _key: key(),
      headers: block.headers,
      rows: block.rows.map((r) => ({ _type: 'tableRow', _key: key(), cells: r })),
    }
  }
  // paragraph
  return {
    _type: 'block',
    _key: key(),
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: key(), text: block.text, marks: [] }],
  }
}

export function toPortableTextBody(blocks: ArticleBlock[]) {
  const out: unknown[] = []
  for (const b of blocks) {
    const res = articleBlockToPortableText(b)
    if (Array.isArray(res)) out.push(...res)
    else out.push(res)
  }
  return out
}

export async function toStoryDoc(a: Article, featured: boolean) {
  const mainImage = await uploadImage(a.image)
  return {
    _id: `story-${a.slug}`,
    _type: 'story',
    title: a.title,
    slug: { _type: 'slug', current: a.slug },
    excerpt: a.excerpt.slice(0, 280),
    mainImage: mainImage ? { ...mainImage, alt: a.title } : undefined,
    author: a.author,
    publishedAt: parsePublishedAt(a.date),
    tags: a.tags,
    featured,
    body: a.body ? toPortableTextBody(a.body) : undefined,
    gallery: (a.gallery ?? []).map((g) => ({ _type: 'mediaImage', _key: key(), path: g, alt: a.title })),
  }
}

// ───────────────────────────── Runner ─────────────────────────────

async function pushDoc(doc: Record<string, unknown>) {
  try {
    await getClient().createOrReplace(doc as never)
    console.log(`  ✓ ${doc._type} ${doc._id}`)
  } catch (err) {
    console.error(`  ✗ ${doc._type} ${doc._id}:`, err instanceof Error ? err.message : err)
  }
}

async function main() {
  console.log(`Seeding Sanity project ${process.env.VITE_SANITY_PROJECT_ID}/${process.env.VITE_SANITY_DATASET || 'production'}\n`)

  console.log('Destinations:')
  const countryList = Object.values(countries)
  for (let i = 0; i < countryList.length; i++) {
    await pushDoc(toDestinationDoc(countryList[i], i + 1))
  }

  console.log('\nTour packages:')
  for (let i = 0; i < tourCards.length; i++) {
    const card = tourCards[i]
    const journey = journeys[card.id]
    if (!journey) {
      console.warn(`  ! no journey data for card "${card.id}", skipping`)
      continue
    }
    await pushDoc(toTourPackageDoc(card, journey, i + 1))
  }

  console.log('\nExperiences:')
  for (let i = 0; i < experiences.length; i++) {
    await pushDoc(toExperienceDoc(experiences[i], i + 1))
  }

  console.log('\nStories:')
  for (let i = 0; i < articles.length; i++) {
    const doc = await toStoryDoc(articles[i], i < 3)
    await pushDoc(doc)
  }

  console.log('\nDone.')
}

const isMainModule = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href
if (isMainModule) {
  main().catch((err) => {
    console.error(err)
    process.exit(1)
  })
}
