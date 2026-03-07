import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-32 pb-10 px-6 md:px-12 border-t border-[#F1EFEA] font-['Inter'] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Headline Section */}
        <div className="mb-24">
          <h3 className="text-4xl md:text-6xl font-medium tracking-tighter text-[#111] max-w-2xl leading-[1.05]">
            Interested in working together, <span className="text-gray-400">trying or simply learning more?</span>
          </h3>
        </div>

        {/* Middle Information Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-32">
          {/* Contact Left */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Contacta con nosotros en:</span>
            <a href="mailto:info@motions.es" className="group flex items-center gap-2 text-xl md:text-2xl font-medium text-black hover:opacity-70 transition-opacity">
              info@motions.es
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Navigation Links Right */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <Link to="/#how-it-works" className="text-sm font-semibold text-black hover:opacity-60 transition-opacity">Cómo Funciona</Link>
            <Link to="/#services" className="text-sm font-semibold text-black hover:opacity-60 transition-opacity">Servicios</Link>
            <Link to="/#cases" className="text-sm font-semibold text-black hover:opacity-60 transition-opacity">Proyectos</Link>
            <Link to="/#contact" className="text-sm font-semibold text-black hover:opacity-60 transition-opacity">Contacto</Link>
          </div>
        </div>

        {/* Massive Brand Mark Section */}
        <div className="relative mb-8 pt-10 border-t border-gray-100/50">
          <div className="w-full flex justify-center">
            <h1 className="text-[15vw] md:text-[18vw] font-black text-black select-none tracking-tighter leading-none grayscale opacity-[0.03] absolute -bottom-8 md:-bottom-20 pointer-events-none">
              MOTIONS
            </h1>
            <img src="/motionsblack.png" alt="Motions Logo" className="w-[85%] md:w-[70%] h-auto opacity-100 relative z-10" />
          </div>
        </div>

        {/* Bottom Social & Legal Row */}
        <div className="mt-20 md:mt-32 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[11px] font-medium text-gray-400">
            <p>© {new Date().getFullYear()} Motions. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/aviso-legal" className="hover:text-black transition-colors">AVISO LEGAL</Link>
              <Link to="/privacidad" className="hover:text-black transition-colors">PRIVACIDAD</Link>
              <Link to="/cookies" className="hover:text-black transition-colors">COOKIES</Link>
            </div>
          </div>

          <div className="flex gap-8 text-[11px] font-bold text-black uppercase tracking-widest">
            <a href="#" className="hover:opacity-60 transition-all">Instagram</a>
            <a href="#" className="hover:opacity-60 transition-all">LinkedIn</a>
            <a href="#" className="hover:opacity-60 transition-all">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
