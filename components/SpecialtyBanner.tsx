import React from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

const SpecialtyBanner: React.FC = () => {
    const [visible, setVisible] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="especialidad" ref={ref} className="relative overflow-hidden w-full font-['Inter']">
            {/* Main Wrapper with Aspect Ratio to keep content visible */}
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[25/9] min-h-[500px] md:min-h-[450px] lg:min-h-[500px]">
                {/* Background Images - Mobile/Desktop Swap */}
                <div className="absolute inset-0 z-0">
                    {/* Desktop Image */}
                    <img
                        src="/adbannermotionswebsite.jpg"
                        alt="Nuestra especialidad desktop"
                        className="hidden md:block w-full h-full object-cover"
                        loading="lazy"
                    />
                    {/* Mobile Image */}
                    <img
                        src="/adbannermobilemotions.jpg"
                        alt="Nuestra especialidad móvil"
                        className="block md:hidden w-full h-full object-cover"
                        loading="lazy"
                    />
                    {/* Subtle Overlay to ensure button readability if needed */}
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* Content Overlay - Centered or Positioned based on design */}
                <div className={`relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center md:items-start text-center md:text-left transition-all duration-1000 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    
                    {/* Text content - Hidden if already part of the JPG, but I'll add buttons as requested */}
                    <div className="mt-[20%] md:mt-0 flex flex-col md:flex-row gap-4 w-full md:w-auto">
                        <a 
                            href="#contacto"
                            className="group relative overflow-hidden bg-black text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 shadow-2xl"
                        >
                            <span>Comenzar ahora</span>
                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/40 transition-colors">
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </a>
                        
                        <a 
                            href="#proyectos"
                            className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base transition-all hover:bg-white/30 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-xl"
                        >
                            <span>Nuestros Proyectos</span>
                            <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialtyBanner;
