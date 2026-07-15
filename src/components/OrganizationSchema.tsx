import { Helmet } from 'react-helmet-async'
import { site } from '@/config/site'

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: site.name,
  description: site.tagline,
  url: 'https://stillwildsafaris.com',
  image: 'https://stillwildsafaris.com/images/og-default.jpg',
  email: site.email,
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address,
    addressCountry: 'UG',
  },
  areaServed: ['Uganda', 'Rwanda', 'Kenya'],
  sameAs: [site.instagram, site.facebook, site.youtube],
}

export default function OrganizationSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(ORGANIZATION_SCHEMA)}</script>
    </Helmet>
  )
}
