import React from 'react';
import { MessageSquare, Calendar } from 'lucide-react';

const AdBanner: React.FC = () => {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Background Images */}
            {/* Desktop Version */}
            <div className="hidden md:block w-full">
                <img 
                    src="/adbannermotionswebsite.jpg" 
                    alt="Publicidad Motions" 
                    className="w-full h-auto object-cover"
                />
            </div>
            {/* Mobile Version */}
            <div className="md:hidden w-full">
                <img 
                    src="/adbannermobilemotions.jpg" 
                    alt="Publicidad Motions Mobile" 
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Floating Action Buttons - Bottom Center */}
            <div className="absolute bottom-6 md:bottom-16 left-1/2 -translate-x-1/2 w-full max-w-[94%] md:max-w-xl flex flex-row items-center justify-center gap-3 px-4">
                <a 
                    href="https://wa.me/34666666666" // Placeholder, user will provide
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-initial md:min-w-[220px] px-4 md:px-8 py-3 md:py-4 bg-white text-black rounded-full font-bold text-[10px] md:text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.3)] hover:bg-neutral-100 transition-all hover:scale-[1.03] active:scale-95 border border-white/10"
                >
                    <MessageSquare className="w-3.5 h-3.5 md:w-4 md:h-4 stroke-[2.5]" />
                    WhatsApp
                </a>
                <a 
                    href="#contacto"
                    className="flex-1 md:flex-initial md:min-w-[220px] px-4 md:px-8 py-3 md:py-4 bg-black text-white rounded-full font-bold text-[10px] md:text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] hover:bg-neutral-800 transition-all hover:scale-[1.03] active:scale-95 border border-white/5"
                >
                    <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 stroke-[2.5]" />
                    Solicitar Auditoría
                </a>
            </div>
        </section>
    );
};

export default AdBanner;
