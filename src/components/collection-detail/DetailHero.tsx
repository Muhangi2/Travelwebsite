import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import HeroStagger, { HeroItem } from '@/components/ui/HeroStagger'
import WhatsAppCTA from '@/components/ui/WhatsAppCTA'
import { CURRENCIES, convert, formatCurrency, useCurrencyRates, type CurrencyCode } from '@/lib/currency'

type Props = {
  title: string
  subtitle: string
  image: string
  priceFromUsd?: number
}

export default function DetailHero({ title, subtitle, image, priceFromUsd }: Props) {
  // Always starts in USD, independent of any currency chosen further down the page.
  const [currency, setCurrency] = useState<CurrencyCode>('USD')
  const { rates, loading } = useCurrencyRates()

  return (
    <section className="relative isolate h-[100svh] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 -z-10 h-full w-full object-cover motion-safe:animate-[fadeIn_1.2s_ease-out]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-black/50" />

      <div className="mx-auto flex h-full max-w-5xl items-center justify-center px-6 text-center text-white">
        <HeroStagger>
          <HeroItem>
            <h1 className="whitespace-pre-line font-serif text-3xl leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">{title}</h1>
          </HeroItem>
          <HeroItem>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/90">{subtitle}</p>
          </HeroItem>
          <HeroItem>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <NavLink to="/contact" className="btn-ghost">
                REQUEST A CUSTOM QUOTE
              </NavLink>
              <WhatsAppCTA />
            </div>
          </HeroItem>

          {priceFromUsd !== undefined && (
            <HeroItem>
              <div className="mx-auto mt-7 inline-flex flex-col items-center gap-1.5 rounded-2xl border border-white/15 bg-black/55 px-7 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md">
                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/70">From</p>
                <p className="font-serif text-2xl text-[#E8C468] drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] sm:text-3xl">
                  {formatCurrency(convert(priceFromUsd, currency, rates), currency)}
                  <span className="ml-2 text-xs font-sans font-normal tracking-wide text-white/80">per person sharing</span>
                </p>
                <div className="mt-1.5 flex items-center gap-2">
                  <label htmlFor="hero-currency" className="text-[10px] uppercase tracking-[0.14em] text-white/55">
                    Show in
                  </label>
                  <select
                    id="hero-currency"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
                    className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-medium text-white focus:outline-none focus:ring-1 focus:ring-white/50 [&>option]:text-black"
                  >
                    {CURRENCIES.map((c) => (
                      <option key={c.code} value={c.code}>{c.code}</option>
                    ))}
                  </select>
                  {loading && <span className="text-[10px] text-white/50">fetching rates…</span>}
                </div>
              </div>
            </HeroItem>
          )}
        </HeroStagger>
      </div>
    </section>
  )
}
