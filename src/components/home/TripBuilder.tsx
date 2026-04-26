import { useState } from 'react'

const adventures = [
  { id: 'gorillas', label: 'Gorillas', image: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=900&q=80' },
  { id: 'big-five', label: 'Big Five', image: 'https://images.unsplash.com/photo-1546708973-b321b3f1c4f6?auto=format&fit=crop&w=900&q=80' },
  { id: 'birding', label: 'Birding', image: 'https://images.unsplash.com/photo-1526666923127-b2970f64b422?auto=format&fit=crop&w=900&q=80' },
]

const STEPS = 8

export default function TripBuilder() {
  const [selected, setSelected] = useState<Set<string>>(new Set(['gorillas']))
  const currentStep = 1

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="font-serif italic text-brand-green">Step {currentStep} of {STEPS} - Trip Basics</p>
        <h2 className="mt-3 font-serif text-5xl">Start Your Safari Journey<br />Today</h2>
        <p className="mt-4 text-sm text-neutral-600">
          Select Your Adventure: Choose from curated packages or start a custom request
        </p>

        <div className="mt-10 flex items-center justify-center gap-2">
          {Array.from({ length: STEPS }).map((_, i) => {
            const step = i + 1
            const isActive = step === currentStep
            const isDone = step < currentStep
            return (
              <div key={step} className="flex items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs ${
                    isActive
                      ? 'bg-brand-green text-white shadow-md'
                      : isDone
                        ? 'bg-brand-green/20 text-brand-green'
                        : 'border border-neutral-300 bg-white text-neutral-500'
                  }`}
                >
                  {step === STEPS ? '🎉' : step}
                </div>
                {step < STEPS && <div className={`mx-1 h-px w-8 ${isDone || isActive ? 'bg-brand-green' : 'bg-neutral-300'}`} />}
              </div>
            )
          })}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {adventures.map((a) => {
            const isSelected = selected.has(a.id)
            return (
              <button
                key={a.id}
                onClick={() => toggle(a.id)}
                className="group relative overflow-hidden rounded-md text-left shadow-sm ring-1 ring-neutral-200 transition hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={a.image} alt={a.label} className="h-full w-full object-cover transition group-hover:scale-105" />
                </div>
                <div className="bg-white px-5 py-4">
                  <p className="font-serif text-lg">{a.label}</p>
                </div>
                <span
                  className={`absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-white ${
                    isSelected ? 'bg-brand-green' : 'bg-brand-green/70'
                  }`}
                >
                  {isSelected && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
              </button>
            )
          })}
        </div>

        <div className="mt-10">
          <button className="inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3 text-xs tracking-[0.2em] text-white shadow hover:bg-brand-green-dark">
            NEXT STEP
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
