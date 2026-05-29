import Reveal from '@/components/ui/Reveal'

export default function PackingItems() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal variant="scale">
          <div className="rounded-lg bg-neutral-50 px-8 py-10 text-center ring-1 ring-neutral-100">
            <div className="section-rule mx-auto" />
            <h2 className="mt-4 font-serif text-3xl">Packing Items</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600">
              Pack light, comfortable clothing in khaki tones for safaris. Layers are key due to temperature
              fluctuations. Bring a wide-brimmed hat, high-SPF sunscreen, quality insect repellent, and a waterproof
              jacket. We allow only soft-sided luggage as hard cases are difficult to fit in safari vehicles and
              light aircraft.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
