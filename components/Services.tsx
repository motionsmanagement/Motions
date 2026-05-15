import React from 'react';
import { ArrowUpRight } from 'lucide-react';

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
            title: "Páginas Web",
            description: "Plataformas de alto rendimiento orientadas a maximizar tus reservas directas.",
            price: "495",
            image: "/webs.jpg"
        },
        {
            title: "Branding",
            description: "Creamos la identidad visual que posiciona a tu restaurante como marca de referencia.",
            price: "99",
            image: "/Branding-motions.jpg"
        },
        {
            title: "SEO Local",
            description: "Dominamos las búsquedas locales en Maps para que siempre seas la primera opción.",
            price: "199",
            image: "/local seo.jpg"
        },
        {
            title: "Redes Sociales",
            description: "Gestionamos tu presencia digital para conectar con tu audiencia y atraer nuevos clientes.",
            price: "89",
            image: "/social media.jpg"
        }
    ];

    return (
        <section id="servicios" ref={ref} className="py-24 px-6 md:px-12 bg-white font-['Inter']">
            <div className={`max-w-7xl mx-auto transition-all duration-700 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Header Section */}
                <div className="mb-20 text-balance flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="inline-flex items-center bg-gray-50 border border-gray-200 px-4 py-1.5 rounded-full mb-6">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                            Nuestras Soluciones
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.1] mb-6">
                        Impulsa el crecimiento<br />
                        digital de tu restaurante.
                    </h2>
                    <p className="text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed">
                        Transformamos la presencia online de negocios gastronómicos, enfocándonos en atraer clientes y maximizar la rentabilidad de tu negocio.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <a
                            key={index}
                            href="#contacto"
                            className={`group relative aspect-[3/4] rounded-[2.5rem] bg-[#0A0A0A] transition-all duration-700 overflow-hidden shadow-2xl hover:-translate-y-3 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                            style={{ 
                                transitionDelay: visible ? `${index * 150}ms` : '0ms',
                                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                            }}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img 
                                    src={service.image} 
                                    alt={service.title}
                                    className="w-full h-full object-cover opacity-80 transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                                />
                                {/* Bottom-only gradient for readability */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            </div>

                            {/* Card Content */}
                            <div className="relative h-full z-10 px-8 pb-5 flex flex-col justify-end">
                                <h3 className="text-2xl font-semibold text-white mb-1 tracking-tight">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-white leading-relaxed mb-4 group-hover:text-white transition-colors duration-500">
                                    {service.description}
                                </p>

                                <div className="pt-3 flex items-end justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] text-white uppercase font-medium tracking-tighter mb-1">Desde</span>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-3xl font-medium text-white tracking-tight">{service.price}</span>
                                            <span className="text-3xl font-medium text-white tracking-tight">€</span>
                                        </div>
                                    </div>
                                    <div className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white group-hover:bg-white group-hover:text-black transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            {/* Hover inner glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
