"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { InstagramIcon } from "@/components/shared/social-icons";
import { caseStudies } from "@/lib/data/case-studies";

export function CaseStudies() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({
      left: dir * 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Casos de éxito"
            title="Marcas que ya transformamos."
            description="Un vistazo a algunos de los proyectos donde combinamos estrategia, diseño y contenido para generar resultados medibles."
          />
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-charcoal/15 text-brand-charcoal transition-colors hover:bg-brand-charcoal hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Siguiente"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-charcoal/15 text-brand-charcoal transition-colors hover:bg-brand-charcoal hover:text-white"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {caseStudies.map((study, index) => (
            <Reveal key={study.id} delay={index * 0.05} className="snap-start">
              <article className="flex h-full w-[85vw] max-w-md flex-col rounded-3xl border border-brand-charcoal/8 bg-white p-8 sm:w-[420px]">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-brand-primary">
                    {study.category}
                  </span>
                  {study.link && (
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver Instagram de ${study.client}`}
                      className="group/logo flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-cream text-brand-charcoal/60 ring-1 ring-brand-charcoal/8 transition-colors hover:bg-brand-primary hover:text-white"
                    >
                      {study.logo ? (
                        <Image
                          src={study.logo}
                          alt={`Logo de ${study.client}`}
                          width={40}
                          height={40}
                          className="h-full w-full object-contain p-1.5 transition-transform duration-300 group-hover/logo:scale-110"
                        />
                      ) : (
                        <InstagramIcon className="h-4 w-4" />
                      )}
                    </a>
                  )}
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold text-brand-charcoal">
                  {study.client}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/60">
                  {study.objective}
                </p>

                <ul className="mt-5 space-y-2">
                  {study.results.map((result) => (
                    <li
                      key={result}
                      className="flex gap-2 text-sm leading-snug text-brand-charcoal/70"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-lavender" />
                      {result}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto grid grid-cols-3 gap-3 pt-6">
                  {study.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl bg-brand-cream px-3 py-4 text-center"
                    >
                      <p className="font-display text-lg font-medium text-brand-primary">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-[11px] leading-tight text-brand-charcoal/55">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}

          <div className="flex w-[10vw] shrink-0 items-center justify-center sm:w-24">
            <a
              href="/contacto"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-charcoal text-white transition-transform hover:scale-105"
              aria-label="Quiero resultados así"
            >
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
