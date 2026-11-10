# Aura Spa & Wellness — Sitio Web Premium

Sitio web oficial y de clase mundial para **Aura Spa Wellness** (Coyoacán, CDMX), programado desde cero aplicando las directrices de diseño y desarrollo frontend:
- **@Taste skill**: Espacio en blanco generoso, tipografía de alto contraste (Playfair Display para títulos, Plus Jakarta Sans para párrafos), paleta de colores de lujo (cremas suaves, beiges cálidos, acentos verde bosque profundo y verde salvia natural).
- **@impeccable**: Código limpio, semántico, modular y responsive pixel-perfect.
- **@emil kowalski**: Interacciones táctiles artesanales, física de resortes (spring-based) en botones, transiciones fluidas de scroll (efecto de zoom suave y reactivo en el hero) y hover.

---

## Información Oficial del Spa

- **Dirección Oficial:** Libra 4, Prado Churubusco, Coyoacán, 04230 Ciudad de México, CDMX
- **Teléfono & WhatsApp Oficial:** +52 1 55 7430 4843
- **Logo Oficial:** `Logo.jpg` (integrado en cabecera, pie de página y modales)
- **Horarios de Atención:**
  - **Lunes a Miércoles:** 10:30 a.m. – 7:00 p.m.
  - **Jueves a Sábado:** 10:30 a.m. – 8:30 p.m.
  - **Domingo:** Cerrado
- **Instagram:** `@aura.spa.wellnesss`
- **Facebook:** `Aura Spa & Wellnes`

---

## Estructura de Secciones

1. **Encabezado / Navegación (`Navbar.jsx`)**:
   - Logotipo oficial del spa (`Logo.jpg`) con marco circular y relieve.
   - Enlaces centrales condensados (*Inicio, Servicios & Precios, Nuestro Spa, Contacto*).
   - Acceso telefónico directo (`+52 1 55 7430 4843`) y botón *"Agendar Cita"*.
   - Navbar con transición inteligente: transparente en cabecera y fondo glassmorphism desenfocado suave al hacer scroll.
   - Menú móvil táctil con animación de cortina.

2. **Sección Hero (`Hero.jsx`)**:
   - Altura de pantalla completa (`100vh`).
   - Efecto de **zoom suave reactivo al scroll**: la imagen se acerca delicadamente al desplazarse hacia abajo y regresa con suavidad al volver arriba.
   - Título Serif centrado: *"Redescubre tu paz interior y resplandor"*.
   - Subtítulo de bienvenida y botones CTA (*Conocer más* y *Agendar Cita*).

3. **Declaración de Introducción (`IntroStatement.jsx`)**:
   - Manifiesto centrado sobre fondo crema: *"Nuestro spa es un santuario donde la relajación se encuentra con el rejuvenecimiento."*
   - Subrayados orgánicos y separador decorativo.

4. **Escaparate de Lujo (`LuxuryShowcase.jsx`)**:
   - Imagen circular de tratamiento con botón de *"Play"* superpuesto en la esquina inferior izquierda.
   - Título: *"Aquí puedes desconectarte y escapar del estrés diario."*, narrativa botánica y botón *"Saber más sobre servicios"*.
   - Modal ambiental interactivo con sonido/video relajante.

5. **Sección de Servicios y Precios (`ServicesPricing.jsx`)**:
   - **Barra de categorías completa arriba:** todos los servicios visibles y agrupados en píldoras centradas sin cortes ni desbordes.
   - **Barra de búsqueda independiente centrada abajo:** con icono de lupa alineado con padding interno sin desbordes.
   - **Cabecera de cada servicio:** banner minimalista en blanco con el texto *"Rellenable al gusto"*.
   - Píldoras interactivas de duración/precio para consultar el costo dinámicamente en cada tarjeta.
   - Aviso legal obligatorio: *"Todo tratamiento requiere una valoración previa. Los precios están sujetos a evaluación de nuestros especialistas."*
   - Botón *"Agendar este servicio"* que precarga el modal de reserva.

6. **Estadísticas (`StatsSection.jsx`)**:
   - 4 columnas con números grandes Serif:
     - **21** Años de experiencia
     - **04** Instalaciones exclusivas
     - **1809** Clientes felices
     - **290** Productos botánicos

7. **Marquesina Inmersiva (`MarqueeSection.jsx`)**:
   - Fotografía con máscara en arco arquitectónico.
   - Marquesina (ticker) infinita y continua con el texto: *"¿Listo para embarcarte en un viaje hacia la relajación y el rejuvenecimiento? • AURA SPA WELLNESS • UN REFUGIO DE PAZ Y EQUILIBRIO"*.

8. **Equipo / Expertos (`TeamSection.jsx`)**:
   - Título: *"La magia de nuestros expertos"*.
   - 4 columnas con retratos enmarcados en formas de arco y píldora, especialidades y biografía.

9. **Testimonios (`TestimonialsSection.jsx`)**:
   - Título: *"Lo que dicen nuestros clientes"*.
   - **Fotografías reales de clientas integradas** (`client-1.jpg` y `client-2.jpg`).
   - Comillas de gran escala, slider táctil con flechas previo/siguiente y paginación por puntos.

10. **Banner de CTA para Reservas (`BookingBanner.jsx`)**:
    - Fondo de sales y botánicos con superposición cálida.
    - Caja central blanca/crema con el texto: *"Reserva tu sesión hoy y haz de nuestro spa tu santuario para una vida equilibrada."*, botón *"Agendar Cita Ahora"* y enlace a WhatsApp (`+52 1 55 7430 4843`).

11. **Footer / Pie de Página (`Footer.jsx`)**:
    - **Paleta de Verde Bosque Profundo (`#1D2B1C`)** botánico y elegante.
    - **Horarios oficiales exactos:** Lunes a Miércoles 10:30 a.m. – 7:00 p.m., Jueves a Sábado 10:30 a.m. – 8:30 p.m., Domingo Cerrado.
    - Transición superior orgánica mediante divisor SVG ondulado suave.
    - Logotipo oficial de Aura Spa centrado arriba.
    - Cuadrícula de 4 columnas de enlaces e información.
    - Redes sociales (Instagram `@aura.spa.wellnesss`, Facebook `Aura Spa & Wellnes`, WhatsApp).
    - Dirección exacta: *Libra 4, Prado Churubusco, Coyoacán, 04230 Ciudad de México, CDMX*.
    - Teléfono oficial: *+52 1 55 7430 4843*.

---

## Funcionalidades Interactivas Adicionales

- **Modal de Agendamiento Inteligente (`BookingModal.jsx`)**:
  Formulario completo con selección de tratamiento, opción de duración/precio, selector de fecha, hora de preferencia (alineada a los horarios de 10:30 a.m.), datos del cliente y botón que genera automáticamente el mensaje personalizado de WhatsApp directo a **`+52 1 55 7430 4843`**.
- **Botón Flotante de WhatsApp (`WhatsAppFloating.jsx`)**:
  Acceso directo en esquina inferior derecha con indicador de disponibilidad hacia **`+52 1 55 7430 4843`**.

---

## Comandos para Ejecutar el Proyecto

```powershell
# Iniciar el servidor local en modo desarrollo
npm run dev

# Compilar para producción (Pixel-perfect y optimizado)
npm run build

# Previsualizar el build de producción
npm run preview
```
