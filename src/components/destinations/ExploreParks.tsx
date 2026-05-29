import { NavLink } from 'react-router-dom'
import Reveal from '@/components/ui/Reveal'

type Props = {
  countryName: string
  countrySlug: string
  intro: string
  summary: string
  image: string
  parksHref?: string
}

export default function ExploreParks({ countryName, countrySlug, intro, summary, image, parksHref }: Props) {
  const exploreHref = parksHref ?? `/destinations/${countrySlug}#national-parks`
  return (
    <section className="section-alt py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <div className="text-center">
            <h2 className="font-serif text-4xl">Explore {countryName}&apos;s National Parks</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-brand-muted sm:text-base">{intro}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <Reveal variant="left">
            <div className="section-rule" />
            <h3 className="mt-4 font-serif text-2xl">{countryName}&apos;s National Parks</h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-base">{summary}</p>
            <NavLink to={exploreHref} className="btn-primary mt-6">
              EXPLORE {countryName.toUpperCase()} PARKS
            </NavLink>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="img-zoom overflow-hidden rounded-xl shadow-lg">
              <img src={image} alt={countryName} loading="lazy" className="w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
