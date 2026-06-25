import { NavLink } from 'react-router-dom'
import Picture from '@/components/Picture'
import HeroStagger, { HeroItem } from '@/components/ui/HeroStagger'
import { usePageHero } from '@/sanity/pageHeroes'

const FALLBACK = {
  eyebrow: 'Our Story',
  heading: 'Welcome to Still Wild Safaris',
  body: "East Africa's bespoke destination management company — designing private safaris in Uganda, Rwanda and Kenya for travelers who value depth, access and exclusivity.",
  image: '/images/activities/gorilla-trekking/17-gorilla-ah1i6854.jpg',
  imageAlt: 'Mountain gorilla in Bwindi Impenetrable Forest',
  primaryCta: { label: 'START YOUR JOURNEY', href: '/safari-collections' },
}

export default function AboutHero() {
  const hero = usePageHero('about', FALLBACK)

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
        <HeroStagger className="max-w-3xl">
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
              <p className="mx-auto mt-5 max-w-xl text-base text-white/85 sm:text-lg">{hero.body}</p>
            </HeroItem>
          )}
          {(hero.primaryCta || hero.secondaryCta) && (
            <HeroItem>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {hero.primaryCta && (
                  <NavLink to={hero.primaryCta.href} className="btn-primary">
                    {hero.primaryCta.label}
                    <svg className="ml-2" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
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
