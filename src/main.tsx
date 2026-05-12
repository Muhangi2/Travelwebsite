import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import SafariCollections from '@/pages/SafariCollections'
import SafariCollectionDetail from '@/pages/SafariCollectionDetail'
import Destinations from '@/pages/Destinations'
import DestinationCountry from '@/pages/DestinationCountry'
import NationalPark from '@/pages/NationalPark'
import About from '@/pages/About'
import MeetTheTeam from '@/pages/MeetTheTeam'
import KnowBeforeYouGo from '@/pages/KnowBeforeYouGo'
import WorkWithUs from '@/pages/WorkWithUs'
import Stories from '@/pages/Stories'
import StoryDetail from '@/pages/StoryDetail'
import ExperienceDetail from '@/pages/ExperienceDetail'
import Contact from '@/pages/Contact'
import PrivacyPolicy from '@/pages/PrivacyPolicy'

const StudioPage = lazy(() => import('@/pages/StudioPage'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
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
          <Route path="/safari-collections" element={<SafariCollections />} />
          <Route path="/safari-collections/:slug" element={<SafariCollectionDetail />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:country" element={<DestinationCountry />} />
          <Route path="/destinations/:country/:park" element={<NationalPark />} />
          <Route path="/about" element={<About />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/know-before-you-go" element={<KnowBeforeYouGo />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:slug" element={<StoryDetail />} />
          <Route path="/experiences/:slug" element={<ExperienceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
