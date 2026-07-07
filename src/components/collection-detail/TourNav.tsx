import { useEffect, useRef, useState } from 'react'

type NavItem = { key: string; label: string; short: string; id: string }

type Props = {
  hasHighlights: boolean
  hasFaq: boolean
  hasIncludes: boolean
}

export default function TourNav({ hasHighlights, hasFaq, hasIncludes }: Props) {
  const [active, setActive] = useState('overview')
  const navRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const items: NavItem[] = [
    { key: 'overview',       label: 'Overview',      short: 'Info',  id: 'overview' },
    { key: 'itinerary',      label: 'Itinerary',     short: 'Plan',  id: 'itinerary' },
    ...(hasHighlights ? [{ key: 'highlights', label: 'Highlights', short: 'Best',  id: 'highlights' }] : []),
    ...(hasIncludes   ? [{ key: 'includes',   label: 'Included',   short: 'Incl',  id: 'includes' }]   : []),
    ...(hasFaq        ? [{ key: 'faq',        label: 'FAQ',        short: 'FAQ',   id: 'faq' }]        : []),
    { key: 'accommodation',  label: 'Accommodation', short: 'Stay',  id: 'accommodation' },
  ]

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    items.forEach(({ key, id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(key) },
        { rootMargin: '-30% 0px -60% 0px' },
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [items.length])

  // Show fade hint when more content to the right
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const check = () => setCanScrollRight(el.scrollWidth > el.clientWidth + 4)
    check()
    el.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => {
      el.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [])

  // Auto-scroll active tab into the centre of the visible nav strip
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    const btn = container.querySelector(`[data-navkey="${active}"]`) as HTMLElement | null
    if (!btn) return
    const cRect = container.getBoundingClientRect()
    const bRect = btn.getBoundingClientRect()
    const adjustment = (bRect.left + bRect.width / 2) - (cRect.left + cRect.width / 2)
    container.scrollBy({ left: adjustment, behavior: 'smooth' })
  }, [active])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const navH = navRef.current?.offsetHeight ?? 56
    const top = el.getBoundingClientRect().top + window.scrollY - 80 - navH - 16
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <div
      ref={navRef}
      className="sticky z-30 bg-white/90 backdrop-blur-md py-3 sm:py-4"
      style={{ top: '5rem' }}
    >
      <div className="relative">
        {/* flex justify-center: centres the pill on desktop; on mobile overflow-x-auto handles the scroll */}
        <div
          ref={scrollRef}
          className="hide-scrollbar overflow-x-auto flex justify-center px-2 sm:px-6"
        >
          <div className="flex items-center gap-1 rounded-full bg-neutral-100 p-1 sm:p-1 md:p-1.5 shadow-inner">
            {items.map((item) => (
              <button
                key={item.key}
                data-navkey={item.key}
                onClick={() => scrollTo(item.id)}
                className={`relative shrink-0 rounded-full font-semibold uppercase transition-all duration-300
                  px-3 py-1.5 text-[11px] tracking-[0.06em]
                  sm:px-4 sm:py-1.5 sm:text-[10px] sm:tracking-[0.10em]
                  md:px-5 md:py-2 md:text-[11px] md:tracking-[0.12em]
                  ${active === item.key
                    ? 'bg-black text-white shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-900 hover:bg-white/60'
                  }`}
              >
                {/* Shorter label on mobile */}
                <span className="sm:hidden">{item.short}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Fade hint when content extends beyond right edge */}
        {canScrollRight && (
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white/90 to-transparent" />
        )}
      </div>
    </div>
  )
}
