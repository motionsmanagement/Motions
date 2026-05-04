import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const LeadPopup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const popupSeen = localStorage.getItem('motions_lead_popup_v3');
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
        localStorage.setItem('motions_lead_popup_v3', 'true');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real scenario, this would send data to a backend or CRM
        closePopup();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity">
            <div className="relative w-full max-w-[420px] bg-black shadow-2xl overflow-hidden rounded-2xl animate-in fade-in zoom-in duration-300">
                
                {/* Close Button */}
                <button 
                    onClick={closePopup}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all backdrop-blur-md"
                >
                    <X size={20} strokeWidth={2} />
                </button>
                
                {/* Image Container - Using object-contain so it NEVER crops */}
                <div className="relative w-full max-h-[90vh] flex flex-col">
                    <img 
                        src="/motions-ad-popup.jpg" 
                        alt="Promoción Creación Web Motions" 
                        className="w-full h-auto max-h-[90vh] object-contain bg-black"
                        onError={(e) => {
                            e.currentTarget.src = "/bannermobile.jpg";
                        }}
                    />
                    
                    {/* Gradient Overlay & Form over the image */}
                    <div className="absolute bottom-0 inset-x-0 pt-32 pb-6 px-6 sm:px-8 bg-gradient-to-t from-black via-black/95 to-transparent">
                        <div className="mb-4">
                            <h3 className="text-[1.6rem] font-serif text-white mb-2 tracking-tight leading-tight drop-shadow-lg">
                                ¿Listo para escalar tu local?
                            </h3>
                            <p className="text-white/80 text-[13px] leading-relaxed drop-shadow-md">
                                Déjanos tus datos y aprovecha esta oferta especial para transformar la presencia digital de tu restaurante.
                            </p>
                        </div>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <input 
                                    type="text" 
                                    placeholder="Nombre" 
                                    required
                                    className="w-full px-0 py-2 bg-transparent border-b border-white/20 focus:outline-none focus:border-white text-white text-sm transition-colors placeholder:text-white/40"
                                />
                                <input 
                                    type="tel" 
                                    placeholder="Teléfono" 
                                    required
                                    className="w-full px-0 py-2 bg-transparent border-b border-white/20 focus:outline-none focus:border-white text-white text-sm transition-colors placeholder:text-white/40"
                                />
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    placeholder="Correo electrónico" 
                                    required
                                    className="w-full px-0 py-2 bg-transparent border-b border-white/20 focus:outline-none focus:border-white text-white text-sm transition-colors placeholder:text-white/40"
                                />
                            </div>
                            
                            <div className="pt-4">
                                <button 
                                    type="submit"
                                    className="w-full py-3.5 bg-white text-black text-[13px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-full shadow-xl hover:-translate-y-0.5 transform duration-200"
                                >
                                    Solicitar Oferta
                                </button>
                            </div>
                            
                            <p className="text-[10px] text-white/30 mt-4 leading-relaxed text-center">
                                Al registrarte, aceptas nuestra <a href="/privacidad" className="underline hover:text-white/60 transition-colors">Política de Privacidad</a>.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadPopup;
