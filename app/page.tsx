import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/hero";
import { About } from "@/components/sections/home/about";
import { HistoryTimeline } from "@/components/sections/home/history-timeline";
import { Founders } from "@/components/sections/home/founders";
import { WhyUs } from "@/components/sections/home/why-us";
import { Stats } from "@/components/sections/home/stats";
import { CaseStudies } from "@/components/sections/home/case-studies";
import { Process } from "@/components/sections/home/process";
import { Testimonials } from "@/components/sections/home/testimonials";
import { CtaFinal } from "@/components/sections/home/cta-final";

export const metadata: Metadata = {
  title: "Estudio Creativo de Marketing Digital",
  description:
    "ViccaLab es un estudio creativo de marketing digital: redes sociales, publicidad, branding, contenido y desarrollo web con estrategia y diseño premium.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <HistoryTimeline />
      <Founders />
      <WhyUs />
      <Stats />
      <CaseStudies />
      <Process />
      <Testimonials />
      <CtaFinal />
    </>
  );
}
