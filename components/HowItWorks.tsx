import React from 'react';
import { Phone, TrendingUp, Search, MapPin, ArrowRight, UtensilsCrossed, BarChart3, Target, MousePointer2, Smartphone, Star, PhoneCall, Users, Calendar, CheckCircle2, Clock, Zap, ShieldCheck, Loader2 } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-white py-28 font-['Inter']">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-20 text-balance">
          {/* Updated tag font to match Casos de Éxito (No font-mono, added border) */}
          <div className="inline-flex items-center bg-[#f3f4f1] border border-gray-200/50 px-4 py-1.5 rounded-full mb-6">
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Metodología Especialista</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.1]">
            Nuestro Proceso para<br />
            Optimizar tu Restaurante
          </h2>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Auditoría */}
          <div className="group relative bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-10 pb-6 flex flex-col min-h-[480px] transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative z-10 mb-1">
              <h3 className="text-2xl xl:text-3xl font-medium text-white leading-tight mb-4 whitespace-nowrap">
                Auditoría Local GMB
              </h3>
              <p className="text-white/40 text-[13px] leading-relaxed line-clamp-3">
                Evaluamos el posicionamiento de tu ficha en Google Maps y la calidad de tus reseñas para identificar los puntos de mejora inmediata.
              </p>
            </div>

            {/* Visualization: Technical Scanner */}
            <div className="mt-8 relative bg-white/5 rounded-3xl p-5 md:p-6 border border-white/10 backdrop-blur-md h-52 flex flex-col justify-center overflow-hidden shrink-0">
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
                    <span className="text-[9px] font-mono text-white tracking-tighter uppercase whitespace-nowrap">AUDITORÍA_RESEÑAS</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2 h-2 text-white/60 fill-white" />
                    ))}
                  </div>
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
                  <div className="flex justify-between text-[9px] text-white/60 mb-1 font-mono uppercase tracking-tighter">
                    <span>REPUTACIÓN_ONLINE</span>
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
          <div className="group relative bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-10 pb-6 flex flex-col min-h-[480px] transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative z-10 mb-1">
              <h3 className="text-2xl xl:text-3xl font-medium text-white leading-tight mb-4 whitespace-nowrap">
                Plataforma de Reservas
              </h3>
              <p className="text-white/40 text-[13px] leading-relaxed line-clamp-3">
                Desarrollamos tu sitio web especializado con carta digital interactiva, optimizado para convertir visitas en reservas sin comisiones locales.
              </p>
            </div>

            {/* Visualization: Professional Mobile UX */}
            <div className="mt-8 relative bg-white/5 rounded-3xl p-5 border border-white/10 backdrop-blur-md h-52 flex flex-col overflow-hidden shrink-0">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                  <span className="text-[9px] font-mono text-white/70 uppercase tracking-tighter">INTERFAZ_RESERVAS</span>
                </div>
                <div className="text-[9px] font-mono text-white/40 uppercase tracking-tighter">UX_OPTIMIZADO</div>
              </div>

              <div className="flex gap-6 h-full relative">
                {/* Mobile Device */}
                <div className="w-24 h-36 border-x border-t border-white/20 rounded-t-xl bg-black/40 p-2 shrink-0 relative overflow-hidden mt-2">
                  <div className="space-y-2 opacity-60">
                    <div className="h-1.5 w-full bg-white/20 rounded-full"></div>
                    <div className="aspect-square w-full bg-white/10 rounded-lg flex items-center justify-center">
                      <UtensilsCrossed className="w-4 h-4 text-white/20" />
                    </div>
                    <div className="h-4 w-full bg-white/20 rounded-md border border-white/10"></div>
                  </div>

                  <div className="absolute inset-x-0 bottom-4 px-2 translate-y-0 animate-booking-soft-pulse">
                    <div className="bg-white text-black text-[7px] font-black uppercase py-2 rounded-md shadow-2xl flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Confirmado
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 h-[1px] bg-white/60 animate-top-scan"></div>
                </div>

                {/* Information Boxes */}
                <div className="flex-1 space-y-3 pt-2">
                  <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center justify-between transition-colors hover:bg-white/10">
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] text-white/40 font-mono uppercase tracking-tighter leading-none">STATUS_RESERVA</span>
                      <span className="text-[11px] text-white font-mono leading-none">ONLINE</span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                  </div>

                  <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-3 h-3 text-white/40" />
                      <span className="text-[9px] font-mono text-white/40 uppercase tracking-tighter">DETALLE_MESA</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col">
                        <span className="text-[8px] text-white/30 font-mono uppercase tracking-tighter">PAX</span>
                        <span className="text-[11px] text-white font-mono">04</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[8px] text-white/30 font-mono uppercase tracking-tighter">HORA</span>
                        <span className="text-[11px] text-white font-mono">21:30</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/20 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                    <div className="text-[9px] text-white/40 font-mono uppercase tracking-tighter mb-1.5">MÉTRICA_WEB</div>
                    <div className="flex items-end justify-between">
                      <div className="text-xl font-mono text-white leading-none">100%</div>
                      <div className="text-[8px] text-white/30 font-mono uppercase tracking-tighter">UPTIME</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Crecimiento */}
          <div className="group relative bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-10 pb-6 flex flex-col min-h-[480px] transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative z-10 mb-1">
              <h3 className="text-2xl xl:text-3xl font-medium text-white leading-tight mb-4 whitespace-nowrap">
                Escalamiento y ROI
              </h3>
              <p className="text-white/40 text-[13px] leading-relaxed line-clamp-3">
                Implementamos estrategias de escalado basadas en datos reales para maximizar el retorno de tu inversión y el flujo de clientes.
              </p>
            </div>

            {/* Visualization: Interactive KPI Dashboard */}
            <div className="mt-8 relative bg-white/5 rounded-3xl p-5 border border-white/10 backdrop-blur-md h-52 flex flex-col overflow-hidden shrink-0">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[9px] font-mono text-white/40 tracking-tighter uppercase whitespace-nowrap">ANÁLISIS_CRECIMIENTO</div>
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
              </div>

              <div className="grid grid-cols-2 gap-3 flex-1 relative">
                {/* Metrics with subtle "live" updates */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-2 flex flex-col justify-center relative overflow-hidden group/metric">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-3 h-3 text-white/40" />
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-tighter">CLIENTES</span>
                  </div>
                  <div className="text-lg font-mono text-white tabular-nums animate-data-fade">+84</div>
                  <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover/metric:translate-x-[100%] transition-transform duration-700"></div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-2 flex flex-col justify-center relative overflow-hidden group/metric">
                  <div className="flex items-center gap-2 mb-1">
                    <PhoneCall className="w-3 h-3 text-white/40" />
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-tighter">LLAMADAS</span>
                  </div>
                  <div className="text-lg font-mono text-white tabular-nums animate-data-fade-delayed">+126</div>
                  <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover/metric:translate-x-[100%] transition-transform duration-700"></div>
                </div>

                <div className="col-span-2 bg-white/10 border border-white/20 rounded-xl p-2 flex items-center justify-between overflow-hidden relative">
                  <div className="relative z-10 w-full">
                    <div className="text-[9px] font-mono text-white/40 uppercase tracking-tighter mb-1">RETORNO_INVERSIÓN_ROI</div>
                    <div className="text-xl font-mono text-white group-hover:scale-105 transition-transform duration-500">4.2x</div>
                  </div>

                  {/* Enhanced Data Graph */}
                  <div className="absolute right-0 bottom-0 top-0 w-24 opacity-30">
                    <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                          <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                        </linearGradient>
                      </defs>
                      <path d="M0 35 Q 20 35, 40 25 T 80 10 T 100 5" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="200" strokeDashoffset="200" className="animate-draw-path" />
                      {/* Moving data point */}
                      <circle r="2" fill="white" className="animate-point-move">
                        <animateMotion dur="4s" repeatCount="indefinite" path="M0 35 Q 20 35, 40 25 T 80 10 T 100 5" />
                      </circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 flex flex-col items-center">
          <button className="flex items-center gap-3 px-10 py-4 bg-black text-white rounded-full font-semibold text-base shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:bg-neutral-900 hover:scale-105 active:scale-95 transition-all group">
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Quiero potenciar mi restaurante
          </button>
          {/* Removed "Resultados reales para hostelería" as requested */}
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
                
                @keyframes booking-soft-pulse {
                    0%, 40% { opacity: 0; transform: translateY(10px); }
                    50%, 90% { opacity: 1; transform: translateY(0); }
                    100% { opacity: 0; transform: translateY(-5px); }
                }
                .animate-booking-soft-pulse {
                    animation: booking-soft-pulse 4s ease-in-out infinite;
                }
                
                @keyframes top-scan {
                    0% { width: 0; left: 0; }
                    40% { width: 100%; left: 0; }
                    50% { width: 0; left: 100%; }
                    100% { width: 0; left: 0; }
                }
                .animate-top-scan {
                    animation: top-scan 4s linear infinite;
                }

                /* GRID 3 ANIMATIONS */
                @keyframes data-fade {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.7; transform: scale(0.98); }
                }
                .animate-data-fade { animation: data-fade 4s ease-in-out infinite; }
                .animate-data-fade-delayed { animation: data-fade 4s ease-in-out infinite 2s; }
                
                @keyframes point-move {
                    0% { opacity: 0; }
                    10%, 90% { opacity: 1; }
                    100% { opacity: 0; }
                }
                .animate-point-move { animation: point-move 4s linear infinite; }
                
                @keyframes draw-path {
                    to { stroke-dashoffset: 0; }
                }
                .animate-draw-path {
                    animation: draw-path 3s ease-out forwards;
                }
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 5px rgba(255,255,255,0.2); }
                    50% { box-shadow: 0 0 20px rgba(255,255,255,0.4); }
                }
                @keyframes grow-up {
                    from { height: 0; opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-load-slow {
                    animation: grow-up 2s ease-out forwards;
                }
            `}} />
    </section>
  );
};

export default HowItWorks;
