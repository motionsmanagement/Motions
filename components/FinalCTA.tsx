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

      <div className={`relative z-10 max-w-7xl w-full transition-all duration-1000 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Professional Contact Form Card */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-[0_48px_80px_-20px_rgba(0,0,0,0.2)] relative overflow-hidden max-w-[620px]">
            <div className="relative z-10">
              {/* Anagram Logo */}
              <div className="flex justify-start mb-10">
                <img src="/anagram.png" alt="Motions Anagram" className="h-12 w-auto" />
              </div>

              {/* Restored Premium Copy */}
              <div className="mb-12 text-left">
                <h2 className="text-3xl md:text-5xl text-black font-semibold mb-6 tracking-tight leading-[1.1]">
                  Lleva tu restaurante al siguiente nivel
                </h2>
                <p className="text-gray-500 text-sm md:text-base max-w-lg leading-relaxed font-light">
                  Especialistas en marketing gastronómico. Creamos sistemas digitales diseñados para convertir simples visitas online en reservas reales.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Tu nombre" 
                      className="w-full bg-transparent border-b border-gray-200 py-3 text-black text-base md:text-lg placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Correo electrónico" 
                      className="w-full bg-transparent border-b border-gray-200 py-3 text-black text-base md:text-lg placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="relative flex gap-4 items-end">
                  <div className="relative group shrink-0">
                    <select 
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="appearance-none bg-transparent border-b border-gray-200 py-3 pr-8 text-black text-base md:text-lg font-medium focus:outline-none focus:border-black cursor-pointer transition-colors"
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
                    className="flex-1 bg-transparent border-b border-gray-200 py-3 text-black text-base md:text-lg placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                    required
                  />
                </div>

                {/* Service Selection Pills - Uniform Sentence Case & Darker Borders */}
                <div className="space-y-5">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest pl-1">¿En qué podemos ayudarte?</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`px-5 py-2.5 rounded-full text-xs md:text-[13px] font-semibold border transition-all duration-300 flex items-center gap-2 ${
                          selectedServices.includes(service)
                            ? "bg-black border-black text-white shadow-lg scale-95"
                            : "bg-white border-gray-200 text-gray-500 hover:border-gray-400"
                        }`}
                      >
                        {selectedServices.includes(service) && <Check className="w-4 h-4" />}
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 flex justify-start">
                  <button 
                    type="submit" 
                    className="bg-black text-white rounded-full pl-8 pr-2 py-2.5 flex items-center justify-between gap-6 group hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-95 w-full md:w-auto shadow-xl"
                  >
                    <span className="font-semibold tracking-tight text-base md:text-lg">Solicitar presupuesto y auditoría</span>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-black shadow-inner">
                      <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>
                </div>

                <p className="text-[10px] text-gray-400 leading-relaxed pt-4 text-left font-light max-w-sm">
                  Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos para fines de contacto comercial.
                </p>
              </form>
            </div>
          </div>
          
          {/* Right Side: Visual Breathing Space for background image visibility */}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
