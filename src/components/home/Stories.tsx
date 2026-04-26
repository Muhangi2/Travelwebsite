const posts = [
  {
    image: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=1200&q=80',
    title: 'Tracking the Mountain Gorillas of Bwindi',
    author: 'MasterPolo Safaris Team',
    date: 'Jan 2026',
  },
  {
    image: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1200&q=80',
    title: 'Beyond the Gorillas: Discovering Rwanda’s Big Five and Hidden Gems',
    author: 'MasterPolo Safaris Team',
    date: 'Jan 2026',
    tag: 'Uganda, Rwanda',
  },
  {
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&q=80',
    title: 'Photography in the African Bush',
    author: 'MasterPolo Safaris Team',
    date: 'Jan 2026',
  },
]

export default function Stories() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-5xl">Stories from the Wild</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-600">
            Travel tales, wildlife moments &amp; behind-the-scenes safari life from East Africa.
          </p>
        </div>

        <div className="relative mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p, idx) => (
            <article
              key={p.title}
              className={`relative overflow-hidden rounded-md ${idx === 1 ? 'md:scale-105 md:shadow-xl' : 'opacity-90'}`}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              {p.tag && (
                <span className="absolute left-4 top-4 rounded-full bg-brand-green/80 px-3 py-1 text-[10px] tracking-wide text-white">
                  {p.tag}
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-[10px] tracking-wide text-white/75">Author: {p.author}  |  {p.date}</p>
                <h3 className="mt-1 font-serif text-lg leading-snug">{p.title}</h3>
                {idx === 1 && (
                  <button className="mt-3 rounded-full border border-white/60 px-4 py-1.5 text-[10px] tracking-[0.2em] text-white hover:bg-white/10">
                    READ MORE
                  </button>
                )}
              </div>
            </article>
          ))}

          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-[10px] tracking-[0.2em] text-white md:flex">
            <span>● DRAG</span>
          </div>
        </div>
      </div>
    </section>
  )
}
