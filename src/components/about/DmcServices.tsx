import { useState } from 'react'

const services = [
  {
    title: 'FIT Itineraries',
    image: '/images/activities/gorilla-trekking/14-mgl-golden-monkey-bb.jpg',
  },
  {
    title: 'Group & Incentive Travel',
    image: '/images/activities/walking-safari/1752747977432-kenya-suyian-conservancy-nature-walk-16.jpg',
  },
  {
    title: 'Gorilla & Chimpanzee Trekking',
    image: '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.jpg',
  },
  {
    title: 'Cultural Encounters',
    image: '/images/lodges/kenya/amboseli-national-park/ol-donyo-lodge-1/masaai.jpg',
  },
  {
    title: 'Conservation Experiences',
    image: '/images/activities/big-five/roho-ya-selous-elephant.jpg',
  },
  {
    title: 'Luxury Lodge Stays',
    image: '/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/10-kyambura-lodge-main-lodge-area-04.jpg',
  },
  {
    title: 'Photography Expeditions',
    image: '/images/parks/uganda/murchison-falls/dsc-6280.jpg',
  },
]

const VISIBLE = 3

export default function DmcServices() {
  const [start, setStart] = useState(0)
  const max = services.length
  const visible = Array.from({ length: VISIBLE }, (_, i) => services[(start + i) % max])

  return (
    <section className="bg-white pb-20 pt-12">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-serif text-4xl">Our DMC Services</h2>

        <div className="cards-scroll-3 mt-8 gap-6">
          {visible.map((s, idx) => {
            const num = String(((start + idx) % max) + 1).padStart(2, '0')
            return (
              <article key={`${num}-${s.title}`} className="relative aspect-[4/3] overflow-hidden rounded-md">
                <img src={s.image} alt={s.title} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="font-serif text-xs text-white/70">{num}</p>
                  <h3 className="mt-1 font-serif text-lg">{s.title}</h3>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <p className="text-sm text-neutral-500">
            <span className="text-neutral-900">{start + 1}</span>/{max}
          </p>
          <div className="mx-6 h-px flex-1 bg-neutral-200">
            <div
              className="h-full bg-brand-green transition-all"
              style={{ width: `${((start + 1) / max) * 100}%` }}
            />
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Previous"
              onClick={() => setStart((s) => (s - 1 + max) % max)}
              className="btn-icon"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              aria-label="Next"
              onClick={() => setStart((s) => (s + 1) % max)}
              className="btn-icon"
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
