import { useParams, Navigate } from 'react-router-dom'
import { countries } from '@/data/destinations'
import ParkHero from '@/components/national-park/ParkHero'
import ParkOverview from '@/components/national-park/ParkOverview'
import KeyAttractions from '@/components/national-park/KeyAttractions'
import TopActivities from '@/components/national-park/TopActivities'
import Faq from '@/components/national-park/Faq'

export default function NationalPark() {
  const { country, park } = useParams<{ country: string; park: string }>()
  const countryData = country ? countries[country] : undefined
  const parkData = countryData?.parks.find((p) => p.slug === park)

  if (!countryData || !parkData) {
    return <Navigate to={country ? `/destinations/${country}` : '/destinations'} replace />
  }

  return (
    <>
      <ParkHero name={parkData.name} blurb={parkData.blurb} image={parkData.image} />
      {parkData.overview && <ParkOverview park={parkData} />}
      {parkData.attractions.length > 0 && <KeyAttractions items={parkData.attractions} />}
      {parkData.activities.length > 0 && <TopActivities items={parkData.activities} />}
      {parkData.faqs.length > 0 && <Faq items={parkData.faqs} />}
    </>
  )
}
