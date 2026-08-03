"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { FlowerBurst } from "@/components/shared/decorative-shapes";
import { historyMilestones } from "@/lib/data/history-milestones";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HistoryTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-brand-charcoal py-24 text-brand-cream md:py-32"
    >
      <FlowerBurst className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 text-brand-lime/10 md:h-80 md:w-80" />
      <FlowerBurst className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 text-brand-lavender/10 md:h-72 md:w-72" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Nuestra historia"
          title="De una idea compartida a un estudio creativo consolidado."
          align="center"
          className="mx-auto text-white [&_p]:text-white/60"
        />

        <div className="relative mx-auto mt-20 max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
            <div
              ref={lineRef}
              className="h-full w-full bg-gradient-to-b from-brand-lime to-brand-lavender"
            />
          </div>

          <div className="space-y-14">
            {historyMilestones.map((milestone, index) => (
              <Reveal key={milestone.year} delay={index * 0.05}>
                <div className="relative">
                  <span className="absolute left-2.5 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-lime ring-4 ring-brand-charcoal md:left-1/2" />
                  <div
                    className={`flex flex-col gap-2 pl-12 md:w-1/2 md:pl-0 ${
                      index % 2 === 0
                        ? "md:pr-14 md:text-right"
                        : "md:ml-auto md:pl-14"
                    }`}
                  >
                    <span className="font-display text-sm uppercase tracking-[0.2em] text-brand-lime">
                      {milestone.year}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                      {milestone.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/55">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
