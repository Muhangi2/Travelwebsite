import type { Country } from '@/data/destinations'

const CalIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)
const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
)
const PawIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="11" cy="4" r="2" /><circle cx="18" cy="8" r="2" /><circle cx="20" cy="16" r="2" />
    <circle cx="4" cy="8" r="2" />
    <path d="M12 18.5c-2 2.5-6 2.5-6-1.5a6 6 0 0112 0c0 4-4 4-6 1.5z" />
  </svg>
)
const CompassIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
)

export default function DestinationStatBar({ stats }: { stats: Country['travelStats'] }) {
  if (!stats) return null

  const items = [
    { icon: <CalIcon />,     label: 'Best Time to Visit', value: stats.bestTime },
    { icon: <ClockIcon />,   label: 'Typical Duration',   value: stats.duration },
    { icon: <PawIcon />,     label: 'Key Wildlife',        value: stats.keyWildlife },
    { icon: <CompassIcon />, label: 'Travel Style',        value: stats.travelStyle },
  ]

  return (
    <div className="bg-[#111] text-white">
      <div className="container-page">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col gap-3 px-6 py-7 sm:py-8 ${i < 3 ? 'border-r border-white/10' : ''} ${i >= 2 ? 'border-t border-white/10 lg:border-t-0' : ''}`}
            >
              <div className="text-amber-400/80">{item.icon}</div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/35">{item.label}</p>
                <p className="mt-1.5 font-serif text-sm leading-snug text-white/90 sm:text-base">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
