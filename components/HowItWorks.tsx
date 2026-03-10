import React from 'react';
import { Phone, TrendingUp, Search, MapPin, ArrowRight, UtensilsCrossed, BarChart3, Target, MousePointer2, Smartphone, Star, PhoneCall, Users, Calendar, CheckCircle2, Clock, Zap, ShieldCheck, Loader2, Sparkles, Activity } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={ref} className="bg-white py-28 font-['Inter']">
      <div className={`max-w-[1440px] mx-auto px-6 md:px-12 transition-all duration-1000 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20 text-balance flex flex-col items-center">
          {/* Tag font matching Casos de Éxito */}
          <div className="inline-flex items-center bg-[#f3f4f1] border border-gray-200/50 px-4 py-1.5 rounded-full mb-6">
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Metodología Especialista</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.1]">
            Nuestro Proceso para<br />
            Optimizar tu Restaurante
          </h2>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Auditoría */}
          <div className="group relative bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-10 pb-6 flex flex-col min-h-[480px] transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative z-10 mb-1">
              <h3 className="text-2xl xl:text-3xl font-semibold text-white leading-tight mb-4 whitespace-nowrap">
                Auditoría Local GMB
              </h3>
              <p className="text-white/70 text-[13px] leading-relaxed line-clamp-3">
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

              <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-1/2 w-full pointer-events-none ${visible ? 'animate-scan' : ''}`}></div>

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
                    <div className={`h-full w-[94%] bg-white/60 ${visible ? 'animate-load-slow' : ''}`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Desarrollo */}
          <div className="group relative bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-10 pb-6 flex flex-col min-h-[480px] transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative z-10 mb-1">
              <h3 className="text-2xl xl:text-3xl font-semibold text-white leading-tight mb-4 whitespace-nowrap">
                Plataforma de Reservas
              </h3>
              <p className="text-white/70 text-[13px] leading-relaxed line-clamp-3">
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
                <div className="w-24 h-36 border-x border-t border-white/20 rounded-t-xl bg-black/60 shrink-0 relative overflow-hidden mt-2 shadow-2xl">
                  <div className={`absolute inset-0 p-2 space-y-2 ${visible ? 'animate-mobile-step-1' : ''}`}>
                    <div className="h-1.5 w-1/2 bg-white/20 rounded-full"></div>
                    <div className="aspect-square w-full bg-white/10 rounded-lg flex items-center justify-center">
                      <UtensilsCrossed className="w-5 h-5 text-white/20" />
                    </div>
                    <div className="h-4 w-full bg-white/30 rounded-md border border-white/10 flex items-center justify-center">
                      <span className="text-[6px] text-white/40 font-bold">RESERVAR</span>
                    </div>
                  </div>

                  <div className={`absolute inset-0 bg-white flex flex-col items-center justify-center p-3 opacity-0 ${visible ? 'animate-mobile-step-2' : ''}`}>
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mb-3 shadow-xl">
                      <CheckCircle2 className={`w-6 h-6 text-white ${visible ? 'animate-check-pop' : ''}`} />
                    </div>
                    <h4 className="text-black text-[9px] font-black uppercase tracking-widest text-center leading-none mb-2">Reserva<br />Confirmada</h4>
                    <div className="h-[1px] w-8 bg-black/10 mb-2"></div>
                    <Sparkles className="absolute top-2 right-2 w-3 h-3 text-black/20 animate-pulse" />
                  </div>

                  <div className={`absolute top-0 left-0 h-[1.5px] bg-white/60 ${visible ? 'animate-sync-loader' : ''}`}></div>
                </div>

                {/* Information Boxes */}
                <div className="flex-1 space-y-3 pt-2">
                  <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center justify-between">
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

          {/* Card 3: Crecimiento - Rediseñado con menos movimiento y en español */}
          <div className="group relative bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-10 pb-6 flex flex-col min-h-[480px] transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative z-10 mb-1">
              <h3 className="text-2xl xl:text-3xl font-semibold text-white leading-tight mb-4 whitespace-nowrap">
                Escalamiento y ROI
              </h3>
              <p className="text-white/70 text-[13px] leading-relaxed line-clamp-3">
                Implementamos estrategias de escalado basadas en datos reales para maximizar el retorno de tu inversión y el flujo de clientes.
              </p>
            </div>

            {/* Visualization: Performance Terminal (Spanish + Less Motion) */}
            <div className="mt-8 relative bg-white/5 rounded-3xl p-5 border border-white/10 backdrop-blur-md h-52 flex flex-col overflow-hidden shrink-0">
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest">SISTEMA_RENDIMIENTO_V2.0</span>
                </div>
              </div>

              <div className="flex-1 flex flex-col md:flex-row gap-6 md:gap-4 overflow-visible">
                {/* Left: ROI Circle (Subtle Animation) */}
                <div className="w-full md:w-28 flex flex-row md:flex-col items-center justify-center md:border-r border-white/10 pb-4 md:pb-0 md:pr-4 shrink-0 border-b md:border-b-0">
                  <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle cx="28" cy="28" r="24" fill="none" stroke="currentColor" strokeWidth="3" className="text-white/5 md:hidden" />
                      <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="3" className="hidden md:block text-white/5" />
                      <circle cx="28" cy="28" r="24" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="150" strokeDashoffset="37" className="text-white opacity-80 md:hidden" />
                      <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="176" strokeDashoffset="44" className="hidden md:block text-white opacity-80" />
                    </svg>
                    <div className="flex flex-col items-center">
                      <span className="text-xs md:text-xs font-mono text-white leading-none">4.2x</span>
                      <span className="text-[6px] text-white/40 font-bold uppercase mt-1">ROI</span>
                    </div>
                  </div>
                  <div className="ml-4 md:ml-0 mt-0 md:mt-3 flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                    <TrendingUp className="w-2 h-2 text-white" />
                    <span className="text-[7px] text-white font-mono tracking-tighter uppercase whitespace-nowrap">+12% MENSUAL</span>
                  </div>
                </div>

                {/* Right: Data Feed (Static + Slow animations) */}
                <div className="flex-1 space-y-2 md:space-y-2.5">
                  <div className="bg-white/5 border border-white/5 rounded-lg p-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-3 h-3 text-white/40" />
                      <div className="flex flex-col">
                        <span className="text-[8px] text-white/30 font-mono leading-none">TRÁFICO</span>
                        <span className="text-[10px] text-white font-mono leading-none mt-1">+2,840</span>
                      </div>
                    </div>
                    <div className="flex gap-0.5 h-4 items-end">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1 bg-white/20 rounded-t-sm" style={{ height: `${40 + (i * 12)}%` }}></div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/5 rounded-lg p-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Activity className="w-3 h-3 text-white/40" />
                      <div className="flex flex-col">
                        <span className="text-[8px] text-white/30 font-mono leading-none">CONVERSIÓN</span>
                        <span className="text-[10px] text-white font-mono leading-none mt-1">18.4%</span>
                      </div>
                    </div>
                    <div className="w-12 h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-white/30"></div>
                    </div>
                  </div>

                  {/* Static Log Footer */}
                  <div className="pt-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[7px] text-white/20 font-mono italic tracking-tight">{'>'} OPTIMIZANDO_ESTRATEGIA_RESULTADOS</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Very subtle scanning effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent w-full h-full -skew-x-12 translate-x-[-200%] pointer-events-none ${visible ? 'animate-scan-slow' : ''}`}></div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 hidden md:flex flex-col items-center">
          <button className="flex items-center gap-3 px-10 py-4 bg-black text-white rounded-full font-semibold text-base shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:bg-neutral-900 hover:scale-105 active:scale-95 transition-all group">
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Quiero potenciar mi restaurante
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
                @keyframes scan {
                    0% { transform: translateY(-100%); opacity: 0; }
                    50% { opacity: 0.5; }
                    100% { transform: translateY(200%); opacity: 0; }
                }
                @keyframes scan-slow {
                    0% { transform: translateX(-200%) skewX(-12deg); }
                    100% { transform: translateX(200%) skewX(-12deg); }
                }
                .animate-scan { animation: scan 4s linear infinite; }
                .animate-scan-slow { animation: scan-slow 8s linear infinite; }
                
                @keyframes mobile-step-1 {
                    0%, 45% { opacity: 1; transform: scale(1); }
                    50%, 95% { opacity: 0; transform: scale(0.95); }
                    100% { opacity: 1; transform: scale(1); }
                }
                @keyframes mobile-step-2 {
                    0%, 47% { opacity: 0; transform: translateY(100%); }
                    50%, 92% { opacity: 1; transform: translateY(0); }
                    95%, 100% { opacity: 0; transform: translateY(-10%); }
                }
                @keyframes check-pop {
                    0%, 55% { transform: scale(0); rotate: -45deg; }
                    65% { transform: scale(1.2); rotate: 0deg; }
                    70%, 100% { transform: scale(1); rotate: 0deg; }
                }
                @keyframes sync-loader {
                    0% { width: 0; opacity: 1; }
                    48% { width: 100%; opacity: 1; }
                    50%, 100% { width: 100%; opacity: 0; }
                }
                
                .animate-mobile-step-1 { animation: mobile-step-1 6s ease-in-out infinite; }
                .animate-mobile-step-2 { animation: mobile-step-2 6s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
                .animate-check-pop { animation: check-pop 6s ease-out infinite; }
                .animate-sync-loader { animation: sync-loader 6s ease-in-out infinite; }
                
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
