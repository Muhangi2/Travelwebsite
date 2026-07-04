import SEO from '@/components/SEO'
import WorkWithUsHero from '@/components/work-with-us/WorkWithUsHero'
import WorkWithUsIntro from '@/components/work-with-us/WorkWithUsIntro'
import WhereWeOperate from '@/components/work-with-us/WhereWeOperate'
import WhatWeHandle from '@/components/work-with-us/WhatWeHandle'
import WhyPartnerWithUs from '@/components/work-with-us/WhyPartnerWithUs'
import WhoWePartnerWith from '@/components/work-with-us/WhoWePartnerWith'
import PartnerWithOurNetwork from '@/components/work-with-us/PartnerWithOurNetwork'
import TalkWithAdvisor from '@/components/work-with-us/TalkWithAdvisor'

export default function WorkWithUs() {
  return (
    <>
      <SEO
        title="Work With Us — Safari Trade & DMC Partners"
        description="Partner with Still Wild Safaris as a travel agent, tour operator or DMC. We offer competitive rates, expert ground support and bespoke itineraries across East Africa."
        url="/work-with-us"
      />
      <WorkWithUsHero />
      <WorkWithUsIntro />
      <WhereWeOperate />
      <WhatWeHandle />
      <WhyPartnerWithUs />
      <WhoWePartnerWith />
      <PartnerWithOurNetwork />
      <TalkWithAdvisor />
    </>
  )
}
