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
    {
      id: 'uganda-exclusive-primate',
      image: '/images/activities/gorilla-trekking/14-mgl-golden-monkey-bb.jpg',
      country: 'UGANDA',
      tags: ['Luxury Adventure', 'Family-Friendly', 'Photography Focus'],
      title: 'Uganda Exclusive Primate  Journey',
      duration: '9 Days / 8 Nights',
      highlight: true,
    },
    {
      id: 'great-lakes-primate-odyssey',
      image: '/images/activities/walking-safari/1752747977432-kenya-suyian-conservancy-nature-walk-16.jpg',
      tags: ['Family-Friendly', 'Photography Focus'],
      title: 'The Great Lakes & Primate Odyssey',
      duration: '10 Days / 9 Nights',
    },
    {
      id: 'ultimate-gorilla-expedition',
      image: '/images/destinations/tanzania/sayari-lioness.jpg',
      tags: ['Luxury Adventure', 'Family-Friendly', 'Photography Focus'],
      title: 'The Ultimate Gorilla Expedition',
      duration: '11 Days / 10 Nights',
    },
    {
      id: 'primates-mist-rainforest',
      image: '/images/activities/gorilla-trekking/13-mgl-golden-monkey-bb.jpg',
      tags: ['Luxury Adventure', 'Family-Friendly', 'Photography Focus'],
      title: 'Primates of the Mist & Rainforest',
      duration: '8 Days / 7 Nights',
    },
    {
      id: 'conservationists-path',
      image: '/images/activities/helicopter-rwanda/1000045751.jpg',
      tags: ['Luxury Adventure', 'Family-Friendly', 'Photography Focus'],
      title: "The Conservationist's Path",
      duration: '7 Days / 6 Nights',
    },
    {
      id: 'ikaze-short-welcome',
      image: '/images/parks/rwanda/volcanoes/wilderness-bisate.jpg',
      tags: ['Luxury Adventure', 'Family-Friendly', 'Photography Focus'],
      title: 'The Ikaze Short Welcome',
      duration: '4  Days / 3 Nights',
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
        if (mapped) setJourney(mapped)
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
