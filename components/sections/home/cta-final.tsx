import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { AsteriskShape } from "@/components/shared/decorative-shapes";
import { CONTACT } from "@/lib/constants";

export function CtaFinal() {
  return (
    <section className="container-page py-16 md:py-20">
      <div className="relative overflow-hidden rounded-4xl bg-brand-charcoal px-8 py-20 text-center md:px-16 md:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand-primary/40 blur-3xl" />
          <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-brand-lime/15 blur-3xl" />
          <AsteriskShape className="absolute left-[10%] top-[20%] h-7 w-7 text-brand-lime/60" />
          <AsteriskShape className="absolute right-[12%] bottom-[22%] h-9 w-9 text-white/20" />
        </div>

        <div className="relative">
          <Reveal>
            <h2 className="font-display text-3xl font-medium text-white sm:text-4xl md:text-5xl">
              Tu marca merece crecer.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-md text-base text-white/65">
              Contanos tu proyecto y armemos juntas una estrategia que
              realmente te lleve a donde querés estar.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href={CONTACT.whatsappLink(
                "Hola ViccaLab! Quiero contarles sobre mi proyecto."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-brand-lime px-9 py-5 text-base font-semibold text-brand-charcoal transition-transform duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Hablemos por WhatsApp
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
