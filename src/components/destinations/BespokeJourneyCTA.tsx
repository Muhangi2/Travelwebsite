import { NavLink } from 'react-router-dom'
import Picture from '@/components/Picture'
import { site } from '@/config/site'
import Reveal from '@/components/ui/Reveal'

export default function BespokeJourneyCTA() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-center">
            <h2 className="font-serif text-4xl">Begin Your Bespoke Journey</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600">
              Connect with our dedicated specialists to transform your vision into a meticulously planned,
              life-altering reality.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          <Reveal variant="left">
            <div className="section-rule" />
            <h3 className="mt-4 font-serif text-2xl">Our experts possess</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              First-hand knowledge of every lodge, every trail, and every hidden gem we recommend. They are your
              personal curators, ensuring a seamless, worry-free experience from the first conversation to your
              return home. Schedule a private consultation to discuss your interests and preferences.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Hours: MON-FRI 8AM-6PM EAT · SAT 9AM-5PM EAT
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="btn-primary">
                CALL US
              </a>
              <NavLink to="/contact" className="btn-secondary">
                REQUEST A PRIVATE CONSULTATION
              </NavLink>
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="img-zoom overflow-hidden rounded-md shadow-md">
              <Picture
                src="/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/10-kyambura-lodge-main-lodge-area-04.jpg"
                alt="Luxury lodge interior"
                className="object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
