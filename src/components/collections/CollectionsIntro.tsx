export default function CollectionsIntro() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <img
            src="https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1400&q=80"
            alt="Safari vehicle on the savanna"
            className="rounded-md object-cover shadow-md"
          />
        </div>
        <div className="order-1 md:order-2">
          <div className="h-px w-24 bg-brand-green" />
          <h2 className="mt-4 font-serif text-5xl">Safari collections</h2>
          <p className="mt-5 text-sm leading-relaxed text-neutral-600">
            East Africa is a tapestry of vibrant cultures, diverse landscapes, and unparalleled wildlife. At
            MasterPolo Safaris, we believe that a safari is more than just a trip; it is a transformative experience.
            Our team of local experts is dedicated to providing authentic encounters across Uganda, Rwanda, Burundi,
            and Kenya, while maintaining the highest standards of luxury and sustainability.
          </p>
        </div>
      </div>
    </section>
  )
}
