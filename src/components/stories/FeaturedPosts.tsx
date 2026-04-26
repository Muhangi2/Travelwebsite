import { Link } from 'react-router-dom'
import { articles } from '@/data/articles'

const TagPill = ({ tags }: { tags: string[] }) => (
  <span className="absolute right-4 top-4 rounded-full bg-brand-green/90 px-3 py-1 text-[10px] tracking-wide text-white">
    {tags.join(', ')}
  </span>
)

export default function FeaturedPosts() {
  const main = articles[0]
  const side = [articles[1], articles[2]]

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-serif text-4xl">Featured Posts</h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-md shadow-sm ring-1 ring-neutral-100">
            <div className="relative aspect-[4/5] overflow-hidden lg:aspect-[4/5]">
              <img src={main.image} alt={main.title} className="h-full w-full object-cover" />
              <TagPill tags={main.tags} />
            </div>
            <div className="bg-white p-6">
              <p className="text-[10px] tracking-wide text-brand-green">
                Author: {main.author} | {main.date}
              </p>
              <h3 className="mt-2 font-serif text-xl">{main.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{main.excerpt}</p>
              <Link
                to={`/stories/${main.slug}`}
                className="mt-5 inline-flex items-center gap-1 rounded-full bg-brand-green px-5 py-2 text-[10px] tracking-[0.2em] text-white hover:bg-brand-green-dark"
              >
                READ MORE
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>

          <div className="space-y-6">
            {side.map((p) => (
              <article key={p.slug} className="overflow-hidden rounded-md shadow-sm ring-1 ring-neutral-100">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                  <TagPill tags={p.tags} />
                </div>
                <div className="bg-white p-5">
                  <p className="text-[10px] tracking-wide text-brand-green">
                    Author: {p.author} | {p.date}
                  </p>
                  <h3 className="mt-2 font-serif text-base">{p.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-600">{p.excerpt}</p>
                  <Link
                    to={`/stories/${p.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-[10px] tracking-[0.2em] text-brand-green hover:underline"
                  >
                    READ MORE
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
