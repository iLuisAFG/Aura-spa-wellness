import React from 'react';
import { Calendar, Sparkles, Clock, MapPin, Phone } from 'lucide-react';

export default function BookingBanner({ onOpenBooking }) {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background Image: Salts, Botanical Herbs & Tranquil Spa Waters */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=80"
          alt="Atmósfera relajante en Aura Spa Wellness"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-charcoal-900/55 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Central White/Cream Card */}
        <div className="bg-cream-50/95 backdrop-blur-md rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 md:p-16 border border-white/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] text-center relative overflow-hidden">
          
          {/* Subtle top decorative flower badge */}
          <div className="w-12 h-12 rounded-full bg-sand-100 flex items-center justify-center mx-auto mb-6 text-sage-700 border border-sand-200">
            <Sparkles className="w-5 h-5 text-sage-600" />
          </div>

          <span className="block text-xs uppercase tracking-[0.3em] text-sand-500 font-semibold mb-3">
            Comienza tu Transformación
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal-900 font-normal leading-snug mb-6 max-w-2xl mx-auto text-balance">
            Reserva tu sesión hoy y haz de nuestro spa tu santuario para una vida equilibrada.
          </h2>

          <p className="text-sm sm:text-base text-charcoal-600 font-light leading-relaxed mb-10 max-w-xl mx-auto">
            Elige tu tratamiento preferido y permítenos brindarte una experiencia inmersiva de relajación, alivio del estrés y rejuvenecimiento celular.
          </p>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="btn-tactile w-full sm:w-auto px-10 py-4 rounded-full bg-sage-700 hover:bg-sage-800 text-cream-50 text-sm sm:text-base font-medium tracking-wide shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2.5"
            >
              <Calendar className="w-4 h-4 text-cream-200" />
              <span>Agendar Cita Ahora</span>
            </button>
            <a
              href="https://wa.me/5215574304843?text=Hola%20Aura%20Spa,%20me%20gustar%C3%ADa%20solicitar%20informes%20y%20agendar%20una%20cita."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile w-full sm:w-auto px-8 py-4 rounded-full bg-cream-100 hover:bg-white text-charcoal-800 border border-sand-300 text-sm font-medium tracking-wide shadow-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-sage-600" />
              <span>WhatsApp: +52 1 55 7430 4843</span>
            </a>
          </div>

          {/* Fast perks below button */}
          <div className="mt-8 pt-8 border-t border-sand-200/80 flex flex-wrap items-center justify-center gap-6 text-xs text-charcoal-500 font-light">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-sage-700" />
              Reserva instantánea en línea
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sage-700" />
              Libra 4, Prado Churubusco, Coyoacán, CDMX
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
