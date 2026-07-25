import type { Country } from '@/data/destinations'
import Reveal from '@/components/ui/Reveal'
import Picture from '@/components/Picture'

export default function WhenToGo({
  countryName,
  seasons,
}: {
  countryName: string
  seasons: Country['seasons']
}) {
  if (!seasons?.length) return null

  return (
    <section id="when-to-go" className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Giant ghosted section number */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-4 bottom-0 select-none font-serif text-[clamp(8rem,22vw,18rem)] font-bold leading-none text-black/[0.03]"
      >
        02
      </span>

      <div className="container-page relative z-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-10">
            <span className="eyebrow">02 &nbsp; When to Go</span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
          <h2 className="text-4xl leading-tight text-neutral-900 sm:text-5xl">
            {countryName} by Season
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-500">
            Every season reveals a different face of {countryName}. Our specialists match your timing to the
            wildlife events and landscapes that matter most to you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {seasons.map((season, i) => (
            <Reveal key={season.name} delay={i * 90} variant="up">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-[#f5f4f2] shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                {/* Image */}
                {season.image ? (
                  <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <Picture
                      src={season.image}
                      alt={season.name}
                      loading="lazy"
                      imgClassName="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Gradient overlay so dates badge is readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    {/* Dates badge over image */}
                    <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-wide text-neutral-800 backdrop-blur-sm">
                      {season.dates}
                    </span>
                  </div>
                ) : (
                  /* No image fallback show date as plain badge */
                  <div className="px-8 pt-8">
                    <span className="inline-flex self-start rounded-full border border-neutral-300 bg-white px-3 py-1 text-[11px] font-semibold tracking-wide text-neutral-600">
                      {season.dates}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-2xl leading-snug text-neutral-900">
                    {season.name}
                  </h3>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                    {season.wildlife}
                  </p>
                  <div className="my-5 h-px bg-neutral-200" />
                  <p className="flex-1 text-sm leading-relaxed text-neutral-600">{season.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
