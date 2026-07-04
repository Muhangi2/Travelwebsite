import { useState, useEffect, useRef } from 'react'

const TABS = [
  { id: 'pricing', label: 'Pricing' },
  { id: 'cancellation', label: 'Cancellation' },
  { id: 'booking-terms', label: 'Booking Terms' },
  { id: 'visa', label: 'Visa & Health' },
  { id: 'packing', label: 'Packing List' },
  { id: 'tipping', label: 'Tipping' },
  { id: 'keep-green', label: 'Keep It Green' },
  { id: 'faq', label: 'FAQ' },
]

export default function KnowBeforeNav() {
  const [active, setActive] = useState('pricing')
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0, rootMargin: '-25% 0px -65% 0px' },
    )
    TABS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const barH = barRef.current?.offsetHeight ?? 0
    const y = el.getBoundingClientRect().top + window.scrollY - 80 - barH - 8
    window.scrollTo({ top: y, behavior: 'smooth' })
    setActive(id)
  }

  return (
    <div
      ref={barRef}
      className="sticky top-[5rem] z-40 border-b border-white/10 bg-black backdrop-blur-md"
    >
      <div className="container-page">
        <div className="hide-scrollbar flex overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => scrollTo(tab.id)}
              className={`relative shrink-0 px-4 py-4 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors sm:px-5 ${
                active === tab.id ? 'text-white' : 'text-white/50 hover:text-white/80'
              }`}
            >
              {tab.label}
              {active === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-white" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
