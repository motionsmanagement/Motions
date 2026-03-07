import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, MessageCircle, Mail, MapPin } from 'lucide-react';

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
              Especialistas en marketing digital estratégico para el sector gastronómico. Elevamos la presencia de tu restaurante y convertimos clics en reservas.
            </p>
            <div className="flex gap-5">
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Soluciones */}
          <div>
            <h5 className="text-black font-semibold mb-8 text-sm uppercase tracking-widest">Soluciones</h5>
            <ul className="space-y-4">
              <li><Link to="/#services" className="text-gray-600 hover:text-black transition-colors">Google My Business</Link></li>
              <li><Link to="/#services" className="text-gray-600 hover:text-black transition-colors">SEO Local</Link></li>
              <li><Link to="/#services" className="text-gray-600 hover:text-black transition-colors">Diseño Web Gourmet</Link></li>
              <li><Link to="/#services" className="text-gray-600 hover:text-black transition-colors">Ads para Restaurantes</Link></li>
            </ul>
          </div>

          {/* Navegación */}
          <div>
            <h5 className="text-black font-semibold mb-8 text-sm uppercase tracking-widest">Navegación</h5>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">Inicio</Link></li>
              <li><Link to="/#how-it-works" className="text-gray-600 hover:text-black transition-colors">Metodología</Link></li>
              <li><Link to="/#cases" className="text-gray-600 hover:text-black transition-colors">Casos de Éxito</Link></li>
              <li><Link to="/#contact" className="text-gray-600 hover:text-black transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h5 className="text-black font-semibold mb-8 text-sm uppercase tracking-widest">Contacto</h5>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>info@motions.es</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Madrid, España</span>
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

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400 text-[13px] font-medium">
          <p>© {new Date().getFullYear()} Motions. Especialistas en Marketing Gastronómico.</p>
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
