import { useState, useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import type { JourneyDay } from '@/components/collection-detail/SafariJourney'
import type { RouteWaypoint } from '@/data/journeys'

const TEAL = '#0d9488'

type Props = {
  days: JourneyDay[]
  overview: string
  waypoints?: RouteWaypoint[]
  title?: string
  country?: string
}

export default function TourItinerary({ days, overview, waypoints, title, country }: Props) {
  const [active, setActive] = useState(0)
  const day = days[active]

  const miniMapRef = useRef<HTMLDivElement>(null)
  const miniMapInstance = useRef<maplibregl.Map | null>(null)
  const markerEls = useRef<HTMLDivElement[]>([])

  const stops = (waypoints ?? []).filter((wp, i) => {
    if (i === 0) return true
    const last = (waypoints?.length ?? 0) - 1
    return !(i === last && wp.coords[0] === waypoints?.[0].coords[0] && wp.coords[1] === waypoints?.[0].coords[1])
  })

  // Init mini map once
  useEffect(() => {
    if (!miniMapRef.current || stops.length < 2) return
    markerEls.current = []

    const coords = stops.map((s) => s.coords as [number, number])
    const bounds = coords.reduce(
      (b, c) => b.extend(c),
      new maplibregl.LngLatBounds(coords[0], coords[0]),
    )

    const map = new maplibregl.Map({
      container: miniMapRef.current,
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      interactive: false,
      attributionControl: false,
    })

    map.on('load', () => {
      map.fitBounds(bounds, { padding: 40, duration: 0, maxZoom: 9 })

      map.addSource('route', {
        type: 'geojson',
        data: { type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: coords } },
      })
      map.addLayer({
        id: 'route-line',
        type: 'line',
        source: 'route',
        layout: { 'line-join': 'round', 'line-cap': 'round' },
        paint: { 'line-color': TEAL, 'line-width': 2, 'line-opacity': 0.7, 'line-dasharray': [3, 2] },
      })

      stops.forEach((stop, i) => {
        const el = document.createElement('div')
        el.style.cssText = `
          width:22px;height:22px;border-radius:50%;
          background:${i === 0 ? TEAL : '#fff'};
          border:2.5px solid ${TEAL};
          display:flex;align-items:center;justify-content:center;
          font-size:9px;font-weight:700;
          color:${i === 0 ? '#fff' : TEAL};
          box-shadow:0 1px 4px rgba(0,0,0,0.15);
          transition:background 200ms,color 200ms;
        `
        el.textContent = `${i + 1}`
        markerEls.current[i] = el
        new maplibregl.Marker({ element: el, anchor: 'center' }).setLngLat(stop.coords).addTo(map)
      })
    })

    miniMapInstance.current = map
    return () => { map.remove(); miniMapInstance.current = null; markerEls.current = [] }
  }, [stops.length])

  // Update active marker + pan on day change
  useEffect(() => {
    markerEls.current.forEach((el, i) => {
      if (!el) return
      el.style.background = i === active ? TEAL : '#fff'
      el.style.color = i === active ? '#fff' : TEAL
      el.style.transform = i === active ? 'scale(1.3)' : 'scale(1)'
    })
    if (miniMapInstance.current && stops[active]) {
      miniMapInstance.current.easeTo({ center: stops[active].coords, zoom: 8, duration: 600 })
    }
  }, [active])

  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[2fr_3fr] xl:grid-cols-[400px_1fr] xl:gap-14">

          {/* ── LEFT PANEL ─────────────────────────────────── */}
          <div className="flex flex-col gap-8">

            {/* Overview */}
            <div>
              {country && <p className="eyebrow mb-2">{country}</p>}
              {title && <h2 className="font-serif text-2xl sm:text-3xl leading-tight">{title.replace('\n', ' ')}</h2>}
              <p className="mt-4 text-[14px] leading-relaxed text-neutral-500">{overview}</p>
            </div>

            {/* Horizontal day photo strip */}
            <div>
              <p className="text-sm font-medium text-neutral-800 mb-4">The Experience</p>
              <div className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
                {days.map((d, i) => (
                  <button
                    key={d.day}
                    onClick={() => setActive(i)}
                    className="group snap-start shrink-0 relative rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-lg"
                    style={{
                      width: 160,
                      height: 230,
                      outline: active === i ? `2.5px solid ${TEAL}` : '1.5px solid #e5e5e5',
                      outlineOffset: active === i ? '2px' : '0',
                    }}
                  >
                    <img
                      src={d.image}
                      alt={d.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 px-3 py-3">
                      <span className="text-[11px] font-semibold tracking-[0.12em] text-white">Day {d.day}</span>
                      <p className="text-[10px] text-white/70 mt-0.5 line-clamp-2 leading-snug">{d.title}</p>
                    </div>
                    {active === i && (
                      <div className="absolute top-2.5 right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={TEAL} strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT PANEL ─────────────────────────────────── */}
          <div className="flex flex-col gap-5">

            {/* Heading + arrow buttons */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl">Itinerary</h3>
                <p className="mt-1 text-sm text-neutral-400 tracking-wide">Day {day.day} of {days.length}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActive((i) => Math.max(0, i - 1))}
                  disabled={active === 0}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-md transition hover:bg-neutral-800 disabled:opacity-25"
                  aria-label="Previous day"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <span className="text-xs font-medium text-neutral-400 tabular-nums">{active + 1} / {days.length}</span>
                <button
                  onClick={() => setActive((i) => Math.min(days.length - 1, i + 1))}
                  disabled={active === days.length - 1}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-md transition hover:bg-neutral-800 disabled:opacity-25"
                  aria-label="Next day"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 6l6 6-6 6" /></svg>
                </button>
              </div>
            </div>

            {/* Photo + teal card (card overlaps image bottom) */}
            <div className="flex flex-col">
              {/* Photo */}
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <img
                  key={day.day}
                  src={day.image}
                  alt={day.title}
                  className="h-72 w-full object-cover sm:h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                {/* Arrow overlays on photo sides */}
                <button
                  onClick={() => setActive((i) => Math.max(0, i - 1))}
                  disabled={active === 0}
                  className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/80 disabled:opacity-20"
                  aria-label="Previous day"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <button
                  onClick={() => setActive((i) => Math.min(days.length - 1, i + 1))}
                  disabled={active === days.length - 1}
                  className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/80 disabled:opacity-20"
                  aria-label="Next day"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 6l6 6-6 6" /></svg>
                </button>
              </div>

              {/* Teal card — peeks above the image bottom, extends below */}
              <div className="relative z-10 -mt-12 px-4">
                <div className="rounded-2xl p-4 shadow-2xl" style={{ background: TEAL }}>
                  <p className="font-semibold text-[15px] text-white leading-snug">{day.title}</p>
                  <p className="mt-2 text-[12px] leading-relaxed text-white/85">{day.body}</p>
                  {((day.accommodation && day.accommodation !== '—') || day.meals) && (
                    <div className="mt-3 border-t border-white/20 pt-3 flex flex-wrap gap-3">
                      {day.accommodation && day.accommodation !== '—' && (
                        <span className="flex items-center gap-1.5 text-[11px] text-white/75">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21V7l9-4 9 4v14M9 21V12h6v9" /></svg>
                          {day.accommodation.replace(/Mid-Range:|Luxury:/gi, '').replace(/\|/g, ' · ').trim()}
                        </span>
                      )}
                      {day.meals && (
                        <span className="flex items-center gap-1.5 text-[11px] text-white/75">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /></svg>
                          {day.meals}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Mini route map */}
            {stops.length >= 2 && (
              <div className="overflow-hidden rounded-2xl ring-1 ring-neutral-200 shadow-sm" style={{ height: 200 }}>
                <div ref={miniMapRef} style={{ width: '100%', height: '100%' }} />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
