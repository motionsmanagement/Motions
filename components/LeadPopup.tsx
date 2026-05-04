import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const LeadPopup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const popupSeen = localStorage.getItem('motions_lead_popup');
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
        localStorage.setItem('motions_lead_popup', 'true');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real scenario, this would send data to a backend or CRM
        closePopup();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
            <div className="relative w-full max-w-[340px] bg-[#FBF9F6] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-300 rounded-sm">
                <button 
                    onClick={closePopup}
                    className="absolute top-3 right-3 z-10 p-1.5 text-white hover:text-gray-200 transition-colors"
                >
                    <X size={20} strokeWidth={1.5} />
                </button>
                
                <div className="w-full h-52 relative">
                    <img 
                        src="/bannermobile.jpg" 
                        alt="Descuento Motions" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                <div className="p-7 sm:p-8 overflow-y-auto bg-[#FBF9F6]">
                    <h3 className="text-[1.7rem] font-serif text-[#2D241E] mb-3 tracking-tight leading-tight">
                        Obtén un 10% de descuento
                    </h3>
                    <p className="text-[#2D241E]/80 mb-6 text-[13px] leading-relaxed">
                        Impulsa las ventas de tu restaurante. Déjanos tus datos para recibir novedades, promociones y un 10% de descuento en tu primer mes.
                    </p>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <input 
                                type="text" 
                                placeholder="Nombre completo" 
                                required
                                className="w-full px-0 py-2.5 bg-transparent border-b border-[#2D241E]/20 focus:outline-none focus:border-[#2D241E] text-sm transition-colors placeholder:text-[#2D241E]/40"
                            />
                        </div>
                        <div>
                            <input 
                                type="email" 
                                placeholder="Correo electrónico*" 
                                required
                                className="w-full px-0 py-2.5 bg-transparent border-b border-[#2D241E]/20 focus:outline-none focus:border-[#2D241E] text-sm transition-colors placeholder:text-[#2D241E]/40"
                            />
                        </div>
                        <div>
                            <input 
                                type="tel" 
                                placeholder="Teléfono*" 
                                required
                                className="w-full px-0 py-2.5 bg-transparent border-b border-[#2D241E]/20 focus:outline-none focus:border-[#2D241E] text-sm transition-colors placeholder:text-[#2D241E]/40"
                            />
                        </div>
                        
                        <p className="text-[9px] text-[#2D241E]/40 mt-4 leading-tight">
                            Al registrarte, aceptas nuestra <a href="/privacidad" className="underline">Política de Privacidad</a> y consientes recibir comunicaciones de nuestra empresa.
                        </p>

                        <div className="pt-3">
                            <button 
                                type="submit"
                                className="text-[#D65B5B] font-medium text-[13px] flex items-center gap-1.5 hover:text-[#B54A4A] transition-colors"
                            >
                                Reclamar mi descuento <span className="text-lg leading-none mb-[2px]">&rsaquo;</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LeadPopup;
