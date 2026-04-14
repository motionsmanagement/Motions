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
      <main className="bg-[#FBF9F6] font-['Inter']">

        {/* Hero */}
        <section className="pt-40 pb-28 px-6 md:px-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-[11px] font-semibold uppercase tracking-widest mb-10">
              <Activity className="w-3 h-3" /> Estrategia Digital
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-[80px] font-medium tracking-tight text-black leading-[1.02] mb-8 max-w-4xl">
              Estrategia Digital<br />
              <span className="text-gray-300">para Restaurantes</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-12 max-w-2xl">
              Diseñamos y ejecutamos la estrategia digital completa de tu restaurante: desde la captación hasta la fidelización, todo coordinado para maximizar tus resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactButton
                label="Quiero mi estrategia digital"
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
              { num: '+120%', label: 'Crecimiento en facturación media anual' },
              { num: '6 meses', label: 'Para ver resultados significativos' },
              { num: '100%', label: 'Orientados a resultados reales' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-bold text-white mb-3">{s.num}</span>
                <span className="text-white/40 text-sm max-w-[200px] font-mono uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="py-28 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black mb-4 max-w-2xl">
              Una estrategia que alinea todos tus canales
            </h2>
            <p className="text-gray-400 mb-16 max-w-xl">Cada canal digital puede ser una fuente de clientes. Nosotros los coordinamos todos para maximizar el resultado.</p>
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

        {/* Roadmap */}
        <section className="py-28 px-6 md:px-12 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black mb-16">
              Tu hoja de ruta digital
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {[
                { month: 'Mes 1-2', title: 'Cimientos', desc: 'Auditoría completa, definición de estrategia, optimización de canales existentes y configuración de herramientas de tracking.' },
                { month: 'Mes 3-4', title: 'Activación', desc: 'Lanzamiento de campañas, producción de contenido, activación de SEO y primeras acciones de captación.' },
                { month: 'Mes 5-6', title: 'Escala', desc: 'Optimización basada en datos reales, escala de lo que funciona y consolidación de resultados sostenibles.' },
              ].map((p, i) => (
                <div key={i} className="p-10">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{p.month}</span>
                  <h3 className="text-2xl font-semibold text-black mt-2 mb-4">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 px-6 md:px-12 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight leading-[1.1]">
              Deja de improvisar<br />y empieza a crecer
            </h2>
            <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto">
              La diferencia entre un restaurante que satura y uno que lucha por llegar a fin de mes no es el producto. Es la estrategia.
            </p>
            <ContactButton
              label="Construyamos tu estrategia"
              className="px-10 py-4 bg-white text-black rounded-full font-bold text-base hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-lg"
            />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default EstrategiaDigitalPage;
