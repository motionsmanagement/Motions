import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Zap, ArrowRight, Monitor, Smartphone, ShieldCheck, TrendingUp } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import useSEO from './useSEO';

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
    { icon: <TrendingUp className="w-5 h-5" />, title: 'Conversión Maximizada', desc: 'Diseño orientado a resultados: cada elemento está pensado para convertir visitas en reservas.' },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-[#FBF9F6] font-['Inter']">
        {/* Hero */}
        <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-xs font-semibold uppercase tracking-widest mb-8">
              <Globe className="w-3.5 h-3.5" /> Diseño Web
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight text-black leading-[1.05] mb-8">
              Diseño Web Premium<br />
              <span className="text-gray-400">para Restaurantes</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-12 max-w-2xl">
              Creamos webs de alto rendimiento que reflejan la excelencia de tu restaurante y convierten cada visita online en una reserva real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/#contacto"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Quiero mi web premium <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold border border-gray-200 hover:border-gray-400 transition-all"
              >
                Ver proyectos realizados
              </Link>
            </div>
          </div>
        </section>

        {/* Showcase visual */}
        <section className="py-16 px-6 md:px-12 bg-black">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {[
              { num: '100/100', label: 'Puntuación Google PageSpeed' },
              { num: '<1s', label: 'Tiempo de carga promedio' },
              { num: '+65%', label: 'Más reservas tras el rediseño' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-white mb-3">{s.num}</span>
                <span className="text-gray-400 text-sm max-w-[180px]">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-16 max-w-2xl">
              Una web que trabaja por ti las 24 horas del día
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

        {/* Process */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-16 text-center">
              Cómo trabajamos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Briefing', desc: 'Analizamos tu restaurante, competencia y objetivos para definir la estrategia visual.' },
                { step: '02', title: 'Diseño', desc: 'Creamos el diseño personalizado adaptado a tu identidad de marca y tu cliente ideal.' },
                { step: '03', title: 'Desarrollo', desc: 'Programamos la web con tecnología de última generación, ágil y 100% optimizada.' },
                { step: '04', title: 'Lanzamiento', desc: 'Publicamos tu web y te entregamos el control total con soporte continuado.' },
              ].map((p, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-5xl font-bold text-gray-100 mb-4">{p.step}</span>
                  <h3 className="text-lg font-semibold text-black mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 md:px-12 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">
              Tu restaurante merece una web que esté a su altura
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Tu web es tu mejor comercial. Está abierta 24/7 y habla por ti antes de que el cliente te llame. Hagámosla perfecta.
            </p>
            <Link
              to="/#contacto"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Empezamos <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DisenoWebPage;
