export const pageHeroByKeyQuery = /* groq */ `
  *[_type == "pageHero" && _id == $id][0] {
    pageKey,
    eyebrow,
    heading,
    body,
    image { asset, path, alt },
    primaryCta { label, href },
    secondaryCta { label, href }
  }
`

const mediaImageProjection = /* groq */ `{
  asset,
  path,
  alt
}`

export const allStoriesQuery = /* groq */ `
  *[_type == "story" && defined(slug.current)] | order(coalesce(featured, false) desc, publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    author,
    publishedAt,
    tags,
    featured
  }
`

export const storyBySlugQuery = /* groq */ `
  *[_type == "story" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    author,
    publishedAt,
    tags,
    body,
    gallery[] ${mediaImageProjection}
  }
`

export const allExperiencesQuery = /* groq */ `
  *[_type == "experience" && defined(slug.current)] | order(coalesce(sortOrder, 0) asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    badge,
    shortTitle,
    excerpt,
    cta,
    image ${mediaImageProjection},
    tagline,
    intro,
    highlights[] { title, body },
    locations[] {
      name,
      country,
      description,
      image ${mediaImageProjection}
    },
    gallery[] ${mediaImageProjection},
    sortOrder
  }
`

export const experienceBySlugQuery = /* groq */ `
  *[_type == "experience" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    badge,
    shortTitle,
    excerpt,
    cta,
    image ${mediaImageProjection},
    tagline,
    intro,
    highlights[] { title, body },
    locations[] {
      name,
      country,
      description,
      image ${mediaImageProjection}
    },
    gallery[] ${mediaImageProjection}
  }
`

const destinationRichProjection = /* groq */ `
  travelStats { bestTime, duration, keyWildlife, travelStyle },
  whyVisit {
    intro,
    bullets[] { title, body },
    stats[] { number, label }
  },
  seasons[] {
    name,
    dates,
    wildlife,
    description,
    image ${mediaImageProjection}
  },
  specialistQuote { quote, author, role },
  conservation {
    intro,
    stats[] { number, label },
    partners
  },
  countryFaqs[] { question, answer }
`

export const allDestinationsQuery = /* groq */ `
  *[_type == "destination" && defined(slug.current)] | order(coalesce(sortOrder, 0) asc, name asc) {
    _id,
    name,
    "slug": slug.current,
    heroTitle,
    heroSubtitle,
    heroImage ${mediaImageProjection},
    exploreIntro,
    parkSummary,
    parkSummaryImage ${mediaImageProjection},
    parks[] {
      "slug": slug.current,
      name,
      blurb,
      image ${mediaImageProjection},
      location,
      size,
      altitude,
      bestTime,
      overview,
      attractions[] {
        title,
        body,
        image ${mediaImageProjection}
      },
      activities[] {
        title,
        body,
        image ${mediaImageProjection}
      },
      faqs[] { q, a },
      metaDescription,
      whyVisit,
      gettingThere,
      whereToStay[] { category, picks[] { name, description, image ${mediaImageProjection} } },
      practicalInfo[] { label, body }
    },
    privilegedAccess[] {
      title,
      location,
      body,
      image ${mediaImageProjection}
    },
    lodges[] {
      name,
      location,
      body,
      image ${mediaImageProjection}
    },
    ${destinationRichProjection},
    seoKeywords,
    sortOrder
  }
`

export const destinationBySlugQuery = /* groq */ `
  *[_type == "destination" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    heroTitle,
    heroSubtitle,
    heroImage ${mediaImageProjection},
    exploreIntro,
    parkSummary,
    parkSummaryImage ${mediaImageProjection},
    parks[] {
      "slug": slug.current,
      name,
      blurb,
      image ${mediaImageProjection},
      location,
      size,
      altitude,
      bestTime,
      overview,
      attractions[] {
        title,
        body,
        image ${mediaImageProjection}
      },
      activities[] {
        title,
        body,
        image ${mediaImageProjection}
      },
      faqs[] { q, a },
      metaDescription,
      whyVisit,
      gettingThere,
      whereToStay[] { category, picks[] { name, description, image ${mediaImageProjection} } },
      practicalInfo[] { label, body }
    },
    privilegedAccess[] {
      title,
      location,
      body,
      image ${mediaImageProjection}
    },
    lodges[] {
      name,
      location,
      body,
      image ${mediaImageProjection}
    },
    ${destinationRichProjection},
    seoKeywords
  }
`

const tourPackageDetailProjection = /* groq */ `
  detailTitle,
  subtitle,
  heroImage ${mediaImageProjection},
  overview,
  days[] {
    day,
    title,
    body,
    accommodationTier,
    accommodation,
    meals,
    image ${mediaImageProjection}
  },
  highlights,
  included,
  notIncluded,
  faq[] { q, a },
  waypoints[] { name, lng, lat },
  rates {
    priceFromUsd,
    table[] { label, midrange, luxury },
    singleSupplement { midrange, luxury },
    permitNote,
    validityNote
  }
`

export const allTourPackagesQuery = /* groq */ `
  *[_type == "tourPackage" && defined(slug.current)] | order(coalesce(sortOrder, 0) asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    country,
    duration,
    tags,
    highlight,
    listImage ${mediaImageProjection},
    ${tourPackageDetailProjection},
    sortOrder
  }
`

export const tourPackageBySlugQuery = /* groq */ `
  *[_type == "tourPackage" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    country,
    duration,
    tags,
    highlight,
    listImage ${mediaImageProjection},
    ${tourPackageDetailProjection}
  }
`
