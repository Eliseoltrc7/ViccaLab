import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { team } from "@/lib/data/team";

export function Founders() {
  return (
    <section className="container-page py-24 md:py-32">
      <SectionHeading
        eyebrow="Las socias"
        title="Dos miradas, un mismo objetivo: hacer crecer tu marca."
        align="center"
        className="mx-auto"
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {team.map((member, index) => (
          <Reveal key={member.id} delay={index * 0.1}>
            <div className="group overflow-hidden rounded-3xl border border-brand-charcoal/8 bg-white transition-shadow duration-300 hover:shadow-[0_30px_60px_-25px_rgba(45,46,40,0.2)]">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-brand-primary">
                  {member.role}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-brand-charcoal">
                  {member.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-brand-charcoal/65">
                  {member.bio}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {member.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="rounded-full bg-brand-cream px-3 py-1 text-xs font-medium text-brand-charcoal/70"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
