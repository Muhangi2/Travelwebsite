import Picture from '@/components/Picture'
import HeroStagger, { HeroItem } from '@/components/ui/HeroStagger'

type Props = {
  title: string
  subtitle: string
  image: string
}

export default function DestinationHero({ title, subtitle, image }: Props) {
  return (
    <section className="relative isolate h-[100svh] overflow-hidden">
      <Picture
        src={image}
        alt={title}
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full motion-safe:animate-[fadeIn_1.2s_ease-out]"
        imgClassName="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/10 to-black/75" />

      <div className="container-page flex h-full flex-col items-center justify-end pb-20 sm:pb-28 text-center text-white">
        <HeroStagger className="max-w-4xl">
          <HeroItem>
            <h1 className="text-display whitespace-pre-line text-white">{title}</h1>
          </HeroItem>
          <HeroItem>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">{subtitle}</p>
          </HeroItem>
        </HeroStagger>
      </div>
    </section>
  )
}
