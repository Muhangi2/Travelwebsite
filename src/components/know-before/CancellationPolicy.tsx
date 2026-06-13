import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

export default function CancellationPolicy() {
  return (
    <section className="section-alt py-16">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="text-center font-serif text-3xl">Cancellation Policy</h2>
        </Reveal>

        <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
          <Reveal variant="left">
            <div className="img-zoom overflow-hidden rounded-md shadow-md">
              <Picture
                src="/images/parks/rwanda/akagera/wilderness-magashi-1.jpg"
                alt="Safari landscape"
                className="object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="section-rule" />
            <p className="mt-4 font-serif text-lg">Our cancellation policy is based on the time before departure:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-700">
              <li>
                <span className="font-semibold">90+ days before departure:</span> Full refund.
              </li>
              <li>
                <span className="font-semibold">45-89 days before departure:</span> 30% cancellation fee
                (forfeiture of deposit).
              </li>
              <li>
                <span className="font-semibold">Less than 45 days before departure:</span> 100% cancellation fee.
              </li>
            </ul>
            <p className="mt-5 text-xs text-neutral-500">
              All cancellations must be submitted in writing. We strongly recommend mandatory travel insurance to
              cover unforeseen circumstances.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
