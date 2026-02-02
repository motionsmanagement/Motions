
import React from 'react';

const footerLinks = {
  Servicios: ["Google My Business", "Publicidad Google Maps", "Sitios Web", "Gestión de Reputación"],
  Empresa: ["Sobre Motions", "Nuestro Equipo", "Casos de Éxito", "Contacto"],
  Síguenos: ["Instagram", "TikTok", "Facebook", "LinkedIn"]
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 md:px-12 border-t border-[#F1EFEA]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-black mb-20">
          <img src="/motionsblack.png" alt="Motions Logo" className="h-10 w-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-24">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h5 className="text-black font-medium mb-8 text-sm uppercase tracking-widest">{title}</h5>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-black text-lg hover:text-gray-500 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 lg:col-span-1">
            <h5 className="text-black font-medium mb-8 text-sm uppercase tracking-widest invisible lg:visible">Contacto</h5>
            <address className="not-italic text-black text-lg leading-relaxed mb-6">
              Madrid, España
            </address>
            <p className="text-black text-lg">info@motions.es</p>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-6 text-black text-sm font-medium">
          <p>© Copyright 2025 Motions. Todos los Derechos Reservados</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-gray-600 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
