import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, ArrowRight, Layers, Type, Image, Heart, Award } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import useSEO from './useSEO';

const BrandingPage: React.FC = () => {
  useSEO({
    title: 'Branding e Identidad Visual para Restaurantes | Motions',
    description: 'Creamos la identidad visual que convierte tu restaurante en una marca reconocida. Logotipo, diseño de menús, manual de marca y materiales gráficos para el sector gastronómico.',
    canonical: 'https://www.motions.es/servicios/branding-restaurantes',
  });
  const features = [
    { icon: <Palette className="w-5 h-5" />, title: 'Identidad Visual Completa', desc: 'Logotipo, paleta de colores, tipografías y sistema visual que diferencian tu marca.' },
    { icon: <Layers className="w-5 h-5" />, title: 'Manual de Marca', desc: 'Guía completa de uso de tu identidad para que siempre proyectes coherencia y profesionalidad.' },
    { icon: <Type className="w-5 h-5" />, title: 'Diseño de Menús', desc: 'Cartas y menús gastronómicos que reflejan tu concepto y elevan la experiencia del comensal.' },
    { icon: <Image className="w-5 h-5" />, title: 'Materiales Gráficos', desc: 'Tarjetas, flyers, packaging, señalética y todo lo que necesitas para una imagen impecable.' },
    { icon: <Heart className="w-5 h-5" />, title: 'Estrategia de Marca', desc: 'Definimos tu posicionamiento, valores y personalidad para diferenciarte en el mercado.' },
    { icon: <Award className="w-5 h-5" />, title: 'Branding para Redes', desc: 'Templates y recursos visuales para Instagram, Google y toda tu presencia digital.' },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-[#FBF9F6] font-['Inter']">
        {/* Hero */}
        <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-xs font-semibold uppercase tracking-widest mb-8">
              <Palette className="w-3.5 h-3.5" /> Branding
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight text-black leading-[1.05] mb-8">
              Branding e Identidad<br />
              <span className="text-gray-400">para Restaurantes</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-12 max-w-2xl">
              Creamos la identidad visual que convierte tu restaurante en una marca reconocida, deseada y recordada. Del logotipo al menú, todo con coherencia Premium.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/#contacto"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Quiero una marca poderosa <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold border border-gray-200 hover:border-gray-400 transition-all"
              >
                Ver casos de éxito
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-6 md:px-12 bg-black">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {[
              { num: '+40%', label: 'Aumento de ticket medio con branding coherente' },
              { num: '2.3x', label: 'Más seguidores en redes con identidad definida' },
              { num: '100%', label: 'Clientes que repiten con una marca que enamora' },
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
              Tu marca, construida para destacar en el sector gastronómico
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

        {/* Philosophy */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mb-6">
                La diferencia entre un restaurante y una marca de referencia
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Un logotipo no es un branding. Una marca es el conjunto de emociones, valores y experiencias que asocian tus clientes con tu restaurante.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                En Motions diseñamos identidades que generan reconocimiento inmediato, fidelidad a largo plazo y diferenciación real en un mercado saturado.
              </p>
              <Link
                to="/#contacto"
                className="inline-flex items-center gap-2 text-black font-semibold hover:gap-4 transition-all"
              >
                Habla con nosotros <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Logotipo & Símbolo', 'Paleta Cromática', 'Sistema Tipográfico', 'Diseño de Menús'].map((item, i) => (
                <div key={i} className="p-6 bg-[#FBF9F6] rounded-2xl border border-gray-100">
                  <div className="w-2 h-2 bg-black rounded-full mb-4"></div>
                  <p className="text-sm font-medium text-black">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 md:px-12 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">
              ¿Tu restaurante tiene la identidad que merece?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Un buen branding hace que la gente elija tu restaurante incluso antes de probarlo. Es tu primera impresión, tu carta de presentación.
            </p>
            <Link
              to="/#contacto"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Renovamos tu imagen <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BrandingPage;
