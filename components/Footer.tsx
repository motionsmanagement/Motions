import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0A0A0A] pt-32 pb-10 px-6 md:px-12 font-['Inter'] overflow-hidden">
      {/* Noise Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] contrast-150 brightness-100 mix-blend-screen overflow-hidden">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[400%] h-[400%] absolute top-0 left-0">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Headline Section */}
        <div className="mb-24">
          <h3 className="text-4xl md:text-6xl font-medium tracking-tighter text-white max-w-2xl leading-[1.05]">
            Interested in working together, <span className="text-white/30">trying or simply learning more?</span>
          </h3>
        </div>

        {/* Middle Information Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-32">
          {/* Contact Left */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-bold text-white/30 uppercase tracking-widest">Contacta con nosotros en:</span>
            <a href="mailto:info@motions.es" className="group flex items-center gap-2 text-xl md:text-2xl font-medium text-white hover:text-white/70 transition-colors">
              info@motions.es
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Navigation Links Right */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <Link to="/#how-it-works" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">Cómo Funciona</Link>
            <Link to="/#services" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">Servicios</Link>
            <Link to="/#cases" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">Proyectos</Link>
            <Link to="/#contact" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">Contacto</Link>
          </div>
        </div>

        {/* Massive Brand Mark Section */}
        <div className="relative mb-8 pt-10 border-t border-white/5">
          <div className="w-full flex justify-center">
            <h1 className="text-[15vw] md:text-[18vw] font-black text-white select-none tracking-tighter leading-none absolute -bottom-8 md:-bottom-20 pointer-events-none opacity-[0.02]">
              MOTIONS
            </h1>
            <img src="/MotionsLogo.png" alt="Motions Logo" className="w-[85%] md:w-[70%] h-auto opacity-100 relative z-10" />
          </div>
        </div>

        {/* Bottom Social & Legal Row */}
        <div className="mt-20 md:mt-32 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[11px] font-medium text-white/30">
            <p>© {new Date().getFullYear()} Motions. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/aviso-legal" className="hover:text-white transition-colors">AVISO LEGAL</Link>
              <Link to="/privacidad" className="hover:text-white transition-colors">PRIVACIDAD</Link>
              <Link to="/cookies" className="hover:text-white transition-colors">COOKIES</Link>
            </div>
          </div>

          <div className="flex gap-8 text-[11px] font-bold text-white uppercase tracking-widest">
            <a href="#" className="hover:text-white/60 transition-all">Instagram</a>
            <a href="#" className="hover:text-white/60 transition-all">LinkedIn</a>
            <a href="#" className="hover:text-white/60 transition-all">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
