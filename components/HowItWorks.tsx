import React from 'react';
import { Phone, TrendingUp, Search, MapPin, ArrowRight, UtensilsCrossed, BarChart3, Target, MousePointer2, Smartphone, Star, PhoneCall, Users, Calendar, CheckCircle2, Clock, Zap, ShieldCheck, Loader2 } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-white py-28 font-['Inter']">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-20 text-balance">
          <div className="inline-flex items-center bg-[#f3f4f1] px-4 py-1.5 rounded-full mb-6">
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest font-mono">Metodología Especialista</span>
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

            {/* Visualization: Technical Scanner Focus on Google Reviews */}
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
                    <span className="text-[9px] font-mono text-white/70 tracking-tighter uppercase whitespace-nowrap">AUDITORÍA_RESEÑAS</span>
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
                  <div className="flex justify-between text-[9px] text-white/60 mb-1 font-mono uppercase">
                    <span>Reputación_Online</span>
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

            {/* Visualization: High-End Fluid Booking Loop */}
            <div className="mt-8 relative bg-white/5 rounded-3xl p-5 border border-white/10 backdrop-blur-md h-52 flex flex-col overflow-hidden shrink-0">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest font-bold">Reserva_Cloud</span>
                </div>
                <div className="px-2 py-0.5 rounded-md bg-white/10 border border-white/10 text-[8px] font-bold text-white/60 uppercase tracking-tighter">Sincronización_Real</div>
              </div>

              <div className="flex gap-6 h-full relative">
                {/* Mobile Device with Perfect Loop Animation */}
                <div className="w-24 h-36 border-x border-t border-white/20 rounded-t-xl bg-black/40 p-2 shrink-0 relative overflow-hidden mt-2 shadow-2xl">
                  {/* Step 1: Loading/Searching */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3 animate-loop-step-1 opacity-100">
                    <Loader2 className="w-6 h-6 text-white/40 animate-spin mb-2" />
                    <div className="h-1 w-12 bg-white/10 rounded-full animate-pulse"></div>
                  </div>

                  {/* Step 2: Content Selection (Menu) */}
                  <div className="absolute inset-0 p-2 space-y-2 animate-loop-step-2 opacity-0">
                    <div className="h-12 w-full bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
                      <UtensilsCrossed className="w-4 h-4 text-white/20" />
                    </div>
                    <div className="space-y-1">
                      <div className="h-1 w-full bg-white/10 rounded-full"></div>
                      <div className="h-1 w-2/3 bg-white/10 rounded-full"></div>
                    </div>
                    <div className="h-6 w-full bg-white/40 rounded-md border border-white/20 shadow-lg"></div>
                  </div>

                  {/* Step 3: Success Confirmation */}
                  <div className="absolute inset-0 bg-white/5 border border-white/10 flex flex-col items-center justify-center animate-loop-step-3 opacity-0">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)] mb-2">
                      <CheckCircle2 className="w-5 h-5 text-black" />
                    </div>
                    <span className="text-[7px] text-white font-black tracking-widest uppercase">¡Confirmado!</span>
                    <div className="mt-2 text-[5px] font-mono text-white/40">TICKET #8821</div>
                  </div>
                </div>

                {/* Technical Side-Info (Static but layered) */}
                <div className="flex-1 space-y-3 pt-2">
                  <div className="relative group">
                    <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center justify-between">
                      <div className="flex flex-col gap-1">
                        <span className="text-[7px] text-white/30 uppercase font-bold tracking-widest leading-none">Status</span>
                        <span className="text-[10px] text-white font-mono leading-none">Online</span>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-3 h-3 text-white/40" />
                      <span className="text-[8px] text-white/50 font-bold uppercase tracking-widest">Auto_Sync</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="h-3 w-0.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full w-full bg-white/60 animate-loading-bar" style={{ animationDelay: `${i * 0.15}s` }}></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-black/20 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                    <div className="text-[7px] text-white/30 font-bold uppercase tracking-widest mb-1.5">Métrica Global</div>
                    <div className="flex items-end justify-between">
                      <div className="text-xl font-mono text-white leading-none">100%</div>
                      <div className="text-[7px] text-white/30 uppercase font-bold">Disponibilidad</div>
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

            {/* Visualization: Professional KPI Dashboard */}
            <div className="mt-8 relative bg-white/5 rounded-3xl p-5 border border-white/10 backdrop-blur-md h-52 flex flex-col overflow-hidden shrink-0">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[10px] font-mono text-white/40 tracking-widest uppercase">RESULTADOS_ROI</div>
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
              </div>

              <div className="grid grid-cols-2 gap-3 flex-1">
                <div className="bg-white/5 border border-white/10 rounded-xl p-2 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-3 h-3 text-white/40" />
                    <span className="text-[8px] text-white/40 font-bold uppercase">Clientes</span>
                  </div>
                  <div className="text-lg font-mono text-white tabular-nums">+84</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-2 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <PhoneCall className="w-3 h-3 text-white/40" />
                    <span className="text-[8px] text-white/40 font-bold uppercase">Llamadas</span>
                  </div>
                  <div className="text-lg font-mono text-white tabular-nums">+126</div>
                </div>
                <div className="col-span-2 bg-white/10 border border-white/20 rounded-xl p-2 flex items-center justify-between overflow-hidden relative">
                  <div className="relative z-10">
                    <div className="text-[8px] text-white/50 font-bold uppercase tracking-widest mb-0.5">Retorno Inversión</div>
                    <div className="text-xl font-mono text-white group-hover:scale-105 transition-transform duration-500">4.2x</div>
                  </div>
                  <div className="absolute right-0 bottom-0 top-0 w-20 opacity-20">
                    <svg viewBox="0 0 100 40" className="w-full h-full">
                      <path d="M0 35 Q 20 35, 40 25 T 80 10 T 100 5" fill="none" stroke="white" strokeWidth="2" strokeDasharray="200" strokeDashoffset="200" className="animate-draw-path" />
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
          <p className="mt-4 text-gray-400 text-xs font-semibold italic tracking-wide text-center uppercase opacity-60">Resultados reales para hostelería</p>
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
                @keyframes loop-step-1 {
                    0%, 25% { opacity: 1; transform: scale(1); }
                    33%, 100% { opacity: 0; transform: scale(0.95); }
                }
                @keyframes loop-step-2 {
                    0%, 33% { opacity: 0; transform: scale(1.05); }
                    41%, 58% { opacity: 1; transform: scale(1); }
                    66%, 100% { opacity: 0; transform: scale(0.95); }
                }
                @keyframes loop-step-3 {
                    0%, 66% { opacity: 0; transform: scale(1.05); }
                    74%, 91% { opacity: 1; transform: scale(1); }
                    100% { opacity: 0; transform: scale(0.95); }
                }
                .animate-loop-step-1 { animation: loop-step-1 9s infinite; }
                .animate-loop-step-2 { animation: loop-step-2 9s infinite; }
                .animate-loop-step-3 { animation: loop-step-3 9s infinite; }
                
                @keyframes loading-bar {
                    0% { height: 0; }
                    50% { height: 100%; }
                    100% { height: 0; }
                }
                .animate-loading-bar {
                    animation: loading-bar 1.5s ease-in-out infinite;
                }
                
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(1deg); }
                }
                .animate-float-slow {
                    animation: float-slow 4s ease-in-out infinite;
                }
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
