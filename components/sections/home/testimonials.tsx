"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Testimonios"
          title="Lo que dicen las marcas que confían en nosotras."
          align="center"
          className="mx-auto"
        />

        <div className="relative mx-auto mt-14 max-w-2xl">
          <Quote className="mx-auto h-10 w-10 text-brand-lavender" />

          <div className="relative mt-6 min-h-[180px] text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-display text-xl leading-relaxed text-brand-charcoal md:text-2xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <p className="mt-6 text-sm font-medium text-brand-charcoal">
                  {current.name}
                </p>
                <p className="text-sm text-brand-charcoal/55">{current.role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                aria-label={`Ver testimonio de ${t.name}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-brand-primary" : "w-2 bg-brand-charcoal/15"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
