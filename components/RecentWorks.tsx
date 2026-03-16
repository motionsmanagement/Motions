import React from 'react';
import { Layers } from 'lucide-react';

const col1 = [
  '/pf1.jpg',
  '/pj3.jpg',
  '/pj5.jpg',
];

const col2 = [
  '/pj2.jpg',
  '/pj4 (1).jpg',
  '/pf1.jpg',
];

const RecentWorks: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#F1EFEA] overflow-hidden font-['Inter']">
      <style>{`
        @keyframes scrollUp1 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollUp2 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-up-1 {
          animation: scrollUp1 35s linear infinite;
        }
        .animate-scroll-up-2 {
          animation: scrollUp2 45s linear infinite;
        }
        .animate-scroll-up-1:hover, .animate-scroll-up-2:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center relative z-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black tracking-tight mb-4">
          Nuestros últimos proyectos
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Un vistazo a algunos de los sitios web que hemos diseñado para impulsar la presencia de restaurantes y marcas.
        </p>
      </div>

      <div className="relative w-full max-w-6xl mx-auto h-[700px] md:h-[900px] overflow-hidden rounded-[2rem]">
        {/* Fade negro masks on edges - Top and Bottom */}
        <div className="absolute left-0 right-0 top-0 h-40 md:h-64 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute left-0 right-0 bottom-0 h-40 md:h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

        {/* Center Badge overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center pointer-events-none">
          <div className="bg-white/90 backdrop-blur-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] rounded-[32px] p-4 pr-8 flex items-center gap-4 border border-white/50">
            <div className="bg-black text-white p-3 rounded-full flex items-center justify-center">
               <Layers className="w-5 h-5" />
            </div>
            <span className="font-semibold text-lg text-black">Proyectos Recientes</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 h-full px-4 md:px-8 relative z-0">
          {/* Column 1 */}
          <div className="relative h-[200%] w-full">
            <div className="flex flex-col gap-6 md:gap-12 w-full animate-scroll-up-1">
              {[...col1, ...col2, ...col1, ...col2].map((src, index) => (
                <div 
                  key={`col1-${index}`} 
                  className="w-full flex-shrink-0 group overflow-hidden rounded-[2rem] shadow-xl bg-white"
                >
                  <img 
                    src={src} 
                    alt={`Proyecto Motions ${index + 1}`} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="relative h-[200%] w-full hidden md:block pt-[10%]">
            <div className="flex flex-col gap-6 md:gap-12 w-full animate-scroll-up-2">
              {[...col2, ...col1, ...col2, ...col1].map((src, index) => (
                <div 
                  key={`col2-${index}`} 
                  className="w-full flex-shrink-0 group overflow-hidden rounded-[2rem] shadow-xl bg-white"
                >
                  <img 
                    src={src} 
                    alt={`Proyecto Motions ${index + 1}`} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
