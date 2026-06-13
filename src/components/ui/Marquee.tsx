type Props = {
  items: string[]
  className?: string
  speed?: number // seconds for one full loop
}

export default function Marquee({ items, className = '', speed = 28 }: Props) {
  const repeated = [...items, ...items] // duplicate for seamless loop

  return (
    <div className={`overflow-hidden whitespace-nowrap select-none ${className}`}>
      <div
        className="inline-flex"
        style={{
          animation: `marqueeLoop ${speed}s linear infinite`,
          willChange: 'transform',
        }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-5">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase">{item}</span>
            <span className="inline-block h-1 w-1 rounded-full bg-teal-500 opacity-70" />
          </span>
        ))}
      </div>
    </div>
  )
}
