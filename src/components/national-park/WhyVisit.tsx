import type { Park } from '@/data/destinations'

export default function WhyVisit({ items }: { items: NonNullable<Park['whyVisit']> }) {
  return (
    <section className="bg-brand-forest py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-white">
          Why Visit
        </h2>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((item) => {
            const [title, ...rest] = item.split(' — ')
            const body = rest.join(' — ')
            return (
              <li key={item} className="flex gap-4 rounded-md bg-white/10 px-5 py-4">
                <span className="mt-0.5 shrink-0 text-brand-gold">✦</span>
                <div>
                  {body ? (
                    <>
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-white/75">{body}</p>
                    </>
                  ) : (
                    <p className="text-sm leading-relaxed text-white">{title}</p>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
