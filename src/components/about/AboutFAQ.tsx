import { useState } from 'react'
import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

const faqs = [
  {
    q: 'Does choosing a regenerative safari cost more?',
    a: "Not necessarily. Many of our eco-lodge partners are competitively priced with conventional options. Where there's a small premium, it's usually tied directly to a specific, traceable impact — like solar infrastructure or community wages — not vague marketing.",
  },
  {
    q: 'Will I have to compromise on comfort or wildlife sightings?',
    a: 'No. We design itineraries around the same world-class parks, lodges, and guiding standards as any premium safari operator. Regenerative travel is a layer we build in — not a downgrade you accept.',
  },
  {
    q: 'How do I know the carbon offset claims are real?',
    a: "We only partner with verified offset and reforestation programs, and we're committed to publishing our impact numbers transparently as we grow — including the years where progress is slower than we'd like.",
  },
]

export default function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative isolate overflow-hidden py-20">
      <Picture
        src="/images/lodges/uganda/bwindi/buhoma-lodge/dsc-7419.jpg"
        alt="Forest-facing veranda at Buhoma Lodge, Bwindi Impenetrable Forest"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/65" />

      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="text-center text-white">Frequently Asked Questions</h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={f.q} delay={i * 80}>
                <div className="rounded-md border border-neutral-200 bg-white">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm">{f.q}</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="border-t border-neutral-100 px-5 py-4 text-sm leading-relaxed text-neutral-600">
                      {f.a}
                    </div>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
