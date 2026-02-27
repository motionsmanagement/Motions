import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, TrendingUp, ChevronRight } from 'lucide-react';

interface SuccessCase {
    id: string;
    category: string;
    title: string;
    year: string;
    location: string;
    image: string;
    description: string;
    impact: string;
    certification: string;
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
        certification: 'Google Local Expert Partner'
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
        certification: 'Web Performance Gold'
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
        certification: 'Design Excellence 2023'
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
        certification: 'Reputation Management Pro'
    }
];

const SuccessStories: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Todos');
    const [expandedId, setExpandedId] = useState<string | null>(successCases[0].id);

    const categories = ['Todos', 'Google Maps', 'Sitios Web', 'Branding'];

    const filteredCases = activeTab === 'Todos'
        ? successCases
        : successCases.filter(c => c.category === activeTab);

    return (
        <section id="cases" className="py-24 px-6 md:px-12 bg-white font-['Inter']">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-[#F3F4F1] px-3 py-1 rounded-md mb-6">
                            <span className="text-[10px] font-bold text-gray-400">04</span>
                            <span className="w-px h-3 bg-gray-300"></span>
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Casos de Éxito</span>
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
                                        // Auto-expand first item of filtered list
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
                        <button className="flex items-center gap-2 bg-[#111] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-colors group">
                            Ver todos los casos
                            <div className="bg-white/10 p-1 rounded-full group-hover:bg-white/20 transition-colors">
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Main List */}
                <div className="border-t border-gray-100">
                    {filteredCases.map((item) => {
                        const isExpanded = expandedId === item.id;
                        return (
                            <div
                                key={item.id}
                                className={`border-b border-gray-100 transition-all duration-500 overflow-hidden ${isExpanded ? 'py-12' : 'hover:bg-gray-50'
                                    }`}
                            >
                                {/* Header (Clickable) */}
                                <div
                                    className={`flex items-center justify-between cursor-pointer ${!isExpanded ? 'py-6' : 'mb-8'}`}
                                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                                >
                                    <h3 className={`text-xl md:text-2xl font-medium transition-colors ${isExpanded ? 'text-black' : 'text-gray-800'}`}>
                                        {item.title}
                                    </h3>

                                    {!isExpanded && (
                                        <div className="flex items-center gap-12 text-gray-400">
                                            <span className="text-sm font-medium">{item.year}</span>
                                            <span className="text-sm font-medium hidden md:block">{item.location}</span>
                                            <ChevronRight className="w-5 h-5" />
                                        </div>
                                    )}

                                    {isExpanded && (
                                        <div className="flex items-center gap-8 text-gray-500">
                                            <span className="text-sm font-medium">{item.year}</span>
                                            <span className="text-sm font-medium">{item.location}</span>
                                            <ChevronRight className="w-5 h-5 rotate-90 transition-transform" />
                                        </div>
                                    )}
                                </div>

                                {/* Content (Expanded) */}
                                <div
                                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                                        }`}
                                >
                                    <div className="rounded-2xl overflow-hidden aspect-[16/10]">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover rounded-2xl transition-transform duration-1000"
                                            style={{ transform: isExpanded ? 'scale(1)' : 'scale(1.1)' }}
                                        />
                                    </div>

                                    <div className="flex flex-col justify-center">
                                        <p className="text-gray-500 leading-relaxed text-base md:text-lg mb-12 max-w-lg">
                                            {item.description}
                                        </p>

                                        <div className="grid grid-cols-2 gap-8">
                                            <div>
                                                <div className="w-10 h-10 bg-[#F3F4F1] rounded-lg flex items-center justify-center mb-4">
                                                    <TrendingUp className="w-5 h-5 text-gray-600" />
                                                </div>
                                                <h4 className="text-sm font-bold text-gray-900 mb-1 caps tracking-wide">IMPACTO</h4>
                                                <p className="text-gray-500 text-sm">{item.impact}</p>
                                            </div>
                                            <div>
                                                <div className="w-10 h-10 bg-[#F3F4F1] rounded-lg flex items-center justify-center mb-4">
                                                    <CheckCircle2 className="w-5 h-5 text-gray-600" />
                                                </div>
                                                <h4 className="text-sm font-bold text-gray-900 mb-1 caps tracking-wide">RESULTADO</h4>
                                                <p className="text-gray-500 text-sm">{item.certification}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
