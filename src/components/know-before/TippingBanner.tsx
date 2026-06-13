import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

export default function TippingBanner() {
  return (
    <section className="relative isolate overflow-hidden py-24 text-white">
      <Picture
        src="/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/10-kyambura-lodge-main-lodge-area-04.jpg"
        alt="Lodge at twilight"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="font-serif text-3xl">Tipping and Local Etiquette</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/85">
            Tipping is customary and a significant part of the income for guides, drivers, and lodge staff. We provide a
            suggested tipping guideline in your final itinerary. Always ask permission before taking photographs of
            local people, and respect local customs and traditions. Learning a few words of the local language is
            appreciated.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
