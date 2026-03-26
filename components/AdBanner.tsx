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

            {/* Floating Action Buttons - Bottom Center Glassmorphism Style */}
            <div className="absolute bottom-12 md:bottom-28 left-1/2 -translate-x-1/2 w-full max-w-[90%] md:max-w-xl flex flex-row items-center justify-center gap-3 md:gap-5 px-4">
                <a 
                    href="https://wa.me/34666666666" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-initial md:min-w-[200px] px-4 md:px-8 py-3.5 md:py-4 bg-white/10 backdrop-blur-xl text-white rounded-full font-bold text-[9px] md:text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-2xl hover:bg-white/20 transition-all hover:scale-[1.05] active:scale-95 border border-white/30"
                >
                    <MessageSquare className="w-4 h-4 md:w-5 md:h-5 stroke-[2]" />
                    WhatsApp
                </a>
                <a 
                    href="#contacto"
                    className="flex-1 md:flex-initial md:min-w-[200px] px-4 md:px-8 py-3.5 md:py-4 bg-black/40 backdrop-blur-xl text-white rounded-full font-bold text-[9px] md:text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-2xl hover:bg-black/60 transition-all hover:scale-[1.05] active:scale-95 border border-white/20"
                >
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 stroke-[2]" />
                    Auditoría
                </a>
            </div>
        </section>
    );
};

export default AdBanner;
