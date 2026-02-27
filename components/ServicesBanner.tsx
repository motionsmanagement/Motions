import React, { useEffect, useRef, useState } from 'react';

// 6 services — two rows of 3, all same fixed width
const row1 = [
    { label: 'Google My Business', icon: '📍' },
    { label: 'Sitios Web para Restaurantes', icon: '🌐' },
    { label: 'Branding e Identidad Visual', icon: '✨' },
];
const row2 = [
    { label: 'Diseño Gráfico', icon: '🎨' },
    { label: 'Integración con IA', icon: '🤖' },
    { label: 'Gestión de Redes Sociales', icon: '📱' },
];

// Fixed card dimensions — ensures all pills are identical size
const CARD_W = 196;
const CARD_H = 56;
const CARD_GAP = 10;

const ServicesBanner: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            aria-label="Servicios Banner"
            style={{
                position: 'relative',
                width: '100%',
                height: '320px',
                overflow: 'hidden',
            }}
        >
            {/* ── Background image ── */}
            <img
                src="/Bannemotions.jpg"
                alt="Fondo restaurante"
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                    filter: 'brightness(0.58)',
                    zIndex: 0,
                }}
                loading="lazy"
            />

            {/* ── Gradient: dark left → transparent right ── */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'linear-gradient(90deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.10) 65%, rgba(0,0,0,0) 100%)',
                    zIndex: 1,
                }}
            />

            {/* ── TOP-LEFT: "SERVICIOS  Soluciones Digitales ›" ── */}
            <div
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: '28px',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                }}
            >
                <span
                    style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.75)',
                        background: 'rgba(255,255,255,0.13)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.22)',
                        borderRadius: '999px',
                        padding: '4px 12px',
                    }}
                >
                    SERVICIOS
                </span>
                <span
                    style={{
                        fontSize: '12px',
                        fontWeight: 500,
                        color: 'rgba(255,255,255,0.88)',
                        letterSpacing: '-0.01em',
                    }}
                >
                    Soluciones Digitales
                </span>
                <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px' }}>›</span>
            </div>

            {/* ── TOP-RIGHT: "Empezar ahora ↓" pill ── */}
            <button
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '28px',
                    zIndex: 10,
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.88)',
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                    border: '1px solid rgba(255,255,255,0.28)',
                    borderRadius: '999px',
                    padding: '6px 18px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    letterSpacing: '-0.01em',
                }}
            >
                Empezar ahora
                <span style={{ fontSize: '11px' }}>↓</span>
            </button>

            {/* ── BOTTOM-LEFT: sub-tag + headline + description ── */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '28px',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    maxWidth: '300px',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: 'opacity 0.65s ease, transform 0.65s ease',
                }}
            >
                {/* small tag — like "Job Opportunities" in reference */}
                <span
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        fontSize: '10px',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.72)',
                        background: 'rgba(255,255,255,0.11)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '999px',
                        padding: '3px 10px',
                        width: 'fit-content',
                    }}
                >
                    Nuestros Servicios
                </span>

                {/* Big headline — mirrors "Efficiently transform your candidate experience." */}
                <h2
                    style={{
                        fontSize: 'clamp(1.35rem, 2.6vw, 1.95rem)',
                        fontWeight: 600,
                        lineHeight: 1.08,
                        letterSpacing: '-0.04em',
                        color: '#ffffff',
                        margin: 0,
                    }}
                >
                    Soluciones expertas para<br />
                    <span style={{ color: 'rgba(255,255,255,0.65)' }}>tu restaurante.</span>
                </h2>

                {/* Description */}
                <p
                    style={{
                        fontSize: '11.5px',
                        color: 'rgba(255,255,255,0.55)',
                        lineHeight: 1.55,
                        margin: 0,
                        maxWidth: '270px',
                    }}
                >
                    Potenciamos tu visibilidad digital para que te centres en lo que mejor sabes hacer: cocinar y dar un gran servicio.
                </p>
            </div>

            {/* ── CENTER-RIGHT: 2 rows of 3 service cards, all identical size ── */}
            <div
                style={{
                    position: 'absolute',
                    // Vertically centred, pushed toward the right half
                    top: '50%',
                    right: '28px',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: `${CARD_GAP}px`,
                    // Row 2 is offset slightly left (like the reference)
                }}
            >
                {/* ROW 1 — 3 cards, aligned right */}
                <div style={{ display: 'flex', gap: `${CARD_GAP}px` }}>
                    {row1.map((service, idx) => (
                        <ServiceCard
                            key={service.label}
                            service={service}
                            visible={visible}
                            delay={0.10 + idx * 0.08}
                        />
                    ))}
                </div>

                {/* ROW 2 — 3 cards, shifted left by ~(CARD_W + GAP) / 2 to create stagger */}
                <div
                    style={{
                        display: 'flex',
                        gap: `${CARD_GAP}px`,
                        marginRight: `${(CARD_W + CARD_GAP) * 0.55}px`,
                    }}
                >
                    {row2.map((service, idx) => (
                        <ServiceCard
                            key={service.label}
                            service={service}
                            visible={visible}
                            delay={0.26 + idx * 0.08}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ── Reusable card — always exactly CARD_W × CARD_H ── */
interface CardProps {
    service: { label: string; icon: string };
    visible: boolean;
    delay: number;
}

const ServiceCard: React.FC<CardProps> = ({ service, visible, delay }) => (
    <div
        style={{
            width: `${CARD_W}px`,
            height: `${CARD_H}px`,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '0 14px',
            borderRadius: '14px',
            background: 'rgba(255,255,255,0.93)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 4px 18px rgba(0,0,0,0.18)',
            cursor: 'default',
            userSelect: 'none',
            flexShrink: 0,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) scale(1)' : 'translateY(14px) scale(0.96)',
            transition: `opacity 0.45s ease ${delay}s, transform 0.45s ease ${delay}s`,
            boxSizing: 'border-box',
        }}
    >
        {/* Icon circle */}
        <span
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.06)',
                fontSize: '15px',
                flexShrink: 0,
            }}
        >
            {service.icon}
        </span>

        {/* Label + subtitle */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
            <span
                style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#111',
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            >
                {service.label}
            </span>
            <span
                style={{
                    fontSize: '10px',
                    color: 'rgba(0,0,0,0.38)',
                    lineHeight: 1.2,
                    letterSpacing: '-0.01em',
                }}
            >
                Motions Agency
            </span>
        </div>
    </div>
);

export default ServicesBanner;
