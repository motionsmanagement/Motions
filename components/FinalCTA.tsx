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
    <section id="contact" ref={ref} className="relative py-28 md:py-40 px-6 md:px-12 overflow-hidden flex flex-col items-center justify-center font-['Inter']">
      {/* Brighter Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Adbanner.jpg"
          alt="Final CTA background"
          className="w-full h-full object-cover brightness-[0.7]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className={`relative z-10 max-w-2xl w-full transition-all duration-1000 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Centralized Contact Form Card */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] relative overflow-hidden">
          <div className="relative z-10">
            {/* Anagram Logo */}
            <div className="flex justify-center mb-8">
              <img src="/anagram.png" alt="Motions Anagram" className="h-12 w-auto" />
            </div>

            {/* Direct Header Content */}
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-5xl text-black font-semibold mb-3 tracking-tight leading-tight">
                Escala tu restaurante ahora
              </h2>
              <p className="text-gray-500 text-sm md:text-lg max-w-sm mx-auto leading-relaxed">
                Te contactamos en menos de 24h para crear tu plan de crecimiento real.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Tu nombre" 
                    className="w-full bg-transparent border-b border-gray-200 py-3.5 text-black text-base md:text-lg placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                    required
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Correo electrónico" 
                    className="w-full bg-transparent border-b border-gray-200 py-3.5 text-black text-base md:text-lg placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="relative flex gap-4 items-end">
                <div className="relative group shrink-0">
                  <select 
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="appearance-none bg-transparent border-b border-gray-200 py-3.5 pr-8 text-black text-base md:text-lg font-medium focus:outline-none focus:border-black cursor-pointer transition-colors"
                  >
                    <option value="+34">🇪🇸 +34</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                  </select>
                  <div className="absolute right-0 bottom-5 pointer-events-none text-gray-400">
                    <ChevronRight className="w-4 h-4 rotate-90" />
                  </div>
                </div>
                <input 
                  type="tel" 
                  placeholder="Número de teléfono" 
                  className="flex-1 bg-transparent border-b border-gray-200 py-3.5 text-black text-base md:text-lg placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                  required
                />
              </div>

              {/* Service Selection Pills */}
              <div className="space-y-5">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest pl-1">¿En qué podemos ayudarte?</label>
                <div className="flex flex-wrap gap-2.5">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`px-5 py-2.5 rounded-full text-xs md:text-[13px] font-bold border transition-all duration-300 flex items-center gap-2 ${
                        selectedServices.includes(service)
                          ? "bg-black border-black text-white shadow-lg scale-95"
                          : "bg-white border-gray-100 text-gray-500 hover:border-gray-300 hover:bg-gray-50 uppercase tracking-tighter"
                      }`}
                    >
                      {selectedServices.includes(service) && <Check className="w-4 h-4" />}
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-8 flex justify-center md:justify-start">
                <button 
                  type="submit" 
                  className="bg-black text-white rounded-full pl-8 pr-2 py-2 flex items-center justify-between gap-6 group hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-95 w-full md:w-auto"
                >
                  <span className="font-semibold tracking-tight text-base md:text-lg">Hablar ahora</span>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-black">
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </div>

              <p className="text-[11px] text-gray-400 leading-relaxed pt-6 text-center md:text-left font-light">
                Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos para fines de contacto comercial rápido.
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
