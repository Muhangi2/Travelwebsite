import { useState } from 'react'
import { Link } from 'react-router-dom'
import { countries as countriesData } from '@/data/destinations'

const countries = Object.values(countriesData).map((c) => ({
  slug: c.slug,
  name: c.name,
  parks: c.parks.map((p) => ({ slug: p.slug, name: p.name })),
  images: [c.heroImage, c.parkSummaryImage, ...c.parks.slice(0, 2).map((p) => p.image)],
}))

export default function DestinationsMenu({ onClose }: { onClose: () => void }) {
  const [active, setActive] = useState(countries[0]?.slug ?? '')
  const [imageIndex, setImageIndex] = useState(0)
  const country = countries.find((c) => c.slug === active) ?? countries[0]

  if (!country) return null

  return (
    <div className="absolute left-1/2 top-full z-40 w-[920px] max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-3">
      <div className="overflow-hidden rounded-md bg-white shadow-2xl ring-1 ring-black/5">
      <div className="grid grid-cols-[260px_1fr]">
        <aside className="border-r border-neutral-100 bg-white p-6">
          <Link
            to="/destinations"
            onClick={onClose}
            className="inline-flex items-center gap-1 font-serif text-xl text-neutral-900 transition hover:text-brand-green"
          >
            Destinations
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
          <ul className="mt-5 space-y-3 text-sm">
            {countries.map((c) => {
              const isActive = c.slug === active
              return (
                <li key={c.slug}>
                  <Link
                    to={`/destinations/${c.slug}`}
                    onMouseEnter={() => {
                      setActive(c.slug)
                      setImageIndex(0)
                    }}
                    onClick={onClose}
                    className={`flex w-full items-center justify-between text-left ${
                      isActive ? 'font-medium text-brand-green' : 'text-neutral-700 hover:text-neutral-900'
                    }`}
                  >
                    <span>{c.name}</span>
                    {isActive && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </aside>

        <div className="bg-brand-green p-6 text-white">
          <button
            onClick={onClose}
            className="ml-auto flex items-center gap-1 text-xs text-white/80 hover:text-white"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M9 9l6 6M15 9l-6 6" />
            </svg>
            Close
          </button>

          <div className="mt-3 grid gap-6 md:grid-cols-2">
            <ul className="space-y-3 text-sm">
              {country.parks.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/destinations/${country.slug}/${p.slug}`}
                    onClick={onClose}
                    className="block hover:underline"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="relative">
              <div className="overflow-hidden rounded-md">
                <img
                  src={country.images[imageIndex]}
                  alt={`${country.name} lodge`}
                  className="h-56 w-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div className="mt-3 flex justify-center gap-1.5">
                {country.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImageIndex(i)}
                    className={`h-1.5 w-1.5 rounded-full ${i === imageIndex ? 'bg-white' : 'bg-white/40'}`}
                    aria-label={`Image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
