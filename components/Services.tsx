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
                    {/* Glow layer */}
                    <div className={`absolute w-44 h-44 rounded-full bg-white/[0.08] blur-[50px] transition-all duration-1500 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} />
                    <div className={`absolute w-24 h-24 rounded-full bg-white/[0.06] blur-2xl ${isVisible ? 'animate-pulse' : ''}`} style={{ animationDuration: '3.5s' }} />

                    {/* Browser window */}
                    <div className={`relative w-[72%] flex flex-col transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                        {/* Nav bar */}
                        <div className="w-full h-7 rounded-t-2xl bg-white/[0.07] border border-white/[0.12] flex items-center px-3 gap-1.5">
                            <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-white/20" />
                                <div className="w-2 h-2 rounded-full bg-white/12" />
                                <div className="w-2 h-2 rounded-full bg-white/08" />
                            </div>
                            <div className="flex-1 mx-2 h-2 rounded-full bg-white/[0.08]" />
                        </div>

                        {/* Page body */}
                        <div className="w-full rounded-b-2xl bg-white/[0.03] border border-t-0 border-white/[0.1] px-4 py-4 space-y-3">
                            {/* Title lines */}
                            <div className="space-y-1.5">
                                <div className={`h-2 w-3/4 bg-white/25 rounded-full transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'} origin-left`} />
                                <div className={`h-1.5 w-1/2 bg-white/12 rounded-full transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'} origin-left`} />
                            </div>

                            {/* CTA pill */}
                            <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.2)] transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                <div className="w-8 h-1.5 bg-black/35 rounded-full" />
                                <MousePointer2 className="w-2 h-2 text-black/50" />
                            </div>

                            {/* Separator */}
                            <div className={`w-full h-px bg-white/[0.06] transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />

                            {/* Two content rows */}
                            <div className="space-y-1.5">
                                <div className={`h-1 w-full bg-white/[0.1] rounded-full transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
                                <div className={`h-1 w-4/5 bg-white/[0.07] rounded-full transition-all duration-700 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
                                <div className={`h-1 w-2/3 bg-white/[0.05] rounded-full transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
                            </div>
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
                    <div className={`absolute w-40 h-40 rounded-full bg-white/[0.08] blur-[50px] transition-all duration-1500 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
                    <div className={`absolute w-20 h-20 rounded-full bg-white/[0.06] blur-2xl ${isVisible ? 'animate-pulse' : ''}`} style={{ animationDuration: '3s' }} />

                    {/* Single ping ring */}
                    <div className={`absolute w-24 h-24 rounded-full border border-white/[0.1] ${isVisible ? 'animate-ping' : ''}`} style={{ animationDuration: '3.5s' }} />

                    {/* Pin */}
                    <div className={`relative flex flex-col items-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <div className={`w-12 h-12 rounded-full bg-white/10 border border-white/25 flex items-center justify-center shadow-[0_0_24px_rgba(255,255,255,0.1)] transition-all duration-700 delay-300 ${isVisible ? 'scale-100' : 'scale-75'}`}>
                            <UtensilsCrossed className="w-5 h-5 text-white/75" />
                        </div>
                        <div className="w-px h-5 bg-gradient-to-b from-white/25 to-transparent" />
                        <div className="w-1 h-0.5 rounded-full bg-white/15" />

                        {/* Stars */}
                        <div className={`flex gap-1 mt-3 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-2.5 h-2.5 transition-all duration-300 ${isVisible ? 'text-white/60 fill-white/35' : 'text-white/10 fill-transparent'}`} style={{ transitionDelay: `${600 + i * 70}ms` }} />
                            ))}
                        </div>
                        <p className={`text-[9px] font-mono text-white/35 tracking-widest mt-1 transition-all duration-700 delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>4.9 · 214 reseñas</p>
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
