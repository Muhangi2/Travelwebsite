import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/articles'
import { useStories } from '@/sanity/stories'

const PER_PAGE = 6

export default function AllArticles() {
  const [active, setActive] = useState('All')
  const [page, setPage] = useState(0)
  const { items: articles } = useStories()

  const filtered = useMemo(() => {
    if (active === 'All') return articles
    return articles.filter((a) => a.tags.some((t) => t.toLowerCase() === active.toLowerCase()))
  }, [active, articles])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const visible = filtered.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  return (
    <section id="articles" className="bg-white pb-20">
      <div className="container-page">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((c) => {
            const isActive = c === active
            return (
              <button
                key={c}
                onClick={() => {
                  setActive(c)
                  setPage(0)
                }}
                className={`rounded-full border px-5 py-2 text-xs ${
                  isActive
                    ? 'border-black bg-black text-white'
                    : 'border-neutral-300 bg-white text-neutral-700 hover:border-black hover:text-black'
                }`}
              >
                {c}
              </button>
            )
          })}
        </div>

        <h2 className="mt-12 font-serif text-4xl">All Articles</h2>

        <div className="cards-scroll-3 mt-8 gap-6">
          {visible.map((a) => (
            <article key={a.slug} className="overflow-hidden rounded-md shadow-sm ring-1 ring-neutral-100">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={a.image} alt={a.title} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                <span className="absolute right-3 top-3 rounded-full bg-brand-green/90 px-3 py-1 text-[10px] tracking-wide text-white">
                  {a.tags.join(', ')}
                </span>
              </div>
              <div className="bg-white p-5">
                <p className="text-[10px] tracking-wide text-brand-green">
                  Author: {a.author} | {a.date}
                </p>
                <h3 className="mt-2 font-serif text-base">{a.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600">{a.excerpt}</p>
                <Link
                  to={`/stories/${a.slug}`}
                  className="mt-3 inline-flex items-center gap-1 text-[10px] tracking-[0.2em] text-brand-green hover:underline"
                >
                  READ STORY
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              aria-label="Previous"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="btn-icon p-2.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`flex h-9 w-9 items-center justify-center rounded-full text-xs ${
                  i === page
                    ? 'bg-neutral-900 text-white'
                    : 'border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              aria-label="Next"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="rounded-full bg-black p-2.5 text-white hover:bg-neutral-800 disabled:opacity-40"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
