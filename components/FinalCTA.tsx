import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, ChevronRight, Globe, Check } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [countryCode, setCountryCode] = useState('+34');
  const ref = React.useRef<HTMLDivElement>(null);

  const services = [
    "Google My Business",
    "Diseño Web",
    "Branding",
    "Integración con IA",
    "Diseño Gráfico",
    "SEO Local"
  ];

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service) 
        : [...prev, service]
    );
  };

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
      email: formData.get('email'),
      telefono: `${countryCode} ${formData.get('telefono')}`,
      servicios: selectedServices.length > 0 ? selectedServices.join(', ') : 'Ninguno especificado'
    };

    try {
      await fetch('https://formsubmit.co/ajax/contacto@motions.es', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error enviando formulario:', error);
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contacto" ref={ref} className="relative py-12 md:py-20 px-4 md:px-12 overflow-hidden flex flex-col items-center justify-center font-['Inter']">
      {/* Background Image - High Visibility */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Adbanner.jpg"
          alt="Final CTA background"
          className="w-full h-full object-cover brightness-[0.75]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
      </div>

      <div className={`relative z-10 max-w-4xl w-full transition-all duration-1000 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Centralized Horizontal Contact Form Card */}
        <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-[0_48px_80px_-20px_rgba(0,0,0,0.3)] relative overflow-hidden flex items-center justify-center">
          
          {/* Form State */}
          <div className={`relative z-10 w-full transition-all duration-700 ${isSubmitted ? 'opacity-0 pointer-events-none scale-[0.98] blur-sm' : 'opacity-100 scale-100 blur-none'}`}>
            <div className="flex flex-col items-center mb-6 md:mb-8 text-center">
              <img src="/motionsblack.png" alt="Motions Logo" className="h-6 md:h-8 w-auto mb-4" />
              <h2 className="text-2xl md:text-4xl lg:text-5xl text-black font-medium tracking-tight leading-tight mb-3">
                Lleva tu restaurante al siguiente nivel
              </h2>
              <p className="text-gray-500 text-[11px] md:text-sm max-w-xl mx-auto leading-relaxed font-light px-4">
                Déjanos tus datos y te llamaremos en menos de 24 horas para entender las necesidades de tu negocio y crear un plan a medida.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    name="nombre"
                    placeholder="Tu nombre" 
                    className="w-full bg-transparent border-b border-gray-100 py-2.5 text-black text-sm md:text-base placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                    required
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Correo electrónico" 
                    className="w-full bg-transparent border-b border-gray-100 py-2.5 text-black text-sm md:text-base placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="relative flex gap-4">
                <div className="relative group shrink-0">
                  <select 
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="appearance-none bg-transparent border-b border-gray-100 py-2.5 pr-8 text-black text-sm md:text-base font-medium focus:outline-none focus:border-black cursor-pointer transition-colors"
                  >
                    <option value="+34">🇪🇸 +34</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                  </select>
                  <div className="absolute right-0 bottom-3.5 pointer-events-none text-gray-400">
                    <ChevronRight className="w-3 h-3 rotate-90" />
                  </div>
                </div>
                <input 
                  type="tel" 
                  name="telefono"
                  placeholder="Número de teléfono" 
                  className="flex-1 bg-transparent border-b border-gray-100 py-2.5 text-black text-sm md:text-base placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                  required
                />
              </div>

              {/* Service Selection Pills */}
              <div className="space-y-3">
                <label className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest block text-left pl-0.5">¿En qué podemos ayudarte?</label>
                <div className="flex flex-wrap gap-1.5 md:gap-2 justify-start min-h-[40px]">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`px-3 md:px-4 py-1.5 rounded-full text-[11px] md:text-xs font-semibold border transition-all duration-300 flex items-center gap-1.5 ${
                        selectedServices.includes(service)
                          ? "bg-black border-black text-white shadow-md active:scale-95"
                          : "bg-gray-50/50 border-gray-100 text-gray-500 hover:border-black/20 hover:bg-white"
                      }`}
                    >
                      {selectedServices.includes(service) && <Check className="w-3 h-3 shrink-0" />}
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-center">
                <button 
                  type="submit" 
                  className="bg-black text-white rounded-full pl-6 pr-1.5 py-1.5 flex items-center justify-between gap-4 group hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-95 w-full md:w-auto shadow-xl"
                >
                  <span className="font-semibold tracking-tight text-sm md:text-base">
                    Solicitar presupuesto y auditoría
                  </span>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-black shadow-inner">
                    <img src="/anagram2.png" alt="Motions Anagram" className="w-4 h-4 md:w-5 md:h-5 object-contain group-hover:rotate-12 transition-transform" />
                  </div>
                </button>
              </div>

              <p className="text-[9px] text-gray-400 leading-relaxed pt-2 text-center font-light max-w-lg mx-auto uppercase tracking-tighter opacity-70">
                Al enviar, aceptas nuestra política de privacidad y el tratamiento de tus datos para el contacto.
              </p>
            </form>
          </div>

          {/* Success Overlay State */}
          <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center p-6 transition-all duration-700 md:delay-300 ${isSubmitted ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center animate-[bounce_1.5s_infinite] shadow-2xl">
                <Check className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl md:text-4xl font-medium text-black mb-3 tracking-tight">¡Solicitud recibida!</h3>
            <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed text-center">
              Gracias por confiar en Motions. Uno de nuestros especialistas te contactará en menos de 24 horas.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-8 px-5 py-2 border border-black/10 rounded-full text-black text-xs font-semibold hover:bg-black/5 transition-all"
            >
              Volver al formulario
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
