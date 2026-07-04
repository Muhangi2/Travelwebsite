import { Helmet } from 'react-helmet-async'

type SEOProps = {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  jsonLd?: object | object[]
}

const SITE_NAME = 'Still Wild Safaris'
const BASE_URL = 'https://stillwildsafaris.com'
const DEFAULT_IMAGE = `${BASE_URL}/images/og-default.jpg`
const DEFAULT_DESC = 'Bespoke luxury safari experiences in Uganda, Rwanda and Kenya. Expert-guided gorilla trekking, wildlife safaris and cultural journeys.'

export default function SEO({ title, description, image, url, type = 'website', jsonLd }: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Luxury Safaris in Uganda, Rwanda & Kenya`
  const desc = description ?? DEFAULT_DESC
  const img = image ?? DEFAULT_IMAGE
  const canonical = url ? `${BASE_URL}${url}` : BASE_URL
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={canonical} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
