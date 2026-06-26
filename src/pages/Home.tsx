import SEO from '@/components/SEO'
import Hero from '@/components/home/Hero'
import IntroQuote from '@/components/home/IntroQuote'
import SafariCollection from '@/components/home/SafariCollection'
import HowWeCraft from '@/components/home/HowWeCraft'
import Difference from '@/components/home/Difference'
import DestinationsTeaser from '@/components/home/DestinationsTeaser'
import Stories from '@/components/home/Stories'
import StoriesCarousel from '@/components/home/StoriesCarousel'
import BeginYourLegacy from '@/components/home/BeginYourLegacy'

export default function Home() {
  return (
    <>
      <SEO
        title="Luxury Safaris in Uganda, Rwanda & Kenya"
        description="Still Wild Safaris designs bespoke luxury safari experiences in Uganda, Rwanda and Kenya. Gorilla trekking, Big Five game drives, and expert-guided wildlife journeys."
        url="/"
      />
      <Hero />
      <IntroQuote />
      <SafariCollection />
      <HowWeCraft />
      <Difference />
      <DestinationsTeaser />
      <StoriesCarousel />
      <Stories />
      <BeginYourLegacy />
    </>
  )
}
