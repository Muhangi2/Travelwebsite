import { Link } from 'react-router-dom'
import { useCountries } from '@/sanity/destinations'
import Reveal from '@/components/ui/Reveal'

export default function Destinations() {
  const { list } = useCountries()

  return (
    <div>
      {/* Hero */}
      <div
        className="relative flex h-[100svh] items-end bg-cover bg-center"
        style={{ backgroundImage: "url('/images/destinations/tanzania/sayari-serengeti-elephant-walking-safari.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/65" />
        <div className="container-page relative pb-14 pt-36 text-white sm:pb-16 sm:pt-40">
          <Reveal>
            <p className="eyebrow mb-3 text-white/60">East Africa</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl">Destinations</h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/75">
              Choose where to begin. Each destination opens a different chapter of East Africa.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Country cards */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="cards-scroll-3 gap-6">
          {list.map((c, i) => (
            <Reveal key={c.slug} delay={i * 90}>
              <Link
                to={`/destinations/${c.slug}`}
                className="card-lift group relative block aspect-[4/3] overflow-hidden rounded-md"
              >
                <img
                  src={c.heroImage}
                  alt={c.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="font-serif text-2xl">{c.name}</p>
                  <p className="mt-1 text-xs text-white/80">Explore {c.parks.length} national parks</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
