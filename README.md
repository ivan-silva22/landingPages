# PIXELSTUDIO - Landing Page Empresarial

Landing page corporativa e institucional diseñada para **PIXELSTUDIO**, un estudio de desarrollo de software y transformación digital. El sitio está optimizado para la conversión directa de clientes mediante una interfaz moderna, limpia, de alto rendimiento y completamente adaptada a dispositivos móviles.

Este proyecto fue desarrollado utilizando **React** junto con **Vite** como empaquetador y estructurado de forma modular y escalable mediante la integración de **React Router DOM** para la preparación de futuras vistas.

---

## 🚀 Características del Proyecto

* **Enfoque de Negocio:** Todo el contenido técnico fue adaptado a un lenguaje comercial, eliminando tecnicismos complejos para maximizar el impacto y el valor de cara a potenciales clientes y organizaciones.
* **Diseño Totalmente Responsive:** Optimización fluida para celulares y pantallas de escritorio utilizando el sistema de grillas de Bootstrap.
* **Llamados a la Acción (CTA) Efectivos:** Enlaces directos a canales de atención automatizados y dinámicos (+54 9 3865 692626).
* **Estructura Semántica:** Código limpio con uso correcto de etiquetas de HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) para mejorar la indexación y el posicionamiento SEO.
* **Arquitectura de Navegación Lista:** Rutas configuradas de manera profesional con `react-router-dom` para permitir el crecimiento modular del sitio.

---

## 🛠️ Tecnologías y Librerías Utilizadas

* **React** (v18+) - Biblioteca principal para la interfaz de usuario.
* **Vite** - Herramienta de construcción rápida para el entorno de desarrollo.
* **React Router DOM** (v6+) - Enrutamiento dinámico y preparación de la SPA (Single Page Application).
* **React Bootstrap** - Framework de componentes UI y sistema de diseño responsive.
* **React Bootstrap Icons** - Iconografía limpia y estilizada importada de forma individual para optimizar el peso del bundle.

---

## 📁 Estructura del Código Fuente

```text
src/
├── components/
│   ├── common/
│   │   ├── Header.jsx       # Barra de navegación fija con links sincronizados
│   │   └── Footer.jsx       # Cierre corporativo, redes y datos de contacto internacionales
│   └── views/
│       ├── Hero.jsx         # Propuesta de valor de alto impacto y gancho de venta
│       ├── Features.jsx     # Beneficios estratégicos (Software a medida, Gestión, Mobile)
│       └── Pricing.jsx      # Planes de inversión con foco en financiación
├── App.jsx                  # Configuración central del Router y envoltura semántica
├── App.css                  # Estilos globales y configuraciones de scroll smooth
└── main.jsx                 # Punto de entrada de la aplicación 
