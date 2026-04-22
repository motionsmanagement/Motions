import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Layers, Type, Image, Heart, Award } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import useSEO from './useSEO';
import ContactButton from './ContactButton';

const BrandingPage: React.FC = () => {
  useSEO({
    title: 'Branding e Identidad Visual para Restaurantes | Motions',
    description: 'Creamos la identidad visual que convierte tu restaurante en una marca reconocida. Logotipo, diseño de menús y materiales de marca premium.',
    canonical: 'https://www.motions.es/servicios/branding-restaurantes',
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

  const features = [
    { icon: <Palette className="w-5 h-5" />, title: 'Identidad Visual Completa', desc: 'Logotipo, paleta de colores, tipografías y sistema visual que diferencian tu marca.' },
    { icon: <Layers className="w-5 h-5" />, title: 'Manual de Marca', desc: 'Guía completa de uso de tu identidad para que siempre proyectes coherencia y profesionalidad.' },
    { icon: <Type className="w-5 h-5" />, title: 'Diseño de Menús', desc: 'Cartas y menús gastronómicos que reflejan tu concepto y elevan la experiencia del comensal.' },
    { icon: <Image className="w-5 h-5" />, title: 'Materiales Gráficos', desc: 'Tarjetas, flyers, packaging, señalética y todo lo que necesitas para una imagen impecable.' },
    { icon: <Heart className="w-5 h-5" />, title: 'Estrategia de Marca', desc: 'Definimos tu posicionamiento, valores y personalidad para diferenciarte en el mercado.' },
    { icon: <Award className="w-5 h-5" />, title: 'Branding para Redes', desc: 'Templates y recursos visuales para Instagram, Google y toda tu presencia digital.' },
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
              src="/Motions150.jpg"
              alt="Motions Branding Background"
              className="w-full h-full object-cover brightness-[0.7]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-[#0A0A0A]"></div>
          </div>

          <div className={`relative z-10 max-w-7xl mx-auto flex flex-col items-center md:items-start text-center md:text-left transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="mb-8 pl-3.5 pr-2.5 py-2 bg-white/10 backdrop-blur-md rounded-full inline-flex items-center justify-center border border-white/20">
                <span className="text-[10px] font-bold text-white uppercase tracking-[0.15em] leading-none">
                  Identidad & Concepto
                </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-8 max-w-4xl">
              Branding <br className="hidden md:block" />
              para Restaurantes
            </h1>
            
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-10 max-w-2xl font-light px-4 md:px-0">
                Construimos marcas memorables que capturan la esencia de tu cocina. No solo diseñamos logos; creamos ecosistemas visuales premium.
            </p>

            <div className="flex flex-row items-center gap-3 w-full justify-center md:justify-start px-4 md:px-0">
              <ContactButton 
                label="Crear mi marca" 
                desktopLabel="Crear una marca inolvidable para mi local"
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
              { num: '+40%', label: 'Aumento promedio en el valor percibido de la marca.' },
              { num: 'Top 10', label: 'Restaurantes con identidades coherentes lideran el mercado.' },
              { num: '100%', label: 'Coherencia visual en todos los puntos de contacto.' },
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

        {/* Features Grid */}
        <section 
          ref={setRef('features')} 
          data-section-id="features"
          className="py-20 md:py-32 px-6 md:px-12"
        >
          <div className="max-w-7xl mx-auto">
            <div className={`max-w-2xl mb-16 px-4 md:px-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-6">
                    Diferenciación real en un mundo visual.
                </h2>
                <p className="text-gray-600 text-base md:text-lg font-light">
                    Tus clientes te juzgan antes de probar el primer bocado. Nos aseguramos de que su primera impresión sea inmejorable.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div 
                  key={i} 
                  className={`group p-8 bg-white rounded-[2rem] border border-gray-100 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: isVisible('features') ? `${i * 100}ms` : '0ms' }}
                >
                  <div className="w-11 h-11 bg-[#F5F5F5] rounded-xl flex items-center justify-center text-black mb-6">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">{f.desc}</p>
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
                        Eleva tu marca a un nivel superior.
                    </h2>
                    <p className="text-white/60 text-sm md:text-lg mb-10 font-light max-w-2xl leading-relaxed">
                        Un buen diseño atrae. Un buen branding fideliza. Empecemos a construir tu legado hoy mismo.
                    </p>
                    <ContactButton
                        label="Definir mi Marca"
                        desktopLabel="Solicitar consultoría de branding gratuita"
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

export default BrandingPage;
