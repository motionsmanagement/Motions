import React from 'react';
import { Phone, TrendingUp, Search, MapPin, Monitor, ArrowRight, UtensilsCrossed, BarChart3, Target } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-white py-28 font-['Inter']">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-[#f3f4f1] px-4 py-1.5 rounded-full mb-6">
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Metodología Especializada</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.1]">
            Nuestro Proceso para<br />
            Aumentar tus Ventas
          </h2>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Análisis */}
          <div className="group relative bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-10 flex flex-col min-h-[520px] transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative z-10 mb-8">
              <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight mb-4">
                Análisis de tu Restaurante
              </h3>
              <p className="text-white/40 text-sm md:text-base leading-relaxed h-[4.5rem] overflow-hidden">
                Evaluamos tu visibilidad actual en Google Maps y comparamos tu marca contra la competencia local para detectar fugas de clientes.
              </p>
            </div>

            {/* Visualization: Intricate Minimalist Restaurant Scanner */}
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
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    <span className="text-[9px] font-mono text-white/70 tracking-tighter">ESCANEO_LOCAL_GMB</span>
                  </div>
                  <span className="text-[9px] font-mono text-white/40 italic">Motions_Core_v2</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[9px] text-white/40 mb-1">
                    <span>OPTIMIZACIÓN_FICHA</span>
                    <span>88%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[88%] bg-white/40"></div>
                  </div>
                  <div className="flex justify-between text-[9px] text-white/40 mb-1">
                    <span>REPUTACIÓN_ONLINE</span>
                    <span>62%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[62%] bg-white/20"></div>
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <div className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center">
                    <UtensilsCrossed className="w-3 h-3 text-white/50" />
                  </div>
                  <div className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center">
                    <MapPin className="w-3 h-3 text-white/50" />
                  </div>
                  <div className="flex-1 rounded-lg border border-white/20 flex items-center px-3 gap-2">
                    <div className="w-full h-1 bg-white/10 rounded-full"></div>
                    <span className="text-[8px] text-white/30 font-mono">AUDIT_ON</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Estrategia */}
          <div className="group relative bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-10 flex flex-col min-h-[520px] transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative z-10 mb-8">
              <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight mb-4">
                Estrategia Personalizada
              </h3>
              <p className="text-white/40 text-sm md:text-base leading-relaxed h-[4.5rem] overflow-hidden">
                Creamos un ecosistema digital exclusivo que incluye fotografía gastronómica, copywriting persuasivo y una web enfocada en reservas.
              </p>
            </div>

            {/* Visualization: Strategy/Layout Blueprint */}
            <div className="mt-auto relative bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-md h-56 flex flex-col overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-white/40" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">PLANO_ESTRATÉGICO</div>
                  <div className="text-lg font-mono text-white/90 tabular-nums">1.4s</div>
                  <div className="text-[8px] text-white/30 truncate">TIEMPO_CARGA_WEB</div>
                </div>
              </div>

              <div className="relative flex-1">
                <div className="absolute left-0 top-0 h-full w-px bg-white/10"></div>
                <div className="space-y-4 pl-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-sm border border-white/60 bg-white/20"></div>
                    <div className="h-2 w-32 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-white/60"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-sm border border-white/20"></div>
                    <div className="h-2 w-24 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-white/20"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-sm border border-white/20"></div>
                    <div className="h-2 w-28 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-white/10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Resultados */}
          <div className="group relative bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-10 flex flex-col min-h-[520px] transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative z-10 mb-8">
              <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight mb-4">
                Crecimiento y Resultados
              </h3>
              <p className="text-white/40 text-sm md:text-base leading-relaxed h-[4.5rem] overflow-hidden">
                Lanzamos la estrategia y optimizamos en tiempo real para garantizar un flujo constante de nuevas mesas ocupadas y facturación.
              </p>
            </div>

            {/* Visualization: Intricate Data Dashboard */}
            <div className="mt-auto relative bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-md h-56 flex flex-col justify-end overflow-hidden">
              <div className="absolute top-6 right-6">
                <BarChart3 className="w-10 h-10 text-white/5" />
              </div>

              <div className="flex items-end gap-[3px] h-20 mb-8 px-2">
                <div className="w-full bg-white/5 rounded-t-sm h-[30%]"></div>
                <div className="w-full bg-white/10 rounded-t-sm h-[45%]"></div>
                <div className="w-full bg-white/5 rounded-t-sm h-[35%]"></div>
                <div className="w-full bg-white/20 rounded-t-sm h-[60%]"></div>
                <div className="w-full bg-white/10 rounded-t-sm h-[50%]"></div>
                <div className="w-full bg-white/40 rounded-t-sm h-[90%] group-hover:bg-white/60 transition-colors"></div>
                <div className="w-full bg-white/20 rounded-t-sm h-[65%]"></div>
                <div className="w-full bg-white/30 rounded-t-sm h-[75%]"></div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <div className="text-2xl font-mono text-white">+62%</div>
                  <div className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">RESERVAS_MENSUALES</div>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 flex flex-col items-center">
          <button className="flex items-center gap-3 px-10 py-4 bg-black text-white rounded-full font-semibold text-base shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:scale-105 active:scale-95 transition-all group">
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Quiero empezar mi proceso
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 12s linear infinite;
                }
            `}} />
    </section>
  );
};

export default HowItWorks;
