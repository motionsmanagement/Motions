import React from 'react';
import { MapPin, Globe, Star, TrendingUp, ArrowRight, MessageSquare, Gauge, ShieldCheck } from 'lucide-react';

const services = [
    {
        title: "Google My Business",
        description: "Optimizamos tu ficha para que aparezcas en los primeros resultados cuando los clientes busquen dónde comer cerca.",
        icon: <MapPin className="w-6 h-6" />,
        stats: "+85% visibilidad",
        tag: "SEO Local"
    },
    {
        title: "Sitios Web para Rest.",
        description: "Diseñamos plataformas rápidas, optimizadas para móviles y enfocadas en convertir visitantes en reservas reales.",
        icon: <Globe className="w-6 h-6" />,
        stats: "Carga < 1.5s",
        tag: "Conversión"
    },
    {
        title: "Gestión de Reputación",
        description: "Analizamos y gestionamos tus reseñas para construir una imagen impecable que atraiga a nuevos comensales.",
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
                <div className="mb-20">
                    <div className="inline-flex items-center bg-[#f3f4f1] border border-gray-200/50 px-4 py-1.5 rounded-full mb-6">
                        <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Soluciones Expertas</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.1] mb-6">
                        Impulsa el crecimiento<br />
                        digital de tu restaurante.
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
                            className="group relative p-8 rounded-[2rem] border border-gray-100 bg-[#FBF9F6] hover:bg-black transition-all duration-500 cursor-default overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2"
                        >
                            {/* Content */}
                            <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
                                <div className="bg-white group-hover:bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-10 shadow-sm transition-colors duration-500 group-hover:text-white text-black">
                                    {service.icon}
                                </div>

                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 block group-hover:text-white/60">
                                    {service.tag}
                                </span>

                                <h3 className="text-xl font-medium mb-4 group-hover:text-white">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-gray-500 group-hover:text-white/70 leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                <div className="pt-6 border-t border-gray-200/50 group-hover:border-white/10 flex items-center justify-between">
                                    <span className="text-xs font-mono font-medium opacity-80">{service.stats}</span>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <ArrowRight className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative gradient mask on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
                        </div>
                    ))}
                </div>

                {/* Bottom CTA or Note */}
                <div className="mt-16 pt-16 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500">
                            Únete a más de <span className="font-bold text-black font-mono">50+</span> restaurantes <br />que confían en nuestra gestión.
                        </p>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-green-500" />
                            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Sin Comisiones</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Gauge className="w-4 h-4 text-blue-500" />
                            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Soporte 24/7</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
