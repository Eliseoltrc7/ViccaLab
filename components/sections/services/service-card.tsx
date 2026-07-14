import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import type { Service } from "@/lib/data/services";

export function ServiceCard({
  service,
  reversed = false,
}: {
  service: Service;
  reversed?: boolean;
}) {
  return (
    <Reveal>
      <article
        id={service.slug}
        className="scroll-mt-28 rounded-4xl border border-brand-charcoal/8 bg-white p-8 md:p-12"
      >
        <div
          className={`grid gap-10 md:grid-cols-2 md:gap-16 ${
            reversed ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
              <service.icon className="h-6 w-6" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-medium text-brand-charcoal md:text-3xl">
              {service.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-charcoal/65">
              {service.description}
            </p>

            <Link
              href={`/contacto?servicio=${service.slug}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-charcoal px-6 py-3.5 text-sm font-semibold text-brand-cream transition-colors duration-300 hover:bg-brand-primary"
            >
              Solicitar presupuesto
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-primary">
                Beneficios
              </h3>
              <ul className="mt-4 space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2.5 text-sm text-brand-charcoal/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-lavender" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-primary">
                Incluye
              </h3>
              <ul className="mt-4 space-y-3">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-brand-charcoal/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-lime" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
