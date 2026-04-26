import { useParams, Navigate } from 'react-router-dom'
import { countries } from '@/data/destinations'
import DestinationHero from '@/components/destinations/DestinationHero'
import FeaturedJourneys from '@/components/destinations/FeaturedJourneys'
import ExploreParks from '@/components/destinations/ExploreParks'
import NationalParksList from '@/components/destinations/NationalParksList'
import PrivilegedAccess from '@/components/destinations/PrivilegedAccess'
import CuratedLodges from '@/components/destinations/CuratedLodges'
import BespokeJourneyCTA from '@/components/destinations/BespokeJourneyCTA'
import SeoKeywords from '@/components/destinations/SeoKeywords'

export default function DestinationCountry() {
  const { country } = useParams<{ country: string }>()
  const data = country ? countries[country] : undefined

  if (!data) return <Navigate to="/destinations" replace />

  return (
    <>
      <DestinationHero title={data.heroTitle} subtitle={data.heroSubtitle} image={data.heroImage} />
      <FeaturedJourneys />
      <ExploreParks
        countryName={data.name}
        intro={data.exploreIntro}
        summary={data.parkSummary}
        image={data.parkSummaryImage}
      />
      <NationalParksList countrySlug={data.slug} parks={data.parks} />
      <PrivilegedAccess items={data.privilegedAccess} />
      <CuratedLodges lodges={data.lodges} />
      <BespokeJourneyCTA />
      <SeoKeywords keywords={data.seoKeywords} />
    </>
  )
}
