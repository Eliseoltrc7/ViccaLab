"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Heart, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AsteriskShape, FlowerImage } from "@/components/shared/decorative-shapes";
import { StickerBadge } from "@/components/shared/sticker-badge";
import { InstagramIcon } from "@/components/shared/social-icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      layersRef.current.forEach((layer, i) => {
        if (!layer) return;
        gsap.to(layer, {
          yPercent: (i % 2 === 0 ? -1 : 1) * (18 + i * 6),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary to-brand-primary-dark pt-28 pb-16 md:pt-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-lavender/25 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-[28rem] w-[28rem] rounded-full bg-brand-lime/15 blur-3xl" />
        <FlowerImage
          variant="cream"
          rotate={12}
          className="absolute -right-14 -top-20 w-64 opacity-90 md:w-80"
        />
        <FlowerImage
          variant="lime"
          flip
          rotate={-8}
          className="absolute -bottom-16 -left-14 w-48 opacity-90 md:w-60"
        />
        <AsteriskShape className="absolute right-[8%] top-[18%] h-8 w-8 text-brand-lime/70" />
        <AsteriskShape className="absolute left-[6%] top-[65%] h-6 w-6 text-white/30" />
      </div>

      <div className="container-page relative grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <StickerBadge tone="glass">Estudio creativo de marketing digital</StickerBadge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-bold leading-[1.05] text-balance text-white sm:text-5xl md:text-6xl lg:text-[3.75rem]"
          >
            Transformamos marcas en experiencias digitales que venden.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/75"
          >
            Somos ViccaLab: un estudio creativo que combina estrategia,
            diseño y contenido para convertir marcas en experiencias
            digitales memorables. Creatividad con intención y resultados
            medibles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-lime px-7 py-4 text-sm font-semibold text-brand-charcoal transition-transform duration-300 hover:-translate-y-0.5"
            >
              Quiero impulsar mi marca
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/15"
            >
              Ver nuestros servicios
            </Link>
          </motion.div>
        </div>

        <div className="relative hidden h-[520px] lg:block">
          <div
            ref={(el) => {
              layersRef.current[0] = el;
            }}
            className="absolute left-4 top-4 w-64 rounded-3xl bg-white p-5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand-primary to-brand-lavender" />
              <div className="flex-1">
                <div className="h-2 w-20 rounded-full bg-brand-charcoal/15" />
                <div className="mt-1.5 h-2 w-12 rounded-full bg-brand-charcoal/10" />
              </div>
              <InstagramIcon className="h-4 w-4 text-brand-primary" />
            </div>
            <div className="mt-4 aspect-square rounded-2xl bg-gradient-to-br from-brand-lavender-light to-brand-lime/40" />
            <div className="mt-3 flex items-center gap-4 text-brand-charcoal/60">
              <Heart className="h-4 w-4" />
              <div className="h-2 w-24 rounded-full bg-brand-charcoal/10" />
            </div>
          </div>

          <div
            ref={(el) => {
              layersRef.current[1] = el;
            }}
            className="absolute right-0 top-24 w-56 rounded-3xl bg-brand-charcoal p-5 text-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)]"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-white/50">
                Alcance
              </span>
              <TrendingUp className="h-4 w-4 text-brand-lime" />
            </div>
            <p className="mt-3 font-display text-3xl">+312%</p>
            <div className="mt-4 flex h-16 items-end gap-1.5">
              {[40, 65, 45, 80, 60, 95, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-brand-lime/80"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div
            ref={(el) => {
              layersRef.current[2] = el;
            }}
            className="absolute bottom-6 left-16 w-48 rounded-3xl bg-gradient-to-br from-brand-lavender to-brand-primary p-5 text-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]"
          >
            <p className="text-xs uppercase tracking-wider text-white/70">
              Campaña activa
            </p>
            <p className="mt-2 font-display text-xl leading-snug">
              Lanzamiento Colección Verano
            </p>
            <div className="mt-4 h-1.5 w-full rounded-full bg-white/25">
              <div className="h-1.5 w-3/4 rounded-full bg-white" />
            </div>
          </div>

          <div
            ref={(el) => {
              layersRef.current[3] = el;
            }}
            className="absolute right-8 bottom-0 w-40 rounded-2xl bg-brand-lime p-4 text-brand-charcoal shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]"
          >
            <p className="text-xs font-semibold uppercase tracking-wider">
              ROAS
            </p>
            <p className="mt-1 font-display text-2xl">5.4x</p>
          </div>
        </div>
      </div>
    </section>
  );
}
