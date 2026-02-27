import React, { useState } from 'react';
import { Search, Smartphone, Palette, PenTool, BrainCircuit, MapPin, Globe, Utensils, MessageSquare, Layout } from 'lucide-react';

const serviceList = [
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Google My Business",
    desc: "Configuración y optimización completa del perfil de GMB para dominar el SEO local. Gestionamos reseñas, publicaciones y actualizaciones estratégicas para que tu restaurante sea la primera opción de Google.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200"
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Publicidad en Google Maps",
    desc: "Campañas de publicidad en Google Maps diseñadas para captar clientes en el momento exacto de búsqueda. Maximizamos tu visibilidad local con anuncios segmentados por ubicación y tipo de cocina.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200"
  },
  {
    icon: <Layout className="w-5 h-5" />,
    title: "Sitios Web para Restaurantes",
    desc: "Diseño web personalizado con fotografía profesional e integración de menús digitales interactivos. Sitios responsive optimizados para conversión, velocidad y sistemas de reservas directas.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200"
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Branding e Identidad Visual",
    desc: "Creación de logos profesionales y rebranding completo. Desarrollamos la identidad visual corporativa y guías de estilo que elevan el posicionamiento y la percepción de valor de tu marca.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    icon: <PenTool className="w-5 h-5" />,
    title: "Diseño Gráfico & Materiales",
    desc: "Rediseño de menús físicos y digitales, materiales de marketing, señalética y packaging para take-away. Coherencia visual en cada punto de contacto con el cliente.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200"
  },
  {
    icon: <BrainCircuit className="w-5 h-5" />,
    title: "Integración de IA",
    desc: "Automatización de atención al cliente con chatbots inteligentes para reservas y pedidos. Implementamos análisis predictivo de ventas para optimizar tus procesos y anticipar la demanda.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200"
  }
];

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-white font-['Inter']">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left Column: List */}
          <div className="lg:w-[45%]">
            {/* Added Pill Shape Tag */}
            <div className="inline-flex items-center bg-[#f3f4f1] border border-gray-200/50 px-4 py-1.5 rounded-full mb-6">
              <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Nuestras Soluciones</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-medium text-black leading-none mb-8 tracking-tighter">
              Soluciones expertas<br />para tu restaurante
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-12 max-w-sm">
              Potenciamos tu visibilidad digital para que te centres en lo que mejor sabes hacer: cocinar y dar un gran servicio.
            </p>

            <div className="flex flex-col border-t border-black/10">
              {serviceList.map((service, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`py-5 text-left border-b border-black/10 transition-all duration-300 group flex items-center justify-between ${activeTab === idx ? 'text-black' : 'text-black/30'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`transition-all duration-300 ${activeTab === idx ? 'text-black' : 'text-black/20 group-hover:text-black/40'}`}>
                      {service.icon}
                    </div>
                    <span className={`text-xl md:text-2xl font-medium tracking-tight ${activeTab === idx ? '' : 'hover:text-black/50'}`}>
                      {service.title}
                    </span>
                  </div>
                  {activeTab === idx && <ArrowRight className="w-5 h-5 animate-pulse" />}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Content */}
          <div className="lg:w-[55%] sticky top-32 h-fit">
            <div className="rounded-[3rem] overflow-hidden aspect-[4/3] mb-8 border border-black/5 shadow-2xl group/img relative">
              <img
                src={serviceList[activeTab].image}
                alt={serviceList[activeTab].title}
                className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover/img:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity"></div>
            </div>

            <div className="max-w-xl">
              <h3 className="text-3xl md:text-4xl font-medium text-black mb-6 tracking-tighter">
                {serviceList[activeTab].title}
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed tracking-tight mb-10">
                {serviceList[activeTab].desc}
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-10 py-4 rounded-full bg-black text-white text-sm font-bold hover:scale-105 transition-all shadow-xl flex items-center gap-2 group">
                  Saber Más
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-4 rounded-full border border-black/10 text-black text-sm font-bold hover:bg-black hover:text-white transition-all">
                  Contactar
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
