import type { Country } from '@/data/destinations'
import Reveal, { Stagger } from '@/components/ui/Reveal'
import Picture from '@/components/Picture'

export default function CuratedLodges({ lodges }: { lodges: Country['lodges'] }) {
  if (!lodges.length) return null
  const [featured, ...rest] = lodges

  return (
    <section className="bg-[#f9f8f6] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* heading row */}
        <Reveal>
          <div className="mb-14 flex flex-col gap-y-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow mb-2">Where you'll stay</p>
              <h2 className="font-serif text-3xl sm:text-4xl">Curated Luxury Lodges</h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-500 sm:text-right">
              Hand-selected for exclusivity, sustainability, and uncompromising service.
            </p>
          </div>
        </Reveal>

        {/* featured lodge */}
        {featured && (
          <Reveal variant="up">
            <div className="group mb-4 grid overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200 sm:mb-6 lg:grid-cols-2">
              {/* image */}
              <div className="img-zoom relative overflow-hidden">
                <Picture
                  src={featured.image}
                  alt={featured.name}
                  loading="lazy"
                  decoding="async"
                  imgClassName="w-full h-full object-cover min-h-[260px] lg:min-h-[420px]"
                />
                {/* featured badge */}
                <span className="absolute left-5 top-5 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white backdrop-blur-sm">
                  Featured
                </span>
              </div>

              {/* text */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <p className="mb-3 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-400">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  {featured.location}
                </p>
                <div className="section-rule mb-6" />
                <h3 className="font-serif text-2xl sm:text-3xl">{featured.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">{featured.body}</p>
                <button className="btn-primary mt-8 self-start text-xs">View Lodge</button>
              </div>
            </div>
          </Reveal>
        )}

        {/* remaining lodges grid */}
        {rest.length > 0 && (
          <Stagger
            className="cards-scroll-3 gap-4"
            staggerMs={90}
          >
            {rest.map((lodge) => (
              <article
                key={lodge.name}
                className="card-lift group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-neutral-200"
              >
                {/* image — taller ratio for drama */}
                <div className="img-zoom relative aspect-[3/2] overflow-hidden">
                  <Picture
                    src={lodge.image}
                    alt={lodge.name}
                    loading="lazy"
                    decoding="async"
                    imgClassName="h-full w-full object-cover"
                  />
                  {/* gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                <div className="p-5">
                  <p className="mb-1.5 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    {lodge.location}
                  </p>
                  <h3 className="font-serif text-lg">{lodge.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-500">{lodge.body}</p>
                </div>
              </article>
            ))}
          </Stagger>
        )}
      </div>
    </section>
  )
}
