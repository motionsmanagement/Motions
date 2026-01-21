
import React from 'react';
import { Brain, Award, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="/steak.jpg"
          alt="Steak gourmet"
          className="w-full h-full object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>

      <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl mb-12">
          <h1 className="text-5xl md:text-[5.5rem] leading-[1.05] text-white mb-6">
            Más Clientes para<br />
            Tu Restaurante
          </h1>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-0 mt-16">
            <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed tracking-tight">
              Llenamos tu restaurante con clientes locales. Google My Business optimizado y un sitio web que convierte.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <button className="w-full lg:w-auto px-12 py-5 rounded-full bg-white text-[#2D241E] text-lg font-bold hover:scale-105 transition-transform shadow-[0_20px_50px_rgba(255,255,255,0.1)] tracking-tight">
            Llamar ahora
          </button>

          <div className="liquid-glass-dark rounded-[2.5rem] p-6 flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full lg:w-auto md:px-10">
            <div className="flex items-center gap-4 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Brain className="w-5 h-5 text-white/80" />
              </div>
              <div className="whitespace-nowrap">
                <p className="text-sm font-semibold tracking-tight">Estrategia personalizada</p>
                <p className="text-xs text-white/40">para tu restaurante</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-white/10"></div>

            <div className="flex items-center gap-4 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-white/80" />
              </div>
              <div className="whitespace-nowrap">
                <p className="text-sm font-semibold tracking-tight">Resultados medibles</p>
                <p className="text-xs text-white/40">más visibilidad y ventas</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-white/10"></div>

            <div className="flex items-center gap-4 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-white/80" />
              </div>
              <div className="whitespace-nowrap">
                <p className="text-sm font-semibold tracking-tight">Presencia digital completa</p>
                <p className="text-xs text-white/40">Google Maps + Web optimizada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
