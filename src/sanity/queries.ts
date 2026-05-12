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
    body
  }
`
