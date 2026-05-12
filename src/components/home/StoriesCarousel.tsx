import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { NavLink } from 'react-router-dom'

const SLIDE_INTERVAL = 2500
const TRANSITION_MS = 700
const MOBILE_TRANSITION_MS = 450
const NARROW = 200
const WIDE = 680
const GAP = 16
const HEIGHT = 460
const EASE = 'cubic-bezier(0.65, 0, 0.35, 1)'
const SWIPE_THRESHOLD = 40

type Phase = 'rest' | 'slide' | 'snap'

type Experience = {
  slug: string
  badge: string
  title: string
  body: string
  cta: string
  href: string
  image: string
}

const experiences: Experience[] = [
  {
    slug: 'gorilla-trekking',
    badge: 'Primate',
    title: 'Gorilla Trekking: An Intimate Encounter',
    body: 'Journey into the mist-shrouded forests of Uganda and Rwanda for a profound, luxury encounter with mountain gorillas.',
    cta: 'Explore Gorilla Trekking',
    href: '/safari-collections',
    image: '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.jpg',
  },
  {
    slug: 'chimpanzee-trekking',
    badge: 'Primate',
    title: 'Chimpanzee Trekking: Forest Primate Adventures',
    body: "Witness the captivating intelligence of chimpanzees in their natural habitat in Uganda's Kibale or Rwanda's Nyungwe Forest.",
    cta: 'Discover Chimpanzee Expeditions',
    href: '/safari-collections',
    image: '/images/destinations/tanzania/chimp-habituation-project1.jpg',
  },
  {
    slug: 'golden-monkey-trekking',
    badge: 'Primate',
    title: 'Golden Monkey Trekking: Rare & Vibrant',
    body: "Seek out the elusive and vibrant golden monkeys in Uganda's Mgahinga or Rwanda's Volcanoes National Park for a captivating wildlife experience.",
    cta: 'Learn About Golden Monkey Treks',
    href: '/safari-collections',
    image: '/images/activities/gorilla-trekking/14-mgl-golden-monkey-bb.jpg',
  },
  {
    slug: 'white-water-rafting',
    badge: 'Adventure',
    title: 'White Water Rafting: Nile Adrenaline',
    body: 'Conquer world-class rapids at the source of the Nile in Jinja, Uganda, with luxury rafting packages offering private trips and opulent riverside retreats.',
    cta: 'Plan Your Rafting Adventure',
    href: '/safari-collections',
    image: '/images/parks/rwanda/akagera/1738327984197-magashi-boating-12-24-tc-021.jpg',
  },
  {
    slug: 'boat-cruise-safaris',
    badge: 'Water Safari',
    title: 'Boat Cruise Safaris: Serene Wildlife Views',
    body: "Glide along Uganda's Kazinga Channel, Murchison Falls, or Kenya's Lake Naivasha for intimate wildlife viewing with private boat hire and expert guides.",
    cta: 'Explore Boat Cruise Safaris',
    href: '/safari-collections',
    image: '/images/activities/game-drive/boating-safari-hippo-spot2.jpg',
  },
  {
    slug: 'hot-air-balloon',
    badge: 'Aerial',
    title: 'Hot Air Balloon Safaris: Sky-High Spectacle',
    body: 'Elevate your safari with a silent drift above the Serengeti or Masai Mara at sunrise, culminating in a celebratory champagne breakfast in the bush.',
    cta: 'Book Your Balloon Experience',
    href: '/safari-collections',
    image: '/images/activities/game-drive/guest-sundown.jpg',
  },
  {
    slug: 'cultural-experiences',
    badge: 'Culture',
    title: 'Cultural & Community Experiences: The Heart of Africa',
    body: "Immerse yourself in East Africa's rich cultures, engaging with Batwa Pygmies or Maasai to discover authentic stories and warm hospitality.",
    cta: 'Discover Cultural Journeys',
    href: '/safari-collections',
    image: '/images/activities/game-drive/cocktail.jpg',
  },
  {
    slug: 'helicopter-safaris',
    badge: 'Aerial',
    title: 'Helicopter Safaris: Unrivaled Access',
    body: "For ultimate luxury, our Helicopter Safaris offer unrivaled access to East Africa's most spectacular landscapes, with private aerial tours and remote landings.",
    cta: 'Plan a Helicopter Safari',
    href: '/safari-collections',
    image: '/images/activities/helicopter-rwanda/1000045751.jpg',
  },
  {
    slug: 'fly-in-safaris',
    badge: 'Aerial',
    title: 'Fly-In Safaris: Seamless & Scenic',
    body: 'Maximize your time with seamless Fly-In Safaris, offering private bush flights to opulent lodges and breathtaking aerial views of iconic national parks.',
    cta: 'Arrange a Fly-In Safari',
    href: '/safari-collections',
    image: '/images/activities/helicopter-rwanda/1000045745.jpg',
  },
  {
    slug: 'walking-safaris',
    badge: 'On Foot',
    title: 'Walking Safaris: Intimate Wild Encounters',
    body: 'Connect intimately with nature on a Walking Safari, guided by expert armed rangers through Laikipia or Selous to track wildlife and discover hidden wonders.',
    cta: 'Embark on a Walking Safari',
    href: '/safari-collections',
    image: '/images/activities/walking-safari/1752747977434-kenya-suyian-conservancy-nature-walk-20.jpg',
  },
  {
    slug: 'classic-game-drives',
    badge: 'Wildlife',
    title: 'Classic Game Drives: The Quintessential Safari',
    body: 'Experience the quintessential safari with private 4×4s and expert guides leading you through Serengeti, Masai Mara, or Ngorongoro Crater to witness raw wildlife drama.',
    cta: 'Book a Classic Game Drive',
    href: '/safari-collections',
    image: '/images/activities/game-drive/asilia-roho-2017-1-1.jpg',
  },
  {
    slug: 'night-game-drives',
    badge: 'Wildlife',
    title: 'Night Game Drives: Unveiling Nocturnal Wonders',
    body: 'As dusk settles, embark on an exclusive night game drive in private conservancies, utilizing specialized equipment to spot elusive nocturnal predators.',
    cta: 'Explore Night Game Drives',
    href: '/safari-collections',
    image: '/images/activities/game-drive/night-skies-singita-sabi-sand-ross-couper-12.jpg',
  },
  {
    slug: 'wellness-spa',
    badge: 'Wellness',
    title: 'Wellness & Spa Retreats: Safari Serenity',
    body: 'Integrate tranquility into your adventure with luxury wellness and spa retreats, enjoying yoga on savannah decks and indulging in indigenous spa treatments.',
    cta: 'Discover Wellness Retreats',
    href: '/safari-collections',
    image: '/images/destinations/tanzania/kite-in-lodge1.jpg',
  },
  {
    slug: 'private-island-escapes',
    badge: 'Coastal',
    title: 'Private Island Escapes: Coastal Paradise',
    body: 'Complement your safari with an exclusive private island escape, immersing yourself in marine safaris, private beach dinners, and bespoke luxury in pristine coastal havens.',
    cta: 'Plan a Private Island Escape',
    href: '/safari-collections',
    image: '/images/destinations/tanzania/rubondo-island-camp-beach.jpg',
  },
  {
    slug: 'conservation-safaris',
    badge: 'Conservation',
    title: 'Conservation & Research Safaris: Impactful Journeys',
    body: 'Participate in impactful conservation efforts with luxury research safaris, gaining behind-the-scenes access and contributing directly to wildlife protection and monitoring.',
    cta: 'Join a Conservation Safari',
    href: '/safari-collections',
    image: '/images/activities/walking-safari/1752763546178-kenya-suyian-wild-dog-4.jpg',
  },
  {
    slug: 'horseback-safaris',
    badge: 'On Horseback',
    title: 'Horseback Safaris: Ride with the Wild',
    body: 'Explore the African wilderness from a unique perspective on a horseback safari, riding alongside giraffes and zebras with luxury mobile fly-camps and expert equestrian guides.',
    cta: 'Book a Horseback Safari',
    href: '/safari-collections',
    image: '/images/activities/big-five/roho-ya-selous-elephants-walking-along-the-river.jpg',
  },
  {
    slug: 'photographic-safaris',
    badge: 'Photography',
    title: 'Photographic Safaris: Capture the Wild',
    body: 'Capture the raw beauty of East Africa on a dedicated photographic safari, with custom-built vehicles and professional photographer guides to create stunning wildlife imagery.',
    cta: 'Enhance Your Photography',
    href: '/safari-collections',
    image: '/images/destinations/tanzania/photo-2013-03-06-11-59-58.jpg',
  },
]

export default function StoriesCarousel() {
  const [start, setStart] = useState(0)
  const [phase, setPhase] = useState<Phase>('rest')
  const [paused, setPaused] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)
  const [inView, setInView] = useState(true)
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const thumbStripRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(min-width: 1024px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => setInView(entries[0]?.isIntersecting ?? true),
      { threshold: 0.1 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (paused || !inView || phase !== 'rest') return
    if (progressRef.current) progressRef.current.style.width = '0%'
    const t0 = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const pct = Math.min(100, ((now - t0) / SLIDE_INTERVAL) * 100)
      if (progressRef.current) progressRef.current.style.width = `${pct}%`
      if (pct < 100) raf = requestAnimationFrame(tick)
      else setPhase('slide')
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [paused, inView, phase, start])

  useEffect(() => {
    if (phase !== 'slide') return
    const dur = isDesktop ? TRANSITION_MS : MOBILE_TRANSITION_MS
    const t = window.setTimeout(() => setPhase('snap'), dur)
    return () => clearTimeout(t)
  }, [phase, isDesktop])

  useEffect(() => {
    if (phase !== 'snap') return
    setStart((s) => (s + 1) % experiences.length)
    if (progressRef.current) progressRef.current.style.width = '0%'
    const t = window.setTimeout(() => setPhase('rest'), 30)
    return () => clearTimeout(t)
  }, [phase])

  const goTo = (idx: number) => {
    const len = experiences.length
    const next = ((idx % len) + len) % len
    setStart(next)
    if (progressRef.current) progressRef.current.style.width = '0%'
    setPhase('rest')
  }
  const goNext = () => goTo(start + 1)
  const goPrev = () => goTo(start - 1)

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0]
    touchStart.current = { x: t.clientX, y: t.clientY }
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return
    const t = e.changedTouches[0]
    const dx = t.clientX - touchStart.current.x
    const dy = t.clientY - touchStart.current.y
    touchStart.current = null
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) <= Math.abs(dy)) return
    if (dx < 0) goNext()
    else goPrev()
  }

  // Center the active thumbnail in the mobile strip without smooth-scroll
  // (smooth-scroll on the strip can fight with the page's vertical scroll on iOS)
  useEffect(() => {
    if (isDesktop) return
    const strip = thumbStripRef.current
    if (!strip) return
    const active = strip.children[start] as HTMLElement | undefined
    if (!active) return
    const target = active.offsetLeft - strip.clientWidth / 2 + active.clientWidth / 2
    strip.scrollLeft = target
  }, [start, isDesktop])

  if (!isDesktop) {
    return (
      <section className="bg-brand-forest-dark py-12 sm:py-16">
        <div className="container-page">
          <div className="max-w-3xl pb-6 sm:pb-10">
            <p className="eyebrow text-brand-gold">Our Signature Experiences</p>
            <h2 className="mt-3 font-serif text-2xl leading-tight text-white sm:text-4xl">
              East Africa: Curated Luxury Experiences
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-base">
              Discover East Africa&rsquo;s most exclusive adventures, blending unparalleled luxury with the continent&rsquo;s
              wild heart for transformative encounters and breathtaking spectacles.
            </p>
          </div>

          <div
            className="relative overflow-hidden rounded-2xl shadow-2xl"
            style={{ touchAction: 'pan-y' }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="relative aspect-[4/5] w-full sm:aspect-[16/11]">
              {experiences.map((exp, i) => {
                const active = i === start
                return (
                  <article
                    key={exp.slug}
                    aria-hidden={!active}
                    className="absolute inset-0 transition-opacity duration-500 ease-out"
                    style={{
                      opacity: active ? 1 : 0,
                      pointerEvents: active ? 'auto' : 'none',
                    }}
                  >
                    <NavLink
                      to={`/experiences/${exp.slug}`}
                      aria-label={exp.title}
                      className="absolute inset-0 z-[1]"
                    />
                    <img
                      src={exp.image}
                      alt=""
                      loading={active ? 'eager' : 'lazy'}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <span className="pointer-events-none absolute left-3 top-3 z-[2] rounded bg-brand-rust px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:left-4 sm:top-4">
                      {exp.badge}
                    </span>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] p-4 pr-14 sm:p-6 sm:pr-20">
                      <h3 className="font-serif text-xl leading-tight text-white drop-shadow-md sm:text-2xl md:text-3xl">
                        {exp.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-white/85 sm:mt-3 sm:line-clamp-4 sm:text-sm">
                        {exp.body}
                      </p>
                      <NavLink
                        to={`/experiences/${exp.slug}`}
                        className="pointer-events-auto relative z-[3] mt-3 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white sm:mt-4 sm:text-[11px]"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/70">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M13 5l7 7-7 7" />
                          </svg>
                        </span>
                        {exp.cta}
                      </NavLink>
                    </div>
                  </article>
                )
              })}
            </div>

            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous experience"
              className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/65 sm:left-3 sm:h-11 sm:w-11"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next experience"
              className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/65 sm:right-3 sm:h-11 sm:w-11"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 text-[11px] font-mono tracking-wider text-white/70 sm:mt-5">
            <span aria-live="polite">
              <span className="text-white">{String(start + 1).padStart(2, '0')}</span>
              <span className="mx-1 text-white/40">/</span>
              <span>{String(experiences.length).padStart(2, '0')}</span>
            </span>
            <span className="truncate uppercase tracking-[0.18em] text-brand-gold">
              {experiences[start].badge}
            </span>
          </div>

          <div className="mt-4 -mx-4 sm:-mx-6">
            <div
              ref={thumbStripRef}
              className="hide-scrollbar flex gap-2 overflow-x-auto px-4 pb-2 sm:gap-2.5 sm:px-6"
              role="tablist"
              aria-label="Choose an experience"
            >
              {experiences.map((exp, i) => {
                const active = i === start
                return (
                  <button
                    key={exp.slug}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-label={exp.title}
                    onClick={() => goTo(i)}
                    className={`relative h-14 w-20 flex-none overflow-hidden rounded-lg ring-2 transition sm:h-16 sm:w-24 ${
                      active ? 'ring-brand-rust' : 'opacity-60 ring-transparent hover:opacity-100'
                    }`}
                  >
                    <img src={exp.image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
                    <span className="absolute inset-x-0 bottom-0 truncate px-1 pb-0.5 text-[8px] font-semibold uppercase tracking-wider text-white">
                      {exp.badge}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3 sm:mt-5">
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? 'Play' : 'Pause'}
              className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white text-brand-ink shadow-md transition hover:bg-white/90 sm:h-11 sm:w-11"
            >
              {paused ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              )}
            </button>
            <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-white/15">
              <div
                ref={progressRef}
                className="absolute inset-y-0 left-0 rounded-full bg-brand-rust"
                style={{ width: '0%' }}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }

  const items = Array.from({ length: 6 }, (_, i) => ({
    ...experiences[(start + i) % experiences.length],
    _slot: i,
  }))
  const sliding = phase === 'slide'
  const wideIndex = sliding ? 2 : 1
  const circleLeft = wideIndex * (NARROW + GAP) + WIDE

  const cardStyle = (i: number): CSSProperties => ({
    width: i === wideIndex ? `${WIDE}px` : `${NARROW}px`,
    height: `${HEIGHT}px`,
    transition: sliding ? `width ${TRANSITION_MS}ms ${EASE}` : 'none',
  })

  const stripStyle: CSSProperties = {
    display: 'flex',
    gap: `${GAP}px`,
    height: `${HEIGHT}px`,
    transform: sliding ? `translateX(-${NARROW + GAP}px)` : 'translateX(0)',
    transition: sliding ? `transform ${TRANSITION_MS}ms ${EASE}` : 'none',
    willChange: 'transform',
  }

  const circleStyle: CSSProperties = {
    left: `${circleLeft}px`,
    transition: sliding ? `left ${TRANSITION_MS}ms ${EASE}` : 'none',
  }

  return (
    <section className="bg-brand-forest-dark py-14 sm:py-20">
      <div className="container-page">
        <div className="max-w-3xl pb-10 sm:pb-14">
          <p className="eyebrow text-brand-gold">Our Signature Experiences</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
            East Africa: Curated Luxury Experiences
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Discover East Africa&rsquo;s most exclusive adventures, blending unparalleled luxury with the continent&rsquo;s
            wild heart for transformative encounters and breathtaking spectacles.
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="relative" style={stripStyle}>
            {items.map((exp, i) => (
              <article
                key={`${exp.slug}-${i}`}
                style={cardStyle(i)}
                className="group relative flex-none overflow-hidden rounded-2xl shadow-xl"
              >
                <NavLink
                  to={`/experiences/${exp.slug}`}
                  aria-label={exp.title}
                  className="absolute inset-0 z-[1]"
                />
                <img
                  src={exp.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="pointer-events-none absolute left-3 top-3 z-[2] rounded bg-brand-rust px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                  {exp.badge}
                </span>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] p-5">
                  <h3 className="line-clamp-3 font-serif text-xl leading-tight text-white drop-shadow-md sm:text-2xl">
                    {exp.title}
                  </h3>
                  {i === wideIndex && (
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/85">
                      {exp.body}
                    </p>
                  )}
                  <NavLink
                    to={`/experiences/${exp.slug}`}
                    className="pointer-events-auto relative z-[3] mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/70">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                    {i === wideIndex ? exp.cta : 'Read more'}
                  </NavLink>
                </div>
              </article>
            ))}

            <span
              aria-hidden
              className="pointer-events-none absolute top-1/2 z-10 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-[0_0_20px_rgba(0,0,0,0.25)]"
              style={circleStyle}
            />
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4 sm:mt-10">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? 'Play' : 'Pause'}
            className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white text-brand-ink shadow-md transition hover:bg-white/90"
          >
            {paused ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            )}
          </button>
          <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-white/15">
            <div
              ref={progressRef}
              className="absolute inset-y-0 left-0 rounded-full bg-brand-rust"
              style={{ width: '0%' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
