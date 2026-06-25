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

const pricingPoints = [
  {
    num: '01',
    text: 'Pricing is quoted per person, based on two people sharing a room or tent unless otherwise specified.',
  },
  {
    num: '02',
    text: 'Rates vary by season — high season (peak wildlife viewing) is priced differently from low/green season.',
  },
  {
    num: '03',
    text: 'Group size, accommodation tier (midrange to luxury), and the specific properties on your itinerary all affect the final price.',
  },
  {
    num: '04',
    text: 'Every quote is itemised, so you can see exactly what you\'re paying for.',
  },
]

const paymentCards = [
  {
    title: 'Currency & Payment Methods',
    body: 'We accept bank transfer and major credit/debit cards. Card payments are processed securely and we never store your card details. We\'ll send payment reminders ahead of each due date, so there are no surprises.',
  },
  {
    title: 'Deposit & Balance',
    body: 'A 50% deposit confirms your booking. The remaining balance is due 45 days before departure. Permits and flights require 100% upfront at the time of booking.',
  },
  {
    title: "Children's Rates",
    body: 'Children aged 0–2 travel free when sharing with a parent and not occupying a separate bed. Children aged 3–11 sharing with an adult are charged at a reduced rate. Minimum age policies vary by property.',
  },
  {
    title: 'Single Supplement',
    body: "Travelling solo? A single supplement applies if you'd like your own room or tent rather than sharing. Let us know at the time of booking and we'll quote accordingly.",
  },
]

const CheckIcon = () => (
  <svg className="mt-0.5 h-4 w-4 shrink-0 text-black" viewBox="0 0 16 16" fill="none">
    <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CrossIcon = () => (
  <svg className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" viewBox="0 0 16 16" fill="none">
    <path d="M4.5 4.5l7 7M11.5 4.5l-7 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
)

export default function PricingPayments() {
  return (
    <section className="section-alt py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">

        {/* ── Header ── */}
        <Reveal>
          <div className="section-rule" />
          <p className="eyebrow mt-5">Planning Your Safari</p>
          <h2 className="mt-3">Pricing &amp; Payments</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-500">
            Transparent pricing, fully itemised quotes, and flexible payment plans — so you can focus on the adventure ahead.
          </p>
        </Reveal>

        <div className="mt-16 space-y-16">

          {/* ── How Our Pricing Works ── */}
          <Reveal>
            <p className="eyebrow mb-7">How Our Pricing Works</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {pricingPoints.map(({ num, text }) => (
                <div
                  key={num}
                  className="flex gap-5 rounded-2xl border border-neutral-100 bg-white p-6 shadow-[0_1px_6px_rgba(0,0,0,0.04)]"
                >
                  <span
                    className="shrink-0 select-none font-[--font-serif] text-[2.5rem] font-bold leading-none tracking-tight text-neutral-100"
                    aria-hidden="true"
                  >
                    {num}
                  </span>
                  <p className="pt-1 text-[0.9375rem] leading-relaxed text-neutral-600">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── Included / Not Included ── */}
          <Reveal>
            <p className="eyebrow mb-7">What's Included &amp; What's Not</p>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-white p-8">
                <div className="mb-6 flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-black" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black">Included</p>
                </div>
                <ul className="space-y-3.5">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-[0.9375rem] leading-snug text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
                <div className="mb-6 flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-neutral-400" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">Not Included</p>
                </div>
                <ul className="space-y-3.5">
                  {notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CrossIcon />
                      <span className="text-[0.9375rem] leading-snug text-neutral-500">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* ── Payment Details ── */}
          <Reveal>
            <p className="eyebrow mb-7">Payment Details</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {paymentCards.map(({ title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-[0_1px_6px_rgba(0,0,0,0.04)]"
                >
                  <h4 className="text-[1rem] font-semibold leading-snug tracking-tight text-black">{title}</h4>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-neutral-500">{body}</p>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
