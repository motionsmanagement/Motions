import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section id="contact" className="relative py-44 px-6 md:px-12 overflow-hidden flex flex-col items-center text-center font-['Inter']">
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

      <div className="relative z-10 max-w-4xl">
        {/* Smaller 2-line title */}
        <h2 className="text-4xl md:text-6xl text-white mb-6 leading-[1.15] font-medium tracking-tight">
          Transforma tu restaurante hoy<br />
          y domina tu mercado local
        </h2>

        <p className="text-white text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Es el momento de dejar de ser invisible. Agenda una consulta gratuita<br className="hidden md:block" />
          y descubre cómo multiplicar tus reservas y ventas este mes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24">
          <button className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg font-semibold hover:bg-white/20 transition-all hover:scale-105 active:scale-95 shadow-2xl group w-full sm:w-auto justify-center">
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Llamar ahora
          </button>

          <button className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg font-semibold hover:bg-white/20 transition-all hover:scale-105 active:scale-95 shadow-2xl group w-full sm:w-auto justify-center">
            <MessageSquare className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            Mándanos un mensaje
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
