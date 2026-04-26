export default function CancellationPolicy() {
  return (
    <section className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center font-serif text-3xl">Cancellation Policy</h2>

        <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
              alt="Africa map with route pins"
              className="rounded-md object-cover shadow-md"
            />
          </div>
          <div>
            <div className="h-px w-16 bg-brand-green" />
            <p className="mt-3 font-serif text-lg text-brand-green">
              Our cancellation policy is based on the time before departure:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-700">
              <li>
                <span className="font-semibold">90+ days before departure:</span> Full refund.
              </li>
              <li>
                <span className="font-semibold">45-89 days before departure:</span> 30% cancellation fee
                (forfeiture of deposit).
              </li>
              <li>
                <span className="font-semibold">Less than 45 days before departure:</span> 100% cancellation fee.
              </li>
            </ul>
            <p className="mt-5 text-xs text-neutral-500">
              All cancellations must be submitted in writing. We strongly recommend mandatory travel insurance to
              cover unforeseen circumstances.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
