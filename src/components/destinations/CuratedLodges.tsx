import { useState, useEffect } from 'react'
import type { Country } from '@/data/destinations'
import Reveal from '@/components/ui/Reveal'
import Picture from '@/components/Picture'

export default function CuratedLodges({ lodges }: { lodges: Country['lodges'] }) {
  const [active, setActive] = useState(0)
  const count = lodges.length

  useEffect(() => {
    if (count < 2) return
    const id = setInterval(() => setActive(i => (i + 1) % count), 2500)
    return () => clearInterval(id)
  }, [count])

  const go = (dir: 1 | -1) => setActive(i => (i + dir + count) % count)

  if (!lodges.length) return null

  // Card dimensions — keeps geometry below consistent
  const CARD_W = 380
  const CARD_H = 500

  return (
    <section
      className="overflow-hidden bg-[#f5f4f2] py-24 sm:py-32"
    >
      {/* heading */}
      <Reveal>
        <div className="container-page mb-16 flex flex-col gap-y-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-2">Where you'll stay</p>
            <h2 className="font-serif text-3xl sm:text-4xl">Curated Luxury Lodges</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-neutral-500 sm:text-right">
            Hand-selected for exclusivity, sustainability, and uncompromising service.
          </p>
        </div>
      </Reveal>

      {/* ── card stage ───────────────────────────────────────────────────────────
           perspective is on the parent so every card shares a single vanishing
           point — critical for the stacked 3-D look.
      ─────────────────────────────────────────────────────────────────────────── */}
      <div
        className="relative mx-auto"
        style={{ height: CARD_H + 60, perspective: '1200px', perspectiveOrigin: '50% 50%' }}
      >
        {lodges.map((lodge, i) => {
          // Normalised signed offset from the active card
          let offset = i - active
          if (offset > count / 2) offset -= count
          if (offset < -count / 2) offset += count

          const abs = Math.abs(offset)
          const isActive = abs === 0
          const isAdjacent = abs === 1

          // Only keep active + its two immediate neighbours in the DOM
          if (abs > 1) return null

          /*
           * The magic numbers that create the "stack on top of each other" look:
           *
           *  translateX  — small offset so side cards mostly hide behind the center
           *  translateZ  — center is pushed toward the viewer; sides go back
           *  rotateY     — side cards tilt away from viewer, adding real 3-D depth
           *  scale       — side cards shrink slightly so they read as behind
           */
          const tx  = offset * 370
          const tz  = isActive ? 70 : -30
          const ry  = offset * -10
          const sc  = isActive ? 1 : 0.85

          return (
            <div
              key={lodge.name}
              className="absolute"
              style={{
                width: CARD_W,
                height: CARD_H,
                left: '50%',
                top: '50%',
                marginLeft: -(CARD_W / 2),
                marginTop: -(CARD_H / 2),

                transform: `translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${sc})`,
                opacity: isActive ? 1 : 0.88,
                zIndex: isActive ? 10 : 4,

                transition: [
                  'transform 0.9s cubic-bezier(0.22,1,0.36,1)',
                  'opacity 0.9s cubic-bezier(0.22,1,0.36,1)',
                ].join(', '),

                cursor: isAdjacent ? 'pointer' : 'default',
              }}
              onClick={() => isAdjacent && setActive(i)}
            >
              <div
                className="group h-full overflow-hidden rounded-3xl bg-white"
                style={{
                  // Active card gets a strong lifted shadow; side cards barely any
                  boxShadow: isActive
                    ? '0 32px 56px -12px rgba(0,0,0,0.38), 0 0 0 1px rgba(0,0,0,0.05)'
                    : '0 2px 8px -2px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)',
                  transition: 'box-shadow 0.9s cubic-bezier(0.22,1,0.36,1)',
                }}
              >
                {/* ── image (top 58% of card) */}
                <div className="relative overflow-hidden" style={{ height: '58%' }}>
                  <Picture
                    src={lodge.image}
                    alt={lodge.name}
                    loading={isActive ? 'eager' : 'lazy'}
                    decoding="async"
                    imgClassName="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  {/* very subtle vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/30" />
                </div>

                {/* ── text (bottom 42%) */}
                <div className="flex h-[42%] flex-col justify-between p-6">
                  <div>
                    <p className="mb-3 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z" />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>
                      {lodge.location}
                    </p>
                    <h3 className="font-serif text-xl leading-snug">{lodge.name}</h3>
                    <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-neutral-500">
                      {lodge.body}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="btn-primary self-start text-[10px]"
                    onClick={e => e.stopPropagation()}
                  >
                    View Lodge
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* controls */}
      <div className="mt-10 flex items-center justify-center gap-5">
        <button type="button" aria-label="Previous" onClick={() => go(-1)} className="btn-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="flex gap-2">
          {lodges.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Lodge ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                i === active ? 'w-8 bg-black' : 'w-2 bg-neutral-300'
              }`}
            />
          ))}
        </div>
        <button type="button" aria-label="Next" onClick={() => go(1)} className="btn-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  )
}
