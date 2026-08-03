import Image from "next/image";
import { Compass, Sparkles, Target } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { team } from "@/lib/data/team";

const pillars = [
  {
    icon: Target,
    title: "El problema que resolvemos",
    text: "Muchas marcas invierten en marketing sin una estrategia real detrás. Nosotras conectamos creatividad con objetivos de negocio concretos.",
  },
  {
    icon: Compass,
    title: "Nuestra misión",
    text: "Acompañar a cada cliente con estrategias personalizadas, diseño cuidado y comunicación honesta en cada etapa del proceso.",
  },
  {
    icon: Sparkles,
    title: "Nuestra visión",
    text: "Ser el estudio creativo de referencia para marcas que quieren crecer con identidad propia, no con fórmulas genéricas.",
  },
];

export function About() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Quiénes somos"
            title="Nacimos para que la creatividad también venda."
            description="ViccaLab nació de la unión de dos miradas complementarias: la creatividad audiovisual y la estrategia de marketing. Desde el primer día supimos que queríamos construir algo distinto — un estudio donde cada marca recibe un plan a medida, no una plantilla."
          />

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-charcoal/65">
              Existimos porque vimos demasiadas marcas invirtiendo tiempo y
              dinero en acciones sueltas y desconectadas entre sí. ViccaLab
              une contenido, diseño, publicidad y tecnología en una sola
              estrategia coherente, pensada para generar resultados reales y
              medibles.
            </p>
          </Reveal>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {team.map((member) => (
                <div
                  key={member.id}
                  className="relative h-12 w-12 overflow-hidden rounded-full ring-4 ring-brand-cream"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-charcoal/60">
              Fundado y liderado por{" "}
              <span className="font-medium text-brand-charcoal">
                Ximena Castellano
              </span>{" "}
              &{" "}
              <span className="font-medium text-brand-charcoal">
                Victoria Felipe
              </span>
            </p>
          </div>
        </div>

        <RevealGroup className="grid gap-5" stagger={0.12}>
          {pillars.map((pillar) => (
            <RevealItem key={pillar.title}>
              <div className="rounded-3xl border border-brand-charcoal/8 bg-white p-7 transition-shadow duration-300 hover:shadow-[0_20px_50px_-20px_rgba(45,46,40,0.15)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-brand-charcoal">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/60">
                  {pillar.text}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <Reveal delay={0.1} className="mt-8">
        <div className="relative overflow-hidden rounded-4xl">
          <Image
            src="/team/equipo-trabajando.jpg"
            alt="Ximena y Victoria trabajando en el diseño de marca de ViccaLab"
            width={1600}
            height={900}
            className="h-[340px] w-full object-cover object-[50%_38%] md:h-[440px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <p className="absolute bottom-6 left-6 font-display text-lg text-white md:text-xl">
            Así trabajamos, todos los días.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
