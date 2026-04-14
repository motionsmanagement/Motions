import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Layers, Type, Image, Heart, Award, ChevronRight } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import useSEO from './useSEO';
import ContactButton from './ContactButton';

const BrandingPage: React.FC = () => {
  useSEO({
    title: 'Branding e Identidad Visual para Restaurantes | Motions',
    description: 'Creamos la identidad visual que convierte tu restaurante en una marca reconocida. Logotipo, diseño de menús y materiales gráficos estratégicos.',
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
      <main className="bg-[#FBF9F6] font-['Inter'] overflow-hidden">

        {/* Hero Section */}
        <section className="relative pt-32 md:pt-44 pb-16 md:pb-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/5 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                <span className="text-[10px] font-bold text-black uppercase tracking-widest">Identidad & Concepto</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-black leading-[1.1] md:leading-[1.05] mb-8 max-w-4xl">
              Branding <br className="hidden md:block" />
              para Restaurantes
            </h1>
            
            <p className="text-base md:text-xl text-gray-500/80 leading-relaxed mb-10 max-w-2xl font-light">
                Construimos marcas memorables que capturan la esencia de tu cocina. No solo diseñamos logos; creamos ecosistemas visuales premium.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <ContactButton label="Crear mi identidad de marca" />
              <Link 
                to="/#proyectos" 
                className="w-full sm:w-auto px-6 py-3.5 bg-black/[0.03] border border-black/5 text-gray-500 rounded-full font-semibold hover:bg-black/[0.06] transition-all text-center text-sm md:text-base flex items-center justify-center gap-2"
              >
                Ver casos de éxito <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-24 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 relative z-10">
            {[
              { num: '+40%', label: 'Aumento promedio en el valor percibido de la marca.' },
              { num: 'Top 10', label: 'Restaurantes con identidades coherentes lideran el mercado.' },
              { num: '100%', label: 'Coherencia visual en todos los puntos de contacto.' },
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
                    Diferenciación real en un mundo visual.
                </h2>
                <p className="text-gray-400 text-base md:text-lg font-light">
                    Tus clientes te juzgan antes de probar el primer bocado. Nos aseguramos de que su primera impresión sea inmejorable.
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

        {/* Premium CTA */}
        <section className="pb-20 md:pb-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto text-center md:text-left">
            <div className="bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-20 relative overflow-hidden flex flex-col items-center md:items-start">
                <div className="relative z-10 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight leading-[1.2]">
                        Eleva tu marca a un nivel superior.
                    </h2>
                    <p className="text-white/40 text-sm md:text-lg mb-10 font-light max-w-2xl leading-relaxed">
                        Un buen diseño atrae. Un buen branding fideliza. Empecemos a construir tu legado hoy mismo.
                    </p>
                    <ContactButton
                        label="Definir mi Marca"
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

export default BrandingPage;
