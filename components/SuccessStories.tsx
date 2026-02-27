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
        category: 'Google Maps',
        title: 'La Terrazza Steakhouse',
        year: '2024',
        location: 'Madrid, España',
        image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800',
        description: 'Transformamos una ficha de Google My Business estancada en una máquina de generar clientes. Implementamos una estrategia de contenido visual y SEO local que posicionó al restaurante como la primera opción en su zona.',
        impact: '+45% de Reservas Mensuales',
        result: 'Google Local Expert Partner'
    },
    {
        id: '02',
        category: 'Sitios Web',
        title: 'Burger Lab Artistry',
        year: '2023',
        location: 'Barcelona, España',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800',
        description: 'Desarrollamos una plataforma de pedidos propia optimizada para móviles, eliminando la dependencia de apps de terceros. La velocidad de carga y la facilidad de uso dispararon las ventas directas desde el primer mes.',
        impact: '+60% Ventas sin Comisiones',
        result: 'Web Performance Gold'
    },
    {
        id: '03',
        category: 'Branding',
        title: 'Origami Sushi & Lounge',
        year: '2023',
        location: 'Valencia, España',
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800',
        description: 'Rebranding completo para elevar el posicionamiento del restaurante. Rediseñamos desde el logo hasta la carta física y digital, acompañando el proceso con fotografía gastronómica de alta gama.',
        impact: '+35% Incremento Ticket Medio',
        result: 'Design Excellence 2023'
    },
    {
        id: '04',
        category: 'Google Maps',
        title: 'El Pescador Gourmet',
        year: '2024',
        location: 'Sevilla, España',
        image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=800',
        description: 'Estrategia integral de reputación online. Pasamos de una puntuación de 3.8 a 4.9 gestionando profesionalmente las reseñas y generando un flujo constante de nuevas opiniones positivas.',
        impact: '4.9★ Calificación Promedio',
        result: 'Reputation Management Pro'
    },
    {
        id: '05',
        category: 'Sitios Web',
        title: 'Trattoria Bella Napoli',
        year: '2023',
        location: 'Málaga, España',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
        description: 'Digitalización completa de reservas. Implementamos un sistema que redujo las cancelaciones en un 30% mediante recordatorios automáticos y prepagos para grupos grandes.',
        impact: '-30% No-Shows en Reservas',
        result: 'Efficiency Award 2023'
    },
    {
        id: '06',
        category: 'Branding',
        title: 'Green Leaf Vegan Café',
        year: '2024',
        location: 'Bilbao, España',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
        description: 'Creación de marca desde cero para un nuevo concepto saludable. Establecimos una estética fresca y orgánica que resonó perfectamente con el público joven de la ciudad.',
        impact: 'Sold Out Primera Semana',
        result: 'Brand Identity Success'
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

                                        <div className="grid grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <div className="w-10 h-10 bg-[#f3f4f1] rounded-xl flex items-center justify-center">
                                                    <TrendingUp className="w-5 h-5 text-gray-700" />
                                                </div>
                                                <div>
                                                    <h4 className="text-xs font-bold text-black mb-1.5 tracking-widest">Impacto</h4>
                                                    <p className="text-gray-500 text-sm font-medium">{item.impact}</p>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="w-10 h-10 bg-[#f3f4f1] rounded-xl flex items-center justify-center">
                                                    <CheckCircle2 className="w-5 h-5 text-gray-700" />
                                                </div>
                                                <div>
                                                    <h4 className="text-xs font-bold text-black mb-1.5 tracking-widest">Resultado</h4>
                                                    <p className="text-gray-500 text-sm font-medium">{item.result}</p>
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
                    <div className="mt-12 flex justify-center">
                        <button
                            onClick={() => setShowAll(true)}
                            className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg"
                        >
                            Ver más proyectos
                            <ChevronRight className="w-4 h-4 rotate-90" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default SuccessStories;
