import { useEffect, useRef, useState } from 'react'

export default function SiteCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouse   = useRef({ x: -200, y: -200 })
  const ring    = useRef({ x: -200, y: -200 })
  const raf     = useRef<number>()
  const [state, setState] = useState<'idle' | 'hover' | 'image' | 'hidden'>('hidden')

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      const t = e.target as HTMLElement
      const isBtn  = !!t.closest('button, a, [role="button"]')
      const isImg  = t.tagName === 'IMG' || !!t.closest('[data-cursor-img]')
      setState(isImg ? 'image' : isBtn ? 'hover' : 'idle')
    }
    const onLeave = () => setState('hidden')

    document.addEventListener('mousemove', onMove)
    document.documentElement.addEventListener('mouseleave', onLeave)

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const tick = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.09)
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.09)

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${mouse.current.x}px,${mouse.current.y}px) translate(-50%,-50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x}px,${ring.current.y}px) translate(-50%,-50%)`
      }

      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  const hidden = state === 'hidden'
  const hover  = state === 'hover'
  const image  = state === 'image'

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full will-change-transform"
        style={{
          width:  hover || image ? 5 : 5,
          height: hover || image ? 5 : 5,
          background: image ? '#fff' : '#0d9488',
          opacity: hidden ? 0 : 1,
          transition: 'opacity 200ms, background 300ms',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full will-change-transform"
        style={{
          width:  hover ? 56 : image ? 64 : 36,
          height: hover ? 56 : image ? 64 : 36,
          border: `1.5px solid ${image ? 'rgba(255,255,255,0.7)' : hover ? '#0d9488' : 'rgba(0,0,0,0.25)'}`,
          background: hover ? 'rgba(13,148,136,0.06)' : image ? 'rgba(255,255,255,0.05)' : 'transparent',
          opacity: hidden ? 0 : 1,
          transition: 'width 350ms cubic-bezier(0.22,1,0.36,1), height 350ms cubic-bezier(0.22,1,0.36,1), border-color 300ms, background 300ms, opacity 200ms',
        }}
      />
    </>
  )
}
