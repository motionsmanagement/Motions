import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isLegalPage = ['/privacidad', '/cookies', '/aviso-legal'].includes(location.pathname);
  const showDarkNavbar = isScrolled || isLegalPage || isMenuOpen;

  const themeClass = showDarkNavbar
    ? "bg-white/80 border-black/5 shadow-lg text-[#2D241E]"
    : "liquid-glass border-white/20 text-white";

  const logoSrc = showDarkNavbar ? "/motionsblack.png" : "/MotionsLogo.png";

  const navLinks = [
    { name: "Servicios", href: "/#services" },
    { name: "Cómo Funciona", href: "/#how-it-works" },
    { name: "Proyectos", href: "/#cases" },
    { name: "Contacto", href: "/#contact" },
  ];

  return (
    <>
      <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
        <nav className={`rounded-full px-4 md:px-10 py-2.5 md:py-3 flex items-center justify-between w-full max-w-6xl backdrop-blur-xl border transition-all duration-300 ${themeClass}`}>
          <div className="flex items-center">
            <Link to="/">
              <img src={logoSrc} alt="Motions Logo" className="h-7 md:h-8 w-auto transition-opacity duration-300" />
            </Link>
          </div>

          <div className={`hidden md:flex items-center gap-8 font-medium text-sm transition-colors duration-300 ${showDarkNavbar ? "text-[#2D241E]/80" : "text-white/80"}`}>
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className={`hover:text-current transition-colors tracking-tight ${showDarkNavbar ? "hover:text-black" : "hover:text-white"}`}>
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            {/* Desktop CTAs */}
            <a href="tel:+34919610420" className={`hidden lg:block px-4 md:px-5 py-2 rounded-full border text-xs md:text-sm font-medium transition-all tracking-tight ${showDarkNavbar ? "border-black/10 text-black/90 hover:bg-black/5" : "border-white/20 text-white/90 hover:bg-white/10"}`}>
              +34 919 61 04 20
            </a>
            <a href="#contact" className={`hidden md:block px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all shadow-lg tracking-tight ${showDarkNavbar ? "bg-black text-white hover:bg-gray-800" : "bg-black/40 backdrop-blur-xl border border-white/30 text-white hover:bg-black/50"}`}>
              Empezar Ahora
            </a>

            {/* Mobile CTAs (Direct to WhatsApp) */}
            <a href="https://wa.me/34919610420" className={`md:hidden px-4 py-2 rounded-full text-xs font-semibold transition-all shadow-lg tracking-tight ${showDarkNavbar ? "bg-black text-white hover:bg-gray-800" : "bg-black/40 backdrop-blur-xl border border-white/30 text-white hover:bg-black/50"}`}>
              Empezar Ahora
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className={`md:hidden p-1.5 transition-colors ${(showDarkNavbar || isMenuOpen) ? "text-black" : "text-white"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[100] bg-white transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col h-full px-8 pt-24 pb-12 overflow-y-auto">
          {/* Main Navigation Links */}
          <div className="flex flex-col gap-8 text-left mb-16">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-4xl font-semibold text-black tracking-tight flex items-center justify-between group"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
                <ChevronRight className="w-6 h-6 text-black/20 group-hover:text-black transition-colors" />
              </Link>
            ))}
          </div>

          {/* Mobile CTAs - Horizontal & Smaller */}
          <div className="flex gap-3 w-full mb-12">
            <a 
              href="https://wa.me/34919610420" 
              className="flex-1 py-3.5 rounded-full bg-black text-white font-semibold text-sm text-center shadow-xl active:scale-95 transition-all" 
              onClick={() => setIsMenuOpen(false)}
            >
              Empezar Ahora
            </a>
            <a 
              href="tel:+34919610420" 
              className="flex-1 py-3.5 rounded-full border border-black/10 text-black font-semibold text-sm text-center active:scale-95 transition-all" 
              onClick={() => setIsMenuOpen(false)}
            >
              Llamar
            </a>
          </div>

          {/* Professional Footer Info */}
          <div className="mt-auto pt-8 border-t border-black/5">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 mb-4 text-left font-['Inter']">Información de contacto</p>
            <div className="flex flex-col gap-4 text-left">
              <a href="mailto:contacto@motions.es" className="text-black text-lg font-medium">contacto@motions.es</a>
              <p className="text-black/60 text-sm leading-relaxed max-w-[240px]">
                C. de la Princesa, 31, local 1, <br /> Moncloa - Aravaca, 28008 Madrid
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
