import { useState } from 'react'
import Reveal, { Stagger } from '@/components/ui/Reveal'

const terms = [
  {
    title: '1. Booking & Confirmation',
    items: [
      'A booking is provisional until we receive your signed booking form and deposit payment.',
      'Once your deposit is received, we will issue a written confirmation and your trip is considered booked.',
      'Availability of accommodation, vehicles and guides is not guaranteed until confirmed in writing.',
    ],
  },
  {
    title: '2. Payment Schedule',
    items: [
      'A non-refundable deposit of 50% of the total trip cost is due at the time of booking.',
      'The remaining balance is due no later than 45 days before your departure date.',
      'For bookings made within 45 days of departure, full payment is required at the time of booking.',
      'Permits (gorilla/chimpanzee) and international or domestic flights must be paid 100% upfront due to third-party requirements.',
    ],
  },
  {
    title: '3. Cancellation Policy',
    body: 'Cancellations must be submitted in writing. The following charges apply, calculated from the date we receive your written notice:',
    table: [
      { time: 'More than 90 days', charge: 'Full refund' },
      { time: '45–89 days', charge: '30% of total trip cost' },
      { time: 'Less than 45 days / no-show', charge: '100% of total trip cost' },
    ],
    footer: 'Deposits are non-refundable in all circumstances. We strongly recommend travel insurance that includes trip cancellation cover.',
  },
  {
    title: '4. Amendments & Date Changes',
    items: [
      'Requests to amend travel dates or itinerary details are subject to availability and may incur additional charges from our accommodation and transport partners.',
      'Name changes on a confirmed booking must be requested at least 14 days before departure.',
    ],
  },
  {
    title: '5. Travel Insurance',
    items: [
      'Comprehensive travel insurance is mandatory for all Still Wild Safaris guests, including cover for medical treatment, emergency evacuation, repatriation, and trip cancellation.',
      'Proof of valid insurance may be requested before departure.',
    ],
  },
  {
    title: '6. Health & Fitness',
    items: [
      'Guests must disclose any medical condition, mobility need, or dietary requirement that may affect their trip at the time of booking, so we can plan accordingly.',
      'We recommend visiting a travel health clinic at least 4–6 weeks before departure for advice on vaccinations and malaria prevention.',
      'Certain activities (walking safaris, water-based activities, high-altitude travel) may have minimum age or fitness requirements, noted on your itinerary.',
    ],
  },
  {
    title: '7. Conduct on Safari & Our Conservation Commitment',
    body: "Still Wild Safaris operates in some of the world's most precious wild spaces, and we ask every guest to help us protect them:",
    items: [
      "Follow your guide's instructions at all times, particularly around wildlife distance and vehicle off-track driving rules.",
      'Do not feed, touch, or attempt to approach wildlife.',
      'Respect park and conservancy rules on noise, drones, and waste.',
    ],
  },
  {
    title: '8. Liability & Assumption of Risk',
    items: [
      'Safari travel involves inherent risks, including those related to wildlife, terrain, weather, and remote locations. Guests participate at their own risk.',
      'Still Wild Safaris is not liable for losses, delays, or costs arising from circumstances beyond our reasonable control, including those covered under Force Majeure below.',
    ],
  },
  {
    title: '9. Force Majeure',
    body: 'Still Wild Safaris is not liable for any failure to perform its obligations where that failure results from circumstances beyond our reasonable control, including but not limited to natural disasters, civil unrest, government action, pandemic-related restrictions, or park/border closures.',
  },
  {
    title: '10. Governing Law',
    body: "These terms are governed by the applicable laws of Uganda. Questions about these terms before you book? Get in touch — we're happy to walk you through anything.",
  },
]

export default function BookingTerms() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="section-rule" />
          <h2 className="mt-4">Booking Terms</h2>
          <p className="mt-2 text-sm text-neutral-500">
            The details that protect both you and us, so your trip runs exactly as planned. By paying your deposit, you confirm that you accept the terms below.
          </p>
        </Reveal>

        <Stagger className="mt-8 space-y-3" staggerMs={50}>
          {terms.map((term, i) => {
            const isOpen = openIndex === i
            return (
              <div key={term.title} className="card-lift rounded-md border border-neutral-200 bg-white">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-medium">{term.title}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-neutral-100 px-5 py-4 text-sm leading-relaxed text-neutral-600">
                      {term.body && <p className="mb-3">{term.body}</p>}
                      {term.items && (
                        <ul className="space-y-2">
                          {term.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {term.table && (
                        <div className="mt-3 overflow-x-auto rounded-md border border-neutral-200">
                          <table className="w-full min-w-[320px] text-xs">
                            <thead className="bg-neutral-50">
                              <tr>
                                <th className="px-4 py-2 text-left font-medium text-neutral-500">Time before departure</th>
                                <th className="px-4 py-2 text-left font-medium text-neutral-500">Cancellation charge</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-100">
                              {term.table.map((row) => (
                                <tr key={row.time}>
                                  <td className="px-4 py-2 text-neutral-700">{row.time}</td>
                                  <td className="px-4 py-2 text-neutral-700">{row.charge}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                      {term.footer && <p className="mt-3 text-xs text-neutral-500">{term.footer}</p>}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
