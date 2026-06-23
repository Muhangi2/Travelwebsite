import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/articles'
import { useStories } from '@/sanity/stories'
import Reveal, { Stagger } from '@/components/ui/Reveal'
import Picture from '@/components/Picture'

const PER_PAGE = 6

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-neutral-400">
    <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
  </svg>
)

const ClearIcon = ({ onClick }: { onClick: () => void }) => (
  <button type="button" onClick={onClick} aria-label="Clear search"
    className="shrink-0 rounded-full p-0.5 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  </button>
)

export default function AllArticles() {
  const [active, setActive] = useState('All')
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(0)
  const { items: articles } = useStories()

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return articles.filter((a) => {
      const matchTag = active === 'All' || a.tags.some((t) => t.toLowerCase() === active.toLowerCase())
      const matchSearch =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q)) ||
        a.author.toLowerCase().includes(q)
      return matchTag && matchSearch
    })
  }, [active, query, articles])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const safePage = Math.min(page, totalPages - 1)
  const visible = filtered.slice(safePage * PER_PAGE, safePage * PER_PAGE + PER_PAGE)

  function selectCategory(c: string) {
    setActive(c)
    setPage(0)
  }

  function clearSearch() {
    setQuery('')
    setPage(0)
  }

  return (
    <section id="articles" className="bg-white pb-24">
      <div className="container-page">

        {/* ── Search + filter bar ── */}
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            {/* Search input */}
            <div className="relative flex flex-1 items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 shadow-sm transition focus-within:border-neutral-400 focus-within:bg-white focus-within:shadow-md">
              <SearchIcon />
              <input
                type="search"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setPage(0) }}
                placeholder="Search stories, topics, destinations…"
                className="flex-1 bg-transparent text-sm text-neutral-800 placeholder-neutral-400 outline-none"
              />
              {query && <ClearIcon onClick={clearSearch} />}
            </div>

            {/* Result count */}
            <p className="shrink-0 text-xs text-neutral-400 sm:min-w-[80px] sm:text-right">
              {filtered.length} {filtered.length === 1 ? 'story' : 'stories'}
            </p>
          </div>
        </Reveal>

        {/* ── Category pills ── */}
        <Reveal delay={60}>
          <div className="mt-5 flex gap-2 overflow-x-auto pb-1 hide-scrollbar sm:flex-wrap">
            {categories.map((c) => {
              const isActive = c === active
              const count = c === 'All'
                ? articles.length
                : articles.filter((a) => a.tags.some((t) => t.toLowerCase() === c.toLowerCase())).length
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => selectCategory(c)}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-1.5 text-[11px] font-medium tracking-wide transition ${
                    isActive
                      ? 'border-black bg-black text-white'
                      : 'border-neutral-800 bg-white text-neutral-700 hover:bg-black hover:text-white'
                  }`}
                >
                  {c}
                  <span className={`rounded-full px-1.5 py-0.5 text-[10px] leading-none ${
                    isActive ? 'bg-white/20 text-white' : 'bg-neutral-900 text-white'
                  }`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* ── Heading ── */}
        <Reveal delay={80}>
          <div className="mt-12 flex items-baseline justify-between border-b border-neutral-100 pb-4">
            <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl">All Articles</h2>
            {(query || active !== 'All') && (
              <button
                type="button"
                onClick={() => { setActive('All'); setQuery(''); setPage(0) }}
                className="text-[11px] tracking-wide text-neutral-400 underline-offset-2 hover:text-black hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>
        </Reveal>

        {/* ── Grid ── */}
        {visible.length > 0 ? (
          <Stagger className="cards-scroll-3 mt-8 gap-6" staggerMs={80}>
            {visible.map((a) => (
              <article key={a.slug} className="card-lift overflow-hidden rounded-xl ring-1 ring-black">
                <div className="img-zoom relative aspect-[4/3] overflow-hidden">
                  <Picture src={a.image} alt={a.title} loading="lazy" decoding="async" imgClassName="h-full w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-1 p-3">
                    {a.tags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => selectCategory(tag)}
                        className="rounded-full bg-black/80 px-2.5 py-1 text-[10px] tracking-wide text-white backdrop-blur-sm transition hover:bg-black"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col bg-white p-5">
                  <p className="text-[10px] tracking-wide text-neutral-400">
                    {a.author} · {a.date}
                  </p>
                  <h3 className="mt-2 font-serif text-base leading-snug">{a.title}</h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-neutral-500">{a.excerpt}</p>
                  <Link
                    to={`/stories/${a.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.18em] text-black transition hover:gap-3"
                  >
                    READ STORY
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </Stagger>
        ) : (
          <Reveal>
            <div className="mt-16 flex flex-col items-center gap-4 py-16 text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-neutral-300">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
              </svg>
              <p className="text-sm text-neutral-500">No stories found for <span className="font-medium text-neutral-800">"{query || active}"</span></p>
              <button
                type="button"
                onClick={() => { setActive('All'); setQuery(''); setPage(0) }}
                className="mt-1 text-xs tracking-wide text-black underline underline-offset-2 hover:text-neutral-600"
              >
                Clear and browse all
              </button>
            </div>
          </Reveal>
        )}

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <Reveal>
            <div className="mt-14 flex items-center justify-center gap-2">
              <button
                aria-label="Previous"
                type="button"
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={safePage === 0}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition hover:border-black hover:text-black disabled:pointer-events-none disabled:opacity-30"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
              </button>

              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i)}
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-medium transition ${
                    i === safePage
                      ? 'bg-black text-white shadow-sm'
                      : 'border border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:text-black'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                aria-label="Next"
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={safePage === totalPages - 1}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white shadow-sm transition hover:bg-neutral-800 disabled:pointer-events-none disabled:opacity-30"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </div>

            <p className="mt-4 text-center text-[11px] text-neutral-400">
              Page {safePage + 1} of {totalPages}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
