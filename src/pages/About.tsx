import AboutHero from '@/components/about/AboutHero'
import WhoWeAre from '@/components/about/WhoWeAre'
import WhatMakesDifferent from '@/components/about/WhatMakesDifferent'
import DmcServices from '@/components/about/DmcServices'
import BookingJourneySteps from '@/components/about/BookingJourneySteps'
import GuestReviews from '@/components/home/GuestReviews'

export default function About() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <WhatMakesDifferent />
      <DmcServices />
      <BookingJourneySteps />
      <GuestReviews />
    </>
  )
}
