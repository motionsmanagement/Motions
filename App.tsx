
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
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#4A3728] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <Team />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
