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
    <section id="contacto" ref={ref} className="relative py-24 md:py-36 px-6 md:px-12 overflow-hidden flex flex-col items-center justify-center font-['Inter']">
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
          
          {/* Form State (Controls the height of the card continuously) */}
          <div className={`relative z-10 w-full transition-all duration-700 ${isSubmitted ? 'opacity-0 pointer-events-none scale-[0.98] blur-sm' : 'opacity-100 scale-100 blur-none'}`}>
            {/* Motions Logo - Centered */}
            <div className="flex justify-center mb-10">
              <img src="/motionsblack.png" alt="Motions Logo" className="h-9 md:h-12 w-auto" />
            </div>

            {/* Premium Copy - Centered */}
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-5xl lg:text-6xl text-black font-medium mb-6 tracking-tight leading-[1.05]">
                Lleva tu restaurante <br className="hidden md:block" /> al siguiente nivel
              </h2>
              <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-light px-4">
                Déjanos tus datos y te llamaremos en menos de 24 horas para entender las necesidades de tu negocio y crear un plan a medida.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Tu nombre" 
                    className="w-full bg-transparent border-b border-gray-100 py-3 text-black text-base md:text-lg placeholder:text-gray-500 focus:outline-none focus:border-black transition-colors"
                    required
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Correo electrónico" 
                    className="w-full bg-transparent border-b border-gray-100 py-3 text-black text-base md:text-lg placeholder:text-gray-500 focus:outline-none focus:border-black transition-colors"
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
                  className="flex-1 bg-transparent border-b border-gray-100 py-3 text-black text-base md:text-lg placeholder:text-gray-500 focus:outline-none focus:border-black transition-colors"
                  required
                />
              </div>

              {/* Service Selection Pills - Left Aligned and Medium Contrast */}
              <div className="space-y-4">
                <label className="text-xs md:text-sm font-semibold text-black/80 block text-left pl-1">¿En qué podemos ayudarte?</label>
                <div className="flex flex-wrap gap-2 justify-start">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`px-5 py-2 rounded-full text-xs md:text-[13px] font-semibold border transition-all duration-300 flex items-center gap-2 ${
                        selectedServices.includes(service)
                          ? "bg-black border-black text-white shadow-lg scale-95"
                          : "bg-white border-gray-300 text-gray-600 hover:border-black/40"
                      }`}
                    >
                      {selectedServices.includes(service) && <Check className="w-4 h-4" />}
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-8 flex justify-center">
                <button 
                  type="submit" 
                  className="bg-black text-white rounded-full pl-8 pr-2 py-2 flex items-center justify-between gap-6 group hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-95 w-full md:w-auto shadow-xl"
                >
                  <span className="font-semibold tracking-tight text-base md:text-lg">
                    <span className="md:hidden">Solicitar presupuesto</span>
                    <span className="hidden md:inline">Solicitar presupuesto y auditoría</span>
                  </span>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-black shadow-inner">
                    <img src="/anagram2.png" alt="Motions Anagram" className="w-5 h-5 md:w-6 md:h-6 object-contain group-hover:rotate-12 transition-transform opacity-100" />
                  </div>
                </button>
              </div>

              <p className="text-[10px] text-gray-400 leading-relaxed pt-4 text-center font-light max-w-xl mx-auto">
                Al enviar, aceptas nuestra política de privacidad y el tratamiento de tus datos para el contacto.
              </p>
            </form>
          </div>

          {/* Success Overlay State (Absolute positioned to prevent layout shift) */}
          <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center p-8 transition-all duration-700 md:delay-300 ${isSubmitted ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center animate-bounce shadow-2xl">
                <Check className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-black mb-4 tracking-tight">¡Solicitud recibida!</h3>
            <p className="text-gray-500 text-lg max-w-sm mx-auto leading-relaxed text-center">
              Gracias por confiar en Motions. Uno de nuestros especialistas te contactará en menos de 24 horas.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-10 px-6 py-2 border border-black/10 rounded-full text-black text-sm font-medium hover:bg-black/5 transition-all"
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
