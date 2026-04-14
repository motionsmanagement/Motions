import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, MessageSquare, Bot, BarChart3, Clock, Settings } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import useSEO from './useSEO';
import ContactButton from './ContactButton';

const IntegracionIAPage: React.FC = () => {
  useSEO({
    title: 'Integración con IA para Restaurantes | Motions',
    description: 'Automatizamos las reservas, atención al cliente y marketing de tu restaurante con Inteligencia Artificial. Chatbots y automatización para hosteleria.',
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
      <main className="bg-[#F8F9FA] font-['Inter'] overflow-hidden">

        {/* Hero Section */}
        <section className="relative pt-32 md:pt-44 pb-16 md:pb-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-8 pl-3.5 pr-2.5 py-2 bg-[#EDEDED] rounded-full inline-flex items-center justify-center border border-black/[0.03]">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em] leading-none">
                  Sistemas Autogestionados
                </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.1] mb-8 max-w-4xl">
              Inteligencia Artificial <br className="hidden md:block" />
              para Restaurantes
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl font-light px-4 md:px-0">
                Automatizamos los procesos repetitivos de tu negocio. Implementamos IA real para gestionar clientes, reservas y operaciones mientras tu equipo se enfoca en cocinar.
            </p>

            <div className="flex flex-row items-center gap-3 w-full justify-center md:justify-start px-4 md:px-0">
              <ContactButton label="Automatizar local" />
              <Link 
                to="/" 
                className="px-5 py-3 md:px-7 md:py-4 bg-black/[0.03] border border-black/5 text-gray-700 rounded-full font-semibold hover:bg-black/[0.06] transition-all text-[11px] md:text-base flex items-center justify-center whitespace-nowrap"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section - Centered */}
        <section className="py-12 md:py-20 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 relative z-10">
            {[
              { num: '-60%', label: 'Reducción drástica en el tiempo dedicado a gestión de dudas.' },
              { num: '24/7', label: 'Monitorización y atención al cliente sin interrupciones.' },
              { num: '+35%', label: 'Incremento directo en la conversión de reservas digitales.' },
            ].map((s, i) => (
              <div key={i} className={`flex flex-col items-center justify-center md:px-12 ${i !== 0 ? 'md:border-l md:border-white/10' : ''}`}>
                <span className="text-4xl md:text-6xl font-light text-white tracking-tighter mb-2">{s.num}</span>
                <p className="text-white/60 text-[13px] md:text-base font-light max-w-[220px] text-center">
                    {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-16 px-4 md:px-0">
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-6">
                    Multiplica la capacidad de tu equipo humano.
                </h2>
                <p className="text-gray-600 text-base md:text-lg font-light">
                    La IA no sustituye el talento; elimina la burocracia operativa para que el servicio en sala sea impecable.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="group p-8 bg-white rounded-[2rem] border border-gray-100 transition-all duration-300">
                  <div className="w-11 h-11 bg-black rounded-xl flex items-center justify-center text-white mb-6">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-0">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-16 text-center">
              Casos de éxito operativos.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  scenario: 'Un cliente escribe a las 23:00 preguntando si hay mesa el sábado.',
                  without: 'Silencio. El cliente busca y reserva en tu competidor directo.',
                  with: 'Respuesta instantánea. La IA consulta disponibilidad real y formaliza la reserva en 15 segundos.',
                },
                {
                  scenario: 'Tu equipo recibe 50 fotos de la misma carta por WhatsApp.',
                  without: 'Se pierde el hilo. El cliente se frustra por la tardanza.',
                  with: 'La IA extrae menús y alérgenos. Responde con precisión y agenda la visita sin intervención humana.',
                },
              ].map((c, i) => (
                <div key={i} className="p-8 md:p-10 bg-[#F8F9FA] rounded-[2.5rem] border border-gray-100 flex flex-col justify-between h-full">
                  <p className="text-lg md:text-xl font-medium text-black mb-10 italic leading-relaxed font-light px-2">"{c.scenario}"</p>
                  <div className="space-y-4">
                    <div className="flex gap-4 p-5 bg-white/50 rounded-2xl border border-gray-100">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 shrink-0">Sin IA</span>
                      <p className="text-sm text-gray-400 leading-relaxed font-light">{c.without}</p>
                    </div>
                    <div className="flex gap-4 p-5 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl border border-gray-200">
                      <span className="text-[10px] font-bold text-black uppercase tracking-widest mt-1 shrink-0">Con IA</span>
                      <p className="text-sm text-black leading-relaxed font-medium">{c.with}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium CTA */}
        <section className="pb-20 md:pb-32 px-6 md:px-12 mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
                <div className="relative z-10 max-w-3xl flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight leading-[1.2]">
                        El futuro de tu local empieza hoy.
                    </h2>
                    <p className="text-white/60 text-sm md:text-lg mb-10 font-light max-w-2xl leading-relaxed">
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
