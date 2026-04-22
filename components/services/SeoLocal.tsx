import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, CheckCircle2, TrendingUp, Eye, MessageSquare } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import useSEO from './useSEO';
import ContactButton from './ContactButton';

const SeoLocalPage: React.FC = () => {
  useSEO({
    title: 'SEO Local para Restaurantes | Motions',
    description: 'Dominamos las búsquedas locales en Google Maps y SEO local para que tu restaurante sea siempre la primera opción en tu zona.',
    canonical: 'https://www.motions.es/servicios/seo-local',
  });

  const [visibleItems, setVisibleItems] = React.useState<{[key: string]: boolean}>({});
  const sectionRefs = React.useRef<{[key: string]: HTMLElement | null}>({});

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('data-section-id');
          if (id) {
            setVisibleItems(prev => ({ ...prev, [id]: entry.isIntersecting }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const isVisible = (id: string) => !!visibleItems[id];

  const benefits = [
    { icon: <MapPin className="w-5 h-5" />, title: 'Presencia Local Dominante', desc: 'Aparece en el "Pack de 3" de Google Maps cuando alguien busca restaurantes cerca.' },
    { icon: <Star className="w-5 h-5" />, title: 'Gestión de Reseñas', desc: 'Estrategia completa de captación y respuesta a reseñas para elevar tu reputación online.' },
    { icon: <TrendingUp className="w-5 h-5" />, title: 'SEO Local Avanzado', desc: 'Optimización técnica de tu ficha para superar a la competencia en búsquedas locales.' },
    { icon: <Eye className="w-5 h-5" />, title: 'Visibilidad Aumentada', desc: 'Publicaciones, fotos y ofertas optimizadas para que Google priorice tu negocio.' },
    { icon: <MessageSquare className="w-5 h-5" />, title: 'Atención al Cliente', desc: 'Configuración de mensajería directa para gestionar consultas desde Google.' },
    { icon: <CheckCircle2 className="w-5 h-5" />, title: 'Análisis de Rendimiento', desc: 'Informes mensuales con datos reales: cuántas personas te encuentran y cómo.' },
  ];

  const keywords = [
    'restaurante italiano madrid', 'mejor restaurante zona retiro', 'restaurante japonés barcelona',
    'restaurante para dsepedida', 'don de comer cerca de mi', 'restaurante con terraza madrid',
    'restaurante romántico barcelona', 'menú del día restaurante', 'reservar mesa restaurante',
    'restaurante sin gluten madrid', 'brunch madrid', 'restaurante de moda 2025',
  ];

  return (
    <>
      <Navbar />
      <main className="bg-[#F8F9FA] font-['Inter'] overflow-hidden">

        {/* Hero Section */}
        <section 
          ref={setRef('hero')} 
          data-section-id="hero"
          className="relative pt-32 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 overflow-hidden"
        >
          {/* Background Image with optimized Dark Overlay for section merging */}
          <div className="absolute inset-0 z-0">
            <img
              src="/motions102.jpg"
              alt="Motions SEO Local Background"
              className="w-full h-full object-cover brightness-[0.7]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-[#0A0A0A]"></div>
          </div>

          <div className={`relative z-10 max-w-7xl mx-auto flex flex-col items-center md:items-start text-center md:text-left transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="mb-8 pl-3.5 pr-2.5 py-2 bg-white/10 backdrop-blur-md rounded-full inline-flex items-center justify-center border border-white/20">
                <span className="text-[10px] font-bold text-white uppercase tracking-[0.15em] leading-none">
                  SEO Local & Maps
                </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-8 max-w-4xl">
              SEO Local <br className="hidden md:block" />
              para Restaurantes
            </h1>
            
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-10 max-w-2xl font-light px-4 md:px-0">
                Dominamos las búsquedas locales para que tu restaurante sea siempre la primera opción. Transformamos tu presencia en Google Maps en una herramienta de captación masiva.
            </p>

            <div className="flex flex-row items-center gap-3 w-full justify-center md:justify-start px-4 md:px-0">
              <ContactButton 
                label="Multiplicar reservas" 
                desktopLabel="Multiplicar las reservas de mi local" 
                className="bg-white text-black hover:bg-gray-100"
              />
              <Link 
                to="/" 
                className="px-4 py-2.5 md:px-6 md:py-3.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all text-[11px] md:text-[15px] flex items-center justify-center whitespace-nowrap"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section 
          ref={setRef('stats')} 
          data-section-id="stats"
          className="py-12 md:py-20 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden"
        >
          <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 relative z-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {[
              { num: '+180%', label: 'Aumento real de impresiones en el mapa local de tu zona.' },
              { num: 'Top 3', label: 'Garantía de aparición en las búsquedas clave de tu ciudad.' },
              { num: '+45%', label: 'Crecimiento estimado en llamadas y clics directos al local.' },
            ].map((s, i) => (
              <div key={i} className={`flex flex-col items-center justify-center md:px-12 ${i !== 0 ? 'md:border-l md:border-white/10' : ''}`}>
                <span className="text-4xl md:text-6xl font-light text-white tracking-tighter mb-2">{s.num}</span>
                <p className="text-white/60 text-[13px] md:text-base font-light max-w-[220px] text-center">
                    {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Grid */}
        <section 
          ref={setRef('benefits')} 
          data-section-id="benefits"
          className="py-20 md:py-32 px-6 md:px-12"
        >
          <div className="max-w-7xl mx-auto">
            <div className={`max-w-2xl mb-16 px-4 md:px-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible('benefits') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-6">
                    Optimización técnica para un mercado saturado.
                </h2>
                <p className="text-gray-600 text-base md:text-lg font-light">
                    No solo completamos tu perfil; aplicamos ingeniería de búsqueda para que Google te priorice frente a cualquier competidor cercano.
                </p>
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <div 
                  key={i} 
                  className={`group p-8 bg-white rounded-[2rem] border border-gray-100 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible('benefits') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} 
                  style={{ transitionDelay: isVisible('benefits') ? `${i * 100}ms` : '0ms' }}
                >
                  <div className="w-11 h-11 bg-[#F5F5F5] rounded-xl flex items-center justify-center text-black mb-6">
                    {b.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3 tracking-tight">{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Keywords Cloud Section */}
        <section 
          ref={setRef('keywords')} 
          data-section-id="keywords"
          className="py-20 md:py-32 bg-white border-y border-gray-100 overflow-hidden"
        >
          <div className={`max-w-4xl mx-auto mb-16 px-6 text-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible('keywords') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-6">
              Tu marca en cada búsqueda relevante.
            </h2>
            <p className="text-gray-500 text-sm md:text-lg font-light max-w-2xl mx-auto">
              Analizamos los términos de búsqueda con mayor intención de reserva para asegurar que tu restaurante lidere tu zona de influencia.
            </p>
          </div>
          
          <div className="relative group">
            {/* Fade gradients at edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            <div className="flex animate-marquee-fast hover:[animation-play-state:paused] gap-4 w-fit whitespace-nowrap px-4 py-2">
              {[...keywords, ...keywords].map((kw, i) => (
                <div key={i} className="px-8 py-4 bg-[#F8F9FA] border border-black/[0.03] rounded-2xl md:rounded-full text-sm md:text-lg text-black font-medium hover:bg-black hover:text-white transition-all duration-500 cursor-default shadow-sm select-none">
                  {kw}
                </div>
              ))}
            </div>
            
            <div className="flex animate-marquee-reverse-fast hover:[animation-play-state:paused] gap-4 w-fit whitespace-nowrap px-4 py-2 mt-4">
              {[...keywords, ...keywords].reverse().map((kw, i) => (
                <div key={i} className="px-8 py-4 bg-[#F8F9FA] border border-black/[0.03] rounded-2xl md:rounded-full text-sm md:text-lg text-black font-medium hover:bg-black hover:text-white transition-all duration-500 cursor-default shadow-sm select-none">
                  {kw}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium CTA */}
        <section 
          ref={setRef('cta')} 
          data-section-id="cta"
          className="pb-20 md:pb-32 px-6 md:px-12"
        >
          <div className={`max-w-7xl mx-auto transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible('cta') ? 'opacity-100 scale-100' : 'opacity-0 scale-95 translate-y-12'}`}>
            <div className="bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
                <div className="relative z-10 max-w-3xl flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight leading-[1.2]">
                        Si no apareces en el <span className="text-white/40">Top 3</span>, tus clientes están cenando en otro lugar.
                    </h2>
                    <p className="text-white/60 text-sm md:text-lg mb-10 font-light max-w-2xl leading-relaxed">
                        El 80% de las búsquedas gastronómicas se deciden en los primeros tres resultados de Google Maps. Asegura tu lugar hoy mismo.
                    </p>
                    <ContactButton
                        label="Comenzar Auditoría Local"
                        desktopLabel="Solicitar mi Auditoría Local Gratuita"
                        className="bg-white text-black hover:bg-gray-100"
                    />
                </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default SeoLocalPage;
