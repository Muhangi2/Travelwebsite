import SEO from '@/components/SEO'
import WorkWithUsHero from '@/components/work-with-us/WorkWithUsHero'
import WhoWePartnerWith from '@/components/work-with-us/WhoWePartnerWith'
import WhyPartnerWithUs from '@/components/work-with-us/WhyPartnerWithUs'
import TalkWithAdvisor from '@/components/work-with-us/TalkWithAdvisor'
import GuestReviews from '@/components/home/GuestReviews'

export default function WorkWithUs() {
  return (
    <>
      <SEO
        title="Work With Us — Safari Trade & DMC Partners"
        description="Partner with Still Wild Safaris as a travel agent, tour operator or DMC. We offer competitive rates, expert ground support and bespoke itineraries across East Africa."
        url="/work-with-us"
      />
      <WorkWithUsHero />
      <WhoWePartnerWith />
      <WhyPartnerWithUs />
      <TalkWithAdvisor />
      <GuestReviews />
    </>
  )
}
