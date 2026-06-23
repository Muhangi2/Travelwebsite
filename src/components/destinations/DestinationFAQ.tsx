import { useState } from 'react'
import type { Country } from '@/data/destinations'
import Reveal from '@/components/ui/Reveal'

export default function DestinationFAQ({
  countryName,
  faqs,
  backgroundImage,
}: {
  countryName: string
  faqs: Country['countryFaqs']
  backgroundImage?: string
}) {
  const [open, setOpen] = useState<number | null>(0)

  if (!faqs?.length) return null

  return (
    <section id="faq" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background */}
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />
          <div className="absolute inset-0 bg-[#f5f4f2]/65" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[#f5f4f2]" />
      )}

      {/* Giant ghosted number */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-4 bottom-0 select-none font-serif text-[clamp(8rem,22vw,18rem)] font-bold leading-none text-black/[0.04]"
      >
        09
      </span>

      <div className="container-page relative z-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-10">
            <span className="eyebrow">09 &nbsp; FAQ</span>
            <div className="h-px flex-1 bg-neutral-300" />
          </div>
          <h2 className="text-4xl leading-tight text-neutral-900 sm:text-5xl">
            {countryName}:<br />Your Questions Answered
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[2fr_3fr]">
          {/* Left label */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-sm leading-relaxed text-neutral-500">
                Everything you need to know before you travel to {countryName}. Can't find your answer? Our
                specialists are available for a private consultation.
              </p>
              <button
                type="button"
                className="btn-primary mt-8"
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              >
                Speak to a Specialist
              </button>
            </div>
          </Reveal>

          {/* Accordion */}
          <div className="divide-y divide-neutral-300">
            {faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 40}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-start gap-5 py-7 text-left transition-colors"
                    aria-expanded={open === i}
                  >
                    {/* Number */}
                    <span className="mt-0.5 shrink-0 font-mono text-[11px] font-bold text-neutral-300">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {/* Question */}
                    <span className="flex-1 font-serif text-lg leading-snug text-neutral-900 sm:text-xl">
                      {faq.question}
                    </span>
                    {/* Icon */}
                    <span
                      className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        open === i
                          ? 'border-neutral-900 bg-neutral-900 text-white'
                          : 'border-neutral-300 bg-white text-neutral-500'
                      }`}
                      aria-hidden
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className={`transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      open === i ? 'grid-rows-[1fr] pb-7 opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pl-9 text-sm leading-relaxed text-neutral-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
