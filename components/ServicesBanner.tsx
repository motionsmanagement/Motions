import React, { useEffect, useRef, useState } from 'react';

const services = [
    { label: 'Google My Business', icon: '📍' },
    { label: 'Publicidad en Google Maps', icon: '📣' },
    { label: 'Sitios Web para Restaurantes', icon: '🌐' },
    { label: 'Gestión de Reputación', icon: '⭐' },
];

// Layout: two rows of 2 cards each, offset like the reference
const cardRows = [
    [services[0], services[1]],
    [services[2], services[3]],
];

const ServicesBanner: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            className="relative w-full overflow-hidden"
            style={{ minHeight: '340px' }}
            aria-label="Nuestros Servicios Banner"
        >
            {/* Background Image */}
            <img
                src="/Bannemotions.jpg"
                alt="Kitchen background"
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ filter: 'brightness(0.55)' }}
                loading="lazy"
            />

            {/* Subtle overlay gradient for legibility */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'linear-gradient(90deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0.06) 100%)',
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-8 md:px-14 py-14 gap-10 max-w-7xl mx-auto">

                {/* Left: Tag + Headline */}
                <div
                    className="flex flex-col gap-4 lg:max-w-[38%]"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateX(0)' : 'translateX(-32px)',
                        transition: 'opacity 0.7s ease, transform 0.7s ease',
                    }}
                >
                    <span
                        className="self-start text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border"
                        style={{
                            color: 'rgba(255,255,255,0.8)',
                            borderColor: 'rgba(255,255,255,0.25)',
                            background: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(8px)',
                        }}
                    >
                        Nuestros Servicios
                    </span>

                    <h2
                        className="text-3xl md:text-4xl lg:text-[2.6rem] font-semibold leading-tight tracking-tight"
                        style={{ color: '#fff' }}
                    >
                        Soluciones expertas<br />
                        <span style={{ color: 'rgba(255,255,255,0.75)' }}>para tu restaurante</span>
                    </h2>

                    <p
                        className="text-sm leading-relaxed"
                        style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '320px' }}
                    >
                        Potenciamos tu visibilidad digital para que te centres en lo que mejor sabes hacer: cocinar y dar un gran servicio.
                    </p>

                    <button
                        className="self-start mt-2 flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                        style={{
                            background: 'rgba(255,255,255,0.95)',
                            color: '#111',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
                        }}
                    >
                        Ver todos
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Right: Service Cards grid */}
                <div className="flex flex-col gap-3 lg:max-w-[58%] w-full">
                    {cardRows.map((row, rowIdx) => (
                        <div
                            key={rowIdx}
                            className="flex flex-wrap gap-3 justify-end"
                            style={{
                                // Offset odd rows slightly to the left like the reference
                                marginRight: rowIdx === 0 ? '0px' : '0px',
                                marginLeft: rowIdx === 1 ? '0px' : '40px',
                            }}
                        >
                            {row.map((service, cardIdx) => {
                                const delay = 0.2 + rowIdx * 0.15 + cardIdx * 0.1;
                                return (
                                    <div
                                        key={service.label}
                                        className="flex items-center gap-3 px-4 py-3 rounded-2xl cursor-default select-none transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                        style={{
                                            background: 'rgba(255,255,255,0.92)',
                                            backdropFilter: 'blur(16px)',
                                            WebkitBackdropFilter: 'blur(16px)',
                                            boxShadow: '0 4px 24px rgba(0,0,0,0.14)',
                                            minWidth: '200px',
                                            maxWidth: '260px',
                                            opacity: visible ? 1 : 0,
                                            transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.96)',
                                            transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s, box-shadow 0.3s ease`,
                                        }}
                                    >
                                        {/* Icon bubble */}
                                        <span
                                            className="flex items-center justify-center w-9 h-9 rounded-full text-lg flex-shrink-0"
                                            style={{ background: 'rgba(0,0,0,0.07)' }}
                                        >
                                            {service.icon}
                                        </span>

                                        {/* Label */}
                                        <span
                                            className="text-sm font-semibold leading-tight"
                                            style={{ color: '#111' }}
                                        >
                                            {service.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServicesBanner;
