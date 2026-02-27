import React from 'react';
import { ArrowRight, MapPin, Globe, Palette, Cpu, Zap, Activity, ShieldCheck, Sparkles, UtensilsCrossed, Clock, Star, MousePointer2, CheckCircle2 } from 'lucide-react';

const services = [
    {
        title: "Google My Business",
        description: "Optimizamos tu presencia local para que tu negocio sea la primera opción cuando los clientes busquen dónde comer.",
        stats: "RANKING TOP 3",
        tag: "SEO LOCAL",
        Illustration: () => (
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-44 h-44 flex items-center justify-center">
                    {/* Architectural Map Grid */}
                    <div className="absolute inset-0 opacity-10">
                        <svg width="100%" height="100%" viewBox="0 0 100 100">
                            <path d="M0 20 H100 M0 50 H100 M0 80 H100 M20 0 V100 M50 0 V100 M80 0 V100" stroke="white" strokeWidth="0.5" fill="none" />
                        </svg>
                    </div>

                    {/* Specialized Restaurant Pin */}
                    <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                        <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full animate-pulse"></div>
                        <div className="relative w-full h-full bg-white/5 border border-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md shadow-2xl">
                            <div className="flex flex-col items-center gap-1">
                                <UtensilsCrossed className="w-5 h-5 text-white/90" />
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-1 h-1 text-white/40 fill-white/20" />)}
                                </div>
                            </div>
                        </div>
                        {/* Floating "Local Expert" badge */}
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                            <CheckCircle2 className="w-2.5 h-2.5 text-black" />
                        </div>
                    </div>

                    {/* Proximity rings */}
                    <div className="absolute inset-0 border border-white/5 rounded-full scale-75"></div>
                    <div className="absolute inset-0 border border-white/[0.03] rounded-full scale-110 animate-ping" style={{ animationDuration: '4s' }}></div>
                </div>
                <div className="absolute bottom-6 left-8 flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-white/30" />
                    <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.4em]">Visibilidad_Gastronómica</span>
                </div>
            </div>
        )
    },
    {
        title: "Página Web",
        description: "Desarrollamos plataformas de alto rendimiento diseñadas para convertir usuarios en ventas directas para tu negocio.",
        stats: "ALTA VELOCIDAD",
        tag: "NÚCLEO WEB",
        Illustration: () => (
            <div className="relative w-full h-full flex items-center justify-center p-12">
                <div className="w-full h-full border border-white/10 rounded-2xl bg-[#0A0A0A] relative overflow-hidden flex flex-col shadow-2xl">
                    {/* Website Header Mockup */}
                    <div className="h-8 border-b border-white/5 flex items-center justify-between px-4 bg-white/[0.02]">
                        <div className="w-12 h-1.5 bg-white/20 rounded-full"></div>
                        <div className="flex gap-2">
                            <div className="w-4 h-1.5 bg-white/10 rounded-full"></div>
                            <div className="w-4 h-1.5 bg-white/10 rounded-full"></div>
                        </div>
                    </div>

                    {/* Hero Section Mockup */}
                    <div className="flex-1 p-5 flex flex-col gap-4">
                        <div className="space-y-2">
                            <div className="h-3 w-3/4 bg-white/20 rounded-full"></div>
                            <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                        </div>

                        {/* Interactive Reservation Card */}
                        <div className="mt-2 p-3 rounded-xl border border-white/10 bg-white/5 flex items-center justify-between">
                            <div className="flex flex-col gap-1">
                                <span className="text-[7px] text-white/40 uppercase font-bold tracking-tighter">Reservar Mesa</span>
                                <div className="flex gap-1">
                                    <Clock className="w-2 h-2 text-white/30" />
                                    <div className="w-8 h-1 bg-white/20 rounded-full mt-0.5"></div>
                                </div>
                            </div>
                            <div className="px-3 py-1.5 bg-white rounded-lg flex items-center justify-center scale-90 transition-transform">
                                <MousePointer2 className="w-2.5 h-2.5 text-black" />
                            </div>
                        </div>

                        {/* Visual menu elements */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center">
                                <div className="w-6 h-6 rounded-full border border-white/10 border-dashed animate-[spin_10s_linear_infinite]"></div>
                            </div>
                            <div className="h-12 rounded-xl bg-white/[0.03] border border-white/5 p-2 space-y-1.5">
                                <div className="h-1 w-full bg-white/10 rounded-full"></div>
                                <div className="h-1 w-2/3 bg-white/10 rounded-full"></div>
                                <div className="h-1 w-full bg-white/10 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* floating tag */}
                <div className="absolute top-10 right-14 bg-white/10 backdrop-blur-md px-2 py-1 rounded-md border border-white/20">
                    <span className="text-[6px] font-mono text-white/60">UX_RESTAURANTE_V2</span>
                </div>
            </div>
        )
    },
    {
        title: "Integración con IA",
        description: "Implementamos sistemas de inteligencia artificial para automatizar procesos y personalizar la experiencia de tus clientes.",
        stats: "IA INTEGRADA",
        tag: "AUTOMATIZACIÓN",
        Illustration: () => (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <div className="flex gap-4">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex flex-col gap-4">
                            {[...Array(3)].map((__, j) => (
                                <div key={j} className={`w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center transition-all duration-700 ${i === 1 && j === 1 ? 'scale-125 border-white/30 bg-white/5' : 'opacity-30'}`}>
                                    {i === 1 && j === 1 ? (
                                        <Cpu className="w-5 h-5 text-white animate-pulse" />
                                    ) : (
                                        <div className="w-1 h-1 rounded-full bg-white/40"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                {/* Connection lines (Subtle) */}
                <svg className="absolute inset-0 w-full h-full" pointerEvents="none">
                    <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.05" />
                    <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.05" />
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 blur-[50px] rounded-full animate-pulse"></div>
            </div>
        )
    },
    {
        title: "Branding",
        description: "Creamos una identidad visual impactante y profesional que diferencia a tu negocio de la competencia de forma única.",
        stats: "IDENTIDAD PREMIUM",
        tag: "DISEÑO",
        Illustration: () => (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <div className="w-48 h-48 border-[0.5px] border-white/10 rounded-full absolute"></div>
                <div className="w-32 h-32 border-[0.5px] border-white/10 rotate-45 absolute"></div>
                <div className="relative w-24 h-24 border border-white/20 flex items-center justify-center">
                    <div className="absolute -top-1 -left-1 w-2 h-2 border border-white/40 bg-[#0A0A0A]"></div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 border border-white/40 bg-[#0A0A0A]"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 border border-white/40 bg-[#0A0A0A]"></div>
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 border border-white/40 bg-[#0A0A0A]"></div>
                    <Palette className="w-8 h-8 text-white/30" />
                </div>
                {/* Horizontal & Vertical Guides */}
                <div className="w-full h-[0.5px] bg-white/10 absolute"></div>
                <div className="w-[0.5px] h-full bg-white/10 absolute"></div>
                {/* Measurements Labels */}
                <div className="absolute top-1/4 right-8 font-mono text-[6px] text-white/20 tracking-widest uppercase">Proportion: 1.618</div>
            </div>
        )
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 px-6 md:px-12 bg-white font-['Inter']">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-20 text-balance">
                    <div className="inline-flex items-center bg-[#f3f4f1] border border-gray-200/50 px-4 py-1.5 rounded-full mb-6">
                        <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Servicios Especializados</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.1] mb-6">
                        Impulsa el crecimiento<br />
                        digital de tu restaurante.
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
                        Especialistas en transformar la presencia online de negocios gastronómicos, enfocándonos en atraer clientes y maximizar la rentabilidad.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative h-[440px] rounded-[2.5rem] border border-white/10 bg-[#0A0A0A] transition-all duration-700 cursor-default overflow-hidden shadow-2xl hover:-translate-y-2"
                        >
                            {/* Technical Visualization with fade-out */}
                            <div className="absolute top-0 left-0 w-full h-[55%] pointer-events-none transition-transform duration-1000 group-hover:scale-105">
                                <service.Illustration />
                                {/* Bottom Fade for legibility */}
                                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent"></div>
                                <div className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-30"></div>
                            </div>

                            {/* Card Content */}
                            <div className="relative h-full z-10 p-8 flex flex-col justify-end">
                                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 mb-3 block">
                                    {service.tag}
                                </span>

                                <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">
                                    {service.title}
                                </h3>

                                <p className="text-[13.5px] text-white/40 leading-relaxed mb-8 group-hover:text-white/60 transition-colors">
                                    {service.description}
                                </p>

                                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-[9px] font-mono font-medium text-white/20 uppercase tracking-widest">{service.stats}</span>
                                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white hover:text-black">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            {/* Subtle inner hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .bg-radial-vignette {
                    background: radial-gradient(circle at center, transparent 0%, rgba(10,10,10,0.5) 100%);
                }
                @keyframes loading-bar {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-loading-bar { animation: loading-bar 2s linear infinite; }
            `}} />
        </section>
    );
};

export default Services;
