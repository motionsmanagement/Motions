import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, MessageCircle, Mail } from 'lucide-react';

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

  // Close menu on navigation and handle body scroll
  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto'; // Reset on navigation
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const isLegalPage = ['/privacidad', '/cookies', '/aviso-legal'].includes(location.pathname);
  const showDarkNavbar = isScrolled || isLegalPage || isMenuOpen;

  const themeClass = showDarkNavbar
    ? "bg-white/80 border-black/5 shadow-lg text-[#2D241E]"
    : "liquid-glass border-white/20 text-white";

  const logoSrc = showDarkNavbar ? "/motionsblack.png" : "/MotionsLogo.png";

  const navLinks = [
    { name: "Servicios", href: "/#servicios" },
    { name: "Trabajos", href: "/#trabajos" },
    { name: "Proyectos", href: "/#proyectos" },
    { name: "Contacto", href: "/#contacto" },
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
              <a key={link.name} href={link.href} className={`hover:text-current transition-colors tracking-tight ${showDarkNavbar ? "hover:text-black" : "hover:text-white"}`}>
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            {/* Desktop CTAs */}
            <a href="tel:+34919610420" className={`hidden lg:block px-6 py-2 rounded-full border text-xs md:text-sm font-medium transition-all tracking-tight ${showDarkNavbar ? "border-black/10 text-black/90 hover:bg-black/5" : "border-white/20 text-white/90 hover:bg-white/10"}`}>
              +34 919 61 04 20
            </a>
            <a href="#contacto" className={`hidden md:block px-6 md:px-7 py-2 rounded-full text-xs md:text-sm font-bold transition-all shadow-lg tracking-tight ${showDarkNavbar ? "bg-black text-white hover:bg-gray-800" : "bg-black/40 backdrop-blur-xl border border-white/30 text-white hover:bg-black/50"}`}>
              Empezar Ahora
            </a>

            {/* Mobile CTAs (Direct to WhatsApp) */}
            <a href="https://wa.me/34919610420" className={`md:hidden px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-lg tracking-tight ${showDarkNavbar ? "bg-black text-white hover:bg-gray-800" : "bg-black/40 backdrop-blur-xl border border-white/30 text-white hover:bg-black/50"}`}>
              Empezar Ahora
            </a>

            {/* Mobile Menu Toggle */}
            <button
              aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
              aria-expanded={isMenuOpen}
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
        {/* Top Header inside Overlay */}
        <div className="absolute top-0 left-0 right-0 h-20 px-8 flex justify-between items-center bg-white border-b border-black/[0.03]">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src="/motionsblack.png" alt="Motions Logo" className="h-7 w-auto" />
          </Link>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="p-2 -mr-2 text-black hover:opacity-70 transition-opacity"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        <div className="flex flex-col h-full px-8 pt-24 pb-8 overflow-hidden">
          {/* Main Navigation Links */}
          <div className="flex flex-col gap-9 text-left mb-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-3xl font-semibold text-black tracking-tight flex items-center justify-between group"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
                <ChevronRight className="w-5 h-5 text-black/20 group-hover:text-black transition-colors" />
              </a>
            ))}
          </div>

          {/* Quick Choice Buttons */}
          <div className="flex gap-3 w-full mb-8">
            <a 
              href="https://wa.me/34919610420" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 px-2 rounded-full bg-black text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-2xl active:scale-95 transition-all text-center" 
              onClick={() => setIsMenuOpen(false)}
            >
              Empezar Ahora
              <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-3.5 h-3.5 transition-transform rotate-90"
              >
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a 
              href="tel:+34919610420" 
              className="flex-1 py-4 px-2 rounded-full border border-black/10 text-black font-bold text-xs flex items-center justify-center shadow-sm active:scale-95 transition-all text-center tracking-tight" 
              onClick={() => setIsMenuOpen(false)}
            >
              +34 919 61 04 20
            </a>
          </div>

          {/* New Promo Banner - Linked to WhatsApp (Optimal visibility) */}
          <a 
            href="https://wa.me/34919610420" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 relative rounded-[2.5rem] overflow-hidden group block shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-black/[0.03]"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src="/menuside.jpg" alt="Obtén Descuento" className="absolute inset-0 w-full h-full object-cover brightness-[0.7] group-hover:scale-105 transition-transform duration-[1.5s]" />
            
            {/* Overlay Content - Bottom Aligned */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-7 flex flex-col justify-end">
              <h4 className="text-white text-[1.75rem] font-extrabold leading-[1.05] tracking-tight mb-5 px-1">
                Obtén un 10% <br /> de descuento
              </h4>

              {/* Premium Inverted Button Style Overlay */}
              <div className="bg-white/95 text-black rounded-full pl-5 pr-1.5 py-1.5 flex items-center justify-between gap-3 w-fit shadow-2xl backdrop-blur-md border border-black/5 ml-1">
                <span className="text-[11px] font-bold tracking-tight">Obtener ahora</span>
                <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
