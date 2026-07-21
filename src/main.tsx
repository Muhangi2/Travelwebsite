import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { SpeedInsights } from '@vercel/speed-insights/react'
import './index.css'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
// Keep the first visit focused on the current page. In particular, maps and the
// Sanity Studio must not be downloaded by visitors who land on the homepage.
const SafariCollections = lazy(() => import('@/pages/SafariCollections'))
const SafariCollectionDetail = lazy(() => import('@/pages/SafariCollectionDetail'))
const SafariDayDetail = lazy(() => import('@/pages/SafariDayDetail'))
const Destinations = lazy(() => import('@/pages/Destinations'))
const DestinationCountry = lazy(() => import('@/pages/DestinationCountry'))
const NationalPark = lazy(() => import('@/pages/NationalPark'))
const About = lazy(() => import('@/pages/About'))
const KnowBeforeYouGo = lazy(() => import('@/pages/KnowBeforeYouGo'))
const WorkWithUs = lazy(() => import('@/pages/WorkWithUs'))
const RegenerativeTravel = lazy(() => import('@/pages/RegenerativeTravel'))
const Stories = lazy(() => import('@/pages/Stories'))
const StoryDetail = lazy(() => import('@/pages/StoryDetail'))
const ExperienceDetail = lazy(() => import('@/pages/ExperienceDetail'))
const Contact = lazy(() => import('@/pages/Contact'))
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'))
const StudioPage = lazy(() => import('@/pages/StudioPage'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path="/studio/*"
          element={
            <Suspense fallback={<div style={{ padding: 24 }}>Loading Studio…</div>}>
              <StudioPage />
            </Suspense>
          }
        />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route element={<Suspense fallback={null} />}>
            <Route path="/safari-collections" element={<SafariCollections />} />
            <Route path="/safari-collections/:slug" element={<SafariCollectionDetail />} />
            <Route path="/safari-collections/:slug/day/:day" element={<SafariDayDetail />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:country" element={<DestinationCountry />} />
            <Route path="/destinations/:country/:park" element={<NationalPark />} />
            <Route path="/about" element={<About />} />
            <Route path="/know-before-you-go" element={<KnowBeforeYouGo />} />
            <Route path="/regenerative-travel" element={<RegenerativeTravel />} />
            <Route path="/work-with-us" element={<WorkWithUs />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:slug" element={<StoryDetail />} />
            <Route path="/experiences/:slug" element={<ExperienceDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Route>
        </Route>
      </Routes>
      <SpeedInsights />
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
