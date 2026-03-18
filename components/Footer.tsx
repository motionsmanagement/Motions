import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 md:px-12 border-t border-[#F1EFEA] font-['Inter']">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Logo & About */}
          <div className="flex flex-col gap-8">
            <Link to="/">
              <img src="/motionsblack.png" alt="Motions Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-gray-500 text-base leading-relaxed max-w-xs">
              Dedicados al sector gastronómico, mejoramos tu presencia digital y convertimos clics en reservas.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h5 className="text-black font-semibold mb-8 text-sm uppercase tracking-widest">Servicios</h5>
            <ul className="space-y-4">
              <li><Link to="/#services" className="text-gray-600 hover:text-black transition-colors">Google My Business</Link></li>
              <li><Link to="/#services" className="text-gray-600 hover:text-black transition-colors">Diseño Web Premium</Link></li>
              <li><Link to="/#services" className="text-gray-600 hover:text-black transition-colors">Branding e Identidad</Link></li>
              <li><Link to="/#services" className="text-gray-600 hover:text-black transition-colors">Integración con IA</Link></li>
              <li><Link to="/#services" className="text-gray-600 hover:text-black transition-colors">SEO Gastronómico</Link></li>
              <li><Link to="/#services" className="text-gray-600 hover:text-black transition-colors">Estrategia Digital</Link></li>
            </ul>
          </div>

          {/* Navegación */}
          <div>
            <h5 className="text-black font-semibold mb-8 text-sm uppercase tracking-widest">Navegación</h5>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">Inicio</Link></li>
              <li><Link to="/#how-it-works" className="text-gray-600 hover:text-black transition-colors">Metodología</Link></li>
              <li><Link to="/#cases" className="text-gray-600 hover:text-black transition-colors">Proyectos</Link></li>
              <li><Link to="/#contact" className="text-gray-600 hover:text-black transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h5 className="text-black font-semibold mb-8 text-sm uppercase tracking-widest">Contacto</h5>
            <ul className="space-y-4">
              <li className="space-y-4">
                <div className="flex items-start gap-3 text-gray-600">
                  <Mail className="w-4 h-4 mt-1 shrink-0" />
                  <div className="grid gap-4">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">General</span>
                      <a href="mailto:contacto@motions.es" className="text-gray-600 hover:text-black transition-colors">contacto@motions.es</a>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Ventas</span>
                      <a href="mailto:ventas@motions.es" className="text-gray-600 hover:text-black transition-colors">ventas@motions.es</a>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Soporte</span>
                      <a href="mailto:clientes@motions.es" className="text-gray-600 hover:text-black transition-colors">clientes@motions.es</a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Phone className="w-4 h-4 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Llámanos</span>
                  <a href="tel:+919610420" className="text-gray-600 hover:text-black transition-colors font-medium">+919 61 04 20</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-4 h-4 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Localización</span>
                  <span className="text-gray-600">Madrid, España</span>
                </div>
              </li>
              <li className="pt-4">
                <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full text-xs font-semibold hover:bg-gray-800 transition-all">
                  <MessageCircle className="w-4 h-4" />
                  Agendar consulta
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-8 text-gray-400 text-[10px] sm:text-[11px] font-normal uppercase tracking-[0.15em]">
          <p className="text-center md:text-left">© {new Date().getFullYear()} Motions. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <Link to="/aviso-legal" className="hover:text-black transition-colors">Aviso Legal</Link>
            <Link to="/privacidad" className="hover:text-black transition-colors">Privacidad</Link>
            <Link to="/cookies" className="hover:text-black transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
