
import React from 'react';
import { User, Users, HeartPulse, Crosshair, ArrowUpRight } from 'lucide-react';

const serviceList = [
  {
    icon: <User className="w-6 h-6" />,
    title: "Google My Business",
    desc: "Configuración y optimización completa de tu perfil para aparecer primero en búsquedas locales y Google Maps.",
    color: "bg-white",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Publicidad en Google Maps",
    desc: "Campañas estratégicas para atraer clientes hambrientos que buscan restaurantes cerca de ellos.",
    color: "bg-white",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: "Sitios Web para Restaurantes",
    desc: "Diseño web personalizado, optimizado para móviles y con sistema de reservas.",
    color: "bg-[#F6F3F0]",
    span: "md:col-span-2 md:row-span-1"
  },
  {
    icon: <Crosshair className="w-6 h-6" />,
    title: "Gestión de Reputación",
    desc: "Manejo de reseñas para construir confianza.",
    color: "bg-[#2D241E] text-white",
    span: "md:col-span-1 md:row-span-1"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-[#F1EFEA]/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[180px]">

          {/* Main Title Card */}
          <div className="md:col-span-2 md:row-span-2 bg-[#F6F3F0] rounded-[2.5rem] p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#4A3728]/40 font-bold text-[10px] tracking-[0.2em] uppercase mb-8">
                <div className="w-1 h-1 rotate-45 bg-[#4A3728]/40"></div>
                <span>Nuestros Servicios</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-medium leading-[0.9] text-black tracking-tighter mb-8">
                Soluciones<br />que funcionan
              </h2>
            </div>
            <p className="text-lg text-[#2D241E]/50 max-w-sm leading-tight tracking-tight">
              Google My Business y sitios web optimizados para atraer más clientes y aumentar tus ventas hoy mismo.
            </p>
          </div>

          {/* Service Cards */}
          {serviceList.map((service, idx) => (
            <div
              key={idx}
              className={`${service.span} ${service.color} rounded-[2.5rem] p-8 flex flex-col justify-between group cursor-pointer hover:shadow-2xl transition-all duration-500 border border-black/5`}
            >
              <div className="flex justify-between items-start">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${service.color.includes('text-white') ? 'bg-white/10' : 'bg-black/5'}`}>
                  {service.icon}
                </div>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-medium leading-tight mb-3 tracking-tighter">
                  {service.title}
                </h3>
                <p className={`text-sm leading-snug tracking-tight ${service.color.includes('text-white') ? 'text-white/40' : 'text-[#2D241E]/40'}`}>
                  {service.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Decorative Image Card (Placeholder for user) */}
          <div className="md:row-span-1 bg-white rounded-[2.5rem] overflow-hidden group border border-black/5">
            <img
              src="/restaurant.jpg"
              className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              alt="Restaurant detail"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
