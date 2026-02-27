import React from 'react';
import { MapPin, Globe, Star, TrendingUp, ArrowRight } from 'lucide-react';

const services = [
    {
        title: "Google My Business",
        description: "Optimizamos tu negocio para que aparezcas en los primeros resultados cuando los clientes busquen dónde comer cerca.",
        icon: <MapPin className="w-6 h-6" />,
        stats: "+85% visibilidad",
        tag: "SEO Local"
    },
    {
        title: "Sitios Web para Rest.",
        description: "Diseñamos plataformas rápidas, optimizadas para móviles y enfocadas en convertir visitas en reservas para tu negocio.",
        icon: <Globe className="w-6 h-6" />,
        stats: "Carga < 1.5s",
        tag: "Conversión"
    },
    {
        title: "Gestión de Reputación",
        description: "Analizamos y gestionamos tus reseñas para construir una imagen impecable que atraiga a nuevos comensales a tu negocio.",
        icon: <Star className="w-6 h-6" />,
        stats: "4.9★ promedio",
        tag: "Reputación"
    },
    {
        title: "Publicidad en Maps",
        description: "Campañas de Google Ads ultra-localizadas para captar tráfico inmediato y superar a tu competencia directa.",
        icon: <TrendingUp className="w-6 h-6" />,
        stats: "ROI medible",
        tag: "Ads"
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 px-6 md:px-12 bg-white font-['Inter']">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
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
                            className="group relative p-8 rounded-[2rem] border border-white/10 bg-[#0A0A0A] transition-all duration-500 cursor-default overflow-hidden shadow-2xl hover:-translate-y-2"
                        >
                            {/* Content */}
                            <div className="relative z-10 text-white">
                                <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-10 border border-white/10 transition-colors duration-500 group-hover:bg-white/20">
                                    {service.icon}
                                </div>

                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4 block">
                                    {service.tag}
                                </span>

                                <h3 className="text-xl font-medium mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-white/50 leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                                    <span className="text-xs font-mono font-medium opacity-80">{service.stats}</span>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <ArrowRight className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Subtle Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
