
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themeClass = isScrolled
    ? "bg-white/80 border-black/5 shadow-lg text-[#2D241E]"
    : "liquid-glass border-white/20 text-white";

  const logoSrc = isScrolled ? "/motionsblack.png" : "/MotionsLogo.png";

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
      <nav className={`rounded-full px-6 md:px-10 py-3 flex items-center justify-between w-full max-w-6xl backdrop-blur-xl border transition-all duration-300 ${themeClass}`}>
        <div className="flex items-center">
          <img src={logoSrc} alt="Motions Logo" className="h-8 w-auto transition-opacity duration-300" />
        </div>

        <div className={`hidden md:flex items-center gap-8 font-medium text-sm transition-colors duration-300 ${isScrolled ? "text-[#2D241E]/80" : "text-white/80"}`}>
          <a href="#services" className={`hover:text-current transition-colors tracking-tight ${isScrolled ? "hover:text-black" : "hover:text-white"}`}>Servicios</a>
          <a href="#how-it-works" className={`hover:text-current transition-colors tracking-tight ${isScrolled ? "hover:text-black" : "hover:text-white"}`}>Cómo Funciona</a>
          <a href="#projects" className={`hover:text-current transition-colors tracking-tight ${isScrolled ? "hover:text-black" : "hover:text-white"}`}>Proyectos</a>
          <a href="#contact" className={`hover:text-current transition-colors tracking-tight ${isScrolled ? "hover:text-black" : "hover:text-white"}`}>Contacto</a>
        </div>

        <div className="flex items-center gap-3">
          <button className={`hidden sm:block px-5 py-2 rounded-full border text-sm font-medium transition-all tracking-tight ${isScrolled ? "border-black/10 text-black/90 hover:bg-black/5" : "border-white/20 text-white/90 hover:bg-white/10"}`}>
            Agendar Llamada
          </button>
          <button className={`px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg tracking-tight liquid-glass-btn ${isScrolled ? "" : "border-white/20"}`}>
            Empezar Ahora
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
