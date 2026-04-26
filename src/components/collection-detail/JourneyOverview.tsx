export default function JourneyOverview({ overview }: { overview: string }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-4xl">Journey Overview</h2>
        <p className="mt-6 text-sm leading-relaxed text-neutral-600">{overview}</p>
      </div>
    </section>
  )
}
