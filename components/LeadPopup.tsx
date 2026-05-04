import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const LeadPopup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const popupSeen = localStorage.getItem('motions_lead_popup_v6');
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
        localStorage.setItem('motions_lead_popup_v6', 'true');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real scenario, this would send data to a backend or CRM
        closePopup();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity font-['Inter']">
            <div className="relative w-full max-w-[420px] md:max-w-[900px] bg-black md:bg-white shadow-2xl overflow-hidden rounded-3xl animate-in fade-in zoom-in duration-500">
                
                {/* Close Button */}
                <button 
                    onClick={closePopup}
                    className="absolute top-4 right-4 z-30 p-2 bg-black/50 hover:bg-black/80 md:bg-gray-100 md:hover:bg-gray-200 text-white md:text-black rounded-full transition-all backdrop-blur-md"
                >
                    <X size={20} strokeWidth={2} />
                </button>
                
                <div className="flex flex-col md:flex-row">
                    
                    {/* Image Section / Mobile Overlay Container */}
                    <div className="relative w-full md:w-[55%] h-[65vh] md:h-[600px] bg-black overflow-hidden shrink-0">
                        <img 
                            src="/motions-ad-popup.jpg" 
                            alt="Promoción Creación Web Motions" 
                            className="w-full h-full object-contain md:object-cover"
                            onError={(e) => {
                                e.currentTarget.src = "/bannermobile.jpg";
                            }}
                        />
                        
                        {/* Mobile Overlay - Only on Mobile Devices */}
                        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 pb-10">
                            <div className="mb-6">
                                <h3 className="text-2xl font-medium tracking-tight leading-tight text-white uppercase mb-2">
                                    Reclama tu <br /> 10% Descuento
                                </h3>
                            </div>

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <input 
                                    type="text" 
                                    placeholder="Nombre completo" 
                                    required
                                    className="w-full bg-transparent border-b border-white/20 py-2 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
                                />
                                <input 
                                    type="email" 
                                    placeholder="Correo electrónico" 
                                    required
                                    className="w-full bg-transparent border-b border-white/20 py-2 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
                                />
                                <div className="flex gap-3">
                                    <div className="shrink-0 border-b border-white/20 py-2">
                                        <select className="bg-transparent text-white text-sm focus:outline-none appearance-none pr-1">
                                            <option value="+34">🇪🇸 +34</option>
                                            <option value="+1">🇺🇸 +1</option>
                                        </select>
                                    </div>
                                    <input 
                                        type="tel" 
                                        placeholder="Teléfono" 
                                        required
                                        className="flex-1 bg-transparent border-b border-white/20 py-2 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
                                    />
                                </div>
                                <button type="submit" className="w-full py-3.5 mt-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full shadow-xl active:scale-95 transition-transform">
                                    Solicitar Oferta
                                </button>
                            </form>
                            <p className="text-[8px] text-white/30 mt-4 text-center">Al enviar, aceptas nuestra política de privacidad.</p>
                        </div>
                    </div>

                    {/* Desktop Content Side (Side-by-side) */}
                    <div className="hidden md:flex md:w-[45%] bg-white p-12 lg:p-16 flex-col justify-center">
                        <div className="mb-10">
                            <h3 className="text-4xl lg:text-5xl font-medium tracking-tighter leading-[1.05] text-black uppercase mb-5">
                                Reclama tu <br /> 10% Descuento
                            </h3>
                            <p className="text-gray-500 text-lg font-light leading-relaxed">
                                Lleva tu restaurante al siguiente nivel con una web premium diseñada para convertir visitas en reservas.
                            </p>
                        </div>

                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    placeholder="Tu nombre" 
                                    required
                                    className="w-full bg-transparent border-b border-gray-100 py-3 text-black text-lg placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                                />
                            </div>
                            <div className="relative">
                                <input 
                                    type="email" 
                                    placeholder="Correo electrónico" 
                                    required
                                    className="w-full bg-transparent border-b border-gray-100 py-3 text-black text-lg placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                                />
                            </div>
                            <div className="relative flex gap-4">
                                <div className="shrink-0 border-b border-gray-100 py-3">
                                    <select className="bg-transparent text-black text-lg font-medium focus:outline-none appearance-none pr-2">
                                        <option value="+34">🇪🇸 +34</option>
                                        <option value="+1">🇺🇸 +1</option>
                                    </select>
                                </div>
                                <input 
                                    type="tel" 
                                    placeholder="Número de teléfono" 
                                    required
                                    className="flex-1 bg-transparent border-b border-gray-100 py-3 text-black text-lg placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                                />
                            </div>
                            <div className="pt-4">
                                <button type="submit" className="w-full py-4 bg-black text-white text-base font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-all rounded-full shadow-xl hover:scale-[1.01] active:scale-95 transform duration-200">
                                    Solicitar Oferta
                                </button>
                            </div>
                        </form>
                        <p className="text-[10px] text-gray-400 mt-6 leading-relaxed text-center font-light opacity-60">
                            Al enviar, aceptas nuestra política de privacidad y el tratamiento de tus datos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadPopup;
