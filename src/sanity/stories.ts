import { useEffect, useState } from 'react'
import type { PortableTextBlock } from '@portabletext/react'
import { sanityClient } from './client'
import { urlFor } from './image'
import { allStoriesQuery, storyBySlugQuery } from './queries'
import type { SanityStory, SanityStorySummary } from './types'
import { articles as localArticles, type Article } from '@/data/articles'

function formatDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleString('en-US', { month: 'short', year: 'numeric' })
}

function toArticle(s: SanityStorySummary): Article {
  return {
    slug: s.slug,
    title: s.title,
    excerpt: s.excerpt ?? '',
    image: urlFor(s.mainImage) ?? '',
    author: s.author ?? 'MasterPolo Safaris Team',
    date: formatDate(s.publishedAt),
    tags: s.tags ?? [],
  }
}

export type ArticleWithBody = Article & {
  body?: PortableTextBlock[]
}

export function useStories(): { items: Article[]; loading: boolean } {
  const [items, setItems] = useState<Article[]>(localArticles)
  const [loading, setLoading] = useState<boolean>(Boolean(sanityClient))

  useEffect(() => {
    if (!sanityClient) return
    let cancelled = false
    sanityClient
      .fetch<SanityStorySummary[]>(allStoriesQuery)
      .then((data) => {
        if (cancelled) return
        if (data && data.length > 0) setItems(data.map(toArticle))
      })
      .catch((err) => {
        console.warn('Sanity fetch failed, using local stories:', err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return { items, loading }
}

export function useStory(slug: string | undefined): { article: ArticleWithBody | null; loading: boolean } {
  const [article, setArticle] = useState<ArticleWithBody | null>(() => {
    const local = localArticles.find((a) => a.slug === slug)
    return local ?? null
  })
  const [loading, setLoading] = useState<boolean>(Boolean(sanityClient && slug))

  useEffect(() => {
    if (!sanityClient || !slug) return
    let cancelled = false
    sanityClient
      .fetch<SanityStory | null>(storyBySlugQuery, { slug })
      .then((data) => {
        if (cancelled || !data) return
        setArticle({
          ...toArticle(data),
          body: data.body,
        })
      })
      .catch((err) => {
        console.warn('Sanity fetch failed, using local story:', err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [slug])

  return { article, loading }
}
