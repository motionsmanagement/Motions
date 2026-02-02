
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="w-full md:w-1/3">

          <div className="rounded-[2rem] overflow-hidden aspect-[4/5] shadow-xl">
            <img
              src="/resta.jpg"
              alt="Cliente satisfecho"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <blockquote className="text-3xl md:text-5xl leading-tight text-black font-medium mb-12">
            "Antes nadie nos encontraba en Google. Después de trabajar con Motions,
            <span className="text-gray-500"> aparecemos primero en Google Maps</span>
            <span className="text-gray-400"> y las reservas aumentaron un 60%</span>. El sitio web que nos hicieron es increíble y recibimos pedidos todos los días."
          </blockquote>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-medium text-black">Carlos Mendoza</p>
              <p className="text-gray-400">Restaurante La Tradición, Madrid</p>
            </div>

            <div className="flex gap-4">
              <button className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ArrowLeft className="w-6 h-6 text-black" />
              </button>
              <button className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ArrowRight className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
