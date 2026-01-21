
import React from 'react';

const footerLinks = {
  Service: ["Individual Therapy", "Group Session", "Crisis Support", "Specialized Program"],
  Company: ["About Healance", "Careers", "Our Team", "Certificates"],
  News: ["Stories", "Case Study", "Newsletter"],
  Connect: ["Instagram", "Tiktok", "Facebook", "LinkedIn"]
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 md:px-12 border-t border-[#F1EFEA]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-[#2D241E] mb-20">
          <div className="w-8 h-8 flex flex-wrap gap-1">
            <div className="w-3.5 h-3.5 bg-[#4A3728] rounded-sm"></div>
            <div className="w-3.5 h-3.5 bg-[#4A3728]/60 rounded-sm"></div>
            <div className="w-3.5 h-3.5 bg-[#4A3728]/40 rounded-sm"></div>
            <div className="w-3.5 h-3.5 bg-[#4A3728]/80 rounded-sm"></div>
          </div>
          <span className="text-2xl font-semibold tracking-tight">Healance</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-24">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h5 className="text-[#2D241E]/30 font-medium mb-8 text-sm uppercase tracking-widest">{title}</h5>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#2D241E] text-lg hover:text-[#8C7B6B] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 lg:col-span-1">
            <h5 className="text-[#2D241E]/30 font-medium mb-8 text-sm uppercase tracking-widest invisible lg:visible">Contact</h5>
            <address className="not-italic text-[#2D241E] text-lg leading-relaxed mb-6">
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </address>
            <p className="text-[#2D241E] text-lg">(480) 555-0103</p>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[#2D241E]/30 text-sm font-medium">
          <p>© Copyright 2025 Healance. All Rights Reserved</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-[#2D241E] transition-colors">Privacy & Policy</a>
            <a href="#" className="hover:text-[#2D241E] transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
