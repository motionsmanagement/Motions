
import React from 'react';
import { Brain, Award, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1920" 
          alt="Serene landscape" 
          className="w-full h-full object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>

      <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl mb-12">
          <h1 className="text-5xl md:text-[5.5rem] leading-[1.05] text-white mb-6">
            A Safe Space <span className="text-white/40">for</span><br />
            Healing and Growth
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-0 mt-16">
            <p className="text-white/80 text-lg md:text-xl max-w-md leading-relaxed tracking-tight">
              A space dedicated to your emotional well-being, guided by licensed professionals, offering the support you deserve.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <button className="w-full lg:w-auto px-12 py-5 rounded-full bg-white text-[#2D241E] text-lg font-bold hover:scale-105 transition-transform shadow-[0_20px_50px_rgba(255,255,255,0.1)] tracking-tight">
            Get Started Today
          </button>

          <div className="liquid-glass-dark rounded-[2rem] p-5 flex flex-wrap md:flex-nowrap gap-6 md:gap-10 w-full lg:w-auto">
            <div className="flex items-center gap-4 text-white p-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                < Brain className="w-5 h-5 text-white/80" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-tight">Personalized guidance</p>
                <p className="text-xs text-white/40">for your unique journey</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10"></div>
            <div className="flex items-center gap-4 text-white p-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-white/80" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-tight">Licensed professionals</p>
                <p className="text-xs text-white/40">recognized certifications</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10"></div>
            <div className="flex items-center gap-4 text-white p-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-white/80" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-tight">Proven support</p>
                <p className="text-xs text-white/40">growing global community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
