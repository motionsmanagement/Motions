import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, TrendingUp, ChevronRight, MessageSquare, Activity, Users, Target, MousePointer2, Smartphone, BarChart3, Star, MapPin, Search } from 'lucide-react';

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
    image: string;
    description: string;
    metrics: SuccessMetric[];
    graphicType: 'performance' | 'visibility' | 'conversion' | 'reputation' | 'brand' | 'reach';
}

const successCases: SuccessCase[] = [
    {
        id: '01',
        category: 'Branding',
        title: 'Honest Greens',
        year: '2025',
        location: 'Madrid, España',
        image: '/honest greens.jpg',
        description: 'Elevamos la identidad visual de la marca a través de un diseño publicitario sofisticado. Realizamos el diseño de banners de alta conversión para campañas digitales y un rediseño estratégico de la carta digital, mejorando la experiencia del comensal.',
        graphicType: 'brand',
        metrics: [
            { label: 'Conversión', value: '+24%', icon: MousePointer2 },
            { label: 'Engagement', value: '+15%', icon: Activity },
            { label: 'Retención', value: '+18%', icon: Users }
        ]
    },
    {
        id: '02',
        category: 'Google Maps',
        title: 'O Ya',
        year: '2025',
        location: 'Boston, USA',
        image: '/o ya restaurant.jpg',
        description: 'Estrategia integral de crecimiento 360°. Optimizamos su perfil en Google My Business y ejecutamos campañas de gran impacto en Google Maps y Meta Ads, potenciando su alcance local mediante colaboraciones estratégicas con micro-influencers del sector gastronómico.',
        graphicType: 'performance',
        metrics: [
            { label: 'Alcance', value: '+4.5k', icon: Users },
            { label: 'Reservas', value: '+18%', icon: CheckCircle2 },
            { label: 'Llamadas', value: '+85', icon: Smartphone }
        ]
    },
    {
        id: '03',
        category: 'Sitios Web',
        title: 'Boa-Bao',
        year: '2025',
        location: 'Barcelona, España',
        image: '/boa bao.jpg',
        description: 'Transformación digital completa para reflejar su esencia exótica. Rediseñamos su plataforma web y reforzamos su identidad de marca, integrando servicios de fotografía gastronómica profesional y una optimización avanzada de su presencia en Google My Business.',
        graphicType: 'conversion',
        metrics: [
            { label: 'Velocidad', value: '1.2s', icon: Smartphone },
            { label: 'Ventas', value: '+22%', icon: TrendingUp },
            { label: 'Mobile', value: '72%', icon: Smartphone }
        ]
    },
    {
        id: '04',
        category: 'Google Maps',
        title: 'Byoko',
        year: '2025',
        location: 'Málaga, España',
        image: '/byoko.jpg',
        description: 'Refuerzo de la confianza del cliente y atractivo visual. Implementamos una gestión profesional de reseñas para mejorar el ranking local, complementado con el diseño de piezas publicitarias dinámicas y la optimización técnica de Google My Business.',
        graphicType: 'reputation',
        metrics: [
            { label: 'Visitas', value: '+210', icon: MousePointer2 },
            { label: 'CTR', value: '+12%', icon: Target },
            { label: 'Reseñas', value: '+32', icon: MessageSquare }
        ]
    },
    {
        id: '05',
        category: 'Branding',
        title: 'Amaren',
        year: '2025',
        location: 'Bilbao, España',
        image: '/amaren.jpeg',
        description: 'Capturamos la excelencia culinaria mediante fotografía artística de alta definición. Esta renovación visual se integró con una optimización exhaustiva del perfil de Google My Business, logrando atraer a un público más cualificado y gourmet.',
        graphicType: 'visibility',
        metrics: [
            { label: 'Fotos', value: '24+', icon: MapPin },
            { label: 'Tráfico', value: '+14%', icon: Activity },
            { label: 'Visitas', value: '+8%', icon: MousePointer2 }
        ]
    },
    {
        id: '06',
        category: 'Google Maps',
        title: 'Árdia',
        year: '2025',
        location: 'Madrid, España',
        image: '/ardia.jpg',
        description: 'Dominio estratégico del ecosistema de búsqueda local. Ejecutamos una optimización técnica avanzada de Google My Business vinculada a una estrategia de posicionamiento pagado en Google Maps, garantizando los primeros puestos en búsquedas clave.',
        graphicType: 'reach',
        metrics: [
            { label: 'Ranking', value: 'Top 3', icon: MapPin },
            { label: 'Búsquedas', value: '+6.2k', icon: Search },
            { label: 'Acciones', value: '+450', icon: Target }
        ]
    }
];

const LiquidGraphic: React.FC<{ type: SuccessCase['graphicType'] }> = ({ type }) => {
    return (
        <div className="absolute inset-x-0 bottom-0 top-1/2 md:top-0 md:left-1/2 pointer-events-none overflow-hidden opacity-60">
            {/* Organic Liquid Blobs */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 blur-[80px] rounded-full mix-blend-multiply opacity-20 animate-pulse
                ${type === 'performance' ? 'bg-blue-200' :
                    type === 'brand' ? 'bg-purple-200' :
                        type === 'conversion' ? 'bg-emerald-200' :
                            type === 'reputation' ? 'bg-orange-200' : 'bg-gray-200'}`}
            />
            <div className={`absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-48 h-48 blur-[60px] rounded-full mix-blend-multiply opacity-15 animate-bounce-slow
                ${type === 'performance' ? 'bg-indigo-200' :
                    type === 'brand' ? 'bg-pink-200' :
                        type === 'conversion' ? 'bg-teal-200' :
                            type === 'reputation' ? 'bg-yellow-200' : 'bg-neutral-200'}`}
            />

            {/* Glassy Floating Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                    {/* Architectural Grid overlay */}
                    <div className="absolute inset-0 border-[0.5px] border-black/[0.03] rounded-full scale-125"></div>
                    <div className="absolute inset-0 border-[0.5px] border-black/[0.02] rounded-full scale-150"></div>

                    {/* Floating Data Icons */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl flex items-center justify-center animate-bounce-slow">
                        <Activity className="w-5 h-5 text-black/40" />
                    </div>

                    <div className="absolute bottom-8 -left-4 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center animate-pulse" style={{ animationDuration: '4s' }}>
                        <MousePointer2 className="w-4 h-4 text-black/30" />
                    </div>

                    {/* Central Glass Disc */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/[0.05] backdrop-blur-[2px] border border-black/[0.03] rounded-full flex items-center justify-center">
                        <div className="w-24 h-24 border border-black/[0.02] border-dashed rounded-full animate-spin-slow"></div>
                    </div>
                </div>
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

    // Show 4 by default, show all if showAll is true
    const displayedCases = showAll ? filteredCasesByTab : filteredCasesByTab.slice(0, 4);

    return (
        <section id="cases" className="py-24 px-6 md:px-12 bg-white font-['Inter']">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                    <div>
                        <div className="inline-flex items-center bg-[#f3f4f1] border border-gray-200/50 px-4 py-1.5 rounded-full mb-6">
                            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Casos de Éxito</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-[#111] leading-[1.1]">
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
                                    className={`flex items-center justify-between cursor-pointer group ${!isExpanded ? 'py-7' : 'mb-10'}`}
                                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                                >
                                    <h3 className={`text-xl md:text-2xl font-medium transition-all ${isExpanded ? 'text-black' : 'text-gray-500 group-hover:text-black'}`}>
                                        {item.title}
                                    </h3>

                                    <div className="flex items-center gap-4 md:gap-16">
                                        <div className="flex items-center gap-12 text-black min-w-[140px] md:min-w-[200px] justify-end">
                                            <span className="text-sm font-medium tabular-nums">{item.year}</span>
                                            <span className="text-sm font-medium hidden md:block w-32 truncate text-right">{item.location}</span>
                                        </div>
                                        <div className={`p-1.5 rounded-full border border-gray-100 transition-all duration-500 ${isExpanded ? 'bg-black border-black rotate-90' : 'bg-transparent'}`}>
                                            <ChevronRight className={`w-4 h-4 transition-colors ${isExpanded ? 'text-white' : 'text-gray-400'}`} />
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isExpanded ? 'max-h-[1400px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
                                        }`}
                                >
                                    <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-gray-50 relative group/img">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover rounded-2xl transition-transform duration-1000 ease-out"
                                            style={{ transform: isExpanded ? 'scale(1)' : 'scale(1.15)' }}
                                        />
                                        <div className="absolute inset-0 bg-black/10 transition-opacity opacity-0 group-hover/img:opacity-100"></div>
                                    </div>

                                    <div className="flex flex-col justify-between items-start relative min-h-[400px]">
                                        {/* Background Liquid Glass Showcase */}
                                        <LiquidGraphic type={item.graphicType} />

                                        <div className="w-full h-full flex flex-col relative z-20">
                                            <p className="text-gray-500 leading-relaxed text-base md:text-lg mb-12 max-w-lg">
                                                {item.description}
                                            </p>

                                            {/* Glassmorphic Results Row */}
                                            <div className="group relative bg-white/40 backdrop-blur-xl rounded-2xl px-8 py-5 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-all duration-500 hover:border-black/10 w-fit">
                                                <div className="flex items-center gap-10">
                                                    {item.metrics.map((metric, idx) => (
                                                        <div key={idx} className="flex items-center gap-4 group/metric">
                                                            <div className="w-[36px] h-[36px] rounded-xl bg-black/[0.03] border border-black/5 flex items-center justify-center shrink-0 transition-transform group-hover/metric:scale-110">
                                                                <metric.icon className="w-[18px] h-[18px] text-black" />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <span className="text-[9px] font-bold text-black uppercase tracking-widest mb-0.5 opacity-60">{metric.label}</span>
                                                                <span className="text-lg font-semibold text-gray-800 tracking-tight leading-none">{metric.value}</span>
                                                            </div>
                                                            {idx < item.metrics.length - 1 && (
                                                                <div className="ml-6 w-[1px] h-8 bg-black/5 shrink-0" />
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
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
                            className="flex items-center gap-2 px-8 py-3.5 bg-black text-white rounded-full text-sm font-semibold hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 group shadow-lg"
                        >
                            Ver más proyectos
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
