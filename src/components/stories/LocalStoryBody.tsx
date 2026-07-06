import type { ReactNode } from 'react'
import type { ArticleBlock } from '@/data/articles'
import { slugify } from '@/lib/articleContent'
import Picture from '@/components/Picture'

const HEADINGS_PER_IMAGE = 6

function renderContentBlock(block: ArticleBlock, key: number, dark: boolean) {
  const textClass = dark ? 'text-white/90' : 'text-brand-charcoal'
  const markerClass = dark ? 'marker:text-white/50' : 'marker:text-neutral-400'

  if (block.kind === 'heading') {
    return block.level === 2 ? (
      <h2
        key={key}
        id={slugify(block.text)}
        className={`mt-14 scroll-mt-24 border-t pt-8 text-2xl sm:text-3xl ${dark ? 'border-white/20 text-white' : 'border-neutral-200'}`}
      >
        {block.text}
      </h2>
    ) : (
      <h3 key={key} className={`mt-8 text-lg sm:text-xl ${dark ? 'text-white' : ''}`}>{block.text}</h3>
    )
  }

  if (block.kind === 'list') {
    return (
      <ul key={key} className={`mt-4 list-disc space-y-2 pl-5 leading-relaxed ${textClass} ${markerClass}`}>
        {block.items.map((item, j) => (
          <li key={j}>{item}</li>
        ))}
      </ul>
    )
  }

  if (block.kind === 'table') {
    return (
      <div
        key={key}
        className={`mt-10 overflow-x-auto rounded-xl border shadow-sm ${dark ? 'border-white/20' : 'border-neutral-200'}`}
      >
        <table className="w-full min-w-[480px] text-sm">
          <thead>
            <tr className={dark ? 'bg-white/10 text-white' : 'bg-brand-forest-dark text-white'}>
              {block.headers.map((h, j) => (
                <th key={j} className="px-4 py-3 text-left font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className={textClass}>
            {block.rows.map((row, ri) => (
              <tr
                key={ri}
                className={`border-t ${dark ? 'border-white/10' : 'border-neutral-100'} ${
                  ri % 2 === 1 ? (dark ? 'bg-white/5' : 'bg-brand-cream/30') : ''
                }`}
              >
                {row.map((cell, ci) => (
                  <td key={ci} className="px-4 py-3 align-top">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <p key={key} className={`mt-4 text-base leading-relaxed sm:text-lg ${textClass}`}>{block.text}</p>
  )
}

export default function LocalStoryBody({ value, gallery = [] }: { value: ArticleBlock[]; gallery?: string[] }) {
  const nodes: ReactNode[] = []
  let headingCount = 0
  let imagesUsed = 0
  let i = 0

  while (i < value.length) {
    const block = value[i]

    if (block.kind === 'heading') {
      const isImageSection = headingCount > 0 && headingCount % HEADINGS_PER_IMAGE === 0 && gallery.length > 0
      headingCount += 1

      // Always render the heading itself in plain style.
      nodes.push(renderContentBlock(block, i, false))
      i += 1

      if (!isImageSection) continue

      const src = gallery[imagesUsed % gallery.length]
      imagesUsed += 1

      // Collect every block up to (but not including) the next heading into this image section.
      const group: ReactNode[] = []
      while (i < value.length && value[i].kind !== 'heading') {
        group.push(renderContentBlock(value[i], i, true))
        i += 1
      }

      nodes.push(
        <section key={`imgsection-${i}`} className="relative isolate left-1/2 -ml-[50vw] mt-10 w-screen overflow-hidden py-4">
          <Picture src={src} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-black/65" />
          <div className="mx-auto max-w-3xl px-6">{group}</div>
        </section>,
      )
      continue
    }

    nodes.push(renderContentBlock(block, i, false))
    i += 1
  }

  return <>{nodes}</>
}
