import { Link } from 'react-router-dom'
import { countries } from '@/data/destinations'

export default function Destinations() {
  const list = Object.values(countries)
  return (
    <section className="mx-auto max-w-6xl px-6 pt-32 pb-24">
      <h1 className="text-center font-serif text-5xl">Destinations</h1>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-neutral-600">
        Choose where to begin. Each destination opens a different chapter of East Africa.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <Link
            key={c.slug}
            to={`/destinations/${c.slug}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-md"
          >
            <img src={c.heroImage} alt={c.name} className="h-full w-full object-cover transition group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <p className="font-serif text-2xl">{c.name}</p>
              <p className="mt-1 text-xs text-white/80">Explore {c.parks.length} national parks</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
