import { NavLink } from 'react-router-dom'
import Picture from '@/components/Picture'
import HeroStagger, { HeroItem } from '@/components/ui/HeroStagger'

export default function InspiredCTA() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white sm:py-24">
      <Picture
        src="/images/activities/helicopter-rwanda/1000045751.jpg"
        alt="Aerial sunset over the Virunga Mountains"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover motion-safe:animate-[fadeIn_1.2s_ease-out]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />

      <div className="container-page text-center">
        <HeroStagger>
          <HeroItem>
            <p className="eyebrow text-white/70">Your Story Awaits</p>
          </HeroItem>
          <HeroItem>
            <h2 className="text-display mt-3 text-white">Inspired? Let&apos;s create your own.</h2>
          </HeroItem>
          <HeroItem>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/85">
              Talk to a travel designer and we will turn the story into a journey.
            </p>
          </HeroItem>
          <HeroItem>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <NavLink to="/safari-collections" className="btn-primary">
                PLAN MY SAFARI
              </NavLink>
              <NavLink to="/contact" className="btn-ghost">
                TALK TO AN EXPERT
              </NavLink>
            </div>
          </HeroItem>
        </HeroStagger>
      </div>
    </section>
  )
}
