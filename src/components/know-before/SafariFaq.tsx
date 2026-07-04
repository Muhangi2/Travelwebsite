import { useState } from 'react'
import Picture from '@/components/Picture'
import Reveal, { Stagger } from '@/components/ui/Reveal'
import { safariFaqs as faqs } from '@/data/safariFaq'

export default function SafariFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative isolate overflow-hidden py-16">
      <Picture
        src="/images/lodges/uganda/queen-elizabeth-national-park/ishasha-wilderness-camp/DSC_6859.jpg"
        alt="Ishasha Wilderness Camp, Queen Elizabeth National Park"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/65" />

      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="text-center text-white">Safari FAQ for East Africa</h2>
          <p className="mt-2 text-center text-sm text-white/70">
            Answers to the questions we hear most before guests travel with us.
          </p>
        </Reveal>

        <Stagger className="mt-10 space-y-3" staggerMs={40}>
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <div key={f.q} className="card-lift rounded-md bg-white/10 ring-1 ring-white/20 backdrop-blur-sm">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm text-white">{f.q}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`shrink-0 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/15 px-5 py-4 text-sm leading-relaxed text-white/80">
                      {f.a}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Stagger>

        <Reveal>
          <p className="mt-8 text-center text-sm text-white/70">
            Still have questions? <a href="/contact" className="underline underline-offset-2 text-white hover:text-white/80">Reach out any time</a> — we're always happy to help you plan with confidence.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
