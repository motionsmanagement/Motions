import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowUpRight, MapPin, Clock, Briefcase, Users, Zap, Check } from 'lucide-react';
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
    id: 'pm-gastronomia',
    title: 'Project Manager (Sector Gastronómico)',
    category: 'Gestión',
    location: 'Híbrido - Madrid',
    type: 'Jornada Completa',
    description: 'Liderarás la transformación digital de restaurantes icónicos, coordinando entregas de sitios web premium y estrategias de SEO local.'
  },
  {
    id: 'ui-ux-designer',
    title: 'Diseñador UI/UX Senior',
    category: 'Diseño',
    location: 'Remoto / Madrid',
    type: 'Jornada Completa',
    description: 'Buscamos a alguien capaz de elevar la estética de las webs de nuestros clientes al nivel de las mejores marcas de lujo del mundo.'
  },
  {
    id: 'seo-local-expert',
    title: 'Especialista en SEO Local & GMB',
    category: 'Marketing',
    location: 'Remoto',
    type: 'Jornada Completa',
    description: 'Dominarás el posicionamiento en Google Maps para que nuestros clientes sean siempre la primera opción en su zona.'
  },
  {
    id: 'content-creator',
    title: 'Creador de Contenido Visual',
    category: 'Creatividad',
    location: 'Madrid / Barcelona',
    type: 'Project-based',
    description: 'Capturarás la esencia culinaria de los mejores restaurantes para campañas sociales de alto impacto.'
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
    <div className="bg-white min-h-screen font-['Inter']">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-24 flex flex-col items-center md:items-start text-center md:text-left">
          <div className={`inline-flex items-center bg-[#f3f4f1] border border-gray-200/50 px-4 py-1.5 rounded-full mb-8 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Estamos Contratando</span>
          </div>
          
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-black leading-[1] mb-8 transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Elevemos juntos el<br />
            mundo gastronómico.
          </h1>
          
          <p className={`text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            En Motions, fusionamos diseño de vanguardia y tecnología aplicada para transformar restaurantes en marcas inolvidables. Únete a nuestro equipo y redefine el futuro digital de la hostelería.
          </p>
        </div>

        {/* Categories Bar */}
        <div className={`flex flex-wrap gap-3 mb-16 border-b border-gray-100 pb-8 transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {['Todos', 'Diseño', 'Marketing', 'Gestión', 'Creatividad', 'Tecnología'].map((cat, i) => (
            <button key={cat} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-black text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Jobs Grid */}
        <div className="space-y-4 mb-32">
          {positions.map((job, index) => (
            <div 
              key={job.id}
              className={`group border-b border-gray-100 py-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{job.category}</span>
                    <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{job.type}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-medium text-black mb-4 group-hover:text-neutral-600 transition-colors tracking-tight">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
                    <div className="flex items-center gap-1.5 font-medium">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                  </div>
                  <p className="text-gray-500 leading-relaxed max-w-xl">
                    {job.description}
                  </p>
                </div>
                
                <button 
                  onClick={() => {
                    setSelectedJob(job);
                    setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }}
                  className="px-8 py-4 bg-black text-white rounded-full font-bold text-sm flex items-center gap-3 hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl shrink-0"
                >
                  Postular ahora
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Application Form */}
        {selectedJob && (
          <div ref={formRef} className="max-w-3xl mx-auto pt-10 scroll-mt-32">
            <div className={`bg-gray-50 rounded-[3rem] p-8 md:p-16 border border-gray-100 relative overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${selectedJob ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-medium text-black mb-4 tracking-tight">Forma parte del equipo</h2>
                    <p className="text-gray-500">Estás aplicando para: <span className="font-bold text-black">{selectedJob.title}</span></p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Nombre Completo</label>
                        <input required name="nombre" type="text" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-black transition-all text-sm font-medium" placeholder="Escribe tu nombre..." />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Profesional</label>
                        <input required name="email" type="email" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-black transition-all text-sm font-medium" placeholder="tu@email.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">LinkedIn / Portfolio</label>
                      <input required name="linkedin" type="url" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-black transition-all text-sm font-medium" placeholder="https://linkedin.com/in/..." />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">¿Por qué quieres unirte a Motions?</label>
                      <textarea name="mensaje" rows={4} className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-black transition-all text-sm font-medium resize-none" placeholder="Cuéntanos un poco sobre ti..."></textarea>
                    </div>

                    <div className="flex justify-center pt-4">
                      <button type="submit" className="px-10 py-4 bg-black text-white rounded-full font-bold text-sm shadow-2xl hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95">
                        Enviar Candidatura
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center text-center py-8">
                  <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-8 animate-bounce transition-all">
                    <Check className="text-white w-10 h-10" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-black mb-4 tracking-tight">¡Candidatura Recibida!</h2>
                  <p className="text-gray-500 max-w-sm">Gracias por tu interés en Motions. Revisaremos tu perfil cuidadosamente y te contactaremos pronto si encajas con lo que buscamos.</p>
                  <button onClick={() => setSelectedJob(null)} className="mt-8 text-black font-bold text-sm border-b border-black pb-1 hover:opacity-60 transition-opacity">Volver a las ofertas</button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Why work with us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-40">
          <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col gap-6">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <h4 className="text-xl font-medium tracking-tight">Velocidad y Calidad</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Trabajamos con las últimas tecnologías en un entorno de alto rendimiento donde cada detalle cuenta.</p>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col gap-6">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <Users className="w-6 h-6 text-black" />
            </div>
            <h4 className="text-xl font-medium tracking-tight">Cultura Colaborativa</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Sin jerarquías rígidas. Valoramos la iniciativa, la creatividad y el sentido de propiedad absoluta.</p>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col gap-6">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <Briefcase className="w-6 h-6 text-black" />
            </div>
            <h4 className="text-xl font-medium tracking-tight">Impacto Real</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Verás resultados tangibles: negocios que crecen y restaurantes que se transforman gracias a tu trabajo.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
