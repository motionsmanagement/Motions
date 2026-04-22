import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight, ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    setIsServicesOpen(false);
    document.body.style.overflow = 'auto'; // Reset on navigation
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const isWhiteBgPage = location.pathname !== '/';
  const showDarkNavbar = isScrolled || isWhiteBgPage || isMenuOpen;

  // Navigate to home section (works from any sub-page)
  const handleNavToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    }
    setIsMenuOpen(false);
  };

  const themeClass = showDarkNavbar
    ? "bg-white/80 border-black/5 shadow-lg text-[#2D241E]"
    : "liquid-glass border-white/20 text-white";

  const logoSrc = showDarkNavbar ? "/motionsblack.png" : "/MotionsLogo.png";

  const navLinks = [
    { name: "Servicios", href: "/#servicios", section: "servicios" },
    { name: "Nuestra Especialidad", href: "/#trabajos", section: "trabajos" },
    { name: "Proyectos", href: "/#proyectos", section: "proyectos" },
    { name: "Contacto", href: "/#contacto", section: "contacto" },
  ];

  const services = [
    { name: "SEO Local", href: "/servicios/seo-local" },
    { name: "Diseño Web", href: "/servicios/diseno-web-restaurantes" },
    { name: "Branding", href: "/servicios/branding-restaurantes" },
    { name: "Integración IA", href: "/servicios/integracion-ia" },
    { name: "Estrategia Digital", href: "/servicios/estrategia-digital" },
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
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavToSection(link.section)}
                className={`hover:text-current transition-colors tracking-tight ${showDarkNavbar ? "hover:text-black" : "hover:text-white"}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            {/* Desktop CTAs */}
            <a href="tel:+34919610420" className={`hidden lg:block px-6 py-2 rounded-full border text-xs md:text-sm font-medium transition-all tracking-tight ${showDarkNavbar ? "border-black/10 text-black/90 hover:bg-black/5" : "border-white/20 text-white/90 hover:bg-white/10"}`}>
              +34 919 61 04 20
            </a>
            <a
              href="/#contacto"
              onClick={handleNavToSection('contacto')}
              className={`hidden md:block px-6 md:px-7 py-2 rounded-full text-xs md:text-sm font-bold transition-all shadow-lg tracking-tight ${showDarkNavbar ? "bg-black text-white hover:bg-gray-800" : "bg-black/40 backdrop-blur-xl border border-white/30 text-white hover:bg-black/50"}`}
            >
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
      <div 
        className={`fixed inset-0 z-[100] bg-white md:hidden transition-all duration-[750ms] cubic-bezier(0.16,1,0.3,1) ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[101%] pointer-events-none'}`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        {/* Top Header inside Overlay */}
        <div className="absolute top-0 left-0 right-0 h-20 px-8 flex justify-between items-center bg-white z-20">
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

        <div className="flex flex-col h-full px-8 pt-24 pb-8 overflow-y-auto overflow-x-hidden scrollbar-hide">
          {/* Main Navigation Links */}
          <div className="flex flex-col gap-7 text-left mb-10">
            {navLinks.map((link, index) => {
              if (link.name === "Servicios") {
                return (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`text-[1.75rem] font-medium text-black tracking-tight flex items-center justify-between group transition-all duration-[800ms] ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={{ 
                        transitionDelay: isMenuOpen ? `${index * 80 + 150}ms` : '0ms',
                        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      {link.name}
                      <ChevronRight className={`w-6 h-6 text-black/20 transition-transform duration-500 ${isServicesOpen ? 'rotate-90' : ''}`} />
                    </button>
                    
                    <div className={`grid transition-all duration-500 ease-in-out ${isServicesOpen ? 'grid-rows-[1fr] mt-6 opacity-100' : 'grid-rows-[0fr] mt-0 opacity-0 pointer-events-none'}`}>
                      <div className="overflow-hidden">
                        <div className="flex flex-col gap-4 pl-4 border-l-2 border-black/5">
                          {services.map((service, sIndex) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="text-lg text-black/85 hover:text-black transition-colors py-1"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[1.75rem] font-medium text-black tracking-tight flex items-center justify-between group transition-all duration-[800ms] ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ 
                    transitionDelay: isMenuOpen ? `${index * 80 + 150}ms` : '0ms',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onClick={handleNavToSection(link.section)}
                >
                  {link.name}
                  <ArrowUpRight className="w-5 h-5 text-black/20 group-hover:text-black transition-transform" />
                </a>
              );
            })}
          </div>

          {/* Quick Choice Buttons & Banner with staggered reveal as well */}
          <div className={`transition-all duration-[800ms] delay-[400ms] ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <div className="flex gap-3 w-full mb-8">
              <a 
                href="https://wa.me/34919610420" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-2 rounded-full bg-black text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-2xl active:scale-95 transition-all text-center" 
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
                className="flex-1 py-3.5 px-2 rounded-full border border-black/10 text-black font-bold text-sm flex items-center justify-center shadow-sm active:scale-95 transition-all text-center tracking-tight" 
                onClick={() => setIsMenuOpen(false)}
              >
                +34 919 61 04 20
              </a>
            </div>

            {/* New Promo Banner Link */}
            <a 
              href="https://wa.me/34919610420" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-[3rem] overflow-hidden group block shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-black/[0.03] h-64 sm:h-72 mb-10"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src="/menuside.jpg" alt="Obtén Descuento" className="absolute inset-0 w-full h-full object-cover brightness-[0.7] group-hover:scale-105 transition-transform duration-[1.5s]" />
              
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-8 flex flex-col justify-end">
                <h4 className="text-white text-[1.85rem] font-bold leading-[1.05] tracking-tighter mb-6 px-1">
                  Obtén un 10% <br /> de descuento
                </h4>

                <div className="bg-white text-black rounded-full pl-6 pr-1.5 py-1.5 flex items-center justify-between gap-4 w-fit shadow-2xl backdrop-blur-md transition-all active:scale-95">
                  <span className="text-[12px] font-bold tracking-tight">Cajear cupón</span>
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                    <svg 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-4 h-4 transition-transform rotate-90"
                    >
                        <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
