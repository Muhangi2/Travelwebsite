import { useEffect, useRef, useState } from 'react'

type NavItem = { key: string; label: string; id: string }

type Props = {
  hasHighlights: boolean
  hasFaq: boolean
  hasIncludes: boolean
}

export default function TourNav({ hasHighlights, hasFaq, hasIncludes }: Props) {
  const [active, setActive] = useState('overview')
  const navRef = useRef<HTMLDivElement>(null)

  const items: NavItem[] = [
    { key: 'overview', label: 'Overview', id: 'overview' },
    { key: 'itinerary', label: 'Itinerary', id: 'itinerary' },
    ...(hasHighlights ? [{ key: 'highlights', label: 'Highlights', id: 'highlights' }] : []),
    ...(hasIncludes ? [{ key: 'includes', label: 'Included', id: 'includes' }] : []),
    ...(hasFaq ? [{ key: 'faq', label: 'FAQ', id: 'faq' }] : []),
    { key: 'accommodation', label: 'Accommodation', id: 'accommodation' },
    { key: 'contact', label: 'Contact', id: 'contact' },
  ]

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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const navH = navRef.current?.offsetHeight ?? 64
    const top = el.getBoundingClientRect().top + window.scrollY - navH - 16
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <div
      ref={navRef}
      className="sticky z-30 bg-white/80 backdrop-blur-md py-5"
      style={{ top: 0 }}
    >
      <div className="hide-scrollbar overflow-x-auto px-3 sm:px-4">
        <div className="mx-auto flex w-fit items-center rounded-full bg-neutral-100 p-1 sm:p-1.5 gap-0.5 sm:gap-1 shadow-inner">
          {items.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollTo(item.id)}
              className={`relative shrink-0 rounded-full px-3 py-1.5 text-[9px] sm:px-5 sm:py-2 sm:text-[11px] font-semibold tracking-[0.10em] sm:tracking-[0.12em] uppercase transition-all duration-300 ${
                active === item.key
                  ? 'bg-black text-white shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900 hover:bg-white/60'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
