export type ArticleBlock =
  | { kind: 'heading'; level: 2 | 3; text: string }
  | { kind: 'paragraph'; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'table'; headers: string[]; rows: string[][] }

export type Article = {
  slug: string
  title: string
  excerpt: string
  image: string
  gallery?: string[]
  author: string
  date: string
  tags: string[]
  body?: ArticleBlock[]
}

export const categories = ['All', 'Gorillas', 'Destinations', 'Safari Tips', 'Culture', 'Conservation']
