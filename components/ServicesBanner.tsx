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
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            aria-label="Servicios Banner"
            className="relative w-full min-h-[500px] md:h-[400px] overflow-hidden"
            style={{ ...INTER }}
        >
            {/* Background image */}
            <img
                src="/Restaurant.jpg"
                alt="Fondo banner"
                className="absolute inset-0 w-full h-full object-cover object-center z-0"
                style={{ filter: 'brightness(0.52)' }}
                loading="lazy"
            />

            {/* Gradient — dark left/top → clear */}
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/85 via-black/60 md:via-black/50 to-transparent z-10" />

            {/* ── Centered content wrapper ── */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-0 h-full flex items-center">
                <div className="w-full flex flex-col md:flex-row items-center md:items-center justify-between gap-12 md:gap-8">
                    {/* LEFT: sub-tag + headline + description */}
                    <div className={`flex flex-col gap-6 md:gap-3 max-w-[500px] md:max-w-[380px] shrink-0 text-center md:text-left transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="flex justify-center md:justify-start">
                            <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-white/85 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                                Nuestros Servicios
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-[1.1] tracking-tight text-white m-0">
                            Visibilidad, diseño<br />
                            <span className="text-white/80">y crecimiento digital.</span>
                        </h2>

                        <p className="text-sm md:text-[13.5px] text-white/75 leading-relaxed m-0 px-4 md:px-0">
                            Todo lo que tu restaurante necesita para destacar online, en un solo lugar.
                        </p>
                    </div>

                    {/* RIGHT: Pills Grid - Full width on mobile, staggered on desktop */}
                    <div className="flex flex-col gap-3 w-full md:w-auto items-center md:items-end overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide">
                        {/* Mobile Grid / Desktop Layout */}
                        <div className="flex flex-col gap-3 w-full items-center md:items-end md:w-auto">
                            {/* Row 1 Content */}
                            <div className="flex flex-col md:flex-row gap-3 items-center md:items-start">
                                {row1.map((s, i) => (
                                    <ServicePill key={s.label} service={s} visible={visible} delay={0.10 + i * 0.09} />
                                ))}
                            </div>
                            {/* Row 2 Content */}
                            <div className="flex flex-col md:flex-row gap-3 items-center md:items-start md:translate-x-[-110px]">
                                {row2.map((s, i) => (
                                    <ServicePill key={s.label} service={s} visible={visible} delay={0.28 + i * 0.09} />
                                ))}
                            </div>
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
