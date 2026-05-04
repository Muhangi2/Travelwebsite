import { NavLink } from 'react-router-dom'

type Step = {
  title: string
  body: string
  icon: React.ReactNode
}

const stroke = { stroke: 'currentColor', fill: 'none', strokeWidth: 1.5 } as const

const steps: Step[] = [
  {
    title: 'Select Your Adventure',
    body: 'Choose from curated packages or start a custom request.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <path d="M5 21l3-7 9-9 4 4-9 9zM14 6l4 4" />
      </svg>
    ),
  },
  {
    title: 'Choose Your Dates',
    body: 'Pick your preferred travel season',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 3v4M16 3v4" />
      </svg>
    ),
  },
  {
    title: 'Customize Your Comfort',
    body: 'Select your accommodation level from luxury glamping to mid-range lodges.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1z" />
      </svg>
    ),
  },
  {
    title: 'Connect with an Expert',
    body: 'Speak with a local safari planner to refine the itinerary and ask questions.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19 12a7 7 0 11-14 0 7 7 0 0114 0zM12 5V2M12 22v-3M5 12H2M22 12h-3" />
      </svg>
    ),
  },
  {
    title: 'Secure Your Permit',
    body: 'For Uganda/Rwanda, the team secures your Gorilla or Chimpanzee permits immediately.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M14 3v5h5M9 13h7M9 17h5" />
      </svg>
    ),
  },
  {
    title: 'Confirm & Pay',
    body: 'Secure your booking via a 20-30% down payment through a secure portal.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18M7 15h3" />
      </svg>
    ),
  },
  {
    title: 'Pre-Departure Briefing',
    body: 'Receive a digital "Safari Pack" including packing lists, visa info, and health tips.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <path d="M8 7h8a3 3 0 013 3v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9a3 3 0 013-3zM10 7V5a2 2 0 014 0v2" />
      </svg>
    ),
  },
  {
    title: 'The Safari Begins',
    body: 'Meet your guide at the airport and head into the wild.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <path d="M3 16l3-7h12l3 7M5 16h14M7 16v3M17 16v3" />
        <circle cx="8" cy="16" r="1.5" /><circle cx="16" cy="16" r="1.5" />
      </svg>
    ),
  },
]

export default function BookingJourneySteps() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl">Your Journey to the Wild Starts Here</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600">
            Planning your dream African safari should feel exciting, not overwhelming. Our simple 8-step booking
            journey guides you from choosing your adventure to arriving in Uganda.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="rounded-md bg-white p-5 shadow-sm ring-1 ring-neutral-100">
              <span className="text-brand-green">{s.icon}</span>
              <h3 className="mt-3 font-serif text-base">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <NavLink to="/contact" className="btn-primary">
            BOOK NOW
          </NavLink>
        </div>
      </div>
    </section>
  )
}
