import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, ArrowRight, MessageSquare, Bot, BarChart3, Clock, Zap, Settings } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const IntegracionIAPage: React.FC = () => {
  const features = [
    { icon: <Bot className="w-5 h-5" />, title: 'Chatbot con IA para tu web', desc: 'Asistente automatizado que responde reservas, preguntas y menús del día sin intervención humana.' },
    { icon: <MessageSquare className="w-5 h-5" />, title: 'Automatización de WhatsApp', desc: 'Gestión automática de consultas y reservas por WhatsApp para que nunca pierdas un cliente.' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Análisis Predictivo', desc: 'IA que analiza tendencias de tu negocio para anticipar demanda y optimizar recursos.' },
    { icon: <Clock className="w-5 h-5" />, title: 'Respuestas 24/7', desc: 'Tu restaurante atiende consultas a cualquier hora sin coste adicional de personal.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Automatización de Marketing', desc: 'Campañas de email y redes sociales gestionadas automáticamente según el comportamiento del cliente.' },
    { icon: <Settings className="w-5 h-5" />, title: 'Integración Total', desc: 'Conectamos la IA con tu web, redes sociales, sistema de reservas y gestión operativa.' },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-[#FBF9F6] font-['Inter']">
        {/* Hero */}
        <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-xs font-semibold uppercase tracking-widest mb-8">
              <Cpu className="w-3.5 h-3.5" /> Inteligencia Artificial
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight text-black leading-[1.05] mb-8">
              Integración con IA<br />
              <span className="text-gray-400">para Restaurantes</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-12 max-w-2xl">
              Automatizamos los procesos repetitivos de tu restaurante con Inteligencia Artificial para que tú te centres en lo importante: la experiencia del comensal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/#contacto"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Quiero automatizar mi restaurante <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold border border-gray-200 hover:border-gray-400 transition-all"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-6 md:px-12 bg-black">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {[
              { num: '-60%', label: 'Reducción en tiempo de gestión de consultas' },
              { num: '24/7', label: 'Atención al cliente sin descanso' },
              { num: '+35%', label: 'Aumento en tasa de conversión de reservas' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-white mb-3">{s.num}</span>
                <span className="text-gray-400 text-sm max-w-[180px]">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-16 max-w-2xl">
              Tecnología de primer nivel al servicio de tu restaurante
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-white mb-6">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-16 text-center">
              Casos de uso reales en restauración
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  scenario: 'Un cliente escribe a las 23:00 preguntando si hay mesa disponible el sábado.',
                  without: 'Nadie responde hasta el día siguiente. El cliente reserva en otro restaurante.',
                  with: 'La IA responde al instante, consulta disponibilidad y confirma la reserva automáticamente.',
                },
                {
                  scenario: 'Un cliente pide información sobre alérgenos en el menú.',
                  without: 'El equipo pierde tiempo respondiendo mensajes repetitivos.',
                  with: 'La IA responde con información precisa sobre alérgenos en segundos, liberando a tu equipo.',
                },
              ].map((c, i) => (
                <div key={i} className="p-8 bg-[#FBF9F6] rounded-3xl border border-gray-100">
                  <p className="text-sm font-medium text-black mb-6 italic">"{c.scenario}"</p>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <span className="text-xs font-bold text-red-400 uppercase tracking-wider mt-0.5 whitespace-nowrap">Sin IA:</span>
                      <p className="text-sm text-gray-500">{c.without}</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-xs font-bold text-green-600 uppercase tracking-wider mt-0.5 whitespace-nowrap">Con IA:</span>
                      <p className="text-sm text-gray-600 font-medium">{c.with}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 md:px-12 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">
              Tu restaurante, funcionando solo mientras tú duermes
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              La IA no reemplaza a tu equipo. Lo multiplica. Libera a tus trabajadores de tareas repetitivas para que se enfoquen en dar la mejor experiencia.
            </p>
            <Link
              to="/#contacto"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Automatiza tu restaurante <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default IntegracionIAPage;
