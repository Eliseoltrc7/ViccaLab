import { AsteriskShape, FlowerBurst } from "@/components/shared/decorative-shapes";
import { StickerBadge } from "@/components/shared/sticker-badge";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary to-brand-primary-dark pt-40 pb-24 text-white md:pt-48 md:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-16 top-6 h-72 w-72 rounded-full bg-brand-lavender/25 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-96 w-96 rounded-full bg-brand-lime/15 blur-3xl" />
        <FlowerBurst className="absolute -left-16 -top-16 h-60 w-60 text-white/10 md:h-72 md:w-72" />
        <AsteriskShape className="absolute left-[10%] top-[24%] h-8 w-8 text-brand-lime/70" />
      </div>

      <div className="container-page relative text-center">
        <StickerBadge tone="glass" className="mb-6">
          Contacto
        </StickerBadge>
        <h1 className="mx-auto max-w-2xl font-display text-4xl font-bold leading-[1.1] text-balance sm:text-5xl md:text-6xl">
          Hablemos sobre tu próximo proyecto.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          Contanos qué necesita tu marca y te respondemos con una propuesta a
          medida.
        </p>
      </div>
    </section>
  );
}
