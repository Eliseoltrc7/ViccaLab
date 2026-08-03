import { cn } from "@/lib/utils";

export function AsteriskShape({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={cn("h-10 w-10", className)}
      aria-hidden
    >
      <path
        d="M50 4v92M14 22l72 56M86 22 14 78"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
      />
    </svg>
  );
}

type FlowerBurstProps = {
  className?: string;
  petals?: number;
};

export function FlowerBurst({ className, petals = 6 }: FlowerBurstProps) {
  const angleStep = 360 / petals;
  return (
    <svg viewBox="0 0 100 100" className={cn("h-full w-full", className)} aria-hidden>
      <g fill="currentColor">
        {Array.from({ length: petals }).map((_, i) => (
          <rect
            key={i}
            x="42.5"
            y="2"
            width="15"
            height="48"
            rx="7.5"
            transform={`rotate(${i * angleStep} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="9" />
      </g>
    </svg>
  );
}

export function BlobShape({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M45.3,-58.5C58.6,-49.6,68.7,-34.7,72.4,-18.1C76.1,-1.5,73.4,16.8,64.9,31.6C56.5,46.4,42.3,57.7,26.3,64.6C10.3,71.5,-7.5,74,-24.6,69.6C-41.7,65.2,-58.1,53.9,-67.1,38.7C-76.1,23.5,-77.7,4.4,-73.4,-12.8C-69.1,-30,-58.9,-45.3,-45.3,-54.3C-31.7,-63.3,-15.8,-66,1.2,-67.6C18.3,-69.3,36.5,-69.9,45.3,-58.5Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function GridPattern({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      <defs>
        <pattern
          id="grid-pattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
}
