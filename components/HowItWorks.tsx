import React from 'react';
import { Phone, TrendingUp, Search, MapPin, ArrowRight, UtensilsCrossed, BarChart3, Target, MousePointer2, Smartphone } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-white py-28 font-['Inter']">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-[#f3f4f1] px-4 py-1.5 rounded-full mb-6">
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Metodología de Crecimiento</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.1]">
            Cómo Potenciamos tu<br />
            Negocio Gastronómico
          </h2>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Auditoría Local */}
          <div className="group relative bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-10 flex flex-col min-h-[520px] transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative z-10 mb-8">
              <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight mb-4">
                Auditoría de Visibilidad
              </h3>
              <p className="text-white/40 text-sm md:text-base leading-relaxed h-[4.5rem] overflow-hidden">
                Analizamos tu posicionamiento en Google Maps y la reputación de tu restaurante para detectar qué te impide captar más clientes.
              </p>
            </div>

            {/* Visualization: Restaurant-Centric Map Audit */}
            <div className="mt-auto relative bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-md h-56 flex flex-col justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-6 grid-rows-6 w-full h-full">
                  {[...Array(36)].map((_, i) => (
                    <div key={i} className="border-t border-l border-white/20"></div>
                  ))}
                </div>
              </div>

              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_white]"></div>
                    <span className="text-[9px] font-mono text-white/70 tracking-tighter uppercase whitespace-nowrap">MAPS_RANKING_STATUS</span>
                  </div>
                  <span className="text-[9px] font-mono text-white/40">ZONA_LOCAL</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className={`h-8 rounded-md border border-white/10 flex items-center justify-center ${i === 5 ? 'bg-white/20' : 'bg-white/5'}`}>
                      <MapPin className={`w-3 h-3 ${i === 5 ? 'text-white' : 'text-white/20'}`} />
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <div className="flex justify-between text-[9px] text-white/60 mb-1">
                    <span>RESEÑAS_POSITIVAS</span>
                    <span>4.8★</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[90%] bg-white/60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Diseño de Conversión */}
          <div className="group relative bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-10 flex flex-col min-h-[520px] transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative z-10 mb-8">
              <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight mb-4">
                Web Gastronómica Pro
              </h3>
              <p className="text-white/40 text-sm md:text-base leading-relaxed h-[4.5rem] overflow-hidden">
                Creamos tu sitio web optimizado para móviles con carta digital interactiva y sistema de reservas directo para evitar comisiones.
              </p>
            </div>

            {/* Visualization: Mobile Web Layout / UX */}
            <div className="mt-auto relative bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-md h-56 flex flex-col items-center overflow-hidden">
              <div className="w-32 h-full border-x border-t border-white/20 rounded-t-2xl bg-white/5 p-3 space-y-3">
                <div className="h-2 w-full bg-white/20 rounded-full"></div>
                <div className="aspect-[4/3] w-full bg-white/10 rounded-lg flex items-center justify-center">
                  <UtensilsCrossed className="w-5 h-5 text-white/20" />
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-[80%] bg-white/10 rounded-full"></div>
                  <div className="h-1.5 w-[60%] bg-white/5 rounded-full"></div>
                </div>
                <div className="h-6 w-full bg-white/20 rounded-md flex items-center justify-center">
                  <span className="text-[8px] font-bold text-white/60 tracking-tight">RESERVAR MESA</span>
                </div>
              </div>
              <div className="absolute top-12 left-6">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full border border-white/20 shadow-xl scale-90">
                  <Smartphone className="w-3 h-3 text-white/60" />
                  <span className="text-[8px] text-white/80 font-bold whitespace-nowrap">OPTIMIZACIÓN_MÓVIL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Escalamiento */}
          <div className="group relative bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-10 flex flex-col min-h-[520px] transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative z-10 mb-8">
              <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight mb-4">
                Gestión de Resultados
              </h3>
              <p className="text-white/40 text-sm md:text-base leading-relaxed h-[4.5rem] overflow-hidden">
                Monitoreamos el retorno de inversión midiendo el incremento en llamadas y reservas reales para escalar tu facturación mensual.
              </p>
            </div>

            {/* Visualization: Daily Reservations / Growth Dashboard */}
            <div className="mt-auto relative bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-md h-56 flex flex-col justify-end overflow-hidden">
              <div className="absolute top-6 left-6 flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest">METRICA_EN_VIVO</span>
              </div>

              <div className="flex items-end gap-[4px] h-20 mb-8 px-2">
                <div className="w-full bg-white/5 rounded-t-sm h-[20%]"></div>
                <div className="w-full bg-white/10 rounded-t-sm h-[35%]"></div>
                <div className="w-full bg-white/5 rounded-t-sm h-[30%]"></div>
                <div className="w-full bg-white/20 rounded-t-sm h-[55%]"></div>
                <div className="w-full bg-white/10 rounded-t-sm h-[40%]"></div>
                <div className="w-full bg-white/60 rounded-t-sm h-[95%] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"></div>
                <div className="w-full bg-white/20 rounded-t-sm h-[60%]"></div>
                <div className="w-full bg-white/40 rounded-t-sm h-[80%]"></div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <div className="text-2xl font-mono text-white inline-flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-white/60" />
                    +42%
                  </div>
                  <div className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mt-1">NUEVAS_RESERVAS</div>
                </div>
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[8px] text-white/40">
                      R{i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 flex flex-col items-center">
          <button className="flex items-center gap-3 px-10 py-4 bg-black text-white rounded-full font-semibold text-base shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:scale-105 active:scale-95 transition-all group">
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Quiero potenciar mi restaurante
          </button>
          <p className="mt-6 text-gray-400 text-xs font-medium italic">Metodología comprobada en más de 50 negocios gastronómicos.</p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
                @keyframes spin-slow {
                    from { transform: rotate(0deg); } }
                    to { transform: rotate(360deg); } }
                }
                .animate-spin-slow {
                    animation: spin-slow 12s linear infinite;
                }
            `}} />
    </section>
  );
};

export default HowItWorks;
