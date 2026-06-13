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
    'w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black/20 placeholder:text-neutral-400'

  return (
    <>
      {/* ── Hero ── */}
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
              <h1 className="font-serif text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl">Contact Us</h1>
            </HeroItem>
          </HeroStagger>
        </div>
      </section>

      {/* ── Contact form — background image with card ── */}
      <section className="relative isolate overflow-hidden py-14 md:py-24">
        <img
          src="/images/parks/uganda/murchison-falls/mf-1.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-black/65" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {/* Header */}
          <Reveal>
            <div className="mb-8 text-center text-white sm:mb-10">
              <p className="eyebrow text-white/60">Get In Touch</p>
              <h2 className="mt-3 font-serif text-xl text-white sm:text-3xl lg:text-4xl">
                Contact Still Wild Safaris
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/70">
                Our team is ready to help you design a safari experience tailored to your travel dreams.
              </p>
            </div>
          </Reveal>

          {/* Grid — form first on mobile, info second */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_1.6fr] lg:items-start lg:gap-12">

            {/* Info card — order-2 on mobile, order-1 on lg */}
            <Reveal variant="left" delay={80} className="order-2 lg:order-1">
              <div className="rounded-2xl bg-white/10 p-5 text-white backdrop-blur-sm ring-1 ring-white/15 sm:p-7">
                <h3 className="font-serif text-base font-semibold text-white sm:text-lg">Reach Us Directly</h3>
                <div className="mt-5 space-y-4 text-sm text-white/80">
                  <div className="flex items-start gap-3">
                    <svg className="mt-0.5 shrink-0 text-white/50" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Imperial Mall, Entebbe Road<br />Kampala, Uganda</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="shrink-0 text-white/50" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.08 4.18 2 2 0 015.09 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                    <a href="tel:+256700000000" className="transition hover:text-white">+256 700 000 000</a>
                  </div>
                  <div className="flex items-center gap-3 min-w-0">
                    <svg className="shrink-0 text-white/50" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <a href="mailto:info@stillwildsafaris.com" className="min-w-0 truncate transition hover:text-white">
                      info@stillwildsafaris.com
                    </a>
                  </div>
                </div>
                <div className="mt-6 border-t border-white/15 pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-white/50">Response time</p>
                  <p className="mt-1 text-sm text-white/80">We reply within 24 hours, Monday – Saturday.</p>
                </div>
              </div>
            </Reveal>

            {/* Form card — order-1 on mobile, order-2 on lg */}
            <Reveal variant="right" delay={120} className="order-1 lg:order-2">
              <div className="rounded-2xl bg-white p-5 shadow-2xl sm:p-7">
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                    <input type="text" placeholder="First Name" value={form.firstName}
                      onChange={(e) => update('firstName', e.target.value)} className={fieldClass} />
                    <input type="text" placeholder="Last Name" value={form.lastName}
                      onChange={(e) => update('lastName', e.target.value)} className={fieldClass} />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                    <input type="email" required placeholder="Email Address *" value={form.email}
                      onChange={(e) => update('email', e.target.value)} className={fieldClass} />
                    <input type="tel" placeholder="Phone Number" value={form.phone}
                      onChange={(e) => update('phone', e.target.value)} className={fieldClass} />
                  </div>
                  <input type="text" placeholder="Country of Residence" value={form.country}
                    onChange={(e) => update('country', e.target.value)} className={fieldClass} />
                  <select value={form.subject} onChange={(e) => update('subject', e.target.value)} className={fieldClass}>
                    <option value="">Subject</option>
                    {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <textarea placeholder="Your Message" rows={4} value={form.message}
                    onChange={(e) => update('message', e.target.value)} className={fieldClass} />
                  <button type="submit" className="btn-primary w-full justify-center sm:w-auto">
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="bg-white pb-24 pt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-center font-serif text-xl sm:text-3xl lg:text-4xl">Find Still Wild Safaris</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
              <iframe
                title="Still Wild Safaris office location"
                src="https://www.google.com/maps?q=Imperial+Mall+Entebbe+Uganda&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[260px] w-full sm:h-[420px]"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
