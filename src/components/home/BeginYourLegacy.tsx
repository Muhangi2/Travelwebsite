import { NavLink } from 'react-router-dom'
import Picture from '@/components/Picture'

export default function BeginYourLegacy() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white sm:py-28">
      <Picture
        src="/images/activities/helicopter-rwanda/1000045751.jpg"
        alt="Aerial sunset view of the Virunga Mountains"
        className="absolute inset-0 -z-10 h-full w-full object-cover" loading="lazy" decoding="async" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />

      <div className="container-page text-center">
        <p className="eyebrow text-brand-gold">Your Story Starts Here</p>
        <h2 className="text-display mt-3 text-white">Begin Your Legacy</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          Africa is waiting to change you. Let our travel designers craft the safari you were always meant to take.
        </p>
        <NavLink to="/contact" className="btn-primary mt-9">INQUIRE NOW</NavLink>
      </div>
    </section>
  )
}
