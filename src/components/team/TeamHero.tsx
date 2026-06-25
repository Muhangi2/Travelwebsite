import Picture from '@/components/Picture'
import HeroStagger, { HeroItem } from '@/components/ui/HeroStagger'
import { usePageHero } from '@/sanity/pageHeroes'

const FALLBACK = {
  eyebrow: 'Our Team',
  heading: 'Meet Our Safari Experts',
  body: 'A passionate team of local experts based in Kampala — combining deep local knowledge, expert planning and decades of field experience to deliver seamless, unforgettable safari journeys.',
  image: '/images/activities/walking-safari/1752747977431-kenya-suyian-conservancy-horseriding-28.jpg',
  imageAlt: 'Still Wild Safaris team in the field',
}

export default function TeamHero() {
  const hero = usePageHero('team', FALLBACK)

  return (
    <section className="relative isolate h-[100svh] overflow-hidden">
      <Picture
        src={hero.image}
        alt={hero.imageAlt ?? hero.heading}
        className="absolute inset-0 -z-10 h-full w-full object-cover motion-safe:animate-[fadeIn_1.2s_ease-out]"
        fetchPriority="high"
        loading="eager"
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
              <p className="mx-auto mt-5 max-w-xl text-base text-white/85 sm:text-lg">{hero.body}</p>
            </HeroItem>
          )}
          {hero.primaryCta && (
            <HeroItem>
              <a href={hero.primaryCta.href} className="btn-primary mt-8">
                {hero.primaryCta.label}
              </a>
            </HeroItem>
          )}
        </HeroStagger>
      </div>
    </section>
  )
}
