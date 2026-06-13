import HeroStagger, { HeroItem } from '@/components/ui/HeroStagger'

type Props = {
  title: string
  subtitle: string
  image: string
}

export default function DestinationHero({ title, subtitle, image }: Props) {
  return (
    <section className="relative isolate min-h-[75svh] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 -z-10 h-full w-full object-cover motion-safe:animate-[fadeIn_1.2s_ease-out]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      <div className="container-page flex min-h-[75svh] items-center justify-center pt-28 pb-16 text-center text-white sm:pt-32">
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
