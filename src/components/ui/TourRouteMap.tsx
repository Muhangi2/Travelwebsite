import { useEffect, useRef, useState } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import type { RouteWaypoint } from '@/data/journeys'
import type { JourneyDay } from '@/components/collection-detail/SafariJourney'

const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
const BLUE = '#3b82f6'
const BLUE_LIGHT = '#60a5fa'

type Props = {
  waypoints: RouteWaypoint[]
  days?: JourneyDay[]
  title?: string
}

export default function TourRouteMap({ waypoints, days, title }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<maplibregl.Map | null>(null)
  const [ready, setReady] = useState(false)
  const [selectedDay, setSelectedDay] = useState<JourneyDay | null>(null)
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

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
      (b, c) => b.extend(c),
      new maplibregl.LngLatBounds(coords[0], coords[0]),
    )

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: MAP_STYLE,
      center: [31.0, 0.5],
      zoom: 5,
      maxZoom: 11,
      attributionControl: false,
    })

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right')
    map.addControl(new maplibregl.AttributionControl({ compact: true }), 'bottom-right')

    map.on('load', () => {
      map.fitBounds(bounds, {
        padding: { top: 60, bottom: 60, left: 60, right: 60 },
        maxZoom: 9,
        duration: 0,
      })
      map.once('idle', () => {
        map.setMinZoom(Math.max(4, map.getZoom() - 0.5))
      })

      map.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: { type: 'LineString', coordinates: coords },
        },
      })

      map.addLayer({
        id: 'route-glow',
        type: 'line',
        source: 'route',
        layout: { 'line-join': 'round', 'line-cap': 'round' },
        paint: { 'line-color': BLUE, 'line-width': 14, 'line-opacity': 0.12, 'line-blur': 10 },
      })

      map.addLayer({
        id: 'route-base',
        type: 'line',
        source: 'route',
        layout: { 'line-join': 'round', 'line-cap': 'round' },
        paint: { 'line-color': BLUE, 'line-width': 2, 'line-opacity': 0.5 },
      })

      map.addLayer({
        id: 'route-dashes',
        type: 'line',
        source: 'route',
        layout: { 'line-join': 'round', 'line-cap': 'round' },
        paint: {
          'line-color': BLUE_LIGHT,
          'line-width': 2.5,
          'line-opacity': 0.9,
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
        el.style.cssText = `position:relative;width:28px;height:28px;cursor:${day ? 'pointer' : 'default'};`

        if (isFirst) {
          const pulse = document.createElement('div')
          pulse.style.cssText = `
            position:absolute;inset:-8px;border-radius:50%;
            border:1.5px solid rgba(59,130,246,0.3);
            animation:pulse-ring 2.4s ease-out infinite;
          `
          el.appendChild(pulse)
        }

        const circle = document.createElement('div')
        circle.style.cssText = `
          position:absolute;inset:0;border-radius:50%;
          background:${isFirst ? BLUE : '#0f172a'};
          border:2px solid ${BLUE_LIGHT};
          display:flex;align-items:center;justify-content:center;
          box-shadow:0 0 12px rgba(59,130,246,0.35);
          font-family:DM Sans,system-ui,sans-serif;
          font-size:10px;font-weight:700;
          color:${isFirst ? '#fff' : BLUE_LIGHT};
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

        new maplibregl.Marker({ element: el, anchor: 'center' })
          .setLngLat(wp.coords)
          .addTo(map)
      })

      setReady(true)
    })

    mapRef.current = map
    return () => { map.remove(); mapRef.current = null }
  }, [waypoints])

  return (
    <section className="bg-[#080f1a]">
      {/* Header */}
      <div className="container-page py-5">
        <div className="flex items-center gap-5">
          <div className="h-px flex-1 bg-blue-900/30" />
          <div className="text-center">
            <p className="text-[10px] tracking-[0.3em] text-blue-400/50 uppercase font-medium">Safari Route</p>
            {title && <p className="mt-1 font-serif text-base text-white/70">{title}</p>}
          </div>
          <div className="h-px flex-1 bg-blue-900/30" />
        </div>
      </div>

      {/* Map — full width edge to edge */}
      <div className="relative overflow-hidden" style={{ lineHeight: 0 }}>
          {!ready && (
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-center bg-[#0a1628]" style={{ height: 380 }}>
              <div className="h-7 w-7 rounded-full border-2 border-blue-900 border-t-blue-400 animate-spin" />
            </div>
          )}
          <div
            ref={containerRef}
            style={{ width: '100%', height: 380, opacity: ready ? 1 : 0, transition: 'opacity 700ms ease' }}
          />

          {/* Day detail popup — bottom centre of map */}
          {selectedDay && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[min(340px,90%)] rounded-xl bg-[#07111eee] backdrop-blur ring-1 ring-blue-900/50 p-4 animate-slideUp">
              <button
                onClick={() => { setSelectedDay(null); setSelectedIdx(null) }}
                className="absolute top-3 right-3 h-6 w-6 flex items-center justify-center rounded-full bg-white/5 text-white/40 hover:text-white transition"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>

              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[11px] font-bold text-white">
                  {selectedDay.day}
                </span>
                <div>
                  <p className="text-[9px] tracking-[0.18em] text-blue-400/60 uppercase">Day {selectedDay.day}</p>
                  <p className="text-[10px] text-blue-300/50">{uniqueWaypoints[selectedIdx ?? 0]?.name}</p>
                </div>
              </div>

              <p className="font-serif text-[15px] leading-snug text-white mb-2">{selectedDay.title}</p>
              <p className="text-[12px] leading-relaxed text-white/50 line-clamp-3">{selectedDay.body}</p>

              {(selectedDay.accommodation && selectedDay.accommodation !== '—') || selectedDay.meals ? (
                <div className="mt-3 pt-3 border-t border-white/10 flex gap-4 text-[11px]">
                  {selectedDay.accommodation && selectedDay.accommodation !== '—' && (
                    <span className="text-white/45"><span className="text-blue-400/60">Stay: </span>{selectedDay.accommodation}</span>
                  )}
                  {selectedDay.meals && (
                    <span className="text-white/45"><span className="text-blue-400/60">Meals: </span>{selectedDay.meals}</span>
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
                    className="text-[10px] tracking-[0.12em] text-blue-400/60 hover:text-blue-400 disabled:opacity-25 transition flex items-center gap-1"
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>PREV
                  </button>
                  <span className="text-[10px] text-white/25">{(selectedIdx ?? 0) + 1} / {days.length}</span>
                  <button
                    onClick={() => {
                      const i = (selectedIdx ?? 0) + 1
                      if (days[i]) { setSelectedDay(days[i]); setSelectedIdx(i) }
                    }}
                    disabled={selectedIdx === (days?.length ?? 1) - 1}
                    className="text-[10px] tracking-[0.12em] text-blue-400/60 hover:text-blue-400 disabled:opacity-25 transition flex items-center gap-1"
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
