import { NavLink } from 'react-router-dom'
import Picture from '@/components/Picture'
import HeroStagger, { HeroItem } from '@/components/ui/HeroStagger'
import { usePageHero } from '@/sanity/pageHeroes'

const FALLBACK = {
  eyebrow: 'Safari Collections',
  heading: 'Curated Journeys Across East Africa',
  body: 'Six themed collections — from gorilla encounters and migration safaris to family adventures and photography tours. Each itinerary is hand-built by our travel designers and personally vetted in the field.',
  image: '/images/activities/gorilla-trekking/16-mgl-gorilla-bb.jpg',
  imageAlt: 'Mountain gorilla portrait',
  primaryCta: { label: 'EXPLORE OUR JOURNEYS', href: '/safari-collections' },
  secondaryCta: { label: 'REQUEST A CUSTOM QUOTE', href: '/contact' },
}

export default function CollectionsHero() {
  const hero = usePageHero('collections', FALLBACK)

  return (
    <section className="relative isolate h-[100svh] overflow-hidden">
      <Picture
        src={hero.image}
        alt={hero.imageAlt ?? hero.heading}
        className="absolute inset-0 -z-10 h-full w-full object-cover motion-safe:animate-[fadeIn_1.2s_ease-out]"
        fetchPriority="high"
        loading="eager"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/45 to-black/70" />

      <div className="container-page flex h-full flex-col items-center justify-end pb-20 sm:pb-28 text-center text-white">
        <HeroStagger className="max-w-4xl">
          {hero.eyebrow && (
            <HeroItem>
              <p className="eyebrow text-white/70">{hero.eyebrow}</p>
            </HeroItem>
          )}
          <HeroItem>
            <h1 className="text-display mt-4 text-white">{hero.heading}</h1>
          </HeroItem>
          {hero.body && (
            <HeroItem>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">{hero.body}</p>
            </HeroItem>
          )}
          {(hero.primaryCta || hero.secondaryCta) && (
            <HeroItem>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {hero.primaryCta && (
                  <NavLink to={hero.primaryCta.href} className="btn-primary">
                    {hero.primaryCta.label}
                  </NavLink>
                )}
                {hero.secondaryCta && (
                  <NavLink to={hero.secondaryCta.href} className="btn-ghost">
                    {hero.secondaryCta.label}
                  </NavLink>
                )}
              </div>
            </HeroItem>
          )}
        </HeroStagger>
      </div>
    </section>
  )
}
