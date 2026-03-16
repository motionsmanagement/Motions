import React from 'react';

const col1 = [
  '/pf1.jpg',
  '/pj3.jpg',
  '/pj5.jpg',
  '/pj6.jpg',
];

const col2 = [
  '/pj2.jpg',
  '/pj4 (1).jpg',
  '/pj7.jpg',
  '/pf1.jpg',
];

const RecentWorks: React.FC = () => {
  return (
    <section className="relative py-12 bg-white overflow-hidden font-['Inter']">
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(-45deg); }
          100% { transform: translateX(100%) rotate(-45deg); }
        }
        .animate-scroll-up {
          animation: scrollUp 50s linear infinite;
        }
        .animate-scroll-down {
          animation: scrollDown 55s linear infinite;
        }
        .liquid-glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.1),
            inset 0 0 32px 0 rgba(255, 255, 255, 0.05);
        }
      `}</style>

      {/* Full width container, no max-w, reduced height */}
      <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
        
        {/* Much smaller Liquid Glass Badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
          <div className="liquid-glass px-6 md:px-8 py-2 md:py-3 rounded-full relative overflow-hidden">
            {/* Inner glow/shimmer */}
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_4s_infinite]" />
            <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-center block whitespace-nowrap drop-shadow-lg">
              Proyectos Recientes
            </span>
          </div>
        </div>

        {/* Edge Masks */}
        <div className="absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-white via-white/60 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent z-10 pointer-events-none"></div>

        <div className="grid grid-cols-2 gap-4 md:gap-8 h-full relative z-0 max-w-7xl mx-auto px-4">
          {/* Column 1 */}
          <div className="relative h-[200%] w-full">
            <div className="flex flex-col gap-4 md:gap-8 w-full animate-scroll-up">
              {[...col1, ...col2, ...col1, ...col2].map((src, index) => (
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
          <div className="relative h-[200%] w-full pt-12">
            <div className="flex flex-col gap-4 md:gap-8 w-full animate-scroll-down">
              {[...col2, ...col1, ...col2, ...col1].map((src, index) => (
                <div 
                  key={`col2-${index}`} 
                  className="w-full flex-shrink-0 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-md bg-gray-50"
                >
                  <img src={src} alt="Motions Project" className="w-full h-auto object-cover" />
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
