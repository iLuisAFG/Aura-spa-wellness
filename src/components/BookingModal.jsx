import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Sparkles, Send, CheckCircle2, Phone, User, MessageSquare } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function BookingModal({ isOpen, onClose, preselectedService }) {
  const [selectedServiceId, setSelectedServiceId] = useState(
    preselectedService?.serviceId || servicesData[0].id
  );
  const [selectedDuration, setSelectedDuration] = useState(
    preselectedService?.duration || ''
  );
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('11:00');
  const [specialNotes, setSpecialNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      const match = servicesData.find(
        (s) => s.title.toLowerCase() === preselectedService.serviceName?.toLowerCase()
      );
      if (match) {
        setSelectedServiceId(match.id);
        setSelectedDuration(preselectedService.duration || match.pricingOptions[0]?.duration);
      }
    }
  }, [preselectedService, isOpen]);

  if (!isOpen) return null;

  const currentService =
    servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct pre-filled WhatsApp message with official number
    const durationText = selectedDuration || currentService.pricingOptions[0]?.duration;
    const msg = `🌿 *Solicitud de Cita - Aura Spa Wellness*\n\n` +
      `👤 *Nombre:* ${clientName || 'Cliente'}\n` +
      `📞 *Teléfono:* ${clientPhone || 'No proporcionado'}\n` +
      `✨ *Tratamiento:* ${currentService.title}\n` +
      `⏱️ *Duración/Opción:* ${durationText}\n` +
      `📅 *Fecha Deseada:* ${bookingDate || 'Por coordinar'}\n` +
      `🕐 *Hora Deseada:* ${bookingTime}\n` +
      (specialNotes ? `📝 *Observaciones:* ${specialNotes}\n\n` : `\n`) +
      `*Aura Spa Wellness*\nLibra 4, Prado Churubusco, Coyoacán, 04230 Ciudad de México, CDMX\nTel: +52 1 55 7430 4843`;

    const encoded = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/5215574304843?text=${encoded}`;

    setIsSuccess(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-cream-50 w-full max-w-xl rounded-[32px] shadow-2xl border border-sand-200 overflow-hidden z-10 my-8 transition-transform duration-300 scale-100">
        
        {/* Header with warm sand background and official logo */}
        <div className="bg-sand-100/90 px-6 sm:px-8 py-5 border-b border-sand-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-sand-300 bg-white shadow-sm flex-shrink-0">
              <img
                src="/images/logo.jpg"
                alt="Aura Spa Logo Oficial"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-medium text-charcoal-900">
                Agendar Cita en Aura Spa
              </h3>
              <p className="text-xs text-charcoal-500">
                WhatsApp Directo: +52 1 55 7430 4843
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-sand-200 text-charcoal-500 hover:text-charcoal-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success State */}
        {isSuccess ? (
          <div className="p-8 sm:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center mx-auto mb-4 border border-sage-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl text-charcoal-900 font-medium mb-2">
              ¡Solicitud Generada con Éxito!
            </h4>
            <p className="text-sm text-charcoal-600 mb-6 font-light max-w-md mx-auto">
              Te estamos redirigiendo a WhatsApp (+52 1 55 7430 4843) para confirmar tu turno de inmediato.
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="btn-tactile px-6 py-2.5 rounded-full bg-sage-700 text-cream-50 text-xs uppercase tracking-wider font-semibold shadow-md"
            >
              Cerrar Ventana
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            
            {/* Service Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                Selecciona Tratamiento o Ritual
              </label>
              <select
                value={selectedServiceId}
                onChange={(e) => {
                  setSelectedServiceId(e.target.value);
                  const s = servicesData.find((x) => x.id === e.target.value);
                  setSelectedDuration(s?.pricingOptions[0]?.duration || '');
                }}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-sand-300 text-sm text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-sage-600/30 focus:border-sage-600"
              >
                {servicesData.map((s) => (
                  <option key={s.id} value={s.id}>
                    [{s.categoryLabel}] {s.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration / Option Pills */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                Duración o Paquete
              </label>
              <div className="flex flex-wrap gap-2">
                {currentService.pricingOptions.map((opt, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => setSelectedDuration(opt.duration)}
                    className={`btn-tactile px-3 py-1.5 rounded-full text-xs font-medium border ${
                      selectedDuration === opt.duration
                        ? 'bg-sage-700 text-cream-50 border-sage-700 shadow-sm'
                        : 'bg-white hover:bg-sand-100 text-charcoal-700 border-sand-300'
                    }`}
                  >
                    {opt.duration} — ${opt.price.toLocaleString('es-MX')} MXN
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                  Fecha Deseada
                </label>
                <input
                  type="date"
                  required
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-white border border-sand-300 text-sm text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-sage-600/30"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                  Hora Aproximada
                </label>
                <select
                  value={bookingTime}
                  onChange={(e) => setBookingTime(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-white border border-sand-300 text-sm text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-sage-600/30"
                >
                  <option value="10:30">10:30 am</option>
                  <option value="11:30">11:30 am</option>
                  <option value="13:00">01:00 pm</option>
                  <option value="14:30">02:30 pm</option>
                  <option value="16:00">04:00 pm</option>
                  <option value="17:30">05:30 pm</option>
                  <option value="19:00">07:00 pm</option>
                  <option value="19:45">07:45 pm (Jue-Sáb)</option>
                </select>
              </div>
            </div>

            {/* Client Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                  Nombre Completo
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Ej. Sofía Morales"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 rounded-xl bg-white border border-sand-300 text-sm text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-sage-600/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                  Teléfono / WhatsApp
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="Ej. +52 1 55 1234 5678"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 rounded-xl bg-white border border-sand-300 text-sm text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-sage-600/30"
                  />
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                Comentarios Especiales o Puntos de Tensión (Opcional)
              </label>
              <textarea
                rows={2}
                placeholder="Ej. Tengo mucha tensión en trapecios y cervicales..."
                value={specialNotes}
                onChange={(e) => setSpecialNotes(e.target.value)}
                className="w-full px-4 py-2 rounded-xl bg-white border border-sand-300 text-sm text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-sage-600/30 resize-none"
              />
            </div>

            {/* Policy note */}
            <p className="text-[11px] text-charcoal-500 leading-normal italic">
              * Recuerda que todo tratamiento requiere valoración previa de nuestras especialistas en Libra 4, Prado Churubusco, Coyoacán.
            </p>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="btn-tactile w-full py-3.5 px-6 rounded-full bg-sage-700 hover:bg-sage-800 text-cream-50 text-sm font-medium tracking-wide flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Solicitud a WhatsApp (+52 1 55 7430 4843)</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
