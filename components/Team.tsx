
import React from 'react';

const therapists = [
  {
    img: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=600",
    name: "Ana García",
    role: "Especialista en Google My Business"
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
    name: "Laura Martínez",
    role: "Diseñadora Web Senior"
  },
  {
    img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&q=80&w=600",
    name: "Miguel Sánchez",
    role: "Estratega de Marketing Digital"
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-32 px-6 md:px-12 bg-[#FBF9F6]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-12">
          <div>
            <div className="flex items-center gap-2 text-[#4A3728] font-bold text-xs tracking-[0.2em] uppercase mb-6">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#4A3728]"></div>
              <span>Nuestro Equipo</span>
            </div>
            <h2 className="text-5xl md:text-7xl text-[#2D241E] leading-none">
              Conoce a Tu Equipo
            </h2>
          </div>
          <p className="max-w-md text-[#2D241E]/40 leading-relaxed text-sm tracking-tight">
            Expertos en marketing digital para restaurantes que combinan estrategia, creatividad y resultados medibles para hacer crecer tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {therapists.map((member, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="rounded-[3rem] overflow-hidden mb-8 aspect-[4/5] shadow-2xl transition-all duration-700 group-hover:-translate-y-2">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <h4 className="text-3xl mb-1 text-[#2D241E]">{member.name}</h4>
              <p className="text-[#8C7B6B] text-sm font-bold tracking-[0.1em] uppercase">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-20 gap-3">
          <div className="w-2 h-2 rounded-full bg-[#2D241E]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2D241E]/10"></div>
          <div className="w-2 h-2 rounded-full bg-[#2D241E]/10"></div>
        </div>
      </div>
    </section>
  );
};

export default Team;
