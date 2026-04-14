import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, CheckCircle2, TrendingUp, Eye, MessageSquare } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import useSEO from './useSEO';
import ContactButton from './ContactButton';

const GoogleMyBusinessPage: React.FC = () => {
  useSEO({
    title: 'Google My Business para Restaurantes | Motions',
    description: 'Dominamos las búsquedas locales en Google Maps para que tu restaurante sea siempre la primera opción. Gestión de reseñas, SEO local y posicionamiento en Madrid y toda España.',
    canonical: 'https://www.motions.es/servicios/google-my-business',
  });

  const benefits = [
    { icon: <MapPin className="w-5 h-5" />, title: 'Presencia Local Dominante', desc: 'Aparece en el "Pack de 3" de Google Maps cuando alguien busca restaurantes cerca.' },
    { icon: <Star className="w-5 h-5" />, title: 'Gestión de Reseñas', desc: 'Estrategia completa de captación y respuesta a reseñas para elevar tu reputación online.' },
    { icon: <TrendingUp className="w-5 h-5" />, title: 'Posicionamiento Local', desc: 'Optimización técnica de tu ficha para superar a la competencia en búsquedas locales.' },
    { icon: <Eye className="w-5 h-5" />, title: 'Visibilidad Aumentada', desc: 'Publicaciones, fotos y ofertas optimizadas para que Google priorice tu negocio.' },
    { icon: <MessageSquare className="w-5 h-5" />, title: 'Atención al Cliente', desc: 'Configuración de mensajería directa para gestionar consultas desde Google.' },
    { icon: <CheckCircle2 className="w-5 h-5" />, title: 'Análisis de Rendimiento', desc: 'Informes mensuales con datos reales: cuántas personas te encuentran y cómo.' },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-[#FBF9F6] font-['Inter']">

        {/* Hero */}
        <section className="pt-40 pb-28 px-6 md:px-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-[11px] font-semibold uppercase tracking-widest mb-10">
              <MapPin className="w-3 h-3" /> SEO Local
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-[80px] font-medium tracking-tight text-black leading-[1.02] mb-8 max-w-4xl">
              Google My Business<br />
              <span className="text-gray-300">para Restaurantes</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-12 max-w-2xl">
              Dominamos las búsquedas locales para que tu restaurante sea siempre la primera opción en Google Maps. Más visibilidad, más reservas, más clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactButton
                label="Quiero más visibilidad local"
                className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition-all shadow-sm hover:-translate-y-0.5"
              />
              <Link to="/" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold border border-gray-200 hover:border-gray-400 transition-all">
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 px-6 md:px-12 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {[
              { num: '+180%', label: 'Aumento de visibilidad en Maps' },
              { num: '4.8★', label: 'Media de reseñas en nuestros clientes' },
              { num: '3x', label: 'Más llamadas desde Google' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-bold text-white mb-3">{s.num}</span>
                <span className="text-white/40 text-sm max-w-[180px] font-mono uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="py-28 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black mb-4 max-w-2xl">
              Todo lo que incluye nuestro servicio
            </h2>
            <p className="text-gray-400 mb-16 max-w-xl">Gestión profesional y continua de tu ficha de Google para que nunca pierdas visibilidad.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <div key={i} className="group p-8 bg-white rounded-[2rem] border border-gray-100 hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="w-11 h-11 bg-[#0A0A0A] rounded-xl flex items-center justify-center text-white mb-6">
                    {b.icon}
                  </div>
                  <h3 className="text-base font-semibold text-black mb-2 tracking-tight">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 px-6 md:px-12 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight leading-[1.1]">
              ¿Tu restaurante aparece<br />en el Top 3 de Google Maps?
            </h2>
            <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto">
              El 80% de los clientes busca dónde comer en Google Maps. Si no estás visible, esos clientes van a la competencia.
            </p>
            <ContactButton
              label="Empieza ahora"
              className="px-10 py-4 bg-white text-black rounded-full font-bold text-base hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-lg"
            />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default GoogleMyBusinessPage;
