import React from 'react';

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
        .animate-scroll-up:hover, .animate-scroll-down:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative w-full max-w-6xl mx-auto h-[700px] md:h-[900px] overflow-hidden rounded-[2rem]">
        {/* Fade negro masks on edges - Top and Bottom */}
        <div className="absolute left-0 right-0 top-0 h-16 md:h-24 bg-gradient-to-b from-black/40 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute left-0 right-0 bottom-0 h-16 md:h-24 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 h-full px-4 md:px-8 relative z-0">
          {/* Column 1 */}
          <div className="relative h-[200%] w-full">
            <div className="flex flex-col gap-6 md:gap-12 w-full animate-scroll-up">
              {[...col1, ...col2, ...col1, ...col2].map((src, index) => (
                <div 
                  key={`col1-${index}`} 
                  className="w-full flex-shrink-0 group overflow-hidden rounded-[2rem] shadow-xl bg-white cursor-pointer"
                >
                  <img 
                    src={src} 
                    alt={`Proyecto Motions ${index + 1}`} 
                    className="w-full h-auto object-cover transform transition-all duration-[800ms] group-hover:scale-110 group-hover:opacity-95"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="relative h-[200%] w-full hidden md:block pt-[10%]">
            <div className="flex flex-col gap-6 md:gap-12 w-full animate-scroll-down">
              {[...col2, ...col1, ...col2, ...col1].map((src, index) => (
                <div 
                  key={`col2-${index}`} 
                  className="w-full flex-shrink-0 group overflow-hidden rounded-[2rem] shadow-xl bg-white cursor-pointer"
                >
                  <img 
                    src={src} 
                    alt={`Proyecto Motions ${index + 1}`} 
                    className="w-full h-auto object-cover transform transition-all duration-[800ms] group-hover:scale-110 group-hover:opacity-95"
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
