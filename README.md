# ViccaLab — Sitio Web

Sitio web de **ViccaLab**, estudio creativo de marketing digital. Construido con Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion, GSAP y shadcn/ui.

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el navegador para ver el sitio.

- `npm run build` — build de producción.
- `npm run start` — sirve el build de producción (después de `npm run build`).
- `npm run lint` — corre ESLint.

## Estructura

```
app/
  page.tsx           Home
  servicios/page.tsx Servicios
  contacto/page.tsx  Contacto
components/
  layout/            Navbar, Footer, botón de WhatsApp, cursor
  sections/          Secciones de cada página (home, services, contact)
  shared/            Componentes reutilizables (Reveal, contador animado, etc.)
  ui/                Componentes base de shadcn/ui
lib/
  constants.ts       Datos de contacto, links de navegación
  data/              Contenido del sitio (servicios, equipo, casos de éxito, etc.)
  validations/       Esquemas de Zod (formulario de contacto)
public/
  brand/             Assets de marca (logo)
  team/              Fotos del equipo
```

Para editar el contenido del sitio (textos, servicios, casos de éxito, datos de contacto), los archivos a tocar están en `lib/constants.ts` y `lib/data/`.
