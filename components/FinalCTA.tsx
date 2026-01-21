
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-40 px-6 md:px-12 overflow-hidden flex flex-col items-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1920"
          alt="Healing path"
          className="w-full h-full object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-4xl">
        <h2 className="text-5xl md:text-[5.5rem] text-white mb-10 leading-[1.05]">
          Comienza Hoy <span className="text-white/40">a</span><br />
          Aumentar tus Ventas
        </h2>
        <p className="text-white/70 text-lg md:text-xl mb-14 max-w-2xl mx-auto leading-relaxed tracking-tight">
          Agenda una consulta gratis y descubre cómo aumentar tu visibilidad y tus reservas.
        </p>

        <button className="px-14 py-6 rounded-full bg-white text-[#2D241E] text-xl font-bold shadow-[0_20px_80px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform mb-24 tracking-tighter">
          Llamar ahora
        </button>

        <div className="flex flex-col md:flex-row items-center justify-between w-full text-white/40 text-xs tracking-widest uppercase font-bold gap-8">
          <a href="#" className="hover:text-white transition-colors border-b border-white/10 pb-1">¿Tienes alguna pregunta?</a>
          <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
            Revisa nuestras <span className="text-white font-black underline decoration-white/20">Preguntas Frecuentes</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
