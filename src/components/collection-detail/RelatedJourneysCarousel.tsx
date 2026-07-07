import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTourPackages } from '@/sanity/tourPackages'
import Reveal from '@/components/ui/Reveal'
import Picture from '@/components/Picture'

const CARD_W = 300
const GAP = 24

export default function RelatedJourneysCarousel({ excludeSlug }: { excludeSlug?: string }) {
  const { cards } = useTourPackages()
  const [paused, setPaused] = useState(false)

  const journeys = cards.filter((c) => c.id !== excludeSlug)
  if (journeys.length < 2) return null

  // Triple the list so the loop is seamless
  const items = [...journeys, ...journeys, ...journeys]
  const shiftPx = journeys.length * (CARD_W + GAP)
  const duration = journeys.length * 6

  return (
    <section className="bg-brand-cream/40 py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow">Keep Exploring</p>
            <h2 className="mt-3">Other Journeys You Might Like</h2>
          </div>
        </Reveal>
      </div>

      <div
        className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          style={{
            display: 'flex',
            gap: `${GAP}px`,
            paddingLeft: `${GAP}px`,
            width: 'max-content',
            animationName: 'related-journeys-marquee',
            animationDuration: `${duration}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {items.map((card, i) => (
            <NavLink
              key={`${card.id}-${i}`}
              to={`/safari-collections/${card.id}`}
              className="group shrink-0 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-neutral-200/70 transition-shadow duration-300 hover:shadow-md"
              style={{ width: `${CARD_W}px` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Picture
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                  {card.duration}
                  {card.country ? `  ·  ${card.country}` : ''}
                </p>
                <h3 className="mt-2 text-lg leading-snug">{card.title}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] transition-all duration-300 group-hover:gap-4">
                  EXPLORE
                  <svg
                    width="14" height="14" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes related-journeys-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-${shiftPx}px); }
        }
      `}</style>
    </section>
  )
}
