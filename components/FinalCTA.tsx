import React, { useState } from 'react';
import { ChevronRight, Check, ArrowUpRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [countryCode, setCountryCode] = useState('+34');
  const ref = React.useRef<HTMLDivElement>(null);

  const servicesList = [
    "Páginas Web",
    "Branding",
    "SEO Local",
    "Integración IA",
    "Redes Sociales"
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
      telefono: `${countryCode} ${formData.get('telefono')}`,
      servicios: selectedServices.join(', '),
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
    } catch (error) {
      console.error('Error enviando formulario:', error);
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contacto" ref={ref} className="bg-[#F7F7F5] py-20 px-6 md:px-12 font-['Inter']">
      <div className={`max-w-6xl mx-auto transition-all duration-[1000ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl flex flex-col lg:flex-row min-h-[580px]">
          
          {/* Left Side: Image */}
          <div className="lg:w-[45%] relative min-h-[300px] lg:min-h-full">
            <img 
              src="/motions11.jpg" 
              alt="Motions Portfolio" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-[55%] p-8 md:p-12 lg:p-14 relative flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-black mb-3 tracking-tight">¡Enviado con éxito!</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto mb-8">
                  Te contactaremos en menos de 24 horas para empezar a trabajar en tu proyecto.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 border border-black text-black rounded-full text-xs font-semibold hover:bg-black hover:text-white transition-all"
                >
                  Volver
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8 text-left">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight text-black mb-4">
                    ¿Hablamos de tu proyecto?
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-normal text-gray-400 uppercase tracking-widest pl-1">Nombre completo</label>
                    <input 
                      type="text" 
                      name="nombre"
                      placeholder="Tu nombre" 
                      required
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm text-black placeholder:text-gray-300 focus:outline-none focus:border-black transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-normal text-gray-400 uppercase tracking-widest pl-1">Teléfono</label>
                    <div className="flex gap-2">
                      <select 
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="bg-gray-50 border border-gray-100 rounded-xl px-3 py-3 text-sm text-black focus:outline-none focus:border-black transition-all appearance-none"
                      >
                        <option value="+34">🇪🇸 +34</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+52">🇲🇽 +52</option>
                        <option value="+33">🇫🇷 +33</option>
                        <option value="+39">🇮🇹 +39</option>
                        <option value="+49">🇩🇪 +49</option>
                      </select>
                      <input 
                        type="tel" 
                        name="telefono"
                        placeholder="600 000 000" 
                        required
                        className="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm text-black placeholder:text-gray-300 focus:outline-none focus:border-black transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-normal text-gray-400 uppercase tracking-widest pl-1">¿En qué podemos ayudarte?</label>
                    <div className="flex flex-wrap md:flex-nowrap gap-1.5 md:gap-2">
                      {servicesList.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-3 md:px-4 py-2 rounded-full text-[10px] md:text-[11px] font-semibold border transition-all duration-300 whitespace-nowrap ${
                            selectedServices.includes(service)
                              ? "bg-black border-black text-white"
                              : "bg-gray-50 border-gray-100 text-gray-500 hover:border-black/20"
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit" 
                      className="w-full bg-black text-white rounded-full py-3.5 font-bold text-sm tracking-tight hover:bg-neutral-800 transition-all shadow-lg flex items-center justify-center gap-2 group"
                    >
                      Solicitar presupuesto
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                    <p className="text-[10px] text-gray-300 mt-4 text-center font-light">
                      Al enviar, aceptas nuestra política de privacidad.
                    </p>
                  </div>
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
