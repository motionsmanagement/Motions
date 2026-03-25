
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
    <section ref={ref} className="relative min-h-[100svh] flex flex-col items-center justify-end pb-32 md:pb-40">
      {/* Background Banner */}
      <div className="absolute inset-0 z-0">
        <img
          src="/motionsshared_copy.jpg"
          alt="Banner Restaurante"
          className="w-full h-full object-cover sm:object-center sm:object-[center_30%]"
          loading="eager"
        />
        {/* Lighter gradient since the banner already has its own content, just enough to make buttons visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content wrapper - Centered at the bottom */}
      <div className={`relative z-10 px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col items-center text-center transition-all duration-1000 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Dual Buttons - Centered */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md mx-auto">
          <a 
            href="#contacto" 
            className="w-full sm:w-auto px-8 py-3.5 sm:px-10 sm:py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-sm sm:text-base transition-all hover:bg-white/20 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 shadow-2xl"
          >
            Empezar ahora
            <img src="/anagram.png" alt="Motions Anagram" className="w-4 h-4 sm:w-5 sm:h-5 invert brightness-0" />
          </a>
          <a 
            href="#servicios" 
            className="w-full sm:w-auto px-8 py-3.5 sm:px-10 sm:py-4 bg-white text-black rounded-full font-semibold text-sm sm:text-base shadow-2xl transition-all hover:bg-white/90 hover:scale-[1.02] active:scale-95 flex items-center justify-center"
          >
            Saber más
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
