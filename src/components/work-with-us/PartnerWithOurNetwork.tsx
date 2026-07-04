import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

export default function PartnerWithOurNetwork() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white">
      <Picture
        src="/images/parks/rwanda/akagera/wilderness-magashi.jpg"
        alt="Eco-lodge at dusk in Akagera National Park, Rwanda"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/55 to-black/70" />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <div className="section-rule mx-auto" style={{ background: 'rgba(255,255,255,0.5)' }} />
          <h2 className="mt-3 text-white">Partner With Our Network</h2>
          <p className="mt-5 text-sm leading-relaxed text-white/85">
            Beyond B2B operators, we're building our supply network directly across both countries. If you're a
            guide, driver, eco-lodge, or conservation organisation operating in Uganda or Rwanda and aligned with
            regenerative principles, we want you in our network too. Local hiring and vetted, sustainability-first
            partners are what make our DMC promise credible in the first place.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
