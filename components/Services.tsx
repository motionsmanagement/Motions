
import React from 'react';
import { User, Users, HeartPulse, Crosshair } from 'lucide-react';

const serviceList = [
  {
    icon: <User className="w-6 h-6" />,
    title: "Individual Therapy",
    desc: "One-on-one sessions with licensed therapists tailored specifically to your personal challenges."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Group Session",
    desc: "Connect and heal with others in guided support groups that foster community and shared growth."
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: "Crisis Support",
    desc: "24/7 immediate help from trained crisis counselors for when you need support the most."
  },
  {
    icon: <Crosshair className="w-6 h-6" />,
    title: "Specialized Programs",
    desc: "Focused treatment pathways for anxiety, depression, trauma, and PTSD with proven results."
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
              <span>Our Services</span>
            </div>
            <h2 className="text-5xl md:text-7xl mb-8 leading-[1] text-[#2D241E]">
              Your Path <br /><span className="text-[#8C7B6B]">to Balance</span>
            </h2>
            <p className="text-lg text-[#2D241E]/60 max-w-md mb-12 leading-relaxed tracking-tight">
              We combine professional expertise and genuine empathy to help individuals navigate mental health with confidence and hope.
            </p>
            <div className="rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" 
                alt="Therapy session" 
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
                <h3 className="text-3xl mb-4 text-[#2D241E]">{service.title}</h3>
                <p className="text-[#2D241E]/50 mb-8 leading-relaxed tracking-tight text-sm">
                  {service.desc}
                </p>
                <button className="text-xs font-bold tracking-widest uppercase border-b border-[#2D241E]/20 pb-2 hover:border-[#8C7B6B] hover:text-[#8C7B6B] transition-all">
                  More Details
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
