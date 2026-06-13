import type { PortableTextBlock } from '@portabletext/react'
import type { SanityImageSource } from '@sanity/image-url'
import type { SanityMediaImage } from './utils/media'

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

export type SanityExperience = {
  _id: string
  title: string
  slug: string
  badge: string
  shortTitle: string
  excerpt: string
  cta?: string
  image: SanityMediaImage
  tagline: string
  intro?: string[]
  highlights?: { title: string; body: string }[]
  locations?: {
    name: string
    country: string
    description: string
    image?: SanityMediaImage
  }[]
  gallery?: SanityMediaImage[]
}

export type SanityPark = {
  slug: string
  name: string
  blurb: string
  image: SanityMediaImage
  location?: string
  size?: string
  altitude?: string
  bestTime?: string
  overview?: string
  attractions?: { title: string; body: string; image: SanityMediaImage }[]
  activities?: { title: string; body?: string; image: SanityMediaImage }[]
  faqs?: { q: string; a: string }[]
}

export type SanityDestination = {
  _id: string
  name: string
  slug: string
  heroTitle: string
  heroSubtitle?: string
  heroImage: SanityMediaImage
  exploreIntro?: string
  parkSummary?: string
  parkSummaryImage?: SanityMediaImage
  parks?: SanityPark[]
  privilegedAccess?: { title: string; location?: string; body: string; image: SanityMediaImage }[]
  lodges?: { name: string; location?: string; body: string; image: SanityMediaImage }[]
  seoKeywords?: string
}

export type SanityJourneyDay = {
  day: number
  title: string
  body: string
  accommodation?: string
  meals?: string
  image: SanityMediaImage
}

export type SanityTourPackage = {
  _id: string
  title: string
  slug: string
  country?: string
  duration?: string
  tags?: string[]
  highlight?: boolean
  listImage: SanityMediaImage
  detailTitle?: string
  subtitle?: string
  heroImage?: SanityMediaImage
  overview?: string
  days?: SanityJourneyDay[]
}
