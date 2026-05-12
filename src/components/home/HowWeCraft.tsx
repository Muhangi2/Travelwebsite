import { NavLink } from 'react-router-dom'

const steps = [
  {
    label: 'Step 1',
    title: 'Dream',
    body: ['Tell us where and when your heart calls.'],
  },
  {
    label: 'Step 2',
    title: 'Design',
    body: [
      'Based on your dreams, our expert travel designers will craft 2–3 bespoke itinerary options.',
      'Every camp and trail is hand-selected to be as unique as your fingerprint.',
    ],
  },
  {
    label: 'Step 3',
    title: 'Go Wild',
    body: [
      'Once your perfect itinerary is set, we meticulously handle all the logistics.',
      'The wild awaits.',
    ],
  },
]

export default function HowWeCraft() {
  return (
    <section className="relative overflow-hidden bg-neutral-50 py-20 sm:py-24 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl leading-[1.05] text-brand-rust sm:text-5xl md:text-6xl">
            How we craft <span className="italic">the journey</span>
          </h2>

          <ol className="mt-14 space-y-12">
            {steps.map((step, i) => (
              <li key={step.title} className="relative pl-10 sm:pl-14">
                <span
                  aria-hidden
                  className="absolute left-2 top-3 h-2 w-2 rounded-full bg-brand-rust sm:left-4"
                />
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[calc(0.5rem+3px)] top-6 bottom-[-3rem] w-px bg-brand-rust/30 sm:left-[calc(1rem+3px)]"
                  />
                )}

                <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-brand-rust/70">
                  {step.label}
                </p>
                <h3 className="mt-1 font-serif text-3xl italic text-brand-rust sm:text-4xl">
                  {step.title}
                </h3>
                <div className="mt-3 space-y-1">
                  {step.body.map((line, idx) => (
                    <p key={idx} className="text-sm leading-relaxed text-brand-rust/80 sm:text-base">
                      {line}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-14">
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-brand-rust/60 px-8 py-3 text-xs font-medium tracking-[0.22em] text-brand-rust transition hover:bg-brand-rust hover:text-white"
            >
              START DREAMING
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}
