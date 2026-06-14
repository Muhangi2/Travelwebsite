import { useEffect, useState } from 'react'
import type { JourneyDay } from '@/components/collection-detail/SafariJourney'
import { journeys as localJourneys, type JourneyData } from '@/data/journeys'
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
}

function toJourneyData(raw: SanityTourPackage): JourneyData | null {
  if (!raw.days?.length) return null
  const hero = raw.heroImage ? resolveMediaImage(raw.heroImage) : resolveMediaImage(raw.listImage)
  return {
    slug: raw.slug,
    title: raw.detailTitle ?? raw.title,
    subtitle: raw.subtitle ?? '',
    heroImage: hero,
    overview: raw.overview ?? '',
    days: raw.days.map(
      (d): JourneyDay => ({
        day: d.day,
        title: d.title,
        body: d.body,
        accommodation: d.accommodation ?? '—',
        meals: d.meals ?? '',
        image: resolveMediaImage(d.image),
      }),
    ),
  }
}

function toCard(raw: SanityTourPackage): TourPackageCard {
  return {
    id: raw.slug,
    image: resolveMediaImage(raw.listImage),
    country: raw.country,
    tags: raw.tags ?? [],
    title: raw.title,
    duration: raw.duration ?? '',
    highlight: raw.highlight,
  }
}

function localCards(): TourPackageCard[] {
  return [
    // ── Rwanda / Cross-border journeys ────────────────────────────────────────
    {
      id: '2-day-rwanda-gorilla',
      image: '/images/activities/gorilla-trekking/1-mgl-gorilla-bb.jpg',
      country: 'RWANDA · UGANDA',
      tags: ['Luxury Adventure'],
      title: '2 Days from Rwanda to the Mountain Gorillas',
      duration: '2 Days / 1 Night',
    },
    {
      id: '3-day-kigali-gorilla',
      image: '/images/activities/gorilla-trekking/4-mgl-gorilla-bb.jpg',
      country: 'RWANDA · UGANDA',
      tags: ['Luxury Adventure', 'Photography Focus'],
      title: '3 Days from Kigali into Gorilla Country',
      duration: '3 Days / 2 Nights',
    },
    {
      id: '4-day-rwanda-uganda-primate',
      image: '/images/activities/gorilla-trekking/35-mount-gahinga-lodge-golden-monkey.jpg',
      country: 'RWANDA · UGANDA',
      tags: ['Luxury Adventure', 'Photography Focus'],
      title: '4-Day Rwanda–Uganda Primate Safari',
      duration: '4 Days / 3 Nights',
    },
    {
      id: '5-day-kigali-great-apes',
      image: '/images/activities/gorilla-trekking/18-kibale-lodge-chimpanzee-tadevs-vs-08183.jpg',
      country: 'RWANDA · UGANDA',
      tags: ['Luxury Adventure', 'Family-Friendly', 'Photography Focus'],
      title: "5 Days from Kigali Among Uganda's Great Apes",
      duration: '5 Days / 4 Nights',
      highlight: true,
    },
    // ── Uganda standalone packages ─────────────────────────────────────────────
    {
      id: '3-day-classic-uganda-gorilla',
      image: '/images/activities/gorilla-trekking/8-gorilla-ah1i2661.jpg',
      country: 'UGANDA',
      tags: ['Luxury Adventure', 'Family-Friendly'],
      title: '3-Day Classic Uganda Gorilla Safari',
      duration: '3 Days / 2 Nights',
    },
    {
      id: '3-day-kigali-uganda-gorilla',
      image: '/images/activities/gorilla-trekking/11-gorilla-ah1i2713.jpg',
      country: 'RWANDA · UGANDA',
      tags: ['Luxury Adventure'],
      title: '3-Day Gorilla Safari — Kigali to Uganda',
      duration: '3 Days / 2 Nights',
    },
    {
      id: '4-day-luxury-flyin-gorilla',
      image: '/images/activities/gorilla-trekking/10-gorilla-ah1i2740.jpg',
      country: 'UGANDA',
      tags: ['Luxury Adventure'],
      title: '4-Day Luxury Uganda Gorilla Trekking (Fly-In)',
      duration: '4 Days / 3 Nights',
    },
    {
      id: '8-day-western-circuit-primate',
      image: '/images/activities/gorilla-trekking/19-chimp-kya-bbp-img-20190218-wa0007.jpg',
      country: 'UGANDA',
      tags: ['Luxury Adventure', 'Family-Friendly', 'Photography Focus'],
      title: '8-Day Western Circuit Primate & Wildlife',
      duration: '8 Days / 7 Nights',
      highlight: true,
    },
    {
      id: '10-day-grand-uganda-safari',
      image: '/images/parks/uganda/murchison-falls/mf-1.jpg',
      country: 'UGANDA',
      tags: ['Luxury Adventure', 'Family-Friendly', 'Photography Focus'],
      title: '10-Day Grand Uganda Safari — The Complete Loop',
      duration: '10 Days / 9 Nights',
    },
    {
      id: '9-day-rhythm-roots',
      image: '/images/parks/uganda/murchison-falls/dsc-7062.jpg',
      country: 'UGANDA',
      tags: ['Photography Focus'],
      title: 'Rhythm & Roots — 9-Day Creative Safari',
      duration: '9 Days / 8 Nights',
    },
    {
      id: '11-day-primate-fishing',
      image: '/images/parks/uganda/murchison-falls/dsc-6828.jpg',
      country: 'UGANDA',
      tags: ['Luxury Adventure', 'Family-Friendly'],
      title: 'Uganda Primate & Fishing Safari — 11 Days',
      duration: '11 Days / 10 Nights',
    },
    {
      id: '7-day-shoebill-primates',
      image: '/images/activities/gorilla-trekking/33-mount-gahinga-lodge-gorilla.jpg',
      country: 'UGANDA',
      tags: ['Luxury Adventure', 'Photography Focus'],
      title: '7-Day Shoebill & Primates Fly-In Safari',
      duration: '7 Days / 6 Nights',
    },
    {
      id: 'deep-dive-creative',
      image: '/images/parks/uganda/murchison-falls/dsc-7442.jpg',
      country: 'UGANDA',
      tags: ['Photography Focus'],
      title: 'The Deep Dive — 12-Day Creative Residency',
      duration: '12 Days / 11 Nights',
    },
    {
      id: 'wild-muse-creative',
      image: '/images/parks/uganda/murchison-falls/dsc-6828.jpg',
      country: 'UGANDA',
      tags: ['Photography Focus'],
      title: 'The Wild Muse — 7-Day Creative Safari',
      duration: '7 Days / 6 Nights',
    },
  ]
}

export function useTourPackages(): { cards: TourPackageCard[]; journeys: Record<string, JourneyData>; loading: boolean } {
  const [cards, setCards] = useState<TourPackageCard[]>(localCards)
  const [journeys, setJourneys] = useState<Record<string, JourneyData>>(localJourneys)
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
        console.warn('Sanity tour packages fetch failed, using local data:', err)
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
  const [journey, setJourney] = useState<JourneyData | null>(() => {
    if (!slug) return null
    return localJourneys[slug] ?? null
  })
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
          highlights: prev?.highlights,
          included:   prev?.included,
          notIncluded: prev?.notIncluded,
          faq:        prev?.faq,
          waypoints:  prev?.waypoints,
          ...mapped,
        }))
      })
      .catch((err) => {
        console.warn('Sanity tour package fetch failed, using local data:', err)
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
