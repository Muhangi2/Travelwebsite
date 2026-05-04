import Picture from '@/components/Picture'
export default function WhyChoose() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-4xl">
            Why Choose This <br />
            <span className="text-brand-green">Safari?</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-neutral-600">
            This safari is a comprehensive exploration of Uganda's natural wonders, combining wildlife encounters and
            primate tracking in one unforgettable journey. It is ideal for travelers who want a varied itinerary that
            includes multiple primate species and the chance to experience Uganda's most iconic destinations. The
            selection of handpicked accommodations ensures comfort and an elevated experience throughout your
            journey, from intimate boutique hotels to exclusive luxury camps.
          </p>
        </div>
        <div>
          <Picture
            src="/images/lodges/uganda/queen-elizabeth-national-park/kyambura-lodge-by-volcanoes-safaris/10-kyambura-lodge-main-lodge-area-04.jpg"
            alt="Luxury safari lodge bedroom"
            className="rounded-md object-cover" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  )
}
