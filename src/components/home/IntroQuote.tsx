import { NavLink } from 'react-router-dom'

export default function IntroQuote() {
  return (
    <section className="relative bg-brand-cream/40 py-12 sm:py-16">
      <div className="container-page">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <span aria-hidden className="block h-10 w-px bg-brand-ink/25 sm:h-12" />

          <p className="eyebrow mt-5">A World Worth Exploring</p>

          <blockquote className="mt-4">
            <p className="font-serif text-2xl leading-tight text-brand-ink/90 sm:text-3xl md:text-4xl">
              <span className="block">&ldquo;I just wish the world was twice as big</span>
              <span className="mt-1 block italic text-brand-rust">and half of it was still unexplored.&rdquo;</span>
            </p>
          </blockquote>

          <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.3em] text-brand-muted">
            — David Attenborough
          </p>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-brand-muted sm:text-base">
            We cannot double the size of the earth, but we can protect the mystery that remains by choosing journeys
            that honor the untouched, the raw, and the truly wild.
          </p>

          <NavLink
            to="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-brand-rust/70 px-8 py-3 text-xs font-medium tracking-[0.22em] text-brand-rust transition hover:bg-brand-rust hover:text-white"
          >
            START THE CONVERSATION
          </NavLink>
        </div>
      </div>
    </section>
  )
}
