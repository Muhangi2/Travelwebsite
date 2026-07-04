import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

export default function CancellationPolicy() {
  return (
    <section id="cancellation" className="relative isolate overflow-hidden py-20 text-white">
      <Picture
        src="/images/parks/rwanda/akagera/wilderness-magashi-1.jpg"
        alt="Safari landscape at Akagera National Park, Rwanda"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/60" />

      <div className="mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <div className="section-rule mx-auto" style={{ background: 'rgba(255,255,255,0.5)' }} />
          <h2 className="mt-4 text-white">Cancellation Policy</h2>
          <p className="mt-4 font-serif text-lg text-white/90">
            Our cancellation policy is based on the time before departure:
          </p>
          <ul className="mx-auto mt-4 max-w-md space-y-2 text-left text-sm text-white/85">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
              <span>
                <span className="font-semibold text-white">90+ days before departure:</span> Full refund.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
              <span>
                <span className="font-semibold text-white">45-89 days before departure:</span> 30% cancellation fee
                (forfeiture of deposit).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
              <span>
                <span className="font-semibold text-white">Less than 45 days before departure:</span> 100%
                cancellation fee.
              </span>
            </li>
          </ul>
          <p className="mx-auto mt-5 max-w-md text-xs text-white/70">
            All cancellations must be submitted in writing. We strongly recommend mandatory travel insurance to
            cover unforeseen circumstances.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
