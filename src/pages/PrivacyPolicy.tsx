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
      <h2 className="font-serif text-2xl">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-700">{children}</div>
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
      <section className="relative isolate overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2400&q=80"
          alt="Wilderness magazine on a desk"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/55" />
        <div className="mx-auto flex min-h-[36svh] max-w-5xl items-center justify-center px-6 pt-24 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl">Privacy Policy</h1>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="font-serif text-3xl">Privacy Policy</h2>
        <p className="mt-2 text-sm font-semibold text-neutral-700">Effective Date: 05-02-2026</p>

        <p className="mt-6 text-sm leading-relaxed text-neutral-700">
          MasterPolo Safaris (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) values your privacy. This
          Privacy Policy explains how we collect, use, store, and protect your personal information when you visit
          www.masterpolosafaris.com or use our services.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">
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
            MasterPolo Safaris retains personal information only for as long as necessary to fulfill the purposes for
            which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.
          </p>
        </Section>

        <Section title="Contact Us">
          <p>
            If you have questions about this Privacy Policy or how your information is handled, please reach out to us
            at info@masterpolosafaris.com.
          </p>
        </Section>
      </article>
    </>
  )
}
