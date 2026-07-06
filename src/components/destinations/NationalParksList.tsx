import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Park } from '@/data/destinations'
import Reveal from '@/components/ui/Reveal'
import Picture from '@/components/Picture'

type Props = {
  countrySlug: string
  parks: Park[]
  backgroundImage?: string
}

export default function NationalParksList({ countrySlug, parks, backgroundImage }: Props) {
  const [index, setIndex] = useState(0)
  const park = parks[index]

  if (!park) return null

  return (
    <section id="national-parks" className="relative overflow-hidden py-20">
      {/* Background */}
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />
          {/* Very light overlay — keeps dark text legible */}
          <div className="absolute inset-0 bg-white/88 backdrop-blur-[2px]" />
        </>
      )}
      {!backgroundImage && <div className="absolute inset-0 bg-white" />}

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center">National Parks</h2>
        </Reveal>

        <div className="mt-10 grid items-center gap-12 md:grid-cols-2">
          <Reveal variant="left" key={`img-${park.slug}`}>
            <div className="img-zoom overflow-hidden rounded-2xl shadow-lg">
              <Picture src={park.image} alt={park.name} loading="lazy" decoding="async" imgClassName="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal variant="right" delay={100} key={`text-${park.slug}`}>
            <div className="section-rule" />
            <h3 className="mt-4 text-2xl">{park.name}</h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">{park.blurb}</p>
            <Link
              to={`/safari-collections?country=${countrySlug.toUpperCase()}`}
              className="btn-primary mt-6"
            >
              VIEW SAFARIS
            </Link>
          </Reveal>
        </div>

        {parks.length > 1 && (
          <div className="mt-14 flex items-center justify-between">
            <p className="text-sm text-neutral-500">
              <span className="text-neutral-900">{index + 1}</span>/{parks.length}
            </p>
            <div className="mx-6 h-px flex-1 bg-neutral-200">
              <div
                className="h-full bg-black transition-all"
                style={{ width: `${((index + 1) / parks.length) * 100}%` }}
              />
            </div>
            <div className="flex gap-2">
              <button
                aria-label="Previous park"
                type="button"
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
                disabled={index === 0}
                className="btn-icon"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                aria-label="Next park"
                type="button"
                onClick={() => setIndex((i) => Math.min(parks.length - 1, i + 1))}
                disabled={index === parks.length - 1}
                className="btn-icon"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
