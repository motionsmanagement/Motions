import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, ChevronRight, Globe, Check } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
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
    // Simulate sending to contacto@motions.es
    alert("Solicitud enviada a contacto@motions.es. Nos pondremos en contacto pronto.");
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden flex flex-col items-center justify-center font-['Inter']">
      {/* Background Image - High Visibility */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Adbanner.jpg"
          alt="Final CTA background"
          className="w-full h-full object-cover brightness-[0.8]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className={`relative z-10 max-w-7xl w-full transition-all duration-1000 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Compact Contact Form Card */}
          <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] relative overflow-hidden max-w-[540px]">
            <div className="relative z-10">
              {/* Anagram Logo - Smaller and Tighter */}
              <div className="flex justify-start mb-6">
                <img src="/anagram.png" alt="Motions Anagram" className="h-10 w-auto" />
              </div>

              {/* Direct Header Content - More Compact */}
              <div className="mb-8 text-left">
                <h2 className="text-2xl md:text-4xl text-black font-semibold mb-2 tracking-tight leading-tight">
                  Escala tu restaurante ahora
                </h2>
                <p className="text-gray-500 text-xs md:text-sm max-w-xs leading-relaxed">
                  Te contactamos en menos de 24h para crear tu plan de crecimiento real.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Tu nombre" 
                      className="w-full bg-transparent border-b border-gray-100 py-2.5 text-black text-sm md:text-base placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Correo electrónico" 
                      className="w-full bg-transparent border-b border-gray-100 py-2.5 text-black text-sm md:text-base placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="relative flex gap-4 items-end">
                  <div className="relative group shrink-0">
                    <select 
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="appearance-none bg-transparent border-b border-gray-100 py-2.5 pr-6 text-black text-sm md:text-base font-medium focus:outline-none focus:border-black cursor-pointer transition-colors"
                    >
                      <option value="+34">🇪🇸 +34</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                    </select>
                    <div className="absolute right-0 bottom-4 pointer-events-none text-gray-400">
                      <ChevronRight className="w-3 h-3 rotate-90" />
                    </div>
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Número de teléfono" 
                    className="flex-1 bg-transparent border-b border-gray-100 py-2.5 text-black text-sm md:text-base placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                    required
                  />
                </div>

                {/* Service Selection Pills - Tighter gap */}
                <div className="space-y-3">
                  <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest pl-1">¿En qué podemos ayudarte?</label>
                  <div className="flex flex-wrap gap-1.5">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`px-4 py-2 rounded-full text-[10px] md:text-[11px] font-bold border transition-all duration-300 flex items-center gap-1.5 ${
                          selectedServices.includes(service)
                            ? "bg-black border-black text-white shadow-md scale-95"
                            : "bg-white border-gray-50 text-gray-500 hover:border-gray-200 uppercase tracking-tighter"
                        }`}
                      >
                        {selectedServices.includes(service) && <Check className="w-3 h-3" />}
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-start">
                  <button 
                    type="submit" 
                    className="bg-black text-white rounded-full pl-6 pr-1.5 py-1.5 flex items-center justify-between gap-4 group hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-95 w-full md:w-auto"
                  >
                    <span className="font-semibold tracking-tight text-sm md:text-base italic">Hablar ahora</span>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-black">
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>
                </div>

                <p className="text-[9px] text-gray-400 leading-relaxed pt-2 text-left font-light max-w-[280px]">
                  Al enviar, aceptas nuestra política de privacidad y tratamiento de datos.
                </p>
              </form>
            </div>
          </div>
          
          {/* Right Side: Empty for background visibility on desktop */}
          <div className="hidden lg:block h-20"></div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
