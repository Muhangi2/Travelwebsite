import Picture from '@/components/Picture'
export default function FlyInOption() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center font-serif text-4xl">Optional Luxury Fly-In<br />Version (7 Days)</h2>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <div>
            <Picture
              src="/images/parks/uganda/murchison-falls/dsc-6280.jpg"
              alt="Safari vehicle"
              className="rounded-md object-cover" loading="lazy" decoding="async" />
          </div>
          <div>
            <div className="h-px w-24 bg-brand-green" />
            <h3 className="mt-3 font-serif text-2xl text-brand-green">For travelers seeking</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              To minimize driving time, replace the long Bwindi → Entebbe drive with a scenic 1.5-hour flight from
              Kihihi/Kisoro. Additional flights can be added between western parks to further reduce driving time and
              maximize your time in the parks.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
