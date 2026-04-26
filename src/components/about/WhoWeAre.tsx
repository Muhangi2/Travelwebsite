export default function WhoWeAre() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="h-px w-24 bg-neutral-300" />
            <h2 className="mt-3 font-serif text-4xl">Who We Are</h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              We are local experts with a global outlook. Based in Uganda and operating across East Africa, we design
              journeys that go beyond sightseeing — connecting people to nature, wildlife, and culture with comfort,
              respect, and meaning.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=80"
              alt="MasterPolo Safaris team"
              className="rounded-md object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
