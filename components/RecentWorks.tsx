import React from 'react';

const projects = [
  '/pf1.jpg',
  '/pj2.jpg',
  '/pj3.jpg',
  '/pj4 (1).jpg',
  '/pj5.jpg',
];

const RecentWorks: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#F1EFEA] overflow-hidden font-['Inter']">
      <style>{`
        @keyframes loopScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-loop-scroll {
          animation: loopScroll 40s linear infinite;
        }
        .animate-loop-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black tracking-tight mb-4">
          Nuestros últimos proyectos
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Un vistazo a algunos de los sitios web que hemos diseñado para impulsar la presencia de restaurantes y marcas.
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden py-10">
        {/* Fade negro masks on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-black via-black/60 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-black via-black/60 to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max shrink-0 animate-loop-scroll">
          {[...projects, ...projects].map((src, index) => (
            <div 
              key={index} 
              className="relative w-[300px] sm:w-[400px] lg:w-[500px] flex-shrink-0 group overflow-hidden rounded-2xl mx-4 lg:mx-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white"
            >
              <img 
                src={src} 
                alt={`Proyecto Motions ${index + 1}`} 
                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
