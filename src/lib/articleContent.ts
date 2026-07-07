import type { PortableTextBlock } from '@portabletext/react'
import type { ArticleBlock } from '@/data/articles'

export type TocEntry = { id: string; text: string }

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const WORDS_PER_MINUTE = 200

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}

export function localToc(body: ArticleBlock[]): TocEntry[] {
  const entries: TocEntry[] = []
  for (const b of body) {
    if (b.kind === 'heading' && b.level === 2) {
      entries.push({ id: slugify(b.text), text: b.text })
    }
  }
  return entries
}

export function localReadingMinutes(body: ArticleBlock[]): number {
  const words = body.reduce((sum, b) => {
    if (b.kind === 'paragraph' || b.kind === 'heading') return sum + countWords(b.text)
    if (b.kind === 'list') return sum + countWords(b.items.join(' '))
    if (b.kind === 'table') return sum + countWords([b.headers.join(' '), ...b.rows.map((r) => r.join(' '))].join(' '))
    return sum
  }, 0)
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}

type SanityBlock = PortableTextBlock & { style?: string; children?: { text?: string }[] }
type SanityTableBlock = { _type: 'articleTable'; headers?: string[]; rows?: { cells?: string[] }[] }

export function sanityToc(body: PortableTextBlock[]): TocEntry[] {
  return (body as SanityBlock[])
    .filter((b) => b.style === 'h2')
    .map((b) => {
      const text = (b.children ?? []).map((c) => c.text ?? '').join('')
      return { id: slugify(text), text }
    })
    .filter((entry) => entry.text.length > 0)
}

export function sanityReadingMinutes(body: PortableTextBlock[]): number {
  const words = body.reduce((sum, b) => {
    if ((b as { _type?: string })._type === 'articleTable') {
      const table = b as unknown as SanityTableBlock
      const text = [
        (table.headers ?? []).join(' '),
        ...(table.rows ?? []).map((r) => (r.cells ?? []).join(' ')),
      ].join(' ')
      return sum + countWords(text)
    }
    const text = ((b as SanityBlock).children ?? []).map((c) => c.text ?? '').join('')
    return sum + countWords(text)
  }, 0)
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}
