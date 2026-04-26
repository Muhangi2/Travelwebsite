import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Park } from '@/data/destinations'

type Props = {
  countrySlug: string
  parks: Park[]
}

export default function NationalParksList({ countrySlug, parks }: Props) {
  const [index, setIndex] = useState(0)
  const park = parks[index]

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-serif text-4xl">National Parks</h2>

        <div className="mt-10 grid items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-md shadow-md">
            <img src={park.image} alt={park.name} className="h-full w-full object-cover" />
          </div>
          <div>
            <h3 className="font-serif text-2xl text-brand-green">{park.name}</h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">{park.blurb}</p>
            <Link
              to={`/destinations/${countrySlug}/${park.slug}`}
              className="mt-6 inline-block rounded-full bg-brand-green px-6 py-3 text-[10px] tracking-[0.2em] text-white shadow hover:bg-brand-green-dark"
            >
              EXPLORE {park.name.split(' ')[0].toUpperCase()}
            </Link>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between">
          <p className="text-sm text-neutral-500">
            <span className="text-neutral-900">{index + 1}</span>/{parks.length}
          </p>
          <div className="mx-6 h-px flex-1 bg-neutral-200">
            <div
              className="h-full bg-brand-green transition-all"
              style={{ width: `${((index + 1) / parks.length) * 100}%` }}
            />
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Previous park"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              className="rounded-full border border-neutral-300 p-3 hover:bg-neutral-50 disabled:opacity-40"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              aria-label="Next park"
              onClick={() => setIndex((i) => Math.min(parks.length - 1, i + 1))}
              disabled={index === parks.length - 1}
              className="rounded-full border border-neutral-300 p-3 hover:bg-neutral-50 disabled:opacity-40"
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
