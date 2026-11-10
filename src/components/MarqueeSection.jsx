import React from 'react';
import { Sparkles } from 'lucide-react';

export default function MarqueeSection() {
  const marqueePhrase =
    '¿Listo para embarcarte en un viaje hacia la relajación y el rejuvenecimiento? • AURA SPA WELLNESS • UN REFUGIO DE PAZ, BELLEZA Y EQUILIBRIO • ';

  return (
    <section className="pt-20 pb-16 bg-cream-100 overflow-hidden relative">
      
      {/* Arch-Shaped Spa Showcase Visual */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <div className="relative mx-auto w-full max-w-2xl h-[340px] sm:h-[460px] md:h-[520px] rounded-t-[140px] sm:rounded-t-[220px] overflow-hidden border-[8px] sm:border-[12px] border-cream-50 shadow-2xl bg-sand-200 group">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
            alt="Arquitectura y santuario de Aura Spa Wellness"
            className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-charcoal-900/10 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 sm:bottom-10 inset-x-0 text-center px-6">
            <span className="inline-block text-[10px] sm:text-xs tracking-[0.3em] uppercase text-cream-200 font-light mb-2">
              Santuario Sensorial
            </span>
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-cream-50 font-normal drop-shadow-md">
              Donde cada detalle despierta la serenidad
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Continuous Ticker / Marquee */}
      <div className="relative w-full py-5 sm:py-6 bg-sand-200/60 border-y border-sand-300 overflow-hidden">
        <div className="flex whitespace-nowrap will-change-transform animate-marquee">
          <span className="font-serif text-lg sm:text-2xl md:text-3xl text-charcoal-800 tracking-wider uppercase mx-4">
            {marqueePhrase}
          </span>
          <span className="font-serif text-lg sm:text-2xl md:text-3xl text-charcoal-800 tracking-wider uppercase mx-4">
            {marqueePhrase}
          </span>
          <span className="font-serif text-lg sm:text-2xl md:text-3xl text-charcoal-800 tracking-wider uppercase mx-4">
            {marqueePhrase}
          </span>
          <span className="font-serif text-lg sm:text-2xl md:text-3xl text-charcoal-800 tracking-wider uppercase mx-4">
            {marqueePhrase}
          </span>
        </div>
      </div>

    </section>
  );
}
