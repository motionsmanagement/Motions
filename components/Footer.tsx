import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={ref} className="bg-white pt-24 pb-12 px-6 md:px-12 border-t border-[#F1EFEA] font-['Inter']">
      <div className={`max-w-7xl mx-auto transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Logo & About */}
          <div className="flex flex-col gap-8">
            <Link to="/">
              <img src="/motionsblack.png" alt="Motions Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-gray-500 text-base leading-relaxed max-w-xs">
              Dedicados al sector gastronómico, mejoramos tu presencia digital y convertimos clics en reservas.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/motions.es" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-[#f3f4f1] border border-gray-200/50 flex items-center justify-center text-gray-500 hover:text-black hover:border-black/20 hover:scale-110 active:scale-95 transition-all shadow-sm"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h5 className="text-black font-semibold mb-8 text-sm uppercase tracking-widest">Servicios</h5>
            <ul className="space-y-4">
              <li><Link to="/#servicios" className="text-gray-600 hover:text-black transition-colors">Google My Business</Link></li>
              <li><Link to="/#servicios" className="text-gray-600 hover:text-black transition-colors">Diseño Web Premium</Link></li>
              <li><Link to="/#servicios" className="text-gray-600 hover:text-black transition-colors">Branding e Identidad</Link></li>
              <li><Link to="/#servicios" className="text-gray-600 hover:text-black transition-colors">Integración con IA</Link></li>
              <li><Link to="/#servicios" className="text-gray-600 hover:text-black transition-colors">SEO Gastronómico</Link></li>
              <li><Link to="/#servicios" className="text-gray-600 hover:text-black transition-colors">Estrategia Digital</Link></li>
            </ul>
          </div>

          {/* Navegación */}
          <div>
            <h5 className="text-black font-semibold mb-8 text-sm uppercase tracking-widest">Navegación</h5>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">Inicio</Link></li>
              <li><Link to="/unete" className="text-gray-600 hover:text-black transition-colors font-medium">Únete al equipo</Link></li>
              <li><Link to="/#proyectos" className="text-gray-600 hover:text-black transition-colors">Proyectos</Link></li>
              <li><Link to="/#contacto" className="text-gray-600 hover:text-black transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h5 className="text-black font-semibold mb-8 text-sm uppercase tracking-widest">Contacto</h5>
            <ul className="space-y-6">
              <li className="space-y-4">
                <div className="flex items-start text-gray-600">
                  <div className="grid gap-5">
                    <div className="flex flex-col items-start">
                      <span className="inline-flex px-2 py-0.5 rounded-full bg-[#f3f4f1] border border-gray-200/50 text-[8px] font-bold text-gray-500 uppercase tracking-widest mb-1 leading-none">General</span>
                      <a href="mailto:contacto@motions.es" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors text-base">contacto@motions.es</a>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="inline-flex px-2 py-0.5 rounded-full bg-[#f3f4f1] border border-gray-200/50 text-[8px] font-bold text-gray-500 uppercase tracking-widest mb-1 leading-none">Ventas</span>
                      <a href="mailto:ventas@motions.es" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors text-base">ventas@motions.es</a>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="inline-flex px-2 py-0.5 rounded-full bg-[#f3f4f1] border border-gray-200/50 text-[8px] font-bold text-gray-500 uppercase tracking-widest mb-1 leading-none">Soporte</span>
                      <a href="mailto:clientes@motions.es" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors text-base">clientes@motions.es</a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex items-start text-gray-600">
                <div className="flex flex-col items-start">
                  <span className="inline-flex px-2 py-0.5 rounded-full bg-[#f3f4f1] border border-gray-200/50 text-[8px] font-bold text-gray-500 uppercase tracking-widest mb-1 leading-none">Llamadas</span>
                  <a href="tel:+34919610420" className="text-gray-600 hover:text-black transition-colors text-base font-medium mb-3">
                    +34 919 61 04 20
                  </a>
                  <a 
                    href="https://wa.me/34919610420" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-5 py-2.5 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-all shadow-md group"
                  >
                    <img src="/anagram.png" alt="Motions Anagram" className="w-5 h-5 invert brightness-0" />
                    Mandar un mensaje
                  </a>
                </div>
              </li>
              <li className="flex items-start text-gray-600">
                <div className="flex flex-col items-start">
                  <span className="inline-flex px-2 py-0.5 rounded-full bg-[#f3f4f1] border border-gray-200/50 text-[8px] font-bold text-gray-500 uppercase tracking-widest mb-1 leading-none">Localización</span>
                  <span className="text-gray-600 text-base">Madrid, España</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-8 text-gray-400 text-[11px] sm:text-[12px] font-normal tracking-tight">
          <p className="text-center md:text-left">© {new Date().getFullYear()} Motions. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <Link to="/aviso-legal" className="hover:text-black transition-colors">Aviso legal</Link>
            <Link to="/privacidad" className="hover:text-black transition-colors">Privacidad</Link>
            <Link to="/cookies" className="hover:text-black transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
