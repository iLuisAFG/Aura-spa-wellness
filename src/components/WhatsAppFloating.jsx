import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloating() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip badge */}
      <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-50/95 backdrop-blur-md border border-sand-300 shadow-md text-xs font-medium text-charcoal-800 animate-float">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span>+52 1 55 7430 4843</span>
      </div>

      {/* Floating Button */}
      <a
        href="https://wa.me/5215574304843?text=Hola%20Aura%20Spa%20Wellness,%20me%20gustar%C3%ADa%20solicitar%20informes%20o%20agendar%20una%20sesi%C3%B3n."
        target="_blank"
        rel="noopener noreferrer"
        className="btn-tactile w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)] border-2 border-white focus:outline-none"
        aria-label="Contactar por WhatsApp a Aura Spa Wellness (+52 1 55 7430 4843)"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}
