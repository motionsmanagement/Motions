import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, TrendingUp, FileText, Link2, BarChart3, MapPin, Star } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import useSEO from './useSEO';

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
    { icon: <Star className="w-5 h-5" />, title: 'SEO para Gastronomía', desc: 'Especializados en el sector restauración: conocemos exactamente cómo buscan tus clientes.' },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-[#FBF9F6] font-['Inter']">
        {/* Hero */}
        <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-xs font-semibold uppercase tracking-widest mb-8">
              <Search className="w-3.5 h-3.5" /> SEO Gastronómico
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight text-black leading-[1.05] mb-8">
              SEO Gastronómico<br />
              <span className="text-gray-400">para Restaurantes</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-12 max-w-2xl">
              Posicionamos tu restaurante en los primeros resultados de Google para que los clientes te encuentren antes que a la competencia. Sin publicidad, tráfico orgánico de calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/#contacto"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Quiero salir primero en Google <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold border border-gray-200 hover:border-gray-400 transition-all"
              >
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-6 md:px-12 bg-black">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {[
              { num: 'Top 3', label: 'Posición media de nuestros clientes en Google en 90 días' },
              { num: '+220%', label: 'Aumento de tráfico orgánico medio anual' },
              { num: '0€', label: 'Coste por clic en tráfico orgánico bien posicionado' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-white mb-3">{s.num}</span>
                <span className="text-gray-400 text-sm max-w-[200px]">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-16 max-w-2xl">
              SEO especializado en el sector gastronómico
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-white mb-6">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Keywords */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mb-4">
              ¿Para qué búsquedas posicionamos a tu restaurante?
            </h2>
            <p className="text-gray-500 mb-12">Ejemplos reales de términos por los que trabajamos para que aparezcas primero:</p>
            <div className="flex flex-wrap gap-3">
              {[
                'restaurante italiano madrid',
                'mejor restaurante zona retiro',
                'restaurante japonés barcelona menu',
                'restaurante para despedida de soltera',
                'donde comer cerca de mi',
                'restaurante con terraza madrid',
                'restaurante romántico barcelona',
                'restaurante menú del día',
                'reservar mesa restaurante',
                'restaurante sin gluten madrid',
                'brunch madrid',
                'restaurante de moda 2025',
              ].map((kw, i) => (
                <span key={i} className="px-4 py-2 bg-[#FBF9F6] border border-gray-200 rounded-full text-sm text-gray-600">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 md:px-12 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">
              El 93% de las experiencias online empiezan en Google
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Si no estás en la primera página, prácticamente no existes. Nosotros te llevamos hasta donde están tus futuros clientes.
            </p>
            <Link
              to="/#contacto"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Quiero estar primero en Google <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SeoGastronomicoPage;
