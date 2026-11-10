import React, { useState } from 'react';
import { X, Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-900/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-charcoal-900 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-sand-300/20 z-10">
        
        {/* Top bar */}
        <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-between z-20 bg-gradient-to-b from-charcoal-900/80 to-transparent">
          <div className="flex items-center gap-2 text-cream-100 text-xs tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-roseDust-300" />
            <span>Atmósfera Aura Spa Wellness</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-full bg-charcoal-800/80 text-cream-100 hover:text-white hover:bg-charcoal-700 transition-colors"
              title={isMuted ? 'Activar sonido' : 'Silenciar'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-charcoal-800/80 text-cream-100 hover:text-white hover:bg-charcoal-700 transition-colors"
              title="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video / Visual Container */}
        <div className="relative aspect-video w-full bg-charcoal-950 flex items-center justify-center overflow-hidden">
          {/* Ambient Video or High-fidelity Atmospheric Looping Visual */}
          <iframe
            className="w-full h-full object-cover pointer-events-auto"
            src={`https://www.youtube-nocookie.com/embed/jfKfPfyJRdk?autoplay=1&mute=${isMuted ? '1' : '0'}&controls=1&loop=1&playlist=jfKfPfyJRdk`}
            title="Aura Spa Ambient Relaxation Experience"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Caption bar */}
        <div className="p-4 sm:p-5 bg-charcoal-900 text-cream-200 text-xs sm:text-sm font-light flex items-center justify-between border-t border-charcoal-800">
          <p>
            Música terapéutica relajante y frecuencias binaurales utilizadas en nuestras cabinas de masaje.
          </p>
          <span className="text-[11px] uppercase tracking-wider text-sand-400 font-mono">
            432 Hz Calm Mode
          </span>
        </div>

      </div>
    </div>
  );
}
