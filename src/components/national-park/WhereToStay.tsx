import type { Park } from '@/data/destinations'

export default function WhereToStay({ categories }: { categories: NonNullable<Park['whereToStay']> }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-serif text-xl sm:text-3xl lg:text-4xl">Where to Stay</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-md border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <p className="font-serif text-base text-brand-green">{cat.category}</p>
              <ul className="mt-4 space-y-3">
                {cat.picks.map((pick) => {
                  const [name, ...rest] = pick.split(' — ')
                  const desc = rest.join(' — ')
                  return (
                    <li key={pick} className="flex gap-2">
                      <span className="mt-1 shrink-0 text-brand-gold text-xs">✦</span>
                      <div>
                        <p className="text-xs font-medium text-neutral-800">{name}</p>
                        {desc && (
                          <p className="mt-0.5 text-xs leading-relaxed text-neutral-500">{desc}</p>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
