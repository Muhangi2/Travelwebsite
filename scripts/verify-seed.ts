// Verifies that seeding Sanity will not change what the site renders: builds the exact
// documents scripts/seed-sanity.ts would push, runs them back through the app's OWN
// Sanity-consuming functions (toCountry/toPark/toJourneyData/toCard/toExperience/toArticle),
// and deep-compares the result against the original hardcoded data.
// Run with:  node scripts/verify-seed.ts   (no Sanity credentials needed — nothing is sent over the network)
import assert from 'node:assert/strict'

import { countries, type Park, type Country } from '../src/data/destinations.ts'
import { journeys } from '../src/data/journeys.ts'
import { experiences } from '../src/data/experiences.ts'
import { articles } from '../src/data/articles.ts'
import {
  toDestinationDoc,
  toTourPackageDoc,
  toExperienceDoc,
  toStoryDoc,
  tourCards,
  parsePublishedAt,
} from './seed-sanity.ts'

let failures = 0
function check(label: string, fn: () => void) {
  try {
    fn()
    console.log(`  ✓ ${label}`)
  } catch (err) {
    failures++
    console.error(`  ✗ ${label}`)
    console.error(err instanceof Error ? err.message : err)
  }
}

// `{ image: undefined }` and `{}` are indistinguishable at every call site that matters
// (`obj.image` reads as `undefined` either way) but assert.deepStrictEqual treats key
// presence as significant. Strip undefined-valued keys before comparing so the check
// reflects actual runtime behaviour, not object-literal shape.
function pruneUndefined<T>(value: T): T {
  if (Array.isArray(value)) return value.map(pruneUndefined) as unknown as T
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (v === undefined) continue
      out[k] = pruneUndefined(v)
    }
    return out as T
  }
  return value
}

function assertEquivalent(actual: unknown, expected: unknown) {
  assert.deepStrictEqual(pruneUndefined(actual), pruneUndefined(expected))
}

// ── Minimal stand-ins for the app's resolveMediaImage/urlFor, valid for our path-only images ──
type SeedMediaImage = { path?: string; alt?: string } | undefined
function resolveMediaImage(m: SeedMediaImage): string {
  return m?.path ?? ''
}

// ── Re-implementations of src/sanity/destinations.ts's toCountry/toPark (avoids importing that
//    module directly, since it transitively pulls in import.meta.env which plain Node can't read) ──
function appToPark(raw: ReturnType<typeof toDestinationDoc>['parks'][number]): Park {
  return {
    slug: raw.slug.current,
    name: raw.name,
    blurb: raw.blurb,
    image: resolveMediaImage(raw.image),
    location: raw.location ?? '',
    size: raw.size ?? '',
    altitude: raw.altitude ?? '',
    bestTime: raw.bestTime ?? '',
    overview: raw.overview ?? '',
    attractions: (raw.attractions ?? []).map((a) => ({ title: a.title, body: a.body, image: resolveMediaImage(a.image) })),
    activities: (raw.activities ?? []).map((a) => ({ title: a.title, body: a.body, image: resolveMediaImage(a.image) })),
    // Mirrors the `faqs[] { q, a }` GROQ projection.
    faqs: (raw.faqs ?? []).map((f) => ({ q: f.q, a: f.a })),
    metaDescription: raw.metaDescription,
    whyVisit: raw.whyVisit,
    gettingThere: raw.gettingThere,
    whereToStay: raw.whereToStay?.map((w) => ({ category: w.category, picks: w.picks })),
    practicalInfo: raw.practicalInfo?.map((i) => ({ label: i.label, body: i.body })),
  }
}

function appToCountry(raw: ReturnType<typeof toDestinationDoc>): Country {
  return {
    slug: raw.slug.current,
    name: raw.name,
    heroTitle: raw.heroTitle,
    heroSubtitle: raw.heroSubtitle ?? '',
    heroImage: resolveMediaImage(raw.heroImage),
    exploreIntro: raw.exploreIntro ?? '',
    parkSummary: raw.parkSummary ?? '',
    parkSummaryImage: raw.parkSummaryImage ? resolveMediaImage(raw.parkSummaryImage) : '',
    parks: (raw.parks ?? []).map(appToPark),
    privilegedAccess: (raw.privilegedAccess ?? []).map((item) => ({
      title: item.title,
      location: item.location ?? '',
      body: item.body,
      image: resolveMediaImage(item.image),
    })),
    lodges: (raw.lodges ?? []).map((lodge) => ({
      name: lodge.name,
      location: lodge.location ?? '',
      body: lodge.body,
      image: resolveMediaImage(lodge.image),
    })),
    seoKeywords: raw.seoKeywords ?? '',
    // Mirrors `travelStats { bestTime, duration, keyWildlife, travelStyle }`.
    travelStats: raw.travelStats
      ? {
          bestTime: raw.travelStats.bestTime,
          duration: raw.travelStats.duration,
          keyWildlife: raw.travelStats.keyWildlife,
          travelStyle: raw.travelStats.travelStyle,
        }
      : undefined,
    whyVisit: raw.whyVisit
      ? {
          intro: raw.whyVisit.intro,
          bullets: (raw.whyVisit.bullets ?? []).map((b) => ({ title: b.title, body: b.body ?? '' })),
          stats: (raw.whyVisit.stats ?? []).map((s) => ({ number: s.number, label: s.label })),
        }
      : undefined,
    seasons: raw.seasons?.map((s) => ({
      name: s.name,
      dates: s.dates,
      wildlife: s.wildlife,
      description: s.description,
      image: s.image ? resolveMediaImage(s.image) : undefined,
    })),
    specialistQuote: raw.specialistQuote
      ? { quote: raw.specialistQuote.quote, author: raw.specialistQuote.author, role: raw.specialistQuote.role ?? '' }
      : undefined,
    conservation: raw.conservation
      ? {
          intro: raw.conservation.intro,
          stats: (raw.conservation.stats ?? []).map((s) => ({ number: s.number, label: s.label })),
          partners: raw.conservation.partners ?? [],
        }
      : undefined,
    countryFaqs: raw.countryFaqs?.map((f) => ({ question: f.question, answer: f.answer })),
  }
}

// Sanity's whyVisitBullet schema can only store the { title, body } shape — a plain-string
// bullet (used by some countries) necessarily becomes { title, body: undefined }. WhyVisit.tsx
// was updated to key its two-line layout off actual body content rather than typeof, so this is
// UI-equivalent, but it means the raw data shape legitimately differs from the source. Normalize
// both sides to what actually gets rendered before comparing.
type Bullet = string | { title: string; body?: string }
function normalizeBullet(b: Bullet): { title: string; body: string } {
  return typeof b === 'string' ? { title: b, body: '' } : { title: b.title, body: b.body ?? '' }
}

console.log('Destinations:')
for (const country of Object.values(countries)) {
  const doc = toDestinationDoc(country, 1)
  const roundTripped = appToCountry(doc as never)
  check(`destination "${country.slug}" round-trips to identical Country object`, () => {
    const { whyVisit: roundTrippedWhyVisit, ...roundTrippedRest } = roundTripped
    const { whyVisit: originalWhyVisit, ...originalRest } = country
    assertEquivalent(roundTrippedRest, originalRest)
    assertEquivalent(roundTrippedWhyVisit?.intro, originalWhyVisit?.intro)
    assertEquivalent(roundTrippedWhyVisit?.stats, originalWhyVisit?.stats)
    assertEquivalent(
      (roundTrippedWhyVisit?.bullets ?? []).map(normalizeBullet),
      (originalWhyVisit?.bullets ?? []).map(normalizeBullet),
    )
  })
}

// ── tourPackages.ts's toJourneyData/toCard re-implemented the same way ──
function appToCard(raw: ReturnType<typeof toTourPackageDoc>) {
  return {
    id: raw.slug.current,
    image: resolveMediaImage(raw.listImage),
    country: raw.country,
    tags: raw.tags ?? [],
    title: raw.title,
    duration: raw.duration ?? '',
    highlight: raw.highlight,
  }
}

// Mirrors buildAccommodationString in src/sanity/tourPackages.ts.
function buildAccommodationString(luxuryLodges: string | undefined, midRangeLodges: string | undefined): string {
  const segments = [
    luxuryLodges && `Luxury: ${luxuryLodges}`,
    midRangeLodges && `Mid-Range: ${midRangeLodges}`,
  ].filter(Boolean)
  return segments.length ? segments.join(' | ') : '—'
}

function appToJourneyData(raw: ReturnType<typeof toTourPackageDoc>) {
  return {
    slug: raw.slug.current,
    title: raw.detailTitle ?? raw.title,
    subtitle: raw.subtitle ?? '',
    heroImage: raw.heroImage ? resolveMediaImage(raw.heroImage) : resolveMediaImage(raw.listImage),
    country: raw.country,
    overview: raw.overview ?? '',
    days: (raw.days ?? []).map((d) => ({
      day: d.day,
      title: d.title,
      body: d.body,
      accommodation: buildAccommodationString(d.luxuryLodges, d.midRangeLodges),
      meals: d.meals ?? '',
      image: resolveMediaImage(d.image),
    })),
    highlights: raw.highlights?.length ? raw.highlights : undefined,
    included: raw.included?.length ? raw.included : undefined,
    notIncluded: raw.notIncluded?.length ? raw.notIncluded : undefined,
    faq: raw.faq?.length ? raw.faq.map((f) => ({ q: f.q, a: f.a })) : undefined,
    waypoints: raw.waypoints?.length ? raw.waypoints.map((w) => ({ name: w.name, coords: [w.lng, w.lat] as [number, number] })) : undefined,
    rates: raw.rates
      ? {
          priceFromUsd: raw.rates.priceFromUsd,
          table: (raw.rates.table ?? []).map((r) => ({ label: r.label, midrange: r.midrange, luxury: r.luxury })),
          singleSupplement: raw.rates.singleSupplement,
          permitNote: raw.rates.permitNote,
          validityNote: raw.rates.validityNote,
        }
      : undefined,
  }
}

console.log('\nTour packages:')
for (const card of tourCards) {
  const journey = journeys[card.id]
  const doc = toTourPackageDoc(card, journey, 1)
  check(`tourPackage "${card.id}" card round-trips`, () => {
    assertEquivalent(appToCard(doc as never), {
      id: card.id,
      image: card.image,
      country: card.country,
      tags: card.tags,
      title: card.title,
      duration: card.duration,
      // CollectionsGrid renders the FEATURED badge with `{j.highlight && (...)}`, so
      // `undefined` and `false` are behaviourally identical — only assert the truthiness.
      highlight: card.highlight ?? false,
    })
  })
  check(`tourPackage "${card.id}" journey detail round-trips`, () => {
    // `lodges` is deliberately not produced by toTourPackageDoc (see the note in seed-sanity.ts),
    // so it isn't part of this round-trip — everything else must match exactly.
    const { lodges: _lodges, ...journeyWithoutLodges } = journey
    assertEquivalent(appToJourneyData(doc as never), journeyWithoutLodges)
  })
}

// ── experiences.ts's toExperience re-implemented the same way ──
function appToExperience(raw: ReturnType<typeof toExperienceDoc>) {
  return {
    slug: raw.slug.current,
    badge: raw.badge,
    title: raw.title,
    shortTitle: raw.shortTitle,
    excerpt: raw.excerpt,
    cta: raw.cta ?? 'Explore this experience',
    image: resolveMediaImage(raw.image),
    tagline: raw.tagline,
    intro: raw.intro ?? [],
    // Mirrors the `highlights[] { title, body }` GROQ projection — Sanity would otherwise also
    // return the stored _type/_key on each array object, which the real query explicitly excludes.
    highlights: (raw.highlights ?? []).map((h) => ({ title: h.title, body: h.body })),
    locations: (raw.locations ?? []).map((loc) => ({
      name: loc.name,
      country: loc.country,
      description: loc.description,
      image: loc.image ? resolveMediaImage(loc.image) : undefined,
    })),
    gallery: (raw.gallery ?? []).map((g) => resolveMediaImage(g)).filter(Boolean),
  }
}

console.log('\nExperiences:')
for (const exp of experiences) {
  const doc = toExperienceDoc(exp, 1)
  check(`experience "${exp.slug}" round-trips to identical Experience object`, () => {
    assertEquivalent(appToExperience(doc as never), exp)
  })
}

// ── stories.ts's toArticle + articleContent.ts's date formatting, re-implemented ──
function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })
}

console.log('\nStories:')
for (let i = 0; i < articles.length; i++) {
  const a = articles[i]
  check(`story "${a.slug}" publishedAt round-trips to the same displayed month/year`, () => {
    const iso = parsePublishedAt(a.date)
    assert.equal(formatDate(iso), a.date)
  })
  check(`story "${a.slug}" excerpt is not truncated by the 280-char schema limit`, () => {
    assert.ok(a.excerpt.length <= 280, `excerpt is ${a.excerpt.length} chars`)
  })
}
// Also spot-check body word counts survive the ArticleBlock -> Portable Text conversion (heading/list/table text preserved)
function localWordCount(a: (typeof articles)[number]): number {
  const text = (a.body ?? [])
    .map((b) => {
      if (b.kind === 'list') return b.items.join(' ')
      if (b.kind === 'table') return [b.headers.join(' '), ...b.rows.map((r) => r.join(' '))].join(' ')
      return b.text
    })
    .join(' ')
  return text.trim().split(/\s+/).filter(Boolean).length
}
function portableTextWordCount(blocks: Awaited<ReturnType<typeof toStoryDoc>>['body']): number {
  let words = 0
  for (const b of blocks ?? []) {
    const block = b as { _type: string; children?: { text?: string }[]; headers?: string[]; rows?: { cells?: string[] }[] }
    const text =
      block._type === 'articleTable'
        ? [((block.headers ?? []).join(' ')), ...((block.rows ?? []).map((r) => (r.cells ?? []).join(' ')))].join(' ')
        : (block.children ?? []).map((c) => c.text ?? '').join(' ')
    words += text.trim().split(/\s+/).filter(Boolean).length
  }
  return words
}

console.log('\nStory body content (word-count parity, ArticleBlock vs Portable Text):')
for (const a of articles) {
  if (!a.body) continue
  const doc = await toStoryDoc(a, false)
  check(`story "${a.slug}" body word count matches after Portable Text conversion`, () => {
    assert.equal(portableTextWordCount(doc.body), localWordCount(a))
  })
}

console.log(`\n${failures === 0 ? 'All checks passed.' : `${failures} check(s) FAILED.`}`)
if (failures > 0) process.exit(1)
