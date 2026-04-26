import type { Park } from '@/data/destinations'

export default function ParkOverview({ park }: { park: Park }) {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-brand-green">Overview</h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">{park.overview}</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-200">
            <p className="text-center font-serif text-xl text-brand-green">{park.name.split(' ')[0]} at a Glance</p>
            <dl className="mt-5 divide-y divide-neutral-100 text-sm">
              <Row label="Location" value={park.location} />
              <Row label="Size" value={park.size} />
              <Row label="Altitude" value={park.altitude} />
              <Row label="Best Time to Visit" value={park.bestTime} />
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-2 gap-4 py-3">
      <dt className="font-medium text-neutral-700">{label}</dt>
      <dd className="text-neutral-600">{value}</dd>
    </div>
  )
}
