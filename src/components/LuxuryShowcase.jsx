import React from 'react';
import { Play, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export default function LuxuryShowcase({ onOpenVideo, onOpenBooking }) {
  return (
    <section id="nuestro-spa" className="py-20 sm:py-28 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Circular Treatment Image with Overlaid Play Button */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start relative">
            <div className="relative group max-w-md sm:max-w-lg w-full">
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-sand-300/60 dashed animate-[spin_60s_linear_infinite] pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-roseDust-200/40 rounded-full blur-2xl pointer-events-none" />

              {/* Main Circular Masked Image */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] mx-auto rounded-full overflow-hidden border-[10px] sm:border-[12px] border-cream-100 shadow-[0_25px_50px_-12px_rgba(77,96,69,0.15)] bg-sand-200">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80"
                  alt="Tratamiento exclusivo en Aura Spa Wellness"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Play Button Superimposed on bottom-left of the circle */}
              <button
                onClick={onOpenVideo}
                className="btn-tactile absolute bottom-2 left-4 sm:bottom-6 sm:left-6 z-20 flex items-center gap-3 bg-white/90 hover:bg-white backdrop-blur-md px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-[0_15px_30px_-5px_rgba(0,0,0,0.18)] border border-sand-200 text-charcoal-900 group/play focus:outline-none"
                aria-label="Reproducir experiencia ambiental de Aura Spa"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-sage-700 text-cream-50 flex items-center justify-center transition-transform group-hover/play:scale-110 shadow-sm">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
                </div>
                <div className="text-left pr-2">
                  <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-sand-500 font-semibold">
                    Experiencia Aura
                  </span>
                  <span className="block text-xs sm:text-sm font-serif font-medium text-charcoal-900">
                    Ver atmósfera en video
                  </span>
                </div>
              </button>

              {/* Small floating badge on top right */}
              <div className="absolute top-4 right-2 sm:top-8 sm:right-6 bg-cream-100/90 backdrop-blur-md px-3.5 py-2 rounded-full border border-sand-200 shadow-sm flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-roseDust-500" />
                <span className="text-xs font-serif text-charcoal-800">100% Holístico</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & CTA */}
          <div className="lg:col-span-6 lg:pl-4 text-center lg:text-left">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-sand-500 font-medium mb-3">
              Escaparate de Lujo
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-normal leading-tight mb-6 text-balance">
              Aquí puedes desconectarte y escapar del estrés diario.
            </h2>

            <p className="text-base sm:text-lg text-charcoal-600 font-light leading-relaxed mb-6">
              En Aura Spa Wellness comprendemos que el descanso no es un lujo ocasional, sino una necesidad vital para tu salud física y claridad mental. Diseñamos cada tratamiento como una coreografía multisensorial: desde la aromaterapia botánica pura hasta la calidez de nuestras toallas y la precisión terapéutica de nuestras manos expertas.
            </p>

            <p className="text-sm sm:text-base text-charcoal-500 font-light leading-relaxed mb-8">
              Nuestras cabinas privadas ofrecen aislamiento acústico total, iluminación biodinámica regulada y música armónica diseñada para sincronizar tus ondas cerebrales hacia un estado delta de descanso profundo.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-left">
              <div className="flex items-center gap-2.5 text-sm text-charcoal-700">
                <CheckCircle2 className="w-4 h-4 text-sage-600 flex-shrink-0" />
                <span>Valoración clínica previa incluida</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-charcoal-700">
                <CheckCircle2 className="w-4 h-4 text-sage-600 flex-shrink-0" />
                <span>Aceites orgánicos certificados</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-charcoal-700">
                <CheckCircle2 className="w-4 h-4 text-sage-600 flex-shrink-0" />
                <span>Instalaciones privadas climatizadas</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-charcoal-700">
                <CheckCircle2 className="w-4 h-4 text-sage-600 flex-shrink-0" />
                <span>Terapeutas certificados y capacitados</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#servicios"
                className="btn-tactile w-full sm:w-auto px-7 py-3 rounded-full bg-charcoal-900 text-cream-50 hover:bg-charcoal-800 text-sm font-medium tracking-wide shadow-md flex items-center justify-center gap-2"
              >
                <span>Saber más sobre servicios</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="btn-tactile w-full sm:w-auto px-7 py-3 rounded-full bg-cream-50 hover:bg-white text-sage-800 border border-sand-300 text-sm font-medium tracking-wide shadow-sm"
              >
                Reservar Consulta
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
