import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Sparkles, ZoomIn } from 'lucide-react';

export default function FlyerModal({ isOpen, onClose }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const flyers = [
    {
      title: 'Menú Oficial 1: Masajes Relajantes & Cuello',
      src: '/images/flyers/flyer-masajes-1.jpg',
      category: 'Masajes',
    },
    {
      title: 'Menú Oficial 2: Descontracturantes, Piernas & Ventosas',
      src: '/images/flyers/flyer-masajes-2.jpg',
      category: 'Masajes Terapéuticos',
    },
    {
      title: 'Menú Oficial 3: Cuidados de la Piel & Faciales',
      src: '/images/flyers/flyer-faciales.jpg',
      category: 'Faciales & Post-Operatorio',
    },
    {
      title: 'Menú Oficial 4: Paquete Reductivo Premium ($3,500)',
      src: '/images/flyers/flyer-reductivos-premium.jpg',
      category: 'Reductivos Abdomen & Laterales',
    },
    {
      title: 'Menú Oficial 5: Paquete Reductivo Básico ($1,299)',
      src: '/images/flyers/flyer-reductivos-basico.jpg',
      category: 'Reductivos Abdomen',
    },
  ];

  if (!isOpen) return null;

  const currentFlyer = flyers[currentIdx];

  const prev = () => {
    setCurrentIdx((prev) => (prev === 0 ? flyers.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIdx((prev) => (prev === flyers.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-900/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-cream-50 w-full max-w-4xl max-h-[92vh] rounded-[28px] shadow-2xl border border-sand-300 flex flex-col overflow-hidden z-10">
        
        {/* Header */}
        <div className="bg-sand-100 px-6 py-4 border-b border-sand-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sage-700" />
            <div>
              <h3 className="font-serif text-base sm:text-lg font-medium text-charcoal-900">
                {currentFlyer.title}
              </h3>
              <p className="text-xs text-charcoal-500 font-light">
                Volante original de Aura Spa Wellness • Coyoacán, CDMX
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={currentFlyer.src}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-sand-200 text-charcoal-600 transition-colors"
              title="Descargar o abrir en pestaña nueva"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-sand-200 text-charcoal-600 transition-colors"
              title="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Preview Container */}
        <div className="relative flex-1 bg-charcoal-950 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
          <img
            src={currentFlyer.src}
            alt={currentFlyer.title}
            className="max-h-[70vh] w-auto object-contain rounded-xl shadow-lg transition-transform duration-300"
          />

          {/* Left / Right Nav Arrows */}
          <button
            onClick={prev}
            className="btn-tactile absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream-50/90 hover:bg-white text-charcoal-900 flex items-center justify-center shadow-md"
            aria-label="Volante anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="btn-tactile absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream-50/90 hover:bg-white text-charcoal-900 flex items-center justify-center shadow-md"
            aria-label="Volante siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnail Selector Bar */}
        <div className="bg-sand-100 p-3 flex items-center justify-center gap-2 overflow-x-auto border-t border-sand-200">
          {flyers.map((flyer, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                currentIdx === idx
                  ? 'border-sage-700 ring-2 ring-sage-600/30 scale-105'
                  : 'border-sand-300 opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={flyer.src}
                alt={flyer.title}
                className="w-12 h-14 object-cover"
              />
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
