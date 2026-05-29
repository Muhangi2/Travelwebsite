import { NavLink } from 'react-router-dom'
import Picture from '@/components/Picture'
import HeroStagger, { HeroItem } from '@/components/ui/HeroStagger'

type Props = {
  name: string
  blurb: string
  image: string
}

export default function ParkHero({ name, blurb, image }: Props) {
  return (
    <section className="relative isolate min-h-[55svh] overflow-hidden">
      <Picture
        src={image}
        alt={name}
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full motion-safe:animate-[fadeIn_1.2s_ease-out]"
        imgClassName="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto flex min-h-[55svh] max-w-3xl items-center justify-center px-6 pt-24 text-center text-white">
        <HeroStagger>
          <HeroItem>
            <h1 className="font-serif text-5xl leading-tight md:text-6xl">{name}</h1>
          </HeroItem>
          <HeroItem>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/90">{blurb}</p>
          </HeroItem>
          <HeroItem>
            <NavLink to="/contact" className="btn-primary mt-8">
              BOOK YOUR ADVENTURE
            </NavLink>
          </HeroItem>
        </HeroStagger>
      </div>
    </section>
  )
}
