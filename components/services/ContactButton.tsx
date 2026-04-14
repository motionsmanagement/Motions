import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ContactButtonProps {
  label: string;
  className?: string;
}

/**
 * Botón CTA que navega correctamente a #contacto tanto desde la
 * home (scroll suave) como desde cualquier sub-página de servicios
 * (navega a / y luego hace scroll).
 */
const ContactButton: React.FC<ContactButtonProps> = ({ label, className = '' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById('contacto');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: 'contacto' } });
      // El scroll se manejará en el componente principal o aquí con un mini-timeout
      setTimeout(() => {
        const el = document.getElementById('contacto');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const isWhite = className.includes('bg-white');

  return (
    <button
      onClick={handleClick}
      className={`group relative flex items-center justify-between gap-2.5 md:gap-4 pl-4 md:pl-6 pr-1 md:pr-1.5 py-1 md:py-1.5 rounded-full transition-all active:scale-[0.98] shadow-lg ${isWhite ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-neutral-900'} ${className}`}
    >
      <span className="font-semibold tracking-tight text-[11px] md:text-[15px] whitespace-nowrap">
        {label}
      </span>
      <div className={`w-7 h-7 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-transform group-hover:-rotate-45 shrink-0 ${isWhite ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <ArrowRight className="w-3.5 h-3.5 md:w-5 md:h-5" />
      </div>
    </button>
  );
};

export default ContactButton;
