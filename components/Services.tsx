import React, { useState } from 'react';
import { User, Users, HeartPulse, Crosshair } from 'lucide-react';

const serviceList = [
  {
    icon: <User className="w-6 h-6" />,
    title: "Google My Business",
    desc: "Configuración y optimización completa de tu perfil para aparecer primero en búsquedas locales y Google Maps. Llenamos tu ficha con información estratégica que convierte visitas en clientes.",
    image: "/restaurant.jpg"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Publicidad en Google Maps",
    desc: "Campañas estratégicas de anuncios locales para atraer clientes hambrientos que buscan restaurantes cerca de ellos. Maximizamos el presupuesto para que tu local sea la opción número uno.",
    image: "/food.jpg"
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: "Sitios Web para Restaurantes",
    desc: "Diseño web personalizado, optimizado para móviles y con sistema de reservas. Creamos una presencia digital que refleja la esencia de tu cocina y facilita la reserva a tus clientes.",
    image: "/steak.jpg"
  },
  {
    icon: <Crosshair className="w-6 h-6" />,
    title: "Gestión de Reputación",
    desc: "Manejo profesional de reseñas y presencia online. Construimos la confianza necesaria para que nuevos comensales elijan tu mesa frente a la competencia.",
    image: "/salmon.jpg"
  }
];

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left Column: List */}
          <div className="lg:w-[45%]">

            <h2 className="text-4xl md:text-5xl font-medium text-black leading-[1.1] mb-6 tracking-tighter">
              Soluciones expertas<br />para tu restaurante
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-sm">
              Potenciamos tu visibilidad digital para que te centres en lo que mejor sabes hacer: cocinar y dar un gran servicio.
            </p>

            <div className="flex flex-col border-t border-black/10">
              {serviceList.map((service, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`py-5 text-left border-b border-black/10 transition-all duration-300 group ${activeTab === idx ? 'text-black' : 'text-black/30'
                    }`}
                >
                  <span className={`text-lg md:text-xl font-medium tracking-tight ${activeTab === idx ? '' : 'hover:text-black/50'}`}>
                    {service.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Content */}
          <div className="lg:w-[55%]">
            <div className="rounded-[2rem] overflow-hidden aspect-video mb-6 border border-black/5">
              <img
                src={serviceList[activeTab].image}
                alt={serviceList[activeTab].title}
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>

            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-medium text-black mb-4 tracking-tighter">
                {serviceList[activeTab].title}
              </h3>
              <p className="text-base text-gray-500 leading-relaxed tracking-tight mb-8">
                {serviceList[activeTab].desc}
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 rounded-full liquid-glass-btn text-sm font-bold hover:scale-105 transition-all shadow-lg">
                  Más Información
                </button>
                <button className="px-6 py-3 rounded-full border border-black/20 text-black text-sm font-bold hover:bg-black/5 transition-all">
                  Llamar ahora
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
