import React from 'react';
import { Link } from 'react-router-dom';
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
            stats: "ALTA VELOCIDAD",
            path: "/servicios/diseno-web-restaurantes",
            image: "/motionsweb.jpg"
        },
        {
            title: "Branding",
            description: "Creamos la identidad visual que posiciona a tu restaurante como marca de referencia.",
            stats: "IDENTIDAD PREMIUM",
            path: "/servicios/branding-restaurantes",
            image: "/motions105.jpg"
        },
        {
            title: "SEO Local",
            description: "Dominamos las búsquedas locales en Maps para que siempre seas la primera opción.",
            stats: "DOMINIO LOCAL",
            path: "/servicios/seo-local",
            image: "/motions110.jpg"
        },
        {
            title: "Redes Sociales",
            description: "Gestionamos tu presencia digital para conectar con tu audiencia y atraer nuevos clientes.",
            stats: "GROWTH DIGITAL",
            path: "/servicios/redes-sociales",
            image: "/motions128.jpg"
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
                        <Link
                            key={index}
                            to={service.path}
                            className={`group relative h-[440px] rounded-[2.5rem] border border-gray-100 bg-white transition-all duration-700 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-3 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                            style={{ 
                                transitionDelay: visible ? `${index * 150}ms` : '0ms',
                                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                            }}
                        >
                            {/* Image Background */}
                            <div className="absolute top-0 left-0 w-full h-[55%] overflow-hidden">
                                <img 
                                    src={service.image} 
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                            </div>

                            {/* Card Content */}
                            <div className="relative h-full z-10 p-8 flex flex-col justify-end">
                                <h3 className="text-2xl font-semibold text-black mb-3 tracking-tight">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-gray-500 leading-relaxed mb-6 group-hover:text-gray-900 transition-colors duration-500">
                                    {service.description}
                                </p>

                                <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                                    <span className="text-[9px] font-mono font-medium text-gray-400 uppercase tracking-widest">{service.stats}</span>
                                    <div className="p-2 rounded-full bg-black text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 shadow-lg">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            {/* Hover inner glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
