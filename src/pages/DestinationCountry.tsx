import { useParams, Navigate } from 'react-router-dom'
import { useCountry } from '@/sanity/destinations'
import DestinationHero from '@/components/destinations/DestinationHero'
import FeaturedJourneys from '@/components/destinations/FeaturedJourneys'
import ExploreParks from '@/components/destinations/ExploreParks'
import NationalParksList from '@/components/destinations/NationalParksList'
import PrivilegedAccess from '@/components/destinations/PrivilegedAccess'
import CuratedLodges from '@/components/destinations/CuratedLodges'
import BespokeJourneyCTA from '@/components/destinations/BespokeJourneyCTA'
import SeoKeywords from '@/components/destinations/SeoKeywords'

export default function DestinationCountry() {
  const { country: countrySlug } = useParams<{ country: string }>()
  const { country: data } = useCountry(countrySlug)

  if (!data) return <Navigate to="/destinations" replace />

  return (
    <>
      <DestinationHero title={data.heroTitle} subtitle={data.heroSubtitle} image={data.heroImage} />
      <FeaturedJourneys />
      <ExploreParks
        countryName={data.name}
        countrySlug={data.slug}
        intro={data.exploreIntro}
        summary={data.parkSummary}
        image={data.parkSummaryImage}
        parksHref="#national-parks"
      />
      <NationalParksList countrySlug={data.slug} parks={data.parks} />
      <PrivilegedAccess items={data.privilegedAccess} />
      <CuratedLodges lodges={data.lodges} />
      <BespokeJourneyCTA />
      <SeoKeywords keywords={data.seoKeywords} />
    </>
  )
}
