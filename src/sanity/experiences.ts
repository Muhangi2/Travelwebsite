import { useEffect, useState } from 'react'
import { experiences as localExperiences, type Experience } from '@/data/experiences'
import { sanityClient } from './client'
import { allExperiencesQuery, experienceBySlugQuery } from './queries'
import type { SanityExperience } from './types'
import { resolveMediaImage, resolveMediaImages } from './utils/media'

function toExperience(raw: SanityExperience): Experience {
  return {
    slug: raw.slug,
    badge: raw.badge,
    title: raw.title,
    shortTitle: raw.shortTitle,
    excerpt: raw.excerpt,
    cta: raw.cta ?? 'Explore this experience',
    image: resolveMediaImage(raw.image),
    tagline: raw.tagline,
    intro: raw.intro ?? [],
    highlights: raw.highlights ?? [],
    locations: (raw.locations ?? []).map((loc) => ({
      name: loc.name,
      country: loc.country,
      description: loc.description,
      image: loc.image ? resolveMediaImage(loc.image) : undefined,
    })),
    gallery: resolveMediaImages(raw.gallery),
  }
}

function toRecord(items: Experience[]): Record<string, Experience> {
  return Object.fromEntries(items.map((e) => [e.slug, e]))
}

export function useExperiences(): { items: Experience[]; bySlug: Record<string, Experience>; loading: boolean } {
  const [items, setItems] = useState<Experience[]>(localExperiences)
  const [loading, setLoading] = useState(Boolean(sanityClient))

  useEffect(() => {
    if (!sanityClient) return
    let cancelled = false
    sanityClient
      .fetch<SanityExperience[]>(allExperiencesQuery)
      .then((data) => {
        if (cancelled || !data?.length) return
        setItems(data.map(toExperience))
      })
      .catch((err) => {
        console.warn('Sanity experiences fetch failed, using local data:', err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return { items, bySlug: toRecord(items), loading }
}

export function useExperience(slug: string | undefined): { experience: Experience | null; loading: boolean } {
  const [experience, setExperience] = useState<Experience | null>(() => {
    if (!slug) return null
    return localExperiences.find((e) => e.slug === slug) ?? null
  })
  const [loading, setLoading] = useState(Boolean(sanityClient && slug))

  useEffect(() => {
    if (!sanityClient || !slug) return
    let cancelled = false
    sanityClient
      .fetch<SanityExperience | null>(experienceBySlugQuery, { slug })
      .then((data) => {
        if (cancelled || !data) return
        setExperience(toExperience(data))
      })
      .catch((err) => {
        console.warn('Sanity experience fetch failed, using local data:', err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [slug])

  return { experience, loading }
}
