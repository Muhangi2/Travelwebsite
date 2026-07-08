import { NavLink } from 'react-router-dom'
import WhatsAppCTA from '@/components/ui/WhatsAppCTA'

export default function TripQuoteBanner() {
  return (
    <section className="bg-white pt-4 pb-4 sm:pt-6 sm:pb-6 lg:pt-8 lg:pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 rounded-3xl bg-black px-6 py-6 text-center sm:px-10 sm:py-8">
          <div>
            <h2 className="text-xl text-white sm:text-2xl">Make This Journey Your Own</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-white/70">
              Every itinerary here is a starting point. Share your dates and preferences, and our travel designers
              will tailor this journey to fit you exactly.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <NavLink to="/contact" className="btn-secondary">
              Request This Journey
            </NavLink>
            <WhatsAppCTA />
          </div>
        </div>
      </div>
    </section>
  )
}
