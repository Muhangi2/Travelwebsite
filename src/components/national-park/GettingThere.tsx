export default function GettingThere({ text }: { text: string }) {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="font-serif text-xl sm:text-3xl text-brand-green">Getting There</h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">{text}</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-200 space-y-4">
            <p className="font-serif text-base text-brand-green">Plan Your Journey</p>
            <p className="text-xs leading-relaxed text-neutral-500">
              Our team handles all logistics — airport transfers, cross-border road trips, and
              charter flights. Reach out and we'll design the smoothest route to suit your
              itinerary.
            </p>
            <a
              href="/contact"
              className="inline-block rounded bg-brand-green px-5 py-2.5 text-xs font-medium tracking-wide text-white hover:bg-brand-green/90 transition-colors"
            >
              ENQUIRE NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
