import React from 'react';
import { ChevronRight } from 'lucide-react';

const col1 = [
  '/pf1.jpg',
  '/pj3.jpg',
  '/pj7.jpg',
];

const col2 = [
  '/pj2.jpg',
  '/pj4 (1).jpg',
  '/pj6.jpg',
];

const col3 = [
  '/pj5.jpg',
  '/jp8.jpg',
  '/pj9.jpg',
];

const RecentWorks: React.FC = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden font-['Inter']">
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
        .animate-scroll-up {
          animation: scrollUp 40s linear infinite;
        }
        .animate-scroll-down {
          animation: scrollDown 45s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="inline-flex items-center bg-[#f3f4f1] border border-gray-200/50 px-4 py-1.5 rounded-full mb-6">
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Impulso Gastronómico Digital</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-[#111] leading-[1.1] mb-6">
            Diseño que cautiva,<br />
            resultados que escalan.
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed">
            Estrategias visuales y técnicas diseñadas para que tu restaurante destaque en el ecosistema digital.
          </p>
        </div>
      </div>

      {/* Banner Section - Full Width inside its own container */}
      <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
        {/* Subtle Edge Masks */}
        <div className="absolute left-0 right-0 top-0 h-16 bg-gradient-to-b from-white via-white/10 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/10 to-transparent z-10 pointer-events-none"></div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 h-full relative z-0 max-w-7xl mx-auto px-4">
          {/* Column 1 */}
          <div className="relative h-[200%] w-full">
            <div className="flex flex-col gap-4 md:gap-8 w-full animate-scroll-up">
              {[...col1, ...col1].map((src, index) => (
                <div 
                  key={`col1-${index}`} 
                  className="w-full flex-shrink-0 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-md bg-gray-50"
                >
                  <img src={src} alt="Motions Project" className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="relative h-[200%] w-full pt-16">
            <div className="flex flex-col gap-4 md:gap-8 w-full animate-scroll-down">
              {[...col2, ...col2].map((src, index) => (
                <div 
                  key={`col2-${index}`} 
                  className="w-full flex-shrink-0 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-md bg-gray-50"
                >
                  <img src={src} alt="Motions Project" className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 (Desktop) */}
          <div className="relative h-[200%] w-full pt-8 hidden md:block">
            <div className="flex flex-col gap-4 md:gap-8 w-full animate-scroll-up">
              {[...col3, ...col3].map((src, index) => (
                <div 
                  key={`col3-${index}`} 
                  className="w-full flex-shrink-0 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-md bg-gray-50"
                >
                  <img src={src} alt="Motions Project" className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-16 flex justify-center">
        <button className="flex items-center gap-2 px-8 py-3.5 bg-black text-white rounded-full text-sm font-semibold hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 group shadow-lg">
          Solicitar presupuesto
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default RecentWorks;
