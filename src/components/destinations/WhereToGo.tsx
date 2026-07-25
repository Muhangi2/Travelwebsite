import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import type { Park } from '@/data/destinations'
import Reveal from '@/components/ui/Reveal'
import Picture from '@/components/Picture'

const CARD_W = 700
const GAP = 32

export default function WhereToGo({
  countryName,
  countrySlug,
  parks,
  backgroundImage,
}: {
  countryName: string
  countrySlug: string
  parks: Park[]
  backgroundImage?: string
}) {
  if (!parks.length) return null

  const [paused, setPaused] = useState(false)

  // Triple the list so the loop is seamless
  const items = [...parks, ...parks, ...parks]
  const shiftPx = parks.length * (CARD_W + GAP)
  const duration = parks.length * 18
  const bg = backgroundImage ?? parks[0].image

  return (
    <section id="where-to-go" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${bg}')` }}
      />
      <div className="absolute inset-0 bg-black/65" />

      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 top-8 select-none font-serif text-[clamp(8rem,22vw,18rem)] font-bold leading-none text-white/[0.04]"
      >
        03
      </span>

      <div className="relative z-10">
        {/* Section header */}
        <div className="container-page">
          <Reveal>
            <div className="mb-10 flex items-center gap-4">
              <span className="eyebrow text-white/60">03 &nbsp; Where to Go</span>
              <div className="h-px flex-1 bg-white/20" />
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-4xl leading-tight text-white sm:text-5xl">
                {countryName}&apos;s<br className="sm:hidden" /> National Parks
              </h2>
              <div className="flex items-center gap-4">
                <p className="max-w-xs text-sm leading-relaxed text-white/60 sm:text-right">
                  Each park is a completely different world. We design itineraries that show you the full spectrum.
                </p>
                <button
                  type="button"
                  onClick={() => setPaused((p) => !p)}
                  aria-label={paused ? 'Play carousel' : 'Pause carousel'}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  {paused ? (
                    /* Play icon */
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                  ) : (
                    /* Pause icon */
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16" rx="1" />
                      <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Infinite marquee strip full bleed */}
        <div className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div
            style={{
              display: 'flex',
              gap: `${GAP}px`,
              paddingLeft: `${GAP}px`,
              width: 'max-content',
              animationName: 'ww-marquee',
              animationDuration: `${duration}s`,
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationPlayState: paused ? 'paused' : 'running',
            }}
          >
            {items.map((park, i) => {
              const topWildlife = park.attractions
                .slice(0, 2)
                .map((a) => a.title)
                .join(' · ')

              return (
                <NavLink
                  key={`${park.slug}-${i}`}
                  to={`/destinations/${countrySlug}/${park.slug}`}
                  className="group flex shrink-0 flex-col overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-2xl sm:h-[clamp(300px,55vw,420px)] sm:flex-row"
                  style={{ width: `min(90vw, ${CARD_W}px)` }}
                >
                  {/* Image top on mobile, left 45% on larger screens */}
                  <div className="relative h-44 w-full shrink-0 overflow-hidden sm:h-auto sm:w-[45%]">
                    <Picture
                      src={park.image}
                      alt={park.name}
                      loading="lazy"
                      imgClassName="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Gradient fade into content */}
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent sm:inset-y-0 sm:left-auto sm:right-0 sm:h-full sm:w-10 sm:bg-gradient-to-r sm:from-transparent sm:to-white" />
                    <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 font-mono text-[12px] font-bold text-white backdrop-blur-sm">
                      {String((i % parks.length) + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content bottom on mobile, right 55% on larger screens */}
                  <div className="flex flex-1 flex-col justify-between px-6 py-6 sm:px-8 sm:py-8">
                    {/* Top: location + name */}
                    <div>
                      <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z" />
                          <circle cx="12" cy="9" r="2.5" />
                        </svg>
                        {park.location}
                      </p>
                      <h3 className="mt-3 text-2xl leading-snug text-neutral-900">
                        {park.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-500 line-clamp-3">
                        {park.blurb}
                      </p>
                    </div>

                    {/* Middle: stats */}
                    <div className="space-y-4">
                      <div className="h-px bg-neutral-100" />
                      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400">Top Wildlife</p>
                          <p className="mt-1.5 text-sm leading-snug text-neutral-700">{topWildlife}</p>
                        </div>
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400">Best Time</p>
                          <p className="mt-1.5 text-sm leading-snug text-neutral-700">{park.bestTime}</p>
                        </div>
                      </div>
                      <div className="h-px bg-neutral-100" />
                    </div>

                    {/* Bottom: CTA */}
                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-900 transition-colors group-hover:text-amber-700">
                      Explore Park
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </NavLink>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ww-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-${shiftPx}px); }
        }
      `}</style>
    </section>
  )
}
