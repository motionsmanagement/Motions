import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

const FinalCTA: React.FC = () => {
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
    <section id="contact" ref={ref} className="relative py-44 px-6 md:px-12 overflow-hidden flex flex-col items-start md:items-center text-left md:text-center font-['Inter']">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/new.jpg"
          alt="Final CTA background"
          className="w-full h-full object-cover brightness-[0.55]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70"></div>
      </div>

      <div className={`relative z-10 max-w-4xl w-full transition-all duration-1000 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Smaller 2-line title */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl text-white mb-6 leading-[1.15] font-medium tracking-tight">
          Transforma tu restaurante<br />
          y domina tu mercado local
        </h2>

        <p className="text-white text-base md:text-lg mb-12 max-w-2xl md:mx-auto leading-relaxed font-light">
          Es el momento de dejar de ser invisible. Agenda una consulta gratuita<br className="hidden md:block" />
          y descubre cómo multiplicar tus reservas esta semana.
        </p>

        <div className="flex flex-row items-center justify-start md:justify-center gap-4 mb-24 w-full">
          <button className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm sm:text-lg font-semibold hover:bg-white/20 transition-all hover:scale-105 active:scale-95 shadow-2xl group flex-1 md:flex-none justify-center">
            <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            Llámanos
          </button>

          <button className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm sm:text-lg font-semibold hover:bg-white/20 transition-all hover:scale-105 active:scale-95 shadow-2xl group flex-1 md:flex-none justify-center">
            <MessageSquare className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            Mensaje
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full text-white text-[10px] tracking-[0.2em] uppercase font-bold gap-10 opacity-70">
          <a href="#" className="hover:opacity-100 transition-opacity border-b border-white/30 pb-1">¿Tienes alguna pregunta?</a>
          <a href="#" className="flex items-center gap-3 hover:opacity-100 transition-opacity">
            REVISA NUESTRAS <span className="underline decoration-white/40 underline-offset-4">PREGUNTAS FRECUENTES</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
