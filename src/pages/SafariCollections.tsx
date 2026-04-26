import CollectionsHero from '@/components/collections/CollectionsHero'
import CollectionsIntro from '@/components/collections/CollectionsIntro'
import CollectionsGrid from '@/components/collections/CollectionsGrid'
import TeamCTA from '@/components/home/TeamCTA'
import ReviewBadges from '@/components/home/ReviewBadges'
import GuestReviews from '@/components/home/GuestReviews'

export default function SafariCollections() {
  return (
    <>
      <CollectionsHero />
      <CollectionsIntro />
      <CollectionsGrid />
      <TeamCTA />
      <ReviewBadges />
      <GuestReviews />
    </>
  )
}
