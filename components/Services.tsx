
import React from 'react';
import { User, Users, HeartPulse, Crosshair } from 'lucide-react';

const serviceList = [
  {
    icon: <User className="w-6 h-6" />,
    title: "Google My Business",
    desc: "Configuración y optimización completa de tu perfil para aparecer primero en búsquedas locales y Google Maps."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Publicidad en Google Maps",
    desc: "Campañas estratégicas para atraer clientes hambrientos que buscan restaurantes cerca de ellos."
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: "Sitios Web para Restaurantes",
    desc: "Diseño web personalizado, optimizado para móviles, con menús atractivos y sistema de reservas integrado."
  },
  {
    icon: <Crosshair className="w-6 h-6" />,
    title: "Gestión de Reputación",
    desc: "Manejo profesional de reseñas y presencia online para construir confianza y atraer más comensales."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 text-[#4A3728] font-bold text-xs tracking-[0.2em] uppercase mb-6">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#4A3728]"></div>
              <span>Nuestros Servicios</span>
            </div>
            <h2 className="text-5xl md:text-7xl mb-8 leading-[1] text-black">
              Soluciones que Funcionan
            </h2>
            <p className="text-lg text-[#2D241E]/60 max-w-md mb-12 leading-relaxed tracking-tight">
              Google My Business y sitios web optimizados para atraer más clientes y aumentar tus ventas.
            </p>
            <div className="rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl relative group">
              <img
                src="/restaurant.jpg"
                alt="Restaurante exitoso"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/5"></div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 py-8">
            {serviceList.map((service, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="w-16 h-16 rounded-[1.5rem] bg-[#F6F3F0] flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-[#4A3728] group-hover:text-white group-hover:-translate-y-1">
                  <span className="text-[#4A3728] group-hover:text-white transition-colors">{service.icon}</span>
                </div>
                <h3 className="text-3xl mb-4 text-black">{service.title}</h3>
                <p className="text-[#2D241E]/50 mb-8 leading-relaxed tracking-tight text-sm">
                  {service.desc}
                </p>
                <button className="text-xs font-bold tracking-widest uppercase border-b border-[#2D241E]/20 pb-2 hover:border-[#8C7B6B] hover:text-[#8C7B6B] transition-all">
                  Más Información
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
