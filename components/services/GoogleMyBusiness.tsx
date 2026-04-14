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
      <main className="bg-[#F8F9FA] font-['Inter'] overflow-hidden">

        {/* Hero Section */}
        <section className="relative pt-32 md:pt-44 pb-16 md:pb-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-8 px-3.5 py-2 bg-[#EDEDED] rounded-full inline-flex items-center justify-center border border-black/[0.03]">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em] leading-none">
                  SEO Local & Maps
                </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.1] mb-8 max-w-4xl">
              Google My Business <br className="hidden md:block" />
              para Restaurantes
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl font-light px-4 md:px-0">
                Dominamos las búsquedas locales para que tu restaurante sea siempre la primera opción. Transformamos tu ficha técnica en una herramienta de captación masiva.
            </p>

            <div className="flex flex-row items-center gap-3 w-full justify-center md:justify-start px-4 md:px-0">
              <ContactButton label="Multiplicar reservas" />
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
              { num: '+180%', label: 'Aumento real de impresiones en el mapa local de tu zona.' },
              { num: 'Top 3', label: 'Garantía de aparición en las búsquedas clave de tu ciudad.' },
              { num: '+45%', label: 'Crecimiento estimado en llamadas y clics directos al local.' },
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

        {/* Benefits Grid */}
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-16 px-4 md:px-0">
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-6">
                    Optimización técnica para un mercado saturado.
                </h2>
                <p className="text-gray-600 text-base md:text-lg font-light">
                    No solo completamos tu perfil; aplicamos ingeniería de búsqueda para que Google te priorice frente a cualquier competidor cercano.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <div key={i} className="group p-8 bg-white rounded-[2rem] border border-gray-100 transition-all duration-300">
                  <div className="w-11 h-11 bg-black rounded-xl flex items-center justify-center text-white mb-6">
                    {b.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3 tracking-tight">{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">{b.desc}</p>
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
                        Si no apareces en el <span className="text-white/40">Top 3</span>, tus clientes están cenando en otro lugar.
                    </h2>
                    <p className="text-white/60 text-sm md:text-lg mb-10 font-light max-w-2xl leading-relaxed">
                        El 80% de las búsquedas gastronómicas se deciden en los primeros tres resultados de Google Maps. Asegura tu lugar hoy mismo.
                    </p>
                    <ContactButton
                        label="Comenzar Auditoría Local"
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

export default GoogleMyBusinessPage;
