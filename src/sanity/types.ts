import type { PortableTextBlock } from '@portabletext/react'
import type { SanityImageSource } from '@sanity/image-url'

export type SanityStorySummary = {
  _id: string
  title: string
  slug: string
  excerpt?: string
  mainImage?: SanityImageSource & { alt?: string }
  author?: string
  publishedAt: string
  tags?: string[]
  featured?: boolean
}

export type SanityStory = SanityStorySummary & {
  body?: PortableTextBlock[]
}
