import { useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'
import SplitText from '@/components/ui/SplitText'

type Props = {
  included: string[]
  notIncluded: string[]
}

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12l5 5L20 7" />
  </svg>
)

const CrossIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
)

export default function TourIncludes({ included, notIncluded }: Props) {
  const [active, setActive] = useState<'included' | 'not'>('included')

  return (
    <section className="overflow-hidden">

      {/* Section header */}
      <div className="bg-white px-6 py-10 sm:py-14 lg:py-16 text-center">
        <AnimateIn variant="fade-up" duration={500}>
          <p className="eyebrow mb-3 text-teal-600">What's covered</p>
        </AnimateIn>
        <SplitText
          text="Included & not included"
          as="h2"
          className="font-serif text-2xl sm:text-4xl lg:text-5xl text-neutral-900 leading-tight"
          delay={80}
          stagger={55}
        />
        <AnimateIn variant="blur-up" delay={280} duration={700}>
          <p className="mt-4 text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Every detail of your safari is arranged — here's exactly what sits inside and outside your package price.
          </p>
        </AnimateIn>

        {/* Toggle tabs */}
        <AnimateIn variant="fade-up" delay={320} duration={600}>
          <div className="mt-8 inline-flex rounded-full bg-neutral-100 p-1 gap-1">
            <button
              onClick={() => setActive('included')}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase transition-all duration-250 ${
                active === 'included'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              <span className={`flex h-4 w-4 items-center justify-center rounded-full transition-all ${
                active === 'included' ? 'bg-teal-500/30 text-teal-300' : 'bg-teal-500/15 text-teal-600'
              }`}>
                <CheckIcon />
              </span>
              What's included
            </button>
            <button
              onClick={() => setActive('not')}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase transition-all duration-250 ${
                active === 'not'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              <span className={`flex h-4 w-4 items-center justify-center rounded-full transition-all ${
                active === 'not' ? 'bg-white/20 text-white' : 'bg-neutral-200 text-neutral-400'
              }`}>
                <CrossIcon />
              </span>
              Not included
            </button>
          </div>
        </AnimateIn>
      </div>

      {/* Panel */}
      <div className="container-page pb-10 sm:pb-16 lg:pb-20">
        <div className="rounded-2xl overflow-hidden shadow-sm ring-1 ring-neutral-200">

          {active === 'included' && (
            <div className="bg-black px-6 py-10 sm:px-10 sm:py-14 lg:px-14 xl:px-20">
              <div className="flex items-center gap-4 mb-6 sm:mb-10">
                <span className="font-serif text-[48px] sm:text-[64px] leading-none text-teal-800/40 select-none">01</span>
                <div>
                  <p className="text-[10px] tracking-[0.28em] text-teal-500 uppercase mb-0.5">Your package</p>
                  <h3 className="text-2xl text-white">What's included</h3>
                </div>
              </div>
              <ul className="divide-y divide-white/[0.07]">
                {included.map((item, i) => (
                  <AnimateIn key={i} as="li" variant="blur-up" delay={i * 50} duration={500}>
                    <div className="flex items-start gap-4 py-4 group">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-teal-400 ring-1 ring-teal-500/20 transition-all duration-200 group-hover:bg-teal-500/30 group-hover:scale-110">
                        <CheckIcon />
                      </span>
                      <span className="text-[14px] text-white/70 leading-snug pt-0.5 transition-colors duration-200 group-hover:text-white">{item}</span>
                    </div>
                  </AnimateIn>
                ))}
              </ul>
            </div>
          )}

          {active === 'not' && (
            <div className="bg-neutral-50 px-6 py-10 sm:px-10 sm:py-14 lg:px-14 xl:px-20">
              <div className="flex items-center gap-4 mb-6 sm:mb-10">
                <span className="font-serif text-[48px] sm:text-[64px] leading-none text-neutral-200 select-none">02</span>
                <div>
                  <p className="text-[10px] tracking-[0.28em] text-neutral-400 uppercase mb-0.5">Not included</p>
                  <h3 className="text-2xl text-neutral-800">Arrange separately</h3>
                </div>
              </div>
              <ul className="divide-y divide-neutral-200">
                {notIncluded.map((item, i) => (
                  <AnimateIn key={i} as="li" variant="fade-up" delay={i * 50} duration={500}>
                    <div className="flex items-start gap-4 py-4">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-400 ring-1 ring-neutral-300">
                        <CrossIcon />
                      </span>
                      <span className="text-[14px] text-neutral-500 leading-snug pt-0.5">{item}</span>
                    </div>
                  </AnimateIn>
                ))}
              </ul>
              <AnimateIn variant="scale-up" delay={200} duration={600}>
                <div className="mt-8 rounded-xl bg-white p-5 ring-1 ring-neutral-200">
                  <p className="text-[12px] text-neutral-500 leading-relaxed">
                    <span className="font-semibold text-neutral-700">Need help arranging extras?</span>{' '}
                    Our team can assist with flights, visas, vaccinations, and travel insurance — just ask when you enquire.
                  </p>
                </div>
              </AnimateIn>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
