import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowUpRight, MapPin, Clock, Briefcase, Users, Zap, Check, ArrowRight, X, Mail } from 'lucide-react';
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
    category: 'Estrategia',
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

  useEffect(() => {
    setVisible(true);
    window.scrollTo(0, 0);
    document.title = "Únete al equipo | Motions";
  }, []);

  return (
    <div className="bg-white min-h-screen font-['Inter'] selection:bg-black selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main className="pt-32 md:pt-48 pb-32">
        {/* Simplified Hero Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32 text-center">
          <div className={`inline-flex items-center space-x-2 bg-gray-50 border border-gray-200/50 px-4 py-1.5 rounded-full mb-8 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 translate-y-4'}`}>
            <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
            <span className="text-[10px] font-bold text-black uppercase tracking-[0.2em]">Puestos Disponibles</span>
          </div>
          
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-black leading-[1.1] mb-8 transition-all duration-1000 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            Elevemos el sector <br className="hidden md:block" /> juntos.
          </h1>
          
          <p className={`text-base md:text-xl text-gray-450 max-w-xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            Buscamos perfiles apasionados por la gastronomía y la excelencia digital para redefinir el mercado.
          </p>
        </div>

        {/* Minimalist Jobs List */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-4">
          {positions.map((job, index) => {
            const isExpanded = expandedId === job.id;
            return (
              <div 
                key={job.id}
                onClick={() => setExpandedId(isExpanded ? null : job.id)}
                className={`group border border-gray-100 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 translate-y-8'} ${isExpanded ? 'bg-black border-black p-8 md:p-12 rounded-[2.5rem] shadow-2xl' : 'bg-gray-50/30 p-6 md:p-8 rounded-[2rem] hover:bg-white hover:shadow-xl hover:border-gray-200 hover:-translate-y-1'}`}
                style={{ transitionDelay: isExpanded ? '0ms' : `${index * 60 + 400}ms` }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-[8px] font-bold px-2 py-0.5 rounded uppercase tracking-widest border transition-colors ${isExpanded ? 'bg-white/10 border-white/20 text-white' : 'bg-black/5 border-black/5 text-black'}`}>{job.category}</span>
                      <span className={`text-[8px] font-bold uppercase tracking-widest ${isExpanded ? 'text-white/40' : 'text-gray-300'}`}>{job.type}</span>
                    </div>
                    <h3 className={`text-xl md:text-2xl font-semibold transition-all duration-500 tracking-tight ${isExpanded ? 'text-white' : 'text-black'}`}>
                      {job.title}
                    </h3>
                  </div>
                  
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-700 ${isExpanded ? 'bg-white text-black rotate-45 border-white' : 'border-gray-200 bg-white group-hover:bg-black group-hover:text-white group-hover:border-black group-hover:scale-110'}`}>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform" />
                  </div>
                </div>

                <div 
                  className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isExpanded ? 'max-h-[500px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}
                >
                  <div className="border-t border-white/10 pt-8 space-y-8">
                    <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl">
                      {job.description}
                    </p>
                    
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                      <p className="text-white text-sm md:text-base font-medium flex items-center gap-3">
                        <Mail className="w-5 h-5 text-white/40" />
                        Aplica enviando tu LinkedIn y porfolio a <span className="underline decoration-white/20 underline-offset-4">contacto@motions.es</span>
                      </p>
                      <a 
                        href={`mailto:contacto@motions.es?subject=Candidatura: ${job.title}`}
                        className="px-6 py-3 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all w-full md:w-auto text-center"
                      >
                        Enviar Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact CTA */}
        <div className={`mt-32 max-w-xl mx-auto text-center px-6 transition-all duration-1000 delay-700 ${visible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <p className="text-gray-400 text-sm mb-4">¿No ves tu puesto ideal?</p>
            <h4 className="text-2xl font-medium mb-8">Cuéntanos qué puedes aportar a Motions.</h4>
            <a href="mailto:contacto@motions.es" className="inline-flex items-center gap-2 text-black font-bold border-b-2 border-black pb-1 hover:opacity-60 transition-opacity">
                Mandamos una propuesta espontánea <ArrowRight className="w-4 h-4" />
            </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
