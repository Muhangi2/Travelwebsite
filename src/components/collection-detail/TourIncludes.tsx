import { useState } from 'react'

type Props = {
  included: string[]
  notIncluded: string[]
}

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M5 12l5 5L20 7" />
  </svg>
)

const CrossIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
)

export default function TourIncludes({ included, notIncluded }: Props) {
  const [active, setActive] = useState<'included' | 'not'>('included')

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-page">

        {/* Eyebrow */}
        <p className="eyebrow text-center">What's Included &amp; What's Not</p>

        {/* Tabs */}
        <div className="mt-6 flex justify-center">
          <div className="inline-flex overflow-hidden rounded-full border border-neutral-200 bg-neutral-100 p-1 gap-1">
            <button
              onClick={() => setActive('included')}
              className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-200 ${
                active === 'included'
                  ? 'bg-black text-white shadow'
                  : 'text-neutral-500 hover:text-black'
              }`}
            >
              <span className={`flex h-4 w-4 items-center justify-center rounded-full ${
                active === 'included' ? 'bg-green-500 text-white' : 'bg-neutral-300 text-neutral-500'
              }`}>
                <CheckIcon />
              </span>
              Included
            </button>
            <button
              onClick={() => setActive('not')}
              className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-200 ${
                active === 'not'
                  ? 'bg-black text-white shadow'
                  : 'text-neutral-500 hover:text-black'
              }`}
            >
              <span className={`flex h-4 w-4 items-center justify-center rounded-full ${
                active === 'not' ? 'bg-red-400 text-white' : 'bg-neutral-300 text-neutral-500'
              }`}>
                <CrossIcon />
              </span>
              Not Included
            </button>
          </div>
        </div>

        {/* Panel */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">

          {active === 'included' && (
            <div className="bg-neutral-950 px-8 py-10 sm:px-12 sm:py-14">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                  <CheckIcon />
                </div>
                <h3 className="text-xl font-semibold text-white">What's included in your package</h3>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-xl bg-white/5 px-4 py-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                      <CheckIcon />
                    </span>
                    <span className="text-sm leading-snug text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {active === 'not' && (
            <div className="bg-neutral-50 px-8 py-10 sm:px-12 sm:py-14">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-400">
                  <CrossIcon />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800">Arrange separately</h3>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {notIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-xl bg-white px-4 py-3 ring-1 ring-neutral-200">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-400">
                      <CrossIcon />
                    </span>
                    <span className="text-sm leading-snug text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-white p-4 ring-1 ring-neutral-200">
                <p className="text-xs leading-relaxed text-neutral-500">
                  <span className="font-semibold text-neutral-700">Need help arranging extras?</span>{' '}
                  Our team can assist with flights, visas, vaccinations, and travel insurance — just ask when you enquire.
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
