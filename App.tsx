
import React, { useEffect } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  User,
  Users,
  HeartPulse,
  Crosshair,
  Brain,
  Award,
  Globe,
  Calendar,
  CheckCircle2,
  Instagram,
  Facebook,
  Linkedin,
  Clock
} from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServicesBanner from './components/ServicesBanner';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import SuccessStories from './components/SuccessStories';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-gray-200 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ServicesBanner />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <SuccessStories />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
