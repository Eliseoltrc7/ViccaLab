import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";
import { StickerBadge } from "@/components/shared/sticker-badge";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
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
        <h2
          className={cn(
            "font-display text-3xl leading-[1.1] font-bold text-balance sm:text-4xl md:text-5xl",
            tone === "light" ? "text-white" : "text-brand-charcoal"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed md:text-lg",
              tone === "light" ? "text-white/65" : "text-brand-charcoal/65"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
