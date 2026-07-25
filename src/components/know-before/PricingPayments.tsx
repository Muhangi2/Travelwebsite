import { useState } from 'react'
import Picture from '@/components/Picture'
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
    text: 'Rates vary by season high season (peak wildlife viewing) is priced differently from low/green season.',
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

export default function PricingPayments() {
  const [tab, setTab] = useState<'included' | 'excluded'>('included')
  const activeList = tab === 'included' ? included : notIncluded

  return (
    <>
      <section id="pricing" className="relative isolate overflow-hidden py-24 text-white">
        <Picture
          src="/images/parks/kenya/amboseli/amboseli-elephants.jpg"
          alt="Elephants crossing the Amboseli wetlands"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 -z-10 bg-black/55" />

        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="section-rule" style={{ background: 'rgba(255,255,255,0.5)' }} />
            <p className="eyebrow mt-5 text-white/70">Planning Your Safari</p>
            <h2 className="mt-3 text-white">Pricing &amp; Payments</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85">
              Transparent pricing, fully itemised quotes, and flexible payment plans so you can focus on the adventure ahead.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-20 md:py-28">
      <Picture
        src="/images/parks/kenya/amboseli/amboseli-waterhole.jpg"
        alt="Elephants at a waterhole in Amboseli National Park"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="mx-auto max-w-5xl px-6">

        <div className="space-y-16">

          {/* How Our Pricing Works */}
          <Reveal>
            <p className="eyebrow mb-7 text-white/70">How Our Pricing Works</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {pricingPoints.map(({ num, text }) => (
                <div
                  key={num}
                  className="flex gap-5 rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm"
                >
                  <span
                    className="shrink-0 select-none font-[--font-serif] text-[2.5rem] font-bold leading-none tracking-tight text-white/25"
                    aria-hidden="true"
                  >
                    {num}
                  </span>
                  <p className="pt-1 text-[0.9375rem] leading-relaxed text-white/85">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Included / Not Included */}
          <Reveal>
            <p className="eyebrow mb-7 text-white/70">What's Included &amp; What's Not</p>
            <div className="rounded-2xl bg-white/10 p-8 ring-1 ring-white/20 backdrop-blur-sm sm:p-10">
              <div className="mx-auto flex w-fit rounded-full bg-black/25 p-1 ring-1 ring-white/15">
                <button
                  type="button"
                  onClick={() => setTab('included')}
                  className={`rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                    tab === 'included' ? 'bg-green-400 text-neutral-900' : 'text-white/60 hover:text-white'
                  }`}
                >
                  Included
                </button>
                <button
                  type="button"
                  onClick={() => setTab('excluded')}
                  className={`rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                    tab === 'excluded' ? 'bg-red-400/90 text-neutral-900' : 'text-white/60 hover:text-white'
                  }`}
                >
                  Not Included
                </button>
              </div>

              <ul key={tab} className="mx-auto mt-8 max-w-lg space-y-3.5 motion-safe:animate-[fadeIn_0.35s_ease-out]">
                {activeList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className={`mt-2 h-1 w-1 shrink-0 rounded-full ${tab === 'included' ? 'bg-green-400' : 'bg-red-400/80'}`}
                    />
                    <span className={`text-[0.9375rem] leading-snug ${tab === 'included' ? 'text-white/85' : 'text-white/60'}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Payment Details */}
          <Reveal>
            <p className="eyebrow mb-7 text-white/70">Payment Details</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {paymentCards.map(({ title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white/10 p-7 ring-1 ring-white/20 backdrop-blur-sm"
                >
                  <h4 className="text-[1rem] font-semibold leading-snug tracking-tight text-white">{title}</h4>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/75">{body}</p>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
      </section>
    </>
  )
}
