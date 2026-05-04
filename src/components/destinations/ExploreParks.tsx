import { NavLink } from 'react-router-dom'

type Props = {
  countryName: string
  intro: string
  summary: string
  image: string
}

export default function ExploreParks({ countryName, intro, summary, image }: Props) {
  return (
    <section className="bg-brand-cream/40 py-16 sm:py-20">
      <div className="container-page">
        <div className="text-center">
          <h2 className="font-serif text-4xl">Explore {countryName}'s National Parks</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-brand-muted sm:text-base">{intro}</p>
        </div>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-2xl">{countryName}'s National Parks</h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-base">{summary}</p>
            <NavLink to="/safari-collections" className="btn-primary mt-6">
              VIEW ALL {countryName.toUpperCase()} SAFARIS
            </NavLink>
          </div>
          <div>
            <img src={image} alt="" loading="lazy" className="rounded-xl object-cover shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
