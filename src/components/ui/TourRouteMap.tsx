import { useEffect, useRef, useState, useCallback } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import type { RouteWaypoint } from '@/data/journeys'
import type { JourneyDay } from '@/components/collection-detail/SafariJourney'

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN as string

const MAP_STYLE = 'mapbox://styles/mapbox/outdoors-v12'
const GREEN = '#1a5c3a'
const GREEN_LIGHT = '#2d8c57'

type Props = {
  waypoints: RouteWaypoint[]
  days?: JourneyDay[]
  title?: string
}

export default function TourRouteMap({ waypoints, days, title }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const [ready, setReady] = useState(false)
  const [selectedDay, setSelectedDay] = useState<JourneyDay | null>(null)
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  const zoomIn  = useCallback(() => mapRef.current?.zoomIn(),  [])
  const zoomOut = useCallback(() => mapRef.current?.zoomOut(), [])

  const uniqueWaypoints = waypoints.filter((wp, i) => {
    if (i === 0) return true
    const isLastDupe =
      i === waypoints.length - 1 &&
      wp.coords[0] === waypoints[0].coords[0] &&
      wp.coords[1] === waypoints[0].coords[1]
    return !isLastDupe
  })

  useEffect(() => {
    if (!containerRef.current || waypoints.length < 2) return

    const coords = waypoints.map((w) => w.coords as [number, number])
    const bounds = coords.reduce(
      (b, c) => b.extend(c as mapboxgl.LngLatLike),
      new mapboxgl.LngLatBounds(coords[0], coords[0]),
    )

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: MAP_STYLE,
      center: [31.0, 0.5],
      zoom: 5,
      minZoom: 2,
      maxZoom: 16,
      attributionControl: false,
      logoPosition: 'bottom-right',
    })

    map.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-right')

    map.on('load', () => {
      map.fitBounds(bounds, {
        padding: { top: 70, bottom: 70, left: 70, right: 70 },
        maxZoom: 9,
        duration: 0,
      })

      map.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: { type: 'LineString', coordinates: coords },
        },
      })

      // Outer glow
      map.addLayer({
        id: 'route-glow',
        type: 'line',
        source: 'route',
        layout: { 'line-join': 'round', 'line-cap': 'round' },
        paint: { 'line-color': GREEN, 'line-width': 16, 'line-opacity': 0.15, 'line-blur': 12 },
      })

      // Solid base line
      map.addLayer({
        id: 'route-base',
        type: 'line',
        source: 'route',
        layout: { 'line-join': 'round', 'line-cap': 'round' },
        paint: { 'line-color': GREEN, 'line-width': 2.5, 'line-opacity': 0.55 },
      })

      // Animated dashes
      map.addLayer({
        id: 'route-dashes',
        type: 'line',
        source: 'route',
        layout: { 'line-join': 'round', 'line-cap': 'round' },
        paint: {
          'line-color': GREEN_LIGHT,
          'line-width': 3,
          'line-opacity': 0.95,
          'line-dasharray': [0, 4, 3],
        },
      })

      const patterns: [number, number, number][] = [
        [0, 4, 3], [0.5, 4, 2.5], [1, 4, 2], [1.5, 4, 1.5],
        [2, 4, 1], [2.5, 4, 0.5], [3, 4, 0], [0, 3, 4],
      ]
      let step = 0
      let rafId: number
      const animate = () => {
        map.setPaintProperty('route-dashes', 'line-dasharray', patterns[step % patterns.length])
        step++
        rafId = requestAnimationFrame(animate)
      }
      animate()
      map.once('remove', () => cancelAnimationFrame(rafId))

      uniqueWaypoints.forEach((wp, i) => {
        const isFirst = i === 0
        const day = days?.[i]

        const el = document.createElement('div')
        el.style.cssText = `position:relative;width:32px;height:32px;cursor:${day ? 'pointer' : 'default'};`

        if (isFirst) {
          const pulse = document.createElement('div')
          pulse.style.cssText = `
            position:absolute;inset:-8px;border-radius:50%;
            border:1.5px solid rgba(26,92,58,0.3);
            animation:pulse-ring 2.4s ease-out infinite;
          `
          el.appendChild(pulse)
        }

        const circle = document.createElement('div')
        circle.style.cssText = `
          position:absolute;inset:0;border-radius:50%;
          background:#111;
          border:2px solid #fff;
          display:flex;align-items:center;justify-content:center;
          box-shadow:0 2px 8px rgba(0,0,0,0.35);
          font-family:DM Sans,system-ui,sans-serif;
          font-size:11px;font-weight:700;
          color:#fff;
          transition:transform 180ms ease;
        `
        circle.textContent = `${i + 1}`
        el.appendChild(circle)

        el.addEventListener('mouseenter', () => { circle.style.transform = 'scale(1.2)' })
        el.addEventListener('mouseleave', () => { circle.style.transform = 'scale(1)' })

        if (day) {
          el.addEventListener('click', () => {
            setSelectedIdx((prev) => {
              if (prev === i) { setSelectedDay(null); return null }
              setSelectedDay(day)
              return i
            })
          })
        }

        new mapboxgl.Marker({ element: el, anchor: 'center' })
          .setLngLat(wp.coords as mapboxgl.LngLatLike)
          .addTo(map)
      })

      setReady(true)
    })

    mapRef.current = map
    return () => { map.remove(); mapRef.current = null }
  }, [waypoints])

  return (
    <section className="bg-white">
      {/* Header */}
      <div className="container-page py-5">
        <div className="flex items-center gap-5">
          <div className="h-px flex-1 bg-neutral-200" />
          <div className="text-center">
            <p className="text-[10px] tracking-[0.3em] text-neutral-400 uppercase font-medium">Safari Route</p>
            {title && <p className="mt-1 font-serif text-base text-neutral-700">{title}</p>}
          </div>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>
      </div>

      {/* Map full width edge to edge */}
      <div className="relative overflow-hidden" style={{ lineHeight: 0 }}>
        {!ready && (
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-center bg-neutral-100" style={{ height: 560 }}>
            <div className="h-7 w-7 rounded-full border-2 border-neutral-300 border-t-neutral-700 animate-spin" />
          </div>
        )}
        <div
          ref={containerRef}
          style={{ width: '100%', height: 560, opacity: ready ? 1 : 0, transition: 'opacity 700ms ease' }}
        />

        {/* Zoom controls always rendered so they're usable as soon as map loads */}
        <div
          className="absolute top-4 right-4 z-10 flex flex-col overflow-hidden rounded-lg shadow-lg ring-1 ring-black/10"
          style={{ opacity: ready ? 1 : 0, transition: 'opacity 400ms ease', pointerEvents: ready ? 'auto' : 'none' }}
        >
          <button
            onClick={zoomIn}
            aria-label="Zoom in"
            className="flex h-10 w-10 items-center justify-center bg-white text-neutral-700 hover:bg-neutral-50 active:bg-neutral-200 transition-colors border-b border-neutral-200 text-xl font-light leading-none select-none"
          >
            +
          </button>
          <button
            onClick={zoomOut}
            aria-label="Zoom out"
            className="flex h-10 w-10 items-center justify-center bg-white text-neutral-700 hover:bg-neutral-50 active:bg-neutral-200 transition-colors text-xl font-light leading-none select-none"
          >
            −
          </button>
        </div>

        {/* Day detail popup */}
        {selectedDay && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[min(360px,90%)] rounded-xl bg-white/95 backdrop-blur shadow-xl ring-1 ring-black/8 p-4 animate-slideUp">
            <button
              onClick={() => { setSelectedDay(null); setSelectedIdx(null) }}
              className="absolute top-3 right-3 h-6 w-6 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-400 hover:text-neutral-800 transition"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>

            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-[11px] font-bold text-white">
                {selectedDay.day}
              </span>
              <div>
                <p className="text-[9px] tracking-[0.18em] text-neutral-400 uppercase">Day {selectedDay.day}</p>
                <p className="text-[10px] text-neutral-500">{uniqueWaypoints[selectedIdx ?? 0]?.name}</p>
              </div>
            </div>

            <p className="font-serif text-[15px] leading-snug text-neutral-900 mb-2">{selectedDay.title}</p>
            <p className="text-[12px] leading-relaxed text-neutral-500 line-clamp-3">{selectedDay.body}</p>

            {(selectedDay.accommodation && selectedDay.accommodation !== '—') || selectedDay.meals ? (
              <div className="mt-3 pt-3 border-t border-neutral-100 flex gap-4 text-[11px]">
                {selectedDay.accommodation && selectedDay.accommodation !== '—' && (
                  <span className="text-neutral-500"><span className="text-neutral-400 font-medium">Stay: </span>{selectedDay.accommodation}</span>
                )}
                {selectedDay.meals && (
                  <span className="text-neutral-500"><span className="text-neutral-400 font-medium">Meals: </span>{selectedDay.meals}</span>
                )}
              </div>
            ) : null}

            {days && days.length > 1 && (
              <div className="mt-3 flex items-center justify-between">
                <button
                  onClick={() => {
                    const i = (selectedIdx ?? 0) - 1
                    if (i >= 0 && days[i]) { setSelectedDay(days[i]); setSelectedIdx(i) }
                  }}
                  disabled={selectedIdx === 0}
                  className="text-[10px] tracking-[0.12em] text-neutral-400 hover:text-neutral-800 disabled:opacity-25 transition flex items-center gap-1"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>PREV
                </button>
                <span className="text-[10px] text-neutral-300">{(selectedIdx ?? 0) + 1} / {days.length}</span>
                <button
                  onClick={() => {
                    const i = (selectedIdx ?? 0) + 1
                    if (days[i]) { setSelectedDay(days[i]); setSelectedIdx(i) }
                  }}
                  disabled={selectedIdx === (days?.length ?? 1) - 1}
                  className="text-[10px] tracking-[0.12em] text-neutral-400 hover:text-neutral-800 disabled:opacity-25 transition flex items-center gap-1"
                >
                  NEXT<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 6l6 6-6 6" /></svg>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes pulse-ring {
          0%   { transform:scale(0.9);opacity:0.7; }
          70%  { transform:scale(1.7);opacity:0; }
          100% { transform:scale(1.7);opacity:0; }
        }
        @keyframes slideUp {
          from { opacity:0;transform:translate(-50%,10px); }
          to   { opacity:1;transform:translate(-50%,0); }
        }
        .animate-slideUp { animation:slideUp 220ms ease forwards; }
      `}</style>
    </section>
  )
}
