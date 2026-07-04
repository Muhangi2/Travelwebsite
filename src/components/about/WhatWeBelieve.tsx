import Picture from '@/components/Picture'
import Reveal from '@/components/ui/Reveal'

export default function WhatWeBelieve() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white">
      <Picture
        src="/images/parks/rwanda/akagera/1738328418703-magashi-staff-12-24-tc-035.jpg"
        alt="Guide scanning the water at Akagera National Park, Rwanda"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <div className="section-rule mx-auto" style={{ background: 'rgba(255,255,255,0.5)' }} />
          <h2 className="mt-3 text-white">What We Believe</h2>
          <p className="mt-5 text-sm leading-relaxed text-white/85">
            We believe a safari should leave a place better than it found it. Not just "do less harm" — actively
            contribute to the health of the ecosystems, communities, and wildlife that make the journey worth taking
            in the first place. That's what regenerative travel means to us: travel that restores, not just travel
            that tries to tread lightly.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
