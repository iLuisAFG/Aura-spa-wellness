import React, { useState } from 'react';
import { servicesData, categories } from '../data/servicesData';
import { Sparkles, Calendar, Search, Check, Info, FileText, ArrowUpRight } from 'lucide-react';

export default function ServicesPricing({ onOpenBooking, onOpenFlyers }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Track selected pricing option index per service { [serviceId]: optionIndex }
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleSelectOption = (serviceId, index) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [serviceId]: index,
    }));
  };

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory =
      activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="servicios" className="py-24 sm:py-32 bg-cream-100 relative">
      {/* Decorative ambient gradients */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-sand-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-sage-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand-200/60 text-sand-700 text-xs uppercase tracking-[0.25em] font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sage-700" />
            <span>Menú de Tratamientos Exclusivos</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 font-normal leading-tight mb-4">
            Servicios & Precios
          </h2>
          
          <p className="text-base sm:text-lg text-charcoal-600 font-light max-w-2xl mx-auto leading-relaxed">
            Explora nuestra carta completa de rituales corporales, terapias faciales avanzadas y paquetes reductivos diseñados a la medida de tus objetivos.
          </p>

          {/* Clean link to view original flyers */}
          <div className="mt-5 flex items-center justify-center">
            <button
              onClick={onOpenFlyers}
              className="btn-tactile inline-flex items-center gap-2 text-xs font-medium text-sage-800 bg-sand-100 hover:bg-sand-200/80 px-4 py-2 rounded-full border border-sand-300/80 transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-sage-700" />
              <span>Ver volantes originales de precios y paquetes</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-sand-500" />
            </button>
          </div>
        </div>

        {/* 1. All Services Category Pills in dedicated top bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto p-2 bg-cream-50/90 rounded-2xl sm:rounded-full border border-sand-200/90 shadow-sm">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`btn-tactile h-10 whitespace-nowrap px-4 sm:px-5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center justify-center ${
                  isActive
                    ? 'bg-sage-800 text-cream-50 shadow-md shadow-sage-900/20'
                    : 'bg-white hover:bg-sand-100 text-charcoal-700 border border-sand-200/90'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 2. Separate Search Bar centered below */}
        <div className="mt-5 mb-14 flex justify-center">
          <div className="relative w-full max-w-md">
            <Search className="w-4 h-4 text-charcoal-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar servicio (ej. masajes, facial, cavitación...)"
              className="w-full h-11 pl-11 pr-10 rounded-full bg-cream-50 border border-sand-300 text-xs sm:text-sm text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-sage-700/30 focus:border-sage-700 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-700 text-xs p-1"
                aria-label="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const selectedIdx = selectedOptions[service.id] || 0;
            const currentOption = service.pricingOptions[selectedIdx] || service.pricingOptions[0];

            return (
              <div
                key={service.id}
                className="card-hover bg-cream-50 rounded-3xl border border-sand-200/80 overflow-hidden flex flex-col justify-between shadow-sm relative group"
              >
                <div>
                  {/* Blank Banner Placeholder: "Rellenable al gusto" */}
                  <div className="relative h-28 sm:h-32 w-full bg-white border-b border-dashed border-sand-300 flex flex-col items-center justify-center p-4 text-center transition-colors group-hover:bg-sand-50/70">
                    
                    {/* Badge */}
                    {service.tag && (
                      <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-sand-100 border border-sand-200 text-[10px] font-semibold tracking-wider uppercase text-charcoal-700 shadow-xs">
                        {service.tag}
                      </div>
                    )}

                    <div className="absolute top-3 right-3 text-[10px] uppercase tracking-widest text-sand-500 font-medium">
                      {service.categoryLabel}
                    </div>

                    {/* Minimalist banner aesthetic */}
                    <div className="flex flex-col items-center justify-center gap-1.5 mt-2">
                      <div className="w-8 h-8 rounded-full border border-dashed border-sand-300 flex items-center justify-center text-sand-500 bg-cream-50">
                        <Sparkles className="w-3.5 h-3.5 text-sage-600" />
                      </div>
                      <span className="text-xs font-serif italic tracking-wide text-charcoal-500">
                        Rellenable al gusto
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl sm:text-2xl text-charcoal-900 font-medium leading-snug mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Includes / Package details */}
                    {service.includes && (
                      <div className="mb-6 p-4 rounded-2xl bg-sand-100/70 border border-sand-200 text-xs">
                        <span className="block font-semibold uppercase tracking-wider text-charcoal-800 mb-2">
                          Incluye ({service.includes.length} elementos):
                        </span>
                        <ul className="space-y-1.5 text-charcoal-700">
                          {service.includes.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-sage-700 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Benefits list (if present) */}
                    {service.benefits && (
                      <div className="mb-6">
                        <span className="block text-[11px] font-semibold uppercase tracking-wider text-sand-700 mb-2">
                          Beneficios destacados:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {service.benefits.map((benefit, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] px-2.5 py-1 rounded-full bg-sage-50 text-sage-800 border border-sage-200/60"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Features list (if regular service) */}
                    {service.features && !service.includes && (
                      <div className="mb-6 space-y-1.5">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-600">
                            <span className="w-1 h-1 rounded-full bg-sand-400" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Interactive Duration & Price Selector */}
                    <div className="pt-4 border-t border-sand-200">
                      <span className="block text-[11px] uppercase tracking-wider text-charcoal-500 font-medium mb-2.5">
                        Selecciona duración / opción:
                      </span>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {service.pricingOptions.map((opt, idx) => {
                          const isOptionActive = selectedIdx === idx;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleSelectOption(service.id, idx)}
                              className={`btn-tactile px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                                isOptionActive
                                  ? 'bg-charcoal-900 text-cream-50 shadow-sm'
                                  : 'bg-sand-100 hover:bg-sand-200/80 text-charcoal-700 border border-sand-200'
                              }`}
                            >
                              {opt.duration}
                            </button>
                          );
                        })}
                      </div>

                      {/* Current selected price display */}
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-xs text-charcoal-500">Inversión:</span>
                        <div className="text-right">
                          <span className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal-900">
                            ${currentOption.price.toLocaleString('es-MX')}
                          </span>
                          <span className="text-xs text-charcoal-500 ml-1">MXN</span>
                        </div>
                      </div>
                      
                      {currentOption.detail && (
                        <p className="text-[11px] text-sage-800 font-medium italic text-right mb-2">
                          * {currentOption.detail}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() =>
                      onOpenBooking({
                        serviceName: service.title,
                        duration: currentOption.duration,
                        price: currentOption.price,
                      })
                    }
                    className="btn-tactile w-full py-3 px-4 rounded-full bg-sage-700 hover:bg-sage-800 text-cream-50 text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Calendar className="w-4 h-4 text-cream-200" />
                    <span>Agendar este servicio</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if search has no results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-cream-50 rounded-3xl border border-sand-200">
            <p className="font-serif text-xl text-charcoal-700 mb-2">No se encontraron servicios</p>
            <p className="text-sm text-charcoal-500 mb-6">Prueba con otra palabra clave o selecciona otra categoría.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="btn-tactile px-5 py-2 rounded-full bg-sage-700 text-cream-50 text-xs tracking-wider uppercase font-medium"
            >
              Ver todos los servicios
            </button>
          </div>
        )}

        {/* Mandatory Note in UI Footer */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-sand-100/90 border border-sand-300 max-w-4xl mx-auto flex items-start gap-4 shadow-sm">
          <div className="w-8 h-8 rounded-full bg-sand-200 flex items-center justify-center flex-shrink-0 text-charcoal-700 mt-0.5">
            <Info className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-charcoal-800 mb-1">
              Aviso Importante & Políticas de Valoración
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
              <strong className="font-semibold text-charcoal-900">
                Todo tratamiento requiere una valoración previa. Los precios están sujetos a evaluación de nuestros especialistas.
              </strong>{' '}
              Todo tratamiento que le indique su especialista, requiere de apoyo y cuidado en casa para obtener los mejores y más duraderos resultados.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
