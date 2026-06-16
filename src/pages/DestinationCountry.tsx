import { useParams, Navigate } from 'react-router-dom'
import { useCountry } from '@/sanity/destinations'
import DestinationHero from '@/components/destinations/DestinationHero'
import DestinationStatBar from '@/components/destinations/DestinationStatBar'
import WhyVisit from '@/components/destinations/WhyVisit'
import WhenToGo from '@/components/destinations/WhenToGo'
import SpecialistQuote from '@/components/destinations/SpecialistQuote'
import WhereToGo from '@/components/destinations/WhereToGo'
import NationalParksList from '@/components/destinations/NationalParksList'
import PrivilegedAccess from '@/components/destinations/PrivilegedAccess'
import CuratedLodges from '@/components/destinations/CuratedLodges'
import ConservationImpact from '@/components/destinations/ConservationImpact'
import DestinationFAQ from '@/components/destinations/DestinationFAQ'
import BespokeJourneyCTA from '@/components/destinations/BespokeJourneyCTA'
import SeoKeywords from '@/components/destinations/SeoKeywords'

export default function DestinationCountry() {
  const { country: countrySlug } = useParams<{ country: string }>()
  const { country: data } = useCountry(countrySlug)

  if (!data) return <Navigate to="/destinations" replace />

  return (
    <>
      {/* Hero */}
      <DestinationHero title={data.heroTitle} subtitle={data.heroSubtitle} image={data.heroImage} />

      {/* Stats bar — bestTime, duration, wildlife, travel style */}
      <DestinationStatBar stats={data.travelStats} />

      {/* 01 Why [Country] */}
      <WhyVisit countryName={data.name} data={data.whyVisit} />

      {/* 02 When to Go — seasonal guide */}
      <WhenToGo countryName={data.name} seasons={data.seasons} />

      {/* Specialist quote */}
      <SpecialistQuote data={data.specialistQuote} />

      {/* 03 Where to Go — parks overview table */}
      <WhereToGo countryName={data.name} countrySlug={data.slug} parks={data.parks} />

      {/* Individual park detail cards */}
      <NationalParksList countrySlug={data.slug} parks={data.parks} />

      {/* 05 Unique Experiences / Privileged Access */}
      <PrivilegedAccess items={data.privilegedAccess} />

      {/* 06 Curated Luxury Lodges */}
      <CuratedLodges lodges={data.lodges} />

      {/* 08 Conservation & Impact */}
      <ConservationImpact countryName={data.name} data={data.conservation} />

      {/* 09 FAQ */}
      <DestinationFAQ countryName={data.name} faqs={data.countryFaqs} />

      {/* 10 Speak to a Specialist */}
      <BespokeJourneyCTA />

      <SeoKeywords keywords={data.seoKeywords} />
    </>
  )
}
