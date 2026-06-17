import type { Country } from '@/data/destinations'
import Reveal from '@/components/ui/Reveal'

type Props = {
  countryName: string
  data: Country['conservation']
  backgroundImage?: string
}

export default function ConservationImpact({ countryName, data, backgroundImage }: Props) {
  if (!data) return null

  return (
    <section className="relative overflow-hidden py-24 text-white sm:py-32">
      {/* Background */}
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />
          {/* Deep green-tinted overlay so the conservation tone is preserved */}
          <div className="absolute inset-0 bg-[#0d1f15]/82" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[#0d1f15]" />
      )}

      {/* Giant ghosted number */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-4 top-0 select-none font-serif text-[clamp(8rem,22vw,18rem)] font-bold leading-none text-white/[0.04]"
      >
        08
      </span>

      {/* Soft radial gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_50%,rgba(45,100,60,0.25),transparent)]" />

      <div className="container-page relative z-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/30">
              08 &nbsp; Conservation &amp; Impact
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <h2 className="max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl">
            Protecting {countryName}<br />for Generations to Come
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60">{data.intro}</p>
        </Reveal>

        {/* Stats grid */}
        <Reveal delay={80}>
          <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-3">
            {data.stats.map((stat) => (
              <div key={stat.label} className="bg-black/30 px-0 py-8 backdrop-blur-sm sm:px-8">
                <p className="font-serif text-5xl font-light leading-none text-amber-400 sm:text-6xl">
                  {stat.number}
                </p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Partners */}
        <Reveal delay={140}>
          <div className="mt-14">
            <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.28em] text-white/30">
              Conservation Partners
            </p>
            <div className="flex flex-wrap gap-3">
              {data.partners.map((partner) => (
                <span
                  key={partner}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[12px] text-white/60 backdrop-blur-sm"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
