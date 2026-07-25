import { useState } from 'react'
import Reveal from '@/components/ui/Reveal'
import { CURRENCIES, convert, formatCurrency, useCurrencyRates, type CurrencyCode } from '@/lib/currency'

export type RateRow = { label: string; midrange?: number; luxury?: number }
export type TourRatesData = {
  priceFromUsd: number
  table: RateRow[]
  singleSupplement?: { midrange?: number; luxury?: number }
  permitNote?: string
  validityNote?: string
}

type Props = { rates: TourRatesData }

export default function TourRates({ rates }: Props) {
  // Always starts in USD on page load, regardless of any currency picked on a previous visit.
  const [currency, setCurrency] = useState<CurrencyCode>('USD')
  const { rates: liveRates, loading } = useCurrencyRates()

  const hasMidrange = rates.table.some((r) => r.midrange !== undefined)
  const hasLuxury = rates.table.some((r) => r.luxury !== undefined)

  const price = (usd: number | undefined) =>
    usd === undefined ? '—' : formatCurrency(convert(usd, currency, liveRates), currency)

  return (
    <section className="bg-neutral-50 py-14 sm:py-20">
      <div className="container-page max-w-4xl">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow mb-3">Rates</p>
            <p className="font-serif text-3xl text-neutral-900 sm:text-4xl">
              From <span className="text-[#B8942F]">{price(rates.priceFromUsd)}</span>
            </p>
            <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">per person sharing</p>
          </div>
        </Reveal>

        {/* Currency selector */}
        <Reveal delay={60}>
          <div className="mt-7 flex items-center justify-center gap-2.5">
            <label htmlFor="currency-select" className="text-[11px] uppercase tracking-[0.14em] text-neutral-400">
              Show prices in
            </label>
            <div className="relative">
              <select
                id="currency-select"
                value={currency}
                onChange={(e) => setCurrency(e.target.value as typeof currency)}
                className="appearance-none rounded-full border border-neutral-300 bg-white py-1.5 pl-4 pr-8 text-xs font-medium text-neutral-800 shadow-sm transition hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-800/10"
              >
                {CURRENCIES.map((c) => (
                  <option key={c.code} value={c.code}>{c.label}</option>
                ))}
              </select>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
            {loading && <span className="text-[10px] text-neutral-400">fetching live rates…</span>}
          </div>
        </Reveal>

        {/* Rates table */}
        <Reveal delay={100}>
          <div className="mt-8 overflow-hidden overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <table className="w-full min-w-[420px] border-collapse text-sm">
              <thead>
                <tr className="bg-neutral-900 text-white">
                  <th className="px-5 py-3.5 text-left text-[11px] font-semibold uppercase tracking-widest">Group size</th>
                  {hasMidrange && <th className="px-5 py-3.5 text-right text-[11px] font-semibold uppercase tracking-widest">Midrange</th>}
                  {hasLuxury && <th className="px-5 py-3.5 text-right text-[11px] font-semibold uppercase tracking-widest">Luxury</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {rates.table.map((row) => (
                  <tr key={row.label} className="transition-colors hover:bg-[#B8942F]/[0.06]">
                    <td className="px-5 py-3.5 text-neutral-600">{row.label}</td>
                    {hasMidrange && <td className="px-5 py-3.5 text-right font-medium text-neutral-900">{price(row.midrange)}</td>}
                    {hasLuxury && <td className="px-5 py-3.5 text-right font-medium text-neutral-900">{price(row.luxury)}</td>}
                  </tr>
                ))}
                {rates.singleSupplement && (
                  <tr className="border-t-2 border-neutral-900/10 bg-neutral-50">
                    <td className="px-5 py-3.5 font-medium text-neutral-700">Single supplement</td>
                    {hasMidrange && <td className="px-5 py-3.5 text-right font-medium text-neutral-900">{price(rates.singleSupplement.midrange)}</td>}
                    {hasLuxury && <td className="px-5 py-3.5 text-right font-medium text-neutral-900">{price(rates.singleSupplement.luxury)}</td>}
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Permit & booking notice */}
        {rates.permitNote && (
          <Reveal delay={140}>
            <div className="mt-6 rounded-2xl border border-neutral-200 bg-white px-6 py-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <p className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-neutral-900">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B8942F]" />
                Permit &amp; Booking Notice
              </p>
              <p className="text-[13px] leading-relaxed text-neutral-600">{rates.permitNote}</p>
            </div>
          </Reveal>
        )}

        {rates.validityNote && (
          <p className="mt-5 text-center text-[11px] text-neutral-400">{rates.validityNote}</p>
        )}

        <p className="mt-2 text-center text-[10px] text-neutral-300">
          Prices shown in currencies other than USD use live exchange rates and are indicative final invoicing is in USD.
        </p>
      </div>
    </section>
  )
}
