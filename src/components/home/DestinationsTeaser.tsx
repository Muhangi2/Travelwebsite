import { useState } from 'react'
import { NavLink } from 'react-router-dom'

type Spotlight = {
  country: string
  slug: string
  tagline: string
  body: string
  image: string
  imageAlt: string
}

const spotlights: Spotlight[] = [
  {
    country: 'Uganda: The Pearl of Africa',
    slug: 'uganda',
    tagline: 'Mountain gorillas. Tree-climbing lions. The source of the Nile.',
    body:
      "A sanctuary for luxury adventurers, Uganda offers a rare blend of raw wilderness and refined comfort. Encounter mountain gorillas in ancient forests, glide across crater lakes by yacht, and unwind in boutique lodges perched on volcanic ridges.",
    image: '/images/activities/gorilla-trekking/17-gorilla-ah1i6854.jpg',
    imageAlt: 'Mountain gorilla in Uganda’s Bwindi Impenetrable Forest',
  },
  {
    country: 'Rwanda: A Thousand Hills',
    slug: 'rwanda',
    tagline: 'Sustainable luxury and conservation triumphs.',
    body:
      "From misty volcanoes where mountain gorillas roam to the restored Big-Five plains of Akagera — Rwanda is small, modern and conservation-led. Wilderness Bisate, Singita Kwitonda and Wilderness Magashi set the global benchmark for safari luxury.",
    image: '/images/parks/rwanda/volcanoes/wilderness-bisate-1.jpg',
    imageAlt: 'Wilderness Bisate eco-luxury lodge, Volcanoes National Park',
  },
  {
    country: 'Kenya: The Original Safari',
    slug: 'kenya',
    tagline: 'Where the great migration meets private conservancies.',
    body:
      "Kenya is the safari country reinvented through private conservancies. The Mara migration, elephants under Kilimanjaro, the rhinos of Laikipia and the unique Samburu Five — every chapter delivered with exclusivity at its core.",
    image: '/images/parks/kenya/masai-mara/a-balloon-sunrise.jpg',
    imageAlt: 'Hot-air balloon at sunrise over the Masai Mara',
  },
]

export default function DestinationsTeaser() {
  const [idx, setIdx] = useState(0)
  const total = spotlights.length
  const s = spotlights[idx]

  return (
    <section className="bg-white py-16 sm:py-20 md:py-28">
      <div className="container-page">
        <div className="text-center">
          <p className="eyebrow">Destinations</p>
          <h2 className="mt-3">Three Countries · One Continent of Wonder</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-brand-muted sm:text-base">
            Uganda, Rwanda and Kenya — each a different chapter of the East African safari, each curated to the
            highest standard of comfort, access and authenticity.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 md:mt-14 md:grid-cols-2 md:gap-14">
          <div className="order-2 md:order-1 md:pl-6">
            <p className="font-serif text-sm italic text-brand-green sm:text-base">{s.tagline}</p>
            <h3 className="mt-3">{s.country}</h3>
            <p className="mt-5 text-sm leading-relaxed text-brand-charcoal sm:text-base">{s.body}</p>
            <NavLink to={`/destinations/${s.slug}`} className="btn-primary mt-7 bg-brand-green text-white">
              EXPLORE {s.country.split(':')[0].toUpperCase()}
            </NavLink>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src={s.image}
                alt={s.imageAlt}
                className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent p-4 sm:p-5">
                <p className="text-xs tracking-[0.2em] text-white/90 uppercase">{s.country}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between sm:mt-12">
          <p className="text-sm text-brand-muted">
            <span className="text-brand-ink">{idx + 1}</span> / {total}
          </p>
          <div className="mx-4 h-px flex-1 bg-neutral-200 sm:mx-6">
            <div
              className="h-full bg-brand-green transition-all duration-500"
              style={{ width: `${((idx + 1) / total) * 100}%` }}
            />
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Previous destination"
              onClick={() => setIdx((p) => (p - 1 + total) % total)}
              className="rounded-full border border-neutral-300 p-3 text-brand-ink transition hover:border-brand-green hover:bg-brand-cream"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              aria-label="Next destination"
              onClick={() => setIdx((p) => (p + 1) % total)}
              className="rounded-full border border-neutral-300 p-3 text-brand-ink transition hover:border-brand-green hover:bg-brand-cream"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
