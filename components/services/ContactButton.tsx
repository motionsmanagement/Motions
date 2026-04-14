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
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-3 ${className}`}
    >
      {label} <ArrowRight className="w-4 h-4 flex-shrink-0" />
    </button>
  );
};

export default ContactButton;
