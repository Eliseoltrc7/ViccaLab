import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { processSteps } from "@/lib/data/process-steps";

export function Process() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Nuestro proceso"
          title="Un método claro, pensado para resultados."
          align="center"
          className="mx-auto"
        />

        <RevealGroup
          className="mt-16 grid gap-6 md:grid-cols-5"
          stagger={0.08}
        >
          {processSteps.map((step) => (
            <RevealItem key={step.number}>
              <div className="group relative h-full rounded-3xl border border-brand-charcoal/8 bg-brand-cream/50 p-6 transition-colors duration-300 hover:bg-brand-primary">
                <span className="font-display text-4xl font-medium text-brand-charcoal/10 transition-colors duration-300 group-hover:text-white/20">
                  {step.number}
                </span>
                <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand-primary transition-colors duration-300 group-hover:bg-brand-lime group-hover:text-brand-charcoal">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-brand-charcoal transition-colors duration-300 group-hover:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/60 transition-colors duration-300 group-hover:text-white/75">
                  {step.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
