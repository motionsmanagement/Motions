import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const LeadPopup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const popupSeen = localStorage.getItem('motions_lead_popup_v5');
        if (!popupSeen) {
            // Show popup after 8 seconds of engagement
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 8000);
            return () => clearTimeout(timer);
        }
    }, []);

    const closePopup = () => {
        setIsOpen(false);
        localStorage.setItem('motions_lead_popup_v5', 'true');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real scenario, this would send data to a backend or CRM
        closePopup();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity font-['Inter']">
            <div className="relative w-full max-w-[420px] md:max-w-[850px] bg-white md:bg-transparent shadow-2xl overflow-hidden rounded-[2rem] animate-in fade-in zoom-in duration-500">
                
                {/* Close Button */}
                <button 
                    onClick={closePopup}
                    className="absolute top-6 right-6 z-30 p-2 bg-black/10 hover:bg-black/20 md:bg-gray-100 md:hover:bg-gray-200 text-black rounded-full transition-all backdrop-blur-md"
                >
                    <X size={20} strokeWidth={2} />
                </button>
                
                <div className="flex flex-col md:flex-row bg-white">
                    
                    {/* Left Side: Image (Poster) */}
                    <div className="relative w-full md:w-1/2 h-[45vh] md:h-[600px] bg-black overflow-hidden shrink-0">
                        <img 
                            src="/motions-ad-popup.jpg" 
                            alt="Promoción Creación Web Motions" 
                            className="w-full h-full object-contain md:object-cover"
                            onError={(e) => {
                                e.currentTarget.src = "/bannermobile.jpg";
                            }}
                        />
                        {/* Mobile Gradient Overlay - Very subtle to ensure image visibility */}
                        <div className="md:hidden absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/20 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Right Side: White Card Form */}
                    <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
                        <div className="mb-8 md:mb-10">
                            <h3 className="text-3xl md:text-5xl font-medium tracking-tighter leading-[1.1] text-black uppercase mb-4">
                                Reclama tu <br className="hidden md:block" /> 10% Descuento
                            </h3>
                            <p className="text-gray-500 text-sm md:text-lg font-light leading-relaxed">
                                Lleva tu restaurante al siguiente nivel con una web premium diseñada para convertir.
                            </p>
                        </div>

                        <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    placeholder="Tu nombre" 
                                    required
                                    className="w-full bg-transparent border-b border-gray-100 py-3 text-black text-sm md:text-lg placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                                />
                            </div>
                            
                            <div className="relative">
                                <input 
                                    type="email" 
                                    placeholder="Correo electrónico" 
                                    required
                                    className="w-full bg-transparent border-b border-gray-100 py-3 text-black text-sm md:text-lg placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                                />
                            </div>

                            <div className="relative flex gap-4">
                                <div className="relative shrink-0">
                                    <select 
                                        className="appearance-none bg-transparent border-b border-gray-100 py-3 pr-6 text-black text-sm md:text-lg font-medium focus:outline-none focus:border-black cursor-pointer transition-colors"
                                    >
                                        <option value="+34">🇪🇸 +34</option>
                                        <option value="+1">🇺🇸 +1</option>
                                        <option value="+44">🇬🇧 +44</option>
                                    </select>
                                </div>
                                <input 
                                  type="tel" 
                                  placeholder="Número de teléfono" 
                                  required
                                  className="flex-1 bg-transparent border-b border-gray-100 py-3 text-black text-sm md:text-lg placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                                />
                            </div>
                            
                            <div className="pt-6">
                                <button 
                                    type="submit"
                                    className="w-full py-4 bg-black text-white text-sm md:text-base font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-all rounded-full shadow-xl hover:scale-[1.01] active:scale-95 transform duration-200"
                                >
                                    Solicitar Oferta
                                </button>
                            </div>
                            
                            <p className="text-[10px] text-gray-400 mt-4 leading-relaxed text-center font-light opacity-60">
                                Al enviar, aceptas nuestra política de privacidad y el tratamiento de tus datos.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadPopup;
