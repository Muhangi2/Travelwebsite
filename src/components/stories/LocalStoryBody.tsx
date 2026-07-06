import type { ReactNode } from 'react'
import type { ArticleBlock } from '@/data/articles'
import { slugify } from '@/lib/articleContent'
import Picture from '@/components/Picture'

const HEADINGS_PER_IMAGE = 6

export default function LocalStoryBody({ value, gallery = [] }: { value: ArticleBlock[]; gallery?: string[] }) {
  const nodes: ReactNode[] = []
  let headingCount = 0
  let imagesUsed = 0
  let skipIndex = -1

  value.forEach((block, i) => {
    if (i === skipIndex) return

    if (block.kind === 'heading') {
      const isImageBreak = headingCount > 0 && headingCount % HEADINGS_PER_IMAGE === 0 && gallery.length > 0
      headingCount += 1

      if (isImageBreak) {
        const src = gallery[imagesUsed % gallery.length]
        imagesUsed += 1
        const next = value[i + 1]
        const subtext = next?.kind === 'paragraph' ? next.text : null
        if (subtext) skipIndex = i + 1

        nodes.push(
          <section
            key={`imgbreak-${i}`}
            className="relative isolate left-1/2 -ml-[50vw] mt-14 w-screen overflow-hidden py-20 text-white"
          >
            <Picture src={src} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
            <div className="absolute inset-0 -z-10 bg-black/60" />
            <div className="mx-auto max-w-2xl px-6 text-center">
              <div className="section-rule mx-auto" style={{ background: 'rgba(255,255,255,0.5)' }} />
              <h2 id={slugify(block.text)} className="mt-4 scroll-mt-24 text-2xl text-white sm:text-3xl">
                {block.text}
              </h2>
              {subtext && (
                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/85">{subtext}</p>
              )}
            </div>
          </section>,
        )
        return
      }

      if (block.level === 2) {
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
