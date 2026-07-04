import Reveal from '@/components/ui/Reveal'
import Picture from '@/components/Picture'

type Props = {
  id?: string
  title: string
  body: React.ReactNode
  image: string
}

export default function PolicyBlock({ id, title, body, image }: Props) {
  return (
    <section id={id} className="relative isolate overflow-hidden py-20 text-white">
      <Picture
        src={image}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/60" />

      <div className="mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <div className="section-rule mx-auto" style={{ background: 'rgba(255,255,255,0.5)' }} />
          <h2 className="mt-4 text-white">{title}</h2>
          <div className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/85">{body}</div>
        </Reveal>
      </div>
    </section>
  )
}
