export default function TippingBanner() {
  return (
    <section className="relative isolate overflow-hidden py-24 text-white">
      <img
        src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2400&q=80"
        alt="Lodge at twilight"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-serif text-3xl">Tipping and Local Etiquette</h2>
        <p className="mt-4 text-sm leading-relaxed text-white/85">
          Tipping is customary and a significant part of the income for guides, drivers, and lodge staff. We provide a
          suggested tipping guideline in your final itinerary. Always **ask permission** before taking photographs of
          local people, and respect local customs and traditions. Learning a few words of the local language (e.g.,
          "Muzungu," is a common term for a white person) is appreciated.
        </p>
      </div>
    </section>
  )
}
