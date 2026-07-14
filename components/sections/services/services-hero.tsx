import { AsteriskShape } from "@/components/shared/decorative-shapes";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary to-brand-primary-dark pt-40 pb-24 text-white md:pt-48 md:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-brand-lavender/25 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-brand-lime/15 blur-3xl" />
        <AsteriskShape className="absolute right-[10%] top-[22%] h-8 w-8 text-brand-lime/70" />
      </div>

      <div className="container-page relative">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
          Servicios
        </span>
        <h1 className="max-w-2xl font-display text-4xl font-medium leading-[1.1] text-balance sm:text-5xl md:text-6xl">
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
