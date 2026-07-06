import { PortableText, type PortableTextComponents, type PortableTextBlock } from '@portabletext/react'
import { urlFor } from '@/sanity/image'
import { slugify } from '@/lib/articleContent'

function headingText(value: PortableTextBlock): string {
  const children = (value as { children?: { text?: string }[] }).children ?? []
  return children.map((c) => c.text ?? '').join('')
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mt-4 text-base leading-relaxed text-brand-charcoal sm:text-lg">{children}</p>
    ),
    h2: ({ children, value }) => (
      <h2 id={slugify(headingText(value))} className="mt-14 scroll-mt-24 border-t border-neutral-200 pt-8 text-2xl sm:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => <h3 className="mt-8 text-lg sm:text-xl">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-brand-green pl-4 italic text-brand-charcoal">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-brand-green">{children}</strong>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-green underline hover:text-brand-green-dark"
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
  },
}

export default function StoryBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />
}
