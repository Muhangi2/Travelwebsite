import { useEffect, useState } from 'react'

export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD'

export const CURRENCIES: { code: CurrencyCode; label: string }[] = [
  { code: 'USD', label: 'USD US Dollar' },
  { code: 'EUR', label: 'EUR Euro' },
  { code: 'GBP', label: 'GBP British Pound' },
  { code: 'CAD', label: 'CAD Canadian Dollar' },
  { code: 'AUD', label: 'AUD Australian Dollar' },
]

const RATES_ENDPOINT = 'https://open.er-api.com/v6/latest/USD'
const CACHE_KEY = 'sws_usd_rates_v1'
const CACHE_TTL_MS = 6 * 60 * 60 * 1000 // 6 hours

type RatesCache = { rates: Record<string, number>; fetchedAt: number }

function readCache(): RatesCache | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as RatesCache
    if (Date.now() - parsed.fetchedAt > CACHE_TTL_MS) return null
    return parsed
  } catch {
    return null
  }
}

function writeCache(rates: Record<string, number>) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ rates, fetchedAt: Date.now() } satisfies RatesCache))
  } catch {
    // storage unavailable safe to ignore, rates just won't be cached
  }
}

/** USD-based conversion rates, fetched live and cached for the session. Falls back to USD-only on failure. */
export function useCurrencyRates() {
  const [rates, setRates] = useState<Record<string, number> | null>(() => readCache()?.rates ?? null)
  const [loading, setLoading] = useState(!rates)

  useEffect(() => {
    if (rates) return
    let cancelled = false
    fetch(RATES_ENDPOINT)
      .then((res) => res.json())
      .then((data: { result: string; rates?: Record<string, number> }) => {
        if (cancelled || data.result !== 'success' || !data.rates) return
        writeCache(data.rates)
        setRates(data.rates)
      })
      .catch(() => {
        // silently fall back to USD-only display
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [rates])

  return { rates, loading }
}

export function convert(amountUsd: number, code: CurrencyCode, rates: Record<string, number> | null): number {
  if (code === 'USD' || !rates?.[code]) return amountUsd
  return amountUsd * rates[code]
}

export function formatCurrency(amount: number, code: CurrencyCode): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: code,
    maximumFractionDigits: 0,
  }).format(amount)
}
