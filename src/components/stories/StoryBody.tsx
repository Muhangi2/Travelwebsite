import { PortableText, type PortableTextComponents, type PortableTextBlock } from '@portabletext/react'
import { urlFor } from '@/sanity/image'

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mt-4 leading-relaxed text-brand-charcoal">{children}</p>
    ),
    h2: ({ children }) => <h2 className="mt-12">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-8 font-serif text-xl">{children}</h3>,
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
      const src = urlFor(value)
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
