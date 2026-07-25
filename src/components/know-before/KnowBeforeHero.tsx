import Picture from '@/components/Picture'
import HeroStagger, { HeroItem } from '@/components/ui/HeroStagger'
import { usePageHero } from '@/sanity/pageHeroes'

const FALLBACK = {
  eyebrow: 'Travel Essentials',
  heading: 'Know Before You Go',
  body: 'Practical information to make sure your safari runs effortlessly visas, packing, payments, tipping and trekking fitness.',
  image: '/images/parks/uganda/murchison-falls/dsc-6951.jpg',
  imageAlt: 'Safari preparation',
}

export default function KnowBeforeHero() {
  const hero = usePageHero('knowBefore', FALLBACK)

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
              <p className="mx-auto mt-5 max-w-2xl text-base text-white/85 sm:text-lg">{hero.body}</p>
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
