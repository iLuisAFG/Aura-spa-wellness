import React from 'react';
import { Flower2 } from 'lucide-react';

export default function IntroStatement() {
  return (
    <section id="intro" className="py-24 sm:py-32 bg-cream-100 relative overflow-hidden">
      {/* Subtle background ambient warmth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-sand-200/40 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Subtle Icon Accent */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-12 h-12 rounded-full bg-sand-100 flex items-center justify-center border border-sand-200 shadow-sm text-sage-700">
            <Flower2 className="w-5 h-5 stroke-[1.5]" />
          </div>
        </div>

        {/* Small Overline */}
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-sand-500 font-medium mb-6">
          Bienvenido a Aura Spa Wellness
        </p>

        {/* Grand Manifesto Text */}
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal-900 leading-[1.3] sm:leading-[1.28] font-normal tracking-tight text-balance">
          Nuestro spa es un santuario donde la{' '}
          <span className="italic font-normal text-sage-800 underline decoration-roseDust-300 decoration-1 underline-offset-8">
            relajación
          </span>{' '}
          se encuentra con el{' '}
          <span className="italic font-normal text-roseDust-500 underline decoration-sage-300 decoration-1 underline-offset-8">
            rejuvenecimiento
          </span>
          .
        </h2>

        {/* Supporting Narrative */}
        <p className="mt-8 text-base sm:text-lg text-charcoal-600 max-w-2xl mx-auto font-light leading-relaxed">
          En el corazón de Coyoacán, hemos concebido un refugio orgánico donde el tiempo se detiene. Cada ritual combina la sabiduría de la medicina tradicional, fitoterapia botánica y aparatología de última generación para restaurar tu bienestar integral.
        </p>

        {/* Delicate Ornamental Divider */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-sand-300" />
          <span className="w-2 h-2 rounded-full bg-sand-400" />
          <div className="h-px w-16 bg-sand-300" />
        </div>
      </div>
    </section>
  );
}
