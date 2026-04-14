import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, MessageSquare, Bot, BarChart3, Clock, Settings, ChevronRight } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import useSEO from './useSEO';
import ContactButton from './ContactButton';

const IntegracionIAPage: React.FC = () => {
  useSEO({
    title: 'Integración con IA para Restaurantes | Motions',
    description: 'Automatizamos las reservas, atención al cliente y marketing de tu restaurante con Inteligencia Artificial. Chatbots, WhatsApp automático y análisis predictivo para hosteleria.',
    canonical: 'https://www.motions.es/servicios/integracion-ia',
  });

  const features = [
    { icon: <Bot className="w-5 h-5" />, title: 'Chatbot con IA para tu web', desc: 'Asistente automatizado que responde reservas, preguntas y menús del día sin intervención humana.' },
    { icon: <MessageSquare className="w-5 h-5" />, title: 'Automatización de WhatsApp', desc: 'Gestión automática de consultas y reservas por WhatsApp para que nunca pierdas un cliente.' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Análisis Predictivo', desc: 'IA que analiza tendencias de tu negocio para anticipar demanda y optimizar recursos.' },
    { icon: <Clock className="w-5 h-5" />, title: 'Respuestas 24/7', desc: 'Tu restaurante atiende consultas a cualquier hora sin coste adicional de personal.' },
    { icon: <Cpu className="w-5 h-5" />, title: 'Automatización de Marketing', desc: 'Campañas de email y redes sociales gestionadas automáticamente según el comportamiento del cliente.' },
    { icon: <Settings className="w-5 h-5" />, title: 'Integración Total', desc: 'Conectamos la IA con tu web, redes sociales, sistema de reservas y gestión operativa.' },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-[#FBF9F6] font-['Inter'] overflow-hidden">

        {/* Hero Section */}
        <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/5 mb-8`}>
                <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                <span className="text-[10px] font-bold text-black uppercase tracking-[0.2em]">Sistemas Autogestionados</span>
            </div>
            
            <h1 className="text-[2.75rem] sm:text-6xl md:text-[6.5rem] font-medium tracking-tight text-black leading-[0.95] mb-10 max-w-5xl">
              Inteligencia Artificial <br className="hidden md:block" />
              para Restaurantes
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-500/80 leading-relaxed mb-14 max-w-2xl font-light">
                Automatizamos los procesos repetitivos de tu negocio. Implementamos IA real para gestionar clientes, reservas y operaciones mientras tu equipo se enfoca en cocinar.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              <ContactButton
                label="Automatizar mi negocio"
                className="w-full sm:w-auto"
              />
              <Link to="/" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-black font-semibold border-b border-black/10 hover:border-black transition-all">
                Ver otros servicios <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-0 px-4 md:px-12 bg-[#0A0A0A] relative md:h-80 flex items-center">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative z-10">
            {[
              { num: '-60%', label: 'Reducción drástica en el tiempo dedicado a gestión de dudas.' },
              { num: '24/7', label: 'Monitorización y atención al cliente sin interrupciones.' },
              { num: '+35%', label: 'Incremento directo en la conversión de reservas digitales.' },
            ].map((s, i) => (
              <div key={i} className={`flex flex-col items-center md:items-start md:px-12 ${i !== 0 ? 'md:border-l md:border-white/10' : ''}`}>
                <span className="text-5xl md:text-7xl font-light text-white tracking-tighter mb-4">{s.num}</span>
                <p className="text-white/40 text-sm md:text-base font-light max-w-[200px] text-center md:text-left leading-snug lowercase first-letter:uppercase">
                    {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 md:py-40 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-20">
                <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black mb-6">
                    Mutiplica la capacidad de tu equipo humano.
                </h2>
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                    La IA no sustituye el talento; elimina la burocracia operativa para que el servicio en sala sea impecable.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <div key={i} className="group p-10 bg-white rounded-[2.5rem] border border-gray-100 hover:border-black/5 transition-all duration-500 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]">
                  <div className="w-12 h-12 bg-[#FBF9F6] rounded-2xl flex items-center justify-center text-black mb-8 group-hover:bg-black group-hover:text-white transition-colors duration-500">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-4 tracking-tight">{f.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed font-light">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section - More Premium */}
        <section className="py-24 md:py-40 px-6 md:px-12 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black mb-20 text-center">
              Casos de éxito operativos.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  scenario: 'Un cliente escribe a las 23:00 preguntando si hay mesa el sábado.',
                  without: 'Silencio. El cliente busca y reserva en tu competidor directo.',
                  with: 'Respuesta instantánea. La IA consulta disponibilidad real y formaliza el cobro de fianza o la reserva en 15 segundos.',
                },
                {
                  scenario: 'Tu equipo recibe 50 fotos de la misma carta por WhatsApp.',
                  without: 'Se pierde el hilo. El cliente se frustra por la tardanza.',
                  with: 'La IA extrae menús, precios y alérgenos. Responde con precisión quirúrgica y agenda la visita sin intervención humana.',
                },
              ].map((c, i) => (
                <div key={i} className="p-10 bg-[#FBF9F6] rounded-[3rem] border border-gray-100 flex flex-col justify-between h-full">
                  <p className="text-xl font-medium text-black mb-10 italic leading-relaxed text-balance">"{c.scenario}"</p>
                  <div className="space-y-6">
                    <div className="flex gap-4 p-5 bg-red-50/50 rounded-2xl border border-red-100/50">
                      <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-1">Sin IA</span>
                      <p className="text-sm text-red-700/80 leading-relaxed font-light">{c.without}</p>
                    </div>
                    <div className="flex gap-4 p-5 bg-green-50/50 rounded-2xl border border-green-100/50">
                      <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest mt-1">Con IA</span>
                      <p className="text-sm text-green-800 leading-relaxed font-medium">{c.with}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium CTA */}
        <section className="py-24 px-6 md:px-12 bg-[#FBF9F6]">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#0A0A0A] rounded-[3rem] p-8 md:p-24 relative overflow-hidden group">
                <div className="relative z-10 max-w-3xl">
                    <h2 className="text-4xl md:text-6xl font-medium text-white mb-8 tracking-tight leading-[1.05]">
                        El futuro de tu local empieza hoy.
                    </h2>
                    <p className="text-white/40 text-lg md:text-xl mb-12 font-light max-w-2xl leading-relaxed">
                        No esperes a que la competencia se automatice primero. Toma ventaja con sistemas de IA de próxima generación.
                    </p>
                    <ContactButton
                        label="Activar mi Asistente IA"
                        className="bg-white text-black hover:bg-gray-100"
                    />
                </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default IntegracionIAPage;
