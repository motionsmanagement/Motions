import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Target, Users, BarChart3, Megaphone, RefreshCw, ChevronRight } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import useSEO from './useSEO';
import ContactButton from './ContactButton';

const EstrategiaDigitalPage: React.FC = () => {
  useSEO({
    title: 'Estrategia Digital para Restaurantes | Motions',
    description: 'Diseñamos y ejecutamos la estrategia digital completa de tu restaurante: redes sociales, publicidad, SEO y fidelización. Todo coordinado para maximizar tus resultados en hosteleria.',
    canonical: 'https://www.motions.es/servicios/estrategia-digital',
  });

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
      <main className="bg-[#FBF9F6] font-['Inter'] overflow-hidden">

        {/* Hero Section */}
        <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/5 mb-8`}>
                <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                <span className="text-[10px] font-bold text-black uppercase tracking-[0.2em]">Consultoría de Crecimiento</span>
            </div>
            
            <h1 className="text-[2.75rem] sm:text-6xl md:text-[6.5rem] font-medium tracking-tight text-black leading-[0.95] mb-10 max-w-5xl">
              Estrategia Digital <br className="hidden md:block" />
              para Restaurantes
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-500/80 leading-relaxed mb-14 max-w-2xl font-light">
                No solo hacemos marketing; diseñamos sistemas de crecimiento. Unificamos todos tus canales digitales para convertirlos en una máquina de generar reservas.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              <ContactButton
                label="Diseñar mi hoja de ruta"
                className="w-full sm:w-auto"
              />
              <Link to="/" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-black font-semibold border-b border-black/10 hover:border-black transition-all">
                Ver todos los servicios <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-0 px-4 md:px-12 bg-[#0A0A0A] relative md:h-80 flex items-center">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative z-10">
            {[
              { num: '+120%', label: 'Crecimiento promedio en facturación atribuida a canales digitales.' },
              { num: '6 meses', label: 'Tiempo medio para alcanzar la madurez estratégica digital.' },
              { num: 'ROI 5x', label: 'Retorno de inversión promedio para nuestras campañas de captación.' },
            ].map((s, i) => (
              <div key={i} className={`flex flex-col items-center md:items-start md:px-12 ${i !== 0 ? 'md:border-l md:border-white/10' : ''}`}>
                <span className="text-5xl md:text-7xl font-light text-white tracking-tighter mb-4">{s.num}</span>
                <p className="text-white/40 text-sm md:text-base font-light max-w-[200px] text-center md:text-left leading-snug lowercase first-letter:uppercase">
                    {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 md:py-40 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-20">
                <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black mb-6">
                    Sin improvisación. Solo resultados escalables.
                </h2>
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                    Aplicamos metodologías ágiles y análisis de datos profundo para que cada euro invertido en marketing se traduzca en una mesa ocupada.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <div key={i} className="group p-10 bg-white rounded-[2.5rem] border border-gray-100 hover:border-black/5 transition-all duration-500 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]">
                  <div className="w-12 h-12 bg-[#FBF9F6] rounded-2xl flex items-center justify-center text-black mb-8 group-hover:bg-black group-hover:text-white transition-colors duration-500">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-4 tracking-tight">{f.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed font-light">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Roadmap Section */}
        <section className="py-24 md:py-40 px-6 md:px-12 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black mb-20">
              Hoja de ruta digital.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { month: 'Mes 1 - 2', title: 'Auditoría & Cimientos', desc: 'Consolidamos tu infraestructura digital, corregimos errores técnicos y definimos los KPIs de éxito.' },
                { month: 'Mes 3 - 4', title: 'Activación & Captación', desc: 'Lanzamos campañas de alto impacto y activamos los embudos de conversión para atraer clientes.' },
                { month: 'Mes 5 - 6', title: 'Escala & Fidelización', desc: 'Optimizamos la inversión basada en datos y activamos sistemas de recurrencia para tus clientes.' },
              ].map((p, i) => (
                <div key={i} className="p-12 bg-[#FBF9F6] rounded-[3rem] border border-black/5">
                  <span className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em]">{p.month}</span>
                  <h3 className="text-2xl font-semibold text-black mt-4 mb-4">{p.title}</h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium CTA */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#0A0A0A] rounded-[3rem] p-8 md:p-24 relative overflow-hidden group">
                <div className="relative z-10 max-w-3xl">
                    <h2 className="text-4xl md:text-6xl font-medium text-white mb-8 tracking-tight leading-[1.05]">
                        Deja de adivinar. Empieza a crecer con datos.
                    </h2>
                    <p className="text-white/40 text-lg md:text-xl mb-12 font-light max-w-2xl leading-relaxed">
                        El éxito de un restaurante en 2025 no es casualidad. Es el resultado de una estrategia digital impecable.
                    </p>
                    <ContactButton
                        label="Comenzar mi Estrategia"
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
