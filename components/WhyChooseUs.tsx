
import React from 'react';
import { Brain, Award, Clock, CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Personalized Care",
    desc: "Custom treatment plans tailored to your unique goals."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Expert Therapist",
    desc: "Licensed professionals specializing in your mental health needs."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Flexible Access",
    desc: "Insurance-accepted with online/in-person scheduling options."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Proven Support",
    desc: "89% success rate with 24/7 crisis support available."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#FBF9F6]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 text-[#4A3728] font-medium mb-6">
              <div className="w-2 h-2 rotate-45 bg-[#4A3728]"></div>
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-medium text-[#2D241E] mb-8 leading-tight">
              Trusted Support <span className="text-[#8C7B6B]">for</span><br />
              Every Journey
            </h2>
            <p className="text-lg text-[#2D241E]/60 mb-10 leading-relaxed max-w-lg">
              With secure sessions, accredited professionals, and evidence-based approaches, Healance is here to guide you through challenges, nurture growth, and empower you to find balance and lasting well-being.
            </p>
            <button className="px-10 py-4 rounded-full bg-[#3D2C24] text-white font-medium hover:bg-[#2D241E] transition-colors">
              Learn More
            </button>
          </div>
          <div className="lg:w-1/2">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/id/64/1000/1000" 
                alt="Supportive therapist" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-black/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="text-[#4A3728] mb-6">{benefit.icon}</div>
              <h4 className="text-xl font-medium text-[#2D241E] mb-3">{benefit.title}</h4>
              <p className="text-[#2D241E]/60 leading-relaxed text-sm">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
