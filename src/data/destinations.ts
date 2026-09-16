export type Park = {
  slug: string
  name: string
  blurb: string
  metaDescription?: string
  image: string
  location: string
  size: string
  altitude: string
  bestTime: string
  overview: string
  whyVisit?: string[]
  attractions: { title: string; body: string; image: string }[]
  activities: { title: string; body?: string; image: string }[]
  gettingThere?: string
  whereToStay?: {
    category: string
    picks: (string | { name: string; description?: string; image?: string })[]
  }[]
  practicalInfo?: { label: string; body: string }[]
  faqs: { q: string; a: string }[]
}

export type Season = {
  dates: string
  name: string
  wildlife: string
  description: string
  image?: string
}

export type Country = {
  slug: string
  name: string
  heroTitle: string
  heroSubtitle: string
  heroImage: string
  exploreIntro: string
  parkSummary: string
  parkSummaryImage: string
  parks: Park[]
  privilegedAccess: { title: string; location: string; body: string; image: string }[]
  lodges: { name: string; location: string; body: string; image: string }[]
  seoKeywords: string
  travelStats?: { bestTime: string; duration: string; keyWildlife: string; travelStyle: string }
  whyVisit?: { intro: string; bullets: Array<string | { title: string; body: string }>; stats: Array<{ number: string; label: string }> }
  seasons?: Season[]
  specialistQuote?: { quote: string; author: string; role: string }
  conservation?: { intro: string; stats: Array<{ number: string; label: string }>; partners: string[] }
  countryFaqs?: Array<{ question: string; answer: string }>
}
