import { useParams, Link, Navigate } from 'react-router-dom'
import { useTourPackage } from '@/sanity/tourPackages'
import SEO from '@/components/SEO'
import Picture from '@/components/Picture'

function parseAccommodation(raw: string): { tier: string | null; name: string }[] {
  if (!raw || raw === '—') return []
  if (raw.includes('|')) {
    return raw.split('|').map((part) => {
      const colonIdx = part.indexOf(':')
      if (colonIdx !== -1 && colonIdx < 16)
        return { tier: part.slice(0, colonIdx).trim(), name: part.slice(colonIdx + 1).trim() }
      return { tier: null, name: part.trim() }
    })
  }
  const colonIdx = raw.indexOf(':')
  if (colonIdx !== -1 && colonIdx < 16)
    return [{ tier: raw.slice(0, colonIdx).trim(), name: raw.slice(colonIdx + 1).trim() }]
  return [{ tier: null, name: raw.trim() }]
}

export default function SafariDayDetail() {
  const { slug, day } = useParams<{ slug: string; day: string }>()
  const { journey } = useTourPackage(slug)

  if (!journey) return <Navigate to="/safari-collections" replace />

  const dayNumber = parseInt(day ?? '1', 10)
  const current = journey.days.find((d) => d.day === dayNumber)
  if (!current) return <Navigate to={`/safari-collections/${slug}`} replace />

  const prev = journey.days.find((d) => d.day === dayNumber - 1) ?? null
  const next = journey.days.find((d) => d.day === dayNumber + 1) ?? null
  const stays = parseAccommodation(current.accommodation ?? '')

  const allImages = [
    current.image,
    journey.heroImage,
    ...journey.days.filter((d) => d.day !== dayNumber).map((d) => d.image),
  ].filter((img, idx, arr) => img && arr.indexOf(img) === idx) as string[]

  return (
    <>
      <SEO
        title={`Day ${current.day}: ${current.title} — ${journey.title.replace('\n', ' ')}`}
        description={current.body}
        image={current.image}
        url={`/safari-collections/${slug}/day/${current.day}`}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative isolate flex h-[100svh] flex-col justify-end overflow-hidden">
        <img
          src={current.image}
          alt={current.title}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover motion-safe:animate-[fadeIn_1.4s_ease-out]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/40 to-black/20" />

        {/* Back link */}
        <Link
          to={`/safari-collections/${slug}`}
          className="absolute left-5 top-28 z-10 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase text-white backdrop-blur-sm ring-1 ring-white/20 transition hover:bg-white/20 sm:left-8"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to journey
        </Link>

        {/* Watermark number */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none font-serif leading-none text-white/[0.04] sm:right-10"
          style={{ fontSize: 'clamp(120px, 22vw, 280px)' }}
        >
          {String(dayNumber).padStart(2, '0')}
        </span>

        <div className="container-page relative z-10 pb-14 sm:pb-20">
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/80">
              Day {current.day} of {journey.days.length}
            </span>
          </div>
          <h1 className="max-w-3xl font-serif text-3xl leading-tight text-white sm:text-5xl lg:text-6xl">
            {current.title}
          </h1>
          <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
            {journey.title.replace('\n', ' ')}
          </p>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="container-page py-14 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-16 xl:grid-cols-[1fr_320px]">

            {/* Narrative */}
            <div>
              <div className="mb-8 h-[2px] w-10 rounded-full bg-black" />
              <p className="max-w-prose text-[15px] leading-[1.85] text-neutral-700 sm:text-[17px]">
                {current.body}
              </p>
              <div className="mt-12 rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-100">
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-neutral-400">Part of</p>
                <p className="mt-1 font-serif text-xl leading-snug text-neutral-900">
                  {journey.title.replace('\n', ' ')}
                </p>
                <Link
                  to={`/safari-collections/${slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-500 transition hover:text-black"
                >
                  View full itinerary
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {stays.length > 0 && (
                <div className="rounded-2xl bg-black p-6 text-white">
                  <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.22em] text-white/40">Stays</p>
                  <div className="space-y-4">
                    {stays.map(({ tier, name }, i) => (
                      <div key={i} className={i > 0 ? 'border-t border-white/10 pt-4' : ''}>
                        {tier && (
                          <span className={`mb-1.5 inline-block rounded px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.14em] ${
                            tier.toLowerCase().includes('luxury')
                              ? 'bg-white text-black'
                              : 'bg-white/15 text-white/70'
                          }`}>
                            {tier}
                          </span>
                        )}
                        <p className="font-serif text-[15px] leading-snug text-white">{name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {current.meals && (
                <div className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-100">
                  <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-neutral-400">Meals</p>
                  <p className="font-serif text-[15px] text-neutral-900">{current.meals}</p>
                </div>
              )}

              <Link
                to="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-neutral-800"
              >
                Curate My Journey
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────────── */}
      {allImages.length > 1 && (
        <section className="bg-neutral-950 py-14 sm:py-20">
          <div className="container-page">
            <div className="mb-10">
              <p className="eyebrow mb-3 text-white/40">Visual Journey</p>
              <h2 className="text-2xl text-white sm:text-3xl">More from this safari</h2>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3">
              {allImages.slice(0, 7).map((src, i) => {
                const isFeatured = i === 0
                const isTall = i === 3
                return (
                  <div
                    key={i}
                    className={`group overflow-hidden rounded-xl sm:rounded-2xl ${isFeatured ? 'col-span-2 lg:col-span-2' : ''} ${isTall ? 'row-span-2' : ''}`}
                  >
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ aspectRatio: isFeatured ? '16/9' : isTall ? '3/4' : '4/3' }}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── PREV / NEXT ─────────────────────────────────────────── */}
      {(prev || next) && (
        <section className="bg-white">
          <div className="container-page py-12 sm:py-16">
            <p className="eyebrow mb-8 text-neutral-400">Continue the journey</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {prev ? (
                <Link
                  to={`/safari-collections/${slug}/day/${prev.day}`}
                  className="group relative h-52 overflow-hidden rounded-2xl sm:h-64"
                >
                  <Picture src={prev.image} alt={prev.title} loading="lazy" imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="mb-1 flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
                      Day {prev.day}
                    </p>
                    <p className="font-serif text-base text-white line-clamp-2 sm:text-lg">{prev.title}</p>
                  </div>
                </Link>
              ) : <div />}

              {next ? (
                <Link
                  to={`/safari-collections/${slug}/day/${next.day}`}
                  className="group relative h-52 overflow-hidden rounded-2xl sm:h-64"
                >
                  <Picture src={next.image} alt={next.title} loading="lazy" imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-right">
                    <p className="mb-1 flex items-center justify-end gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                      Day {next.day}
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
                    </p>
                    <p className="font-serif text-base text-white line-clamp-2 sm:text-lg">{next.title}</p>
                  </div>
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
