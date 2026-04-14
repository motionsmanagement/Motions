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

  return (
    <button
      onClick={handleClick}
      className={`group relative flex items-center justify-between gap-6 pl-8 pr-2.5 py-2.5 rounded-full bg-black text-white hover:bg-neutral-900 transition-all active:scale-[0.98] shadow-xl ${className}`}
    >
      <span className="font-semibold tracking-tight text-[15px] md:text-lg">
        {label}
      </span>
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-black transition-transform group-hover:rotate-12 shrink-0">
        <img src="/anagram2.png" alt="" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
      </div>
    </button>
  );
};

export default ContactButton;
