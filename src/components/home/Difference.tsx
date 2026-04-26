const points = [
  {
    title: 'Expert Local Guides',
    body: 'Our guides are our greatest asset. Born and raised in Uganda, they possess an intimate knowledge of the land, the wildlife, and the culture. Their passion is infectious, and their expertise ensures you have a safe, insightful, and fascinating adventure. They know the best spots to find wildlife and are skilled storytellers who bring the African bush to life.',
  },
  {
    title: 'Tailor-Made Itineraries',
    body: 'Your dream safari is unique. We specialize in crafting personalized itineraries that match your interests, budget, and travel style. Whether you seek thrilling adventure, a focus on photography, a family-friendly holiday, or a luxurious romantic getaway, we will design the perfect trip for you.',
  },
  {
    title: 'Commitment to Excellence',
    body: 'From comfortable and reliable 4x4 safari vehicles to carefully selected lodges and camps, we ensure every aspect of your journey is seamless. We focus on providing.',
  },
  {
    title: '24/7 Support',
    body: 'From the moment you land in Entebbe until you fly home, we are with you.',
  },
]

export default function Difference() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-5xl leading-tight">
              The MasterPolo Safaris<br />Difference
            </h2>
          </div>
          <div className="flex justify-end">
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full ring-1 ring-neutral-200">
              <span className="font-serif text-xs">
                <span className="text-brand-rust">Master</span>
                <span className="text-brand-forest">Polo</span>
              </span>
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-3xl font-serif text-2xl leading-relaxed text-neutral-800">
          We believe a truly great safari depends on the quality of the journey. With us, you are not just a tourist;
          you are an explorer.
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="h-px w-24 bg-brand-green" />
            {points.map((p) => (
              <div key={p.title} className="flex gap-3">
                <span className="mt-1 text-brand-green">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12l3 3 5-6" />
                  </svg>
                </span>
                <p className="text-sm text-neutral-700">
                  <span className="font-semibold text-brand-green">{p.title}:</span> {p.body}
                </p>
              </div>
            ))}
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=1400&q=80"
              alt="Lion cub resting on a log"
              className="h-full w-full rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
