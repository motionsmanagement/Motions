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

        {/* Categories Bar */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 md:mb-16 px-4 transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {['Todas', 'Diseño', 'Marketing', 'Estrategia', 'Cuentas'].map((cat, i) => (
            <button key={cat} className={`px-5 md:px-7 py-2.5 rounded-full text-[12px] md:text-[13px] font-semibold transition-all border ${i === 0 ? 'bg-black border-black text-white shadow-lg' : 'bg-white border-gray-100 text-gray-400 hover:border-black/20 hover:text-black'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Jobs List */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-0 mb-32 md:mb-48">
          {positions.map((job, index) => (
            <div 
              key={job.id}
              onClick={() => {
                setSelectedJob(job);
                setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
              className={`group border-b border-gray-100 py-8 md:py-12 cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:px-2 md:hover:px-4 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 120 + 400}ms` }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[9px] font-bold text-gray-300 border border-gray-100 px-2 py-0.5 rounded uppercase tracking-widest">{job.category}</span>
                    <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">• {job.type}</span>
                  </div>
                  <h3 className="text-xl md:text-3xl font-medium text-black group-hover:translate-x-2 transition-transform duration-500 tracking-tight leading-tight">
                    {job.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-6 w-full md:w-auto md:justify-end">
                  <div className="flex flex-col text-xs md:text-sm text-gray-400 font-medium whitespace-nowrap">
                    <span>{job.location}</span>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:scale-110 group-hover:border-black transition-all duration-500 ml-auto md:ml-0">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:-rotate-45 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Application Form Drawer-like Experience */}
        {selectedJob && (
          <div ref={formRef} className="max-w-4xl mx-auto px-6 md:px-12 pt-10 scroll-mt-40 mb-32 md:mb-48">
            <div className={`p-8 md:p-16 rounded-[2rem] md:rounded-[2.5rem] bg-[#FAFAFA] border border-gray-100 relative transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${selectedJob ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              
              {!isSubmitted ? (
                <>
                  <div className="text-left mb-12">
                    <div className="flex items-center gap-4 mb-6">
                         <button onClick={() => setSelectedJob(null)} className="text-[10px] font-bold text-gray-300 hover:text-black transition-colors uppercase tracking-[0.2em]">← Cancelar Envío</button>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium text-black mb-6 tracking-tighter leading-none">Envía tu <br /> candidatura.</h2>
                    <p className="text-gray-500 text-sm md:text-base">Posición: <span className="text-black font-semibold uppercase text-[10px] tracking-widest ml-2">{selectedJob.title}</span></p>
                  </div>

                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] block">Nombre Completo</label>
                      <input required name="nombre" type="text" className="w-full bg-transparent border-b border-gray-200 pb-3 focus:outline-none focus:border-black transition-all text-lg md:text-xl font-medium placeholder:text-gray-100" placeholder="Tu nombre..." />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] block">Email de Contacto</label>
                      <input required name="email" type="email" className="w-full bg-transparent border-b border-gray-200 pb-3 focus:outline-none focus:border-black transition-all text-lg md:text-xl font-medium placeholder:text-gray-100" placeholder="hola@tuemail.com" />
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] block">URL de LinkedIn o Portfolio</label>
                      <input required name="linkedin" type="url" className="w-full bg-transparent border-b border-gray-200 pb-3 focus:outline-none focus:border-black transition-all text-lg md:text-xl font-medium placeholder:text-gray-100" placeholder="https://linkedin.com/in/..." />
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] block">Notas Adicionales / Presentación</label>
                      <textarea name="mensaje" rows={2} className="w-full bg-transparent border-b border-gray-200 pb-3 focus:outline-none focus:border-black transition-all text-lg md:text-xl font-medium resize-none placeholder:text-gray-100" placeholder="Cuéntanos por qué encajas..."></textarea>
                    </div>

                    <div className="md:col-span-2 pt-6">
                      <button type="submit" className="w-full md:w-auto px-10 py-4 bg-black text-white rounded-full font-bold text-sm shadow-2xl hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-95">
                        Enviar Candidatura
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center text-center py-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-black rounded-full flex items-center justify-center mb-8 shadow-2xl">
                    <Check className="text-white w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-medium text-black mb-4 tracking-tighter leading-none">Recibido.</h2>
                  <p className="text-gray-500 text-sm md:text-base max-w-sm mx-auto leading-relaxed">Hemos recibido tus datos con éxito. Nuestro equipo te contactará pronto.</p>
                  <button onClick={() => { setIsSubmitted(false); setSelectedJob(null); }} className="mt-8 text-black font-bold text-[10px] uppercase tracking-widest border border-gray-200 px-6 py-2.5 rounded-full hover:bg-gray-50 transition-all">Cerrar</button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>


      <Footer />
    </div>
  );
};

export default Careers;
