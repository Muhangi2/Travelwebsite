import type { Country } from '@/data/destinations'

export default function PrivilegedAccess({ items }: { items: Country['privilegedAccess'] }) {
  return (
    <section className="bg-brand-forest py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl">Privileged Access: Beyond the Itinerary</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80">
            Elevate your journey with immersive experiences, insider access, and one-of-a-kind events reserved for our guests.
          </p>
        </div>

        <div className="relative mt-12">
          <button
            aria-label="Previous"
            className="absolute -left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/30 p-3 text-white hover:bg-white/10 lg:block"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="grid gap-6 md:grid-cols-3">
            {items.map((it) => (
              <article key={it.title} className="overflow-hidden rounded-md bg-white text-neutral-800 shadow-md">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={it.image} alt={it.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-base">{it.title}</h3>
                  <p className="mt-1 flex items-center gap-1 text-[10px] text-brand-green">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    {it.location}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-neutral-600">{it.body}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            aria-label="Next"
            className="absolute -right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/30 p-3 text-white hover:bg-white/10 lg:block"
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
