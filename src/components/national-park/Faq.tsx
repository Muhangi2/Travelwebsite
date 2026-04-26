import { useState } from 'react'
import type { Park } from '@/data/destinations'

export default function Faq({ items }: { items: Park['faqs'] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center font-serif text-4xl">Frequently Asked Questions</h2>

        <div className="mt-10 space-y-3">
          {items.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <div key={f.q} className="rounded-md border border-neutral-200 bg-white">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm">{f.q}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="border-t border-neutral-100 px-5 py-4 text-sm leading-relaxed text-neutral-600">
                    {f.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
