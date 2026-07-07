import type { ReactNode } from 'react'
import { PortableText, type PortableTextComponents, type PortableTextBlock } from '@portabletext/react'
import { urlFor } from '@/sanity/image'
import { slugify } from '@/lib/articleContent'
import Picture from '@/components/Picture'

const HEADINGS_PER_IMAGE = 6

function headingText(value: PortableTextBlock): string {
  const children = (value as { children?: { text?: string }[] }).children ?? []
  return children.map((c) => c.text ?? '').join('')
}

function isHeading(block: PortableTextBlock): boolean {
  const style = (block as { style?: string }).style
  return block._type === 'block' && (style === 'h2' || style === 'h3')
}

function makeComponents(dark: boolean): PortableTextComponents {
  const textClass = dark ? 'text-white/90' : 'text-brand-charcoal'
  const markerClass = dark ? 'marker:text-white/50' : 'marker:text-neutral-400'

  return {
    block: {
      normal: ({ children }) => (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${textClass}`}>{children}</p>
      ),
      h2: ({ children, value }) => (
        <h2
          id={slugify(headingText(value))}
          className={`mt-14 scroll-mt-24 border-t pt-8 text-2xl sm:text-3xl ${dark ? 'border-white/20 text-white' : 'border-neutral-200'}`}
        >
          {children}
        </h2>
      ),
      h3: ({ children }) => <h3 className={`mt-8 text-lg sm:text-xl ${dark ? 'text-white' : ''}`}>{children}</h3>,
      blockquote: ({ children }) => (
        <blockquote className={`mt-6 border-l-4 pl-4 italic ${dark ? 'border-white/40 text-white/90' : 'border-brand-green text-brand-charcoal'}`}>
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className={`mt-4 list-disc space-y-2 pl-5 leading-relaxed ${textClass} ${markerClass}`}>{children}</ul>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li>{children}</li>,
    },
    marks: {
      strong: ({ children }) => (
        <strong className={`font-semibold ${dark ? 'text-white' : 'text-brand-green'}`}>{children}</strong>
      ),
      link: ({ value, children }) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className={dark ? 'text-white underline hover:text-white/80' : 'text-brand-green underline hover:text-brand-green-dark'}
        >
          {children}
        </a>
      ),
    },
    types: {
      image: ({ value }) => {
        const src = urlFor(value, 1200)
        if (!src) return null
        return (
          <figure className="mt-10 overflow-hidden rounded-xl shadow-md">
            <img src={src} alt={value?.alt ?? ''} className="aspect-[16/9] w-full object-cover" loading="lazy" />
            {value?.caption && (
              <figcaption className="bg-white px-4 py-2 text-sm text-brand-muted">{value.caption}</figcaption>
            )}
          </figure>
        )
      },
      articleTable: ({ value }) => {
        const headers: string[] = value?.headers ?? []
        const rows: { cells?: string[] }[] = value?.rows ?? []
        return (
          <div className={`mt-10 overflow-x-auto rounded-xl border shadow-sm ${dark ? 'border-white/20' : 'border-neutral-200'}`}>
            <table className="w-full min-w-[480px] text-sm">
              <thead>
                <tr className={dark ? 'bg-white/10 text-white' : 'bg-brand-forest-dark text-white'}>
                  {headers.map((h, j) => (
                    <th key={j} className="px-4 py-3 text-left font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className={textClass}>
                {rows.map((row, ri) => (
                  <tr
                    key={ri}
                    className={`border-t ${dark ? 'border-white/10' : 'border-neutral-100'} ${
                      ri % 2 === 1 ? (dark ? 'bg-white/5' : 'bg-brand-cream/30') : ''
                    }`}
                  >
                    {(row.cells ?? []).map((cell, ci) => (
                      <td key={ci} className="px-4 py-3 align-top">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      },
    },
  }
}

const lightComponents = makeComponents(false)
const darkComponents = makeComponents(true)

function blockKey(block: PortableTextBlock, i: number): string {
  return (block as { _key?: string })._key ?? String(i)
}

export default function StoryBody({ value, gallery = [] }: { value: PortableTextBlock[]; gallery?: string[] }) {
  if (!gallery.length) {
    return <PortableText value={value} components={lightComponents} />
  }

  const nodes: ReactNode[] = []
  let headingCount = 0
  let imagesUsed = 0
  let i = 0

  while (i < value.length) {
    const block = value[i]

    if (isHeading(block)) {
      const isImageSection = headingCount > 0 && headingCount % HEADINGS_PER_IMAGE === 0
      headingCount += 1

      // Always render the heading itself in plain style.
      nodes.push(<PortableText key={blockKey(block, i)} value={[block]} components={lightComponents} />)
      i += 1

      if (!isImageSection) continue

      const src = gallery[imagesUsed % gallery.length]
      imagesUsed += 1

      // Collect every block up to (but not including) the next heading into this image section.
      const group: PortableTextBlock[] = []
      while (i < value.length && !isHeading(value[i])) {
        group.push(value[i])
        i += 1
      }

      nodes.push(
        <section key={`imgsection-${i}`} className="relative isolate left-1/2 -ml-[50vw] mt-10 w-screen overflow-hidden py-4">
          <Picture src={src} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-black/65" />
          <div className="mx-auto max-w-3xl px-6">
            <PortableText value={group} components={darkComponents} />
          </div>
        </section>,
      )
      continue
    }

    nodes.push(<PortableText key={blockKey(block, i)} value={[block]} components={lightComponents} />)
    i += 1
  }

  return <>{nodes}</>
}
