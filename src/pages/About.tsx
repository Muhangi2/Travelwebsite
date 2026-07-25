import SEO from '@/components/SEO'
import AboutHero from '@/components/about/AboutHero'
import OurStory from '@/components/about/OurStory'
import WhatWeBelieve from '@/components/about/WhatWeBelieve'
import HowWeCutCarbon from '@/components/about/HowWeCutCarbon'
import WhereWeHeaded from '@/components/about/WhereWeHeaded'
import RegenerativeVsSustainable from '@/components/about/RegenerativeVsSustainable'
import GivingBackBuiltIn from '@/components/about/GivingBackBuiltIn'
import OurImpact from '@/components/about/OurImpact'
import AboutFAQ from '@/components/about/AboutFAQ'
import TravelWithUs from '@/components/about/TravelWithUs'

export default function About() {
  return (
    <>
      <SEO
        title="Our Story About Still Wild Safaris"
        description="Regenerative travel, born from a university dorm room. Learn how Still Wild Safaris builds carbon reduction and community impact into every East African safari itinerary."
        url="/about"
      />
      <AboutHero />
      <OurStory />
      <WhatWeBelieve />
      <HowWeCutCarbon />
      <WhereWeHeaded />
      <RegenerativeVsSustainable />
      <GivingBackBuiltIn />
      <OurImpact />
      <AboutFAQ />
      <TravelWithUs />
    </>
  )
}
