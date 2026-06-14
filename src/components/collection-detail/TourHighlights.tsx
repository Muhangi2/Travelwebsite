import { useEffect, useRef, useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'
import SplitText from '@/components/ui/SplitText'

type Props = {
  highlights: string[]
  images?: string[]
}

// Curated scenic/landscape images — never animal close-ups
const SCENIC_IMAGES = [
  '/images/parks/uganda/murchison-falls/mf-1.jpg',
  '/images/destinations/rwanda/image-20260331125636.jpg',
  '/images/parks/uganda/murchison-falls/dsc-6951.jpg',
  '/images/activities/helicopter-rwanda/1000045711.jpg',
  '/images/activities/big-five/roho-ya-selous-elephants-walking-along-the-river.jpg',
  '/images/destinations/rwanda/image-20260331125652.jpg',
  '/images/parks/uganda/murchison-falls/dsc-7494.jpg',
  '/images/activities/walking-safari/1752747977434-kenya-suyian-conservancy-nature-walk-20.jpg',
  '/images/destinations/rwanda/image-20260331125729.jpg',
  '/images/parks/uganda/murchison-falls/dsc-7442.jpg',
  '/images/activities/big-five/singita-boulders-lodge-20.jpg',
  '/images/activities/game-drive/roho-ya-selous-fishing-at-sunrise.jpg',
  '/images/destinations/rwanda/image-20260331125705.jpg',
  '/images/activities/walking-safari/1752747977431-kenya-suyian-conservancy-horseriding-28.jpg',
  '/images/activities/big-five/singita-boulders-lodge-21.jpg',
]

export default function TourHighlights({ highlights, images }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateArrows = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateArrows, { passive: true })
    updateArrows()
    return () => el.removeEventListener('scroll', updateArrows)
  }, [])

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' })
  }

  // Use curated scenic images, fall back to journey heroImage if provided
  const pool = images && images.length
    ? [images[0], ...SCENIC_IMAGES]   // heroImage first, then scenic
    : SCENIC_IMAGES

  return (
    <section className="bg-black py-14 sm:py-20">

      {/* Header */}
      <div className="container-page mb-10">
        <div className="flex items-end justify-between gap-6">
          <div className="flex-1 min-w-0">
            <AnimateIn variant="fade-up" duration={500}>
              <p className="eyebrow mb-4 text-white/50">Journey Highlights</p>
            </AnimateIn>
            <SplitText
              text="What makes this journey unforgettable"
              as="h2"
              className="font-serif text-2xl sm:text-4xl lg:text-5xl leading-[1.1] text-white"
              delay={60}
              stagger={40}
            />
          </div>

          {/* Scroll arrows — hidden on mobile (touch swipe works) */}
          <AnimateIn variant="fade-up" delay={300} duration={600}>
            <div className="hidden sm:flex shrink-0 gap-2">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Previous"
                className="flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-white/20 text-white transition hover:bg-white/10 disabled:opacity-25"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Next"
                className="flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-white/20 text-white transition hover:bg-white/10 disabled:opacity-25"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pl-4 pr-8 sm:pl-6 sm:pr-12 lg:pl-8 pb-2"
        style={{ scrollbarWidth: 'none' }}
      >
        {highlights.map((text, i) => (
          <AnimateIn
            key={i}
            variant="fade-up"
            delay={i * 70}
            duration={600}
            className="shrink-0 snap-start"
            style={{ width: 'clamp(260px, 72vw, 310px)' }}
          >
            <div className="group relative h-[420px] sm:h-[460px] w-full overflow-hidden rounded-2xl">
              {/* Scenic background image */}
              <img
                src={pool[i % pool.length]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading={i < 3 ? 'eager' : 'lazy'}
                decoding="async"
              />

              {/* Strong gradient so text is always readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/5" />

              {/* Number watermark top-left */}
              <span className="absolute top-4 left-5 font-serif text-[56px] leading-none text-white/[0.07] select-none pointer-events-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Checkmark badge top-right */}
              <div className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25 backdrop-blur-sm">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </div>

              {/* Text — fully visible at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <div className="mb-4 h-[1.5px] w-8 rounded-full bg-white/50 transition-all duration-500 group-hover:w-16 group-hover:bg-white" />
                <p className="font-serif text-[17px] sm:text-[19px] font-medium leading-snug text-white">
                  {text}
                </p>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
