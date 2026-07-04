import Reveal from '@/components/ui/Reveal'

export default function HonestStartingPoint() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <div className="section-rule mx-auto" />
          <h2 className="mt-3">An Honest Starting Point, Not A Finished Story</h2>
          <p className="mt-5 text-sm leading-relaxed text-neutral-600">
            We won't pretend this is solved. Still Wild Safaris is a young company, and regenerative travel is a
            constantly moving target — we're learning, adjusting, and improving every itinerary we put into the
            world. What won't change is the question we started with at university: how do we make sure the wild
            places we love are still wild for the next generation of travellers?
          </p>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600">
            That question shapes every partner we choose, every lodge we vet, and every itinerary we build — in
            Uganda, in Rwanda, and wherever this takes us next.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
