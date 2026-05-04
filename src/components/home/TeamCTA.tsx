import { NavLink } from 'react-router-dom'
import Picture from '@/components/Picture'

const team = [
  { name: 'Rick Cheng', role: 'The Director', image: '/images/team/rick-cheng.jpg' },
  { name: 'Emma Kiiiza', role: 'Marketing Manager', image: '/images/team/emmanuel-kiiza.jpg' },
  { name: 'Shakirah', role: 'Travel Designer', image: '/images/team/shakirah.jpg' },
  { name: 'Ahemd', role: 'Co-director', image: '/images/team/ahmed.jpg' },
]

export default function TeamCTA() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white sm:py-24">
      <Picture
        src="/images/parks/uganda/murchison-falls/dsc-6584.jpg"
        alt="Safari at golden hour"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/45 to-black/65" />

      <div className="container-page">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto_1fr]">
          <div className="hidden gap-6 md:flex md:justify-end">
            {team.slice(0, 2).map((m) => <Member key={m.name} {...m} />)}
          </div>

          <div className="text-center">
            <p className="eyebrow text-brand-gold">Talk To An Expert</p>
            <h2 className="mt-3 text-white">Start Planning Your<br />Tailor-Made Safari</h2>
            <p className="mt-4 text-base text-white/85">Our travel designers are ready to help.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <NavLink to="/contact" className="btn-primary">REQUEST A CONSULTATION</NavLink>
              <a href="tel:+256769797796" className="btn-ghost">CALL +256 769 797 796</a>
            </div>
          </div>

          <div className="hidden gap-6 md:flex">
            {team.slice(2).map((m) => <Member key={m.name} {...m} />)}
          </div>

          <div className="grid grid-cols-2 gap-6 md:hidden">
            {team.map((m) => <Member key={m.name} {...m} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

function Member({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="h-20 w-20 overflow-hidden rounded-full bg-neutral-200 ring-2 ring-white/40 sm:h-24 sm:w-24">
        <img src={image} alt={name} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <p className="mt-3 font-serif text-sm sm:text-base">{name}</p>
      <p className="text-[10px] text-white/70 sm:text-xs">{role}</p>
    </div>
  )
}
