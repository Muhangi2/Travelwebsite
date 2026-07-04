import SEO from '@/components/SEO'
import RegenerativeTravelHero from '@/components/regenerative-travel/RegenerativeTravelHero'
import BeyondSustainability from '@/components/regenerative-travel/BeyondSustainability'
import WhyThisMatters from '@/components/regenerative-travel/WhyThisMatters'
import HowWePractiseIt from '@/components/regenerative-travel/HowWePractiseIt'
import HonestStartingPoint from '@/components/regenerative-travel/HonestStartingPoint'
import TravelOrPartnerCTA from '@/components/regenerative-travel/TravelOrPartnerCTA'

export default function RegenerativeTravel() {
  return (
    <>
      <SEO
        title="What Regenerative Travel Means to Us — Still Wild Safaris"
        description="Sustainability is the floor, regeneration is the goal. Discover how Still Wild Safaris builds carbon reduction, local-first hiring, and community impact into every Uganda and Rwanda itinerary."
        url="/regenerative-travel"
      />
      <RegenerativeTravelHero />
      <BeyondSustainability />
      <WhyThisMatters />
      <HowWePractiseIt />
      <HonestStartingPoint />
      <TravelOrPartnerCTA />
    </>
  )
}
