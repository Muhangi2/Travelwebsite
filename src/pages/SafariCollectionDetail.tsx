import { useParams, Navigate } from 'react-router-dom'
import { useTourPackage } from '@/sanity/tourPackages'
import SEO from '@/components/SEO'
import { buildFaqSchema } from '@/lib/schema'
import DetailHero from '@/components/collection-detail/DetailHero'
import TourNav from '@/components/collection-detail/TourNav'
import TourItinerary from '@/components/collection-detail/TourItinerary'
import TourHighlights from '@/components/collection-detail/TourHighlights'
import TourIncludes from '@/components/collection-detail/TourIncludes'
import TourRates from '@/components/collection-detail/TourRates'
import TourFAQ from '@/components/collection-detail/TourFAQ'
import HandpickedLodges from '@/components/collection-detail/HandpickedLodges'
import TripQuoteBanner from '@/components/collection-detail/TripQuoteBanner'
import JourneysCarousel from '@/components/ui/JourneysCarousel'

export default function SafariCollectionDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { journey } = useTourPackage(slug)

  if (!journey) return <Navigate to="/safari-collections" replace />

  const hasHighlights = Boolean(journey.highlights?.length)
  const hasFaq = Boolean(journey.faq?.length)
  const hasIncludes = Boolean(journey.included?.length || journey.notIncluded?.length)
  const hasRates = Boolean(journey.rates)

  const tripSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: journey.title.replace('\n', ' '),
    description: journey.subtitle,
    image: journey.heroImage,
    touristType: 'Wildlife safari',
    itinerary: {
      '@type': 'ItemList',
      itemListElement: journey.days.map((d, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: d.title,
      })),
    },
    provider: {
      '@type': 'TravelAgency',
      name: 'Still Wild Safaris',
      url: 'https://stillwildsafaris.com',
    },
  }

  return (
    <>
      <SEO
        title={journey.title.replace('\n', ' ')}
        description={journey.subtitle}
        image={journey.heroImage}
        url={`/safari-collections/${slug}`}
        jsonLd={hasFaq ? [tripSchema, buildFaqSchema(journey.faq!)] : tripSchema}
      />

      <DetailHero
        title={journey.title}
        subtitle={journey.subtitle}
        image={journey.heroImage}
        priceFromUsd={journey.rates?.priceFromUsd}
      />

      <TourNav hasHighlights={hasHighlights} hasFaq={hasFaq} hasIncludes={hasIncludes} hasRates={hasRates} />

      <div id="overview" />

      <div id="itinerary">
        <TourItinerary
          days={journey.days}
          overview={journey.overview}
          waypoints={journey.waypoints}
          title={journey.title.replace('\n', ' ')}
          country={journey.country}
        />
      </div>

      {hasRates && (
        <div id="rates">
          <TourRates rates={journey.rates!} />
        </div>
      )}

      <TripQuoteBanner />

      {hasHighlights && (
        <div id="highlights">
          <TourHighlights
            highlights={journey.highlights!}
            images={[journey.heroImage, ...journey.days.map((d) => d.image)]}
          />
        </div>
      )}

      {hasIncludes && (
        <div id="includes">
          <TourIncludes
            included={journey.included ?? []}
            notIncluded={journey.notIncluded ?? []}
          />
        </div>
      )}

      <div id="accommodation">
        <HandpickedLodges days={journey.days} lodges={journey.lodges} />
      </div>

      <JourneysCarousel excludeSlug={slug} heading="Other Journeys You Might Like" />

      {hasFaq && (
        <div id="faq">
          <TourFAQ faq={journey.faq!} />
        </div>
      )}
    </>
  )
}
