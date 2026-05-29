import type { Country } from '@/data/destinations'
import Reveal, { Stagger } from '@/components/ui/Reveal'

export default function CuratedLodges({ lodges }: { lodges: Country['lodges'] }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center">
            <h2 className="font-serif text-4xl">
              Your Sanctuary in the Wild: Curated
              <br />
              Luxury Lodges
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600">
              We hand-select only the most exclusive, sustainable, and service-oriented lodges that offer an authentic
              connection to the wilderness without compromising on comfort.
            </p>
          </div>
        </Reveal>

        <Stagger className="cards-scroll-3 relative mt-12 gap-6" staggerMs={100}>
          {lodges.map((l) => (
            <article key={l.name} className="card-lift overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-neutral-200">
              <div className="img-zoom aspect-[4/3] overflow-hidden">
                <img src={l.image} alt={l.name} className="h-full w-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-base">{l.name}</h3>
                <p className="mt-1 flex items-center gap-1 text-[10px] text-neutral-500">
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
        </Stagger>
      </div>
    </section>
  )
}
