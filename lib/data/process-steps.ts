import type { LucideIcon } from "lucide-react";
import { Search, Compass, PenTool, Rocket, TrendingUp } from "lucide-react";

export type ProcessStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: Search,
    title: "Descubrimiento",
    description:
      "Escuchamos tu marca, tu mercado y tus objetivos para entender exactamente dónde estás parado hoy.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Estrategia",
    description:
      "Diseñamos un plan a medida, con metas claras y acciones concretas para llegar a donde querés estar.",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Diseño",
    description:
      "Creamos la identidad visual y el contenido que va a representar tu marca en cada punto de contacto.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Implementación",
    description:
      "Ejecutamos la estrategia: campañas, contenido y desarrollo, con atención al detalle en cada etapa.",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Optimización",
    description:
      "Medimos resultados en tiempo real y ajustamos continuamente para mejorar el rendimiento.",
  },
];
