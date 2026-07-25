import Picture from '@/components/Picture'
import HeroStagger, { HeroItem } from '@/components/ui/HeroStagger'
import { usePageHero } from '@/sanity/pageHeroes'

const FALLBACK = {
  eyebrow: 'Journal',
  heading: 'Stories from the Wild',
  body: 'Travel tales, wildlife insights and behind-the-scenes moments from our safaris across Uganda, Rwanda and Kenya written by guides, designers and the explorers we travel alongside.',
  image: '/images/activities/game-drive/asilia-roho-2017-1-1.jpg',
  imageAlt: 'Safari game drive at golden hour',
  primaryCta: { label: 'EXPLORE OUR STORIES', href: '#articles' },
}

export default function StoriesHero() {
  const hero = usePageHero('stories', FALLBACK)

  return (
    <section className="relative isolate h-[100svh] overflow-hidden">
      <Picture
        src={hero.image}
        alt={hero.imageAlt ?? hero.heading}
        className="absolute inset-0 -z-10 h-full w-full object-cover motion-safe:animate-[fadeIn_1.2s_ease-out]"
        fetchPriority="high"
        loading="eager"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/35 to-black/65" />

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
