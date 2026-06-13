import { useEffect, useRef, useState, type ReactNode, type CSSProperties, type JSX } from 'react'

type Variant = 'blur-up' | 'wipe-left' | 'slide-right' | 'count-in' | 'fade-up' | 'scale-up'

type Props = {
  variant?: Variant
  delay?: number
  duration?: number
  threshold?: number
  rootMargin?: string
  className?: string
  style?: CSSProperties
  children: ReactNode
  as?: keyof JSX.IntrinsicElements
}

const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)'

const HIDDEN: Record<Variant, CSSProperties> = {
  'blur-up':    { opacity: 0, transform: 'translateY(64px) scale(0.97)', filter: 'blur(14px)' },
  'wipe-left':  { clipPath: 'inset(0 100% 0 0)' },
  'slide-right':{ opacity: 0, transform: 'translateX(56px)' },
  'count-in':   { opacity: 0, transform: 'scale(0.75) translateY(24px)' },
  'fade-up':    { opacity: 0, transform: 'translateY(48px)' },
  'scale-up':   { opacity: 0, transform: 'scale(0.88) translateY(20px)' },
}

const VISIBLE: Record<Variant, CSSProperties> = {
  'blur-up':    { opacity: 1, transform: 'translateY(0) scale(1)', filter: 'blur(0px)' },
  'wipe-left':  { clipPath: 'inset(0 0% 0 0)' },
  'slide-right':{ opacity: 1, transform: 'translateX(0)' },
  'count-in':   { opacity: 1, transform: 'scale(1) translateY(0)' },
  'fade-up':    { opacity: 1, transform: 'translateY(0)' },
  'scale-up':   { opacity: 1, transform: 'scale(1) translateY(0)' },
}

export default function AnimateIn({
  variant = 'blur-up',
  delay = 0,
  duration = 750,
  threshold = 0.08,
  rootMargin = '0px 0px -60px 0px',
  className = '',
  style = {},
  children,
  as: Tag = 'div',
}: Props) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold, rootMargin },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold, rootMargin])

  const computedStyle: CSSProperties = {
    transition: `all ${duration}ms ${EASING}`,
    transitionDelay: `${delay}ms`,
    willChange: 'transform, opacity, filter, clip-path',
    ...(inView ? VISIBLE[variant] : HIDDEN[variant]),
    ...style,
  }

  // @ts-expect-error polymorphic tag
  return <Tag ref={ref} className={className} style={computedStyle}>{children}</Tag>
}
