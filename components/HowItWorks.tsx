import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Análisis de tu Restaurante",
    desc: "Evaluamos tu presencia digital actual e identificamos oportunidades críticas para atraer más clientes locales."
  },
  {
    num: "02",
    title: "Estrategia Personalizada",
    desc: "Creamos un plan de acción específico combinando Google My Business y un sitio web de alta conversión."
  },
  {
    num: "03",
    title: "Implementación y Resultados",
    desc: "Ejecutamos la estrategia y monitoreamos el impacto: más visibilidad, más reservas y más ventas reales."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-white py-28 font-['Inter']">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-[#f3f4f1] px-4 py-1.5 rounded-full mb-6">
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Metodología</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.1]">
            Nuestro Proceso para<br />
            Aumentar tus Ventas
          </h2>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group relative bg-[#0A0A0A] rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[420px] transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden"
            >
              {/* Glass Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>

              <div className="relative z-10">
                <span className="text-7xl font-light text-white block mb-10 tracking-tighter transition-all">
                  {step.num}
                </span>
                <h3 className="text-3xl font-medium text-white leading-tight mb-6">
                  {step.title}
                </h3>
              </div>

              <div className="relative z-10">
                <p className="text-white/60 text-base leading-relaxed mb-8 line-clamp-3">
                  {step.desc}
                </p>
                <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                  Fase {step.num} <ArrowRight className="w-3 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 flex flex-col items-center">
          <p className="text-gray-400 text-sm mb-8 font-medium">¿Listo para empezar el camino al éxito?</p>
          <button className="flex items-center gap-3 px-10 py-4 bg-black text-white rounded-full font-semibold text-base shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-95 transition-all group">
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Llamar ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
