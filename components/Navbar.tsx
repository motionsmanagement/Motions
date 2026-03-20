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
          {/* Main Navigation Links */}
          <div className="flex flex-col gap-8 text-left mb-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-3xl font-semibold text-black tracking-tight flex items-center justify-between group"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
                <ChevronRight className="w-5 h-5 text-black/20 group-hover:text-black transition-colors" />
              </Link>
            ))}
          </div>

          {/* Quick Choice Buttons - Restored Horizontal */}
          <div className="flex gap-3 w-full mb-10">
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

          {/* New Promo Banner */}
          <div className="relative mb-12 rounded-[2rem] overflow-hidden group">
            <img src="/promo_overlay.jpg" alt="Promo Promo" className="w-full h-40 object-cover brightness-75 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Oferta exclusiva</span>
              <h4 className="text-white text-2xl font-bold leading-tight">
                Obtén un 10% <br /> de descuento
              </h4>
            </div>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1">
              <span className="text-white text-[10px] font-bold">Limitado</span>
            </div>
          </div>

          {/* Support Buttons - Black & White Pills at Bottom */}
          <div className="mt-auto pt-8 border-t border-black/5">
            <div className="flex gap-2">
              <a 
                href="https://wa.me/34919610420" 
                className="flex-1 py-3 px-4 rounded-full bg-black text-white flex items-center justify-center gap-2 text-xs font-semibold active:opacity-80 transition-opacity"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                WhatsApp
              </a>
              <a 
                href="mailto:contacto@motions.es" 
                className="flex-1 py-3 px-4 rounded-full bg-black text-white flex items-center justify-center gap-2 text-xs font-semibold active:opacity-80 transition-opacity"
              >
                <Mail className="w-4 h-4 text-white/60" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
