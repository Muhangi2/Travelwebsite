import { useState, useEffect, useRef, useCallback } from 'react'
import type { Country } from '@/data/destinations'
import Reveal from '@/components/ui/Reveal'
import Picture from '@/components/Picture'

const CARD_W = 300
const CARD_H = 460
const GAP = 18
const INTERVAL_MS = 3500

export default function CuratedLodges({ lodges }: { lodges: Country['lodges'] }) {
  const [active, setActive] = useState(0)
  const count = lodges.length
  const timerRef = useRef<number | null>(null)

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (count < 2) return
    timerRef.current = window.setInterval(
      () => setActive(i => (i + 1) % count),
      INTERVAL_MS,
    )
  }, [count])

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [resetTimer])

  const go = (idx: number) => {
    setActive((idx + count) % count)
    resetTimer()
  }

  if (!lodges.length) return null

  return (
    <section id="lodges" className="overflow-hidden bg-[#f5f4f2] py-24 sm:py-32">
      {/* Heading */}
      <Reveal>
        <div className="container-page mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-2">Where you'll stay</p>
            <h2 className="font-serif text-3xl sm:text-4xl">Curated Luxury Lodges</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-neutral-500 sm:text-right">
            Hand-selected for exclusivity, sustainability, and uncompromising service.
          </p>
        </div>
      </Reveal>

      {/* Card stage */}
      <div
        className="relative mx-auto select-none"
        style={{ height: CARD_H + 48 }}
      >
        {lodges.map((lodge, i) => {
          let offset = i - active
          if (offset > count / 2)  offset -= count
          if (offset < -count / 2) offset += count

          const abs = Math.abs(offset)
          if (abs > 2) return null

          const isActive = abs === 0
          const tx      = offset * (CARD_W + GAP)
          const scale   = isActive ? 1 : 0.88
          const opacity = abs === 0 ? 1 : abs === 1 ? 0.72 : 0

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
                transform: `translateX(${tx}px) scale(${scale})`,
                opacity,
                zIndex: isActive ? 10 : 5 - abs,
                transition: [
                  'transform 0.75s cubic-bezier(0.22,1,0.36,1)',
                  'opacity 0.75s cubic-bezier(0.22,1,0.36,1)',
                ].join(', '),
                cursor: abs > 0 ? 'pointer' : 'default',
              }}
              onClick={() => abs > 0 && go(i)}
            >
              <div
                className="relative h-full w-full overflow-hidden"
                style={{ borderRadius: '2rem' }}
              >
                {/* Full-bleed image */}
                <Picture
                  src={lodge.image}
                  alt={lodge.name}
                  loading={isActive ? 'eager' : 'lazy'}
                  decoding="async"
                  imgClassName={`h-full w-full object-cover transition-transform duration-700 ease-out ${isActive ? 'scale-105' : 'scale-100'}`}
                />

                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    {lodge.location}
                  </p>
                  <h3 className="font-serif text-xl font-semibold leading-snug text-white sm:text-2xl">
                    {lodge.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[12px] leading-relaxed text-white/60">
                    {lodge.body}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    Luxury Lodge
                  </div>
                </div>

                {/* Active ring */}
                {isActive && (
                  <div
                    className="absolute inset-0 ring-2 ring-inset ring-white/20"
                    style={{ borderRadius: '2rem' }}
                  />
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          type="button"
          aria-label="Previous lodge"
          onClick={() => go(active - 1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 shadow-sm transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex gap-2">
          {lodges.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Lodge ${i + 1}`}
              onClick={() => go(i)}
              className={`rounded-full transition-all duration-500 ${
                i === active ? 'h-[3px] w-8 bg-neutral-900' : 'h-[3px] w-2 bg-neutral-300'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next lodge"
          onClick={() => go(active + 1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 shadow-sm transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  )
}
