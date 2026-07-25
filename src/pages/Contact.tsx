import SEO from '@/components/SEO'
import { useState } from 'react'
import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'
import { site } from '@/config/site'

const lookingForOptions = [
  'Luxury Gorilla Trekking Safaris',
  'The Great Migration Safari',
  'The African Big Five',
  'Family Vacation',
  'Beach and Safari',
  'Other',
]

const durationOptions = ['1-2 days', '3-5 days', 'A whole week', 'Two weeks', '1 month or more', 'Other']

const initialForm = {
  lookingFor: '',
  fullName: '',
  email: '',
  location: '',
  adults: '1',
  children: '0',
  destination: '',
  travelDate: '',
  duration: '',
  comments: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function buildInquiryLines() {
    return [
      `Hi ${site.name}, I'd like to make a safari inquiry.`,
      '',
      `Name: ${form.fullName}`,
      `Email: ${form.email}`,
      form.location && `Location: ${form.location}`,
      `Adults: ${form.adults}`,
      Number(form.children) > 0 && `Children (0-10): ${form.children}`,
      form.destination && `Destination(s) in mind: ${form.destination}`,
      form.travelDate && `Travel date: ${form.travelDate}`,
      form.duration && `Trip duration: ${form.duration}`,
      form.lookingFor && `Looking for: ${form.lookingFor}`,
      form.comments && `Comments: ${form.comments}`,
    ].filter(Boolean) as string[]
  }

  function handleWhatsAppSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
    const url = `${site.whatsappHref}?text=${encodeURIComponent(buildInquiryLines().join('\n'))}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  function handleEmailSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
    const subject = `Safari Inquiry from ${form.fullName || 'Website Visitor'}`
    const url = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildInquiryLines().join('\n'))}`
    window.location.href = url
  }

  const fieldClass =
    'w-full rounded border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black/20'

  const labelClass = 'mb-1.5 block text-sm font-medium text-neutral-800'

  return (
    <>
      <SEO
        title="Contact Us Plan Your Safari"
        description="Get in touch with Still Wild Safaris to start planning your bespoke luxury safari in Uganda, Rwanda or Kenya. Our team is ready to craft your perfect itinerary."
        url="/contact"
      />
      <section className="relative isolate h-[100svh] overflow-hidden">
        <Picture
          src="/images/destinations/tanzania/sayari-lioness.jpg"
          alt="Still Wild Safaris"
          className="absolute inset-0 -z-10 h-full w-full object-cover motion-safe:animate-[fadeIn_1.2s_ease-out]"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 -z-10 bg-black/50" />
        <div className="mx-auto flex h-full max-w-5xl items-center justify-center px-6 text-center text-white">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl">Contact Us</h1>
        </div>
      </section>

      <section className="section-alt py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-start">
          <Reveal variant="left">
            <div className="img-zoom overflow-hidden rounded-md shadow-md">
              <Picture
                src="/images/activities/walking-safari/1752747977432-kenya-suyian-conservancy-nature-walk-16.jpg"
                alt="Safari guide on a walking safari"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <div className="section-rule" />
            <h2 className="mt-3">Make an Inquiry</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-600">
              Fill this in and we'll get in touch to confirm your travel requirements or send it straight to us on WhatsApp or email.
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="mt-8 space-y-6">
              <div>
                <span className={labelClass}>Are you looking for</span>
                <div className="grid gap-2 sm:grid-cols-2">
                  {lookingForOptions.map((option) => (
                    <label key={option} className="flex items-center gap-2 text-sm text-neutral-700">
                      <input
                        type="radio"
                        name="lookingFor"
                        value={option}
                        checked={form.lookingFor === option}
                        onChange={(e) => update('lookingFor', e.target.value)}
                        className="h-4 w-4 accent-black"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => update('fullName', e.target.value)}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    Contact Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Your Location</label>
                <input
                  type="text"
                  placeholder="City and country"
                  value={form.location}
                  onChange={(e) => update('location', e.target.value)}
                  className={fieldClass}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>How many adults are travelling?</label>
                  <input
                    type="number"
                    min={1}
                    value={form.adults}
                    onChange={(e) => update('adults', e.target.value)}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>How many children aged 0-10?</label>
                  <input
                    type="number"
                    min={0}
                    value={form.children}
                    onChange={(e) => update('children', e.target.value)}
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Do you have a destination on your mind?</label>
                <input
                  type="text"
                  placeholder="Share as many locations as possible"
                  value={form.destination}
                  onChange={(e) => update('destination', e.target.value)}
                  className={fieldClass}
                />
              </div>

              <div>
                <span className="eyebrow">When are you planning to travel?</span>

                <div className="mt-3">
                  <label className={labelClass}>From which date</label>
                  <input
                    type="date"
                    value={form.travelDate}
                    onChange={(e) => update('travelDate', e.target.value)}
                    className={`${fieldClass} sm:w-56`}
                  />
                </div>

                <div className="mt-4">
                  <span className={labelClass}>And the duration of the trip will be</span>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {durationOptions.map((option) => (
                      <label key={option} className="flex items-center gap-2 text-sm text-neutral-700">
                        <input
                          type="radio"
                          name="duration"
                          value={option}
                          checked={form.duration === option}
                          onChange={(e) => update('duration', e.target.value)}
                          className="h-4 w-4 accent-black"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className={labelClass}>Any other comments?</label>
                <textarea
                  rows={4}
                  value={form.comments}
                  onChange={(e) => update('comments', e.target.value)}
                  className={fieldClass}
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-xs font-medium tracking-[0.18em] text-white shadow-md transition hover:bg-[#20bd5a] hover:shadow-lg sm:px-8"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-1-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4C8.3 9 7.5 9.8 7.5 11.4s1.1 3.1 1.3 3.3c.2.2 2.2 3.3 5.3 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.3.2-.7.2-1.2.1-1.3-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 00-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1012 2z" />
                  </svg>
                  SUBMIT ON WHATSAPP
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="inline-flex items-center gap-2 rounded-full border border-black bg-white px-6 py-3 text-xs font-medium tracking-[0.18em] text-black shadow-md transition hover:bg-black hover:text-white hover:shadow-lg sm:px-8"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6z" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                  SUBMIT ON EMAIL
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center">Find Still Wild Safaris</h2>
          <div className="mt-8 overflow-hidden rounded-md border border-neutral-200">
            <iframe
              title="Still Wild Safaris office location"
              src={`https://www.google.com/maps?q=${site.mapsQuery}&output=embed`}
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
