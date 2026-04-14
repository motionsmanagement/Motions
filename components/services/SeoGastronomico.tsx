import React from 'react';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, FileText, Link2, BarChart3, MapPin } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import useSEO from './useSEO';
import ContactButton from './ContactButton';

const SeoGastronomicoPage: React.FC = () => {
  useSEO({
    title: 'SEO Gastronómico para Restaurantes | Motions',
    description: 'Posicionamos tu restaurante en los primeros resultados de Google. Especializados en SEO para hosteleria y sector gastronómico.',
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
      <main className="bg-[#F8F9FA] font-['Inter'] overflow-hidden">

        {/* Hero Section */}
        <section className="relative pt-32 md:pt-44 pb-16 md:pb-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-black/[0.03] border border-black/5 mb-8">
                <img src="/anagram.png" alt="" className="w-3.5 h-3.5 opacity-30" />
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap">Posicionamiento Orgánico</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-medium tracking-tight text-black leading-[1.05] mb-8 max-w-4xl">
              SEO Gastronómico <br className="hidden md:block" />
              para Restaurantes
            </h1>
            
            <p className="text-base md:text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl font-light px-4">
                No pagues por cada clic. Conquista las primeras posiciones de Google orgánicamente y atrae a miles de clientes hambrientos cada mes de forma constante.
            </p>

            <div className="flex flex-row items-center gap-3 w-full justify-center px-4">
              <ContactButton label="Dominar Google" />
              <Link 
                to="/" 
                className="px-5 py-3 md:px-7 md:py-4 bg-black/[0.03] border border-black/5 text-gray-700 rounded-full font-semibold hover:bg-black/[0.06] transition-all text-[11px] md:text-base flex items-center justify-center whitespace-nowrap"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section - Centered */}
        <section className="py-12 md:py-20 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 relative z-10">
            {[
              { num: 'Top 3', label: 'Posición promedio alcanzada para tus palabras clave principales.' },
              { num: '+220%', label: 'Crecimiento estimado del tráfico orgánico en el primer año.' },
              { num: '0€', label: 'Costo de adquisición publicitaria en tráfico orgánico.' },
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
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-16 mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-6">
                    Estrategia de búsqueda de nicho.
                </h2>
                <p className="text-gray-600 text-base md:text-lg font-light">
                    Sabemos cómo se busca la comida. Optimizamos cada byte de tu web para responder a la intención real de reserva de tus clientes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="group p-8 bg-white rounded-[2rem] border border-gray-100 transition-all duration-300">
                  <div className="w-11 h-11 bg-black rounded-xl flex items-center justify-center text-white mb-6">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Keywords Cloud Section - Improved for Mobile */}
        <section className="py-20 md:py-32 bg-white border-y border-gray-100 overflow-hidden">
          <div className="max-w-4xl mx-auto mb-16 px-6 text-center">
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
        <section className="pb-20 md:pb-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
                <div className="relative z-10 max-w-3xl flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight leading-[1.2]">
                        Deja de ser invisible para Google.
                    </h2>
                    <p className="text-white/60 text-sm md:text-lg mb-10 font-light max-w-2xl leading-relaxed">
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
