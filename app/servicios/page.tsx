import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/services/services-hero";
import { ServicesGrid } from "@/components/sections/services/services-grid";
import { CtaFinal } from "@/components/sections/home/cta-final";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Gestión de redes sociales, marketing digital, publicidad, diseño gráfico, creación de contenido y desarrollo web. Conocé todos los servicios de ViccaLab.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <CtaFinal />
    </>
  );
}
