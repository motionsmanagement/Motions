import React, { useState } from 'react';
import { ChevronRight, Check, ArrowUpRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countryCode, setCountryCode] = useState('+34');
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      nombre: formData.get('nombre'),
      apellidos: formData.get('apellidos'),
      email: formData.get('email'),
      mensaje: formData.get('mensaje'),
      telefono: `${countryCode} ${formData.get('telefono')}`,
      _subject: "🔥 Nuevo Lead Motions - " + formData.get('nombre'),
      _template: "box"
    };

    try {
      await fetch('https://formsubmit.co/ajax/contacto@motions.es', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });
      setIsSubmitted(true);
      if (typeof window !== 'undefined') {
        const dataLayer = (window as any).dataLayer = (window as any).dataLayer || [];
        dataLayer.push({ event: 'contact_form_submit', form_name: 'Formulario Contacto Rediseñado' });
      }
    } catch (error) {
      console.error('Error enviando formulario:', error);
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contacto" ref={ref} className="bg-[#F7F7F5] py-24 px-6 md:px-12 font-['Inter']">
      <div className={`max-w-7xl mx-auto transition-all duration-[1000ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[700px]">
          
          {/* Left Side: Image & Testimonial */}
          <div className="lg:w-1/2 relative min-h-[450px] lg:min-h-full">
            <img 
              src="/motionsweb.jpg" 
              alt="Motions Portfolio" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            {/* Testimonial Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-[1.5rem]">
              <p className="text-white text-base md:text-lg leading-relaxed mb-6 font-light">
                "Trabajar con Motions ha sido un placer absoluto. Su visión creativa y técnica ha transformado nuestra presencia digital, capturando perfectamente la esencia de nuestra marca en cada detalle."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold text-sm">Alvaro Garayar</h4>
                  <p className="text-white/60 text-[11px] uppercase tracking-widest mt-1">Founder at Motions</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/40 cursor-not-allowed">
                    <ChevronRight className="w-4 h-4 rotate-180" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black shadow-lg">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-1/2 p-8 md:p-14 lg:p-20 relative flex flex-col">
            {isSubmitted ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-8 shadow-2xl">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-medium text-black mb-4 tracking-tight">¡Mensaje enviado!</h3>
                <p className="text-gray-500 text-lg leading-relaxed max-w-sm mb-8">
                  Gracias por contactarnos. Nuestro equipo revisará tu propuesta y te responderemos en menos de 24 horas.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 border border-black text-black rounded-full text-sm font-semibold hover:bg-black hover:text-white transition-all"
                >
                  Volver al formulario
                </button>
              </div>
            ) : (
              <>
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-8">
                    <img src="/anagram.png" alt="Motions" className="w-8 h-8" />
                    <span className="text-lg font-bold tracking-tighter">Motions</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.1] tracking-tight text-black mb-6">
                    ¿Tienes una idea?<br />Hablemos de ella.
                  </h2>
                  <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed">
                    Estamos siempre abiertos a nuevas oportunidades y colaboraciones. Cuéntanos tu proyecto y veamos cómo podemos ayudarte.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest pl-1">Nombre</label>
                      <input 
                        type="text" 
                        name="nombre"
                        placeholder="Tu nombre" 
                        required
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-black placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest pl-1">Apellidos</label>
                      <input 
                        type="text" 
                        name="apellidos"
                        placeholder="Tus apellidos" 
                        required
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-black placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest pl-1">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="hola@ejemplo.com" 
                      required
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-black placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest pl-1">Mensaje</label>
                    <textarea 
                      name="mensaje"
                      placeholder="Cuéntanos un poco sobre tu proyecto..." 
                      rows={4}
                      required
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-black placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <input type="checkbox" id="privacy" required className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
                    <label htmlFor="privacy" className="text-xs text-gray-400 font-light">
                      Acepto la política de privacidad y los términos y condiciones.
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-black text-white rounded-full py-4 font-bold text-sm tracking-tight hover:bg-neutral-800 transition-all shadow-xl flex items-center justify-center gap-2 group"
                  >
                    Enviar Mensaje
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
