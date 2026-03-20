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
    "IA Gastronómica",
    "SEO Local",
    "Gestión RRSS"
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
    <section id="contact" ref={ref} className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden flex flex-col items-center font-['Inter']">
      {/* Background Image with Darker Overlay for Contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Adbanner.jpg"
          alt="Final CTA background"
          className="w-full h-full object-cover brightness-[0.4]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className={`relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center transition-all duration-1000 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Left Side: Text & Quick Links */}
        <div className="text-white">
          <h2 className="text-4xl md:text-7xl font-medium tracking-tight leading-[1.05] mb-8">
            Lleva tu restaurante<br />
            al siguiente nivel
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed font-light mb-12">
            Especialistas en marketing gastronómico. Creamos sistemas digitales diseñados para convertir simples visitas online en reservas reales.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-auto">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-3">Contacto Directo</span>
              <div className="flex items-center gap-4">
                <a href="https://wa.me/34919610420" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>
                <a href="tel:+34919610420" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">Llamar ahora</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form Card */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl text-black font-semibold mb-2 tracking-tight">Solicitar información</h3>
            <p className="text-gray-500 text-sm mb-10">Completa el formulario y crearemos un plan personalizado para ti.</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Tu nombre" 
                    className="w-full bg-transparent border-b border-gray-200 py-3 text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                    required
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Correo electrónico" 
                    className="w-full bg-transparent border-b border-gray-200 py-3 text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="relative flex gap-3 items-end">
                <div className="relative group">
                  <select 
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="appearance-none bg-transparent border-b border-gray-200 py-3 pr-6 text-black font-medium focus:outline-none focus:border-black cursor-pointer transition-colors"
                  >
                    <option value="+34">🇪🇸 +34</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+39">🇮🇹 +39</option>
                    <option value="+52">🇲🇽 +52</option>
                  </select>
                  <div className="absolute right-0 bottom-4 pointer-events-none text-gray-400">
                    <ChevronRight className="w-3 h-3 rotate-90" />
                  </div>
                </div>
                <input 
                  type="tel" 
                  placeholder="Número de teléfono" 
                  className="flex-1 bg-transparent border-b border-gray-200 py-3 text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                  required
                />
              </div>

              {/* Service Selection Pills */}
              <div className="space-y-4">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Servicios de interés</label>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 flex items-center gap-2 ${
                        selectedServices.includes(service)
                          ? "bg-black border-black text-white shadow-lg scale-95"
                          : "bg-white border-gray-100 text-gray-500 hover:border-gray-300"
                      }`}
                    >
                      {selectedServices.includes(service) && <Check className="w-3 h-3" />}
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  className="bg-black text-white rounded-full pl-8 pr-2 py-2 flex items-center justify-between gap-4 group hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-95 w-full md:w-auto"
                >
                  <span className="font-semibold tracking-tight">Enviar mensaje</span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </div>

              <p className="text-[10px] text-gray-400 leading-relaxed pt-4">
                Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos para fines de contacto comercial.
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
