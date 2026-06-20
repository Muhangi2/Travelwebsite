import { useState, useEffect, useRef } from 'react'

const TABS = [
  { id: 'overview',    label: 'Overview' },
  { id: 'when-to-go', label: 'When to Go' },
  { id: 'where-to-go',label: 'Where to Go' },
  { id: 'experiences', label: 'Experiences' },
  { id: 'lodges',      label: 'Lodges' },
  { id: 'faq',         label: 'FAQ' },
]

export default function DestinationNavTabs() {
  const [active, setActive] = useState('overview')
  const barRef = useRef<HTMLDivElement>(null)

  /* Highlight active tab based on which section is in view */
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
      className="sticky top-[5rem] z-40 border-b border-neutral-200 bg-white/95 backdrop-blur-md"
    >
      <div className="container-page">
        <div className="flex overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => scrollTo(tab.id)}
              className={`relative shrink-0 px-4 py-4 text-[10px] font-bold uppercase tracking-[0.22em] transition-colors sm:px-6 ${
                active === tab.id
                  ? 'text-neutral-900'
                  : 'text-neutral-400 hover:text-neutral-700'
              }`}
            >
              {tab.label}
              {active === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-neutral-900" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
