import React from 'react';
import { Phone, TrendingUp, Search, MapPin, ArrowRight, UtensilsCrossed, BarChart3, Target, MousePointer2, Smartphone, Star, PhoneCall, Users } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-white py-28 font-['Inter']">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Auditoría */}
          <div className="group relative bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-10 flex flex-col min-h-[500px] transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative z-10 mb-4">
              <h3 className="text-2xl xl:text-3xl font-medium text-white leading-tight mb-2 whitespace-nowrap">
                Auditoría Local GMB
              </h3>
              <p className="text-white/40 text-sm md:text-base leading-relaxed h-[4.5rem] overflow-hidden">
                Evaluamos el posicionamiento de tu ficha en Google Maps y la calidad de tus reseñas para identificar los puntos de mejora inmediata.
              </p>
            </div>

            {/* Visualization: Technical Scanner Focus on Google Reviews */}
            <div className="mt-auto relative bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-md h-52 flex flex-col justify-center overflow-hidden">
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
                    <span className="text-[9px] font-mono text-white/70 tracking-tighter uppercase">AUDITORÍA_RESEÑAS</span>
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
          <div className="group relative bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-10 flex flex-col min-h-[500px] transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative z-10 mb-4">
              <h3 className="text-2xl xl:text-3xl font-medium text-white leading-tight mb-2 whitespace-nowrap">
                Plataforma de Reservas
              </h3>
              <p className="text-white/40 text-sm md:text-base leading-relaxed h-[4.5rem] overflow-hidden">
                Desarrollamos tu sitio web especializado con carta digital interactiva, optimizado para convertir visitas en reservas sin comisiones locales.
              </p>
            </div>

            {/* Visualization: Mobile Web Layout */}
            <div className="mt-auto relative bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-md h-52 flex flex-col items-center overflow-hidden">
              <div className="w-28 h-full border-x border-t border-white/20 rounded-t-2xl bg-white/5 p-3 space-y-3 animate-float-slow">
                <div className="h-2 w-full bg-white/20 rounded-full"></div>
                <div className="aspect-[4/3] w-full bg-white/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <UtensilsCrossed className="w-4 h-4 text-white/30" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-[80%] bg-white/10 rounded-full"></div>
                  <div className="h-1.5 w-[60%] bg-white/5 rounded-full"></div>
                </div>
                <div className="h-6 w-full bg-white/30 rounded-md flex items-center justify-center border border-white/20 shadow-lg">
                  <span className="text-[7px] font-black text-white tracking-widest uppercase">Reservar</span>
                </div>
              </div>
              <div className="absolute top-10 left-6">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full border border-white/20 shadow-2xl animate-float-delayed">
                  <Smartphone className="w-3 h-3 text-white/80" />
                  <span className="text-[8px] text-white/90 font-bold whitespace-nowrap uppercase">Web_Móvil</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Crecimiento */}
          <div className="group relative bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-10 flex flex-col min-h-[500px] transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative z-10 mb-4">
              <h3 className="text-2xl xl:text-3xl font-medium text-white leading-tight mb-2 whitespace-nowrap">
                Escalamiento y ROI
              </h3>
              <p className="text-white/40 text-sm md:text-base leading-relaxed h-[4.5rem] overflow-hidden">
                Implementamos estrategias de escalado basadas en datos reales para maximizar el retorno de tu inversión y el flujo de clientes.
              </p>
            </div>

            {/* Visualization: Professional KPI Dashboard */}
            <div className="mt-auto relative bg-white/5 rounded-3xl p-5 border border-white/10 backdrop-blur-md h-52 flex flex-col overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[10px] font-mono text-white/40 tracking-widest uppercase">RESULTADOS_ROI</div>
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
              </div>

              <div className="grid grid-cols-2 gap-3 flex-1">
                <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-3 h-3 text-white/40" />
                    <span className="text-[8px] text-white/40 font-bold uppercase">Clientes</span>
                  </div>
                  <div className="text-lg font-mono text-white tabular-nums">+84</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <PhoneCall className="w-3 h-3 text-white/40" />
                    <span className="text-[8px] text-white/40 font-bold uppercase">Llamadas</span>
                  </div>
                  <div className="text-lg font-mono text-white tabular-nums">+126</div>
                </div>
                <div className="col-span-2 bg-white/10 border border-white/20 rounded-xl p-2.5 flex items-center justify-between overflow-hidden relative">
                  <div className="relative z-10">
                    <div className="text-[8px] text-white/50 font-bold uppercase tracking-widest mb-1">Retorno Inversión</div>
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
