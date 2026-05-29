import { NavLink } from 'react-router-dom'
import Picture from '@/components/Picture'
import HeroStagger, { HeroItem } from '@/components/ui/HeroStagger'

export default function CollectionsHero() {
  return (
    <section className="relative isolate min-h-[80svh] overflow-hidden">
      <Picture
        src="/images/activities/gorilla-trekking/16-mgl-gorilla-bb.jpg"
        alt="Mountain gorilla portrait"
        className="absolute inset-0 -z-10 h-full w-full object-cover motion-safe:animate-[fadeIn_1.2s_ease-out]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/45 to-black/70" />

      <div className="container-page flex min-h-[80svh] items-center justify-center pt-28 pb-16 text-center text-white sm:pt-32">
        <HeroStagger className="max-w-4xl">
          <HeroItem>
            <p className="eyebrow text-white/70">Safari Collections</p>
          </HeroItem>
          <HeroItem>
            <h1 className="text-display mt-4 text-white">Curated Journeys Across East Africa</h1>
          </HeroItem>
          <HeroItem>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
              Six themed collections — from gorilla encounters and migration safaris to family adventures and
              photography tours. Each itinerary is hand-built by our travel designers and personally vetted in the
              field.
            </p>
          </HeroItem>
          <HeroItem>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <NavLink to="/safari-collections" className="btn-primary">
                EXPLORE OUR JOURNEYS
              </NavLink>
              <NavLink to="/contact" className="btn-ghost">
                REQUEST A CUSTOM QUOTE
              </NavLink>
            </div>
          </HeroItem>
        </HeroStagger>
      </div>
    </section>
  )
}
