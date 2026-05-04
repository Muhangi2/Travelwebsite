import { NavLink } from 'react-router-dom'
import Picture from '@/components/Picture'

export default function TalkWithAdvisor() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white sm:py-24">
      <Picture
        src="/images/activities/helicopter-rwanda/1000045751.jpg"
        alt="Aerial sunset over the Virungas"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/35 to-black/65" />

      <div className="container-page text-center">
        <p className="eyebrow text-brand-gold">Travel Trade</p>
        <h2 className="text-display mt-3 text-white">Talk With Our Travel Advisor</h2>
        <p className="mt-4 text-base text-white/85">For agent rates, group quotes and bespoke safari packages.</p>
        <NavLink to="/contact" className="btn-primary mt-8">TALK WITH OUR TRAVEL ADVISOR</NavLink>
      </div>
    </section>
  )
}
