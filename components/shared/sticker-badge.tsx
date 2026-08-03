import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type StickerBadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark" | "lime" | "glass";
  rotate?: "left" | "right";
};

const toneStyles: Record<NonNullable<StickerBadgeProps["tone"]>, string> = {
  light: "bg-brand-lavender-light text-brand-charcoal",
  dark: "bg-brand-charcoal text-brand-cream",
  lime: "bg-brand-lime text-brand-charcoal",
  glass: "border border-white/25 bg-white/10 text-white backdrop-blur-sm",
};

export function StickerBadge({
  children,
  className,
  tone = "light",
  rotate = "left",
}: StickerBadgeProps) {
  return (
    <span
      className={cn(
        "shadow-sticker relative inline-flex items-center rounded-lg px-4 py-1.5 text-xs font-bold tracking-wide uppercase",
        rotate === "left" ? "-rotate-2" : "rotate-2",
        toneStyles[tone],
        className
      )}
    >
      <span
        className={cn(
          "absolute -top-1 h-2 w-2 rounded-full bg-white ring-2",
          rotate === "left" ? "-left-1" : "-right-1",
          tone === "dark" || tone === "glass"
            ? "ring-brand-cream/30"
            : "ring-brand-charcoal/15"
        )}
      />
      <span
        className={cn(
          "absolute -bottom-1 h-2 w-2 rounded-full bg-white ring-2",
          rotate === "left" ? "-right-1" : "-left-1",
          tone === "dark" || tone === "glass"
            ? "ring-brand-cream/30"
            : "ring-brand-charcoal/15"
        )}
      />
      {children}
    </span>
  );
}
