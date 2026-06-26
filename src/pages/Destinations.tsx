import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useCountries } from '@/sanity/destinations'
import type { Country } from '@/data/destinations'
import Reveal from '@/components/ui/Reveal'
import HeroStagger, { HeroItem } from '@/components/ui/HeroStagger'
import Picture from '@/components/Picture'

// ─── 3-D rotating card carousel ───────────────────────────────────────────────

function DestinationsCarousel({ countries }: { countries: Country[] }) {
  const [active, setActive] = useState(0)
  const count = countries.length

  useEffect(() => {
    if (count < 2) return
    const id = setInterval(() => setActive(i => (i + 1) % count), 2500)
    return () => clearInterval(id)
  }, [count])

  const go = (dir: 1 | -1) => setActive(i => (i + dir + count) % count)

  return (
    <div
      className="relative overflow-hidden bg-white py-16 sm:py-24"
    >
      {/* heading */}
      <Reveal>
        <div className="container-page mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-2">Where to go</p>
            <h2>Choose your chapter</h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm leading-relaxed text-neutral-500 sm:block">
            Four countries. One extraordinary region. Each one a world apart.
          </p>
        </div>
      </Reveal>

      {/* ── card stage ─────────────────────────────────── */}
      {/*  perspective is set on the parent so that all children share the   */}
      {/*  same vanishing point and appear to live in a single 3-D space.    */}
      <div
        className="relative mx-auto"
        style={{ height: 540, perspective: '1200px', perspectiveOrigin: '50% 50%' }}
      >
        {countries.map((c, i) => {
          let offset = i - active
          if (offset > count / 2) offset -= count
          if (offset < -count / 2) offset += count

          const abs = Math.abs(offset)
          const isActive = abs === 0
          const isAdjacent = abs === 1

          if (abs > 1) return null

          const tx = offset * 370
          const tz = isActive ? 70 : -30
          const ry = offset * -10
          const sc = isActive ? 1 : 0.85

          return (
            <div
              key={c.slug}
              className="absolute"
              style={{
                width: 360,
                height: 480,
                left: '50%',
                top: '50%',
                marginLeft: -180,
                marginTop: -240,

                transform: `translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${sc})`,
                opacity: isActive ? 1 : 0.88,
                zIndex: isActive ? 10 : 4,

                transition: 'transform 0.9s cubic-bezier(0.22,1,0.36,1), opacity 0.9s cubic-bezier(0.22,1,0.36,1)',
                cursor: isAdjacent ? 'pointer' : 'auto',
              }}
              // Clicking a side card makes it the active one (no navigation)
              onClick={() => isAdjacent && setActive(i)}
            >
              <Link
                to={`/destinations/${c.slug}`}
                className="group block h-full"
                // Prevent navigation when the user clicks a side card to select it
                onClick={e => isAdjacent && e.preventDefault()}
              >
                <div
                  className="relative h-full overflow-hidden rounded-3xl"
                  style={{
                    boxShadow: isActive
                      ? '0 40px 80px -20px rgba(0,0,0,0.45), 0 0 0 1px rgba(0,0,0,0.06)'
                      : '0 8px 24px -8px rgba(0,0,0,0.2)',
                    transition: 'box-shadow 0.9s cubic-bezier(0.22,1,0.36,1)',
                  }}
                >
                  <Picture
                    src={c.heroImage}
                    alt={c.name}
                    imgClassName="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    fetchPriority={isActive ? 'high' : 'auto'}
                    loading={isActive ? 'eager' : 'lazy'}
                  />

                  {/* gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* ghost number */}
                  <span
                    aria-hidden
                    className="absolute right-4 top-4 select-none font-serif text-[80px] font-bold leading-none text-white/[0.08]"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* bottom content */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
                      {c.parks.length} national parks
                    </p>
                    <div className="flex items-end justify-between gap-3">
                      <h2 className="text-2xl leading-none text-white">{c.name}</h2>
                      <span className="flex h-8 w-8 flex-shrink-0 translate-y-1 items-center justify-center rounded-full border border-white/30 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                        >
                          <path d="M7 17L17 7M9 7h8v8" />
                        </svg>
                      </span>
                    </div>
                    {/* animated underline on hover */}
                    <div className="mt-3 h-px origin-left scale-x-0 bg-white/30 transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>

      {/* controls */}
      <div className="mt-10 flex items-center justify-center gap-5">
        <button type="button" aria-label="Previous" onClick={() => go(-1)} className="btn-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="flex gap-2">
          {countries.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Destination ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                i === active ? 'w-8 bg-black' : 'w-2 bg-neutral-300'
              }`}
            />
          ))}
        </div>
        <button type="button" aria-label="Next" onClick={() => go(1)} className="btn-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Destinations() {
  const { list } = useCountries()

  return (
    <div>
      <SEO
        title="Destinations — Uganda, Rwanda & Kenya Safari"
        description="Explore East Africa's finest safari destinations. Uganda's gorilla forests, Rwanda's volcanoes, and Kenya's sweeping savannahs — all curated by Still Wild Safaris."
        url="/destinations"
      />
      {/* ── Hero ─────────────────────────────────────────── */}
      <div
        className="relative flex h-[100svh] items-end bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/destinations/tanzania/sayari-serengeti-elephant-walking-safari.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />

        <div className="container-page relative pb-16 pt-36 text-white">
          <HeroStagger>
            <HeroItem>
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">
                East Africa
              </p>
            </HeroItem>
            <HeroItem>
              <h1 className="font-serif text-5xl leading-none tracking-tight sm:text-6xl lg:text-7xl">
                Destinations
              </h1>
            </HeroItem>
            <HeroItem>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65 sm:max-w-sm">
                Choose where to begin. Each destination opens a different chapter of East Africa.
              </p>
            </HeroItem>
            <HeroItem>
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById('destinations-carousel')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
              >
                <span>Explore</span>
                <svg
                  className="animate-bounce"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </button>
            </HeroItem>
          </HeroStagger>
        </div>
      </div>

      {/* ── Carousel ─────────────────────────────────────── */}
      <div id="destinations-carousel">
        <DestinationsCarousel countries={list} />
      </div>
    </div>
  )
}
