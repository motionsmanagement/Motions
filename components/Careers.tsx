import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ArrowUpRight, MapPin, Clock, Briefcase, Users, Zap, Check, ArrowRight } from 'lucide-react';
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
    category: 'Performance',
    location: 'Remoto',
    type: 'Jornada Completa',
    description: 'Buscamos a un experto en campañas de pago enfocadas a ROI para restaurantes. Diseñarás estrategias que llenen mesas de martes a domingo mediante segmentación ultra-local.'
  },
  {
    id: 'ui-designer-boutique',
    title: 'Diseñador UI/Visual Senior',
    category: 'Diseño',
    location: 'Remoto / Madrid',
    type: 'Jornada Completa',
    description: 'En Motions no hacemos webs normales; creamos joyas digitales. Necesitamos un diseñador con una sensibilidad estética superior para crear interfaces minimalistas, rápidas y que respiren alta cocina.'
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
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisible(true);
    window.scrollTo(0, 0);
    
    // Set SEO Meta
    document.title = "Únete al equipo | Motions - Marketing Gastronómico de Vanguardia";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Únete a Motions y ayuda a transformar el futuro digital de los mejores restaurantes. Buscamos talento creativo y estratégico para elevar el sector gastronómico.');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      puesto: selectedJob?.title,
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
      
      <main className="pt-32 md:pt-48 pb-0">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-40 text-center">
          <div className={`inline-flex items-center bg-gray-50 border border-gray-200 px-4 py-1.5 rounded-full mb-8 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse mr-2" />
            <span className="text-[10px] font-bold text-black uppercase tracking-[0.2em]">Oportunidades Abiertas</span>
          </div>
          
          <h1 className={`text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-black leading-[1] md:leading-[0.9] mb-12 transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Únete a nuestro <br className="hidden md:block" /> laboratorio creativo.
          </h1>
          
          <p className={`text-base md:text-2xl text-gray-450 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            En la intersección del diseño y la hostelería. Buscamos mentes curiosas para liderar la próxima generación de marcas gastronómicas.
          </p>
        </div>

        {/* Categories Bar */}
        <div className={`flex flex-wrap justify-center gap-2 mb-16 md:mb-24 px-4 transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {['Todas', 'Diseño', 'Marketing', 'Estrategia', 'Cuentas'].map((cat, i) => (
            <button key={cat} className={`px-5 md:px-7 py-2.5 rounded-full text-[12px] md:text-[13px] font-semibold transition-all border ${i === 0 ? 'bg-black border-black text-white shadow-xl scale-105' : 'bg-white border-gray-100 text-gray-400 hover:border-black/20 hover:text-black'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Jobs List */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-0 mb-32 md:mb-48">
          {positions.map((job, index) => (
            <div 
              key={job.id}
              onClick={() => {
                setSelectedJob(job);
                setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
              className={`group border-b border-gray-100 py-10 md:py-16 cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:px-2 md:hover:px-6 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 120 + 400}ms` }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[9px] font-bold text-gray-300 border border-gray-100 px-2 py-0.5 rounded uppercase tracking-widest">{job.category}</span>
                    <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">• {job.type}</span>
                  </div>
                  <h3 className="text-2xl md:text-5xl font-medium text-black group-hover:translate-x-2 transition-transform duration-500 tracking-tight leading-tight">
                    {job.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-8 w-full md:w-auto md:justify-end">
                  <div className="flex flex-col text-xs md:text-sm text-gray-400 font-medium">
                    <span>{job.location}</span>
                  </div>
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:scale-110 group-hover:border-black transition-all duration-500 ml-auto md:ml-0">
                    <ArrowRight className="w-4 h-4 md:w-6 md:h-6 group-hover:-rotate-45 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Application Form Drawer-like Experience */}
        {selectedJob && (
          <div ref={formRef} className="max-w-4xl mx-auto px-6 md:px-12 pt-10 scroll-mt-40 mb-32 md:mb-48">
            <div className={`p-8 md:p-20 rounded-[2.5rem] md:rounded-[3.5rem] bg-[#FAFAFA] border border-gray-100 relative transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${selectedJob ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              
              {!isSubmitted ? (
                <>
                  <div className="text-left mb-16">
                    <div className="flex items-center gap-4 mb-6">
                         <button onClick={() => setSelectedJob(null)} className="text-[10px] font-bold text-gray-300 hover:text-black transition-colors uppercase tracking-[0.2em]">← Cancelar Envío</button>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-medium text-black mb-6 tracking-tighter leading-none">Envía tu <br /> candidatura.</h2>
                    <p className="text-gray-500 text-base md:text-lg">Posición: <span className="text-black font-semibold uppercase text-xs tracking-widest ml-2">{selectedJob.title}</span></p>
                  </div>

                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] block">Nombre Completo</label>
                      <input required name="nombre" type="text" className="w-full bg-transparent border-b border-gray-200 pb-4 focus:outline-none focus:border-black transition-all text-xl md:text-3xl font-medium placeholder:text-gray-100" placeholder="Tu nombre..." />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] block">Email de Contacto</label>
                      <input required name="email" type="email" className="w-full bg-transparent border-b border-gray-200 pb-4 focus:outline-none focus:border-black transition-all text-xl md:text-3xl font-medium placeholder:text-gray-100" placeholder="hola@tuemail.com" />
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] block">URL de LinkedIn o Portfolio</label>
                      <input required name="linkedin" type="url" className="w-full bg-transparent border-b border-gray-200 pb-4 focus:outline-none focus:border-black transition-all text-xl md:text-3xl font-medium placeholder:text-gray-100" placeholder="https://linkedin.com/in/..." />
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] block">Notas Adicionales / Presentación</label>
                      <textarea name="mensaje" rows={2} className="w-full bg-transparent border-b border-gray-200 pb-4 focus:outline-none focus:border-black transition-all text-xl md:text-3xl font-medium resize-none placeholder:text-gray-100" placeholder="Cuéntanos por qué encajas..."></textarea>
                    </div>

                    <div className="md:col-span-2 pt-8">
                      <button type="submit" className="w-full md:w-auto px-12 py-5 bg-black text-white rounded-full font-bold text-sm md:text-base shadow-2xl hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-95">
                        Enviar Candidatura
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-black rounded-full flex items-center justify-center mb-10 shadow-2xl">
                    <Check className="text-white w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-medium text-black mb-6 tracking-tighter">Recibido.</h2>
                  <p className="text-gray-500 text-base md:text-lg max-w-sm mx-auto leading-relaxed">Hemos recibido tus datos con éxito. Nuestro equipo te contactará si tu perfil encaja con nuestra visión.</p>
                  <button onClick={() => { setIsSubmitted(false); setSelectedJob(null); }} className="mt-12 text-black font-bold text-[10px] uppercase tracking-widest border border-gray-200 px-8 py-3 rounded-full hover:bg-gray-50 transition-all">Cerrar</button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Values - Black Theme Section */}
        <div className="bg-black text-white py-32 md:py-48 mt-0 w-full">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-4 items-start">
                  <div className="md:col-span-2 space-y-8">
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/20 text-[9px] font-bold uppercase tracking-widest text-white/50">
                        Cultura & Valores
                    </div>
                    <h4 className="text-4xl md:text-7xl font-medium tracking-tighter leading-[0.95] md:leading-[0.9]">Más allá del <br className="hidden md:block" /> status quo.</h4>
                    <p className="text-white/40 text-sm md:text-base max-w-sm leading-relaxed">
                        No somos una agencia convencional. Somos socios estratégicos de los mejores restaurantes de España, impulsando el sector mediante diseño y tecnología de vanguardia.
                    </p>
                  </div>
                  
                  <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                    <div className="space-y-4">
                        <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] block">01 / Innovación Real</span>
                        <h5 className="text-xl font-medium">Lideramos el cambio</h5>
                        <p className="text-white/40 text-sm leading-relaxed">No seguimos tendencias, las definimos. Implementamos IA y diseño de vanguardia integrado en el sector real.</p>
                    </div>
                    <div className="space-y-4">
                        <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] block">02 / Detalle Obsesivo</span>
                        <h5 className="text-xl font-medium">Artesanía digital</h5>
                        <p className="text-white/40 text-sm leading-relaxed">Creemos que la excelencia reside en el último 1% de detalle. Cada píxel y cada línea de texto importan.</p>
                    </div>
                    <div className="space-y-4">
                        <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] block">03 / Libertad & Rigor</span>
                        <h5 className="text-xl font-medium">Autonomía total</h5>
                        <p className="text-white/40 text-sm leading-relaxed">Sin micromanagement. Confiamos en el talento responsable que busca liderar su propia área con rigor.</p>
                    </div>
                    <div className="space-y-4">
                        <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] block">04 / Impacto Tangible</span>
                        <h5 className="text-xl font-medium">Resultados, no promesas</h5>
                        <p className="text-white/40 text-sm leading-relaxed">Verás resultados directos: negocios que se transforman y familias que prosperan gracias a tu visión estratégica.</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
