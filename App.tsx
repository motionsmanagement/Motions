import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Critical Components (Bundled with homepage)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import RecentWorks from './components/RecentWorks';
import SuccessStories from './components/SuccessStories';
import FinalCTA from './components/FinalCTA';
import AdBanner from './components/AdBanner';
import Footer from './components/Footer';

// Non-Critical Pages (Lazy Loaded)
const Careers = lazy(() => import('./components/Careers'));
const PrivacyPolicy = lazy(() => import('./components/legal/LegalPages').then(m => ({ default: m.PrivacyPolicy })));
const CookiesPolicy = lazy(() => import('./components/legal/LegalPages').then(m => ({ default: m.CookiesPolicy })));
const LegalNotice = lazy(() => import('./components/legal/LegalPages').then(m => ({ default: m.LegalNotice })));

// Service Pages (Lazy Loaded for SEO)
const GoogleMyBusinessPage = lazy(() => import('./components/services/GoogleMyBusiness'));
const DisenoWebPage = lazy(() => import('./components/services/DisenoWeb'));
const BrandingPage = lazy(() => import('./components/services/Branding'));
const IntegracionIAPage = lazy(() => import('./components/services/IntegracionIA'));
const SeoGastronomicoPage = lazy(() => import('./components/services/SeoGastronomico'));
const EstrategiaDigitalPage = lazy(() => import('./components/services/EstrategiaDigital'));

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      // Retry scroll: wait for lazy-loaded components to render
      const tryScroll = (attempts = 0) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts < 10) {
          setTimeout(() => tryScroll(attempts + 1), 100);
        }
      };
      setTimeout(() => tryScroll(), 100);
    }
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
        <RecentWorks />
        <AdBanner />
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
        <Suspense fallback={<div className="min-h-screen bg-[#FBF9F6]" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/unete" element={<Careers />} />
            <Route path="/privacidad" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiesPolicy />} />
            <Route path="/aviso-legal" element={<LegalNotice />} />
            {/* Service Pages - SEO Silos */}
            <Route path="/servicios/google-my-business" element={<GoogleMyBusinessPage />} />
            <Route path="/servicios/diseno-web-restaurantes" element={<DisenoWebPage />} />
            <Route path="/servicios/branding-restaurantes" element={<BrandingPage />} />
            <Route path="/servicios/integracion-ia" element={<IntegracionIAPage />} />
            <Route path="/servicios/seo-gastronomico" element={<SeoGastronomicoPage />} />
            <Route path="/servicios/estrategia-digital" element={<EstrategiaDigitalPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
