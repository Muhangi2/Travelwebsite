import HeroStagger, { HeroItem } from '@/components/ui/HeroStagger'

type Props = {
  title: string
  subtitle: string
  image: string
}

export default function DetailHero({ title, subtitle, image }: Props) {
  return (
    <section className="relative isolate min-h-[70svh] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 -z-10 h-full w-full object-cover motion-safe:animate-[fadeIn_1.2s_ease-out]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-black/50" />

      <div className="mx-auto flex min-h-[70svh] max-w-5xl items-center justify-center px-6 pt-24 text-center text-white">
        <HeroStagger>
          <HeroItem>
            <h1 className="whitespace-pre-line font-serif text-5xl leading-tight md:text-6xl">{title}</h1>
          </HeroItem>
          <HeroItem>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/90">{subtitle}</p>
          </HeroItem>
        </HeroStagger>
      </div>
    </section>
  )
}
