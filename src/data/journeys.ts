import type { JourneyDay } from '@/components/collection-detail/SafariJourney'
import type { TourRatesData } from '@/components/collection-detail/TourRates'

export type RouteWaypoint = {
  name: string
  coords: [number, number] // [longitude, latitude]
}

export type TourFAQ = { q: string; a: string }

export type JourneyLodge = {
  name: string
  location?: string
  tier?: 'luxury' | 'midRange'
  body?: string
  image: string
}

export type JourneyData = {
  slug: string
  title: string
  subtitle: string
  heroImage: string
  overview: string
  days: JourneyDay[]
  waypoints?: RouteWaypoint[]
  country?: string
  highlights?: string[]
  included?: string[]
  notIncluded?: string[]
  faq?: TourFAQ[]
  rates?: TourRatesData
  /** Structured lodge data (name/location/tier/image) authored in Sanity. When present,
   * HandpickedLodges renders directly from this instead of text-matching day accommodation names. */
  lodges?: JourneyLodge[]
}
