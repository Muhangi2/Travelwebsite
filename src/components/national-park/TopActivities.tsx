import Picture from '@/components/Picture'
import type { Park } from '@/data/destinations'

export default function TopActivities({ items }: { items: Park['activities'] }) {
  return (
    <section className="bg-brand-forest py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-serif text-4xl text-white">Top Activities</h2>

        <div className="cards-scroll-3 mt-10 gap-6">
          {items.map((a) => (
            <article key={a.title} className="relative aspect-[4/3] overflow-hidden rounded-md">
              <Picture
                src={a.image}
                alt={a.title}
                className="absolute inset-0 h-full w-full"
                imgClassName="h-full w-full object-cover"
              />
              {a.body && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="font-serif text-base">{a.title}</h3>
                    <p className="mt-1 text-xs text-white/85">{a.body}</p>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
