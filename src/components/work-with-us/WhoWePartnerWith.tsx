import { site } from '@/config/site'
import Reveal from '@/components/ui/Reveal'

const partners = [
  'Tour operators',
  'Travel advisors',
  'Online travel brands',
  'MICE & incentive planners',
  'Experience curators.',
]

const PartnerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
    <rect x="3" y="9" width="18" height="11" rx="1" />
    <path d="M8 9V6a3 3 0 016 0v3M3 14h18" />
  </svg>
)

export default function WhoWePartnerWith() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <Reveal variant="left">
            <div className="section-rule" />
            <h2 className="mt-4 font-serif text-4xl">
              Who We <br />
              Partner With
            </h2>
            <ul className="mt-8 space-y-5">
              {partners.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-neutral-100">
                    <PartnerIcon />
                  </span>
                  <span className="text-sm text-neutral-700">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <div className="overflow-hidden rounded-md shadow-md ring-1 ring-neutral-200">
              <iframe
                title={`${site.name} office location`}
                src={`https://www.google.com/maps?q=${site.mapsQuery}&output=embed`}
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
