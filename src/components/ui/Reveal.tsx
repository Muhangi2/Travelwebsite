import { Children, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type RevealVariant = 'up' | 'fade' | 'scale' | 'left' | 'right'

type RevealProps = {
  children: ReactNode
  className?: string
  variant?: RevealVariant
  delay?: number
  style?: CSSProperties
}

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function Reveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(() => prefersReducedMotion())

  useEffect(() => {
    if (prefersReducedMotion()) {
      setVisible(true)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? 'reveal-visible' : ''} ${className}`.trim()}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  staggerMs?: number
}

export function Stagger({ children, className = '', staggerMs = 80 }: StaggerProps) {
  const items = Children.toArray(children)
  return (
    <div className={className}>
      {items.map((child, i) => (
        <Reveal key={i} delay={i * staggerMs}>
          {child}
        </Reveal>
      ))}
    </div>
  )
}
