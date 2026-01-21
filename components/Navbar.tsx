
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="liquid-glass rounded-full px-6 md:px-10 py-3 flex items-center justify-between w-full max-w-6xl shadow-2xl">
        <div className="flex items-center gap-2 text-white">
          <div className="w-6 h-6 flex flex-wrap gap-1">
            <div className="w-2.5 h-2.5 bg-white rounded-[2px]"></div>
            <div className="w-2.5 h-2.5 bg-white/60 rounded-[2px]"></div>
            <div className="w-2.5 h-2.5 bg-white/40 rounded-[2px]"></div>
            <div className="w-2.5 h-2.5 bg-white/80 rounded-[2px]"></div>
          </div>
          <span className="text-xl font-semibold tracking-tighter">Healance</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-white/80 font-medium text-sm">
          <a href="#services" className="hover:text-white transition-colors tracking-tight">Services</a>
          <a href="#how-it-works" className="hover:text-white transition-colors tracking-tight">How it Works</a>
          <a href="#team" className="hover:text-white transition-colors tracking-tight">Our Team</a>
          <a href="#contact" className="hover:text-white transition-colors tracking-tight">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:block px-5 py-2 rounded-full border border-white/20 text-white/90 text-sm font-medium hover:bg-white/10 transition-all tracking-tight">
            Book Session
          </button>
          <button className="px-6 py-2 rounded-full bg-white text-[#2D241E] text-sm font-semibold hover:bg-opacity-90 transition-all shadow-lg tracking-tight">
            Get Support
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
