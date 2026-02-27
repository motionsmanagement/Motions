import React from 'react';
import { Phone, CheckCircle2, TrendingUp, Search, MapPin, Globe, Star } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-white py-28 font-['Inter']">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-[#f3f4f1] px-4 py-1.5 rounded-full mb-6">
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Metodología</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.1]">
            Nuestro Proceso para<br />
            Aumentar tus Ventas
          </h2>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Análisis */}
          <div className="group relative bg-[#0A0A0A] rounded-[3rem] p-8 md:p-10 flex flex-col min-h-[580px] transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative z-10 mb-10">
              <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight mb-4">
                Análisis de tu Restaurante
              </h3>
              <p className="text-white/50 text-base leading-relaxed line-clamp-2">
                Evaluamos tu presencia digital actual e identificamos oportunidades críticas.
              </p>
            </div>

            {/* Visualization: Audit Glass Element */}
            <div className="mt-auto relative bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-md overflow-hidden h-64 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/10 p-3 rounded-2xl border border-white/5 animate-pulse">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                  <div className="ml-auto text-[10px] text-blue-400 font-bold">Scanning...</div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/5">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <div className="h-2 w-32 bg-white/20 rounded-full"></div>
                  <Star className="ml-auto w-4 h-4 text-yellow-400 fill-yellow-400" />
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/5">
                  <Search className="w-5 h-5 text-green-400" />
                  <div className="h-2 w-20 bg-white/20 rounded-full"></div>
                  <div className="ml-auto h-2 w-8 bg-green-400/50 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Estrategia */}
          <div className="group relative bg-[#0A0A0A] rounded-[3rem] p-8 md:p-10 flex flex-col min-h-[580px] transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative z-10 mb-10">
              <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight mb-4">
                Estrategia Personalizada
              </h3>
              <p className="text-white/50 text-base leading-relaxed line-clamp-2">
                Creamos un plan de acción específico combinando GMB y una web optimizada.
              </p>
            </div>

            {/* Visualization: Roadmap Glass Element */}
            <div className="mt-auto relative bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-md h-64 flex flex-col gap-4">
              <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2">Roadmap 2024</div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full border-2 border-green-500"></div>
                  </div>
                  <div className="text-xs text-white/80 font-medium">Optimización SEO Local</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full border-2 border-white/20"></div>
                  </div>
                  <div className="text-xs text-white/40 font-medium">Sitio Web de Alta Conversión</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full border-2 border-white/20"></div>
                  </div>
                  <div className="text-xs text-white/40 font-medium">Campaña de Ads Inteligente</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Resultados */}
          <div className="group relative bg-[#0A0A0A] rounded-[3rem] p-8 md:p-10 flex flex-col min-h-[580px] transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative z-10 mb-10">
              <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight mb-4">
                Implementación y Resultados
              </h3>
              <p className="text-white/50 text-base leading-relaxed line-clamp-2">
                Ejecutamos la estrategia y monitoreamos el impacto en tus reservas reales.
              </p>
            </div>

            {/* Visualization: Stats Glass Element */}
            <div className="mt-auto relative bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-md h-64 flex flex-col">
              <div className="flex items-end justify-between gap-2 h-32 mb-6 px-2">
                <div className="w-full bg-white/10 rounded-t-lg h-[40%]"></div>
                <div className="w-full bg-white/20 rounded-t-lg h-[65%]"></div>
                <div className="w-full bg-white/10 rounded-t-lg h-[30%]"></div>
                <div className="w-full bg-white/30 rounded-t-lg h-[85%] group-hover:bg-green-500/50 transition-colors"></div>
                <div className="w-full bg-white/10 rounded-t-lg h-[50%]"></div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-white">+60%</div>
                  <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Crecimiento</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 flex flex-col items-center">
          <button className="flex items-center gap-3 px-10 py-4 bg-black text-white rounded-full font-semibold text-base shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-95 transition-all group">
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Quiero empezar mi proceso
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
