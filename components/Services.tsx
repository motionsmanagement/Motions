import React from 'react';
import { ArrowRight, MapPin, Globe, Star, Palette, ShieldCheck, Zap, BarChart3, Target } from 'lucide-react';

const services = [
    {
        title: "Google My Business",
        description: "Optimizamos tu negocio para que aparezcas en los primeros resultados cuando los clientes busquen dónde comer cerca.",
        stats: "+85% visibilidad",
        tag: "SEO Local",
        Illustration: () => (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
                        {[...Array(64)].map((_, i) => (
                            <div key={i} className="border-t border-l border-white/20"></div>
                        ))}
                    </div>
                </div>
                <div className="relative w-32 h-32 border border-white/10 rounded-full flex items-center justify-center">
                    <div className="absolute inset-0 border border-white/5 rounded-full animate-ping opacity-20" style={{ animationDuration: '3s' }}></div>
                    <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center bg-white/5">
                        <MapPin className="w-8 h-8 text-white/80" />
                    </div>
                    {/* Radar Line */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent w-full h-1 origin-center animate-[spin_4s_linear_infinite]" style={{ top: '50%' }}></div>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                    <span className="text-[8px] font-mono text-white/30 tracking-widest">LOCAL_RANK_SCAN</span>
                </div>
            </div>
        )
    },
    {
        title: "Página Web",
        description: "Diseñamos plataformas rápidas, optimizadas para móviles y enfocadas en convertir visitas en reservas para tu negocio.",
        stats: "Carga < 1.5s",
        tag: "Conversión",
        Illustration: () => (
            <div className="relative w-full h-full flex items-center justify-center p-8">
                <div className="w-full h-full border border-white/10 rounded-t-2xl bg-white/5 relative overflow-hidden">
                    <div className="h-6 border-b border-white/10 flex items-center gap-1.5 px-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                    </div>
                    <div className="p-4 space-y-3">
                        <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
                        <div className="h-12 w-full bg-white/5 rounded-xl border border-white/5 flex items-center justify-center">
                            <Zap className="w-5 h-5 text-white/20 animate-pulse" />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="h-8 bg-white/5 rounded-lg"></div>
                            <div className="h-8 bg-white/20 rounded-lg animate-pulse"></div>
                        </div>
                    </div>
                    <div className="absolute top-10 right-4 p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                        <span className="text-[7px] font-mono text-white/60">CONVERSION_98%</span>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Gestión de Reputación",
        description: "Analizamos y gestionamos tus reseñas para construir una imagen impecable que atraiga a nuevos comensales a tu negocio.",
        stats: "4.9★ promedio",
        tag: "Reputación",
        Illustration: () => (
            <div className="relative w-full h-full flex items-center justify-center p-10">
                <div className="space-y-4 w-full">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className={`h-10 w-full rounded-2xl border border-white/10 bg-white/5 flex items-center px-4 gap-3 transition-all duration-700 ${i === 0 ? 'translate-x-4 opacity-100' : 'opacity-40'}`}>
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shadow-inner">
                                <Star className="w-3 h-3 text-white/60" />
                            </div>
                            <div className="space-y-1 flex-1">
                                <div className="h-1.5 w-1/2 bg-white/20 rounded-full"></div>
                                <div className="h-1 w-1/3 bg-white/10 rounded-full"></div>
                            </div>
                            {i === 0 && <ShieldCheck className="w-4 h-4 text-white/40" />}
                        </div>
                    ))}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/10 blur-[60px] rounded-full pointer-events-none opacity-20"></div>
                </div>
            </div>
        )
    },
    {
        title: "Branding",
        description: "Creamos una identidad visual impactante y profesional que diferencia a tu negocio de la competencia.",
        stats: "Diseño Premium",
        tag: "Identidad",
        Illustration: () => (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 200 200" className="w-40 h-40 opacity-40">
                    <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="1" strokeDasharray="10 5" className="animate-[spin_20s_linear_infinite]" />
                    <rect x="70" y="70" width="60" height="60" fill="none" stroke="white" strokeWidth="2" className="animate-pulse" />
                    <path d="M40 100 L160 100 M100 40 L100 160" stroke="white" strokeWidth="0.5" opacity="0.5" />
                </svg>
                <div className="absolute top-4 right-4">
                    <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">Identity_System_V1</span>
                </div>
                <Palette className="absolute w-8 h-8 text-white/10" />
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
                        <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Soluciones Expertas</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.1] mb-6">
                        Impulsa el crecimiento<br />
                        digital de tu negocio.
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
                        Especialistas en transformar la presencia online de negocios gastronómicos,
                        enfocándonos en atraer clientes y maximizar la rentabilidad.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative h-[420px] rounded-[2.5rem] border border-white/10 bg-[#0A0A0A] transition-all duration-700 cursor-default overflow-hidden shadow-2xl hover:-translate-y-2"
                        >
                            {/* Technical Illustration with fade-out */}
                            <div className="absolute top-0 left-0 w-full h-[60%] pointer-events-none transition-transform duration-1000 group-hover:scale-105">
                                <service.Illustration />
                                {/* Bottom Fade for legibility */}
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
                                {/* Top and side vignettes */}
                                <div className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-30"></div>
                            </div>

                            {/* Card Content */}
                            <div className="relative h-full z-10 p-8 flex flex-col justify-end">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-3 block">
                                    {service.tag}
                                </span>

                                <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">
                                    {service.title}
                                </h3>

                                <p className="text-[13.5px] text-white/40 leading-relaxed mb-8 line-clamp-3 group-hover:text-white/60 transition-colors">
                                    {service.description}
                                </p>

                                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-[10px] font-mono font-medium text-white/20 uppercase tracking-widest">{service.stats}</span>
                                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white hover:text-black">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            {/* Subtle inner hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .bg-radial-vignette {
                    background: radial-gradient(circle at center, transparent 0%, rgba(10,10,10,0.4) 100%);
                }
            `}} />
        </section>
    );
};

export default Services;
