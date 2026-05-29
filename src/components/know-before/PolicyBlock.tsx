import Reveal from '@/components/ui/Reveal'

type Props = {
  title: string
  body: React.ReactNode
  image: string
  imageOnRight?: boolean
  bg?: string
  centered?: boolean
}

export default function PolicyBlock({
  title,
  body,
  image,
  imageOnRight = true,
  bg = 'bg-white',
  centered = false,
}: Props) {
  return (
    <section className={`${bg} py-16`}>
      <div className="mx-auto max-w-5xl px-6">
        {centered ? (
          <Reveal>
            <div className="text-center">
              <div className="section-rule mx-auto" />
              <h2 className="mt-4 font-serif text-3xl">{title}</h2>
              <div className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600">{body}</div>
            </div>
          </Reveal>
        ) : (
          <div className="grid items-center gap-10 md:grid-cols-2">
            <Reveal variant={imageOnRight ? 'left' : 'right'}>
              <div className="section-rule" />
              <h2 className="mt-4 font-serif text-3xl">{title}</h2>
              <div className="mt-4 text-sm leading-relaxed text-neutral-600">{body}</div>
            </Reveal>
            <Reveal variant={imageOnRight ? 'right' : 'left'} delay={100}>
              {image ? (
                <div className="img-zoom overflow-hidden rounded-md shadow-md">
                  <img src={image} alt="" className="rounded-md object-cover" loading="lazy" decoding="async" />
                </div>
              ) : null}
            </Reveal>
          </div>
        )}
      </div>
    </section>
  )
}
