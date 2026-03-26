import React from 'react';
import { Palette, Cpu, UtensilsCrossed, Star, MousePointer2, CheckCircle2, TrendingUp, Globe } from 'lucide-react';

const Services: React.FC = () => {
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

    const services = [
        {
            title: "Página Web",
            description: "Diseñamos y desarrollamos sitios web de alto rendimiento para restaurantes que convierten visitas en reservas reales.",
            stats: "ALTA CONVERSIÓN",
            tag: "DISEÑO WEB",
            Illustration: ({ isVisible }: { isVisible: boolean }) => (
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    {/* Deep glow core */}
                    <div className={`absolute w-56 h-56 rounded-full bg-white/[0.06] blur-[60px] transition-all duration-2000 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} />
                    <div className={`absolute w-32 h-32 rounded-full bg-white/[0.08] blur-3xl ${isVisible ? 'animate-pulse' : ''}`} style={{ animationDuration: '3s' }} />

                    <div className={`relative w-[88%] flex flex-col transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        {/* Browser top bar */}
                        <div className="w-full h-6 rounded-t-2xl bg-white/[0.06] border border-white/[0.12] flex items-center px-3 gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-white/25" />
                            <div className="w-2 h-2 rounded-full bg-white/15" />
                            <div className="w-2 h-2 rounded-full bg-white/10" />
                            <div className="flex-1 mx-2 h-2.5 rounded-full bg-white/[0.07] flex items-center px-1.5">
                                <Globe className="w-1.5 h-1.5 text-white/30" />
                            </div>
                        </div>

                        {/* Screen */}
                        <div className={`w-full rounded-b-2xl bg-white/[0.025] border border-t-0 border-white/[0.1] p-3.5 space-y-2.5 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            {/* Hero image area */}
                            <div className="w-full h-14 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-between px-3 overflow-hidden relative">
                                <div className={`absolute inset-0 bg-gradient-to-r from-white/[0.02] to-white/[0.07] ${isVisible ? 'animate-[shimmer_3s_ease-in-out_infinite]' : ''}`} />
                                <div className="space-y-1 relative z-10">
                                    <div className="h-1.5 w-16 bg-white/35 rounded-full" />
                                    <div className="h-1 w-10 bg-white/20 rounded-full" />
                                </div>
                                <div className={`px-3 py-1.5 bg-white rounded-full flex items-center gap-1 shadow-lg relative z-10 transition-all duration-700 delay-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                                    <div className="w-7 h-1.5 bg-black/40 rounded-full" />
                                    <MousePointer2 className="w-2 h-2 text-black/60" />
                                </div>
                            </div>

                            {/* Content cards */}
                            <div className="grid grid-cols-3 gap-2">
                                {[0.8, 0.5, 0.65].map((w, i) => (
                                    <div key={i} className={`h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] p-2 space-y-1 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: `${300 + i * 100}ms` }}>
                                        <div className="h-1 rounded-full bg-white/25" style={{ width: `${w * 100}%` }} />
                                        <div className="h-1 w-2/3 rounded-full bg-white/[0.12]" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating KPI badge */}
                        <div className={`absolute -bottom-3 -right-2 bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-xl px-2.5 py-2 flex items-center gap-2 shadow-2xl transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                            <TrendingUp className={`w-3 h-3 text-white/80 ${isVisible ? 'animate-pulse' : ''}`} style={{ animationDuration: '2s' }} />
                            <span className="text-[9px] font-bold text-white/90 tracking-wide">+24% reservas</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Branding",
            description: "Creamos una identidad visual impactante y profesional que diferencia a tu negocio de la competencia de forma única.",
            stats: "IDENTIDAD PREMIUM",
            tag: "DISEÑO",
            Illustration: ({ isVisible }: { isVisible: boolean }) => (
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <div className={`absolute w-40 h-40 rounded-full bg-white/10 blur-3xl ${isVisible ? 'animate-pulse' : ''}`} style={{ animationDuration: '3s' }} />
                    <div className={`w-48 h-48 border-[0.5px] border-white/20 rounded-full absolute transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
                    <div className={`w-32 h-32 border-[0.5px] border-white/20 rotate-45 absolute transition-all duration-1000 delay-200 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
                    <div className={`relative w-24 h-24 border border-white/40 flex items-center justify-center transition-all duration-1000 delay-400 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
                        <div className="absolute inset-0 bg-white/5 blur-md" />
                        <div className="absolute -top-1 -left-1 w-2 h-2 border border-white/60 bg-[#0A0A0A]" />
                        <div className="absolute -top-1 -right-1 w-2 h-2 border border-white/60 bg-[#0A0A0A]" />
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 border border-white/60 bg-[#0A0A0A]" />
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 border border-white/60 bg-[#0A0A0A]" />
                        <Palette className={`w-8 h-8 transition-all duration-1000 ${isVisible ? 'text-white/80' : 'text-white/20'}`} style={{ filter: isVisible ? 'drop-shadow(0 0 8px rgba(255,255,255,0.5))' : 'none' }} />
                    </div>
                    <div className={`w-full h-[0.5px] bg-white/15 absolute transition-all duration-1000 delay-600 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} />
                    <div className={`w-[0.5px] h-full bg-white/15 absolute transition-all duration-1000 delay-600 ${isVisible ? 'scale-y-100' : 'scale-y-0'}`} />
                    <div className={`absolute top-1/4 right-8 font-mono text-[6px] text-white/40 tracking-widest uppercase transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>Proportion: 1.618</div>
                </div>
            )
        },
        {
            title: "Integración con IA",
            description: "Implementamos sistemas de inteligencia artificial para automatizar procesos y personalizar la experiencia de tus clientes.",
            stats: "IA INTEGRADA",
            tag: "AUTOMATIZACIÓN",
            Illustration: ({ isVisible }: { isVisible: boolean }) => (
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <div className="flex gap-4">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex flex-col gap-4">
                                {[...Array(3)].map((__, j) => (
                                    <div key={j} className={`w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} ${(i === 1 && j === 1) ? 'scale-125 border-white/30 bg-white/5' : 'opacity-30'}`}>
                                        {i === 1 && j === 1 ? (
                                            <Cpu className={`w-5 h-5 text-white ${isVisible ? 'animate-pulse' : ''}`} />
                                        ) : (
                                            <div className="w-1 h-1 rounded-full bg-white/40" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <svg className="absolute inset-0 w-full h-full" pointerEvents="none">
                        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.05" />
                        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.05" />
                    </svg>
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 blur-[50px] rounded-full ${isVisible ? 'animate-pulse' : ''}`} />
                </div>
            )
        },
        {
            title: "Google My Business",
            description: "Optimizamos tu ficha de Google para que aparezcas primero cuando alguien cerca busca dónde comer.",
            stats: "VISIBILIDAD LOCAL",
            tag: "SEO LOCAL",
            Illustration: ({ isVisible }: { isVisible: boolean }) => (
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    {/* Radial glow */}
                    <div className={`absolute w-52 h-52 rounded-full bg-white/[0.05] blur-[55px] transition-all duration-2000 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
                    <div className={`absolute w-28 h-28 rounded-full bg-white/[0.07] blur-2xl ${isVisible ? 'animate-pulse' : ''}`} style={{ animationDuration: '4s' }} />

                    {/* Map pin element */}
                    <div className={`relative w-[80%] flex flex-col items-center gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        {/* Search bar */}
                        <div className={`w-full h-8 rounded-full bg-white/[0.06] border border-white/[0.12] flex items-center px-3 gap-2 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="w-3 h-3 rounded-full border border-white/30 flex-shrink-0" />
                            <div className="h-1.5 flex-1 rounded-full bg-white/15" />
                            <div className="w-5 h-5 rounded-full bg-white/10 flex-shrink-0" />
                        </div>

                        {/* Business card */}
                        <div className={`w-full rounded-2xl bg-white/[0.04] border border-white/[0.1] overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                            {/* Top map strip */}
                            <div className="w-full h-9 bg-white/[0.03] border-b border-white/[0.06] relative overflow-hidden flex items-center justify-center">
                                <svg className="absolute inset-0 w-full h-full" opacity="0.08">
                                    <line x1="20%" y1="0" x2="20%" y2="100%" stroke="white" strokeWidth="0.5" />
                                    <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="0.5" />
                                    <line x1="80%" y1="0" x2="80%" y2="100%" stroke="white" strokeWidth="0.5" />
                                    <line x1="0" y1="40%" x2="100%" y2="40%" stroke="white" strokeWidth="0.5" />
                                    <line x1="0" y1="70%" x2="100%" y2="70%" stroke="white" strokeWidth="0.5" />
                                </svg>
                                {/* Pin */}
                                <div className={`relative flex flex-col items-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                                    <div className={`w-5 h-5 rounded-full bg-white/90 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.4)] ${isVisible ? 'animate-bounce' : ''}`} style={{ animationDuration: '2.5s' }}>
                                        <UtensilsCrossed className="w-2.5 h-2.5 text-black" />
                                    </div>
                                    <div className="w-0.5 h-2 bg-white/50 mt-0.5" />
                                </div>
                            </div>

                            {/* Business info */}
                            <div className="p-3 space-y-2.5">
                                <div className="space-y-1">
                                    <div className="h-1.5 w-24 bg-white/30 rounded-full" />
                                    <div className="flex items-center gap-1.5">
                                        <div className="flex gap-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className={`w-2 h-2 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${600 + i * 60}ms` }}>
                                                    <Star className="w-full h-full text-white/60 fill-white/30" />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="h-1 w-6 bg-white/20 rounded-full" />
                                    </div>
                                </div>
                                <div className="flex gap-1.5">
                                    <div className={`flex-1 h-6 rounded-lg bg-white/90 flex items-center justify-center transition-all duration-500 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                                        <div className="h-1 w-10 bg-black/40 rounded-full" />
                                    </div>
                                    <div className={`flex-1 h-6 rounded-lg bg-white/[0.08] border border-white/[0.12] flex items-center justify-center transition-all duration-500 delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                                        <div className="h-1 w-8 bg-white/30 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Top badge */}
                        <div className={`absolute -top-2 -right-1 bg-white/10 backdrop-blur-xl border border-white/25 rounded-xl px-2.5 py-1.5 flex items-center gap-1.5 shadow-2xl transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                            <div className={`w-1.5 h-1.5 rounded-full bg-white ${isVisible ? 'animate-pulse' : ''}`} style={{ animationDuration: '1.5s' }} />
                            <span className="text-[9px] font-bold text-white/90 tracking-wide">#1 en Maps</span>
                        </div>
                    </div>
                </div>
            )
        },

    ];

    return (
        <section id="servicios" ref={ref} className="py-20 md:py-24 px-5 md:px-12 bg-white font-['Inter']">
            <div className={`max-w-7xl mx-auto transition-all duration-700 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Header Section */}
                <div className="mb-14 md:mb-20 text-balance flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="inline-flex items-center bg-[#f3f4f1] border border-gray-200/50 px-4 py-1.5 rounded-full mb-5 md:mb-6">
                        <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Servicios Especializados</span>
                    </div>
                    <h2 className="text-[2rem] sm:text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.1] mb-4 md:mb-6">
                        Impulsa el crecimiento<br />
                        digital de tu restaurante.
                    </h2>
                    <p className="text-sm md:text-lg text-gray-500 max-w-xl md:max-w-2xl leading-relaxed">
                        Especialistas en transformar la presencia online de negocios gastronómicos, enfocándonos en atraer clientes y maximizar la rentabilidad.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative h-[400px] md:h-[440px] rounded-[2rem] md:rounded-[2.5rem] border border-white/10 bg-[#0A0A0A] transition-all duration-700 cursor-default overflow-hidden shadow-2xl hover:-translate-y-2"
                        >
                            {/* Technical Visualization */}
                            <div className="absolute top-0 left-0 w-full h-[55%] pointer-events-none transition-transform duration-1000 group-hover:scale-105">
                                <service.Illustration isVisible={visible} />
                                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent" />
                            </div>

                            {/* Card Content */}
                            <div className="relative h-full z-10 p-6 md:p-8 flex flex-col justify-end">
                                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/70 mb-2.5 block">
                                    {service.tag}
                                </span>
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-[13px] md:text-[13.5px] text-white/70 leading-relaxed mb-6 md:mb-8 group-hover:text-white/90 transition-colors">
                                    {service.description}
                                </p>
                                <div className="pt-4 md:pt-6 border-t border-white/5">
                                    <span className="text-[9px] font-mono font-medium text-white/50 uppercase tracking-widest">{service.stats}</span>
                                </div>
                            </div>

                            {/* Hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes shimmer {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.7; }
                }
                .bg-radial-vignette {
                    background: radial-gradient(circle at center, transparent 0%, rgba(10,10,10,0.5) 100%);
                }
            `}} />
        </section>
    );
};

export default Services;
