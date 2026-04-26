const items = [
  {
    title: 'Designed for the Chinese Market',
    body: 'We specialize in culturally aligned safari experiences, understanding service flow and timing.',
  },
  {
    title: 'Truly Bespoke Journeys',
    body: "No templates. Every trip is handcrafted from zero around your client's goals.",
  },
  {
    title: 'Local Power, Global Standards',
    body: 'Deep East African knowledge paired with international service expectations.',
  },
  {
    title: 'Discreet DMC Partnership',
    body: 'Your brand stays front-facing; we operate smoothly in the background.',
  },
]

const LeafIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-green">
    <path d="M21 3c-9 0-15 5-15 13v5h5c8 0 13-6 13-15-1 0-2 0-3 .1" />
    <path d="M9 17c2-3 5-6 9-8" />
  </svg>
)

export default function WhatMakesDifferent() {
  return (
    <section className="bg-white pb-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-serif text-4xl text-brand-green">What Makes Us Different</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-md bg-white p-5 shadow-sm ring-1 ring-neutral-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-green/10">
                <LeafIcon />
              </div>
              <h3 className="mt-4 font-serif text-base">{it.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
