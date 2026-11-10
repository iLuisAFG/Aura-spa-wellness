import React from 'react';
import { Instagram, Facebook, Phone, MapPin, Mail, Clock, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenBooking, onOpenFlyers }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacto" className="relative bg-[#1D2B1C] text-cream-50 overflow-hidden">
      
      {/* Wavy Organic SVG Divider Transition (Seamless from Cream section above) */}
      <div className="w-full overflow-hidden leading-none -mt-1">
        <svg
          className="relative block w-full h-12 sm:h-20 text-cream-100 fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        
        {/* Centered Official Logo & Brand Header */}
        <div className="flex flex-col items-center text-center pb-12 border-b border-sage-800/80">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex items-center justify-center border-2 border-sage-500/40 mb-4 shadow-lg bg-cream-50">
            <img
              src="/images/logo.jpg"
              alt="Aura Spa Wellness Logo Oficial"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl tracking-[0.25em] font-normal uppercase text-white drop-shadow-sm">
            AURA
          </h3>
          <p className="text-xs uppercase tracking-[0.4em] text-sand-300 font-light mt-1">
            Spa & Wellness Sanctuary
          </p>
          <p className="text-sm font-light text-cream-200/90 max-w-md mt-3 leading-relaxed">
            El arte de desconectar para reconectar con lo esencial en un ambiente de serenidad botánica y relajación absoluta.
          </p>
        </div>

        {/* 4-Column Grid in Forest Green Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-sage-800/80">
          
          {/* Column 1: Navegación */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-5 tracking-wide">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-cream-200/90">
              <li>
                <a href="#inicio" className="hover:text-sand-200 transition-colors hover:translate-x-1 inline-block duration-200">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-sand-200 transition-colors hover:translate-x-1 inline-block duration-200">
                  Servicios & Precios
                </a>
              </li>
              <li>
                <a href="#nuestro-spa" className="hover:text-sand-200 transition-colors hover:translate-x-1 inline-block duration-200">
                  Nuestro Spa
                </a>
              </li>
              <li>
                <a href="#expertos" className="hover:text-sand-200 transition-colors hover:translate-x-1 inline-block duration-200">
                  Nuestros Expertos
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-sand-200 transition-colors hover:translate-x-1 inline-block duration-200">
                  Testimonios
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenFlyers}
                  className="hover:text-sand-200 text-left transition-colors hover:translate-x-1 inline-block duration-200 font-medium underline underline-offset-4"
                >
                  Ver Menú Oficial en Flyer
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Tratamientos Estrella */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-5 tracking-wide">
              Tratamientos Estrella
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-cream-200/90">
              <li>
                <a href="#servicios" className="hover:text-sand-200 transition-colors">
                  Masaje Relajante Completo (desde $599)
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-sand-200 transition-colors">
                  Masaje con Ventosas (desde $499)
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-sand-200 transition-colors">
                  Facial Limpieza Luxury ($1,199)
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-sand-200 transition-colors">
                  Paquete Reductivo Premium ($3,500)
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-sand-200 transition-colors">
                  Glúteos Premium Up & Firm ($3,500)
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-sand-200 transition-colors">
                  Alaciados Nanoplastia & Keratina
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Horarios de Atención (Exactos de Imagen 2) */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-5 tracking-wide flex items-center gap-2">
              <Clock className="w-4 h-4 text-sand-300" />
              <span>Horarios de Atención</span>
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm font-light text-cream-200/90">
              <div className="flex justify-between items-center py-1 border-b border-sage-800/60">
                <span className="text-cream-100 font-medium">Lunes</span>
                <span className="text-sand-300 font-mono text-xs">10:30 a.m. – 7 p.m.</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-sage-800/60">
                <span className="text-cream-100 font-medium">Martes</span>
                <span className="text-sand-300 font-mono text-xs">10:30 a.m. – 7 p.m.</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-sage-800/60">
                <span className="text-cream-100 font-medium">Miércoles</span>
                <span className="text-sand-300 font-mono text-xs">10:30 a.m. – 7 p.m.</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-sage-800/60">
                <span className="text-cream-100 font-medium">Jueves</span>
                <span className="text-sand-300 font-mono text-xs">10:30 a.m. – 8:30 p.m.</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-sage-800/60">
                <span className="text-cream-100 font-medium">Viernes</span>
                <span className="text-sand-300 font-mono text-xs">10:30 a.m. – 8:30 p.m.</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-sage-800/60">
                <span className="text-cream-100 font-medium">Sábado</span>
                <span className="text-sand-300 font-mono text-xs">10:30 a.m. – 8:30 p.m.</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-sage-800/60">
                <span className="text-cream-100 font-medium">Domingo</span>
                <span className="text-roseDust-300 font-medium text-xs">Cerrado</span>
              </div>
              <div className="pt-2.5">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full btn-tactile py-2 px-4 rounded-full bg-sage-700 hover:bg-sage-600 text-cream-50 text-xs font-semibold tracking-wider uppercase shadow-sm border border-sage-500/40 text-center"
                >
                  Agendar Cita Hoy
                </button>
              </div>
            </div>
          </div>

          {/* Column 4: Ubicación y Contacto */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-5 tracking-wide">
              Ubicación & Contacto
            </h4>
            <div className="space-y-3.5 text-sm font-light text-cream-200/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sand-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Dirección:</p>
                  <p className="text-xs text-cream-100 leading-relaxed font-normal">
                    Libra 4, Prado Churubusco, Coyoacán, 04230 Ciudad de México, CDMX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sand-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Teléfono & WhatsApp:</p>
                  <a
                    href="https://wa.me/5215574304843"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-sand-200 hover:text-white underline underline-offset-2 font-medium"
                  >
                    +52 1 55 7430 4843
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sand-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Correo:</p>
                  <span className="text-xs text-cream-200/80">contacto@auraspawellness.mx</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Social Links & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-cream-200/70">
          
          {/* Social Media Links (Down Left) */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-sand-200 mr-1 font-medium">Síguenos:</span>
            
            <a
              href="https://www.instagram.com/aura.spa.wellnesss"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile w-9 h-9 rounded-full bg-white/10 hover:bg-sage-600 text-cream-50 flex items-center justify-center transition-all border border-white/15"
              aria-label="Instagram Aura Spa Wellness"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=AuraSpa"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile w-9 h-9 rounded-full bg-white/10 hover:bg-sage-600 text-cream-50 flex items-center justify-center transition-all border border-white/15"
              aria-label="Facebook Aura Spa & Wellnes"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/5215574304843"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile w-9 h-9 rounded-full bg-white/10 hover:bg-sage-600 text-cream-50 flex items-center justify-center transition-all border border-white/15"
              aria-label="WhatsApp Aura Spa"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright text */}
          <div className="text-center sm:text-right">
            <p className="text-cream-100">
              © {new Date().getFullYear()} Aura Spa & Wellness. Todos los derechos reservados.
            </p>
            <p className="text-[11px] text-sand-300/80 mt-0.5">
              Libra 4, Prado Churubusco, Coyoacán, 04230 Ciudad de México, CDMX.
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="btn-tactile p-2 rounded-full bg-white/10 hover:bg-sage-600 text-cream-50 transition-all border border-white/15"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

      </div>
    </footer>
  );
}
