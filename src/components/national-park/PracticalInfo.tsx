import type { Park } from '@/data/destinations'

export default function PracticalInfo({ items }: { items: NonNullable<Park['practicalInfo']> }) {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center">
          Practical Information & Travel Tips
        </h2>

        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-md bg-white p-5 shadow-sm ring-1 ring-neutral-200"
            >
              <dt className="font-serif text-sm text-brand-green">{item.label}</dt>
              <dd className="mt-2 text-xs leading-relaxed text-neutral-600">{item.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
