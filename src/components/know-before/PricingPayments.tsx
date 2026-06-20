import Reveal from '@/components/ui/Reveal'

const included = [
  'Accommodation as specified in your itinerary',
  'Meals as specified (full board unless noted)',
  'Game drives with a professional driver-guide',
  'Park entry and conservation fees',
  'Road transfers between destinations on your itinerary',
  'Bottled or filtered drinking water during game drives',
]

const notIncluded = [
  'International and domestic flights, unless stated',
  'Visa fees',
  'Travel insurance',
  'Gratuities for guides and camp staff',
  'Alcoholic and premium beverages, unless stated',
  'Optional activities (hot air balloon, spa treatments, etc.)',
  'Personal expenses (laundry, curios, phone/internet)',
]

export default function PricingPayments() {
  return (
    <section className="section-alt py-16">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="section-rule" />
          <h2 className="mt-4 font-serif text-xl sm:text-3xl">Safari Pricing &amp; Payments</h2>
          <p className="mt-2 text-sm text-neutral-500">
            How our pricing works, what's included, and how to pay.
          </p>
        </Reveal>

        <div className="mt-10 space-y-10">
          <Reveal>
            <h3 className="font-serif text-lg">How Our Pricing Works</h3>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-600">
              <li>Pricing is quoted per person, based on two people sharing a room or tent unless otherwise specified.</li>
              <li>Rates vary by season — high season (peak wildlife viewing) is priced differently from low/green season.</li>
              <li>Group size, accommodation tier (midrange to luxury), and the specific properties on your itinerary all affect the final price.</li>
              <li>Every quote is itemised, so you can see exactly what you're paying for.</li>
            </ul>
          </Reveal>

          <Reveal>
            <h3 className="font-serif text-lg">What's Included &amp; What's Not</h3>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div className="rounded-md border border-green-100 bg-green-50 p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-green-700">Included</p>
                <ul className="space-y-2 text-sm text-neutral-700">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 shrink-0 text-green-600">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-md border border-neutral-200 bg-white p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">Not Included</p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  {notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 shrink-0 text-neutral-400">×</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-md border border-neutral-200 bg-white p-5">
              <h4 className="font-serif text-base">Currency &amp; Payment Methods</h4>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                We accept bank transfer and major credit/debit cards. Card payments are processed securely and we never store your card details. We'll send payment reminders ahead of each due date, so there are no surprises.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Reveal>
              <div className="rounded-md border border-neutral-200 bg-white p-5">
                <h4 className="font-serif text-base">Deposit &amp; Balance</h4>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  A 50% deposit confirms your booking. The remaining balance is due 45 days before departure. Permits and flights require 100% upfront at the time of booking.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="rounded-md border border-neutral-200 bg-white p-5">
                <h4 className="font-serif text-base">Children's Rates</h4>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Children aged 0–2 travel free when sharing with a parent and not occupying a separate bed. Children aged 3–11 sharing with an adult are charged at a reduced rate. Minimum age policies vary by property.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="rounded-md border border-neutral-200 bg-white p-5">
                <h4 className="font-serif text-base">Single Supplement</h4>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Travelling solo? A single supplement applies if you'd like your own room or tent rather than sharing. Let us know at the time of booking and we'll quote accordingly.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
