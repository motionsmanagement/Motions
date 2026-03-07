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
            { label: 'Ticket', value: '+9%', icon: TrendingUp },
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
            { label: 'ROI', value: '2.8x', icon: Target },
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
            { label: 'Rebote', value: '-12%', icon: BarChart3 },
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
            { label: 'Leads', value: '+18%', icon: Users },
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
            { label: 'Alcance', value: '12k', icon: Search },
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
            { label: 'Visitas', value: '+16%', icon: Users },
            { label: 'Acciones', value: '+450', icon: Target }
        ]
    }
];

const CaseGraphic: React.FC<{ type: SuccessCase['graphicType'] }> = ({ type }) => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Unique, non-shared, clean artistic element */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
                {type === 'performance' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <svg width="70" height="40" viewBox="0 0 70 40" className="overflow-visible">
                            <path
                                d="M 0 38 Q 20 38 40 18 T 70 5"
                                fill="none"
                                stroke="black"
                                strokeWidth="2.5"
                                className="opacity-15 animate-draw-path"
                            />
                            <path
                                d="M 0 38 L 10 32 L 25 35 L 40 20 L 55 25 L 70 5"
                                fill="none"
                                stroke="black"
                                strokeWidth="1"
                                className="opacity-5"
                            />
                            <circle cx="70" cy="5" r="3.5" className="fill-black opacity-30 animate-pulse" />
                            <circle cx="40" cy="18" r="2" className="fill-black/10" />
                        </svg>
                    </div>
                )}
                {type === 'brand' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="relative w-16 h-16 flex items-center justify-center scale-75">
                            <div className="absolute inset-0 border-[1.5px] border-black/10 rounded-xl rotate-12"></div>
                            <div className="absolute inset-0 border border-black/5 rounded-xl -rotate-12"></div>
                            <Activity className="w-7 h-7 text-black/40" />
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-black/10 animate-pulse"></div>
                        </div>
                    </div>
                )}
                {type === 'conversion' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="relative w-14 h-14 flex items-center justify-center">
                            <svg width="60" height="60" className="absolute inset-0 rotate-[-15deg]">
                                <rect x="15" y="15" width="30" height="30" fill="none" stroke="black" strokeWidth="1" className="opacity-10" />
                                <circle cx="30" cy="30" r="12" fill="none" stroke="black" strokeWidth="2" className="opacity-20 animate-pulse" />
                            </svg>
                            <Target className="w-6 h-6 text-black/30 relative z-10" />
                        </div>
                    </div>
                )}
                {type === 'reputation' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="relative flex flex-col items-center gap-1.5">
                            <Star className="w-8 h-8 text-black/30 fill-black/5" />
                            <div className="flex gap-1.5">
                                {[100, 70, 85].map((w, i) => (
                                    <div key={i} className="w-3 h-0.5 bg-black/20 rounded-full" style={{ opacity: w / 100 * 0.5 }}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                {(type === 'visibility' || type === 'reach') && (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="relative w-16 h-16 flex items-center justify-center">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-full h-full border border-black/[0.07] rounded-full animate-ping-slow"></div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-black/40" />
                            </div>
                            <div className="absolute top-1 right-2 w-1 h-1 rounded-full bg-black/20"></div>
                        </div>
                    </div>
                )}
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

                                    <div className="flex flex-col justify-between items-start">
                                        <div className="w-full h-full flex flex-col">
                                            <p className="text-gray-500 leading-relaxed text-base md:text-lg mb-8 max-w-lg">
                                                {item.description}
                                            </p>

                                            {/* Rectangular Technical Metric Card - Light Version - Horizontal */}
                                            <div className="group relative bg-[#f8f9f8] rounded-xl p-5 md:p-6 border border-gray-200 shadow-sm overflow-hidden transition-all duration-500 hover:border-black/10 max-w-[420px] w-full">
                                                <div className="relative z-10">
                                                    {/* Card Title */}
                                                    <div className="flex items-center gap-2 mb-4 border-b border-black/5 pb-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                                                        <span className="text-[10px] font-bold text-black uppercase tracking-[0.2em]">Resultados Clave</span>
                                                    </div>

                                                    <div className="flex flex-row gap-6 items-center justify-between">
                                                        {/* Metric List - 2x2 Grid */}
                                                        <div className="flex-1 grid grid-cols-2 gap-x-6 gap-y-4">
                                                            {item.metrics.map((metric, idx) => (
                                                                <div key={idx} className="flex items-center gap-2.5 group/metric">
                                                                    <div className="w-[30px] h-[30px] rounded-lg bg-black/[0.03] border border-black/5 flex items-center justify-center shrink-0">
                                                                        <metric.icon className="w-[15px] h-[15px] text-black" />
                                                                    </div>
                                                                    <div className="flex flex-col">
                                                                        <span className="text-[8px] font-bold text-black uppercase tracking-widest mb-0.5">{metric.label}</span>
                                                                        <span className="text-base font-semibold text-gray-700 tracking-tight leading-none">{metric.value}</span>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        {/* Smaller Technical graphic */}
                                                        <div className="w-20 h-24 shrink-0">
                                                            <CaseGraphic type={item.graphicType} />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Subtle scan animation light */}
                                                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-black/[0.01] to-transparent group-hover:left-[100%] transition-all duration-1000 ease-in-out"></div>
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
