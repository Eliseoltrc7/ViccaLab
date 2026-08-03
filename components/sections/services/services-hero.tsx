import { AsteriskShape, StarImage } from "@/components/shared/decorative-shapes";
import { StickerBadge } from "@/components/shared/sticker-badge";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary to-brand-primary-dark pt-40 pb-24 text-white md:pt-48 md:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-brand-lavender/25 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-brand-lime/15 blur-3xl" />
        <StarImage
          variant="lavender"
          rotate={-10}
          className="absolute -right-12 -bottom-16 w-56 opacity-90 md:w-72"
        />
        <AsteriskShape className="absolute right-[10%] top-[22%] h-8 w-8 text-brand-lime/70" />
      </div>

      <div className="container-page relative">
        <StickerBadge tone="glass" className="mb-6">
          Servicios
        </StickerBadge>
        <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.1] text-balance sm:text-5xl md:text-6xl">
          Todo lo que tu marca necesita para crecer, en un solo equipo.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          Desde redes sociales hasta desarrollo web: combinamos estrategia,
          diseño y tecnología para que cada acción sume a un mismo objetivo.
        </p>
      </div>
    </section>
  );
}
