import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";
import { StickerBadge } from "@/components/shared/sticker-badge";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <StickerBadge className="mb-5">{eyebrow}</StickerBadge>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl leading-[1.1] font-bold text-balance text-brand-charcoal sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-brand-charcoal/65 md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
