import React, { useState, useEffect } from 'react';
import { testimonialsData } from '../data/testimonialsData';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoplay]);

  const current = testimonialsData[currentIndex];

  return (
    <section
      id="testimonios"
      className="py-24 sm:py-32 bg-cream-100 relative overflow-hidden"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Heading */}
        <p className="text-xs uppercase tracking-[0.25em] text-sand-500 font-medium mb-3">
          Experiencias Reales
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 font-normal leading-tight mb-12">
          Lo que dicen nuestros clientes
        </h2>

        {/* Big Quotation Mark Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-sand-200/60 border border-sand-300 flex items-center justify-center text-roseDust-400 shadow-sm">
            <Quote className="w-8 h-8 sm:w-10 sm:h-10 rotate-180 fill-current opacity-80" />
          </div>
        </div>

        {/* Testimonial Card / Slider Area */}
        <div className="relative min-h-[220px] sm:min-h-[200px] flex items-center justify-center transition-all duration-500">
          <div key={current.id} className="animate-fadeIn max-w-2xl mx-auto">
            
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6 text-sand-500">
              {[...Array(current.stars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote Text */}
            <blockquote className="font-serif text-lg sm:text-2xl md:text-2xl text-charcoal-800 font-normal leading-relaxed italic mb-8">
              "{current.quote}"
            </blockquote>

            {/* Author details */}
            <div className="flex items-center justify-center gap-3">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-sand-300 shadow-md flex-shrink-0"
              />
              <div className="text-left">
                <p className="font-serif font-medium text-base text-charcoal-900">
                  {current.name}
                </p>
                <p className="text-xs text-sage-800 font-medium">
                  {current.treatment}
                </p>
                <p className="text-[11px] text-charcoal-500">
                  {current.city}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Navigation Arrows & Pagination Dots */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={prevSlide}
            className="btn-tactile w-11 h-11 rounded-full bg-cream-50 hover:bg-white border border-sand-300 text-charcoal-700 flex items-center justify-center shadow-sm focus:outline-none"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? 'w-6 h-2 bg-sage-700'
                    : 'w-2 h-2 bg-sand-300 hover:bg-sand-400'
                }`}
                aria-label={`Ir al testimonio ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="btn-tactile w-11 h-11 rounded-full bg-cream-50 hover:bg-white border border-sand-300 text-charcoal-700 flex items-center justify-center shadow-sm focus:outline-none"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
