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

## Email del formulario de contacto

El formulario de `/contacto` envía los mensajes por email usando [Resend](https://resend.com).

1. Crear una cuenta gratis en [resend.com](https://resend.com) usando el email `Vicoemailwork@gmail.com` (así queda verificado automáticamente como destinatario, sin necesitar un dominio propio).
2. Generar una API Key en el dashboard de Resend.
3. Copiar `.env.local.example` a `.env.local` y completar `RESEND_API_KEY` con esa clave.
4. En producción (Vercel), agregar la misma variable de entorno `RESEND_API_KEY` en la configuración del proyecto.

Sin esta variable configurada, el formulario muestra un error al enviarse.
