import Picture from '@/components/Picture'
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
            <Picture
              src="/images/activities/walking-safari/1752747977431-kenya-suyian-conservancy-horseriding-28.jpg"
              alt="MasterPolo Safaris team"
              className="rounded-md object-cover shadow-md" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  )
}
