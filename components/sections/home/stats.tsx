import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { stats } from "@/lib/data/stats";

export function Stats() {
  return (
    <section className="bg-brand-primary py-24 text-white md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Números"
          title="Resultados que hablan por sí solos."
          align="center"
          className="mx-auto [&_h2]:text-white"
        />

        <RevealGroup
          className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-5"
          stagger={0.08}
        >
          {stats.map((stat) => (
            <RevealItem key={stat.label}>
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-brand-lime md:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm leading-snug text-white/70">
                  {stat.label}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
