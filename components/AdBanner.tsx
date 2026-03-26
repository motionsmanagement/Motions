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

            {/* Floating Action Buttons */}
            <div className="absolute bottom-20 md:bottom-40 left-1/2 -translate-x-1/2 w-full max-w-[95%] md:max-w-xl flex flex-row items-center justify-center gap-1.5 md:gap-5 px-1.5 md:px-4">
                {/* Secondary Button */}
                <a 
                    href="#contacto"
                    className="flex-1 md:flex-initial md:min-w-[200px] px-2 md:px-8 py-3 md:py-3.5 bg-white text-black rounded-full font-semibold text-[10px] md:text-sm transition-all hover:bg-neutral-100 hover:scale-[1.05] active:scale-95 shadow-xl flex items-center justify-center text-center"
                >
                    Pedir presupuesto
                </a>

                {/* Primary Button */}
                <a 
                    href="#servicios"
                    className="flex-1 md:flex-initial md:min-w-[200px] px-2 md:px-8 py-3 md:py-3.5 bg-black text-white rounded-full font-semibold text-[10px] md:text-sm transition-all hover:bg-neutral-800 hover:scale-[1.05] active:scale-95 shadow-xl flex items-center justify-center gap-1 md:gap-3 border border-white/10 text-center"
                >
                    Más información
                    <svg 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-3 md:w-4 h-3 md:h-4 transition-transform rotate-90 shrink-0"
                    >
                        <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default AdBanner;
