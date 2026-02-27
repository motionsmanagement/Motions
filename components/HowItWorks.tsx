import React from 'react';
import { Phone, TrendingUp, Search, MapPin, ArrowRight, UtensilsCrossed, BarChart3, Target, MousePointer2, Smartphone } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-white py-28 font-['Inter']">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-20 text-balance">
          <div className="inline-flex items-center bg-[#f3f4f1] px-4 py-1.5 rounded-full mb-6">
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest font-mono">Metodología Profesional</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.1]">
            Nuestro Proceso para<br />
            Optimizar tu Restaurante
          </h2>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Auditoría */}
          <div className="group relative bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-10 flex flex-col min-h-[520px] transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative z-10 mb-8">
              <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight mb-4">
                Auditoría Estratégica
              </h3>
              <p className="text-white/40 text-sm md:text-base leading-relaxed h-[4.5rem] overflow-hidden">
                Evaluamos el posicionamiento actual de tu negocio y analizamos a la competencia local para identificar oportunidades reales de crecimiento.
              </p>
            </div>

            {/* Visualization: Animated Restaurant-Centric Map Audit */}
            <div className="mt-auto relative bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-md h-56 flex flex-col justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-6 grid-rows-6 w-full h-full">
                  {[...Array(36)].map((_, i) => (
                    <div key={i} className="border-t border-l border-white/20"></div>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-1/2 w-full animate-scan pointer-events-none"></div>

              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_white]"></div>
                    <span className="text-[9px] font-mono text-white/70 tracking-tighter uppercase">ESTADO_RANKING_MAPS</span>
                  </div>
                  <span className="text-[9px] font-mono text-white/40">ZONA_LOCAL</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className={`h-8 rounded-md border border-white/10 flex items-center justify-center transition-all duration-1000 ${i === 5 ? 'bg-white/25 scale-110 border-white/30' : 'bg-white/5 opacity-40'}`}
                      style={{ animation: i === 5 ? 'pulse-glow 2s infinite' : 'none' }}>
                      <MapPin className={`w-3 h-3 ${i === 5 ? 'text-white' : 'text-white/20'}`} />
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <div className="flex justify-between text-[9px] text-white/60 mb-1">
                    <span>RESEÑAS_RELEVANTES</span>
                    <span className="tabular-nums">4.8★</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[94%] bg-white/60 animate-load-slow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Desarrollo */}
          <div className="group relative bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-10 flex flex-col min-h-[520px] transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative z-10 mb-8">
              <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight mb-4">
                Desarrollo y Conversión
              </h3>
              <p className="text-white/40 text-sm md:text-base leading-relaxed h-[4.5rem] overflow-hidden">
                Implementamos soluciones digitales personalizadas, desde sitios web optimizados hasta cartas interactivas diseñadas para generar reservas.
              </p>
            </div>

            {/* Visualization: Floating Mobile Web Layout */}
            <div className="mt-auto relative bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-md h-56 flex flex-col items-center overflow-hidden">
              <div className="w-32 h-full border-x border-t border-white/20 rounded-t-2xl bg-white/5 p-3 space-y-3 animate-float-slow">
                <div className="h-2 w-full bg-white/20 rounded-full"></div>
                <div className="aspect-[4/3] w-full bg-white/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <UtensilsCrossed className="w-5 h-5 text-white/20" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-[80%] bg-white/10 rounded-full"></div>
                  <div className="h-1.5 w-[60%] bg-white/5 rounded-full"></div>
                </div>
                <div className="h-6 w-full bg-white/30 rounded-md flex items-center justify-center border border-white/20 shadow-lg">
                  <span className="text-[7px] font-black text-white tracking-widest">RESERVAR</span>
                </div>
              </div>
              <div className="absolute top-12 left-6">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full border border-white/20 shadow-2xl animate-float-delayed">
                  <Smartphone className="w-3 h-3 text-white/80" />
                  <span className="text-[8px] text-white/90 font-bold whitespace-nowrap">WEB_OPTIMIZADA</span>
                </div>
              </div>
              <div className="absolute bottom-10 right-6 animate-float">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur shadow-2xl">
                  <MousePointer2 className="w-4 h-4 text-white/60" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Optimización */}
          <div className="group relative bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-10 flex flex-col min-h-[520px] transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative z-10 mb-8">
              <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight mb-4">
                Optimización Continua
              </h3>
              <p className="text-white/40 text-sm md:text-base leading-relaxed h-[4.5rem] overflow-hidden">
                Analizamos el impacto de cada estrategia en tiempo real, ajustando los parámetros para asegurar el mejor retorno sobre tu inversión inicial.
              </p>
            </div>

            {/* Visualization: Animated Growth Dashboard */}
            <div className="mt-auto relative bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-md h-56 flex flex-col justify-end overflow-hidden">
              <div className="absolute top-6 left-6 flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                <span className="text-[8px] font-bold text-white/60 uppercase tracking-widest font-mono">MÉTRICAS_EN_VIVO</span>
              </div>

              <div className="flex items-end gap-[4px] h-20 mb-8 px-2 relative">
                {[20, 35, 30, 55, 40, 95, 60, 80, 50, 85].map((h, i) => (
                  <div key={i}
                    className={`w-full bg-white/10 rounded-t-sm transition-all duration-1000 ease-out`}
                    style={{
                      height: `${h}%`,
                      opacity: 0.2 + (i * 0.08),
                      animation: `grow-up 1.5s ease-out forwards ${i * 0.1}s`
                    }}>
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-white/5 to-transparent opacity-30 animate-pulse pointer-events-none"></div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <div className="text-2xl font-mono text-white inline-flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-white/80 animate-bounce-subtle" />
                    <span className="animate-counter">+42%</span>
                  </div>
                  <div className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mt-1">CRECIMIENTO_RESERVAS</div>
                </div>
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border border-white/20 bg-black/40 flex items-center justify-center text-[8px] text-white/50 font-bold backdrop-blur">
                      ROI
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 flex flex-col items-center">
          <button className="flex items-center gap-3 px-10 py-4 bg-black text-white rounded-full font-semibold text-base shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:bg-neutral-900 hover:scale-105 active:scale-95 transition-all group">
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Quiero potenciar mi restaurante
          </button>
          <p className="mt-6 text-gray-400 text-xs font-semibold italic tracking-wide">Metodología comprobada para maximizar el retorno de inversión.</p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
                @keyframes scan {
                    0% { transform: translateY(-100%); opacity: 0; }
                    50% { opacity: 0.5; }
                    100% { transform: translateY(200%); opacity: 0; }
                }
                .animate-scan {
                    animation: scan 4s linear infinite;
                }
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(1deg); }
                }
                .animate-float-slow {
                    animation: float-slow 4s ease-in-out infinite;
                }
                @keyframes float {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(5px, -5px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                @keyframes float-delayed {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(-3px, -8px); }
                }
                .animate-float-delayed {
                    animation: float-delayed 5s ease-in-out infinite;
                }
                @keyframes grow-up {
                    from { height: 0; opacity: 0; }
                    to { opacity: inherit; }
                }
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 5px rgba(255,255,255,0.2); }
                    50% { box-shadow: 0 0 20px rgba(255,255,255,0.4); }
                }
                @keyframes bounce-subtle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-3px); }
                }
                .animate-bounce-subtle {
                    animation: bounce-subtle 2s ease-in-out infinite;
                }
                .animate-load-slow {
                    animation: grow-up 2s ease-out forwards;
                }
            `}} />
    </section>
  );
};

export default HowItWorks;
