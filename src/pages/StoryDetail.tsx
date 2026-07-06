import { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useStories, useStory } from '@/sanity/stories'
import SEO from '@/components/SEO'
import StoryBody from '@/components/stories/StoryBody'
import LocalStoryBody from '@/components/stories/LocalStoryBody'
import TableOfContents from '@/components/stories/TableOfContents'
import Picture from '@/components/Picture'
import { localToc, sanityToc, localReadingMinutes, sanityReadingMinutes } from '@/lib/articleContent'

const safariTypes = [
  'Uganda Gorilla Trekking',
  'Rwanda Gorilla Trekking',
  'Kenya Big Five Safari',
  'Multi-Country Safari',
  'Not Sure Yet',
]

function parseDisplayDate(date: string): string | undefined {
  const parsed = new Date(`1 ${date}`)
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString()
}

export default function StoryDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { items: articles } = useStories()
  const { article: fetched } = useStory(slug)
  const [form, setForm] = useState({ name: '', email: '', safariType: '', consent: false })
  const [submitted, setSubmitted] = useState(false)

  const article = fetched ?? articles.find((a) => a.slug === slug) ?? articles[0]
  if (!article) return null
  const idx = articles.findIndex((a) => a.slug === article.slug)
  const prev = idx > 0 ? articles[idx - 1] : null
  const next = idx >= 0 && idx < articles.length - 1 ? articles[idx + 1] : null
  const localArticle = articles.find((a) => a.slug === article.slug)
  const hasSanityBody = Boolean(fetched?.body && fetched.body.length > 0)
  const hasLocalBody = Boolean(localArticle?.body && localArticle.body.length > 0)

  const toc = hasSanityBody && fetched?.body
    ? sanityToc(fetched.body)
    : hasLocalBody && localArticle?.body
      ? localToc(localArticle.body)
      : []
  const readingMinutes = hasSanityBody && fetched?.body
    ? sanityReadingMinutes(fetched.body)
    : hasLocalBody && localArticle?.body
      ? localReadingMinutes(localArticle.body)
      : null

  const publishedAt = parseDisplayDate(article.date)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: article.image?.startsWith('http') ? article.image : `https://stillwildsafaris.com${article.image}`,
    author: { '@type': 'Organization', name: article.author },
    ...(publishedAt ? { datePublished: publishedAt } : {}),
    mainEntityOfPage: `https://stillwildsafaris.com/stories/${article.slug}`,
  }

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        image={article.image}
        url={`/stories/${article.slug}`}
        jsonLd={articleSchema}
        type="article"
      />

      <section className="relative isolate h-[100svh] overflow-hidden">
        <Picture src={article.image} alt={article.title} loading="eager" fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/40 to-black/70" />
        <div className="container-page flex h-full items-center justify-center text-center text-white">
          <div className="max-w-3xl">
            <p className="eyebrow text-brand-gold">{article.tags.join(' · ')}</p>
            <h1 className="text-display mt-4 text-white">{article.title}</h1>
            <p className="mt-5 text-sm tracking-wide text-white/80">
              {article.author} · {article.date}
              {readingMinutes ? ` · ${readingMinutes} min read` : ''}
            </p>
          </div>
        </div>
      </section>

      <article className="container-page bg-[#faf9f6] py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-brand-charcoal sm:text-lg">{article.excerpt}</p>

          <TableOfContents entries={toc} />

          {hasSanityBody && fetched?.body ? (
            <div className="mt-8">
              <StoryBody value={fetched.body} />
            </div>
          ) : hasLocalBody && localArticle?.body ? (
            <div className="mt-8">
              <LocalStoryBody value={localArticle.body} gallery={localArticle.gallery} />
            </div>
          ) : null}

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
          <h2>Begin Your East Africa Safari Today</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-brand-muted sm:text-base">
            From gorilla trekking in Uganda and Rwanda to Big Five safaris in Kenya, our experts design
            private itineraries built around what you want to see.
          </p>
          <NavLink to="/contact" className="btn-primary mt-7">PLAN MY SAFARI</NavLink>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <div className="rounded-2xl bg-brand-cream/60 p-6 shadow-sm sm:p-10">
            <h3 className="text-center">Exclusive Offer · Personalised Safari Itinerary</h3>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-brand-muted sm:text-base">
              Sign up to receive a <span className="font-semibold text-brand-ink">free custom safari itinerary</span>{' '}
              tailored to your budget, plus insider tips on permits, pricing and the best time to travel.
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
                  <span>By signing up, you agree to receive our East Africa travel insights and exclusive offers.</span>
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
