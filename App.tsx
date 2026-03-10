import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServicesBanner from './components/ServicesBanner';
import HowItWorks from './components/HowItWorks';
import SuccessStories from './components/SuccessStories';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

// Legal Pages
import { PrivacyPolicy, CookiesPolicy, LegalNotice } from './components/legal/LegalPages';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Disable browser's default scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const scrollToTop = () => {
      if (!hash) {
        window.scrollTo(0, 0);
      } else {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Small delay to ensure content is rendered and browser restoration is over
    const timer = setTimeout(scrollToTop, 100);
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ServicesBanner />
        <HowItWorks />
        <SuccessStories />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen selection:bg-gray-200 selection:text-black">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacidad" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
          <Route path="/aviso-legal" element={<LegalNotice />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
