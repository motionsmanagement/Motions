import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, CheckCircle2, TrendingUp, ChevronRight, MessageSquare, Activity, Users, Target, MousePointer2, Smartphone, BarChart3, Star, MapPin, Search, ChevronLeft } from 'lucide-react';

interface SuccessMetric {
    label: string;
    value: string;
    icon: React.ElementType;
}

interface SuccessCase {
    id: string;
    category: string;
    title: string;
    year: string;
    location: string;
    images: string[];
    description: string;
    metrics: SuccessMetric[];
    graphicType: 'performance' | 'visibility' | 'conversion' | 'reputation' | 'brand' | 'reach';
    services: string[];
    outcome: string;
}

const Gem = ({ size, strokeWidth, color }: any) => (
  <Activity size={size} strokeWidth={strokeWidth} color={color} />
);

const successCases: SuccessCase[] = [
    {
        id: '01',
        category: 'Branding',
        title: 'Burger Cartel',
        year: '2025',
        location: 'Madrid, España',
        images: [
            '/Proyectos/burger cartel/motionsbc1.jpg',
            '/Proyectos/burger cartel/bcmotions.jpg',
            '/Proyectos/burger cartel/motionsbc (2).jpg',
            '/Proyectos/burger cartel/motionsbc3.jpg'
        ],
        description: 'Renovación integral de la identidad visual para destacar en el competitivo mercado de las smash burgers. Desarrollamos desde el Naming hasta el diseño estratégico del menú, papelería y soportes físicos, logrando una imagen de marca potente y coherente.',
        graphicType: 'brand',
        metrics: [
            { label: 'Reconocimiento', value: '+35%', icon: Target },
            { label: 'Ventas', value: '+22%', icon: TrendingUp },
            { label: 'Feedback', value: '10/10', icon: MessageSquare }
        ],
        services: ['Naming', 'Logo Design', 'Visual Identity', 'Menu Design'],
        outcome: 'Identidad visual impactante que ha posicionado a la marca como referente en redes sociales.'
    },
    {
        id: '02',
        category: 'Branding',
        title: 'Lagotto',
        year: '2025',
        location: 'Marbella, España',
        images: [
            '/Proyectos/Lagotto/motionsl1.jpg',
            '/Proyectos/Lagotto/motionsl.jpg',
            '/Proyectos/Lagotto/motionsl2.jpg',
            '/Proyectos/Lagotto/motionsl3.jpg',
            '/Proyectos/Lagotto/motionsl4.jpg',
            '/Proyectos/Lagotto/motionsl5.jpg',
            '/Proyectos/Lagotto/motionsl7.jpg'
        ],
        description: 'Llevamos la sofisticación de Lagotto a cada punto de contacto con el cliente: desde el diseño editorial de sus cartas hasta la identidad visual en merchandising y etiquetas de vino premium. Una experiencia de marca 360º diseñada para el comensal más exigente.',
        graphicType: 'reputation',
        metrics: [
            { label: 'Engagement', value: '+45%', icon: Users },
            { label: 'Visitas', value: '+18%', icon: MousePointer2 },
            { label: 'Ticket Medio', value: '+12%', icon: TrendingUp }
        ],
        services: ['Branding 360', 'Diseño Merch', 'Carta de Vinos', 'Social Media Design'],
        outcome: 'Ecosistema visual premium que refuerza el posicionamiento de lujo del restaurante.'
    },
    {
        id: '03',
        category: 'Google Maps',
        title: 'Kizuna',
        year: '2025',
        location: 'Barcelona, España',
        images: [
            '/Proyectos/Kizuna/motionsk1.jpg',
            '/Proyectos/Kizuna/motionsk.jpg',
            '/Proyectos/Kizuna/motionsk2.jpg',
            '/Proyectos/Kizuna/motionsk3.jpg'
        ],
        description: 'Diseño de una identidad visual inspirada en la tradición japonesa con un toque contemporáneo. Implementamos un sistema de diseño gráfico integral que abarca la carta del restaurante, señalética y elementos corporativos, enfocándonos en la elegancia y la legibilidad.',
        graphicType: 'visibility',
        metrics: [
            { label: 'Ranking', value: 'Top 3', icon: MapPin },
            { label: 'Búsquedas', value: '+5.2k', icon: Search },
            { label: 'Reservas', value: '+15%', icon: CheckCircle2 }
        ],
        services: ['Visual Identity', 'Menu Design', 'Local SEO', 'Signage Design'],
        outcome: 'Aumento significativo en la visibilidad local y una imagen de marca coherente y profesional.'
    },
    {
        id: '04',
        category: 'Sitios Web',
        title: 'Rancho',
        year: '2025',
        location: 'Sevilla, España',
        images: [
            '/Proyectos/Rancho/motionsr1.jpg',
            '/Proyectos/Rancho/morionsr4.jpg',
            '/Proyectos/Rancho/motionsr2.jpg',
            '/Proyectos/Rancho/motionsr3.jpg'
        ],
        description: 'Construcción de una marca vibrante que celebra la autenticidad mexicana. Desarrollamos la identidad visual completa, incluyendo el diseño de packaging para sus salsas picantes, papelería de servicio, presencia online y diseño de su sitio web de alto rendimiento.',
        graphicType: 'conversion',
        metrics: [
            { label: 'Ventas Web', value: '+30%', icon: TrendingUp },
            { label: 'Velocidad', value: '0.9s', icon: Smartphone },
            { label: 'Pedidos', value: '450/mes', icon: MousePointer2 }
        ],
        services: ['Web Design', 'Packaging Design', 'Bolsas y Merch', 'Logo Evolution'],
        outcome: 'Digitalización total con una web orientada a la conversión y un packaging que enamora.'
    },
    {
        id: '05',
        category: 'Sitios Web',
        title: 'Chompo',
        year: '2025',
        location: 'Valencia, España',
        images: [
            '/Proyectos/chompo/motionscc1.jpg',
            '/Proyectos/chompo/motionscc3.jpg',
            '/Proyectos/chompo/motionscc5.jpg',
            '/Proyectos/chompo/motionscc6.jpg',
            '/Proyectos/chompo/motionscc8.jpg'
        ],
        description: 'Especialistas en la creación de activos digitales para una de las marcas de burgers más dinámicas. Optimizamos la experiencia de usuario (UX) de su plataforma de pedidos y creamos contenido visual de alto impacto para potenciar su presencia en redes sociales.',
        graphicType: 'performance',
        metrics: [
            { label: 'UX Rate', value: '98%', icon: Target },
            { label: 'Alcance IG', value: '+120k', icon: Activity },
            { label: 'Conversion', value: '+14%', icon: TrendingUp }
        ],
        services: ['UX/UI Design', 'Fotografía Gastronómica', 'Social Media Ads', 'Web Banner Design'],
        outcome: 'Plataforma digital optimizada que reduce la fricción en el pedido y aumenta el ticket medio.'
    },
    {
        id: '06',
        category: 'Branding',
        title: 'Franks',
        year: '2025',
        location: 'Madrid, España',
        images: [
            '/Proyectos/Franks/motionsf1.jpg',
            '/Proyectos/Franks/motionsf2.jpg',
            '/Proyectos/Franks/motionsf3.jpg',
            '/Proyectos/Franks/motionsf4.jpg'
        ],
        description: 'Fusionamos estética industrial y elegancia asiática a través del diseño. Intervinimos el espacio físico con gráficos en cristales y señalética personalizada, complementado con el diseño de soportes digitales y banners estratégicos para su canal de ventas online.',
        graphicType: 'reach',
        metrics: [
            { label: 'Visitas Local', value: '+25%', icon: MapPin },
            { label: 'Banners CTR', value: '+8%', icon: Target },
            { label: 'Diseño Local', value: '100%', icon: Star }
        ],
        services: ['Señalética', 'Gráficos de Local', 'Web Banners', 'Steakhouse Branding'],
        outcome: 'Un concepto visual alternativo y sofisticado que se traslada del local a la web.'
    },
    {
        id: '07',
        category: 'Branding',
        title: 'Blum',
        year: '2025',
        location: 'Alicante, España',
        images: [
            '/Proyectos/blum/motionsb1.jpg',
            '/Proyectos/blum/motionsb.jpg',
            '/Proyectos/blum/motionsb3.jpg'
        ],
        description: 'Redefinimos la cultura del café a través del diseño y la imagen. Realizamos el rediseño total de la identidad visual, centrándonos en la experiencia física de consumo (vasos, tickets, bolsas) y potenciando su alcance digital mediante fotografía profesional.',
        graphicType: 'visibility',
        metrics: [
            { label: 'Followers', value: '+2.4k', icon: Users },
            { label: 'Impresiones', value: '+80k', icon: Search },
            { label: 'Branding', value: 'Premium', icon: Gem }
        ],
        services: ['Rediseño Identidad', 'Diseño Packaging', 'Fotografía de Producto', 'Insta Content'],
        outcome: 'Identidad refrescada que conecta con el público joven y potencia el "shareability" en redes.'
    },
    {
        id: '08',
        category: 'Branding',
        title: 'Lungo',
        year: '2025',
        location: 'Canarias, España',
        images: [
            '/Proyectos/lungo/motionsll1.jpg',
            '/Proyectos/lungo/motionsll3.jpg',
            '/Proyectos/lungo/motionsll4.jpg',
            '/Proyectos/lungo/motionsll5.jpg'
        ],
        description: 'Diseño de posters y elementos gráficos que elevan la experiencia diaria del café. Trabajamos en la evolución de su logotipo y en la aplicación de la marca sobre soportes de consumo masivo, manteniendo una estética minimalista y funcional.',
        graphicType: 'brand',
        metrics: [
            { label: 'Impacto', value: 'Alto', icon: Activity },
            { label: 'Diseño Post', value: '12+', icon: Target },
            { label: 'Branding', value: 'Minimal', icon: Star }
        ],
        services: ['Evolución Logo', 'Diseño de Posters', 'Branding de Vasos', 'Identidad Básica'],
        outcome: 'Consistencia visual en todos los soportes físicos para una marca de café de especialidad.'
    },
    {
        id: '09',
        category: 'Branding',
        title: 'Spark',
        year: '2025',
        location: 'Global',
        images: [
            '/Proyectos/spark/motionss1.jpg',
            '/Proyectos/spark/motionss2.jpg',
            '/Proyectos/spark/motionss4.jpg',
            '/Proyectos/spark/motionss6.jpg'
        ],
        description: 'Posicionamos a Spark como referente en el mercado de Cold Brew mediante un diseño gráfico premium para su packaging. Desarrollamos la identidad de su producto estrella y creamos campañas visuales para redes sociales que resaltan la calidad del producto.',
        graphicType: 'visibility',
        metrics: [
            { label: 'Ventas', value: '+40%', icon: TrendingUp },
            { label: 'Post reach', value: '+50k', icon: Users },
            { label: 'Packaging', value: 'Iconic', icon: Search }
        ],
        services: ['Botella Design', 'Logo Design', 'Campaign Posters', 'Instagram Strategy'],
        outcome: 'Packaging icónico que facilita la entrada del producto en tiendas gourmet y retail.'
    }
];


const SuccessImageCarousel: React.FC<{ images: string[]; active: boolean }> = ({ images, active }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    if (!active) return null;

    return (
        <div className="relative w-full h-full overflow-hidden group/carousel bg-gray-50">
            {/* Main Image */}
            <div className="relative w-full h-full overflow-hidden">
                {images.map((src, idx) => (
                    <img
                        key={src}
                        src={src}
                        alt={`Project view ${idx + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                        }`}
                    />
                ))}
            </div>

            {/* Navigation Buttons */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-white/40 z-30"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-white/40 z-30"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-30">
                        {images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1 rounded-full transition-all duration-500 ${
                                    idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'
                                }`}
                            />
                        ))}
                    </div>
                </>
            )}
            
            {/* Number indicator */}
            <div className="absolute top-6 right-6 px-3 py-1 bg-black/30 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest z-30">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
};

const SuccessStories: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Todos');
    const [expandedId, setExpandedId] = useState<string | null>(successCases[0].id);
    const [showAll, setShowAll] = useState(false);

    const categories = ['Todos', 'Google Maps', 'Sitios Web', 'Branding'];

    const filteredCasesByTab = activeTab === 'Todos'
        ? successCases
        : successCases.filter(c => c.category === activeTab);

    const displayedCases = showAll ? filteredCasesByTab : filteredCasesByTab.slice(0, 4);

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

    return (
        <section id="proyectos" ref={ref} className="py-24 px-6 md:px-12 bg-white font-['Inter']">
            <div className={`max-w-7xl mx-auto transition-all duration-700 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-16 gap-8 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="inline-flex items-center bg-[#f3f4f1] border border-gray-200/50 px-4 py-1.5 rounded-full mb-6 text-center">
                            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest text-center">Nuestra Trayectoria</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-[#111] leading-[1.1]">
                            Proyectos con impacto,<br />
                            resultados visibles.
                        </h2>
                    </div>

                    <div className="flex flex-col items-end gap-6 w-full md:w-auto">
                        <div className="flex flex-wrap gap-6 border-b border-gray-100 pb-2 w-full md:w-auto justify-end">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setActiveTab(cat);
                                        const first = cat === 'Todos'
                                            ? successCases[0]
                                            : successCases.find(c => c.category === cat);
                                        if (first) setExpandedId(first.id);
                                    }}
                                    className={`text-sm font-medium pb-2 transition-all relative ${activeTab === cat ? 'text-black' : 'text-gray-400 hover:text-gray-600'
                                        }`}
                                >
                                    {cat}
                                    {activeTab === cat && (
                                        <div className="absolute bottom-[-1px] left-0 w-full h-0.5 bg-black" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main List */}
                <div className="border-t border-gray-100">
                    {displayedCases.map((item) => {
                        const isExpanded = expandedId === item.id;
                        return (
                            <div
                                key={item.id}
                                className={`border-b border-gray-100 transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'py-12 bg-white' : 'hover:bg-gray-50/50'
                                    }`}
                            >
                                {/* Header (Clickable) */}
                                <div
                                    className={`flex flex-col md:flex-row items-center justify-between cursor-pointer group gap-4 ${!isExpanded ? 'py-7' : 'mb-10 text-center md:text-left'}`}
                                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                                >
                                    <h3 className={`text-xl md:text-2xl font-medium transition-all ${isExpanded ? 'text-black' : 'text-gray-500 group-hover:text-black'}`}>
                                        {item.title}
                                    </h3>

                                    <div className="flex items-center gap-4 md:gap-16">
                                        <div className="flex items-center gap-6 md:gap-12 text-black/50 md:text-black min-w-0 md:min-w-[200px] justify-center md:justify-end">
                                            <span className="text-xs md:text-sm font-medium tabular-nums">{item.year}</span>
                                            <span className="text-xs md:text-sm font-medium w-auto md:w-32 truncate text-right">{item.location}</span>
                                        </div>
                                        <div className={`p-1.5 rounded-full border border-gray-100 transition-all duration-500 ${isExpanded ? 'bg-black border-black rotate-90' : 'bg-transparent'}`}>
                                            <ChevronRight className={`w-4 h-4 transition-colors ${isExpanded ? 'text-white' : 'text-gray-400'}`} strokeWidth={1} />
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isExpanded ? 'max-h-[1400px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
                                        }`}
                                >
                                    <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-gray-50 group/item shadow-2xl">
                                        <SuccessImageCarousel images={item.images} active={isExpanded} />
                                    </div>

                                    <div className="flex flex-col justify-between items-start relative min-h-[440px]">
                                        <div className="w-full h-full flex flex-col relative z-20">
                                            <p className="text-gray-500 leading-relaxed text-base md:text-lg mb-10 max-w-xl">
                                                {item.description}
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mb-12">
                                                <div>
                                                    <span className="text-[10px] font-bold text-black uppercase tracking-widest mb-4 block opacity-40">Servicios Realizados</span>
                                                    <div className="flex flex-wrap gap-2">
                                                        {item.services.map((service, i) => (
                                                            <span key={i} className="px-3 py-1 bg-black/[0.03] border border-black/5 rounded-full text-xs text-gray-600 font-medium">
                                                                {service}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-bold text-black uppercase tracking-widest mb-4 block opacity-40">Impacto Logrado</span>
                                                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                                                        "{item.outcome}"
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Minimalist Black Pill Metrics Row */}
                                            <div className="flex flex-wrap items-center gap-2">
                                                {item.metrics.map((metric, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 px-4 py-1.5 bg-black border border-white/10 rounded-full shadow-sm">
                                                        <span className="text-xs sm:text-[13px] font-medium text-white lowercase first-letter:uppercase tracking-tight">{metric.label}</span>
                                                        <span className="text-xs sm:text-[13px] font-medium text-white tabular-nums">{metric.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Show More Button */}
                {!showAll && filteredCasesByTab.length > 4 && (
                    <div className="mt-16 flex justify-center">
                        <button
                            onClick={() => setShowAll(true)}
                            className="flex items-center gap-3 px-8 py-3.5 bg-black text-white rounded-full text-sm font-semibold hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 group shadow-lg"
                        >
                            Ver más proyectos
                            <img src="/anagram.png" alt="Motions Anagram" className="w-5 h-5 invert brightness-0 group-hover:rotate-12 transition-transform" />
                        </button>
                    </div>
                )}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes spin-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 12s linear infinite;
                }
                .animate-spin-reverse {
                    animation: spin-reverse 8s linear infinite;
                }
                @keyframes grow-horizontal {
                    from { width: 0; }
                }
                .animate-grow-horizontal {
                    animation: grow-horizontal 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-3px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }
                @keyframes draw-path {
                    from { stroke-dasharray: 0 100; stroke-dashoffset: 0; }
                    to { stroke-dasharray: 100 0; stroke-dashoffset: 0; }
                }
                .animate-draw-path {
                    stroke-dasharray: 100 100;
                    animation: draw-path 2s ease-out forwards;
                }
                @keyframes ping-slow {
                    0% { transform: scale(1); opacity: 0.8; }
                    100% { transform: scale(1.5); opacity: 0; }
                }
                .animate-ping-slow {
                    animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
            `}} />
        </section>
    );
};

export default SuccessStories;
