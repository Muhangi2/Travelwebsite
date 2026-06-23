import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTourPackages } from '@/sanity/tourPackages'
import Reveal from '@/components/ui/Reveal'
import Picture from '@/components/Picture'

const tagIcon: Record<string, React.ReactNode> = {
  'Luxury Adventure': (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l2.4 6.5L21 10l-5 4.4 1.6 6.6L12 17.7 6.4 21 8 14.4 3 10l6.6-1.5z" />
    </svg>
  ),
  'Family-Friendly': (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2" />
      <path d="M3 21c0-3 2.7-6 6-6s6 3 6 6M14 21c0-2 1.3-4 3-4s3 2 3 4" />
    </svg>
  ),
  'Photography Focus': (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 8h4l2-3h6l2 3h4v12H3z" /><circle cx="12" cy="14" r="3.5" />
    </svg>
  ),
}

const DURATION_RANGES = [
  { label: 'Short  ·  1–4 days', min: 1, max: 4 },
  { label: 'Medium  ·  5–7 days', min: 5, max: 7 },
  { label: 'Long  ·  8+ days', min: 8, max: Infinity },
]

function getDays(duration: string): number {
  const match = duration.match(/^(\d+)/)
  return match ? parseInt(match[1], 10) : 0
}

function extractCountries(country?: string): string[] {
  if (!country) return []
  return country.split(/[·•\/,]/).map((s) => s.trim()).filter(Boolean)
}

function Pill({
  label,
  count,
  active,
  onClick,
}: {
  label: string
  count?: number
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-[11px] font-medium tracking-[0.1em] transition ${
        active
          ? 'border-black bg-black text-white'
          : 'border-neutral-800 bg-white text-neutral-700 hover:bg-black hover:text-white'
      }`}
    >
      {label}
      {count !== undefined && (
        <span className={`rounded-full px-1.5 py-0.5 text-[10px] leading-none ${
          active ? 'bg-white/20 text-white' : 'bg-neutral-900 text-white'
        }`}>
          {count}
        </span>
      )}
    </button>
  )
}

export default function CollectionsGrid() {
  const { cards: journeys } = useTourPackages()
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [activeCountry, setActiveCountry] = useState<string | null>(null)
  const [activeDuration, setActiveDuration] = useState<string | null>(null)

  const allCountries = useMemo(() => {
    const set = new Set<string>()
    journeys.forEach((j) => extractCountries(j.country).forEach((c) => set.add(c)))
    return Array.from(set).sort()
  }, [journeys])

  const allTags = useMemo(() => {
    const set = new Set<string>()
    journeys.forEach((j) => j.tags.forEach((t) => set.add(t)))
    return Array.from(set)
  }, [journeys])

  const isFiltered = !!(search || activeTag || activeCountry || activeDuration)

  const filtered = useMemo(() => {
    return journeys.filter((j) => {
      if (search && !j.title.toLowerCase().includes(search.toLowerCase())) return false
      if (activeTag && !j.tags.includes(activeTag)) return false
      if (activeCountry && !extractCountries(j.country).includes(activeCountry)) return false
      if (activeDuration) {
        const range = DURATION_RANGES.find((r) => r.label === activeDuration)
        if (range) {
          const days = getDays(j.duration)
          if (days < range.min || days > range.max) return false
        }
      }
      return true
    })
  }, [journeys, search, activeTag, activeCountry, activeDuration])

  function clearAll() {
    setSearch('')
    setActiveTag(null)
    setActiveCountry(null)
    setActiveDuration(null)
  }

  function countFor(tag: string) {
    return journeys.filter((j) => j.tags.includes(tag)).length
  }

  function countForCountry(c: string) {
    return journeys.filter((j) => extractCountries(j.country).includes(c)).length
  }

  function countForDuration(range: typeof DURATION_RANGES[number]) {
    return journeys.filter((j) => {
      const d = getDays(j.duration)
      return d >= range.min && d <= range.max
    }).length
  }

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-page">

        {/* Heading */}
        <Reveal>
          <h2 className="text-center">
            Safari Collections and Journeys
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center leading-relaxed text-neutral-500">
            Hand-crafted itineraries across Uganda, Rwanda and Kenya — filter by type, destination or length.
          </p>
        </Reveal>

        {/* ── Search + filter bar (Stories pattern) ── */}
        <Reveal delay={40}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <div className="relative flex flex-1 items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 shadow-sm transition focus-within:border-neutral-400 focus-within:bg-white focus-within:shadow-md">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-neutral-400">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search journeys by name…"
                className="flex-1 bg-transparent text-sm text-neutral-800 placeholder-neutral-400 outline-none"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  aria-label="Clear search"
                  className="shrink-0 rounded-full p-0.5 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            <p className="eyebrow shrink-0 sm:min-w-[80px] sm:text-right">
              {filtered.length} {filtered.length === 1 ? 'journey' : 'journeys'}
            </p>
          </div>
        </Reveal>

        {/* Type pills */}
        <Reveal delay={60}>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="eyebrow mr-2">Type</span>
            <Pill
              label="All"
              count={journeys.length}
              active={activeTag === null}
              onClick={() => setActiveTag(null)}
            />
            {allTags.map((tag) => (
              <Pill
                key={tag}
                label={tag}
                count={countFor(tag)}
                active={activeTag === tag}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              />
            ))}
          </div>
        </Reveal>

        {/* Destination pills */}
        <Reveal delay={80}>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="eyebrow mr-2">Where</span>
            <Pill
              label="All destinations"
              active={activeCountry === null}
              onClick={() => setActiveCountry(null)}
            />
            {allCountries.map((c) => (
              <Pill
                key={c}
                label={c}
                count={countForCountry(c)}
                active={activeCountry === c}
                onClick={() => setActiveCountry(c === activeCountry ? null : c)}
              />
            ))}
          </div>
        </Reveal>

        {/* Duration pills */}
        <Reveal delay={100}>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="eyebrow mr-2">Length</span>
            <Pill
              label="Any length"
              active={activeDuration === null}
              onClick={() => setActiveDuration(null)}
            />
            {DURATION_RANGES.map((r) => (
              <Pill
                key={r.label}
                label={r.label}
                count={countForDuration(r)}
                active={activeDuration === r.label}
                onClick={() => setActiveDuration(r.label === activeDuration ? null : r.label)}
              />
            ))}
          </div>
        </Reveal>

        {/* ── Section header + clear ── */}
        <Reveal delay={120}>
          <div className="mt-10 flex items-baseline justify-between border-b border-neutral-100 pb-4">
            <h3>All Journeys</h3>
            {isFiltered && (
              <button
                type="button"
                onClick={clearAll}
                className="eyebrow text-neutral-400 underline-offset-2 hover:text-black hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>
        </Reveal>

        {/* Cards */}
        {filtered.length > 0 ? (
          <div className="cards-scroll-3 mt-8 gap-6">
            {filtered.map((j, i) => (
              <Reveal key={j.id} delay={i * 80} className="h-full">
                <Link
                  to={`/safari-collections/${j.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl bg-white ring-1 ring-black transition-shadow duration-500 hover:shadow-xl"
                >
                  {/* ── Image ── */}
                  <div className="relative aspect-[4/3] shrink-0 overflow-hidden">
                    <Picture
                      src={j.image}
                      alt={j.title}
                      loading="lazy"
                      decoding="async"
                      imgClassName="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/45" />

                    {/* "Explore journey" label fades up on hover */}
                    <div className="absolute inset-0 flex items-end justify-center pb-6">
                      <span className="flex translate-y-3 items-center gap-2 text-[11px] font-medium tracking-[0.22em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        EXPLORE JOURNEY
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>

                    {/* Country badge — fades out on hover */}
                    {j.country && (
                      <span className="absolute right-3 top-3 rounded-full bg-black px-3.5 py-1 text-[10px] font-medium tracking-[0.18em] text-white transition-opacity duration-300 group-hover:opacity-0">
                        {j.country}
                      </span>
                    )}

                    {/* Highlight star */}
                    {j.highlight && (
                      <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-black transition-opacity duration-300 group-hover:opacity-0">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l2.4 6.5L21 10l-5 4.4 1.6 6.6L12 17.7 6.4 21 8 14.4 3 10l6.6-1.5z" />
                        </svg>
                        FEATURED
                      </span>
                    )}
                  </div>

                  {/* ── Content ── */}
                  <div className="flex flex-1 flex-col p-5 pt-4">

                    {/* Tags as small bordered pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {j.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1 rounded-full border border-neutral-200 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-neutral-500"
                        >
                          {tagIcon[t]} {t}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="mt-3 font-serif text-xl leading-snug transition-colors duration-300 group-hover:text-neutral-700">
                      {j.title}
                    </h3>

                    {/* Divider + duration */}
                    <div className="mt-3 flex items-center gap-3">
                      <span className="h-px flex-1 bg-neutral-100 transition-colors duration-300 group-hover:bg-neutral-200" />
                      <p className="shrink-0 text-xs font-medium tracking-wide text-neutral-400">{j.duration}</p>
                    </div>

                    {/* CTA button */}
                    <div className="mt-auto pt-5">
                      <span className="inline-flex items-center gap-2 rounded-full border border-black px-5 py-2.5 text-[10px] font-medium tracking-[0.18em] text-black transition-all duration-300 group-hover:bg-black group-hover:text-white">
                        VIEW FULL ITINERARY
                        <svg
                          width="12" height="12" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2.5"
                          className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="mt-16 flex flex-col items-center gap-4 py-16 text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-neutral-300">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
              </svg>
              <p className="text-sm text-neutral-500">
                No journeys match <span className="font-medium text-neutral-800">"{search || activeTag || activeCountry || activeDuration}"</span>
              </p>
              <button
                type="button"
                onClick={clearAll}
                className="mt-1 text-xs tracking-wide text-black underline underline-offset-2 hover:text-neutral-600"
              >
                Clear and browse all
              </button>
            </div>
          </Reveal>
        )}

        <Reveal>
          <div className="mt-16 text-center">
            <Link to="/contact" className="btn-primary">
              REQUEST A CUSTOM JOURNEY
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
