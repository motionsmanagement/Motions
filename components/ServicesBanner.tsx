import React, { useEffect, useRef, useState } from 'react';
// Build trigger: Final Version with 6 services, glass pills and SVGs

// ── SVG icons (white stroke) ─────────────────────────────────────────────────
const IconMapPin = () => (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 1.5C6.015 1.5 4 3.515 4 6c0 4 4.5 9.5 4.5 9.5S13 10 13 6c0-2.485-2.015-4.5-4.5-4.5z" />
        <circle cx="8.5" cy="6" r="1.6" />
    </svg>
);
const IconGlobe = () => (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8.5" cy="8.5" r="6.5" />
        <path d="M2 8.5h13M8.5 2C6.8 4.3 6 6.4 6 8.5s.8 4.2 2.5 6.5M8.5 2C10.2 4.3 11 6.4 11 8.5s-.8 4.2-2.5 6.5" />
    </svg>
);
const IconDiamond = () => (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 2L15 7l-6.5 8L2 7z" />
        <path d="M2 7h13" />
    </svg>
);
const IconPen = () => (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2.5l1.5 1.5L5 13.5H3v-2L13 2.5z" />
        <path d="M11.5 4l1.5 1.5" />
    </svg>
);
const IconCpu = () => (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5.5" y="5.5" width="6" height="6" rx="1.2" />
        <path d="M7.5 5.5V3.5M9.5 5.5V3.5M7.5 13.5v-2M9.5 13.5v-2M5.5 7.5H3.5M5.5 9.5H3.5M13.5 7.5h-2M13.5 9.5h-2" />
    </svg>
);
const IconShare = () => (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12.5" cy="3.5" r="1.5" />
        <circle cx="12.5" cy="13.5" r="1.5" />
        <circle cx="4.5" cy="8.5" r="1.5" />
        <path d="M6 7.8l5-2.6M5.5 9.2l5.5 2.4" />
    </svg>
);

// ── 6 services in 2 rows of 3 ────────────────────────────────────────────────
const row1 = [
    { label: 'Google My Business', phrase: 'Visibilidad local garantizada', Icon: IconMapPin },
    { label: 'Sitios Web para Rest.', phrase: 'Tu web lista para convertir', Icon: IconGlobe },
    { label: 'Branding e Identidad', phrase: 'Una marca que deja huella', Icon: IconDiamond },
];
const row2 = [
    { label: 'Diseño Gráfico', phrase: 'Piezas que comunican y venden', Icon: IconPen },
    { label: 'Integración con IA', phrase: 'Automatiza, escala, crece', Icon: IconCpu },
    { label: 'Gestión de Redes Sociales', phrase: 'Comunidad que convierte', Icon: IconShare },
];

// All pills exactly the same size
const CARD_W = 210;
const CARD_H = 68;
const CARD_GAP = 10;

// Shared Inter font style (matches rest of the site)
const INTER: React.CSSProperties = { fontFamily: "'Inter', sans-serif" };

// ── Component ─────────────────────────────────────────────────────────────────
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
            style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', ...INTER }}
        >
            {/* Background image */}
            <img
                src="/bannerz.jpg"
                alt="Fondo banner"
                style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center',
                    filter: 'brightness(0.52)', zIndex: 0,
                }}
                loading="lazy"
            />

            {/* Gradient — dark left → clear right */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.48) 32%, rgba(0,0,0,0.10) 62%, rgba(0,0,0,0) 100%)',
                zIndex: 1,
            }} />

            {/* ── Centered content wrapper — max-width brings all elements inward ── */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 10,
                display: 'flex', flexDirection: 'column',
                maxWidth: '1280px',   // ← same as max-w-7xl in Services section
                margin: '0 auto',
                padding: '0 48px',    // ← same as px-12 in Services section
                width: '100%',
            }}>



                {/* MAIN ROW: text left · cards right — vertically centred */}
                <div style={{
                    flex: 1,
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '32px',
                    paddingBottom: '8px',
                }}>
                    {/* LEFT: sub-tag + headline + description */}
                    <div style={{
                        display: 'flex', flexDirection: 'column', gap: '8px',
                        maxWidth: '380px', flexShrink: 0,
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateX(0)' : 'translateX(-20px)',
                        transition: 'opacity 0.65s ease, transform 0.65s ease',
                    }}>
                        <span style={{
                            display: 'inline-flex', alignItems: 'center',
                            fontSize: '10px', fontWeight: 600, letterSpacing: '0.06em',
                            textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)',
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.18)',
                            borderRadius: '999px', padding: '3px 10px', width: 'fit-content',
                        }}>
                            Nuestros Servicios
                        </span>

                        <h2 style={{
                            fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)',
                            fontWeight: 400, lineHeight: 1.1,
                            letterSpacing: '-0.04em', color: '#fff', margin: 0,
                        }}>
                            Visibilidad, diseño<br />
                            <span style={{ color: 'rgba(255,255,255,0.82)' }}>y crecimiento digital.</span>
                        </h2>

                        <p style={{
                            fontSize: '13.5px', color: 'rgba(255,255,255,0.78)',
                            lineHeight: 1.6, margin: 0,
                        }}>
                            Todo lo que tu restaurante necesita para destacar online, en un solo lugar.
                        </p>
                    </div>

                    {/* RIGHT: 2 rows of 3 glass pills */}
                    <div style={{
                        display: 'flex', flexDirection: 'column',
                        gap: `${CARD_GAP}px`, alignItems: 'flex-end',
                    }}>
                        {/* Row 1 */}
                        <div style={{ display: 'flex', gap: `${CARD_GAP}px` }}>
                            {row1.map((s, i) => (
                                <ServicePill key={s.label} service={s} visible={visible} delay={0.10 + i * 0.09} />
                            ))}
                        </div>
                        {/* Row 2 — offset left for stagger effect */}
                        <div style={{ display: 'flex', gap: `${CARD_GAP}px`, marginRight: `${(CARD_W + CARD_GAP) * 0.5}px` }}>
                            {row2.map((s, i) => (
                                <ServicePill key={s.label} service={s} visible={visible} delay={0.28 + i * 0.09} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ── Glass pill card ───────────────────────────────────────────────────────────
interface PillProps {
    service: { label: string; phrase: string; Icon: React.FC };
    visible: boolean;
    delay: number;
}

const ServicePill: React.FC<PillProps> = ({ service, visible, delay }) => (
    <div style={{
        width: `${CARD_W}px`,
        height: `${CARD_H}px`,
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: '0 16px 0 9px',
        borderRadius: '999px',
        background: 'rgba(255,255,255,0.10)',
        backdropFilter: 'blur(22px) saturate(160%)',
        WebkitBackdropFilter: 'blur(22px) saturate(160%)',
        border: '1px solid rgba(255,255,255,0.22)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.12)',
        cursor: 'default', userSelect: 'none', flexShrink: 0, boxSizing: 'border-box',
        fontFamily: "'Inter', sans-serif",
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(14px) scale(0.96)',
        transition: `opacity 0.45s ease ${delay}s, transform 0.45s ease ${delay}s`,
    }}>
        {/* Icon circle */}
        <span style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '32px', height: '32px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.18)',
            flexShrink: 0,
        }}>
            <service.Icon />
        </span>

        {/* Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
            <span style={{
                fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.95)',
                lineHeight: 1.2, letterSpacing: '-0.02em',
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>
                {service.label}
            </span>
            <span style={{
                fontSize: '10px', color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.2, letterSpacing: '-0.01em',
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>
                {service.phrase}
            </span>
        </div>
    </div>
);

export default ServicesBanner;
