const reasons = [
  { num: 1, title: 'Local Power, Global\nDelivery', body: 'Expertise + international standards.' },
  { num: 2, title: 'Bespoke Product\nDesign', body: 'Co-created, never copied.' },
  { num: 3, title: 'White-Label\nOperations', body: 'Your brand stays front-facing.' },
  { num: 4, title: 'Reliable, Fast\nCommunication', body: 'Clear timelines.' },
]

export default function WhyPartnerWithUs() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center font-serif text-4xl text-brand-green">Why Partner With Us</h2>

        <div className="cards-scroll-4 mt-12 gap-8">
          {reasons.map((r, idx) => (
            <div key={r.num} className="relative flex flex-col items-center text-center">
              {idx < reasons.length - 1 && (
                <div
                  aria-hidden
                  className="absolute left-1/2 top-12 hidden h-px w-full bg-brand-green/30 lg:block"
                />
              )}
              <div
                className={`relative flex h-24 w-24 items-center justify-center rounded-full border-2 ${
                  r.num === 1 ? 'border-brand-green bg-white' : 'border-dashed border-brand-green/40 bg-white'
                }`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full font-serif text-xl ${
                    r.num === 1 ? 'bg-brand-green text-white' : 'bg-white text-neutral-800'
                  }`}
                >
                  {r.num}
                </span>
              </div>
              <h3 className="mt-5 whitespace-pre-line font-serif text-sm text-neutral-900">{r.title}</h3>
              <p className="mt-2 max-w-[14ch] text-xs text-neutral-500">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
