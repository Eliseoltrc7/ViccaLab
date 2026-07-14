import {
  Target,
  BarChart3,
  Palette,
  Megaphone,
  Lightbulb,
  Users,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";

const benefits = [
  { icon: Target, title: "Estrategias personalizadas", text: "Cada plan se diseña a medida de tu marca y tu mercado." },
  { icon: BarChart3, title: "Resultados medibles", text: "Reportes claros para que veas el impacto real de cada acción." },
  { icon: Palette, title: "Diseño profesional", text: "Piezas visuales cuidadas en cada detalle, sin plantillas genéricas." },
  { icon: Megaphone, title: "Publicidad efectiva", text: "Campañas optimizadas para convertir, no solo para impactar." },
  { icon: Lightbulb, title: "Creatividad", text: "Ideas frescas que hacen que tu marca se destaque de verdad." },
  { icon: Users, title: "Acompañamiento", text: "Estamos presentes en cada etapa, no solo en la entrega final." },
  { icon: MessageSquare, title: "Comunicación constante", text: "Hablamos tu mismo idioma, sin tecnicismos innecesarios." },
  { icon: Sparkles, title: "Innovación", text: "Siempre un paso adelante en tendencias y herramientas digitales." },
];

export function WhyUs() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="¿Por qué elegirnos?"
          title="Todo lo que necesitás de un solo estudio creativo."
          align="center"
          className="mx-auto"
        />

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {benefits.map((benefit) => (
            <RevealItem key={benefit.title}>
              <div className="h-full rounded-3xl border border-brand-charcoal/8 bg-brand-cream/60 p-6 transition-colors duration-300 hover:bg-brand-cream">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-primary text-white">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-base font-medium text-brand-charcoal">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/60">
                  {benefit.text}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
