import { cn } from "@/lib/utils";
import { FlowerBurst } from "@/components/shared/decorative-shapes";

type LogoProps = {
  className?: string;
  light?: boolean;
  showMark?: boolean;
};

export function Logo({ className, light = false, showMark = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {showMark && (
        <span
          className={cn(
            "flex aspect-square h-[1em] items-center justify-center rounded-full",
            light ? "bg-white/15" : "bg-brand-primary/10"
          )}
        >
          <FlowerBurst
            className={cn("h-[0.62em] w-[0.62em]", light ? "text-brand-lime" : "text-brand-primary")}
            petals={6}
          />
        </span>
      )}
      <span className="font-display flex items-baseline font-bold tracking-tight">
        <span className={light ? "text-white" : "text-brand-primary"}>Vicca</span>
        <span className={light ? "text-brand-lime" : "text-brand-lavender"}>Lab</span>
      </span>
    </span>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-brand-primary-dark",
        className
      )}
    >
      <FlowerBurst className="h-[62%] w-[62%] text-brand-lime" petals={6} />
    </span>
  );
}
