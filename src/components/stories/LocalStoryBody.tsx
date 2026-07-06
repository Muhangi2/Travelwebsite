import type { ReactNode } from 'react'
import type { ArticleBlock } from '@/data/articles'
import { slugify } from '@/lib/articleContent'
import Picture from '@/components/Picture'

const H2_PER_IMAGE = 4

export default function LocalStoryBody({ value, gallery = [] }: { value: ArticleBlock[]; gallery?: string[] }) {
  const nodes: ReactNode[] = []
  let h2Count = 0

  value.forEach((block, i) => {
    if (block.kind === 'heading') {
      if (block.level === 2) {
        if (h2Count > 0 && h2Count % H2_PER_IMAGE === 0 && gallery.length > 0) {
          const src = gallery[(h2Count / H2_PER_IMAGE - 1) % gallery.length]
          nodes.push(
            <div key={`img-${i}`} className="relative left-1/2 -ml-[50vw] mt-14 w-screen">
              <Picture src={src} alt="" loading="lazy" className="h-[42vh] w-full object-cover sm:h-[56vh]" />
            </div>,
          )
        }
        h2Count += 1
        nodes.push(
          <h2
            key={i}
            id={slugify(block.text)}
            className="mt-14 scroll-mt-24 border-t border-neutral-200 pt-8 text-2xl sm:text-3xl"
          >
            {block.text}
          </h2>,
        )
        return
      }
      nodes.push(
        <h3 key={i} className="mt-8 text-lg sm:text-xl">{block.text}</h3>,
      )
      return
    }

    if (block.kind === 'list') {
      nodes.push(
        <ul key={i} className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-brand-charcoal marker:text-neutral-400">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>,
      )
      return
    }

    if (block.kind === 'table') {
      nodes.push(
        <div key={i} className="mt-10 overflow-x-auto rounded-xl border border-neutral-200 shadow-sm">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-brand-forest-dark text-white">
                {block.headers.map((h, j) => (
                  <th key={j} className="px-4 py-3 text-left font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-brand-charcoal">
              {block.rows.map((row, ri) => (
                <tr key={ri} className={`border-t border-neutral-100 ${ri % 2 === 1 ? 'bg-brand-cream/30' : ''}`}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 align-top">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      )
      return
    }

    nodes.push(
      <p key={i} className="mt-4 text-base leading-relaxed text-brand-charcoal sm:text-lg">{block.text}</p>,
    )
  })

  return <>{nodes}</>
}
