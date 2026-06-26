import SEO from '@/components/SEO'
import StoriesHero from '@/components/stories/StoriesHero'
import FeaturedPosts from '@/components/stories/FeaturedPosts'
import AllArticles from '@/components/stories/AllArticles'
import InspiredCTA from '@/components/stories/InspiredCTA'

export default function Stories() {
  return (
    <>
      <SEO
        title="Safari Stories & Travel Journal"
        description="Read expert safari guides, gorilla trekking stories, destination insights and wildlife photography tips from the team at Still Wild Safaris."
        url="/stories"
      />
      <StoriesHero />
      <FeaturedPosts />
      <AllArticles />
      <InspiredCTA />
    </>
  )
}
