import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

export default function WorkWithUsIntro() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white sm:py-24">
      <Picture
        src="/images/destinations/rwanda/image-20260331125809.jpg"
        alt="Aerial view of tea plantation terraces near Nyungwe, Rwanda"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/75" />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <div className="section-rule mx-auto" style={{ background: 'rgba(255,255,255,0.5)' }} />
          <h2 className="mt-3 text-white">A DMC Built On The Ground, Not Around It</h2>
          <p className="mt-5 text-sm leading-relaxed text-white/85">
            Still Wild Safaris is a Destination Management Company (DMC) based and grounded in Uganda and Rwanda. We
            don't sell East Africa from a desk overseas; we operate it directly, with our own teams, our own vetted
            vehicles, drivers, and guides, and our own relationships with the lodges and parks across both countries.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/85">
            If you're a travel agent, tour operator, or DMC abroad selling Uganda and Rwanda but don't have a trusted
            partner on the ground, that's exactly the gap we exist to fill.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
