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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, send data to backend here
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-36 px-6 md:px-12 overflow-hidden flex flex-col items-center justify-center font-['Inter']">
      {/* Background Image - High Visibility */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Adbanner.jpg"
          alt="Final CTA background"
          className="w-full h-full object-cover brightness-[0.75]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/15"></div>
      </div>

      <div className={`relative z-10 max-w-4xl w-full transition-all duration-1000 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Centralized Horizontal Contact Form Card */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-[0_48px_80px_-20px_rgba(0,0,0,0.2)] relative overflow-hidden min-h-[480px] flex items-center justify-center">
          
          {!isSubmitted ? (
            <div className="relative z-10 w-full transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
              {/* Premium Copy - Centered */}
              <div className="mb-10 text-center">
                <h2 className="text-3xl md:text-5xl lg:text-6xl text-black font-semibold mb-6 tracking-tight leading-[1.05]">
                  Lleva tu restaurante <br className="hidden md:block" /> al siguiente nivel
                </h2>
                <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
                  Rellena el formulario ahora y recibe una propuesta estratégica personalizada <br className="hidden lg:block" /> para el crecimiento de tu negocio en menos de 24 horas.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Tu nombre" 
                      className="w-full bg-transparent border-b border-gray-100 py-3 text-black text-base md:text-lg placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Correo electrónico" 
                      className="w-full bg-transparent border-b border-gray-100 py-3 text-black text-base md:text-lg placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="relative flex gap-4 items-end">
                  <div className="relative group shrink-0">
                    <select 
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="appearance-none bg-transparent border-b border-gray-100 py-3 pr-8 text-black text-base md:text-lg font-medium focus:outline-none focus:border-black cursor-pointer transition-colors"
                    >
                      <option value="+34">🇪🇸 +34</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                    </select>
                    <div className="absolute right-0 bottom-4 pointer-events-none text-gray-400">
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Número de teléfono" 
                    className="flex-1 bg-transparent border-b border-gray-100 py-3 text-black text-base md:text-lg placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                    required
                  />
                </div>

                {/* Service Selection Pills */}
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] block text-center">¿En qué podemos ayudarte?</label>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`px-4 py-1.5 rounded-full text-[11px] md:text-xs font-semibold border transition-all duration-300 flex items-center gap-2 ${
                          selectedServices.includes(service)
                            ? "bg-black border-black text-white shadow-lg scale-95"
                            : "bg-white border-gray-100 text-gray-400 hover:border-gray-200"
                        }`}
                      >
                        {selectedServices.includes(service) && <Check className="w-3.5 h-3.5" />}
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 flex justify-center">
                  <button 
                    type="submit" 
                    className="bg-black text-white rounded-full pl-8 pr-2 py-2 flex items-center justify-between gap-6 group hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-95 w-full md:w-auto shadow-xl"
                  >
                    <span className="font-semibold tracking-tight text-base md:text-lg">
                      <span className="md:hidden">Solicitar presupuesto</span>
                      <span className="hidden md:inline">Solicitar presupuesto y auditoría</span>
                    </span>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-black shadow-inner">
                      <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>
                </div>

                <p className="text-[10px] text-gray-400 leading-relaxed pt-4 text-center font-light max-w-xl mx-auto">
                  Al enviar, aceptas nuestra política de privacidad y el tratamiento de tus datos para el contacto.
                </p>
              </form>
            </div>
          ) : (
            /* Success State with Premium Animation */
            <div className="relative z-10 text-center py-10 animate-in fade-in zoom-in duration-700 ease-out">
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center animate-bounce shadow-2xl">
                  <Check className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight">¡Solicitud recibida!</h3>
              <p className="text-gray-500 text-lg max-w-sm mx-auto leading-relaxed">
                Gracias por confiar en Motions. Uno de nuestros especialistas te contactará en menos de 24 horas.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-black text-sm font-medium hover:underline transition-all"
              >
                Volver al formulario
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
