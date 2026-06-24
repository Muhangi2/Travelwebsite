import Picture from '@/components/Picture'
import HeroStagger, { HeroItem } from '@/components/ui/HeroStagger'
import { usePageHero } from '@/sanity/pageHeroes'

const FALLBACK = {
  eyebrow: 'Trade Partnerships',
  heading: 'Work With Still Wild Safaris',
  body: 'Your trusted East African DMC partner.',
  image: '/images/parks/uganda/murchison-falls/dsc-6280.jpg',
  imageAlt: 'Murchison Falls safari moment at sunset',
}

export default function WorkWithUsHero() {
  const hero = usePageHero('workWithUs', FALLBACK)

  return (
    <section className="relative isolate h-[100svh] overflow-hidden">
      <Picture
        src={hero.image}
        alt={hero.imageAlt ?? hero.heading}
        className="absolute inset-0 -z-10 h-full w-full object-cover motion-safe:animate-[fadeIn_1.2s_ease-out]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/40 to-black/65" />

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
              <p className="mt-5 text-base text-white/85 sm:text-lg">{hero.body}</p>
            </HeroItem>
          )}
          {(hero.primaryCta || hero.secondaryCta) && (
            <HeroItem>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {hero.primaryCta && (
                  <a href={hero.primaryCta.href} className="btn-primary">
                    {hero.primaryCta.label}
                  </a>
                )}
                {hero.secondaryCta && (
                  <a href={hero.secondaryCta.href} className="btn-ghost">
                    {hero.secondaryCta.label}
                  </a>
                )}
              </div>
            </HeroItem>
          )}
        </HeroStagger>
      </div>
    </section>
  )
}
