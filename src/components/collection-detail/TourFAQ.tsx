import { useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'
import SplitText from '@/components/ui/SplitText'
import type { TourFAQ as TourFAQItem } from '@/data/journeys'

type Props = {
  faq: TourFAQItem[]
}

export default function TourFAQ({ faq }: Props) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-[#fafaf9] py-16 sm:py-20 border-t border-neutral-100 overflow-hidden">
      <div className="container-page">

        <div className="grid gap-12 lg:grid-cols-[1fr_580px] lg:gap-16 xl:gap-20 items-start">

          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-24">
            <AnimateIn variant="fade-up" duration={500}>
              <p className="eyebrow mb-3">Before You Go</p>
            </AnimateIn>
            <SplitText
              text="Frequently asked questions"
              as="h2"
              className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight"
              delay={60}
              stagger={50}
            />
            <AnimateIn variant="wipe-left" delay={300} duration={800}>
              <div className="mt-6 h-px w-12 bg-teal-500" />
            </AnimateIn>
            <AnimateIn variant="blur-up" delay={220} duration={650}>
              <p className="mt-5 text-sm leading-relaxed text-neutral-400 max-w-xs">
                Everything you need to know before your safari begins — answered by our team of specialists.
              </p>
            </AnimateIn>
          </div>

          {/* Right — accordion */}
          <div className="divide-y divide-neutral-200">
            {faq.map((item, i) => {
              const isOpen = open === i
              return (
                <AnimateIn key={i} variant="slide-right" delay={i * 70} duration={600}>
                  <div className="py-5">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-start justify-between gap-6 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span
                        className="font-serif text-[17px] leading-snug transition-colors duration-200"
                        style={{ color: isOpen ? '#0d9488' : '#171717' }}
                      >
                        {item.q}
                      </span>
                      <span
                        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300"
                        style={{
                          background: isOpen ? '#0d9488' : '#f5f5f5',
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        }}
                      >
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={isOpen ? '#fff' : '#737373'} strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>

                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{
                        maxHeight: isOpen ? '300px' : '0px',
                        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    >
                      <p className="mt-4 pb-2 text-sm leading-relaxed text-neutral-500 pr-0 sm:pr-12">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
