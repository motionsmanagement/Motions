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
      <main className="bg-[#FBF9F6] font-['Inter']">

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-20 md:pb-28 px-6 md:px-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-[11px] font-semibold uppercase tracking-widest mb-10">
              <Search className="w-3 h-3" /> SEO Gastronómico
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-[80px] font-medium tracking-tight text-black leading-[1.02] mb-8 max-w-4xl">
              SEO Gastronómico<br />
              para Restaurantes
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-12 max-w-2xl">
              Posicionamos tu restaurante en los primeros resultados de Google para que los clientes te encuentren antes que a la competencia. Sin publicidad, tráfico orgánico de calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactButton
                label="Quiero salir primero en Google"
                className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition-all shadow-sm hover:-translate-y-0.5"
              />
              <Link to="/" className="inline-flex items-center gap-3 px-8 py-4 bg-black/[0.03] border border-black/5 text-gray-600 rounded-full font-semibold hover:bg-black/[0.06] transition-all">
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 px-6 md:px-12 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {[
              { num: 'Top 3', label: 'Posición media en Google en 90 días' },
              { num: '+220%', label: 'Aumento de tráfico orgánico anual' },
              { num: '0€', label: 'Coste por clic en tráfico orgánico' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl md:text-5xl font-medium text-white mb-2">{s.num}</span>
                <span className="text-white/40 text-[10px] md:text-xs max-w-[200px] uppercase tracking-[0.2em]">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="py-28 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black mb-4 max-w-2xl">
              SEO especializado en el sector gastronómico
            </h2>
            <p className="text-gray-400 mb-16 max-w-xl">No hacemos SEO genérico. Conocemos exactamente cómo buscan tus clientes y por qué eligen un restaurante sobre otro.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="group p-8 bg-white rounded-[2rem] border border-gray-100 hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="w-11 h-11 bg-[#0A0A0A] rounded-xl flex items-center justify-center text-white mb-6">
                    {f.icon}
                  </div>
                  <h3 className="text-base font-semibold text-black mb-2 tracking-tight">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Keywords */}
        <section className="py-28 px-6 md:px-12 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black mb-4">
              ¿Para qué búsquedas te posicionamos?
            </h2>
            <p className="text-gray-400 mb-12">Ejemplos reales de términos por los que trabajamos para que aparezcas primero:</p>
            <div className="flex flex-wrap gap-3">
              {keywords.map((kw, i) => (
                <span key={i} className="px-4 py-2 bg-[#FBF9F6] border border-gray-200 rounded-full text-sm text-gray-600">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 px-6 md:px-12 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight leading-[1.1]">
              El 93% de las experiencias<br />online empiezan en Google
            </h2>
            <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto">
              Si no estás en la primera página, prácticamente no existes. Te llevamos hasta donde están tus clientes.
            </p>
            <ContactButton
              label="Quiero estar primero en Google"
              className="px-10 py-4 bg-white text-black rounded-full font-bold text-base hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-lg"
            />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default SeoGastronomicoPage;
