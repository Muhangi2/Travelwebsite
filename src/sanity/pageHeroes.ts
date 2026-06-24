import { useEffect, useState } from 'react'
import { sanityClient } from './client'
import { pageHeroByKeyQuery } from './queries'
import type { SanityPageHero } from './types'
import { resolveMediaImage } from './utils/media'

export type PageHeroData = {
  eyebrow?: string
  heading: string
  body?: string
  image: string
  imageAlt?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

function toPageHero(raw: SanityPageHero): PageHeroData {
  return {
    eyebrow: raw.eyebrow,
    heading: raw.heading,
    body: raw.body,
    image: resolveMediaImage(raw.image, 1920),
    imageAlt: raw.image?.alt,
    primaryCta: raw.primaryCta,
    secondaryCta: raw.secondaryCta,
  }
}

export function usePageHero(pageKey: string, fallback: PageHeroData): PageHeroData {
  const [data, setData] = useState<PageHeroData>(fallback)

  useEffect(() => {
    if (!sanityClient) return
    let cancelled = false
    const id = `pageHero-${pageKey}`
    sanityClient
      .fetch<SanityPageHero | null>(pageHeroByKeyQuery, { id })
      .then((raw) => {
        if (cancelled || !raw) return
        setData(toPageHero(raw))
      })
      .catch((err) => {
        console.warn(`Sanity pageHero(${pageKey}) fetch failed, using fallback:`, err)
      })
    return () => {
      cancelled = true
    }
  }, [pageKey])

  return data
}
