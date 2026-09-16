export type ExperienceHighlight = { title: string; body: string }
export type ExperienceLocation = { name: string; country: string; description: string; image?: string }

export type Experience = {
  slug: string
  badge: string
  title: string
  shortTitle: string
  excerpt: string
  cta: string
  image: string
  tagline: string
  intro: string[]
  highlights: ExperienceHighlight[]
  locations: ExperienceLocation[]
  gallery: string[]
}
