import { useState } from 'react'
import Picture from '@/components/Picture'
import HeroStagger, { HeroItem } from '@/components/ui/HeroStagger'
import Reveal from '@/components/ui/Reveal'

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

  const fieldClass =
    'w-full rounded border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black/20'

  return (
    <>
      <section className="relative isolate min-h-[42svh] overflow-hidden">
        <Picture
          src="/images/destinations/tanzania/sayari-lioness.jpg"
          alt="Still Wild Safaris"
          className="absolute inset-0 -z-10 h-full w-full object-cover motion-safe:animate-[fadeIn_1.2s_ease-out]"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 -z-10 bg-black/50" />
        <div className="mx-auto flex min-h-[42svh] max-w-5xl items-center justify-center px-6 pt-24 text-center text-white">
          <HeroStagger>
            <HeroItem>
              <h1 className="font-serif text-5xl md:text-6xl">Contact Us</h1>
            </HeroItem>
          </HeroStagger>
        </div>
      </section>

      <section className="section-alt py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <Reveal variant="left">
            <div className="img-zoom overflow-hidden rounded-md shadow-md">
              <Picture
                src="/images/activities/helicopter-rwanda/1000045751.jpg"
                alt="Safari guide on a walking safari"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <div className="section-rule" />
            <h2 className="mt-3 font-serif text-3xl">Contact Still Wild Safaris</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-600">
              Our team is here to help you design a safari experience tailored exactly to your travel dreams.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={(e) => update('firstName', e.target.value)}
                  className={fieldClass}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={(e) => update('lastName', e.target.value)}
                  className={fieldClass}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="email"
                  required
                  placeholder="Email Address*"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className={fieldClass}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className={fieldClass}
                />
              </div>

              <input
                type="text"
                placeholder="Country of Residence"
                value={form.country}
                onChange={(e) => update('country', e.target.value)}
                className={fieldClass}
              />

              <select
                value={form.subject}
                onChange={(e) => update('subject', e.target.value)}
                className={fieldClass}
              >
                <option value="">Subject</option>
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>

              <textarea
                placeholder="Message"
                rows={4}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                className={fieldClass}
              />

              <button type="submit" className="btn-primary">
                SEND MESSAGE
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-serif text-4xl">Find Still Wild Safaris</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 overflow-hidden rounded-md border border-neutral-200 shadow-sm">
              <iframe
                title="Still Wild Safaris office location"
                src="https://www.google.com/maps?q=Imperial+Mall+Entebbe+Uganda&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
