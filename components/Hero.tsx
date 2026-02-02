
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
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>

      <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl mb-12">
          <h1 className="text-4xl md:text-[5.5rem] leading-[1.05] text-white mb-6">
            Más Clientes para<br />
            Tu Restaurante
          </h1>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-0 mt-16">
            <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed tracking-tight">
              Llenamos tu restaurante con clientes locales. Google My Business optimizado y un sitio web que convierte.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <button className="px-8 md:px-12 py-3 md:py-5 rounded-full bg-black/40 backdrop-blur-xl border border-white/30 text-white text-sm md:text-lg font-bold hover:scale-105 hover:bg-black/50 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] tracking-tight">
            Llamar ahora
          </button>

          <div className="liquid-glass-dark rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12 md:px-10 max-w-[95%] md:max-w-none">
            <div className="flex items-center gap-3 text-white">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Brain className="w-4 h-4 md:w-5 md:h-5 text-white/80" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-semibold tracking-tight leading-tight">Estrategia personalizada</p>
                <p className="text-[10px] md:text-xs text-white/40 leading-tight">para tu restaurante</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-white/10"></div>

            <div className="flex items-center gap-3 text-white">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-white/80" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-semibold tracking-tight leading-tight">Resultados medibles</p>
                <p className="text-[10px] md:text-xs text-white/40 leading-tight">más visibilidad y ventas</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-white/10"></div>

            <div className="flex items-center gap-3 text-white">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Globe className="w-4 h-4 md:w-5 md:h-5 text-white/80" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-semibold tracking-tight leading-tight">Presencia digital completa</p>
                <p className="text-[10px] md:text-xs text-white/40 leading-tight">Google Maps + Web optimizada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
