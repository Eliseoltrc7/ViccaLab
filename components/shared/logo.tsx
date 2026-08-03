import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  light?: boolean;
};

export function Logo({ className, light = false }: LogoProps) {
  return (
    <Image
      src="/brand/viccalab-logo.png"
      alt="ViccaLab"
      width={851}
      height={315}
      priority
      className={cn(
        "h-8 w-auto transition-all duration-500",
        light && "brightness-0 invert",
        className
      )}
    />
  );
}
