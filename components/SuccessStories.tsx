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

  return (
    <article
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
          style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
        />

        {/* Hover overlay — title + arrow only (category is shown below, no duplication) */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col justify-end"
          style={{
            background: hovered
              ? 'linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.12) 55%, transparent 100%)'
              : 'linear-gradient(to top, rgba(0,0,0,0) 0%, transparent 100%)',
            transition: 'background 0.4s ease',
          }}
        >
          <div
            className="px-4 pb-4 flex items-end justify-between"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.35s ease, transform 0.35s ease',
            }}
          >
            <span className="text-lg font-semibold text-white leading-tight">
              {project.title}
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
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
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
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      {/* Panel — fixed max-height, no scroll, two-column on desktop */}
      <div
        ref={modalRef}
        onClick={e => e.stopPropagation()}
        className="relative w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        style={{
          maxWidth: '960px',
          maxHeight: '88vh',
          animation: 'modalSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards',
        }}
      >
        {/* ── LEFT: Image carousel ── */}
        <div
          className="relative bg-gray-100 flex-shrink-0 w-full md:w-[52%]"
          style={{ minHeight: '200px', maxHeight: '88vh' }}
        >
          {project.images.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`${project.title} — vista ${idx + 1}`}
              loading={idx === 0 ? 'eager' : 'lazy'}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: idx === currentImg ? 1 : 0,
                transform: idx === currentImg ? 'scale(1)' : 'scale(1.03)',
              }}
            />
          ))}

          {/* Gradient + title */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-5 right-5">
            <span className="block text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-0.5">
              {project.category}
            </span>
            <h2 className="text-2xl md:text-[1.6rem] font-semibold text-white leading-tight">
              {project.title}
            </h2>
          </div>

          {/* Counter */}
          {project.images.length > 1 && (
            <div className="absolute top-4 left-4 px-2.5 py-1 bg-black/30 backdrop-blur-md rounded-full text-[10px] font-bold text-white tracking-widest">
              {currentImg + 1} / {project.images.length}
            </div>
          )}

          {/* Arrows */}
          {project.images.length > 1 && (
            <>
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all z-30">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all z-30">
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          {/* Thumbnail strip — overlaid on image bottom */}
          {project.images.length > 1 && (
            <div
              className="absolute bottom-0 left-0 right-0 flex gap-1.5 px-4 pb-3 pt-8 overflow-x-auto scrollbar-none"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)' }}
            >
              {project.images.map((src, idx) => (
                <button
                  key={src}
                  onClick={() => setCurrentImg(idx)}
                  className="flex-shrink-0 rounded-md overflow-hidden transition-all duration-300"
                  style={{
                    width: '44px',
                    height: '30px',
                    outline: idx === currentImg ? '2px solid rgba(255,255,255,0.9)' : '2px solid transparent',
                    outlineOffset: '2px',
                    opacity: idx === currentImg ? 1 : 0.5,
                  }}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── RIGHT: Info panel ── */}
        <div className="flex flex-col flex-1 min-h-0">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 w-9 h-9 rounded-full bg-black/8 flex items-center justify-center hover:bg-black/15 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-4 h-4 text-gray-700" />
          </button>

          <div className="flex flex-col justify-between h-full p-6 md:p-7 gap-5">
            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm md:text-[0.9rem]">
              {project.description}
            </p>

            {/* Services */}
            <div>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">
                Servicios Realizados
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.services.map((s, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-full text-[11px] text-gray-700 font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">
                Impacto Logrado
              </span>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                "{project.outcome}"
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3 mt-auto">
              <span className="text-[11px] text-gray-400">{project.year} · Motions</span>
              <a
                href="#contacto"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-neutral-800 transition-all hover:scale-[1.03] active:scale-95"
              >
                Trabajar juntos
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalSlideIn {
          from { opacity: 0; transform: scale(0.96) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
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
    return () => observer.disconnect();
  }, []);

  const displayedCases = showAll ? successCases : successCases.slice(0, 6);

  return (
    <>
      <section
        id="proyectos"
        ref={ref}
        className="py-24 bg-[#F7F7F5] font-['Inter']"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Header */}
          <div
            className="flex flex-col items-center text-center mb-14"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <div className="inline-flex items-center bg-white border border-gray-200 px-4 py-1.5 rounded-full mb-6">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Nuestra Trayectoria
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] font-medium tracking-tight text-[#111] leading-[1.1] mb-4">
              Proyectos con impacto,<br />resultados visibles.
            </h2>
            <p className="text-base text-gray-500 max-w-xl leading-relaxed">
              Cada proyecto es una historia de transformación. Explora nuestro trabajo y descubre cómo llevamos marcas al siguiente nivel.
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
                className="flex items-center gap-3 px-8 py-3.5 border border-gray-300 text-gray-700 bg-white rounded-full text-sm font-semibold hover:border-gray-900 hover:text-gray-900 transition-all hover:scale-[1.03] active:scale-95 shadow-sm"
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
