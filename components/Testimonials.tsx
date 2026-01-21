
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="w-full md:w-1/3">
          <div className="flex items-center gap-2 text-[#4A3728] font-medium mb-12">
            <div className="w-2 h-2 rotate-45 bg-[#4A3728]"></div>
            <span>Testimonios</span>
          </div>
          <div className="rounded-[2rem] overflow-hidden aspect-[4/5] shadow-xl">
            <img
              src="https://picsum.photos/id/65/600/800"
              alt="Cliente satisfecho"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <blockquote className="text-3xl md:text-5xl leading-tight text-[#2D241E] font-medium mb-12">
            "Antes nadie nos encontraba en Google. Después de trabajar con Motions,
            <span className="text-[#4A3728]"> aparecemos primero en Google Maps</span>
            <span className="text-[#8C7B6B]"> y las reservas aumentaron un 60%</span>. El sitio web que nos hicieron es increíble y recibimos pedidos todos los días."
          </blockquote>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-medium text-[#2D241E]">Carlos Mendoza</p>
              <p className="text-[#2D241E]/50">Restaurante La Tradición, Madrid</p>
            </div>

            <div className="flex gap-4">
              <button className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#FBF9F6] transition-colors">
                <ArrowLeft className="w-6 h-6 text-[#2D241E]" />
              </button>
              <button className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#FBF9F6] transition-colors">
                <ArrowRight className="w-6 h-6 text-[#2D241E]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
