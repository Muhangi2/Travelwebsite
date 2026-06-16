import type { Country } from '@/data/destinations'
import Reveal from '@/components/ui/Reveal'

export default function SpecialistQuote({ data }: { data: Country['specialistQuote'] }) {
  if (!data) return null

  return (
    <section className="relative overflow-hidden bg-[#0d1f15] py-24 sm:py-32">
      {/* Huge decorative open-quote */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-6 left-6 select-none font-serif text-[22rem] leading-none text-white/[0.04] sm:left-12"
        style={{ lineHeight: 1 }}
      >
        &ldquo;
      </span>

      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(255,255,255,0.04),transparent)]" />

      <div className="container-page relative z-10">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <p className="mb-10 text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">
              Our Specialist
            </p>

            <blockquote className="font-serif text-2xl leading-relaxed text-white/90 sm:text-3xl lg:text-4xl">
              {data.quote}
            </blockquote>

            <div className="mt-10 flex items-center gap-5">
              {/* Avatar placeholder */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/60">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-white">{data.author}</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-white/40">{data.role}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
