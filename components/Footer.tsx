import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0A0A0A] pt-32 pb-0 px-6 md:px-12 font-['Inter'] overflow-hidden rounded-t-[3.5rem] md:rounded-t-[5rem] mt-20">
      {/* Noise Overlay - consistent with premium dark cards */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] contrast-150 brightness-100 mix-blend-screen overflow-hidden">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[400%] h-[400%] absolute top-0 left-0">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content: Anagram + Columns */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-32 mb-20 md:mb-32">
          {/* Anagram Square */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center overflow-hidden backdrop-blur-md">
              <img src="/anagram.png" alt="Anagram" className="w-7 h-7 object-contain opacity-80" />
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24">
            <div>
              <h5 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-8">Navegación</h5>
              <ul className="space-y-4">
                <li><Link to="/" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Inicio</Link></li>
                <li><Link to="/#services" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Servicios</Link></li>
                <li><Link to="/#how-it-works" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Metodología</Link></li>
                <li><Link to="/#cases" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Proyectos</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-8">Legales</h5>
              <ul className="space-y-4">
                <li><Link to="/aviso-legal" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Aviso Legal</Link></li>
                <li><Link to="/privacidad" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Privacidad</Link></li>
                <li><Link to="/cookies" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Cookies</Link></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h5 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-8">Social</h5>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">Instagram</a></li>
                <li><a href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">LinkedIn</a></li>
                <li><a href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">TikTok</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Massive Brand Logo Section - Positioned to be cut at the bottom */}
        <div className="relative">
          <div className="w-full flex justify-center">
            {/* Watermark خلفية */}
            <h1 className="text-[20vw] font-black text-white select-none tracking-tighter leading-none absolute -bottom-[5vw] pointer-events-none opacity-[0.02] blur-[2px]">
              MOTIONS
            </h1>
            <img
              src="/MotionsLogo.png"
              alt="Motions Logo Full"
              className="w-full h-auto opacity-100 relative z-10 translate-y-[15%] md:translate-y-[25%] pointer-events-none"
            />
          </div>
        </div>

        {/* Minimal Copyright Row - Moved above the logo for better visibility if needed, or kept very minimal */}
        <div className="relative z-20 pb-12 flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 text-[9px] font-medium text-white/20 uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} Motions Marketing. All rights reserved.</p>
          <p className="mt-4 md:mt-0 font-bold opacity-30">Specialized Agency</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
