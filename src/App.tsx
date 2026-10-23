import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

import Home from '@/pages/Home';
import About from '@/pages/About';
import OurStory from '@/pages/OurStory';
import Team from '@/pages/Team';
import Programmes from '@/pages/Programmes';
import ProgrammeDetail from '@/pages/ProgrammeDetail';
import Therapies from '@/pages/Therapies';
import TherapyDetail from '@/pages/TherapyDetail';
import Accommodation from '@/pages/Accommodation';
import AccommodationGuidelines from '@/pages/AccommodationGuidelines';
import Experiences from '@/pages/Experiences';
import Gallery from '@/pages/Gallery';
import Blog from '@/pages/Blog';
import BlogArticle from '@/pages/BlogArticle';
import Contact from '@/pages/Contact';
import PlanYourStay from '@/pages/PlanYourStay';
import FAQ from '@/pages/FAQ';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import Terms from '@/pages/Terms';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory px-6">
      <div className="text-center">
        <p className="font-serif text-8xl text-gold-400">404</p>
        <h1 className="font-serif text-3xl text-forest-700 mt-4">Page Not Found</h1>
        <p className="text-charcoal/60 mt-4 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <a href="/" className="btn-primary mt-8 inline-flex">
          Return Home
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-ivory">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/team" element={<Team />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/programmes/:slug" element={<ProgrammeDetail />} />
            <Route path="/therapies" element={<Therapies />} />
            <Route path="/therapies/:slug" element={<TherapyDetail />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/accommodation/guidelines" element={<AccommodationGuidelines />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/plan-your-stay" element={<PlanYourStay />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
