
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

      <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 max-w-7xl mx-auto w-full flex flex-col items-center md:items-start text-center md:text-left">
        <div className="max-w-4xl mb-12">
          <h1 className="text-[2.65rem] sm:text-5xl md:text-[5.5rem] leading-[1.05] text-white mb-6 tracking-tight">
            Más Clientes para<br />
            Tu Restaurante
          </h1>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-0 mt-8 md:mt-16">
            <p className="text-white/80 text-base md:text-xl max-w-2xl leading-relaxed tracking-tight px-4 md:px-0">
              Llenamos tu restaurante con clientes locales. Google My Business optimizado y un sitio web que convierte.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center md:items-start justify-center md:justify-start gap-8 w-full">
          <div className="liquid-glass-dark rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 md:px-8 max-w-[95%] md:max-w-none">
            <div className="flex items-center gap-3 text-white">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Brain className="w-4.5 h-4.5 md:w-5 md:h-5 text-white/80" />
              </div>
              <div>
                <p className="text-sm md:text-sm font-semibold tracking-tight leading-tight">Marketing para Hostelería</p>
                <p className="text-xs md:text-xs text-white/60 leading-tight">Especialistas en restauración</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-white/10"></div>

            <div className="flex items-center gap-3 text-white">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Award className="w-4.5 h-4.5 md:w-5 md:h-5 text-white/80" />
              </div>
              <div>
                <p className="text-sm md:text-sm font-semibold tracking-tight leading-tight">Resultados medibles</p>
                <p className="text-xs md:text-xs text-white/60 leading-tight">más visibilidad y ventas</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-white/10"></div>

            <div className="flex items-center gap-3 text-white">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Globe className="w-4.5 h-4.5 md:w-5 md:h-5 text-white/80" />
              </div>
              <div>
                <p className="text-sm md:text-sm font-semibold tracking-tight leading-tight">Presencia digital completa</p>
                <p className="text-xs md:text-xs text-white/60 leading-tight">Google Maps + Web optimizada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
