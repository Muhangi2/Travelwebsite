import { useEffect, useRef, useState } from 'react'
import type { Park } from '@/data/destinations'

const FALLBACK_IMAGE = '/images/activities/gorilla-trekking/3-mgl-gorilla-bb.jpg'
const AUTO_SCROLL_PX_PER_SEC = 40

function buildImageLookup(activities: Park['activities']): Record<string, string> {
  const map: Record<string, string> = {}
  for (const a of activities) {
    const match = /^Stay at (.+)$/i.exec(a.title)
    if (match) map[match[1].trim().toLowerCase()] = a.image
  }
  return map
}

type Lodge = {
  key: string
  name: string
  desc: string
  category: string
  isLuxury: boolean
  image: string
}

export default function WhereToStay({
  categories,
  activities = [],
  fallbackImage,
}: {
  categories: NonNullable<Park['whereToStay']>
  activities?: Park['activities']
  fallbackImage?: string
}) {
  const imageLookup = buildImageLookup(activities)
  const defaultImage = fallbackImage ?? FALLBACK_IMAGE

  const lodges: Lodge[] = categories.flatMap((cat) =>
    cat.picks.map((pick) => {
      const isLuxury = !/mid-range/i.test(cat.category)

      if (typeof pick === 'string') {
        const [name, ...rest] = pick.split(' — ')
        const desc = rest.join(' — ')
        return {
          key: pick,
          name,
          desc,
          category: cat.category,
          isLuxury,
          image: imageLookup[name.trim().toLowerCase()] ?? defaultImage,
        }
      }

      return {
        key: pick.name,
        name: pick.name,
        desc: pick.description ?? '',
        category: cat.category,
        isLuxury,
        image: pick.image || imageLookup[pick.name.trim().toLowerCase()] || defaultImage,
      }
    }),
  )

  const isCarousel = lodges.length > 3
  const displayLodges = isCarousel ? [...lodges, ...lodges] : lodges

  const trackRef = useRef<HTMLDivElement>(null)
  const [userPaused, setUserPaused] = useState(false)

  useEffect(() => {
    if (!isCarousel) return
    const track = trackRef.current
    if (!track) return

    let frame: number
    let last = performance.now()

    const step = (now: number) => {
      const dt = now - last
      last = now
      if (!userPaused) {
        const half = track.scrollWidth / 2
        track.scrollLeft += (AUTO_SCROLL_PX_PER_SEC * dt) / 1000
        if (track.scrollLeft >= half) track.scrollLeft -= half
      }
      frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [isCarousel, userPaused])

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const cardWidth = track.querySelector('article')?.getBoundingClientRect().width ?? 300
    track.scrollBy({ left: dir * (cardWidth + 20), behavior: 'smooth' })
  }

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center">Where to Stay</h2>

        <div className="relative mt-10">
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {displayLodges.map((lodge, i) => (
              <article
                key={`${lodge.key}-${i}`}
                className="group relative w-72 shrink-0 overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 sm:w-80"
                style={{ aspectRatio: '4/3' }}
              >
                <img
                  src={lodge.image}
                  alt={lodge.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] shadow-sm backdrop-blur-sm ${
                    lodge.isLuxury ? 'bg-amber-500 text-white' : 'bg-white/90 text-neutral-700'
                  }`}
                >
                  {lodge.category}
                </span>

                <div className="absolute inset-x-0 bottom-0 px-5 pb-5">
                  <div className="mb-2.5 h-[1px] w-8 rounded-full bg-white/40 transition-all duration-300 group-hover:w-14 group-hover:bg-white/70" />
                  <p className="font-serif text-[17px] leading-snug text-white">{lodge.name}</p>
                  {lodge.desc && (
                    <p className="mt-1 text-[11px] leading-relaxed text-white/70">{lodge.desc}</p>
                  )}
                </div>
              </article>
            ))}
          </div>

          {isCarousel && (
            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous lodge"
                className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-neutral-300 text-neutral-600 transition-colors hover:bg-neutral-100"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => setUserPaused((p) => !p)}
                aria-label={userPaused ? 'Play carousel' : 'Pause carousel'}
                className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-neutral-300 text-neutral-600 transition-colors hover:bg-neutral-100"
              >
                {userPaused ? '▶' : '❚❚'}
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Next lodge"
                className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-neutral-300 text-neutral-600 transition-colors hover:bg-neutral-100"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
