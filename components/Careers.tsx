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
  salary?: string;
}

const positions: JobPosition[] = [
  {
    id: 'account-manager',
    title: 'Account Manager (Especialista en Hostelería)',
    category: 'Ventas y Relaciones',
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
    title: 'Senior UI/Visual Designer',
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
    type: 'Project-based',
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
    <div className="bg-white min-h-screen font-['Inter'] selection:bg-black selection:text-white">
      <Navbar />
      
      <main className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Hero Section - Apple Like Minimalist */}
        <div className="mb-32 text-center">
          <div className={`inline-flex items-center bg-gray-50 border border-gray-200 px-4 py-1.5 rounded-full mb-8 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse mr-2" />
            <span className="text-[10px] font-bold text-black uppercase tracking-[0.2em]">Oportunidades Abiertas</span>
          </div>
          
          <h1 className={`text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-black leading-[0.9] mb-12 transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Join our <br /> creative lab.
          </h1>
          
          <p className={`text-lg md:text-2xl text-gray-450 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            En la intersección del diseño y la hostelería. Buscamos mentes curiosas para liderar la próxima generación de marcas gastronómicas.
          </p>
        </div>

        {/* Categories Bar - Minimalist */}
        <div className={`flex flex-wrap justify-center gap-2 mb-20 transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {['All Openings', 'Design', 'Marketing', 'Product', 'Sales'].map((cat, i) => (
            <button key={cat} className={`px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all border ${i === 0 ? 'bg-black border-black text-white' : 'bg-white border-gray-100 text-gray-400 hover:border-black/20 hover:text-black'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Jobs List - Clean & Professional */}
        <div className="max-w-5xl mx-auto space-y-0 mb-40">
          {positions.map((job, index) => (
            <div 
              key={job.id}
              onClick={() => {
                setSelectedJob(job);
                setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
              className={`group border-b border-gray-100 py-12 cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:px-4 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 120 + 400}ms` }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[9px] font-bold text-gray-300 border border-gray-100 px-2 py-0.5 rounded uppercase tracking-widest">{job.category}</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-medium text-black group-hover:translate-x-2 transition-transform duration-500 tracking-tight">
                    {job.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-8 md:text-right">
                  <div className="flex flex-col text-sm text-gray-400 font-medium">
                    <span>{job.location}</span>
                    <span className="text-[11px] opacity-60 uppercase tracking-tighter">{job.type}</span>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:scale-110 group-hover:border-black transition-all duration-500">
                    <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Application Form Drawer-like Experience */}
        {selectedJob && (
          <div ref={formRef} className="max-w-4xl mx-auto pt-10 scroll-mt-40 mb-32">
            <div className={` p-8 md:p-20 rounded-[3.5rem] bg-[#FAFAFA] border border-gray-100 relative transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${selectedJob ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              
              {!isSubmitted ? (
                <>
                  <div className="text-left mb-16">
                    <div className="flex items-center gap-4 mb-4">
                         <button onClick={() => setSelectedJob(null)} className="text-xs font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest">← Cancelar</button>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-medium text-black mb-6 tracking-tighter">Submit your <br /> application.</h2>
                    <p className="text-gray-500 text-lg">Position: <span className="text-black font-semibold uppercase text-sm tracking-tight">{selectedJob.title}</span></p>
                  </div>

                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] block">Full Name</label>
                      <input required name="nombre" type="text" className="w-full bg-transparent border-b border-gray-200 pb-4 focus:outline-none focus:border-black transition-all text-xl md:text-2xl font-medium placeholder:text-gray-200" placeholder="John Doe" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] block">Email Address</label>
                      <input required name="email" type="email" className="w-full bg-transparent border-b border-gray-200 pb-4 focus:outline-none focus:border-black transition-all text-xl md:text-2xl font-medium placeholder:text-gray-200" placeholder="hello@example.com" />
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] block">LinkedIn / Portfolio URL</label>
                      <input required name="linkedin" type="url" className="w-full bg-transparent border-b border-gray-200 pb-4 focus:outline-none focus:border-black transition-all text-xl md:text-2xl font-medium placeholder:text-gray-200" placeholder="https://..." />
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] block">Additional Notes</label>
                      <textarea name="mensaje" rows={3} className="w-full bg-transparent border-b border-gray-200 pb-4 focus:outline-none focus:border-black transition-all text-xl md:text-2xl font-medium resize-none placeholder:text-gray-200" placeholder="Briefly describe your fit..."></textarea>
                    </div>

                    <div className="md:col-span-2 pt-8">
                      <button type="submit" className="w-full md:w-auto px-12 py-5 bg-black text-white rounded-full font-bold text-base shadow-2xl hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-95">
                        Send Application
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mb-10 shadow-2xl">
                    <Check className="text-white w-10 h-10" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-medium text-black mb-6 tracking-tighter">Application Sent.</h2>
                  <p className="text-gray-500 text-lg max-w-md mx-auto leading-relaxed">We've received your data. Our recruitment team will review it and reach out if there's a potential match.</p>
                  <button onClick={() => { setIsSubmitted(false); setSelectedJob(null); }} className="mt-12 text-black font-bold text-sm bg-black/5 px-8 py-3 rounded-full hover:bg-black/10 transition-all">Close</button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Values - Apple High-End Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-1 pt-24 border-t border-gray-100">
          <div className="md:col-span-2 py-10 pr-10">
            <h4 className="text-3xl md:text-5xl font-medium tracking-tighter text-black leading-tight">Beyond the <br /> status quo.</h4>
          </div>
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-12 py-10">
            <div className="space-y-4">
                <span className="text-[10px] font-bold text-black uppercase tracking-widest">01 / Innovation</span>
                <p className="text-gray-500 text-[15px] leading-relaxed">No seguimos tendencias, las creamos. Buscamos implementar la última tecnología de IA en el mundo real.</p>
            </div>
            <div className="space-y-4">
                <span className="text-[10px] font-bold text-black uppercase tracking-widest">02 / Detail</span>
                <p className="text-gray-500 text-[15px] leading-relaxed">Creemos que la diferencia entre un buen proyecto y uno excelente reside en el último 1% de detalle.</p>
            </div>
            <div className="space-y-4">
                <span className="text-[10px] font-bold text-black uppercase tracking-widest">03 / Freedom</span>
                <p className="text-gray-500 text-[15px] leading-relaxed">Sin micromanagement. Confiamos plenamente en el talento que contratamos para liderar sus propias áreas.</p>
            </div>
            <div className="space-y-4">
                <span className="text-[10px] font-bold text-black uppercase tracking-widest">04 / Growth</span>
                <p className="text-gray-500 text-[15px] leading-relaxed">Motions es una lanzadera. Si tú creces, nosotros crecemos. Invertimos en tu aprendizaje constante.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
