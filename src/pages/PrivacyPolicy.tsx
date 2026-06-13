import Picture from '@/components/Picture'
import { site } from '@/config/site'
const personalInfo = [
  'Full name',
  'Email address',
  'Phone/WhatsApp number',
  'Country of residence',
  'Travel preferences and itinerary details',
  'Passport details (only when required for bookings/permits)',
]

const nonPersonalInfo = ['Browser type', 'Device type', 'IP address', 'Pages visited and time spent on our website']

const usageReasons = [
  'Respond to inquiries and safari planning requests',
  'Process bookings and secure permits',
  'Communicate travel updates and confirmations',
  'Improve our website and services',
  'Comply with legal or regulatory requirements',
]

const cookieReasons = ['Improve site performance', 'Understand visitor behavior', 'Provide a better browsing experience']

const userRights = [
  'Request access to your personal data',
  'Ask us to correct inaccurate information',
  'Request deletion of your data (subject to legal requirements)',
  'Withdraw consent to marketing communications',
]

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-2xl text-brand-ink">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-brand-charcoal sm:text-base">{children}</div>
    </section>
  )
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="list-inside list-decimal space-y-1 pl-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-inside list-disc space-y-1 pl-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function PrivacyPolicy() {
  return (
    <>
      <section className="relative isolate min-h-[45svh] overflow-hidden">
        <Picture
          src="/images/parks/rwanda/volcanoes/wilderness-bisate.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover" loading="lazy" decoding="async" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/40 to-black/65" />
        <div className="container-page flex min-h-[45svh] items-center justify-center pt-28 pb-12 text-center text-white sm:pt-32">
          <div className="max-w-3xl">
            <p className="eyebrow text-brand-gold">Legal</p>
            <h1 className="text-display mt-3 text-white">Privacy Policy</h1>
            <p className="mt-3 text-sm tracking-wide text-white/80">Effective Date · 02 May 2026</p>
          </div>
        </div>
      </section>

      <article className="container-page max-w-3xl py-16 md:py-20">
        <p className="text-base leading-relaxed text-brand-charcoal sm:text-lg">
          Still Wild Safaris (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) values your privacy. This
          Privacy Policy explains how we collect, use, store and protect your personal information when you visit
          our website or use our services.
        </p>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          By using our website, you agree to the practices described in this policy.
        </p>

        <Section title="Information We Collect">
          <p>We may collect the following types of information:</p>
          <p className="font-semibold">Personal Information</p>
          <NumberedList items={personalInfo} />
          <p className="font-semibold">Non-Personal Information</p>
          <NumberedList items={nonPersonalInfo} />
        </Section>

        <Section title="How We Use Your Information">
          <p>We use your information to:</p>
          <BulletList items={usageReasons} />
        </Section>

        <Section title="Sharing of Information">
          <p>
            We may also share limited information with secure payment processors to complete transactions and with
            technology providers that help us manage bookings and communication. All third parties we work with are
            expected to maintain appropriate data protection standards and use your information solely for delivering
            the agreed travel services. We do not sell, trade, or rent your personal information to external parties
            for marketing purposes. Information may only be disclosed beyond these cases if required by law, to protect
            our legal rights, or in situations involving the safety and security of our clients, staff, or operations.
          </p>
        </Section>

        <Section title="Data Security">
          <p>
            We implement reasonable technical and organizational measures to protect your personal data against
            unauthorized access, loss, misuse, or disclosure. However, no online system is completely secure.
          </p>
        </Section>

        <Section title="Cookies and Tracking">
          <p>Our website may use cookies to:</p>
          <BulletList items={cookieReasons} />
        </Section>

        <Section title="Your Rights">
          <p>You have the right to:</p>
          <BulletList items={userRights} />
        </Section>

        <Section title="Third-Party Links">
          <p>
            Our website may contain links to external sites. We are not responsible for their privacy practices.
          </p>
        </Section>

        <Section title="Data Retention">
          <p>
            Still Wild Safaris retains personal information only for as long as necessary to fulfill the purposes for
            which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.
          </p>
        </Section>

        <Section title="Contact Us">
          <p>
            If you have questions about this Privacy Policy or how your information is handled, please reach out to us
            at {site.email}.
          </p>
        </Section>
      </article>
    </>
  )
}
