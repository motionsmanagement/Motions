
import React from 'react';
import { Brain, Award, Globe } from 'lucide-react';

const Hero: React.FC = () => {
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
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center pt-20">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="/steak.jpg"
          alt="Steak gourmet"
          className="w-full h-full object-cover brightness-[0.7]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80"></div>
      </div>

      <div className={`relative z-10 px-6 md:px-12 flex flex-col items-center text-center transition-all duration-1000 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] lg:text-[6rem] leading-[1.15] text-white mb-8 tracking-tight font-medium">
            Más Clientes para<br />
            Tu Restaurante
          </h1>

          <div className="mb-10">
            <p className="text-white/80 text-sm sm:text-base md:text-xl max-w-2xl mx-auto leading-relaxed tracking-tight">
              Dedicados al sector gastronómico, mejoramos tu presencia digital y convertimos visitas online en reservas.
            </p>
          </div>

          {/* Dual Buttons - Horizontal on all screens */}
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
            <a 
              href="#contact" 
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-xs sm:text-sm transition-all hover:bg-white/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-2xl"
            >
              Empezar ahora
              <img src="/anagram.png" alt="Motions Anagram" className="w-3.5 h-3.5 sm:w-4 sm:h-4 invert brightness-0" />
            </a>
            <a 
              href="#services" 
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-black rounded-full font-semibold text-xs sm:text-sm shadow-2xl transition-all hover:bg-white/90 hover:scale-105 active:scale-95 flex items-center justify-center"
            >
              Saber más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
