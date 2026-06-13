import { useEffect, useRef, useState } from 'react'

type Props = {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'
  className?: string
  delay?: number
  stagger?: number
  duration?: number
  threshold?: number
}

export default function SplitText({
  text,
  as: Tag = 'h2',
  className = '',
  delay = 0,
  stagger = 55,
  duration = 950,
  threshold = 0.08,
}: Props) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  const words = text.split(' ')

  return (
    // @ts-expect-error polymorphic
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ marginRight: '0.28em' }}
        >
          <span
            style={{
              display: 'inline-block',
              transform: inView ? 'translateY(0) rotate(0deg)' : 'translateY(108%) rotate(2deg)',
              opacity: inView ? 1 : 0,
              transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * stagger}ms,
                           opacity ${duration * 0.5}ms ease ${delay + i * stagger}ms`,
              willChange: 'transform',
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  )
}
