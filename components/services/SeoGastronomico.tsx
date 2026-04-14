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
    description: 'Posicionamos tu restaurante en los primeros resultados de Google. Especializados en SEO para hosteleria y sector gastronómico en Madrid, Barcelona y toda España.',
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
        <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/5 mb-8`}>
                <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                <span className="text-[10px] font-bold text-black uppercase tracking-[0.2em]">Posicionamiento Orgánico</span>
            </div>
            
            <h1 className="text-[2.75rem] sm:text-6xl md:text-[6.5rem] font-medium tracking-tight text-black leading-[0.95] mb-10 max-w-5xl">
              SEO Gastronómico <br className="hidden md:block" />
              para Restaurantes
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-500/80 leading-relaxed mb-14 max-w-2xl font-light">
                No pagues por cada clic. Conquista las primeras posiciones de Google orgánicamente y atrae a miles de clientes hambrientos cada mes de forma constante.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              <ContactButton
                label="Dominar los buscadores"
                className="w-full sm:w-auto"
              />
              <Link to="/" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-black font-semibold border-b border-black/10 hover:border-black transition-all">
                Ver otros servicios <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-0 px-4 md:px-12 bg-[#0A0A0A] relative md:h-80 flex items-center">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative z-10">
            {[
              { num: 'Top 3', label: 'Posición promedio alcanzada para tus palabras clave principales.' },
              { num: '+220%', label: 'Crecimiento estimado del tráfico orgánico en el primer año.' },
              { num: '0€', label: 'Costo de adquisición publicitaria en tráfico orgánico.' },
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
                    Estrategia de búsqueda de nicho.
                </h2>
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                    Sabemos cómo se busca la comida. Optimizamos cada byte de tu web para responder a la intención real de reserva de tus clientes.
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

        {/* Keywords Cloud Section */}
        <section className="py-24 md:py-40 px-6 md:px-12 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black mb-12 text-center">
              Tu marca en cada búsqueda relevante.
            </h2>
            <p className="text-gray-400 text-center mb-20 max-w-xl mx-auto font-light">Dominamos los términos que tus clientes escriben cada día en sus teléfonos antes de salir a comer.</p>
            <div className="flex flex-wrap justify-center gap-4">
              {keywords.map((kw, i) => (
                <span key={i} className="px-6 py-3 bg-[#FBF9F6] hover:bg-black hover:text-white transition-all duration-500 border border-black/5 rounded-full text-sm md:text-base text-gray-600 font-light cursor-default">
                  {kw}
                </span>
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
                        Deja de ser invisible para Google.
                    </h2>
                    <p className="text-white/40 text-lg md:text-xl mb-12 font-light max-w-2xl leading-relaxed">
                        Si no estás en la primera página, no existes. Te llevamos al lugar donde tus clientes están buscando hoy mismo.
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
