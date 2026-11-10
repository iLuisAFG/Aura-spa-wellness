import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroStatement from './components/IntroStatement';
import LuxuryShowcase from './components/LuxuryShowcase';
import ServicesPricing from './components/ServicesPricing';
import StatsSection from './components/StatsSection';
import MarqueeSection from './components/MarqueeSection';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingBanner from './components/BookingBanner';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import VideoModal from './components/VideoModal';
import FlyerModal from './components/FlyerModal';
import WhatsAppFloating from './components/WhatsAppFloating';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [flyerModalOpen, setFlyerModalOpen] = useState(false);

  const handleOpenBooking = (serviceData = null) => {
    setPreselectedService(serviceData);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-cream-100 text-charcoal-800 flex flex-col font-sans selection:bg-roseDust-200 selection:text-roseDust-900">
      
      {/* 1. Encabezado / Navegación */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenFlyers={() => setFlyerModalOpen(true)}
      />

      <main className="flex-grow">
        {/* 2. Sección Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Declaración de Introducción */}
        <IntroStatement />

        {/* 4. Escaparate de Lujo */}
        <LuxuryShowcase
          onOpenVideo={() => setVideoModalOpen(true)}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 5. Sección de Servicios y Precios (Datos Reales) */}
        <ServicesPricing
          onOpenBooking={handleOpenBooking}
          onOpenFlyers={() => setFlyerModalOpen(true)}
        />

        {/* 6. Estadísticas */}
        <StatsSection />

        {/* 7. Marquesina Inmersiva */}
        <MarqueeSection />

        {/* 8. Equipo / Expertos */}
        <TeamSection />

        {/* 9. Testimonios */}
        <TestimonialsSection />

        {/* 10. Banner de CTA para Reservas */}
        <BookingBanner onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 11. Footer (Pie de página con transición ondulada) */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenFlyers={() => setFlyerModalOpen(true)}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedService={preselectedService}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      <FlyerModal
        isOpen={flyerModalOpen}
        onClose={() => setFlyerModalOpen(false)}
      />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppFloating onOpenBooking={() => handleOpenBooking()} />

    </div>
  );
}
