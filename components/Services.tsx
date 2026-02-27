import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
    {
        title: "Google My Business",
        description: "Optimizamos tu negocio para que aparezcas en los primeros resultados cuando los clientes busquen dónde comer cerca.",
        image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=800",
        stats: "+85% visibilidad",
        tag: "SEO Local"
    },
    {
        title: "Página Web",
        description: "Diseñamos plataformas rápidas, optimizadas para móviles y enfocadas en convertir visitas en reservas para tu negocio.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        stats: "Carga < 1.5s",
        tag: "Conversión"
    },
    {
        title: "Gestión de Reputación",
        description: "Analizamos y gestionamos tus reseñas para construir una imagen impecable que atraiga a nuevos comensales a tu negocio.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=800",
        stats: "4.9★ promedio",
        tag: "Reputación"
    },
    {
        title: "Branding",
        description: "Creamos una identidad visual impactante y profesional que diferencia a tu negocio de la competencia.",
        image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800",
        stats: "Diseño Premium",
        tag: "Identidad"
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
                            {/* Background Image with subtle fade-out */}
                            <div className="absolute top-0 left-0 w-full h-[60%] overflow-hidden pointer-events-none transition-transform duration-1000 group-hover:scale-110">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover opacity-60 grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700"
                                />
                                {/* Soft Fade mask to Black */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#0A0A0A]/80 to-[#0A0A0A] transition-colors duration-700" />
                            </div>

                            {/* Card Content (Lowered to focus on text over dark background) */}
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
        </section>
    );
};

export default Services;
