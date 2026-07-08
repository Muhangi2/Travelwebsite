import { NavLink } from 'react-router-dom'

export default function TripQuoteBanner() {
  return (
    <section className="bg-brand-cream/60">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center sm:py-12">
        <div>
          <h2 className="text-xl text-brand-ink sm:text-2xl">Make This Journey Your Own</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-brand-muted">
            Every itinerary here is a starting point. Share your dates and preferences, and our travel designers
            will tailor this journey to fit you exactly.
          </p>
        </div>
        <NavLink to="/contact" className="btn-primary shrink-0">
          Request This Journey
        </NavLink>
      </div>
    </section>
  )
}
