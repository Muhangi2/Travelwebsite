import { NavLink } from 'react-router-dom'
import Picture from '@/components/Picture'
import HeroStagger, { HeroItem } from '@/components/ui/HeroStagger'

export default function AboutHero() {
  return (
    <section className="relative isolate min-h-[80svh] overflow-hidden">
      <Picture
        src="/images/activities/gorilla-trekking/17-gorilla-ah1i6854.jpg"
        alt="Mountain gorilla in Bwindi Impenetrable Forest"
        className="absolute inset-0 -z-10 h-full w-full object-cover motion-safe:animate-[fadeIn_1.2s_ease-out]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/45 to-black/70" />

      <div className="container-page flex min-h-[80svh] items-center justify-center pt-28 pb-16 text-center text-white sm:pt-32">
        <HeroStagger className="max-w-3xl">
          <HeroItem>
            <p className="eyebrow text-white/70">Our Story</p>
          </HeroItem>
          <HeroItem>
            <h1 className="text-display mt-4 text-white">Welcome to Still Wild Safaris</h1>
          </HeroItem>
          <HeroItem>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/85 sm:text-lg">
              East Africa’s bespoke destination management company — designing private safaris in Uganda, Rwanda and
              Kenya for travelers who value depth, access and exclusivity.
            </p>
          </HeroItem>
          <HeroItem>
            <NavLink to="/safari-collections" className="btn-primary mt-8">
              START YOUR JOURNEY
              <svg className="ml-2" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </NavLink>
          </HeroItem>
        </HeroStagger>
      </div>
    </section>
  )
}
