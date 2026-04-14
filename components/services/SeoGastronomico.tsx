import React from 'react';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, FileText, Link2, BarChart3, MapPin, ChevronRight } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import useSEO from './useSEO';
import ContactButton from './ContactButton';

const SeoGastronomicoPage: React.FC = () => {
  useSEO({
    title: 'SEO Gastronómico para Restaurantes | Motions',
    description: 'Posicionamos tu restaurante en los primeros resultados de Google. Especializados en SEO para hosteleria.',
    canonical: 'https://www.motions.es/servicios/seo-gastronomico',
  });

  const features = [
    { icon: <Search className="w-5 h-5" />, title: 'Auditoría SEO Completa', desc: 'Diagnóstico técnico exhaustivo de tu presencia online para detectar oportunidades de mejora.' },
    { icon: <FileText className="w-5 h-5" />, title: 'Contenido Optimizado', desc: 'Textos estratégicos pensados para posicionar en Google con las palabras clave de tu sector.' },
    { icon: <Link2 className="w-5 h-5" />, title: 'Link Building', desc: 'Estrategia de enlaces externos para aumentar la autoridad de tu dominio frente a la competencia.' },
    { icon: <MapPin className="w-5 h-5" />, title: 'SEO Local Avanzado', desc: 'Posicionamiento geolocalizado para dominar las búsquedas en tu ciudad y zona de influencia.' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Seguimiento y Reporting', desc: 'Informes mensuales con métricas reales: posiciones, tráfico orgánico y conversiones.' },
    { icon: <TrendingUp className="w-5 h-5" />, title: 'SEO para Gastronomía', desc: 'Especializados en restauración: conocemos exactamente cómo buscan tus clientes.' },
  ];

  const keywords = [
    'restaurante italiano madrid', 'mejor restaurante zona retiro', 'restaurante japonés barcelona',
    'restaurante para despedida', 'donde comer cerca de mi', 'restaurante con terraza madrid',
    'restaurante romántico barcelona', 'menú del día restaurante', 'reservar mesa restaurante',
    'restaurante sin gluten madrid', 'brunch madrid', 'restaurante de moda 2025',
  ];

  return (
    <>
      <Navbar />
      <main className="bg-[#FBF9F6] font-['Inter'] overflow-hidden">

        {/* Hero Section */}
        <section className="relative pt-32 md:pt-44 pb-16 md:pb-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/5 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                <span className="text-[10px] font-bold text-black uppercase tracking-widest">Posicionamiento Orgánico</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-black leading-[1.1] md:leading-[1.05] mb-8 max-w-4xl">
              SEO Gastronómico <br className="hidden md:block" />
              para Restaurantes
            </h1>
            
            <p className="text-base md:text-xl text-gray-500/80 leading-relaxed mb-10 max-w-2xl font-light">
                No pagues por cada clic. Conquista las primeras posiciones de Google orgánicamente y atrae a miles de clientes hambrientos cada mes de forma constante.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <ContactButton label="Dominar los buscadores" />
              <Link 
                to="/" 
                className="w-full sm:w-auto px-6 py-3.5 bg-black/[0.03] border border-black/5 text-gray-500 rounded-full font-semibold hover:bg-black/[0.06] transition-all text-center text-sm md:text-base flex items-center justify-center gap-2"
              >
                Ver otros servicios <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-24 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 relative z-10">
            {[
              { num: 'Top 3', label: 'Posición promedio alcanzada para tus palabras clave principales.' },
              { num: '+220%', label: 'Crecimiento estimado del tráfico orgánico en el primer año.' },
              { num: '0€', label: 'Costo de adquisición publicitaria en tráfico orgánico.' },
            ].map((s, i) => (
              <div key={i} className={`flex flex-col items-center md:items-start md:px-12 ${i !== 0 ? 'md:border-l md:border-white/10' : ''}`}>
                <span className="text-4xl md:text-6xl font-light text-white tracking-tighter mb-2">{s.num}</span>
                <p className="text-white/40 text-[13px] md:text-base font-light max-w-[220px] text-center md:text-left">
                    {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-16">
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-6">
                    Estrategia de búsqueda de nicho.
                </h2>
                <p className="text-gray-400 text-base md:text-lg font-light">
                    Sabemos cómo se busca la comida. Optimizamos cada byte de tu web para responder a la intención real de reserva de tus clientes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="group p-8 bg-white rounded-[2rem] border border-gray-100 hover:border-black/5 transition-all duration-300">
                  <div className="w-11 h-11 bg-[#FBF9F6] rounded-xl flex items-center justify-center text-black mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Keywords Cloud Section */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-10 text-center">
              Tu marca en cada búsqueda relevante.
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {keywords.map((kw, i) => (
                <span key={i} className="px-5 py-2.5 bg-[#FBF9F6] border border-black/5 rounded-full text-xs md:text-sm text-gray-500 font-light hover:bg-black hover:text-white transition-all duration-300 cursor-default">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Premium CTA */}
        <section className="pb-20 md:pb-32 px-6 md:px-12 mt-20">
          <div className="max-w-7xl mx-auto text-center md:text-left">
            <div className="bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-20 relative overflow-hidden flex flex-col items-center md:items-start">
                <div className="relative z-10 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight leading-[1.2]">
                        Deja de ser invisible para Google.
                    </h2>
                    <p className="text-white/40 text-sm md:text-lg mb-10 font-light max-w-2xl leading-relaxed">
                        Te llevamos al lugar donde tus clientes están buscando hoy mismo.
                    </p>
                    <ContactButton
                        label="Auditoría SEO Gratuita"
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

export default SeoGastronomicoPage;
