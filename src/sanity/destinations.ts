import { useEffect, useState } from 'react'
import { countries as localCountries, type Country, type Park } from '@/data/destinations'
import { sanityClient } from './client'
import { allDestinationsQuery, destinationBySlugQuery } from './queries'
import type { SanityDestination, SanityPark } from './types'
import { resolveMediaImage } from './utils/media'

export function toPark(raw: SanityPark): Park {
  return {
    slug: raw.slug,
    name: raw.name,
    blurb: raw.blurb,
    image: resolveMediaImage(raw.image, 1200),
    location: raw.location ?? '',
    size: raw.size ?? '',
    altitude: raw.altitude ?? '',
    bestTime: raw.bestTime ?? '',
    overview: raw.overview ?? '',
    attractions: (raw.attractions ?? []).map((a) => ({
      title: a.title,
      body: a.body,
      image: resolveMediaImage(a.image, 900),
    })),
    activities: (raw.activities ?? []).map((a) => ({
      title: a.title,
      body: a.body,
      image: resolveMediaImage(a.image, 900),
    })),
    faqs: raw.faqs ?? [],
    metaDescription: raw.metaDescription,
    whyVisit: raw.whyVisit,
    gettingThere: raw.gettingThere,
    whereToStay: raw.whereToStay?.map((cat) => ({
      category: cat.category,
      picks: cat.picks.map((p) => ({
        name: p.name,
        description: p.description ?? '',
        image: p.image ? resolveMediaImage(p.image, 900) : undefined,
      })),
    })),
    practicalInfo: raw.practicalInfo,
  }
}

export function toCountry(raw: SanityDestination): Country {
  return {
    slug: raw.slug,
    name: raw.name,
    heroTitle: raw.heroTitle,
    heroSubtitle: raw.heroSubtitle ?? '',
    heroImage: resolveMediaImage(raw.heroImage, 1920),
    exploreIntro: raw.exploreIntro ?? '',
    parkSummary: raw.parkSummary ?? '',
    parkSummaryImage: raw.parkSummaryImage ? resolveMediaImage(raw.parkSummaryImage, 1200) : '',
    parks: (raw.parks ?? []).map(toPark),
    privilegedAccess: (raw.privilegedAccess ?? []).map((item) => ({
      title: item.title,
      location: item.location ?? '',
      body: item.body,
      image: resolveMediaImage(item.image, 900),
    })),
    lodges: (raw.lodges ?? []).map((lodge) => ({
      name: lodge.name,
      location: lodge.location ?? '',
      body: lodge.body ?? '',
      image: resolveMediaImage(lodge.image, 900),
    })),
    seoKeywords: raw.seoKeywords ?? '',
    travelStats: raw.travelStats
      ? {
          bestTime: raw.travelStats.bestTime ?? '',
          duration: raw.travelStats.duration ?? '',
          keyWildlife: raw.travelStats.keyWildlife ?? '',
          travelStyle: raw.travelStats.travelStyle ?? '',
        }
      : undefined,
    whyVisit: raw.whyVisit
      ? {
          intro: raw.whyVisit.intro,
          bullets: (raw.whyVisit.bullets ?? []).map((b) => ({ title: b.title, body: b.body ?? '' })),
          stats: raw.whyVisit.stats ?? [],
        }
      : undefined,
    seasons: raw.seasons?.map((s) => ({
      name: s.name,
      dates: s.dates,
      wildlife: s.wildlife,
      description: s.description,
      image: s.image ? resolveMediaImage(s.image, 900) : undefined,
    })),
    specialistQuote: raw.specialistQuote
      ? {
          quote: raw.specialistQuote.quote,
          author: raw.specialistQuote.author,
          role: raw.specialistQuote.role ?? '',
        }
      : undefined,
    conservation: raw.conservation
      ? {
          intro: raw.conservation.intro,
          stats: raw.conservation.stats ?? [],
          partners: raw.conservation.partners ?? [],
        }
      : undefined,
    countryFaqs: raw.countryFaqs?.map((f) => ({ question: f.question, answer: f.answer })),
  }
}

function toRecord(items: Country[]): Record<string, Country> {
  return Object.fromEntries(items.map((c) => [c.slug, c]))
}

export function useCountries(): { countries: Record<string, Country>; list: Country[]; loading: boolean } {
  const [countries, setCountries] = useState<Record<string, Country>>(localCountries)
  const [loading, setLoading] = useState(Boolean(sanityClient))

  useEffect(() => {
    if (!sanityClient) return
    let cancelled = false
    sanityClient
      .fetch<SanityDestination[]>(allDestinationsQuery)
      .then((data) => {
        if (cancelled || !data?.length) return
        setCountries(toRecord(data.map(toCountry)))
      })
      .catch((err) => {
        console.warn('Sanity destinations fetch failed, using local data:', err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return { countries, list: Object.values(countries), loading }
}

export function useCountry(slug: string | undefined): { country: Country | null; loading: boolean } {
  const [country, setCountry] = useState<Country | null>(() => {
    if (!slug) return null
    return localCountries[slug] ?? null
  })
  const [loading, setLoading] = useState(Boolean(sanityClient && slug))

  useEffect(() => {
    if (!sanityClient || !slug) return
    let cancelled = false
    sanityClient
      .fetch<SanityDestination | null>(destinationBySlugQuery, { slug })
      .then((data) => {
        if (cancelled || !data) return
        setCountry(toCountry(data))
      })
      .catch((err) => {
        console.warn('Sanity destination fetch failed, using local data:', err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [slug])

  return { country, loading }
}
