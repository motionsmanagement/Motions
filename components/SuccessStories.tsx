import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, TrendingUp, ChevronRight, MessageSquare } from 'lucide-react';

interface SuccessCase {
    id: string;
    category: string;
    title: string;
    year: string;
    location: string;
    image: string;
    description: string;
    impact: string;
    result: string;
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
        impact: 'Identidad Visual Premium',
        result: 'Diseño de Alto Impacto'
    },
    {
        id: '02',
        category: 'Google Maps',
        title: 'O Ya',
        year: '2025',
        location: 'Boston, USA',
        image: '/o ya restaurant.jpg',
        description: 'Estrategia integral de crecimiento 360°. Optimizamos su perfil en Google My Business y ejecutamos campañas de gran impacto en Google Maps y Meta Ads, potenciando su alcance local mediante colaboraciones estratégicas con micro-influencers del sector gastronómico.',
        impact: 'Máxima Visibilidad Local',
        result: 'ROI Publicitario Líder'
    },
    {
        id: '03',
        category: 'Sitios Web',
        title: 'Boa-Bao',
        year: '2025',
        location: 'Barcelona, España',
        image: '/boa bao.jpg',
        description: 'Transformación digital completa para reflejar su esencia exótica. Rediseñamos su plataforma web y reforzamos su identidad de marca, integrando servicios de fotografía gastronómica profesional y una optimización avanzada de su presencia en Google My Business.',
        impact: '+50% Engagement Digital',
        result: 'Presencia Global'
    },
    {
        id: '04',
        category: 'Google Maps',
        title: 'Byoko',
        year: '2025',
        location: 'Málaga, España',
        image: '/byoko.jpg',
        description: 'Refuerzo de la confianza del cliente y atractivo visual. Implementamos una gestión profesional de reseñas para mejorar el ranking local, complementado con el diseño de piezas publicitarias dinámicas y la optimización técnica de Google My Business.',
        impact: '4.9★ Calificación Media',
        result: 'Confianza de Marca'
    },
    {
        id: '05',
        category: 'Branding',
        title: 'Amaren',
        year: '2025',
        location: 'Bilbao, España',
        image: '/amaren.jpeg',
        description: 'Capturamos la excelencia culinaria mediante fotografía artística de alta definición. Esta renovación visual se integró con una optimización exhaustiva del perfil de Google My Business, logrando atraer a un público más cualificado y gourmet.',
        impact: 'Tráfico Cualificado +30%',
        result: 'Excelencia Visual'
    },
    {
        id: '06',
        category: 'Google Maps',
        title: 'Árdia',
        year: '2025',
        location: 'Madrid, España',
        image: '/ardia.jpg',
        description: 'Dominio estratégico del ecosistema de búsqueda local. Ejecutamos una optimización técnica avanzada de Google My Business vinculada a una estrategia de posicionamiento pagado en Google Maps, garantizando los primeros puestos en búsquedas clave.',
        impact: 'Dominio de Búsqueda Local',
        result: 'Posicionamiento Top 1'
    }
];

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
                                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isExpanded ? 'max-h-[1000px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
                                        }`}
                                >
                                    <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-gray-50">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover rounded-2xl transition-transform duration-1000 ease-out"
                                            style={{ transform: isExpanded ? 'scale(1)' : 'scale(1.15)' }}
                                        />
                                    </div>

                                    <div className="flex flex-col justify-center">
                                        <p className="text-gray-500 leading-relaxed text-base md:text-lg mb-10 max-w-lg">
                                            {item.description}
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                            {/* Liquid Glass Metric Card: Impacto */}
                                            <div className="group/metric relative p-6 rounded-[2rem] bg-gradient-to-br from-white to-[#f3f4f1]/50 border border-[#e5e7eb] shadow-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-black/10">
                                                <div className="absolute inset-0 bg-white/40 backdrop-blur-xl opacity-0 group-hover/metric:opacity-100 transition-opacity duration-500"></div>
                                                <div className="relative z-10">
                                                    <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover/metric:scale-110 transition-transform duration-500">
                                                        <TrendingUp className="w-5 h-5 text-black" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-[10px] font-bold text-black/40 mb-2 tracking-[0.2em] uppercase">Impacto Obtenido</h4>
                                                        <p className="text-xl font-semibold text-black tracking-tight leading-tight">{item.impact}</p>
                                                    </div>
                                                </div>
                                                {/* Decorative element */}
                                                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-black/[0.02] rounded-full blur-2xl group-hover/metric:bg-black/[0.05] transition-colors"></div>
                                            </div>

                                            {/* Liquid Glass Metric Card: Resultado */}
                                            <div className="group/metric relative p-6 rounded-[2rem] bg-gradient-to-br from-white to-[#f3f4f1]/50 border border-[#e5e7eb] shadow-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-black/10">
                                                <div className="absolute inset-0 bg-white/40 backdrop-blur-xl opacity-0 group-hover/metric:opacity-100 transition-opacity duration-500"></div>
                                                <div className="relative z-10">
                                                    <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover/metric:scale-110 transition-transform duration-500">
                                                        <CheckCircle2 className="w-5 h-5 text-black" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-[10px] font-bold text-black/40 mb-2 tracking-[0.2em] uppercase">Resultado Final</h4>
                                                        <p className="text-xl font-semibold text-black tracking-tight leading-tight">{item.result}</p>
                                                    </div>
                                                </div>
                                                {/* Decorative element */}
                                                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-black/[0.02] rounded-full blur-2xl group-hover/metric:bg-black/[0.05] transition-colors"></div>
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
        </section>
    );
};

export default SuccessStories;
