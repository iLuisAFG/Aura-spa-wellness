import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Condensed essential navigation links only
  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios & Precios', href: '#servicios' },
    { label: 'Nuestro Spa', href: '#nuestro-spa' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-cream-100/90 backdrop-blur-md border-b border-sand-200/70 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.06)] py-3.5'
            : 'bg-gradient-to-b from-charcoal-900/65 via-charcoal-900/25 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Official Logo & Brand */}
            <a
              href="#inicio"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105 border border-sand-300/40 bg-cream-50 shadow-sm">
                <img
                  src="/images/logo.jpg"
                  alt="Aura Spa Wellness Logo Oficial"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-serif tracking-[0.22em] uppercase text-base sm:text-lg font-semibold transition-colors duration-300 ${
                    isScrolled ? 'text-charcoal-900' : 'text-cream-50 drop-shadow-sm'
                  }`}
                >
                  AURA
                </span>
                <span
                  className={`text-[9px] sm:text-[10px] tracking-[0.3em] uppercase -mt-0.5 transition-colors duration-300 ${
                    isScrolled ? 'text-sand-500' : 'text-cream-200 drop-shadow-sm'
                  }`}
                >
                  Spa & Wellness
                </span>
              </div>
            </a>

            {/* Central Navigation Links (Condensed essential links) */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-cream-50/15 backdrop-blur-sm px-4 py-1.5 rounded-full border border-sand-300/30">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-1.5 text-xs lg:text-sm font-medium tracking-wide rounded-full transition-all duration-200 ${
                    isScrolled
                      ? 'text-charcoal-700 hover:text-charcoal-900 hover:bg-sand-100/80'
                      : 'text-cream-100 hover:text-white hover:bg-white/15'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action: Direct Phone & Subtle "Agendar Cita" Pill Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:+5215574304843"
                className={`hidden lg:flex items-center gap-1.5 text-xs font-medium tracking-wide px-3 py-1.5 rounded-full transition-colors ${
                  isScrolled
                    ? 'text-charcoal-600 hover:text-charcoal-900'
                    : 'text-cream-200 hover:text-white'
                }`}
                title="Llamar a Aura Spa"
              >
                <Phone className="w-3.5 h-3.5 text-sage-600" />
                <span>+52 1 55 7430 4843</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className={`btn-tactile inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs lg:text-sm font-medium tracking-wide transition-all shadow-sm ${
                  isScrolled
                    ? 'bg-sage-700 text-cream-50 hover:bg-sage-800 shadow-sage-700/20'
                    : 'bg-cream-50 text-charcoal-900 hover:bg-white shadow-black/20'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Agendar Cita</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => onOpenBooking()}
                className={`p-2 rounded-full text-xs font-medium ${
                  isScrolled ? 'bg-sage-700 text-white' : 'bg-white text-charcoal-900'
                }`}
                aria-label="Agendar Cita rápida"
              >
                <Calendar className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-full transition-colors ${
                  isScrolled ? 'text-charcoal-800 hover:bg-sand-100' : 'text-cream-50 hover:bg-white/10'
                }`}
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with Emil Kowalski buttery slide */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal-900/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-cream-100 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-sand-200">
              <div className="flex items-center gap-2.5">
                <img
                  src="/images/logo.jpg"
                  alt="Aura Spa Logo"
                  className="w-9 h-9 rounded-full object-cover border border-sand-300"
                />
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-bold tracking-widest text-charcoal-900">AURA</span>
                  <span className="text-[9px] tracking-widest uppercase text-sand-500">Spa Wellness</span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full hover:bg-sand-100 text-charcoal-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-2 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-charcoal-800 hover:text-charcoal-950 hover:bg-sand-100 font-medium text-base transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-sand-200 space-y-3">
            <a
              href="https://wa.me/5215574304843"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-sand-300 text-xs text-charcoal-700 font-medium hover:bg-sand-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sage-700" />
              <span>+52 1 55 7430 4843</span>
            </a>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full btn-tactile flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-sage-700 text-cream-50 text-sm font-medium tracking-wide shadow-md hover:bg-sage-800"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Cita por WhatsApp</span>
            </button>

            <div className="text-center text-xs text-charcoal-500 pt-2 font-light">
              <p>Libra 4, Prado Churubusco, Coyoacán, 04230 Ciudad de México, CDMX</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
