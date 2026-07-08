import { useState, useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import type { JourneyDay } from '@/components/collection-detail/SafariJourney'
import type { RouteWaypoint } from '@/data/journeys'

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN as string

const ROUTE_COLOR = '#2563eb'

function parseAccommodation(raw: string): { tier: string | null; name: string }[] {
  if (!raw || raw === '—') return []
  if (raw.includes('|')) {
    return raw.split('|').map((part) => {
      const colonIdx = part.indexOf(':')
      if (colonIdx !== -1 && colonIdx < 16)
        return { tier: part.slice(0, colonIdx).trim(), name: part.slice(colonIdx + 1).trim() }
      return { tier: null, name: part.trim() }
    })
  }
  const colonIdx = raw.indexOf(':')
  if (colonIdx !== -1 && colonIdx < 16)
    return [{ tier: raw.slice(0, colonIdx).trim(), name: raw.slice(colonIdx + 1).trim() }]
  return [{ tier: null, name: raw.trim() }]
}

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

  // Tap-to-select on the horizontally-scrollable day strip: on iOS Safari, a tap
  // that lands while the strip is still settling from a swipe stops the scroll
  // but doesn't fire a click event. pointerup still fires, so we use movement
  // distance to distinguish a tap from a drag.
  const pointerStart = useRef<{ x: number; y: number } | null>(null)
  const handleCardPointerDown = (e: React.PointerEvent) => {
    pointerStart.current = { x: e.clientX, y: e.clientY }
  }
  const handleCardPointerUp = (i: number) => (e: React.PointerEvent) => {
    const start = pointerStart.current
    pointerStart.current = null
    if (!start) return
    if (Math.abs(e.clientX - start.x) < 10 && Math.abs(e.clientY - start.y) < 10) setActive(i)
  }

  const miniMapRef = useRef<HTMLDivElement>(null)
  const miniMapInstance = useRef<mapboxgl.Map | null>(null)
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
      (b, c) => b.extend(c as mapboxgl.LngLatLike),
      new mapboxgl.LngLatBounds(coords[0], coords[0]),
    )

    const map = new mapboxgl.Map({
      container: miniMapRef.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      interactive: true,
      attributionControl: false,
      logoPosition: 'bottom-right',
      minZoom: 2,
      maxZoom: 16,
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
        paint: { 'line-color': ROUTE_COLOR, 'line-width': 2.5, 'line-opacity': 0.8, 'line-dasharray': [3, 2] },
      })

      stops.forEach((stop, i) => {
        const el = document.createElement('div')
        el.style.cssText = `
          width:22px;height:22px;border-radius:50%;
          background:#111;
          border:2px solid #fff;
          display:flex;align-items:center;justify-content:center;
          font-size:9px;font-weight:700;
          color:#fff;
          box-shadow:0 1px 6px rgba(0,0,0,0.3);
          transition:transform 200ms;
        `
        el.textContent = `${i + 1}`
        markerEls.current[i] = el
        new mapboxgl.Marker({ element: el, anchor: 'center' }).setLngLat(stop.coords as mapboxgl.LngLatLike).addTo(map)
      })
    })

    miniMapInstance.current = map
    return () => { map.remove(); miniMapInstance.current = null; markerEls.current = [] }
  }, [stops.length])

  // Update active marker + pan on day change
  useEffect(() => {
    markerEls.current.forEach((el, i) => {
      if (!el) return
      el.style.background = i === active ? '#fff' : '#111'
      el.style.color = i === active ? '#111' : '#fff'
      el.style.border = i === active ? '2px solid #111' : '2px solid #fff'
      el.style.transform = i === active ? 'scale(1.3)' : 'scale(1)'
    })
    if (miniMapInstance.current && stops[active]) {
      miniMapInstance.current.easeTo({ center: stops[active].coords as mapboxgl.LngLatLike, zoom: 8, duration: 600 })
    }
  }, [active])

  return (
    <section className="bg-white py-10 sm:py-16 lg:py-20">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-[2fr_3fr] xl:grid-cols-[400px_1fr] xl:gap-14">

          {/* ── LEFT PANEL ─────────────────────────────────── */}
          <div className="flex flex-col gap-6 sm:gap-8 min-w-0">

            {/* Overview */}
            <div>
              {country && <p className="eyebrow mb-2">{country}</p>}
              {title && <h2 className="text-xl sm:text-2xl lg:text-3xl leading-tight">{title.replace('\n', ' ')}</h2>}
              <p className="mt-3 text-[13px] sm:text-[14px] leading-relaxed text-neutral-500">{overview}</p>
            </div>

            {/* Horizontal day photo strip */}
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <p className="text-xs sm:text-sm font-medium text-neutral-800">The Experience</p>
                {/* Scroll hint */}
                <span className="flex items-center gap-1 text-[10px] text-neutral-400">
                  Swipe
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
                </span>
              </div>

              {/* Scrollable strip with right-fade */}
              <div className="relative">
                <div
                  className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory"
                  style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
                >
                  {days.map((d, i) => (
                    <button
                      key={d.day}
                      onClick={() => setActive(i)}
                      onPointerDown={handleCardPointerDown}
                      onPointerUp={handleCardPointerUp(i)}
                      className="group snap-start shrink-0 relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                      style={{
                        width: 150,
                        height: 215,
                        outline: active === i ? '2.5px solid #000' : '1.5px solid #e5e5e5',
                        outlineOffset: active === i ? '2px' : '0',
                      }}
                    >
                      <img
                        src={d.image}
                        alt={d.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

                      {/* Day badge — top left */}
                      <div className="absolute top-2.5 left-2.5 rounded-full bg-black/70 px-2.5 py-1 backdrop-blur-sm">
                        <span className="text-[9px] font-bold tracking-[0.14em] uppercase text-white">Day {d.day}</span>
                      </div>

                      {/* Active check — top right */}
                      {active === i && (
                        <div className="absolute top-2.5 right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-md">
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3.5"><path d="M5 12l5 5L20 7" /></svg>
                        </div>
                      )}

                      {/* Title — bottom */}
                      <div className="absolute bottom-0 inset-x-0 px-3 py-3">
                        <p className="text-[11px] font-semibold leading-snug text-white line-clamp-2">{d.title}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Right-edge fade to hint at scrollability */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent" />
              </div>
            </div>
          </div>

          {/* ── RIGHT PANEL ─────────────────────────────────── */}
          <div className="flex flex-col gap-4 sm:gap-5 min-w-0">

            {/* Heading + arrow chevron day stepper */}
            <div className="flex flex-col gap-3 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl lg:text-3xl">Itinerary</h3>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActive((i) => Math.max(0, i - 1))}
                    disabled={active === 0}
                    className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-black text-white shadow-md transition hover:bg-neutral-800 disabled:opacity-25"
                    aria-label="Previous day"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
                  </button>
                  <button
                    onClick={() => setActive((i) => Math.min(days.length - 1, i + 1))}
                    disabled={active === days.length - 1}
                    className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-black text-white shadow-md transition hover:bg-neutral-800 disabled:opacity-25"
                    aria-label="Next day"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 6l6 6-6 6" /></svg>
                  </button>
                </div>
              </div>

              {/* Arrow breadcrumb stepper */}
              <div className="hide-scrollbar overflow-x-auto">
                <div className="flex w-max items-stretch">
                  {days.map((d, i) => {
                    const isPast   = i < active
                    const isActive = i === active
                    const isFirst  = i === 0
                    const isLast   = i === days.length - 1
                    return (
                      <button
                        key={d.day}
                        onClick={() => setActive(i)}
                        style={{
                          clipPath: isFirst
                            ? 'polygon(0 0, calc(100% - 9px) 0, 100% 50%, calc(100% - 9px) 100%, 0 100%)'
                            : isLast
                            ? 'polygon(9px 0, 100% 0, 100% 100%, 0 100%, 9px 50%)'
                            : 'polygon(9px 0, calc(100% - 9px) 0, 100% 50%, calc(100% - 9px) 100%, 0 100%, 9px 50%)',
                          marginLeft: isFirst ? 0 : -9,
                          position: 'relative',
                          zIndex: isActive ? 10 : isPast ? 5 : 1,
                        }}
                        className={`px-4 sm:px-5 py-2 sm:py-2.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] transition-colors duration-200 ${
                          isActive
                            ? 'bg-black text-white'
                            : isPast
                            ? 'bg-neutral-300 text-neutral-600'
                            : 'bg-neutral-100 text-neutral-400 hover:bg-neutral-200 hover:text-neutral-600'
                        }`}
                        aria-current={isActive ? 'step' : undefined}
                      >
                        Day {d.day}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Photo + overlapping card */}
            <div className="flex flex-col">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg">
                <img
                  key={day.day}
                  src={day.image}
                  alt={day.title}
                  loading="lazy"
                  decoding="async"
                  className="h-60 w-full object-cover sm:h-80 lg:h-[360px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <button
                  onClick={() => setActive((i) => Math.max(0, i - 1))}
                  disabled={active === 0}
                  className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/80 disabled:opacity-20"
                  aria-label="Previous day"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <button
                  onClick={() => setActive((i) => Math.min(days.length - 1, i + 1))}
                  disabled={active === days.length - 1}
                  className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/80 disabled:opacity-20"
                  aria-label="Next day"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 6l6 6-6 6" /></svg>
                </button>
              </div>

              {/* Info card — overlaps photo bottom, alternates black / white per day */}
              {(() => {
                const isDark = active % 2 === 0
                return (
                <div className={`relative z-10 -mt-8 sm:-mt-12 mx-3 sm:mx-4 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-2xl transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white ring-1 ring-neutral-200'}`}>
                  {/* Top row: day label + dot progress */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[9px] font-bold uppercase tracking-[0.18em] ${isDark ? 'text-white/40' : 'text-neutral-400'}`}>
                      Day {day.day} of {days.length}
                    </span>
                    <div className="flex items-center gap-1">
                      {days.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActive(i)}
                          className={`rounded-full transition-all duration-300 ${
                            i === active
                              ? `h-1.5 w-5 ${isDark ? 'bg-white' : 'bg-black'}`
                              : `h-1.5 w-1.5 ${isDark ? 'bg-white/20 hover:bg-white/40' : 'bg-neutral-300 hover:bg-neutral-500'}`
                          }`}
                          aria-label={`Go to day ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <h4 className={`text-base sm:text-lg leading-snug ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                    {day.title}
                  </h4>
                  <p className={`mt-2 text-[12px] sm:text-[13px] leading-relaxed ${isDark ? 'text-white/65' : 'text-neutral-500'}`}>
                    {day.body}
                  </p>

                  {((day.accommodation && day.accommodation !== '—') || day.meals) && (
                    <div className={`mt-4 border-t pt-4 ${isDark ? 'border-white/10' : 'border-neutral-200'}`}>
                      <div className="flex items-start gap-4">

                        {/* Stays column */}
                        {day.accommodation && day.accommodation !== '—' && (() => {
                          const options = parseAccommodation(day.accommodation)
                          return (
                            <div className="flex-1 min-w-0">
                              <p className={`mb-2 text-[9px] font-bold uppercase tracking-[0.18em] ${isDark ? 'text-white/30' : 'text-neutral-400'}`}>
                                Stays
                              </p>
                              <div className="space-y-2">
                                {options.map(({ tier, name }, idx) => (
                                  <div key={idx} className="flex items-start gap-1.5">
                                    {tier && (
                                      <span className={`mt-0.5 shrink-0 rounded px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide ${
                                        tier.toLowerCase().includes('luxury')
                                          ? 'bg-amber-500 text-white'
                                          : isDark ? 'bg-white/10 text-white/50' : 'bg-neutral-100 text-neutral-500 ring-1 ring-neutral-200'
                                      }`}>{tier}</span>
                                    )}
                                    <span className={`text-[11px] leading-snug ${isDark ? 'text-white/70' : 'text-neutral-600'}`}>{name}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )
                        })()}

                        {/* Meals column */}
                        {day.meals && (
                          <div className="shrink-0 text-right">
                            <p className={`mb-2 text-[9px] font-bold uppercase tracking-[0.18em] ${isDark ? 'text-white/30' : 'text-neutral-400'}`}>
                              Meals
                            </p>
                            <span className={`text-[11px] ${isDark ? 'text-white/70' : 'text-neutral-600'}`}>
                              {day.meals}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )
              })()}
            </div>

            {/* Mini route map */}
            {stops.length >= 2 && (
              <div className="relative overflow-hidden rounded-2xl ring-1 ring-neutral-200 shadow-sm" style={{ height: 280 }}>
                <div ref={miniMapRef} style={{ width: '100%', height: '100%' }} />

                {/* Zoom controls */}
                <div className="absolute right-3 top-3 z-10 flex flex-col overflow-hidden rounded-lg shadow-md ring-1 ring-black/10">
                  <button
                    type="button"
                    aria-label="Zoom in"
                    onClick={() => miniMapInstance.current?.zoomIn()}
                    className="flex h-9 w-9 items-center justify-center border-b border-neutral-200 bg-white text-lg font-light leading-none text-neutral-700 transition hover:bg-neutral-50 active:bg-neutral-100 select-none"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    aria-label="Zoom out"
                    onClick={() => miniMapInstance.current?.zoomOut()}
                    className="flex h-9 w-9 items-center justify-center bg-white text-lg font-light leading-none text-neutral-700 transition hover:bg-neutral-50 active:bg-neutral-100 select-none"
                  >
                    −
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
