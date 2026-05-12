import { useEffect } from 'react'
import { useParams, Navigate, NavLink } from 'react-router-dom'
import { experiencesBySlug, experiences } from '@/data/experiences'

export default function ExperienceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const exp = slug ? experiencesBySlug[slug] : undefined

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [slug])

  if (!exp) return <Navigate to="/" replace />

  const related = experiences.filter((e) => e.slug !== exp.slug && e.badge === exp.badge).slice(0, 3)
  const fallback = related.length
    ? related
    : experiences.filter((e) => e.slug !== exp.slug).slice(0, 3)

  return (
    <>
      <section className="relative min-h-[78svh] overflow-hidden bg-brand-ink text-white">
        <img
          src={exp.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/40" />
        <div className="container-page relative z-10 flex min-h-[78svh] flex-col justify-end pb-16 pt-32 sm:pt-40">
          <span className="inline-flex w-fit rounded bg-brand-rust px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em]">
            {exp.badge}
          </span>
          <h1 className="text-display mt-5 max-w-4xl text-white">{exp.title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            {exp.tagline}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <NavLink to="/contact" className="btn-primary">
              START THE CONVERSATION
            </NavLink>
            <a href="#overview" className="btn-ghost">
              EXPLORE THE EXPERIENCE
            </a>
          </div>
        </div>
      </section>

      <section id="overview" className="bg-brand-cream/40 py-16 sm:py-20 md:py-28">
        <div className="container-page">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
            <div>
              <p className="eyebrow">{exp.shortTitle}</p>
              <h2 className="mt-3">The Experience</h2>
            </div>
            <div className="space-y-5">
              {exp.intro.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-brand-charcoal sm:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {exp.highlights.length > 0 && (
        <section className="bg-white py-16 sm:py-20 md:py-28">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">What Sets It Apart</p>
              <h2 className="mt-3">Designed for the Discerning</h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3 md:gap-10">
              {exp.highlights.map((h, i) => (
                <div key={i} className="rounded-2xl border border-brand-ink/10 bg-brand-cream/30 p-6 sm:p-8">
                  <p className="font-serif text-2xl text-brand-gold sm:text-3xl">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-3 font-serif text-xl text-brand-ink sm:text-2xl">{h.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">{h.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {exp.locations.length > 0 && (
        <section className="bg-brand-forest-dark py-16 text-white sm:py-20 md:py-28">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow text-brand-gold">Where to Experience It</p>
              <h2 className="mt-3 text-white">Our Recommended Locations</h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
              {exp.locations.map((loc, i) => (
                <article
                  key={i}
                  className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-white/10"
                >
                  {loc.image && (
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={loc.image}
                        alt={loc.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-5 sm:p-6">
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-brand-gold">{loc.country}</p>
                    <h3 className="mt-2 font-serif text-xl text-white sm:text-2xl">{loc.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/75">{loc.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {exp.gallery.length > 0 && (
        <section className="bg-white py-16 sm:py-20 md:py-24">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">From the Field</p>
              <h2 className="mt-3">In Pictures</h2>
            </div>
            <div className="mx-auto mt-10 grid max-w-6xl gap-3 sm:grid-cols-2 sm:gap-4 md:mt-12 md:grid-cols-4">
              {exp.gallery.slice(0, 8).map((src, i) => (
                <div key={i} className="aspect-[4/5] overflow-hidden rounded-xl">
                  <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-24">
        <img src={exp.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/85 via-brand-ink/70 to-brand-ink/90" />
        <div className="container-page relative z-10 text-center">
          <p className="eyebrow text-brand-gold">Ready to Plan?</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-white">{exp.cta} — privately, with us.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Our travel designers will hand-craft a journey around {exp.shortTitle.toLowerCase()} — paired with the right
            lodges, the right guides and the right time of year. Start the conversation; we&rsquo;ll take it from there.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <NavLink to="/contact" className="btn-primary">
              START THE CONVERSATION
            </NavLink>
            <NavLink to="/safari-collections" className="btn-ghost">
              VIEW SAFARI COLLECTIONS
            </NavLink>
          </div>
        </div>
      </section>

      {fallback.length > 0 && (
        <section className="bg-brand-cream/40 py-16 sm:py-20 md:py-24">
          <div className="container-page">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow">More Experiences</p>
                <h2 className="mt-3">You Might Also Like</h2>
              </div>
              <NavLink
                to="/"
                className="text-xs font-medium uppercase tracking-[0.22em] text-brand-rust hover:text-brand-rust-dark"
              >
                ALL EXPERIENCES →
              </NavLink>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
              {fallback.map((e) => (
                <NavLink
                  key={e.slug}
                  to={`/experiences/${e.slug}`}
                  className="group block overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-neutral-200/70 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={e.image}
                      alt={e.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-brand-gold">{e.badge}</p>
                    <h3 className="mt-2 font-serif text-xl text-brand-ink sm:text-2xl">{e.shortTitle}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-brand-muted">{e.excerpt}</p>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
