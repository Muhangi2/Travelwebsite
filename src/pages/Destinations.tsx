import { Link } from 'react-router-dom'
import { useCountries } from '@/sanity/destinations'
import type { Country } from '@/data/destinations'
import Reveal from '@/components/ui/Reveal'
import HeroStagger, { HeroItem } from '@/components/ui/HeroStagger'
import Picture from '@/components/Picture'

type CardProps = {
  country: Country
  index: number
  className?: string
  tall?: boolean
}

function DestinationCard({ country, index, className = '' }: CardProps) {
  return (
    <Link
      to={`/destinations/${country.slug}`}
      className={`group relative block overflow-hidden rounded-2xl ${className}`}
    >
      <Picture
        src={country.heroImage}
        alt={country.name}
        imgClassName="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        fetchPriority={index === 0 ? 'high' : 'auto'}
        loading={index === 0 ? 'eager' : 'lazy'}
      />

      {/* gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

      {/* large background number */}
      <span
        aria-hidden
        className="absolute right-4 top-4 select-none font-serif text-[100px] font-bold leading-none text-white/[0.07] transition-colors duration-500 group-hover:text-white/[0.13] sm:text-[120px]"
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* content */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
          {country.parks.length} national parks
        </p>

        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-2xl leading-none text-white sm:text-3xl">
            {country.name}
          </h2>

          {/* arrow pill */}
          <span className="flex h-9 w-9 flex-shrink-0 translate-y-1 items-center justify-center rounded-full border border-white/30 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <svg
              className="text-white"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </span>
        </div>

        {/* animated rule */}
        <div className="mt-4 h-px origin-left scale-x-0 bg-white/25 transition-transform duration-500 group-hover:scale-x-100" />
      </div>
    </Link>
  )
}

export default function Destinations() {
  const { list } = useCountries()

  const [ug, rw, ke, tz, ...rest] = list

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────── */}
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
                onClick={() =>
                  document.getElementById('destinations-grid')?.scrollIntoView({ behavior: 'smooth' })
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

      {/* ── Editorial Grid ───────────────────────────── */}
      <section id="destinations-grid" className="bg-white py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <div className="mb-12 flex items-end justify-between gap-6">
              <div>
                <p className="eyebrow mb-2">Where to go</p>
                <h2 className="font-serif text-3xl sm:text-4xl">Choose your chapter</h2>
              </div>
              <p className="hidden max-w-xs text-right text-sm leading-relaxed text-neutral-500 sm:block">
                Four countries. One extraordinary region. Each one a world apart.
              </p>
            </div>
          </Reveal>

          {/* Row 1: Uganda (large) + Rwanda stacked */}
          <div className="grid gap-3 sm:gap-4 lg:grid-cols-12">
            {ug && (
              <Reveal className="lg:col-span-7" variant="left">
                <DestinationCard country={ug} index={0} className="h-[64vw] lg:h-[640px]" tall />
              </Reveal>
            )}

            <div className="grid gap-3 sm:gap-4 lg:col-span-5">
              {rw && (
                <Reveal variant="right" delay={80}>
                  <DestinationCard country={rw} index={1} className="h-[52vw] sm:h-[40vw] lg:h-[308px]" />
                </Reveal>
              )}
              {ke && (
                <Reveal variant="right" delay={160}>
                  <DestinationCard country={ke} index={2} className="h-[52vw] sm:h-[40vw] lg:h-[308px]" />
                </Reveal>
              )}
            </div>
          </div>

          {/* Row 2: Tanzania wide */}
          {tz && (
            <Reveal className="mt-3 sm:mt-4" delay={240}>
              <DestinationCard country={tz} index={3} className="h-[50vw] lg:h-[420px]" />
            </Reveal>
          )}

          {/* Any overflow countries */}
          {rest.length > 0 && (
            <div className="cards-scroll-3 mt-3 gap-3 sm:mt-4 sm:gap-4">
              {rest.map((c, i) => (
                <Reveal key={c.slug} delay={(i + 4) * 80}>
                  <DestinationCard country={c} index={i + 4} className="h-[52vw] sm:h-[36vw] lg:h-[320px]" />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
