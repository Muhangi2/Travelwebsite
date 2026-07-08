import { NavLink } from 'react-router-dom'
import HeroStagger, { HeroItem } from '@/components/ui/HeroStagger'
import WhatsAppCTA from '@/components/ui/WhatsAppCTA'

type Props = {
  title: string
  subtitle: string
  image: string
}

export default function DetailHero({ title, subtitle, image }: Props) {
  return (
    <section className="relative isolate h-[100svh] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 -z-10 h-full w-full object-cover motion-safe:animate-[fadeIn_1.2s_ease-out]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-black/50" />

      <div className="mx-auto flex h-full max-w-5xl items-center justify-center px-6 text-center text-white">
        <HeroStagger>
          <HeroItem>
            <h1 className="whitespace-pre-line font-serif text-3xl leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">{title}</h1>
          </HeroItem>
          <HeroItem>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/90">{subtitle}</p>
          </HeroItem>
          <HeroItem>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <NavLink to="/contact" className="btn-ghost">
                REQUEST A CUSTOM QUOTE
              </NavLink>
              <WhatsAppCTA />
            </div>
          </HeroItem>
        </HeroStagger>
      </div>
    </section>
  )
}
