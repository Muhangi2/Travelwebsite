import { useEffect, useRef, useState, type ReactNode } from 'react'
import SplitText from '@/components/ui/SplitText'
import AnimateIn from '@/components/ui/AnimateIn'
import Marquee from '@/components/ui/Marquee'

type Props = { highlights: string[] }

const MARQUEE_ITEMS = [
  'Expert-guided trekking',
  'Habituated gorilla families',
  'Luxury forest lodges',
  'Ancient Bwindi rainforest',
  'Private driver-guide',
  'All meals included',
  'Emergency evacuation cover',
  'Uganda Wildlife Authority permits',
]

const ROTATIONS = [-7, 6, -5, 8, -6, 5, -4, 7]

function ThrowIn({
  children,
  delay = 0,
  rotate = -5,
}: {
  children: ReactNode
  delay?: number
  rotate?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setTriggered(true); obs.disconnect() }
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={
        {
          '--tr': `${rotate}deg`,
          animation: triggered
            ? `card-thrown 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms both`
            : undefined,
          opacity: triggered ? undefined : 0,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}

export default function TourHighlights({ highlights }: Props) {
  return (
    <section className="relative bg-black overflow-hidden">
      <style>{`
        @keyframes card-thrown {
          from {
            opacity: 0;
            transform: translateY(-55px) rotate(var(--tr, -5deg)) scale(0.78);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(1);
          }
        }
      `}</style>

      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -top-20 left-10 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute top-40 right-0 h-96 w-96 rounded-full bg-white/4 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-white/3 blur-3xl" />

      {/* Header */}
      <div className="container-page relative py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1fr_260px] gap-8 lg:gap-10 items-end">
          <div>
            <AnimateIn variant="fade-up" duration={500}>
              <p className="eyebrow mb-4 sm:mb-5 text-white/50">Journey Highlights</p>
            </AnimateIn>
            <SplitText
              text="What makes this journey unforgettable"
              as="h2"
              className="font-serif text-3xl sm:text-4xl lg:text-[3.5rem] leading-[1.1] text-white"
              delay={60}
              stagger={45}
            />
          </div>
          <AnimateIn variant="fade-up" delay={350} duration={700}>
            <div className="lg:mb-1 space-y-4">
              <div className="h-[1.5px] w-12 rounded-full bg-white/60" />
              <p className="text-sm leading-relaxed text-white/40">
                Every element curated for your comfort, wonder, and absolute peace of mind.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Marquee */}
      <div className="border-y border-white/10 bg-white/5 py-4">
        <Marquee items={MARQUEE_ITEMS} speed={30} className="text-white/30" />
      </div>

      {/* Cards */}
      <div className="container-page relative py-8 sm:py-12 lg:py-16">
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <ThrowIn key={i} delay={i * 110} rotate={ROTATIONS[i % ROTATIONS.length]}>
              <div className="group relative flex h-full min-h-[130px] sm:min-h-[160px] flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_64px_rgba(0,0,0,0.8)] bg-white/[0.06] ring-1 ring-white/[0.12] hover:bg-white/[0.10] hover:ring-white/25">

                {/* Inner shimmer */}
                <div className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/8 via-transparent to-transparent" />

                {/* Watermark number */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-4 -right-1 select-none font-serif text-[64px] sm:text-[96px] leading-none text-white/[0.04]"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Accent line */}
                <div className="relative mb-3 sm:mb-6 h-[1.5px] w-6 sm:w-8 rounded-full bg-white/50 transition-all duration-500 group-hover:w-12 sm:group-hover:w-16 group-hover:bg-white" />

                {/* Text */}
                <p className="relative z-10 flex-1 text-[12px] sm:text-[14px] lg:text-[15px] font-medium leading-relaxed text-white/65 group-hover:text-white/90 transition-colors duration-300">
                  {item}
                </p>
              </div>
            </ThrowIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
