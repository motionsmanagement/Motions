import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ArrowUpRight, MapPin, Clock, Briefcase, Users, Zap, Check, ArrowRight, X } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface JobPosition {
  id: string;
  title: string;
  category: string;
  location: string;
  type: string;
  description: string;
}

const positions: JobPosition[] = [
  {
    id: 'account-manager',
    title: 'Account Manager (Especialista en Hostelería)',
    category: 'Gestión y Estrategia',
    location: 'Híbrido - Madrid',
    type: 'Jornada Completa',
    description: 'Serás el puente entre Motions y nuestros clientes más exclusivos. Tu objetivo será entender su visión, gestionar sus proyectos de digitalización y asegurar que su restaurante supere sus objetivos de facturación.'
  },
  {
    id: 'performance-expert',
    title: 'Especialista en Meta Ads & Google Ads',
    category: 'Performance marketing',
    location: 'Remoto',
    type: 'Jornada Completa',
    description: 'Buscamos a un experto en campañas de pago enfocadas a ROI para restaurantes. Diseñarás estrategias que llenen mesas de martes a domingo mediante segmentación ultra-local.'
  },
  {
    id: 'ui-designer-boutique',
    title: 'Senior UI/Visual Designer',
    category: 'Diseño experto',
    location: 'Remoto / Madrid',
    type: 'Jornada Completa',
    description: 'En Motions no hacemos webs normales; creamos joyas digitales. Necesitamos un diseñador con una sensibilidad estética superior para crear interfaces minimalistas, rápidas y que respiren alta cocina.'
  },
  {
    id: 'project-manager-gastronomia',
    title: 'Project Manager (Operaciones Digitales)',
    category: 'Operaciones',
    location: 'Híbrido - Madrid',
    type: 'Jornada Completa',
    description: 'Coordinarás los equipos de diseño y desarrollo para asegurar que cada proyecto gastronómico se entregue con la máxima calidad y en los plazos acordados.'
  },
  {
    id: 'social-media-strategist',
    title: 'Social Media & Community Strategist',
    category: 'Contenido',
    location: 'Remoto / Madrid',
    type: 'Jornada Completa',
    description: 'Gestionarás la presencia digital de los restaurantes más potentes, creando contenido que no solo genere likes, sino reservas reales.'
  },
  {
    id: 'fotografo-gastronomico',
    title: 'Fotógrafo & Videógrafo (Storytelling)',
    category: 'Contenido visual',
    location: 'Madrid / Barcelona',
    type: 'Por Proyecto',
    description: 'Capturarás la esencia culinaria y la atmósfera de nuestros clientes para campañas sociales y sitios web de alto impacto visual.'
  },
  {
    id: 'branding-identity',
    title: 'Estratega de Branding & Identidad Visual',
    category: 'Branding',
    location: 'Remoto',
    type: 'Jornada Completa',
    description: 'Crearás desde cero la identidad visual de los nuevos conceptos gastronómicos, dotándolos de una personalidad única y premium.'
  },
  {
    id: 'copywriter-gastronomico',
    title: 'Copywriter & Estratega de Contenido',
    category: 'Creatividad',
    location: 'Remoto',
    type: 'Por Proyecto',
    description: '¿Sabes cómo vender una experiencia gastronómica a través de palabras? Buscamos a alguien que cree la voz de marca para los restaurantes más potentes de España.'
  }
];

const Careers: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setVisible(true);
    window.scrollTo(0, 0);
    
    document.title = "Únete al equipo | Motions - Marketing Gastronómico de Vanguardia";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Únete a Motions y ayuda a transformar el futuro digital de los mejores restaurantes. Buscamos talento creativo y estratégico.');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, jobTitle: string) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      puesto: jobTitle,
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      linkedin: formData.get('linkedin'),
      mensaje: formData.get('mensaje')
    };

    try {
      await fetch('https://formsubmit.co/ajax/contacto@motions.es', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-white min-h-screen font-['Inter'] selection:bg-black selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main className="pt-32 md:pt-48 pb-24">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 text-center">
          <div className={`inline-flex items-center bg-gray-50 border border-gray-200 px-4 py-1.5 rounded-full mb-8 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse mr-2" />
            <span className="text-[10px] font-bold text-black uppercase tracking-[0.2em]">Oportunidades Abiertas</span>
          </div>
          
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-black leading-[1.1] mb-8 transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Únete a nuestro <br className="hidden md:block" /> laboratorio creativo.
          </h1>
          
          <p className={`text-base md:text-xl text-gray-450 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            En la intersección del diseño y la hostelería. Buscamos mentes curiosas para liderar la próxima generación de marcas gastronómicas.
          </p>
        </div>

        {/* Jobs List - Integrated Form Experience */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-0 mb-32">
          {positions.map((job, index) => {
            const isExpanded = expandedId === job.id;
            return (
              <div 
                key={job.id}
                className={`group border-b border-gray-100 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${isExpanded ? 'bg-[#FAFAFA] rounded-[1.5rem] my-4 px-6 md:px-10' : 'py-8 md:py-10'}`}
                style={{ transitionDelay: isExpanded ? '0ms' : `${index * 80 + 400}ms` }}
              >
                {/* Job Info Header */}
                <div 
                  onClick={() => {
                    setExpandedId(isExpanded ? null : job.id);
                    setIsSubmitted(false);
                  }}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-[9px] font-bold border px-2 py-0.5 rounded uppercase tracking-widest transition-colors ${isExpanded ? 'border-black text-black' : 'text-gray-300 border-gray-100'}`}>{job.category}</span>
                      <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">• {job.type}</span>
                    </div>
                    <h3 className={`text-xl md:text-2xl font-medium text-black transition-all duration-500 tracking-tight leading-tight ${isExpanded ? 'text-black' : 'group-hover:text-neutral-500'}`}>
                      {job.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-6 w-full md:w-auto md:justify-end">
                    <div className="flex flex-col text-xs text-gray-400 font-medium whitespace-nowrap">
                      <span>{job.location}</span>
                    </div>
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-100 flex items-center justify-center transition-all duration-500 ml-auto md:ml-0 ${isExpanded ? 'bg-black text-white rotate-90 border-black' : 'group-hover:bg-black group-hover:text-white group-hover:scale-110'}`}>
                      {isExpanded ? <X className="w-4 h-4 md:w-5 md:h-5" /> : <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:-rotate-45" />}
                    </div>
                  </div>
                </div>

                {/* Integrated Form Section */}
                <div 
                  className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isExpanded ? 'max-h-[1000px] opacity-100 mt-10 pb-10' : 'max-h-0 opacity-0 pointer-events-none'}`}
                >
                  <div className="border-t border-gray-100 pt-10">
                    {!isSubmitted ? (
                      <>
                        <div className="mb-10">
                          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mb-8">
                            {job.description}
                          </p>
                          <h4 className="text-xl md:text-2xl font-medium text-black tracking-tight mb-8">Envía tu postulación para <br /> <span className="text-gray-400">{job.title}</span></h4>
                        </div>

                        <form onSubmit={(e) => handleSubmit(e, job.title)} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                          <div className="space-y-3">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Nombre Completo</label>
                            <input required name="nombre" type="text" className="w-full bg-transparent border-b border-gray-200 pb-3 focus:outline-none focus:border-black transition-all text-base md:text-lg font-medium placeholder:text-gray-100" placeholder="Escribe tu nombre..." />
                          </div>
                          <div className="space-y-3">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Email de Contacto</label>
                            <input required name="email" type="email" className="w-full bg-transparent border-b border-gray-200 pb-3 focus:outline-none focus:border-black transition-all text-base md:text-lg font-medium placeholder:text-gray-100" placeholder="hola@tuemail.com" />
                          </div>
                          <div className="md:col-span-2 space-y-3">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">LinkedIn o Portfolio</label>
                            <input required name="linkedin" type="url" className="w-full bg-transparent border-b border-gray-200 pb-3 focus:outline-none focus:border-black transition-all text-base md:text-lg font-medium placeholder:text-gray-100" placeholder="https://..." />
                          </div>
                          <div className="md:col-span-2 space-y-3">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Notas Adicionales</label>
                            <textarea name="mensaje" rows={2} className="w-full bg-transparent border-b border-gray-200 pb-3 focus:outline-none focus:border-black transition-all text-base md:text-lg font-medium resize-none placeholder:text-gray-100" placeholder="Cuéntanos un poco por qué encajas..."></textarea>
                          </div>

                          <div className="md:col-span-2 pt-6">
                            <button type="submit" className="px-8 py-3.5 bg-black text-white rounded-full font-bold text-sm shadow-xl hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-95">
                              Enviar Candidatura
                            </button>
                          </div>
                        </form>
                      </>
                    ) : (
                      <div className="flex flex-col items-center text-center py-10">
                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-8 shadow-xl">
                          <Check className="text-white w-8 h-8" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-medium text-black mb-4 tracking-tighter">Postulación Recibida</h2>
                        <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">Gracias por tu interés. Revisaremos tu perfil y te contactaremos pronto si encajas con nuestra visión.</p>
                        <button onClick={() => { setIsSubmitted(false); setExpandedId(null); }} className="mt-8 text-black font-bold text-[10px] uppercase tracking-widest border border-gray-200 px-6 py-2.5 rounded-full hover:bg-gray-50 transition-all">Cerrar</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
