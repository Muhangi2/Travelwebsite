import { useState } from 'react'

export type JourneyDay = {
  day: number
  title: string
  body: string
  accommodation: string
  meals: string
  image: string
}

const UgandaBadge = () => (
  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full ring-1 ring-neutral-200">
    <div className="grid h-full w-full grid-rows-3 text-xs">
      <div className="bg-black" />
      <div className="bg-yellow-400" />
      <div className="bg-red-600" />
    </div>
  </div>
)

export default function SafariJourney({ days }: { days: JourneyDay[] }) {
  const [index, setIndex] = useState(0)
  const day = days[index]

  return (
    <section className="bg-white pb-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-serif text-4xl text-brand-forest">Safari Journey</h2>

        <article className="mt-10 overflow-hidden rounded-lg shadow-sm ring-1 ring-neutral-200 md:grid md:grid-cols-2">
          <div className="p-8 md:p-10">
            <UgandaBadge />
            <p className="mt-6 font-serif text-2xl">Day {day.day}:</p>
            <h3 className="font-serif text-2xl">{day.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">{day.body}</p>

            <p className="mt-6 text-sm">
              <span className="font-semibold">Accommodation:</span>{' '}
              <span className="text-neutral-600">{day.accommodation}</span>
            </p>
            <p className="mt-2 text-sm">
              <span className="font-semibold">Meals:</span>{' '}
              <span className="text-neutral-600">{day.meals}</span>
            </p>
          </div>
          <div>
            <img src={day.image} alt={day.title} className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </div>
        </article>

        <div className="mt-10 flex items-center justify-between">
          <p className="text-sm text-neutral-500">
            <span className="text-neutral-900">{index + 1}</span>/{days.length}
          </p>
          <div className="mx-6 h-px flex-1 bg-neutral-200">
            <div
              className="h-full bg-brand-green transition-all"
              style={{ width: `${((index + 1) / days.length) * 100}%` }}
            />
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Previous day"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              className="rounded-full border border-neutral-300 p-3 hover:bg-neutral-50 disabled:opacity-40"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              aria-label="Next day"
              onClick={() => setIndex((i) => Math.min(days.length - 1, i + 1))}
              disabled={index === days.length - 1}
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
