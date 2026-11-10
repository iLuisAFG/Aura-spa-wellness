import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Calendar } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth zoom scale based on scroll:
  // Starts at 1.05 and smoothly scales up to ~1.22 as the user scrolls down,
  // and smoothly zooms back out to 1.05 when scrolling back up.
  const zoomScale = Math.min(1.25, 1.04 + scrollY * 0.00035);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with smooth scroll-based zoom effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85"
          alt="Aura Spa Wellness Santuario de Relajación"
          style={{
            transform: `scale(${zoomScale})`,
            transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'transform',
          }}
          className="w-full h-full object-cover object-center"
        />
        {/* Multilayered Warm Luxury Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/40 to-charcoal-900/60 pointer-events-none" />
        <div className="absolute inset-0 bg-sand-700/10 mix-blend-color pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(26,24,23,0.5)_100%)] pointer-events-none" />
      </div>

      {/* Floating subtle ambient botanical element */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sage-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-50/15 backdrop-blur-md border border-cream-50/20 text-cream-100 text-xs sm:text-sm font-medium tracking-widest uppercase mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-sage-300" />
          <span>Santuario de Belleza & Bienestar • Coyoacán</span>
        </div>

        {/* Grand Serif Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-cream-50 leading-[1.15] sm:leading-[1.12] tracking-tight max-w-3xl mb-6">
          Redescubre tu <span className="italic font-light text-sand-200">paz interior</span> y resplandor
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-cream-200/90 max-w-2xl font-light leading-relaxed mb-10 text-balance">
          Desde masajes relajantes hasta lujosos tratamientos botánicos corporales. Una pausa sagrada diseñada para sanar tus sentidos y renovar tu energía vital.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#intro"
            className="btn-tactile w-full sm:w-auto px-8 py-3.5 rounded-full bg-cream-50 text-charcoal-900 hover:bg-white text-sm sm:text-base font-medium tracking-wide shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <span>Conocer más</span>
            <ArrowDown className="w-4 h-4 text-charcoal-600" />
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="btn-tactile w-full sm:w-auto px-8 py-3.5 rounded-full bg-sage-700/90 hover:bg-sage-700 text-cream-50 text-sm sm:text-base font-medium tracking-wide border border-sage-500/30 backdrop-blur-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-cream-200" />
            <span>Agendar Cita</span>
          </button>
        </div>

        {/* Authentic badge in bottom hero */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-cream-50/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-cream-200/80 text-xs sm:text-sm tracking-wider uppercase font-light">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-400" />
            Atención Personalizada
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-400" />
            Aparatología de Vanguardia
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-400" />
            Cosmecéutica Botánica
          </span>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#intro"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-cream-200/60 hover:text-cream-100 flex flex-col items-center gap-2 transition-colors duration-200 group focus:outline-none"
        aria-label="Desplazar hacia abajo"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-light group-hover:tracking-[0.3em] transition-all">
          Desliza
        </span>
        <div className="w-5 h-8 rounded-full border border-cream-200/40 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-cream-100 rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
}
