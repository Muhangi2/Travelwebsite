import { useParams, Navigate } from 'react-router-dom'
import { useTourPackage } from '@/sanity/tourPackages'
import DetailHero from '@/components/collection-detail/DetailHero'
import JourneyOverview from '@/components/collection-detail/JourneyOverview'
import SafariJourney from '@/components/collection-detail/SafariJourney'
import HandpickedLodges from '@/components/collection-detail/HandpickedLodges'
import FlyInOption from '@/components/collection-detail/FlyInOption'
import UniqueExperiences from '@/components/collection-detail/UniqueExperiences'
import WhyChoose from '@/components/collection-detail/WhyChoose'
import BookingForm from '@/components/collection-detail/BookingForm'

export default function SafariCollectionDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { journey } = useTourPackage(slug)

  if (!journey) return <Navigate to="/safari-collections" replace />

  return (
    <>
      <DetailHero title={journey.title} subtitle={journey.subtitle} image={journey.heroImage} />
      <JourneyOverview overview={journey.overview} />
      <SafariJourney days={journey.days} />
      <HandpickedLodges />
      <FlyInOption />
      <UniqueExperiences />
      <WhyChoose />
      <BookingForm />
    </>
  )
}
