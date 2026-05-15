import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

/* ─── Types ─────────────────────────────────────────────── */
interface SuccessCase {
  id: string;
  title: string;
  category: string;
  year: string;
  coverImage: string;
  images: string[];
  description: string;
  services: string[];
  outcome: string;
}

/* ─── Data ───────────────────────────────────────────────── */
const successCases: SuccessCase[] = [
  {
    id: 'kizuna',
    title: 'Kizuna',
    category: 'Identidad Visual & SEO',
    year: '2025',
    coverImage: '/Proyectos/Kizuna/motionsk1.jpg',
    images: [
      '/Proyectos/Kizuna/motionsk1.jpg',
      '/Proyectos/Kizuna/motionsk.jpg',
      '/Proyectos/Kizuna/motionsk2.jpg',
      '/Proyectos/Kizuna/motionsk3.jpg',
    ],
    description:
      'Diseño de una identidad visual inspirada en la tradición japonesa con un toque contemporáneo. Implementamos un sistema de diseño gráfico integral que abarca la carta del restaurante, señalética y elementos corporativos, enfocándonos en la elegancia y la legibilidad.',
    services: ['Identidad Visual', 'Diseño de Menú', 'SEO Local', 'Diseño de Señalética'],
    outcome:
      'Aumento significativo en la visibilidad local y una imagen de marca coherente y profesional que conecta con el cliente.',
  },
  {
    id: 'burger-cartel',
    title: 'Burger Cartel',
    category: 'Branding & Identidad',
    year: '2025',
    coverImage: '/Proyectos/burger cartel/motionsbc1.jpg',
    images: [
      '/Proyectos/burger cartel/motionsbc1.jpg',
      '/Proyectos/burger cartel/bcmotions.jpg',
      '/Proyectos/burger cartel/motionsbc (2).jpg',
      '/Proyectos/burger cartel/motionsbc3.jpg',
    ],
    description:
      'Renovación integral de la identidad visual para destacar en el competitivo mercado de las smash burgers. Desarrollamos desde el Naming hasta el diseño estratégico del menú, papelería y soportes físicos, logrando una imagen de marca potente y coherente.',
    services: ['Naming', 'Diseño de Logo', 'Identidad Visual', 'Diseño de Menú'],
    outcome:
      'Identidad visual impactante que ha posicionado a la marca como referente en redes sociales y potenciado el reconocimiento de marca.',
  },
  {
    id: 'lagotto',
    title: 'Lagotto',
    category: 'Diseño de Marca 360º',
    year: '2025',
    coverImage: '/Proyectos/Lagotto/motionsl1.jpg',
    images: [
      '/Proyectos/Lagotto/motionsl1.jpg',
      '/Proyectos/Lagotto/motionsl.jpg',
      '/Proyectos/Lagotto/motionsl2.jpg',
      '/Proyectos/Lagotto/motionsl3.jpg',
      '/Proyectos/Lagotto/motionsl4.jpg',
      '/Proyectos/Lagotto/motionsl5.jpg',
      '/Proyectos/Lagotto/motionsl7.jpg',
    ],
    description:
      'Llevamos la sofisticación de Lagotto a cada punto de contacto con el cliente: desde el diseño editorial de sus cartas hasta la identidad visual en merchandising y etiquetas de vino premium. Una experiencia de marca 360º diseñada para el comensal más exigente.',
    services: ['Branding Integral', 'Diseño Merchandising', 'Carta de Vinos', 'Diseño Social Media'],
    outcome:
      'Ecosistema visual premium que refuerza el posicionamiento de lujo del restaurante y eleva la experiencia del cliente.',
  },
  {
    id: 'rancho',
    title: 'Rancho',
    category: 'Branding & Packaging',
    year: '2025',
    coverImage: '/Proyectos/Rancho/motionsr1.jpg',
    images: [
      '/Proyectos/Rancho/motionsr1.jpg',
      '/Proyectos/Rancho/morionsr4.jpg',
      '/Proyectos/Rancho/motionsr2.jpg',
      '/Proyectos/Rancho/motionsr3.jpg',
    ],
    description:
      'Construcción de una marca vibrante que celebra la autenticidad mexicana. Desarrollamos la identidad visual completa, incluyendo el diseño de packaging premium para sus salsas picantes, papelería corporativa y merchandising de local.',
    services: ['Identidad Visual', 'Diseño de Packaging', 'Bolsas y Merch', 'Evolución de Logo'],
    outcome:
      'Un diseño de marca y packaging con personalidad que enamora a primera vista del consumidor y destaca en el punto de venta.',
  },
  {
    id: 'chompo',
    title: 'Chompo',
    category: 'UX Design & Contenido',
    year: '2025',
    coverImage: '/Proyectos/chompo/motionscc1.jpg',
    images: [
      '/Proyectos/chompo/motionscc1.jpg',
      '/Proyectos/chompo/motionscc3.jpg',
      '/Proyectos/chompo/motionscc5.jpg',
      '/Proyectos/chompo/motionscc6.jpg',
      '/Proyectos/chompo/motionscc8.jpg',
    ],
    description:
      'Impulsamos la presencia digital de Chompo capturando la esencia de sus productos mediante contenido visual de alto impacto y una interfaz de usuario optimizada para simplificar el proceso de pedido y aumentar la recurrencia.',
    services: ['Diseño UX/UI', 'Fotografía Gastronómica', 'Social Media Ads', 'Diseño de Banners Web'],
    outcome:
      'Plataforma digital optimizada que reduce la fricción en el pedido y aumenta el ticket medio en un entorno altamente competitivo.',
  },
  {
    id: 'franks',
    title: 'Franks',
    category: 'Gráficos de Local & Digital',
    year: '2025',
    coverImage: '/Proyectos/Franks/motionsf1.jpg',
    images: [
      '/Proyectos/Franks/motionsf1.jpg',
      '/Proyectos/Franks/motionsf2.jpg',
      '/Proyectos/Franks/motionsf3.jpg',
      '/Proyectos/Franks/motionsf4.jpg',
    ],
    description:
      'Fusionamos estética industrial y elegancia asiática a través del diseño. Intervinimos el espacio físico con gráficos en cristales y señalética personalizada, complementado con el diseño de soportes digitales y banners estratégicos.',
    services: ['Señalética', 'Gráficos para Local', 'Banners Web', 'Branding Steakhouse'],
    outcome:
      'Un concepto visual alternativo y sofisticado que se traslada del local a la web creando una experiencia de marca coherente.',
  },
  {
    id: 'blum',
    title: 'Blum',
    category: 'Identidad & Fotografía',
    year: '2025',
    coverImage: '/Proyectos/blum/motionsb1.jpg',
    images: [
      '/Proyectos/blum/motionsb1.jpg',
      '/Proyectos/blum/motionsb.jpg',
      '/Proyectos/blum/motionsb3.jpg',
    ],
    description:
      'Redefinimos la cultura del café a través del diseño y la imagen. Realizamos el rediseño total de la identidad visual, centrándonos en la experiencia física de consumo (vasos, tickets, bolsas) y potenciando su alcance digital mediante fotografía profesional.',
    services: ['Rediseño Identidad', 'Diseño Packaging', 'Fotografía de Producto', 'Contenido Instagram'],
    outcome:
      'Identidad refrescada que conecta con el público joven y potencia el \"shareability\" en redes sociales.',
  },
  {
    id: 'lungo',
    title: 'Lungo',
    category: 'Branding Minimalista',
    year: '2025',
    coverImage: '/Proyectos/lungo/motionsll1.jpg',
    images: [
      '/Proyectos/lungo/motionsll1.jpg',
      '/Proyectos/lungo/motionsll3.jpg',
      '/Proyectos/lungo/motionsll4.jpg',
      '/Proyectos/lungo/motionsll5.jpg',
    ],
    description:
      'Diseño de posters y elementos gráficos que elevan la experiencia diaria del café. Trabajamos en la evolución de su logotipo y en la aplicación de la marca sobre soportes de consumo masivo, manteniendo una estética minimalista y funcional.',
    services: ['Evolución de Logo', 'Diseño de Posters', 'Branding de Vasos', 'Identidad Corporativa'],
    outcome:
      'Consistencia visual en todos los soportes físicos para una marca de café de especialidad que aspira a escalar.',
  },
  {
    id: 'spark',
    title: 'Spark',
    category: 'Packaging & Estrategia',
    year: '2025',
    coverImage: '/Proyectos/spark/motionss1.jpg',
    images: [
      '/Proyectos/spark/motionss1.jpg',
      '/Proyectos/spark/motionss2.jpg',
      '/Proyectos/spark/motionss4.jpg',
      '/Proyectos/spark/motionss6.jpg',
    ],
    description:
      'Posicionamos a Spark como referente en el mercado de Cold Brew mediante un diseño gráfico premium para su packaging. Desarrollamos la identidad de su producto estrella y creamos campañas visuales para redes sociales que resaltan la calidad del producto.',
    services: ['Diseño de Botella', 'Diseño de Logo', 'Posters de Campaña', 'Estrategia Instagram'],
    outcome:
      'Packaging icónico que facilita la entrada del producto en tiendas gourmet y retail de toda España.',
  },
];

/* ─── Project Card (Grid Item) ───────────────────────────── */
const ProjectCard: React.FC<{ project: SuccessCase; onClick: () => void; index: number; visible: boolean }> = ({
  project,
  onClick,
  index,
  visible,
}) => {
  const [hovered, setHovered] = useState(false);
  const [isMobileActive, setIsMobileActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouch) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMobileActive(entry.isIntersecting);
      },
      { threshold: 0.8 } // Show when mostly in view
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const isActive = hovered || isMobileActive;

  // Preload images of this project when hovered
  useEffect(() => {
    if (hovered) {
      project.images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [hovered, project.images]);

  return (
    <article
      ref={cardRef}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden cursor-pointer group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 80}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 80}ms`,
      }}
    >
      {/* Thumbnail — rounded corners */}
      <div className="relative w-full overflow-hidden bg-gray-100 rounded-2xl" style={{ aspectRatio: '16/10' }}>
        <img
          src={project.coverImage}
          alt={project.title}
          loading={index < 3 ? 'eager' : 'lazy'}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: isActive ? 'scale(1.06)' : 'scale(1)' }}
        />

        {/* Hover overlay — title + arrow only (category is shown below, no duplication) */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col justify-end"
          style={{
            background: isActive
              ? 'linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.12) 55%, transparent 100%)'
              : 'linear-gradient(to top, rgba(0,0,0,0) 0%, transparent 100%)',
            transition: 'background 0.4s ease',
          }}
        >
          <div
            className="px-4 pb-4 flex items-end justify-between"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.35s ease, transform 0.35s ease',
            }}
          >
            <span className="text-lg font-semibold text-white leading-tight opacity-0">
              Ver proyecto
            </span>
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center ml-3 shrink-0">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Below-image meta */}
      <div className="pt-2.5 pb-0.5 px-0.5 flex items-center justify-between">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-[11px] font-semibold text-gray-800 truncate">{project.title}</span>
          <span className="text-[10px] text-gray-400 shrink-0">·</span>
          <span className="text-[10px] text-gray-500 truncate">{project.category}</span>
        </div>
        <span className="text-[10px] text-gray-400 tabular-nums shrink-0 ml-2">{project.year}</span>
      </div>
    </article>
  );
};

/* ─── Modal Detail View ──────────────────────────────────── */
const ProjectModal: React.FC<{ project: SuccessCase; onClose: () => void }> = ({ project, onClose }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentImg(p => (p + 1) % project.images.length);
      if (e.key === 'ArrowLeft') setCurrentImg(p => (p - 1 + project.images.length) % project.images.length);
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [onClose, project.images.length]);

  const prev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImg(p => (p - 1 + project.images.length) % project.images.length);
  }, [project.images.length]);

  const next = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImg(p => (p + 1) % project.images.length);
  }, [project.images.length]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto p-4 sm:p-6 overscroll-contain"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      {/* Panel — vertical scroll, fixed within popup container */}
      <div
        ref={modalRef}
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        style={{
          maxHeight: 'none',
          backgroundColor: '#fff',
          animation: 'modalSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/25 backdrop-blur-md flex items-center justify-center hover:bg-black/40 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Hero Image with navigation */}
        <div className="relative w-full overflow-hidden bg-gray-100" style={{ aspectRatio: '16/9' }}>
          {project.images.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`${project.title} — vista ${idx + 1}`}
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: idx === currentImg ? 1 : 0,
                transform: idx === currentImg ? 'scale(1.005)' : 'scale(1.03)',
              }}
            />
          ))}

          {/* Gradient + counter */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          
          {project.images.length > 1 && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-black/30 backdrop-blur-md rounded-full text-[10px] font-bold text-white tracking-widest">
              {currentImg + 1} / {project.images.length}
            </div>
          )}

          {/* Arrows */}
          {project.images.length > 1 && (
            <>
              <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all z-30">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all z-30">
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Content area */}
        <div className="p-6 md:p-10 lg:p-12 flex flex-col">
          {/* Header info */}
          <div className="mb-10">
            <span className="block text-[10px] font-normal text-gray-400 uppercase tracking-[0.15em] mb-3">
              {project.category}
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-[1.3] tracking-tight">
              {project.title}
            </h2>
          </div>

          {/* Thumbnail strip */}
          {project.images.length > 1 && (
            <div className="flex gap-2 mb-12 overflow-x-auto scrollbar-none">
              {project.images.map((src, idx) => (
                <button
                  key={src}
                  onClick={() => setCurrentImg(idx)}
                  className="flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300"
                  style={{
                    width: '100px',
                    height: '64px',
                    opacity: idx === currentImg ? 1 : 0.4,
                    transform: idx === currentImg ? 'scale(1.05)' : 'scale(1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Description */}
          <div className="max-w-2xl mb-12">
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-t border-gray-100 pt-12">
            {/* Services */}
            <div>
              <span className="text-[10px] font-normal text-gray-400 uppercase tracking-[0.15em] mb-4 block">
                Servicios Realizados
              </span>
              <div className="flex flex-wrap gap-2">
                {project.services.map((s, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-700 font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div>
              <span className="text-[10px] font-normal text-gray-400 uppercase tracking-[0.15em] mb-4 block">
                Impacto Logrado
              </span>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                "{project.outcome}"
              </p>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="flex items-center justify-between gap-4 py-8 border-t border-gray-100">
            <span className="text-xs text-gray-400 font-medium">{project.year} · Motions Management</span>
            <a
              href="#contacto"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 bg-black text-white text-[13px] sm:text-sm font-bold rounded-full hover:bg-neutral-800 transition-all hover:scale-[1.03] active:scale-95 shadow-xl whitespace-nowrap"
            >
              Trabajar juntos
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalSlideIn {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

/* ─── Main Section ───────────────────────────────────────── */
const SuccessStories: React.FC = () => {
  const [activeProject, setActiveProject] = useState<SuccessCase | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);

    // Preload first 3 projects images globally
    successCases.slice(0, 3).forEach(project => {
      project.images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    });

    return () => observer.disconnect();
  }, []);

  const displayedCases = showAll ? successCases : successCases.slice(0, 6);

  return (
    <>
      <section
      id="proyectos"
      ref={ref}
      className="relative py-24 bg-white overflow-hidden font-['Inter']"
    >
      <div className={`transition-all duration-700 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Header */}
          <div
            className="flex flex-col items-center text-center mb-16"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <div className="inline-flex items-center bg-gray-50 border border-gray-100 px-4 py-1.5 rounded-full mb-6">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Nuestra Trayectoria
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.1] mb-6">
              Proyectos con impacto,<br />resultados visibles.
            </h2>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed">
              Cada proyecto es una oportunidad para transformar la visión de nuestros clientes en una realidad digital impactante.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
            {displayedCases.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                visible={visible}
                onClick={() => setActiveProject(project)}
              />
            ))}
          </div>

          {/* Show more */}
          {!showAll && successCases.length > 6 && (
            <div
              className="mt-14 flex justify-center"
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.7s ease 0.6s',
              }}
            >
              <button
                onClick={() => setShowAll(true)}
                className="flex items-center gap-3 px-8 py-3.5 bg-black text-white rounded-full text-sm font-semibold hover:bg-neutral-800 transition-all hover:scale-[1.03] active:scale-95 shadow-lg"
              >
                Ver todos los proyectos
              </button>
            </div>
          )}

          {/* Bottom CTA */}
          {(showAll || successCases.length <= 6) && (
            <div
              className="mt-14 flex justify-center"
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.7s ease 0.6s',
              }}
            >
              <a
                href="#contacto"
                className="hidden md:inline-flex items-center gap-3 px-8 py-3.5 bg-black text-white rounded-full text-sm font-semibold hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                Solicitar presupuesto
                <img src="/anagram.png" alt="Motions" className="w-5 h-5 invert brightness-0" />
              </a>
              <a
                href="https://wa.me/34919610420"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden inline-flex items-center gap-3 px-8 py-3.5 bg-black text-white rounded-full text-sm font-semibold hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                Solicitar presupuesto
                <img src="/anagram.png" alt="Motions" className="w-5 h-5 invert brightness-0" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>

      {/* Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
};

export default SuccessStories;
