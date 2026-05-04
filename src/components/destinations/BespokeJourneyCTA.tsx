import { NavLink } from 'react-router-dom'
import Picture from '@/components/Picture'

export default function BespokeJourneyCTA() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl">Begin Your Bespoke Journey</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600">
            Connect with our dedicated Uganda Specialists to transform your vision into a meticulously planned,
            life-altering reality.
          </p>
        </div>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="h-px w-24 bg-brand-green" />
            <h3 className="mt-3 font-serif text-2xl">Our experts possess</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              First-hand knowledge of every lodge, every trail, and every hidden gem we recommend. They are your
              personal curators, ensuring a seamless, worry-free experience from the first conversation to your
              return home. Schedule a private consultation to discuss your interests and preferences.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand-green">
              Hours: MON-FRI 8AM-6PM CT · SAT 9AM-5PM CT
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="tel:+256769797796"
                className="rounded-full bg-brand-green px-6 py-2.5 text-[10px] tracking-[0.2em] text-white shadow hover:bg-brand-green-dark"
              >
                CALL US
              </a>
              <NavLink
                to="/contact"
                className="rounded-full border border-brand-green/40 px-6 py-2.5 text-[10px] tracking-[0.2em] text-brand-green hover:bg-brand-green/5"
              >
                REQUEST A PRIVATE CONSULTATION
              </NavLink>
            </div>
          </div>
          <div>
            <Picture
              src="/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/10-kyambura-lodge-main-lodge-area-04.jpg"
              alt="Luxury lodge interior"
              className="rounded-md object-cover shadow-md" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  )
}
