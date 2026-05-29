import Picture from '@/components/Picture'
import type { Park } from '@/data/destinations'

export default function KeyAttractions({ items }: { items: Park['attractions'] }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-serif text-4xl">Key Attractions</h2>

        <div className="cards-scroll-3 mt-10 gap-6">
          {items.map((a) => (
            <article key={a.title} className="overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-neutral-200">
              <div className="aspect-[4/3] overflow-hidden">
                <Picture src={a.image} alt={a.title} imgClassName="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-base">{a.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600">{a.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
