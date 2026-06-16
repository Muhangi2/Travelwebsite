import { NavLink } from 'react-router-dom'
import type { Park } from '@/data/destinations'
import Reveal from '@/components/ui/Reveal'

export default function WhereToGo({
  countryName,
  countrySlug,
  parks,
}: {
  countryName: string
  countrySlug: string
  parks: Park[]
}) {
  if (!parks.length) return null

  return (
    <section className="relative overflow-hidden bg-[#f5f4f2] py-24 sm:py-32" id="national-parks">
      {/* Giant ghosted number */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 top-8 select-none font-serif text-[clamp(8rem,22vw,18rem)] font-bold leading-none text-black/[0.04]"
      >
        03
      </span>

      <div className="container-page relative z-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-10">
            <span className="eyebrow">03 &nbsp; Where to Go</span>
            <div className="h-px flex-1 bg-neutral-300" />
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-serif text-4xl leading-tight text-neutral-900 sm:text-5xl">
              {countryName}'s<br className="sm:hidden" /> National Parks
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-500 sm:text-right">
              Each park is a completely different world. We design itineraries that show you the full spectrum.
            </p>
          </div>
        </Reveal>

        {/* Park list — editorial rows */}
        <div className="mt-12 flex flex-col">
          {parks.map((park, i) => {
            const topWildlife = park.attractions
              .slice(0, 2)
              .map((a) => a.title)
              .join(' · ')

            return (
              <Reveal key={park.slug} delay={i * 60}>
                <NavLink
                  to={`/destinations/${countrySlug}/${park.slug}`}
                  className="group grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-neutral-300 py-7 transition-colors duration-200 last:border-b hover:bg-white sm:grid-cols-[3rem_1fr_1fr_auto] sm:items-center sm:gap-x-8 sm:py-8"
                >
                  {/* Number */}
                  <span className="row-span-2 flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-full border border-neutral-300 font-mono text-[11px] font-bold text-neutral-400 transition-colors group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white sm:row-span-1 sm:h-12 sm:w-12">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Name + location */}
                  <div className="sm:col-span-1">
                    <p className="font-serif text-lg leading-snug text-neutral-900 sm:text-xl">
                      {park.name}
                    </p>
                    <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-neutral-500">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z" /><circle cx="12" cy="9" r="2.5" />
                      </svg>
                      {park.location}
                    </p>
                  </div>

                  {/* Wildlife + best time */}
                  <div className="col-start-2 sm:col-start-auto">
                    <p className="text-sm text-neutral-700">{topWildlife}</p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                      Best: {park.bestTime}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 transition-colors group-hover:text-neutral-900 sm:flex">
                    Explore
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </NavLink>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
