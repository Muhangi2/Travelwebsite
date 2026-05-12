import { NavLink } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-brand-ink">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/destinations/rwanda/image-20260331125636.jpg"
      >
        <source src="/videos/homepage-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
        <source src="/videos/homepage-desktop.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

      <div className="container-page relative z-10 flex min-h-[100svh] items-center pb-20 pt-32 sm:pt-36">
        <div className="max-w-2xl text-white">
          <p className="eyebrow text-brand-gold">Bespoke Luxury Safaris · East Africa</p>
          <h1 className="text-display mt-5 text-white">
            The World is Still Wild. <span className="block sm:inline">Come and Explore</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
            Bespoke safari experiences curated for the discerning traveler. Discover the raw beauty of Uganda, Rwanda
            and Kenya through the lens of elegance and exclusivity.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <NavLink to="/safari-collections" className="btn-primary">
              CURATE YOUR JOURNEY
            </NavLink>
            <NavLink to="/destinations" className="btn-ghost">
              EXPLORE DESTINATIONS
            </NavLink>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none text-center font-serif font-bold leading-none text-white/8"
        style={{ fontSize: 'clamp(6rem, 22vw, 22rem)' }}
      >
        AFRICA
      </div>

      <a
        href="#explore"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-white/70 transition hover:text-white sm:block"
      >
        <span className="block text-[10px] tracking-[0.3em]">SCROLL</span>
        <svg className="mx-auto mt-2 animate-bounce" width="14" height="20" viewBox="0 0 14 20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 1v18M1 13l6 6 6-6" />
        </svg>
      </a>
    </section>
  )
}
