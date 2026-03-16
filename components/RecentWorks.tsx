import React from 'react';

const col1 = [
  '/pf1.jpg',
  '/pj3.jpg',
  '/pj5.jpg',
];

const col2 = [
  '/pj2.jpg',
  '/pj4 (1).jpg',
  '/pj6.jpg',
];

const col3 = [
  '/pj7.jpg',
  '/jp8.jpg',
  '/pj9.jpg',
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
        .animate-scroll-up {
          animation: scrollUp 40s linear infinite;
        }
        .animate-scroll-down {
          animation: scrollDown 45s linear infinite;
        }
      `}</style>

      <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
        {/* Even more subtle Edge Masks */}
        <div className="absolute left-0 right-0 top-0 h-12 bg-gradient-to-b from-white via-white/10 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute left-0 right-0 bottom-0 h-12 bg-gradient-to-t from-white via-white/10 to-transparent z-10 pointer-events-none"></div>

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

          {/* Column 3 - Visible on Desktop */}
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
    </section>
  );
};

export default RecentWorks;
