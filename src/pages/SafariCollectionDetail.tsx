import { useParams, Navigate } from 'react-router-dom'
import { useTourPackage } from '@/sanity/tourPackages'
import SEO from '@/components/SEO'
import DetailHero from '@/components/collection-detail/DetailHero'
import TourNav from '@/components/collection-detail/TourNav'
import TourItinerary from '@/components/collection-detail/TourItinerary'
import TourHighlights from '@/components/collection-detail/TourHighlights'
import TourIncludes from '@/components/collection-detail/TourIncludes'
import TourFAQ from '@/components/collection-detail/TourFAQ'
import HandpickedLodges from '@/components/collection-detail/HandpickedLodges'
import FlyInOption from '@/components/collection-detail/FlyInOption'
import WhyChoose from '@/components/collection-detail/WhyChoose'
import BookingForm from '@/components/collection-detail/BookingForm'

export default function SafariCollectionDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { journey } = useTourPackage(slug)

  if (!journey) return <Navigate to="/safari-collections" replace />

  const hasHighlights = Boolean(journey.highlights?.length)
  const hasFaq = Boolean(journey.faq?.length)
  const hasIncludes = Boolean(journey.included?.length || journey.notIncluded?.length)

  return (
    <>
      <SEO
        title={journey.title.replace('\n', ' ')}
        description={journey.subtitle}
        image={journey.heroImage}
        url={`/safari-collections/${slug}`}
      />

      <DetailHero title={journey.title} subtitle={journey.subtitle} image={journey.heroImage} />

      <TourNav hasHighlights={hasHighlights} hasFaq={hasFaq} hasIncludes={hasIncludes} />

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

      {hasFaq && (
        <div id="faq">
          <TourFAQ faq={journey.faq!} />
        </div>
      )}

      <div id="accommodation">
        <HandpickedLodges days={journey.days} />
      </div>

      <FlyInOption />
      <WhyChoose />

      <div id="contact">
        <BookingForm />
      </div>
    </>
  )
}
