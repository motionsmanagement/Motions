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
            { label: 'Conversión', value: '+140%', icon: MousePointer2 },
            { label: 'Engagement', value: '+35%', icon: Activity },
            { label: 'Ticket', value: '+18%', icon: TrendingUp },
            { label: 'Retención', value: '+22%', icon: Users }
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
            { label: 'Alcance', value: '+12k', icon: Users },
            { label: 'Reservas', value: '+45%', icon: CheckCircle2 },
            { label: 'ROI', value: '4.2x', icon: Target },
            { label: 'Llamadas', value: '+310', icon: Smartphone }
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
            { label: 'Velocidad', value: '0.8s', icon: Smartphone },
            { label: 'Ventas', value: '+60%', icon: TrendingUp },
            { label: 'Rebote', value: '-22%', icon: BarChart3 },
            { label: 'Mobile', value: '78%', icon: Smartphone }
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
            { label: 'Rating', value: '4.9★', icon: Star },
            { label: 'CTR Maps', value: '+24%', icon: MousePointer2 },
            { label: 'Leads', value: '+30%', icon: Users },
            { label: 'Reseñas', value: '+85', icon: MessageSquare }
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
            { label: 'Fotos HD', value: '50+', icon: MapPin },
            { label: 'Tráfico', value: '+30%', icon: Activity },
            { label: 'Alcance', value: '45k', icon: Search },
            { label: 'Visitas', value: '+15%', icon: MousePointer2 }
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
            { label: 'Búsquedas', value: '+18k', icon: Search },
            { label: 'Visitas', value: '+42%', icon: Users },
            { label: 'Acciones', value: '+1.2k', icon: Target }
        ]
    }
];

const CaseGraphic: React.FC<{ type: SuccessCase['graphicType'] }> = ({ type }) => {
    return (
        <div className="relative w-full h-full bg-white/50 rounded-xl border border-black/5 overflow-hidden flex flex-col p-3">
            <div className="flex justify-between items-center mb-2.5 border-b border-black/5 pb-1.5">
                <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-black/20 animate-pulse"></div>
                    <div className="w-1 h-1 rounded-full bg-black/10"></div>
                </div>
                <span className="text-[7px] font-mono text-black/30 uppercase tracking-widest">MÉTRICAS_VIVO</span>
            </div>

            <div className="flex-1 flex flex-col gap-2">
                <div className="flex-1 rounded-lg bg-black/[0.02] border border-black/[0.03] relative overflow-hidden flex items-center justify-center p-2.5">
                    {type === 'performance' && (
                        <div className="w-full h-full flex items-end gap-1 justify-center">
                            {[40, 75, 50, 95, 65, 85].map((h, i) => (
                                <div key={i} className="flex-1 bg-black/5 rounded-t-[1px] relative group/bar overflow-hidden" style={{ height: `${h}%` }}>
                                    <div className="absolute inset-0 bg-black/20 translate-y-full group-hover/bar:translate-y-0 transition-transform duration-500 animate-bounce-slow" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                </div>
                            ))}
                        </div>
                    )}
                    {type === 'brand' && (
                        <div className="relative w-full h-full flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full border border-black/5 border-dashed animate-spin-slow"></div>
                            <div className="absolute w-10 h-10 rounded-full border border-black/10 border-t-black/40 flex items-center justify-center">
                                <Activity className="w-3.5 h-3.5 text-black/60 animate-pulse" />
                            </div>
                        </div>
                    )}
                    {type === 'conversion' && (
                        <div className="w-full space-y-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex flex-col gap-0.5">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[5px] font-mono text-black/40">{40 + i * 20}%</span>
                                    </div>
                                    <div className="w-full h-0.5 bg-black/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-black/20 animate-grow-horizontal" style={{ width: `${40 + i * 20}%`, animationDelay: `${i * 0.2}s` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {type === 'reputation' && (
                        <div className="flex flex-col items-center gap-1">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 text-black fill-black/80 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
                            </div>
                            <span className="text-sm font-mono text-black tracking-tighter">4.9/5.0</span>
                            <div className="px-1.5 py-0.5 bg-black/5 rounded text-[5px] font-bold text-black/40 uppercase tracking-tighter animate-pulse">OPTIMIZADO</div>
                        </div>
                    )}
                    {(type === 'visibility' || type === 'reach') && (
                        <div className="relative w-full h-full flex items-center justify-center">
                            <div className="absolute inset-0 opacity-10">
                                <svg width="100%" height="100%" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="35" stroke="black" strokeWidth="0.5" fill="none" strokeDasharray="3 3" className="animate-spin-slow" />
                                    <circle cx="50" cy="50" r="20" stroke="black" strokeWidth="0.5" fill="none" strokeDasharray="2 2" className="animate-spin-reverse" />
                                </svg>
                            </div>
                            <div className="relative">
                                <MapPin className="w-5 h-5 text-black/40 relative z-10" />
                                <div className="absolute inset-0 bg-black/10 blur-md rounded-full animate-ping"></div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-1">
                    <div className="p-1.5 bg-black/[0.02] rounded border border-black/5 flex flex-col">
                        <span className="text-[5px] text-black/30 uppercase font-bold mb-0.5">ESTADO</span>
                        <div className="flex items-center gap-1">
                            <div className="w-0.5 h-0.5 rounded-full bg-green-500"></div>
                            <span className="text-[7px] font-mono text-black/60 uppercase">ACTIVO</span>
                        </div>
                    </div>
                    <div className="p-1.5 bg-black/[0.02] rounded border border-black/5 flex flex-col">
                        <span className="text-[5px] text-black/30 uppercase font-bold mb-0.5">NIVEL</span>
                        <span className="text-[7px] font-mono text-black/60 uppercase">PICO</span>
                    </div>
                </div>
            </div>

            <div className="mt-2.5 flex items-center justify-between text-[5px] font-mono text-black/15 uppercase tracking-widest">
                <span>RETRANSMISIÓN_TIEMPO_REAL</span>
                <span>ID_2025</span>
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
                                        <p className="text-gray-500 leading-relaxed text-base md:text-lg mb-8 max-w-lg">
                                            {item.description}
                                        </p>

                                        {/* Rectangular Technical Metric Card - Light Version - Horizontal */}
                                        <div className="group relative bg-[#f8f9f8] rounded-xl p-5 md:p-5 border border-gray-200 shadow-sm overflow-hidden transition-all duration-500 hover:border-black/10 max-w-lg w-full">
                                            <div className="relative z-10 flex flex-row gap-8 items-center justify-between">
                                                {/* Metric List - 2x2 Grid */}
                                                <div className="flex-1 grid grid-cols-2 gap-x-10 gap-y-5">
                                                    {item.metrics.map((metric, idx) => (
                                                        <div key={idx} className="flex items-center gap-3.5 group/metric">
                                                            <div className="w-8 h-8 rounded-lg bg-black/[0.03] border border-black/5 flex items-center justify-center shrink-0">
                                                                <metric.icon className="w-4 h-4 text-black" />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-0.5">{metric.label}</span>
                                                                <span className="text-lg font-semibold text-black tracking-tight leading-none">{metric.value}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Smaller Technical graphic */}
                                                <div className="w-32 h-36 shrink-0">
                                                    <CaseGraphic type={item.graphicType} />
                                                </div>
                                            </div>

                                            {/* Subtitle bottom info */}
                                            <div className="mt-4 pt-4 border-t border-black/5 flex items-center justify-between">
                                                <div className="flex items-center gap-1.5">
                                                    <div className="w-1 h-1 rounded-full bg-black/20 animate-pulse"></div>
                                                    <span className="text-[7px] font-mono text-gray-400 uppercase tracking-wider">SYNC_STREAM</span>
                                                </div>
                                            </div>

                                            {/* Sutil scan animation light */}
                                            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-black/[0.01] to-transparent group-hover:left-[100%] transition-all duration-1000 ease-in-out"></div>
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
            `}} />
        </section>
    );
};

export default SuccessStories;
