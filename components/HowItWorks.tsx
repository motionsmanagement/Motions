
import React from 'react';
import { ChevronRight } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Análisis de tu Restaurante",
    desc: "Evaluamos tu presencia digital actual y identificamos oportunidades para atraer más clientes locales."
  },
  {
    num: "02",
    title: "Estrategia Personalizada",
    desc: "Creamos un plan específico para tu restaurante combinando Google My Business y un sitio web optimizado."
  },
  {
    num: "03",
    title: "Implementación y Resultados",
    desc: "Ejecutamos la estrategia y monitoreamos los resultados: más visibilidad, más reservas, más ventas."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-end items-start mb-16">
          <h2 className="text-4xl md:text-6xl font-medium leading-tight text-right md:max-w-2xl text-black">
            <span>Nuestro Proceso para</span><br />
            <span>Aumentar tus Ventas</span>
          </h2>
        </div>

        {/* Gray Container and Cards */}
        <div className="relative rounded-[2.5rem] bg-gray-100 overflow-hidden min-h-[500px] flex flex-col justify-center p-8 md:p-12">
          {/* Cards Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white/50 backdrop-blur-sm border border-black/5 rounded-[1.5rem] p-8 flex flex-col justify-between min-h-[400px] transition-all hover:bg-white/70"
              >
                <div>
                  <span className="text-3xl font-light text-black/20 block mb-6">{step.num}</span>
                  <h3 className="text-3xl font-semibold text-black leading-tight">{step.title}</h3>
                </div>
                <p className="text-black/60 text-sm leading-relaxed max-w-[240px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Centered Button at bottom */}
          <div className="mt-12 flex justify-center z-20">
            <button className="px-10 py-3 bg-black text-white rounded-full font-semibold text-sm shadow-xl hover:scale-105 transition-transform">
              Llamar ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
