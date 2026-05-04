import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';

const LeadPopup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [countryCodeMobile, setCountryCodeMobile] = useState('+34');
    const [countryCodeDesktop, setCountryCodeDesktop] = useState('+34');

    useEffect(() => {
        const popupSeen = localStorage.getItem('motions_lead_popup_v8');
        if (!popupSeen) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 8000);
            return () => clearTimeout(timer);
        }
    }, []);

    const closePopup = () => {
        setIsOpen(false);
        localStorage.setItem('motions_lead_popup_v8', 'true');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, isMobile: boolean) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const code = isMobile ? countryCodeMobile : countryCodeDesktop;
        
        const data = {
          nombre: formData.get('nombre'),
          email: formData.get('email'),
          telefono: `${code} ${formData.get('telefono')}`,
          origen: "Popup 10% Descuento",
          _subject: "🔥 Nuevo Lead Popup Motions - " + formData.get('nombre'),
          _template: "box"
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
          
          setTimeout(() => {
              closePopup();
          }, 3000);

        } catch (error) {
          console.error('Error enviando formulario:', error);
          setIsSubmitted(true);
          setTimeout(() => closePopup(), 3000);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity font-['Inter']">
            
            {/* Close Button - Global */}
            <button 
                onClick={closePopup}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-[110] p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all backdrop-blur-md"
            >
                <X size={20} strokeWidth={2} />
            </button>

            {/* --- DESKTOP VIEW (Split Layout) --- */}
            <div className="hidden md:flex relative w-full max-w-[900px] h-[550px] bg-white rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-500">
                
                {/* Left Side: Pure Image */}
                <div className="w-1/2 h-full bg-black relative">
                    <img 
                        src="/motions-ad-popup.jpg" 
                        alt="Promoción Creación Web Motions" 
                        className="w-full h-full object-cover object-top"
                        onError={(e) => { e.currentTarget.src = "/bannermobile.jpg"; }}
                    />
                </div>

                {/* Right Side: Form Content */}
                <div className="w-1/2 h-full bg-white p-10 lg:p-14 flex flex-col justify-center relative">
                    {!isSubmitted ? (
                        <>
                            <div className="mb-6">
                                <h3 className="text-3xl lg:text-[2.5rem] font-medium tracking-tight text-black leading-[1.1] mb-4">
                                    Reclama tu <br /> 10% de descuento.
                                </h3>
                                <p className="text-gray-500 text-sm lg:text-base leading-relaxed font-light">
                                    Lleva tu restaurante al siguiente nivel con una web premium diseñada para convertir visitas en reservas directas.
                                </p>
                            </div>

                            <form className="space-y-5" onSubmit={(e) => handleSubmit(e, false)}>
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        name="nombre"
                                        placeholder="Tu nombre completo" 
                                        required
                                        className="w-full bg-transparent border-b border-gray-200 py-3 text-black text-sm placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                                    />
                                </div>
                                <div className="relative">
                                    <input 
                                        type="email" 
                                        name="email"
                                        placeholder="Correo electrónico" 
                                        required
                                        className="w-full bg-transparent border-b border-gray-200 py-3 text-black text-sm placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                                    />
                                </div>
                                <div className="relative flex gap-4">
                                    <div className="shrink-0 border-b border-gray-200 py-3">
                                        <select 
                                            value={countryCodeDesktop}
                                            onChange={(e) => setCountryCodeDesktop(e.target.value)}
                                            className="bg-transparent text-black text-sm font-medium focus:outline-none appearance-none pr-4 cursor-pointer"
                                        >
                                            <option value="+34">🇪🇸 +34</option>
                                            <option value="+1">🇺🇸 +1</option>
                                            <option value="+44">🇬🇧 +44</option>
                                        </select>
                                    </div>
                                    <input 
                                        type="tel" 
                                        name="telefono"
                                        placeholder="Número de teléfono" 
                                        required
                                        className="flex-1 bg-transparent border-b border-gray-200 py-3 text-black text-sm placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                                    />
                                </div>
                                <div className="pt-2">
                                    <button type="submit" className="w-full py-3.5 bg-black text-white text-[13px] font-medium tracking-wide rounded-full shadow-xl hover:-translate-y-0.5 active:scale-95 transform duration-200">
                                        Solicitar Oferta
                                    </button>
                                </div>
                            </form>
                            <p className="text-[10px] text-gray-400 mt-4 text-center font-light">
                                Al enviar, aceptas nuestra política de privacidad.
                            </p>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center h-full animate-in fade-in zoom-in">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 shadow-xl">
                                <Check className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-3xl font-medium text-black mb-3 tracking-tight">¡Solicitud recibida!</h3>
                            <p className="text-gray-500 text-sm max-w-[250px]">
                                Gracias. Te contactaremos en breve con tu oferta especial.
                            </p>
                        </div>
                    )}
                </div>
            </div>


            {/* --- MOBILE VIEW (Overlay Layout) --- */}
            <div className="md:hidden relative w-full max-w-[400px] h-[85vh] bg-black rounded-[2rem] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in duration-500">
                
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/motions-ad-popup.jpg" 
                        alt="Promoción Creación Web Motions" 
                        className="w-full h-full object-cover object-top"
                        onError={(e) => { e.currentTarget.src = "/bannermobile.jpg"; }}
                    />
                    {/* Gradient from bottom - lower profile to show more image */}
                    <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex-1 flex flex-col justify-end p-6 pb-8">
                    {!isSubmitted ? (
                        <>
                            <div className="mb-5 text-left">
                                <h3 className="text-3xl font-medium tracking-tight text-white leading-[1.1] mb-2 drop-shadow-lg">
                                    Reclama tu <br /> 10% descuento.
                                </h3>
                                <p className="text-white/80 text-[13px] font-light leading-relaxed drop-shadow-md">
                                    Web premium para tu restaurante.
                                </p>
                            </div>

                            <form className="space-y-3" onSubmit={(e) => handleSubmit(e, true)}>
                                <div className="space-y-1">
                                    <input 
                                        type="text" 
                                        name="nombre"
                                        placeholder="Tu nombre completo" 
                                        required
                                        className="w-full bg-transparent border-b border-white/20 py-2.5 text-white text-[15px] placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
                                    />
                                    <input 
                                        type="email" 
                                        name="email"
                                        placeholder="Correo electrónico" 
                                        required
                                        className="w-full bg-transparent border-b border-white/20 py-2.5 text-white text-[15px] placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
                                    />
                                    <div className="flex gap-3">
                                        <div className="border-b border-white/20 py-2.5 shrink-0 flex items-center">
                                            <select 
                                                value={countryCodeMobile}
                                                onChange={(e) => setCountryCodeMobile(e.target.value)}
                                                className="bg-transparent text-white text-[15px] focus:outline-none appearance-none cursor-pointer pr-1"
                                            >
                                                <option value="+34">🇪🇸 +34</option>
                                                <option value="+1">🇺🇸 +1</option>
                                                <option value="+44">🇬🇧 +44</option>
                                            </select>
                                        </div>
                                        <input 
                                            type="tel" 
                                            name="telefono"
                                            placeholder="Teléfono" 
                                            required
                                            className="flex-1 bg-transparent border-b border-white/20 py-2.5 text-white text-[15px] placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
                                        />
                                    </div>
                                </div>
                                <div className="pt-3">
                                    <button type="submit" className="w-full py-3.5 bg-white text-black text-[14px] font-medium tracking-wide rounded-full shadow-2xl active:scale-95 transition-transform">
                                        Solicitar Oferta
                                    </button>
                                </div>
                            </form>
                            <p className="text-[10px] text-white/40 mt-4 text-center">
                                Al enviar, aceptas nuestra política de privacidad.
                            </p>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center py-10 animate-in fade-in zoom-in">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl">
                                <Check className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-2xl font-medium text-white mb-2 tracking-tight">¡Recibido!</h3>
                            <p className="text-white/70 text-sm">Te contactaremos muy pronto.</p>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default LeadPopup;
