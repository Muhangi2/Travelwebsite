import { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useStories, useStory } from '@/sanity/stories'
import StoryBody from '@/components/stories/StoryBody'
import Picture from '@/components/Picture'

const safariTypes = [
  'Gorilla Trekking',
  'Big Five & Akagera',
  'Chimpanzees of Nyungwe',
  'Lake Kivu Retreat',
  'Full-Spectrum Rwanda',
]

export default function StoryDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { items: articles } = useStories()
  const { article: fetched } = useStory(slug)
  const article = fetched ?? articles.find((a) => a.slug === slug) ?? articles[0]
  if (!article) return null
  const idx = articles.findIndex((a) => a.slug === article.slug)
  const prev = idx > 0 ? articles[idx - 1] : null
  const next = idx >= 0 && idx < articles.length - 1 ? articles[idx + 1] : null
  const hasBody = Boolean(fetched?.body && fetched.body.length > 0)

  const [form, setForm] = useState({ name: '', email: '', safariType: '', consent: false })
  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  return (
    <>
      <section className="relative isolate min-h-[55svh] overflow-hidden">
        <img src={article.image} alt={article.title} className="absolute inset-0 -z-10 h-full w-full object-cover" loading="lazy" decoding="async" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/40 to-black/70" />
        <div className="container-page flex min-h-[55svh] items-center justify-center pt-28 pb-12 text-center text-white sm:pt-32">
          <div className="max-w-3xl">
            <p className="eyebrow text-brand-gold">{article.tags.join(' · ')}</p>
            <h1 className="text-display mt-4 text-white">{article.title}</h1>
            <p className="mt-5 text-sm tracking-wide text-white/80">{article.author} · {article.date}</p>
          </div>
        </div>
      </section>

      <article className="container-page py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-brand-charcoal sm:text-lg">{article.excerpt}</p>

          {hasBody && fetched?.body ? (
            <div className="mt-8">
              <StoryBody value={fetched.body} />
            </div>
          ) : (
            <>
              <h2 className="mt-12">Akagera National Park: Rwanda's Big Five Comeback Story</h2>
              <p className="mt-4 leading-relaxed text-brand-charcoal">
                Akagera National Park, located in the east of Rwanda, is the country's only savannah park and the setting
                for a remarkable conservation success story. Once decimated by conflict and poaching, Akagera has been
                meticulously restored and is now a thriving ecosystem where the{' '}
                <span className="font-semibold text-brand-green">Big Five (Lion, Leopard, Rhino, Elephant, Buffalo)</span>{' '}
                roam freely.
              </p>

              <div className="mt-10 overflow-hidden rounded-xl border border-neutral-200 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-forest-dark text-white">
                      <th className="px-4 py-3 text-left font-medium">Detail</th>
                      <th className="px-4 py-3 text-left font-medium">Information for 2026</th>
                      <th className="px-4 py-3 text-left font-medium">Pro-Tip</th>
                    </tr>
                  </thead>
                  <tbody className="text-brand-charcoal">
                    <tr className="border-t border-neutral-100">
                      <td className="px-4 py-3 align-top">Permit Cost</td>
                      <td className="px-4 py-3 align-top">USD 1,500 per person, per trek</td>
                      <td className="px-4 py-3 align-top">Book through a reputable tour operator at least 6 months in advance.</td>
                    </tr>
                    <tr className="border-t border-neutral-100 bg-brand-cream/30">
                      <td className="px-4 py-3 align-top">Location</td>
                      <td className="px-4 py-3 align-top">Volcanoes National Park (VNP)</td>
                      <td className="px-4 py-3 align-top">Permits are non-refundable but transferable in some cases.</td>
                    </tr>
                    <tr className="border-t border-neutral-100">
                      <td className="px-4 py-3 align-top">Time With Gorillas</td>
                      <td className="px-4 py-3 align-top">One hour, strictly observed</td>
                      <td className="px-4 py-3 align-top">Only 8 trekkers per gorilla family per day — book early.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-12 overflow-hidden rounded-xl shadow-md">
                <Picture
                  src="/images/parks/uganda/lake-mburo/16245935126-a25c42431c-o.jpg"
                  alt="Wildlife on the savannah"
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover" />
              </div>

              <h2 className="mt-12">Nyungwe Forest: Primates &amp; Canopy Walks</h2>
              <p className="mt-4 leading-relaxed text-brand-charcoal">
                Moving from the dry savannah, Nyungwe Forest National Park in the southwest is one of the oldest rainforests
                in Africa and a biodiversity hotspot. Home to 13 primate species — including the charismatic chimpanzee —
                and a 200-metre suspended canopy walkway 70 metres above the forest floor.
              </p>

              <h2 className="mt-12">Lake Kivu: Rwanda's Coastal Escape</h2>
              <p className="mt-4 leading-relaxed text-brand-charcoal">
                Rwanda's western border is defined by the shores of Lake Kivu — a vast freshwater lake and the perfect
                post-safari relaxation spot. The towns of Rubavu and Karongi are tranquil bases for boat trips,
                water sports and sunset over the Congolese mountains.
              </p>
            </>
          )}

          <div className="mt-14 flex items-center justify-between border-t border-neutral-200 pt-6 text-sm">
            {prev ? (
              <NavLink to={`/stories/${prev.slug}`} className="text-brand-muted hover:text-brand-green">
                ← Previous Story
              </NavLink>
            ) : <span />}
            <NavLink to="/stories" className="text-brand-muted hover:text-brand-green">All Stories</NavLink>
            {next ? (
              <NavLink to={`/stories/${next.slug}`} className="text-brand-green hover:underline">
                Next Story →
              </NavLink>
            ) : <span />}
          </div>
        </div>
      </article>

      <section className="bg-brand-cream/40 py-16 sm:py-20">
        <div className="container-page text-center">
          <h2>Begin Your Rwanda Safari Today</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-brand-muted sm:text-base">
            Ready to explore Rwanda beyond the gorillas? The Big Five of Akagera and the chimpanzees of Nyungwe are
            waiting.
          </p>
          <NavLink to="/contact" className="btn-primary mt-7">PLAN MY RWANDA SAFARI</NavLink>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <div className="rounded-2xl bg-brand-cream/60 p-6 shadow-sm sm:p-10">
            <h3 className="text-center">Exclusive Offer · Personalised Rwanda Itinerary</h3>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-brand-muted sm:text-base">
              Sign up to receive a <span className="font-semibold text-brand-ink">free 7-day Rwanda safari itinerary</span>{' '}
              tailored to your budget, plus access to our Gorilla Permit Availability Tracker.
            </p>

            {submitted ? (
              <p className="mt-8 text-center text-base text-brand-green">
                Thank you — our team will be in touch within one business day.
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="mt-8 space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-green"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-green"
                  />
                </div>
                <select
                  value={form.safariType}
                  onChange={(e) => update('safariType', e.target.value)}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-brand-ink outline-none focus:border-brand-green"
                >
                  <option value="">Preferred Safari Type</option>
                  {safariTypes.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>

                <label className="flex items-start gap-2 text-xs text-brand-muted">
                  <input
                    type="checkbox"
                    required
                    checked={form.consent}
                    onChange={(e) => update('consent', e.target.checked)}
                    className="mt-0.5"
                  />
                  <span>By signing up, you agree to receive our Rwanda travel insights and exclusive offers.</span>
                </label>

                <button type="submit" className="btn-primary w-full justify-center sm:w-auto">SUBMIT</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
