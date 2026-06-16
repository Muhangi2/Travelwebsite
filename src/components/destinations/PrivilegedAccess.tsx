import type { Country } from '@/data/destinations'
import Reveal from '@/components/ui/Reveal'
import Picture from '@/components/Picture'

export default function PrivilegedAccess({ items }: { items: Country['privilegedAccess'] }) {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* heading */}
        <Reveal>
          <p className="eyebrow mb-3">Exclusive Access</p>
          <div className="flex flex-col gap-y-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-xl font-serif text-3xl leading-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              Privileged Access:<br className="hidden sm:block" /> Beyond the Itinerary
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-500 sm:text-right">
              Immersive experiences and insider access reserved exclusively for our guests.
            </p>
          </div>
        </Reveal>

        {/* items */}
        <div className="mt-20 divide-y divide-neutral-200">
          {items.map((it, i) => {
            const isEven = i % 2 === 0
            return (
              <article key={it.title} className="group py-16 sm:py-20">
                <Reveal variant="up" delay={80}>
                  <div
                    className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                      isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* image col */}
                    <div className={`relative ${isEven ? '' : 'lg:order-2'}`}>
                      {/* giant ghosted number */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -right-4 -top-8 select-none font-serif text-[clamp(6rem,14vw,10rem)] font-bold leading-none text-black/[0.05] sm:-right-6 sm:-top-10"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      <div className="img-zoom relative overflow-hidden rounded-xl">
                        <Picture
                          src={it.image}
                          alt={it.title}
                          loading="lazy"
                          decoding="async"
                          imgClassName="w-full object-cover aspect-[4/3]"
                        />
                        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                      </div>
                    </div>

                    {/* text col */}
                    <div className={`${isEven ? '' : 'lg:order-1'}`}>
                      <p className="mb-5 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-400">
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
                        {it.location}
                      </p>

                      <div className="section-rule mb-6" />

                      <h3 className="font-serif text-2xl leading-snug text-neutral-900 sm:text-3xl">
                        {it.title}
                      </h3>
                      <p className="mt-5 text-sm leading-relaxed text-neutral-600">{it.body}</p>

                      <button className="btn-primary mt-8 text-xs">Inquire About Access</button>
                    </div>
                  </div>
                </Reveal>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
