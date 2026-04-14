import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Zap, Monitor, Smartphone, ShieldCheck, TrendingUp, ChevronRight } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import useSEO from './useSEO';
import ContactButton from './ContactButton';

const DisenoWebPage: React.FC = () => {
  useSEO({
    title: 'Diseño Web Premium para Restaurantes | Motions',
    description: 'Creamos webs de alto rendimiento para restaurantes que convierten visitas en reservas. Diseño a medida, ultra rápidas, 100% responsive y con SEO integrado. Madrid y toda España.',
    canonical: 'https://www.motions.es/servicios/diseno-web-restaurantes',
  });

  const features = [
    { icon: <Monitor className="w-5 h-5" />, title: 'Diseño a Medida', desc: 'Cada web es única. Diseñamos desde cero adaptándonos a la identidad y valores de tu restaurante.' },
    { icon: <Smartphone className="w-5 h-5" />, title: '100% Responsive', desc: 'Perfecta en todos los dispositivos: móvil, tablet y escritorio. El 70% de tus clientes usa el móvil.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Ultra Rápida', desc: 'Tecnología de vanguardia para tiempos de carga inferiores a 1 segundo. Puntuación 100 en PageSpeed.' },
    { icon: <ShieldCheck className="w-5 h-5" />, title: 'SEO Integrado', desc: 'Estructura técnica optimizada desde el primer día para que Google te encuentre y te posicione.' },
    { icon: <Globe className="w-5 h-5" />, title: 'Sistema de Reservas', desc: 'Integración con plataformas de reserva o formularios personalizados para captar clientes directamente.' },
    { icon: <TrendingUp className="w-5 h-5" />, title: 'Conversión Maximizada', desc: 'Cada elemento está pensado para convertir visitas en reservas: CTAs, prueba social, velocidad.' },
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
                <span className="text-[10px] font-bold text-black uppercase tracking-[0.2em]">Desarrollo de Alta Gama</span>
            </div>
            
            <h1 className="text-[2.75rem] sm:text-6xl md:text-[6.5rem] font-medium tracking-tight text-black leading-[0.95] mb-10 max-w-5xl">
              Diseño Web <br className="hidden md:block" />
              para Restaurantes
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-500/80 leading-relaxed mb-14 max-w-2xl font-light">
                Creamos herramientas de venta digitales. No hacemos webs informativas; desarrollamos plataformas optimizadas para maximizar tus reservas online.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              <ContactButton
                label="Solicitar mi nueva web"
                className="w-full sm:w-auto"
              />
              <Link to="/#proyectos" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-black font-semibold border-b border-black/10 hover:border-black transition-all">
                Ver proyectos realizados <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-0 px-4 md:px-12 bg-[#0A0A0A] relative md:h-80 flex items-center">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative z-10">
            {[
              { num: '100/100', label: 'Puntuación perfecta en Google PageSpeed Performance.' },
              { num: '<1.0s', label: 'Tiempo de carga promedio para una experiencia fluida.' },
              { num: '+65%', label: 'Aumento en la tasa de conversión de visitas a reservas.' },
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
                    Tecnología que impulsa tu negocio físico.
                </h2>
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                    Utilizamos las mismas herramientas que multinacionales tecnológicas para asegurar que tu restaurante sea imbatible digitalmente.
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

        {/* Premium CTA */}
        <section className="pb-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#0A0A0A] rounded-[3rem] p-8 md:p-24 relative overflow-hidden group">
                <div className="relative z-10 max-w-3xl">
                    <h2 className="text-4xl md:text-6xl font-medium text-white mb-8 tracking-tight leading-[1.05]">
                        Tu restaurante merece una web que hable por sí misma.
                    </h2>
                    <p className="text-white/40 text-lg md:text-xl mb-12 font-light max-w-2xl leading-relaxed">
                        No pierdas más clientes por una web lenta o desactualizada. Empieza hoy tu transformación digital.
                    </p>
                    <ContactButton
                        label="Comenzar mi proyecto"
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

export default DisenoWebPage;
