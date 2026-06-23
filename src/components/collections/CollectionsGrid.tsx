import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTourPackages } from '@/sanity/tourPackages'
import Reveal from '@/components/ui/Reveal'
import Picture from '@/components/Picture'

const tagIcon: Record<string, React.ReactNode> = {
  'Luxury Adventure': (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l2.4 6.5L21 10l-5 4.4 1.6 6.6L12 17.7 6.4 21 8 14.4 3 10l6.6-1.5z" />
    </svg>
  ),
  'Family-Friendly': (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2" />
      <path d="M3 21c0-3 2.7-6 6-6s6 3 6 6M14 21c0-2 1.3-4 3-4s3 2 3 4" />
    </svg>
  ),
  'Photography Focus': (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-5 py-2 text-xs font-medium tracking-wide transition-all duration-200 ${
        active
          ? 'border-neutral-900 bg-neutral-900 text-white shadow-sm'
          : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:text-neutral-900'
      }`}
    >
      {label}
    </button>
  )
}

function FilterGroup({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2.5 sm:flex-row sm:items-start">
      <span className="w-28 shrink-0 pt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-400">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
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

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <Reveal>
          <h2 className="text-center font-serif text-3xl sm:text-4xl lg:text-5xl">
            Safari Collections and Journeys
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-neutral-500">
            Hand-crafted itineraries across Uganda, Rwanda and Kenya — filter by experience type,
            destination or trip length to find your perfect journey.
          </p>
        </Reveal>

        {/* ── Filter Panel ─────────────────────────────────────── */}
        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">

          {/* Search */}
          <div className="relative">
            <svg
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search safaris by name…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-white py-3.5 pl-11 pr-10 text-sm text-neutral-800 placeholder:text-neutral-400 outline-none transition focus:border-neutral-400 focus:ring-2 focus:ring-neutral-100"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-neutral-400 transition hover:text-neutral-700"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Divider */}
          <div className="my-5 border-t border-neutral-200" />

          {/* Filter Groups */}
          <div className="space-y-4">
            <FilterGroup label="Type">
              <Pill label="All" active={activeTag === null} onClick={() => setActiveTag(null)} />
              {allTags.map((tag) => (
                <Pill
                  key={tag}
                  label={tag}
                  active={activeTag === tag}
                  onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                />
              ))}
            </FilterGroup>

            <FilterGroup label="Destination">
              <Pill label="All" active={activeCountry === null} onClick={() => setActiveCountry(null)} />
              {allCountries.map((c) => (
                <Pill
                  key={c}
                  label={c}
                  active={activeCountry === c}
                  onClick={() => setActiveCountry(c === activeCountry ? null : c)}
                />
              ))}
            </FilterGroup>

            <FilterGroup label="Duration">
              <Pill label="All lengths" active={activeDuration === null} onClick={() => setActiveDuration(null)} />
              {DURATION_RANGES.map((r) => (
                <Pill
                  key={r.label}
                  label={r.label}
                  active={activeDuration === r.label}
                  onClick={() => setActiveDuration(r.label === activeDuration ? null : r.label)}
                />
              ))}
            </FilterGroup>
          </div>

          {/* Result count + clear */}
          {isFiltered && (
            <div className="mt-5 flex items-center justify-between border-t border-neutral-200 pt-4">
              <p className="text-sm text-neutral-500">
                <span className="font-semibold text-neutral-900">{filtered.length}</span>{' '}
                {filtered.length === 1 ? 'journey' : 'journeys'} found
              </p>
              <button
                onClick={clearAll}
                className="text-xs font-medium text-neutral-400 underline underline-offset-2 transition hover:text-neutral-900"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
        {/* ── End Filter Panel ─────────────────────────────────── */}

        {/* Cards */}
        {filtered.length > 0 ? (
          <div className="cards-scroll-3 mt-14 gap-6">
            {filtered.map((j, i) => (
              <Reveal key={j.id} delay={i * 90} className="h-full">
                <Link
                  to={`/safari-collections/${j.id}`}
                  className="card-lift group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-neutral-200"
                >
                  <div className="img-zoom relative aspect-[4/3] shrink-0 overflow-hidden">
                    <Picture
                      src={j.image}
                      alt={j.title}
                      loading="lazy"
                      decoding="async"
                      imgClassName="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    {j.country && (
                      <span className="absolute right-3 top-3 rounded-full bg-black/80 px-3.5 py-1 text-[10px] font-medium tracking-[0.18em] text-white backdrop-blur-sm">
                        {j.country}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex flex-wrap gap-3 text-[11px] text-neutral-500">
                      {j.tags.map((t) => (
                        <span key={t} className="inline-flex items-center gap-1.5">
                          {tagIcon[t]} {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-3 font-serif text-xl leading-snug text-neutral-900">{j.title}</h3>
                    <p className="mt-1.5 text-sm text-neutral-400">{j.duration}</p>
                    <div className="mt-auto pt-5">
                      <span
                        className={`inline-block rounded-full px-5 py-2 text-[10px] font-medium tracking-[0.18em] transition ${
                          j.highlight
                            ? 'bg-neutral-900 text-white'
                            : 'border border-neutral-300 text-neutral-700 group-hover:border-neutral-500'
                        }`}
                      >
                        VIEW FULL ITINERARY
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-16 py-20 text-center">
            <p className="text-base text-neutral-400">No journeys match your current filters.</p>
            <button
              onClick={clearAll}
              className="mt-3 text-sm font-medium underline underline-offset-2 hover:text-neutral-900"
            >
              Clear all filters
            </button>
          </div>
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
