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
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('contacto');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 400);
    }
  };

  const isWhite = className.includes('bg-white');

  return (
    <button
      onClick={handleClick}
      className={`group relative flex items-center justify-between gap-4 pl-6 pr-1.5 py-1.5 rounded-full transition-all active:scale-[0.98] shadow-lg ${isWhite ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-neutral-900'} ${className}`}
    >
      <span className="font-semibold tracking-tight text-[13px] md:text-[15px]">
        {label}
      </span>
      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12 shrink-0 ${isWhite ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <img src="/anagram2.png" alt="" className={`w-4 h-4 md:w-5 md:h-5 object-contain ${isWhite ? 'brightness-0 invert' : ''}`} />
      </div>
    </button>
  );
};

export default ContactButton;
