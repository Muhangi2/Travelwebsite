import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { countries } from '@/data/destinations'

type Item = {
  country: string
  image: string
  href: string
}

// Round-robin interleave parks across countries so a 3-card window
// usually shows three different countries.
const buildItems = (): Item[] => {
  const buckets = Object.values(countries).map((c) =>
    c.parks.map<Item>((p) => ({
      country: c.name,
      image: p.image,
      href: `/destinations/${c.slug}/${p.slug}`,
    })),
  )
  const out: Item[] = []
  let added = true
  while (added) {
    added = false
    for (const b of buckets) {
      const next = b.shift()
      if (next) {
        out.push(next)
        added = true
      }
    }
  }
  return out
}

const items = buildItems()

const VISIBLE = 3
const AUTO_MS = 4000

export default function DestinationsTeaser() {
  const [start, setStart] = useState(0)
  const total = items.length

  useEffect(() => {
    const id = setInterval(() => setStart((s) => (s + 1) % total), AUTO_MS)
    return () => clearInterval(id)
  }, [total])

  const visible = Array.from({ length: VISIBLE }, (_, i) => items[(start + i) % total])
  const prev = () => setStart((s) => (s - 1 + total) % total)
  const next = () => setStart((s) => (s + 1) % total)

  return (
    <section className="bg-white py-20 sm:py-24 md:py-32">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className="lg:pr-8">
            <p className="eyebrow">Destinations &amp; Experiences</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight text-brand-ink sm:text-5xl lg:text-[3.5rem]">
              Where will you go wild?
            </h2>
            <p className="mt-7 max-w-md text-base leading-[1.8] text-brand-muted">
              Africa is a continent of unparalleled diversity, offering a myriad of landscapes, cultures, and wildlife
              encounters. Explore our handpicked destinations, each promising a unique and unforgettable safari
              experience. From the vast plains of the Serengeti to the lush forests of Rwanda, your next adventure
              awaits.
            </p>
            <div className="mt-12 flex items-center gap-5 border-l border-neutral-300 pl-8">
              <NavLink
                to="/destinations"
                aria-label="Discover destinations"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-rust text-brand-rust transition hover:bg-brand-rust hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </NavLink>
              <NavLink
                to="/destinations"
                className="text-xs font-semibold tracking-[0.28em] text-brand-rust hover:text-brand-rust-dark"
              >
                DISCOVER DESTINATIONS
              </NavLink>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              {visible.map((it, i) => (
                <NavLink
                  key={`${start}-${i}-${it.href}`}
                  to={it.href}
                  className="group relative block aspect-[3/5] overflow-hidden"
                >
                  <img
                    src={it.image}
                    alt={it.country}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-[1500ms] ease-out group-hover:scale-110 animate-[fadeIn_900ms_ease-out]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-7">
                    <p className="font-serif text-3xl leading-tight text-white drop-shadow-md sm:text-4xl md:text-[2.5rem]">
                      {it.country}
                    </p>
                  </div>
                </NavLink>
              ))}
            </div>

            <button
              onClick={prev}
              aria-label="Previous destination"
              className="absolute left-[33.333%] top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/90 bg-black/15 text-white backdrop-blur-sm transition hover:bg-black/40 sm:h-14 sm:w-14"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next destination"
              className="absolute left-[66.666%] top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/90 bg-black/15 text-white backdrop-blur-sm transition hover:bg-black/40 sm:h-14 sm:w-14"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
