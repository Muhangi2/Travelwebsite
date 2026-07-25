import { useParams, Navigate } from 'react-router-dom'
import { useCountry } from '@/sanity/destinations'
import SEO from '@/components/SEO'
import DestinationHero from '@/components/destinations/DestinationHero'
import DestinationStatBar from '@/components/destinations/DestinationStatBar'
import DestinationNavTabs from '@/components/destinations/DestinationNavTabs'
import WhyVisit from '@/components/destinations/WhyVisit'
import WhenToGo from '@/components/destinations/WhenToGo'
import SpecialistQuote from '@/components/destinations/SpecialistQuote'
import WhereToGo from '@/components/destinations/WhereToGo'
import JourneysCarousel from '@/components/ui/JourneysCarousel'
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
      <SEO
        title={`${data.name} Safaris`}
        description={data.heroSubtitle}
        image={data.heroImage}
        url={`/destinations/${data.slug}`}
      />

      {/* Hero */}
      <DestinationHero title={data.heroTitle} subtitle={data.heroSubtitle} image={data.heroImage} />

      {/* Stats bar */}
      <DestinationStatBar stats={data.travelStats} />

      {/* Sticky section tab nav */}
      <DestinationNavTabs />

      {/* 01 Why [Country] */}
      <WhyVisit countryName={data.name} data={data.whyVisit} />

      {/* 02 When to Go */}
      <WhenToGo countryName={data.name} seasons={data.seasons} />

      {/* Specialist quote uses last park image */}
      <SpecialistQuote
        data={data.specialistQuote}
        backgroundImage={data.parks.at(-1)?.image ?? data.heroImage}
      />

      {/* 03 Where to Go carousel uses heroImage */}
      <WhereToGo
        countryName={data.name}
        countrySlug={data.slug}
        parks={data.parks}
        backgroundImage={data.heroImage}
      />

      {/* Safari collections available in this country */}
      <JourneysCarousel
        countryFilter={data.name}
        eyebrow="Safari Collections"
        heading={`Journeys in ${data.name}`}
      />

      {/* 05 Unique Experiences */}
      <PrivilegedAccess items={data.privilegedAccess} />

      {/* 06 Curated Luxury Lodges */}
      <CuratedLodges lodges={data.lodges} />

      {/* 08 Conservation & Impact uses middle park's image */}
      <ConservationImpact
        countryName={data.name}
        data={data.conservation}
        backgroundImage={data.parks[Math.floor(data.parks.length / 2)]?.image ?? data.heroImage}
      />

      {/* 09 FAQ uses second lodge image */}
      <DestinationFAQ
        countryName={data.name}
        faqs={data.countryFaqs}
        backgroundImage={data.lodges[1]?.image ?? data.lodges[0]?.image}
      />

      {/* 10 Speak to a Specialist uses first lodge's image */}
      <BespokeJourneyCTA
        backgroundImage={data.lodges[0]?.image ?? data.heroImage}
      />

      <SeoKeywords keywords={data.seoKeywords} />
    </>
  )
}
