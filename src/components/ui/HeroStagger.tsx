import type { ReactNode } from 'react'

type HeroStaggerProps = {
  children: ReactNode
  className?: string
}

/** Staggered entrance for page hero copy (eyebrow → title → body → CTAs). */
export default function HeroStagger({ children, className = '' }: HeroStaggerProps) {
  return <div className={`hero-stagger ${className}`.trim()}>{children}</div>
}

export function HeroItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`hero-item ${className}`.trim()}>{children}</div>
}
