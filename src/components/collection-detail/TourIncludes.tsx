import AnimateIn from '@/components/ui/AnimateIn'
import SplitText from '@/components/ui/SplitText'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

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
      </div>

      {/* Split panel */}
      <div className="container-page pb-10 sm:pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-2 rounded-2xl overflow-hidden shadow-sm ring-1 ring-neutral-200">

          {/* LEFT — dark included */}
          <div className="bg-[#0d1f1e] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 xl:px-20">
            <div className="flex items-center gap-4 mb-6 sm:mb-10">
              <AnimateIn variant="count-in" duration={1000}>
                <span className="font-serif text-[48px] sm:text-[64px] leading-none text-teal-800/40 select-none animate-float-slow">
                  <AnimatedCounter target={1} prefix="0" duration={800} />
                </span>
              </AnimateIn>
              <div>
                <AnimateIn variant="slide-right" delay={120} duration={600}>
                  <p className="text-[10px] tracking-[0.28em] text-teal-500 uppercase mb-0.5">Your package</p>
                </AnimateIn>
                <AnimateIn variant="slide-right" delay={200} duration={600}>
                  <h3 className="font-serif text-2xl text-white">What's included</h3>
                </AnimateIn>
              </div>
            </div>

            <ul className="divide-y divide-white/[0.07]">
              {included.map((item, i) => (
                <AnimateIn key={i} as="li" variant="blur-up" delay={120 + i * 70} duration={750}>
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

          {/* RIGHT — light not-included */}
          <div className="bg-neutral-50 px-6 py-10 sm:px-10 sm:py-14 lg:px-14 xl:px-20">
            <div className="flex items-center gap-4 mb-6 sm:mb-10">
              <AnimateIn variant="count-in" delay={200} duration={1000}>
                <span className="font-serif text-[48px] sm:text-[64px] leading-none text-neutral-200 select-none">
                  <AnimatedCounter target={2} prefix="0" duration={1000} />
                </span>
              </AnimateIn>
              <div>
                <AnimateIn variant="slide-right" delay={300} duration={600}>
                  <p className="text-[10px] tracking-[0.28em] text-neutral-400 uppercase mb-0.5">Not included</p>
                </AnimateIn>
                <AnimateIn variant="slide-right" delay={380} duration={600}>
                  <h3 className="font-serif text-2xl text-neutral-800">Arrange separately</h3>
                </AnimateIn>
              </div>
            </div>

            <ul className="divide-y divide-neutral-200">
              {notIncluded.map((item, i) => (
                <AnimateIn key={i} as="li" variant="fade-up" delay={120 + i * 70} duration={750}>
                  <div className="flex items-start gap-4 py-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-400 ring-1 ring-neutral-300">
                      <CrossIcon />
                    </span>
                    <span className="text-[14px] text-neutral-500 leading-snug pt-0.5">{item}</span>
                  </div>
                </AnimateIn>
              ))}
            </ul>

            <AnimateIn variant="scale-up" delay={500} duration={700}>
              <div className="mt-8 rounded-xl bg-white p-5 ring-1 ring-neutral-200">
                <p className="text-[12px] text-neutral-500 leading-relaxed">
                  <span className="font-semibold text-neutral-700">Need help arranging extras?</span>{' '}
                  Our team can assist with flights, visas, vaccinations, and travel insurance — just ask when you enquire.
                </p>
              </div>
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  )
}
