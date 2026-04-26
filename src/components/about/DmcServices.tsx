import { useState } from 'react'

const services = [
  {
    title: 'FIT Itineraries',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Group & Incentive Travel',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Gorilla & Chimpanzee Trekking',
    image: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Cultural Encounters',
    image: 'https://images.unsplash.com/photo-1604569370408-cea5e9d99cf6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Conservation Experiences',
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Luxury Lodge Stays',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Photography Expeditions',
    image: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1200&q=80',
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

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {visible.map((s, idx) => {
            const num = String(((start + idx) % max) + 1).padStart(2, '0')
            return (
              <article key={`${num}-${s.title}`} className="relative aspect-[4/3] overflow-hidden rounded-md">
                <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
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
              className="rounded-full border border-neutral-300 p-3 hover:bg-neutral-50"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              aria-label="Next"
              onClick={() => setStart((s) => (s + 1) % max)}
              className="rounded-full border border-neutral-300 p-3 hover:bg-neutral-50"
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
