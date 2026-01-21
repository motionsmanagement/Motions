
import React from 'react';
import { Brain, Award, Clock, CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Estrategia a Medida",
    desc: "Plan personalizado según el tipo de cocina, ubicación y objetivos de tu restaurante."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Expertos en Restaurantes",
    desc: "Especializados en marketing digital para el sector gastronómico."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Resultados Rápidos",
    desc: "Verás más visibilidad en Google Maps y más reservas en semanas, no meses."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "ROI Comprobado",
    desc: "Nuestros clientes aumentan sus ventas en promedio un 40% en los primeros 3 meses."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#FBF9F6]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 text-[#4A3728] font-medium mb-6">
              <div className="w-2 h-2 rotate-45 bg-[#4A3728]"></div>
              <span>Por Qué Elegirnos</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-medium text-black mb-8 leading-tight">
              Resultados Comprobados
            </h2>
            <p className="text-lg text-[#2D241E]/60 mb-10 leading-relaxed max-w-lg">
              Google My Business optimizado y un sitio web que convierte. Tu restaurante será la primera opción para clientes en tu zona.
            </p>
            <button className="px-10 py-4 rounded-full bg-[#3D2C24] text-white font-medium hover:bg-[#2D241E] transition-colors">
              Conocer Más
            </button>
          </div>
          <div className="lg:w-1/2">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="/salmon.jpg"
                alt="Restaurante exitoso"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-black/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="text-[#4A3728] mb-6">{benefit.icon}</div>
              <h4 className="text-xl font-medium text-[#2D241E] mb-3">{benefit.title}</h4>
              <p className="text-[#2D241E]/60 leading-relaxed text-sm">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
