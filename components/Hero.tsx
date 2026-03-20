
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
        <div className="max-w-5xl">
          <h1 className="text-[2.65rem] sm:text-5xl md:text-[5.5rem] lg:text-[6.5rem] leading-[1.05] text-white mb-8 tracking-tighter font-medium">
            Más Clientes para<br />
            Tu Restaurante
          </h1>

          <div className="mb-12">
            <p className="text-white/80 text-base md:text-xl max-w-3xl mx-auto leading-relaxed tracking-tight">
              Especialistas en restauración. Resultados medibles. <br className="hidden md:block" />
              Más visibilidad y ventas. Presencia digital completa: Google Maps + Web optimizada.
            </p>
          </div>

          {/* New Dual Buttons - Premium Centered Layout */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/34919610420" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-black text-white rounded-full font-semibold text-base transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-2xl border border-white/5"
            >
              Empezar ahora
              <img src="/anagram.png" alt="Motions Anagram" className="w-5 h-5 invert brightness-0" />
            </a>
            <a 
              href="#cases" 
              className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-full font-semibold text-base shadow-2xl transition-all hover:bg-white/90 hover:scale-105 active:scale-95 text-center"
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
