import React from 'react';
import { ArrowRight, MapPin, Globe, Palette, Cpu, Zap, Activity, ShieldCheck, Sparkles } from 'lucide-react';

const services = [
    {
        title: "Google My Business",
        description: "Optimizamos tu presencia local para que tu negocio sea la primera opción cuando los clientes busquen dónde comer.",
        stats: "TOP 3 RANKING",
        tag: "SEO LOCAL",
        Illustration: () => (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                {/* Advanced Coordinate Grid */}
                <div className="absolute inset-0 opacity-[0.1]">
                    <div className="w-full h-full" style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                </div>
                {/* Mapping Nodes Section */}
                <div className="relative w-44 h-44">
                    <svg className="absolute inset-0 w-full h-full">
                        <circle cx="50%" cy="50%" r="70" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="1 10" opacity="0.2" className="animate-[spin_60s_linear_infinite]" />
                        <circle cx="50%" cy="50%" r="40" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" opacity="0.1" />
                        {/* Dynamic connection lines */}
                        <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="white" strokeWidth="0.5" opacity="0.1" className="animate-pulse" />
                        <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="white" strokeWidth="0.5" opacity="0.1" style={{ animationDelay: '1s' }} className="animate-pulse" />
                    </svg>
                    {/* Floating Data Points */}
                    <div className="absolute top-4 left-10 w-1.5 h-1.5 bg-white/40 rounded-full animate-ping"></div>
                    <div className="absolute bottom-10 right-8 w-1 h-1 bg-white/20 rounded-full"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative z-10">
                            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full"></div>
                            <div className="relative w-14 h-14 bg-white/[0.03] border border-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>
                    {/* Circular Progress Rings */}
                    <div className="absolute inset-2 border border-white/5 rounded-full animate-[spin_10s_linear_infinite] border-t-white/20"></div>
                </div>
                <div className="absolute top-6 right-6 flex items-center gap-2">
                    <span className="text-[7px] font-mono text-white/20 tracking-[0.4em]">LOC_DATA_720</span>
                </div>
                <div className="absolute bottom-4 left-6 border-l border-white/20 pl-3">
                    <div className="text-[7px] font-mono text-white/20 uppercase tracking-widest leading-none mb-1">Status</div>
                    <div className="text-[9px] font-mono text-white/60 uppercase">Indexed_Active</div>
                </div>
            </div>
        )
    },
    {
        title: "Página Web",
        description: "Desarrollamos plataformas de alto rendimiento diseñadas para convertir usuarios en ventas directas para tu negocio.",
        stats: "ULTRA FAST",
        tag: "WEB CORE",
        Illustration: () => (
            <div className="relative w-full h-full flex items-center justify-center p-10">
                <div className="w-full h-full border border-white/10 rounded-2xl bg-white/[0.02] relative overflow-hidden flex flex-col">
                    {/* Pro Browser Window */}
                    <div className="h-7 border-b border-white/10 flex items-center justify-between px-3 bg-white/[0.02]">
                        <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                        </div>
                        <div className="flex gap-4">
                            <div className="h-1 w-6 bg-white/5 rounded-full"></div>
                            <div className="h-1 w-6 bg-white/5 rounded-full"></div>
                        </div>
                    </div>
                    {/* Internal Interface */}
                    <div className="flex-1 p-5 flex gap-4">
                        <div className="w-16 h-full flex flex-col gap-2">
                            <div className="h-1.5 w-full bg-white/10 rounded-full"></div>
                            <div className="h-1.5 w-2/3 bg-white/5 rounded-full"></div>
                            <div className="mt-4 h-12 w-full border border-white/10 rounded-lg bg-white/[0.03] flex items-center justify-center">
                                <div className="w-4 h-4 border-2 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
                            </div>
                        </div>
                        <div className="flex-1 space-y-3">
                            <div className="h-20 w-full border border-white/5 bg-white/[0.01] rounded-xl relative overflow-hidden p-3">
                                <div className="absolute top-0 right-0 p-2 text-[6px] font-mono text-white/20 uppercase">Core_Metrics</div>
                                <div className="mt-auto h-0.5 w-full bg-white/5 relative">
                                    <div className="absolute left-0 h-full w-[85%] bg-white/20 animate-loading-bar"></div>
                                </div>
                                <div className="flex justify-between mt-3">
                                    <div className="w-6 h-6 rounded-lg bg-white/5"></div>
                                    <div className="w-6 h-6 rounded-lg bg-white/5"></div>
                                    <div className="w-6 h-6 rounded-lg bg-white/20 animate-pulse"></div>
                                </div>
                            </div>
                            <div className="h-6 w-full flex items-center justify-between px-1">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => <div key={i} className="w-1 h-3 bg-white/10 rounded-full"></div>)}
                                </div>
                                <Activity className="w-3 h-3 text-white/20" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Floating Meta Data */}
                <div className="absolute bottom-6 right-6 px-2 py-1 bg-[#0A0A0A] border border-white/10 rounded text-[7px] font-mono text-white/40 uppercase tracking-tighter">
                    Speed_Index: 1.2s
                </div>
            </div>
        )
    },
    {
        title: "Integración con IA",
        description: "Implementamos sistemas de inteligencia artificial para automatizar procesos y personalizar la experiencia de tus clientes.",
        stats: "AI DRIVEN",
        tag: "AUTOMATION",
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
                <div className="absolute top-4 left-4">
                    <Sparkles className="w-4 h-4 text-white/20 animate-spin-slow" />
                </div>
            </div>
        )
    },
    {
        title: "Branding",
        description: "Creamos una identidad visual impactante y profesional que diferencia a tu negocio de la competencia de forma única.",
        stats: "PREMIUM IDENTITY",
        tag: "DESIGN",
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
                <div className="absolute top-1/4 right-8 font-mono text-[6px] text-white/20 tracking-widest uppercase">Ratio: 1.618</div>
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
                        Soluciones Digitales para<br />
                        Impulsar tu Negocio.
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
                        Transformamos la presencia online de tu negocio con tecnología de vanguardia y diseño de alto nivel.
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
                .animate-spin-slow { animation: spin 10s linear infinite; }
            `}} />
        </section>
    );
};

export default Services;
