import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const LeadPopup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const popupSeen = localStorage.getItem('motions_lead_popup_v2');
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
        localStorage.setItem('motions_lead_popup_v2', 'true');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real scenario, this would send data to a backend or CRM
        closePopup();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md transition-opacity">
            <div className="relative w-full max-w-[800px] bg-[#FBF9F6] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[400px] animate-in fade-in zoom-in duration-500 rounded-xl">
                
                {/* Close Button - Responsive Position */}
                <button 
                    onClick={closePopup}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/10 hover:bg-black/20 text-[#2D241E] hover:text-black rounded-full transition-all backdrop-blur-md md:bg-[#FBF9F6]/50"
                >
                    <X size={20} strokeWidth={1.5} />
                </button>
                
                {/* Image Section - Prominent */}
                <div className="w-full md:w-[45%] h-[300px] md:h-auto relative order-1 md:order-1">
                    <img 
                        // Renombra tu imagen a "banner-popup.jpg" y métela en public/
                        src="/banner-popup.jpg" 
                        alt="Promoción Creación Web Motions" 
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                            // Fallback if image not found
                            e.currentTarget.src = "/bannermobile.jpg";
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10"></div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-[55%] p-8 sm:p-10 md:p-12 flex flex-col justify-center bg-[#FBF9F6] order-2 md:order-2">
                    <div className="mb-8">
                        <span className="text-xs font-semibold tracking-[0.2em] text-[#2D241E]/50 uppercase block mb-3">Oferta Exclusiva</span>
                        <h3 className="text-3xl sm:text-4xl font-serif text-[#2D241E] mb-4 tracking-tight leading-[1.1]">
                            ¿Listo para <br/>escalar tu local?
                        </h3>
                        <p className="text-[#2D241E]/70 text-sm sm:text-base leading-relaxed">
                            Déjanos tus datos y aprovecha esta oferta especial para transformar la presencia digital de tu restaurante.
                        </p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Nombre completo" 
                                    required
                                    className="w-full px-0 py-2 bg-transparent border-b border-[#2D241E]/20 focus:outline-none focus:border-[#2D241E] text-sm transition-colors placeholder:text-[#2D241E]/40"
                                />
                            </div>
                            <div>
                                <input 
                                    type="tel" 
                                    placeholder="Teléfono" 
                                    required
                                    className="w-full px-0 py-2 bg-transparent border-b border-[#2D241E]/20 focus:outline-none focus:border-[#2D241E] text-sm transition-colors placeholder:text-[#2D241E]/40"
                                />
                            </div>
                        </div>
                        <div>
                            <input 
                                type="email" 
                                placeholder="Correo electrónico" 
                                required
                                className="w-full px-0 py-2 bg-transparent border-b border-[#2D241E]/20 focus:outline-none focus:border-[#2D241E] text-sm transition-colors placeholder:text-[#2D241E]/40"
                            />
                        </div>
                        
                        <div className="pt-6">
                            <button 
                                type="submit"
                                className="w-full sm:w-auto px-8 py-3.5 bg-[#2D241E] text-white text-sm font-medium tracking-wide hover:bg-black transition-colors rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200"
                            >
                                Solicitar Información
                            </button>
                        </div>
                        
                        <p className="text-[10px] text-[#2D241E]/40 mt-6 leading-relaxed max-w-sm">
                            Al registrarte, aceptas nuestra <a href="/privacidad" className="underline hover:text-[#2D241E]/80 transition-colors">Política de Privacidad</a> y consientes recibir comunicaciones.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LeadPopup;
