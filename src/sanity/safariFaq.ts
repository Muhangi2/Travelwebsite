import { useEffect, useState } from 'react'
import { sanityClient } from './client'
import { safariFaqPageQuery } from './queries'
import type { SanitySafariFaqPage } from './types'

export type SafariFaqEntry = { q: string; a: string }

export function useSafariFaq(): { faqs: SafariFaqEntry[]; loading: boolean } {
  const [faqs, setFaqs] = useState<SafariFaqEntry[]>([])
  const [loading, setLoading] = useState(Boolean(sanityClient))

  useEffect(() => {
    if (!sanityClient) return
    let cancelled = false
    sanityClient
      .fetch<SanitySafariFaqPage | null>(safariFaqPageQuery)
      .then((data) => {
        if (cancelled || !data?.faqs?.length) return
        setFaqs(data.faqs)
      })
      .catch((err) => {
        console.warn('Sanity safari FAQ fetch failed:', err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return { faqs, loading }
}
