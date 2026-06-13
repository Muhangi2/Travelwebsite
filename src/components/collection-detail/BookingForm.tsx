import { NavLink } from 'react-router-dom'
import Reveal from '@/components/ui/Reveal'

export default function BookingForm() {
  return (
    <section className="section-alt pb-24 pt-8">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
        <div className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-neutral-100 md:p-12">
          <div className="text-center">
            <h2 className="font-serif text-3xl">Ready to Book Your Dream Safari?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-600">
              We understand that a journey of this magnitude requires personalized planning. Tell us a little about
              your travel preferences, and one of our Safari Specialists will be in touch within 24 hours to craft
              your perfect itinerary.
            </p>
          </div>

          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Full Name" type="text" name="name" />
              <Field label="Email Address" type="email" name="email" />
              <Field label="Phone Number" type="tel" name="phone" />
              <Field label="Preferred Dates" type="text" name="dates" />
            </div>
            <Field label="Number of Travelers" type="number" name="travelers" />
            <Field label="Accommodation Preference" type="text" name="accommodation" />
            <FieldTextArea label="Special Requests" name="requests" />

            <label className="flex items-start gap-2 text-xs text-neutral-600">
              <input type="checkbox" required className="mt-0.5 accent-brand-green" />
              <span>
                * I agree with{' '}
                <NavLink to="/privacy-policy" className="underline hover:text-black">
                  Terms of Service
                </NavLink>{' '}
                and{' '}
                <NavLink to="/privacy-policy" className="underline hover:text-black">
                  Privacy Statement
                </NavLink>
                .
              </span>
            </label>

            <div className="text-center pt-2">
              <button type="submit" className="btn-primary">
                SUBMIT ENQUIRY
              </button>
            </div>
          </form>
        </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, type, name }: { label: string; type: string; name: string }) {
  return (
    <label className="relative block">
      <span className="absolute left-4 top-3 text-[10px] tracking-wide text-neutral-500">{label}</span>
      <input
        type={type}
        name={name}
        className="w-full rounded-md border border-neutral-200 bg-white px-4 pt-7 pb-2 text-sm outline-none focus:border-brand-green"
      />
    </label>
  )
}

function FieldTextArea({ label, name }: { label: string; name: string }) {
  return (
    <label className="relative block">
      <span className="absolute left-4 top-3 text-[10px] tracking-wide text-neutral-500">{label}</span>
      <textarea
        name={name}
        rows={4}
        className="w-full rounded-md border border-neutral-200 bg-white px-4 pt-7 pb-2 text-sm outline-none focus:border-brand-green"
      />
    </label>
  )
}
