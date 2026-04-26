type Props = {
  title: string
  body: React.ReactNode
  image: string
  imageOnRight?: boolean
  bg?: string
  centered?: boolean
}

export default function PolicyBlock({ title, body, image, imageOnRight = true, bg = 'bg-white', centered = false }: Props) {
  return (
    <section className={`${bg} py-16`}>
      <div className="mx-auto max-w-5xl px-6">
        {centered ? (
          <div className="text-center">
            <h2 className="font-serif text-3xl">{title}</h2>
            <div className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600">{body}</div>
          </div>
        ) : (
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className={imageOnRight ? 'order-1' : 'order-1 md:order-2'}>
              <h2 className="font-serif text-3xl">{title}</h2>
              <div className="mt-4 text-sm leading-relaxed text-neutral-600">{body}</div>
            </div>
            <div className={imageOnRight ? 'order-2' : 'order-2 md:order-1'}>
              <img src={image} alt="" className="rounded-md object-cover shadow-md" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
