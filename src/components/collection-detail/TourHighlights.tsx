import { useEffect, useRef, useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'
import SplitText from '@/components/ui/SplitText'

type Props = {
  highlights: string[]
  images?: string[]
}

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

function HighlightCard({ text, image, index }: { text: string; image: string; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const shimmerRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current
    const img = imgRef.current
    if (!el || !img) return
    const { top, height } = el.getBoundingClientRect()
    const y = (e.clientY - top) / height
    const shift = (y - 0.5) * -18
    img.style.transform = `scale(1.1) translateY(${shift}px)`
  }

  function onMouseEnter() {
    setHovered(true)
    if (imgRef.current) imgRef.current.style.transform = 'scale(1.1) translateY(0px)'
  }

  function onMouseLeave() {
    setHovered(false)
    if (imgRef.current) {
      imgRef.current.style.transform = 'scale(1) translateY(0px)'
    }
  }

  return (
    <AnimateIn
      variant="blur-up"
      delay={index * 90}
      duration={750}
      className="shrink-0 snap-start"
      style={{ width: 'clamp(240px, 78vw, 300px)' }}
    >
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="group relative h-[380px] sm:h-[440px] lg:h-[480px] w-full overflow-hidden rounded-2xl cursor-default"
        style={{
          transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s cubic-bezier(0.22,1,0.36,1)',
          transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
          boxShadow: hovered ? '0 32px 64px rgba(0,0,0,0.55)' : '0 4px 20px rgba(0,0,0,0.25)',
        }}
      >
        {/* Parallax image */}
        <img
          ref={imgRef}
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{ transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1)', transform: 'scale(1) translateY(0px)', willChange: 'transform' }}
          loading={index < 3 ? 'eager' : 'lazy'}
          decoding="async"
        />

        {/* Gradient — lightens slightly on hover to reveal more image */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/5"
          style={{ transition: 'opacity 0.5s ease', opacity: hovered ? 0.8 : 1 }}
        />

        {/* Shimmer sweep */}
        <div
          ref={shimmerRef}
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/12 to-transparent"
          style={{
            transform: hovered ? 'translateX(110%)' : 'translateX(-110%)',
            transition: hovered ? 'transform 0.65s cubic-bezier(0.22,1,0.36,1)' : 'none',
          }}
        />

        {/* Number watermark */}
        <span
          className="absolute top-4 left-5 font-serif leading-none select-none pointer-events-none"
          style={{
            fontSize: hovered ? '64px' : '48px',
            color: hovered ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.07)',
            transition: 'font-size 0.5s cubic-bezier(0.22,1,0.36,1), color 0.5s ease',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Check badge — inverts on hover */}
        <div
          className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-sm"
          style={{
            background: hovered ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.15)',
            boxShadow: hovered ? '0 0 0 1px rgba(255,255,255,1)' : '0 0 0 1px rgba(255,255,255,0.25)',
            transition: 'background 0.35s ease, box-shadow 0.35s ease',
          }}
        >
          <svg
            width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke={hovered ? '#000' : '#fff'}
            strokeWidth="2.5"
            style={{ transition: 'stroke 0.35s ease' }}
          >
            <path d="M5 12l5 5L20 7" />
          </svg>
        </div>

        {/* Bottom text block */}
        <div
          className="absolute inset-x-0 bottom-0 p-5 sm:p-6"
          style={{
            transform: hovered ? 'translateY(0)' : 'translateY(6px)',
            transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          {/* Line expands to full width on hover */}
          <div
            className="mb-3 h-[1.5px] rounded-full bg-white"
            style={{
              width: hovered ? '100%' : '28px',
              opacity: hovered ? 0.3 : 0.5,
              transition: 'width 0.6s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease',
            }}
          />
          <p className="font-serif text-[15px] sm:text-[17px] lg:text-[18px] font-medium leading-snug text-white">
            {text}
          </p>
        </div>
      </div>
    </AnimateIn>
  )
}

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

  // Use ALL journey images (hero + every day image) before falling back to scenic
  // Deduplicate so no image appears twice
  const raw = images && images.length ? [...images, ...SCENIC_IMAGES] : SCENIC_IMAGES
  const seen = new Set<string>()
  const pool = raw.filter((src) => { if (seen.has(src)) return false; seen.add(src); return true })

  return (
    <section className="bg-black py-10 sm:py-14 lg:py-20">

      {/* Header */}
      <div className="container-page mb-7 sm:mb-10">
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
        className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 sm:px-6 lg:px-8 pb-4"
        style={{ scrollbarWidth: 'none' }}
      >
        {highlights.map((text, i) => (
          <HighlightCard
            key={i}
            text={text}
            image={pool[i % pool.length]}
            index={i}
          />
        ))}
      </div>
    </section>
  )
}
