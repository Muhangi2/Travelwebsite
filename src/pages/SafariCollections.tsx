import SEO from '@/components/SEO'
import CollectionsHero from '@/components/collections/CollectionsHero'
import CollectionsIntro from '@/components/collections/CollectionsIntro'
import CollectionsGrid from '@/components/collections/CollectionsGrid'
import GuestReviews from '@/components/home/GuestReviews'

export default function SafariCollections() {
  return (
    <>
      <SEO
        title="Safari Collections — Bespoke Uganda & East Africa Safaris"
        description="Browse our curated safari packages in Uganda, Rwanda and Kenya. From gorilla trekking circuits to Big Five game drives — each itinerary is crafted for discerning travellers."
        url="/safari-collections"
      />
      <CollectionsHero />
      <CollectionsIntro />
      <CollectionsGrid />
      <GuestReviews />
    </>
  )
}
