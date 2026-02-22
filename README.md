# Zueños Libres 🌙

Bienvenido al repositorio oficial de **Zueños Libres**, tu aliado natural contra el insomnio. Somos una marca dedicada a ofrecer soluciones naturales y seguras a base de plantas medicinales enfocadas en mejorar el descanso y la calidad del sueño.

---

## 🚀 Sobre el Proyecto

Esta aplicación es una **Landing Page / Plataforma Informativa** diseñada para:
1. **Educar** a los usuarios sobre el insomnio, sus causas y tratamientos.
2. **Presentar** el catálogo de productos (Valeriana, Manzanilla, Pasiflora, etc.).
3. **Ofrecer recursos** a través de una base de conocimiento (Wiki) y una comunidad (Foro).
4. **Vincular** al cliente con el servicio de soporte.

Todo construido con un enfoque visual "premium" utilizando glassmorphism, gradientes, animaciones avanzadas de UI y accesibilidad moderna, optimizada completamente para Motores de Búsqueda (SEO).

## 💻 Tecnologías Utilizadas

Este frontend está desarrollado bajo un stack robusto y moderno:

- **Framework Core**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Estilos y UI**: 
  - [Tailwind CSS](https://tailwindcss.com/)
  - Componentes de [shadcn/ui](https://ui.shadcn.com/)
  - Animaciones CSS Nativas e Interactivas
  - [Lucide React](https://lucide.dev/) (Iconografía)
- **Validación / Notificaciones**:
  - `zod`
  - `sonner`
- **Routing**: `react-router-dom`

## 🛠️ Cómo Iniciar el Entorno de Desarrollo

Para correr este proyecto en tu entorno local, asegúrate de tener instalado **Node.js** (versión 18+ recomendada) y npm.

1. **Clona el repositorio**
   ```bash
   git clone <NUESTRO_REPOSITORIO>
   cd <NOMBRE_DEL_DIRECTORIO>
   ```

2. **Instala las dependencias necesarias**
   ```bash
   npm install
   ```
   *(También puedes usar `yarn`, `pnpm` o `bun` si lo prefieres).*

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```
   *El proyecto estará disponible localmente, generalmente en `http://localhost:8080` (o el puerto que asigne Vite).*

4. **Compilar para Producción**
   Si deseas construir los archivos estáticos listos para producción:
   ```bash
   npm run build
   # Para previsualizar el build:
   npm run preview
   ```

## 📁 Estructura del Proyecto

```text
├── public/                 # Archivos estáticos directos (robots.txt, sitemap.xml, logo.png)
├── src/                    # Código fuente de react
│   ├── assets/             # Imágenes estáticas (productos, etc.)
│   ├── components/         # Componentes React reutilizables (Navbar, WikiSection, ContactSection, etc.)
│   ├── hooks/              # Hooks personalizados (ej. use-toast.ts, use-mobile.tsx)
│   ├── lib/                # Funciones utilitarias y configuraciones base
│   ├── pages/              # Vistas completas que actúan como páginas
│   ├── App.tsx             # Componente raíz y configuración de rutas
│   ├── index.css           # Estilos base y variables CSS / Tailwind
│   └── main.tsx            # Punto de entrada de React (Render root)
├── index.html              # Shell HTML base
├── tailwind.config.ts      # Configuración de Tailwind CSS y temas de color
└── vite.config.ts          # Configuración de Vite y resolución de paths
```

## 🌐 SEO y Metadatos

El proyecto está 100% preparado para ser analizado por motores de búsqueda de manera efectiva. Los elementos en `index.html` incluyen:
- Metaetiquetas precisas (`title`, `description`, `keywords`).
- **Open Graph** (imágenes listas para vista previa en Facebook/LinkedIn/WhatsApp).
- **Twitter Cards**.
- **Schema.org / JSON-LD** con estructuras de WebSite, WebPage, Organization y FAQ estructuradas dinámicamente.
- Un Sitemap en `public/sitemap.xml` para rápida indexación de anclas y dominios.

---

> Hecho con pasión 🌱 para asegurar el mejor descanso.
