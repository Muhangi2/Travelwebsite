import { useEffect, useState } from 'react'
import type { JourneyDay } from '@/components/collection-detail/SafariJourney'
import type { JourneyData } from '@/data/journeys'
import { sanityClient } from './client'
import { allTourPackagesQuery, tourPackageBySlugQuery } from './queries'
import type { SanityTourPackage } from './types'
import { resolveMediaImage } from './utils/media'

export type TourPackageCard = {
  id: string
  image: string
  country?: string
  tags: string[]
  title: string
  duration: string
  highlight?: boolean
  priceFromUsd?: number
}

function buildAccommodationString(luxuryLodges: string | undefined, midRangeLodges: string | undefined): string {
  const segments = [
    luxuryLodges && `Luxury: ${luxuryLodges}`,
    midRangeLodges && `Mid-Range: ${midRangeLodges}`,
  ].filter(Boolean)
  return segments.length ? segments.join(' | ') : '—'
}

export function toJourneyData(raw: SanityTourPackage): JourneyData | null {
  if (!raw.days?.length) return null
  const hero = raw.heroImage ? resolveMediaImage(raw.heroImage, 1600) : resolveMediaImage(raw.listImage, 1600)
  return {
    slug: raw.slug,
    title: raw.detailTitle ?? raw.title,
    subtitle: raw.subtitle ?? '',
    heroImage: hero,
    country: raw.country,
    overview: raw.overview ?? '',
    days: raw.days.map(
      (d): JourneyDay => ({
        day: d.day,
        title: d.title,
        body: d.body,
        accommodation: buildAccommodationString(d.luxuryLodges, d.midRangeLodges),
        meals: d.meals ?? '',
        image: resolveMediaImage(d.image, 900),
      }),
    ),
    highlights: raw.highlights?.length ? raw.highlights : undefined,
    included: raw.included?.length ? raw.included : undefined,
    notIncluded: raw.notIncluded?.length ? raw.notIncluded : undefined,
    faq: raw.faq?.length ? raw.faq.map((f) => ({ q: f.q, a: f.a })) : undefined,
    waypoints: raw.waypoints?.length
      ? raw.waypoints.map((w) => ({ name: w.name, coords: [w.lng, w.lat] as [number, number] }))
      : undefined,
    rates: raw.rates
      ? {
          priceFromUsd: raw.rates.priceFromUsd,
          table: raw.rates.table ?? [],
          singleSupplement: raw.rates.singleSupplement,
          permitNote: raw.rates.permitNote,
          validityNote: raw.rates.validityNote,
        }
      : undefined,
    lodges: raw.lodges?.length
      ? raw.lodges.map((l) => ({
          name: l.name,
          location: l.location,
          tier: l.tier,
          body: l.body,
          image: resolveMediaImage(l.image, 800),
        }))
      : undefined,
  }
}

export function toCard(raw: SanityTourPackage): TourPackageCard {
  return {
    id: raw.slug,
    image: resolveMediaImage(raw.listImage, 800),
    country: raw.country,
    tags: raw.tags ?? [],
    title: raw.title,
    duration: raw.duration ?? '',
    highlight: raw.highlight,
    priceFromUsd: raw.rates?.priceFromUsd,
  }
}

export function useTourPackages(): { cards: TourPackageCard[]; journeys: Record<string, JourneyData>; loading: boolean } {
  const [cards, setCards] = useState<TourPackageCard[]>([])
  const [journeys, setJourneys] = useState<Record<string, JourneyData>>({})
  const [loading, setLoading] = useState(Boolean(sanityClient))

  useEffect(() => {
    if (!sanityClient) return
    let cancelled = false
    sanityClient
      .fetch<SanityTourPackage[]>(allTourPackagesQuery)
      .then((data) => {
        if (cancelled || !data?.length) return
        setCards(data.map(toCard))
        const detail: Record<string, JourneyData> = {}
        for (const item of data) {
          const journey = toJourneyData(item)
          if (journey) detail[item.slug] = journey
        }
        if (Object.keys(detail).length > 0) {
          setJourneys((prev) => ({ ...prev, ...detail }))
        }
      })
      .catch((err) => {
        console.warn('Sanity tour packages fetch failed:', err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return { cards, journeys, loading }
}

export function useTourPackage(slug: string | undefined): { journey: JourneyData | null; loading: boolean } {
  const [journey, setJourney] = useState<JourneyData | null>(null)
  const [loading, setLoading] = useState(Boolean(sanityClient && slug))

  useEffect(() => {
    if (!sanityClient || !slug) return
    let cancelled = false
    sanityClient
      .fetch<SanityTourPackage | null>(tourPackageBySlugQuery, { slug })
      .then((data) => {
        if (cancelled || !data) return
        const mapped = toJourneyData(data)
        if (mapped) setJourney((prev) => ({
          // keep local fallbacks only for fields Sanity didn't supply
          highlights:  mapped.highlights  ?? prev?.highlights,
          included:    mapped.included    ?? prev?.included,
          notIncluded: mapped.notIncluded ?? prev?.notIncluded,
          faq:         mapped.faq         ?? prev?.faq,
          waypoints:   mapped.waypoints   ?? prev?.waypoints,
          lodges:      mapped.lodges      ?? prev?.lodges,
          ...mapped,
        }))
      })
      .catch((err) => {
        console.warn('Sanity tour package fetch failed:', err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [slug])

  return { journey, loading }
}
