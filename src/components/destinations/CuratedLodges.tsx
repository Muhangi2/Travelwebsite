import type { Country } from '@/data/destinations'

export default function CuratedLodges({ lodges }: { lodges: Country['lodges'] }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl">
            Your Sanctuary in the Wild: Curated<br />Luxury Lodges
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600">
            We hand-select only the most exclusive, sustainable, and service-oriented lodges that offer an authentic
            connection to the wilderness without compromising on comfort.
          </p>
        </div>

        <div className="relative mt-12">
          <button
            aria-label="Previous"
            className="btn-icon absolute -left-4 top-1/2 hidden -translate-y-1/2 lg:block"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="cards-scroll-3 gap-6">
            {lodges.map((l) => (
              <article key={l.name} className="overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-neutral-200">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={l.image} alt={l.name} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-base">{l.name}</h3>
                  <p className="mt-1 flex items-center gap-1 text-[10px] text-brand-green">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    {l.location}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-neutral-600">{l.body}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            aria-label="Next"
            className="btn-icon absolute -right-4 top-1/2 hidden -translate-y-1/2 lg:block"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
