
import React from 'react';

const projects = [
    {
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
        name: "Restaurante Mediterráneo",
        result: "+75% reservas online",
        service: "Google My Business + Web"
    },
    {
        img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600",
        name: "Pizzería Artesanal",
        result: "+60% visibilidad local",
        service: "Optimización GMB"
    },
    {
        img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=600",
        name: "Bistró Gourmet",
        result: "+85% pedidos web",
        service: "Sitio Web + Menú Digital"
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-32 px-6 md:px-12 bg-[#FBF9F6]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-12">
                    <div>
                        <div className="flex items-center gap-2 text-[#4A3728] font-bold text-xs tracking-[0.2em] uppercase mb-6">
                            <div className="w-1.5 h-1.5 rotate-45 bg-[#4A3728]"></div>
                            <span>Proyectos Realizados</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl text-[#2D241E] leading-none">
                            Casos de Éxito
                        </h2>
                    </div>
                    <p className="max-w-md text-[#2D241E]/40 leading-relaxed text-sm tracking-tight">
                        Restaurantes que confiaron en nosotros y ahora disfrutan de más clientes, más reservas y más ventas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="rounded-[3rem] overflow-hidden mb-8 aspect-[4/5] shadow-2xl transition-all duration-700 group-hover:-translate-y-2 relative">
                                <img
                                    src={project.img}
                                    alt={project.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3">
                                        <p className="text-white font-bold text-lg mb-1">{project.result}</p>
                                        <p className="text-white/70 text-xs uppercase tracking-wider">{project.service}</p>
                                    </div>
                                </div>
                            </div>
                            <h4 className="text-3xl mb-1 text-[#2D241E]">{project.name}</h4>
                            <p className="text-[#8C7B6B] text-sm font-bold tracking-[0.1em] uppercase">Cliente Satisfecho</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-20 gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#2D241E]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#2D241E]/10"></div>
                    <div className="w-2 h-2 rounded-full bg-[#2D241E]/10"></div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
