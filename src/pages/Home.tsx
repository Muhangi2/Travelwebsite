import Hero from '@/components/home/Hero'
import IntroQuote from '@/components/home/IntroQuote'
import SafariCollection from '@/components/home/SafariCollection'
import HowWeCraft from '@/components/home/HowWeCraft'
import Difference from '@/components/home/Difference'
import DestinationsTeaser from '@/components/home/DestinationsTeaser'
import TeamCTA from '@/components/home/TeamCTA'
import Stories from '@/components/home/Stories'
import StoriesCarousel from '@/components/home/StoriesCarousel'
import GuestReviews from '@/components/home/GuestReviews'
import BeginYourLegacy from '@/components/home/BeginYourLegacy'

export default function Home() {
  return (
    <>
      <Hero />
      <IntroQuote />
      <SafariCollection />
      <HowWeCraft />
      <Difference />
      <DestinationsTeaser />
      <StoriesCarousel />
      <TeamCTA />
      <Stories />
      <GuestReviews />
      <BeginYourLegacy />
    </>
  )
}
