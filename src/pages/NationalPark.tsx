import { useParams, Navigate } from 'react-router-dom'
import { useCountry } from '@/sanity/destinations'
import SEO from '@/components/SEO'
import ParkHero from '@/components/national-park/ParkHero'
import ParkOverview from '@/components/national-park/ParkOverview'
import WhyVisit from '@/components/national-park/WhyVisit'
import KeyAttractions from '@/components/national-park/KeyAttractions'
import TopActivities from '@/components/national-park/TopActivities'
import GettingThere from '@/components/national-park/GettingThere'
import WhereToStay from '@/components/national-park/WhereToStay'
import PracticalInfo from '@/components/national-park/PracticalInfo'
import Faq from '@/components/national-park/Faq'

export default function NationalPark() {
  const { country: countrySlug, park } = useParams<{ country: string; park: string }>()
  const { country: countryData } = useCountry(countrySlug)
  const parkData = countryData?.parks.find((p) => p.slug === park)

  if (!countryData || !parkData) {
    return <Navigate to={countrySlug ? `/destinations/${countrySlug}` : '/destinations'} replace />
  }

  return (
    <>
      <SEO
        title={`${parkData.name} — ${countryData.name}`}
        description={parkData.blurb}
        image={parkData.image}
        url={`/destinations/${countrySlug}/${park}`}
      />

      <ParkHero name={parkData.name} blurb={parkData.blurb} image={parkData.image} />
      {parkData.overview && <ParkOverview park={parkData} />}
      {parkData.whyVisit && parkData.whyVisit.length > 0 && <WhyVisit items={parkData.whyVisit} />}
      {parkData.attractions.length > 0 && <KeyAttractions items={parkData.attractions} />}
      {parkData.activities.length > 0 && <TopActivities items={parkData.activities} />}
      {parkData.gettingThere && <GettingThere text={parkData.gettingThere} />}
      {parkData.whereToStay && parkData.whereToStay.length > 0 && <WhereToStay categories={parkData.whereToStay} />}
      {parkData.practicalInfo && parkData.practicalInfo.length > 0 && <PracticalInfo items={parkData.practicalInfo} />}
      {parkData.faqs.length > 0 && <Faq items={parkData.faqs} />}
    </>
  )
}
