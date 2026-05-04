import { useState } from 'react'
import Picture from '@/components/Picture'

const subjects = [
  'Plan a Bespoke Safari',
  'Gorilla & Chimp Permits',
  'Existing Booking',
  'Press & Partnerships',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    subject: '',
    message: '',
  })

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
  }

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <Picture
          src="/images/destinations/tanzania/sayari-lioness.jpg"
          alt="The MasterPolo Safaris team"
          className="absolute inset-0 -z-10 h-full w-full object-cover" loading="lazy" decoding="async" />
        <div className="absolute inset-0 -z-10 bg-black/40" />
        <div className="mx-auto flex min-h-[42svh] max-w-5xl items-center justify-center px-6 pt-24 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl">Contact Us</h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-md">
            <Picture
              src="/images/activities/helicopter-rwanda/1000045751.jpg"
              alt="Safari guide on a walking safari"
              className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </div>

          <div>
            <h2 className="font-serif text-3xl text-brand-green">Contact MasterPolo Safaris</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-600">
              The team at MasterPolo Safaris is here to help you design a safari experience tailored exactly to your
              travel dreams.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={(e) => update('firstName', e.target.value)}
                  className="w-full rounded border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none focus:border-brand-green"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={(e) => update('lastName', e.target.value)}
                  className="w-full rounded border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none focus:border-brand-green"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="email"
                  required
                  placeholder="Email Address*"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="w-full rounded border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none focus:border-brand-green"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className="w-full rounded border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none focus:border-brand-green"
                />
              </div>

              <input
                type="text"
                placeholder="Country of Residence"
                value={form.country}
                onChange={(e) => update('country', e.target.value)}
                className="w-full rounded border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none focus:border-brand-green"
              />

              <select
                value={form.subject}
                onChange={(e) => update('subject', e.target.value)}
                className="w-full rounded border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 outline-none focus:border-brand-green"
              >
                <option value="">Subject</option>
                {subjects.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>

              <textarea
                placeholder="Message"
                rows={4}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                className="w-full rounded border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none focus:border-brand-green"
              />

              <button
                type="submit"
                className="rounded-full bg-brand-green px-7 py-3 text-[10px] font-semibold tracking-[0.2em] text-white shadow hover:bg-brand-green-dark"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-serif text-4xl">Find MasterPolo Safaris</h2>
          <div className="mt-8 overflow-hidden rounded-md border border-neutral-200">
            <iframe
              title="MasterPolo Safaris office location"
              src="https://www.google.com/maps?q=Imperial+Mall+Entebbe+Uganda&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full"
            />
          </div>
        </div>
      </section>
    </>
  )
}
