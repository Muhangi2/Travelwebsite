import SEO from '@/components/SEO'
import AboutHero from '@/components/about/AboutHero'
import WhoWeAre from '@/components/about/WhoWeAre'
import WhatMakesDifferent from '@/components/about/WhatMakesDifferent'
import DmcServices from '@/components/about/DmcServices'
import BookingJourneySteps from '@/components/about/BookingJourneySteps'
import GuestReviews from '@/components/home/GuestReviews'

export default function About() {
  return (
    <>
      <SEO
        title="Our Story — About Still Wild Safaris"
        description="Still Wild Safaris is a Uganda-based luxury safari company run by expert naturalists and local guides passionate about East Africa's wildlife and conservation."
        url="/about"
      />
      <AboutHero />
      <WhoWeAre />
      <WhatMakesDifferent />
      <DmcServices />
      <BookingJourneySteps />
      <GuestReviews />
    </>
  )
}
