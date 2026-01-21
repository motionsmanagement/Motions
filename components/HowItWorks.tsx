
import React from 'react';
import { ChevronRight } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Free Consultation",
    desc: "Schedule a no-pressure consultation to discuss your needs and concerns with our intake specialist."
  },
  {
    num: "02",
    title: "Assessment & Intake",
    desc: "We'll review your goals and needs to match you with the right therapist and personalize your care plan."
  },
  {
    num: "03",
    title: "Get Matched",
    desc: "We'll connect you with a licensed therapist based on your assessment, with options for online or in-person sessions."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="flex items-center gap-2 text-[#2D241E] font-medium mb-4 md:mb-0">
            <span className="text-[10px]">◆</span>
            <span className="text-sm tracking-tight">How it Works</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium leading-tight text-right md:max-w-2xl">
            <span className="text-[#A3A3A3]">We Guide You Through Your</span><br />
            <span className="text-[#4D2C1A]">Mental Health Recovery</span>
          </h2>
        </div>

        {/* Image and Cards Container */}
        <div className="relative rounded-[2.5rem] overflow-hidden min-h-[600px] flex flex-col justify-center p-8 md:p-12">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1920" 
              alt="Misty lake with boat" 
              className="w-full h-full object-cover"
            />
            {/* Darker boat foreground mockup via overlay or just use the right image */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Cards Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[1.5rem] p-8 flex flex-col justify-between min-h-[420px] transition-all hover:bg-white/15"
              >
                <div>
                  <span className="text-3xl font-light text-white/40 block mb-6">{step.num}</span>
                  <h3 className="text-3xl font-semibold text-white leading-tight">{step.title}</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed max-w-[240px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow Navigation */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
            <ChevronRight className="w-8 h-8 text-white/50 cursor-pointer hover:text-white transition-colors" />
          </div>

          {/* Centered Button at bottom of image area */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            <button className="px-10 py-3 bg-white text-[#2D241E] rounded-full font-semibold text-sm shadow-xl hover:scale-105 transition-transform">
              Book Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
