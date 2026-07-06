import type { TocEntry } from '@/lib/articleContent'

export default function TableOfContents({ entries }: { entries: TocEntry[] }) {
  if (entries.length < 3) return null

  return (
    <nav aria-label="Table of contents" className="mt-10 rounded-2xl border border-neutral-200 bg-brand-cream/30 p-6 sm:p-8">
      <p className="eyebrow text-brand-muted">In This Guide</p>
      <ol className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
        {entries.map((entry, i) => (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              className="flex gap-3 py-1 text-sm text-brand-charcoal transition hover:text-brand-green"
            >
              <span className="text-brand-muted">{String(i + 1).padStart(2, '0')}</span>
              <span>{entry.text}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
