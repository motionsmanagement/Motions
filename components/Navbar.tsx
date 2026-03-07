import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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

  const themeClass = isScrolled
    ? "bg-white/80 border-black/5 shadow-lg text-[#2D241E]"
    : "liquid-glass border-white/20 text-white";

  const logoSrc = isScrolled ? "/motionsblack.png" : "/MotionsLogo.png";

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

          <div className={`hidden md:flex items-center gap-8 font-medium text-sm transition-colors duration-300 ${isScrolled ? "text-[#2D241E]/80" : "text-white/80"}`}>
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className={`hover:text-current transition-colors tracking-tight ${isScrolled ? "hover:text-black" : "hover:text-white"}`}>
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <button className={`hidden lg:block px-4 md:px-5 py-2 rounded-full border text-xs md:text-sm font-medium transition-all tracking-tight ${isScrolled ? "border-black/10 text-black/90 hover:bg-black/5" : "border-white/20 text-white/90 hover:bg-white/10"}`}>
              Agendar Llamada
            </button>
            <button className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all shadow-lg tracking-tight ${isScrolled ? "bg-black text-white hover:bg-gray-800" : "bg-black/40 backdrop-blur-xl border border-white/30 text-white hover:bg-black/50"}`}>
              Empezar Ahora
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-1.5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-white transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-3xl font-medium text-black tracking-tight"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-4 w-full mt-8">
            <button className="w-full py-4 rounded-full bg-black text-white font-bold text-lg" onClick={() => setIsMenuOpen(false)}>
              Empezar Ahora
            </button>
            <button className="w-full py-4 rounded-full border border-black/10 text-black/60 font-semibold" onClick={() => setIsMenuOpen(false)}>
              Agendar Llamada
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
