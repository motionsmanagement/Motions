import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Globe, Gem, Palette, Bot, Share2 } from 'lucide-react';

// ── 6 services ───────────────────────────────────────────────────────────────
const row1 = [
    { label: 'Google My Business', phrase: 'Optimización local para destacar', Icon: MapPin },
    { label: 'Diseño de Sitios Web', phrase: 'Páginas rápidas que convierten', Icon: Globe },
    { label: 'Branding e Identidad', phrase: 'Una marca visual que enamora', Icon: Gem },
];
const row2 = [
    { label: 'Diseño Gráfico Profesional', phrase: 'Creatividad para vender más', Icon: Palette },
    { label: 'Integración Inteligencia AI', phrase: 'Tecnología y auto-respuestas', Icon: Bot },
    { label: 'Gestión Redes Sociales', phrase: 'Crecimiento de comunidad activa', Icon: Share2 },
];

const INTER: React.CSSProperties = { fontFamily: "'Inter', sans-serif" };

// ── Component ─────────────────────────────────────────────────────────────────
const ServicesBanner: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            aria-label="Servicios Banner"
            className="relative w-full min-h-[640px] lg:min-h-[460px] overflow-hidden flex flex-col justify-center"
            style={{ ...INTER }}
        >
            {/* Background image — 30% left on mobile to show center-left */}
            <img
                src="/banner.jpg"
                alt="Fondo banner"
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ filter: 'brightness(0.80)', objectPosition: '30% center' }}
                loading="lazy"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/80 via-black/50 lg:via-black/30 to-transparent z-10" />

            {/* Content wrapper */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-12 flex items-center justify-center">
                <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-24">

                    {/* LEFT: text — centered on mobile, left-aligned on desktop */}
                    <div className={`flex flex-col gap-4 lg:gap-3 max-w-full lg:max-w-[400px] shrink-0 text-center lg:text-left items-center lg:items-start lg:-ml-6 xl:-ml-10 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
                        <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-white/85 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                            Nuestros Servicios
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-[1.1] tracking-tight text-white m-0">
                            Visibilidad, diseño<br />
                            <span className="text-white">y crecimiento digital.</span>
                        </h2>
                        <p className="text-sm md:text-[14.5px] text-white/80 leading-relaxed m-0 max-w-[320px] lg:max-w-none">
                            Todo lo que tu restaurante necesita para destacar online, en un solo lugar.
                        </p>
                    </div>

                    {/* RIGHT: pills — centered column on mobile, staggered grid on desktop */}
                    <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-auto items-center lg:items-end">
                        {/* Row 1 */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full sm:w-auto sm:justify-center lg:justify-end">
                            {row1.map((s, i) => (
                                <ServicePill key={s.label} service={s} visible={visible} delay={0.10 + i * 0.09} />
                            ))}
                        </div>
                        {/* Row 2 — nudged left on desktop only */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full sm:w-auto sm:justify-center lg:justify-end lg:-translate-x-[40px]">
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
    service: { label: string; phrase: string; Icon: any };
    visible: boolean;
    delay: number;
}

const ServicePill: React.FC<PillProps> = ({ service, visible, delay }) => (
    // Uniform fixed width for all pills across mobile and desktop
    <div
        className="w-[265px]"
        style={{
            height: '64px',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'flex-start',
            gap: '12px',
            padding: '0 16px', // Symmetric padding!
            borderRadius: '999px',
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(22px) saturate(160%)',
            WebkitBackdropFilter: 'blur(22px) saturate(160%)',
            border: '1px solid rgba(255,255,255,0.18)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1)',
            cursor: 'default', userSelect: 'none', boxSizing: 'border-box',
            fontFamily: "'Inter', sans-serif",
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) scale(1)' : 'translateY(14px) scale(0.96)',
            transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
        }}
    >
        {/* Icon circle */}
        <span style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '36px', height: '36px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.12)',
            flexShrink: 0,
        }}>
            <service.Icon size={18} strokeWidth={1.5} color="rgba(255,255,255,0.9)" />
        </span>

        {/* Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-start' }}>
            <span style={{
                fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.95)',
                lineHeight: 1.2, letterSpacing: '-0.02em', whiteSpace: 'nowrap',
            }}>
                {service.label}
            </span>
            <span style={{
                fontSize: '11px', color: 'rgba(255,255,255,0.70)',
                lineHeight: 1.2, letterSpacing: '-0.01em', whiteSpace: 'nowrap',
            }}>
                {service.phrase}
            </span>
        </div>
    </div>
);

export default ServicesBanner;
