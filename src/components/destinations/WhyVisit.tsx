import type { Country } from '@/data/destinations'
import Reveal from '@/components/ui/Reveal'

export default function WhyVisit({
  countryName,
  data,
}: {
  countryName: string
  data: Country['whyVisit']
}) {
  if (!data) return null

  return (
    <section id="overview" className="relative overflow-hidden bg-[#f5f4f2] py-24 sm:py-32">
      {/* Giant ghosted section number */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-4 select-none font-serif text-[clamp(8rem,22vw,18rem)] font-bold leading-none text-black/[0.04]"
      >
        01
      </span>

      <div className="container-page relative z-10">
        {/* Section label */}
        <Reveal>
          <div className="flex items-center gap-4 mb-10">
            <span className="eyebrow">01 &nbsp; Why {countryName}</span>
            <div className="h-px flex-1 bg-neutral-300" />
          </div>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-[3fr_2fr] lg:gap-24">
          {/* Left — headline + intro + bullets */}
          <div>
            <Reveal>
              <h2 className="text-4xl leading-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                The Essence of<br />{countryName}
              </h2>
              <p className="mt-8 text-base leading-relaxed text-neutral-600 sm:text-lg">{data.intro}</p>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-10 border-t border-neutral-300 pt-8">
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400">
                  What Sets {countryName} Apart
                </p>
                <ul className="grid gap-5 sm:grid-cols-2">
                  {data.bullets.map((bullet) => {
                    const isRich = typeof bullet === 'object'
                    const key = isRich ? bullet.title : bullet
                    return (
                      <li key={key} className="flex items-start gap-3">
                        <span className="mt-1 shrink-0 text-amber-500 text-xs" aria-hidden>◉</span>
                        <div>
                          {isRich ? (
                            <>
                              <p className="text-sm font-semibold leading-snug text-neutral-900">{bullet.title}</p>
                              <p className="mt-1 text-sm leading-relaxed text-neutral-500">{bullet.body}</p>
                            </>
                          ) : (
                            <span className="text-sm leading-relaxed text-neutral-700">{bullet}</span>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right — dark stat panel */}
          <Reveal variant="right" delay={100}>
            <div className="rounded-2xl bg-[#111] px-8 py-10 text-white lg:sticky lg:top-28">
              <p className="mb-8 text-[9px] font-bold uppercase tracking-[0.28em] text-white/30">
                {countryName} in Numbers
              </p>
              <div className="flex flex-col gap-8">
                {data.stats.map((stat, i) => (
                  <div key={stat.label}>
                    <p className="font-serif text-5xl font-light leading-none text-white sm:text-6xl">
                      {stat.number}
                    </p>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                      {stat.label}
                    </p>
                    {i < data.stats.length - 1 && (
                      <div className="mt-8 h-px bg-white/10" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
