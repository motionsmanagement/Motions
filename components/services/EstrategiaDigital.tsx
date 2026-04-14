import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Target, Users, BarChart3, Megaphone, RefreshCw } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import useSEO from './useSEO';
import ContactButton from './ContactButton';

const EstrategiaDigitalPage: React.FC = () => {
  useSEO({
    title: 'Estrategia Digital para Restaurantes | Motions',
    description: 'Diseñamos y ejecutamos la estrategia digital completa de tu restaurante.',
    canonical: 'https://www.motions.es/servicios/estrategia-digital',
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
    { icon: <Target className="w-5 h-5" />, title: 'Estrategia 360°', desc: 'Plan integral que unifica web, redes sociales, SEO, publicidad y reputación en una sola dirección.' },
    { icon: <Users className="w-5 h-5" />, title: 'Definición de Audiencia', desc: 'Identificamos y segmentamos a tu cliente ideal para que cada acción impacte donde importa.' },
    { icon: <Megaphone className="w-5 h-5" />, title: 'Gestión de Redes Sociales', desc: 'Contenido estratégico para Instagram, TikTok y Google orientado a atraer reservas reales.' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Publicidad Digital (SEM)', desc: 'Campañas de Google Ads y Meta Ads optimizadas para el máximo retorno de inversión.' },
    { icon: <RefreshCw className="w-5 h-5" />, title: 'Optimización Continua', desc: 'Revisión y mejora mensual de todas las acciones según los datos reales de tu negocio.' },
    { icon: <Activity className="w-5 h-5" />, title: 'Consultoría Estratégica', desc: 'Asesoramiento directo para la toma de decisiones digitales con un equipo experto a tu lado.' },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-[#F8F9FA] font-['Inter'] overflow-hidden">

        {/* Hero Section */}
        <section 
          ref={setRef('hero')} 
          data-section-id="hero"
          className="relative pt-32 md:pt-44 pb-16 md:pb-24 px-6 md:px-12"
        >
          <div className={`max-w-7xl mx-auto flex flex-col items-center md:items-start text-center md:text-left transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="mb-8 pl-3.5 pr-2.5 py-2 bg-[#EDEDED] rounded-full inline-flex items-center justify-center border border-black/[0.03]">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em] leading-none">
                  Consultoría de Crecimiento
                </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.1] mb-8 max-w-4xl">
              Estrategia Digital <br className="hidden md:block" />
              para Restaurantes
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl font-light px-4 md:px-0">
                No solo hacemos marketing; diseñamos sistemas de crecimiento. Unificamos todos tus canales digitales para convertirlos en una máquina de generar reservas.
            </p>

            <div className="flex flex-row items-center gap-3 w-full justify-center md:justify-start px-4 md:px-0">
              <ContactButton 
                label="Diseñar mi hoja" 
                desktopLabel="Diseñar mi hoja de ruta hacia el crecimiento" 
              />
              <Link 
                to="/" 
                className="px-4 py-2.5 md:px-6 md:py-3.5 bg-black/[0.03] border border-black/5 text-gray-700 rounded-full font-semibold hover:bg-black/[0.06] transition-all text-[11px] md:text-[15px] flex items-center justify-center whitespace-nowrap"
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
              { num: '+120%', label: 'Crecimiento promedio en facturación atribuida a canales digitales.' },
              { num: '6 meses', label: 'Tiempo medio para alcanzar la madurez estratégica digital.' },
              { num: 'ROI 5x', label: 'Retorno de inversión promedio para nuestras campañas de captación.' },
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
                    Sin improvisación. Solo resultados escalables.
                </h2>
                <p className="text-gray-600 text-base md:text-lg font-light">
                    Aplicamos metodologías ágiles y análisis de datos profundo para que cada euro invertido en marketing se traduzca en una mesa ocupada.
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

        {/* Roadmap Section */}
        <section 
          ref={setRef('roadmap')} 
          data-section-id="roadmap"
          className="py-20 md:py-32 px-6 md:px-12 bg-white border-y border-gray-100"
        >
          <div className={`max-w-7xl mx-auto text-center md:text-left px-6 md:px-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible('roadmap') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-16">
              Hoja de ruta digital.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { month: 'Mes 1 - 2', title: 'Auditoría & Cimientos', desc: 'Consolidamos tu infraestructura digital, corregimos errores técnicos y definimos los KPIs de éxito.' },
                { month: 'Mes 3 - 4', title: 'Activación & Captación', desc: 'Lanzamos campañas de alto impacto y activamos los embudos de conversión para atraer clientes.' },
                { month: 'Mes 5 - 6', title: 'Escala & Fidelización', desc: 'Optimizamos la inversión basada en datos y activamos sistemas de recurrencia para tus clientes.' },
              ].map((p, i) => (
                <div 
                  key={i} 
                  className="p-10 bg-[#F8F9FA] rounded-[2.5rem] border border-black/5 hover:border-black/20 transition-all duration-500"
                  style={{ transitionDelay: isVisible('roadmap') ? `${i * 150}ms` : '0ms' }}
                >
                  <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest">{p.month}</span>
                  <h3 className="text-xl font-semibold text-black mt-3 mb-3">{p.title}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium CTA */}
        <section 
          ref={setRef('cta')} 
          data-section-id="cta"
          className="pb-20 md:pb-32 px-6 md:px-12 mt-20"
        >
          <div className={`max-w-7xl mx-auto transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible('cta') ? 'opacity-100 scale-100' : 'opacity-0 scale-95 translate-y-12'}`}>
            <div className="bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
                <div className="relative z-10 max-w-3xl flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight leading-[1.2]">
                        Deja de adivinar. Crece con datos.
                    </h2>
                    <p className="text-white/60 text-sm md:text-lg mb-10 font-light max-w-2xl leading-relaxed">
                        No pierdas más clientes por una estrategia improvisada. Optimiza tu inversión hoy.
                    </p>
                    <ContactButton
                        label="Comenzar mi Estrategia"
                        desktopLabel="Solicitar mi Hoja de Ruta Estratégica"
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

export default EstrategiaDigitalPage;
