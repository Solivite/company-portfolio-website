import { cn } from "@/lib/utils";

type GlowPosition = "top" | "bottom" | "center" | "left" | "right";
type GlowVariant = "spot" | "band-h" | "band-v";

interface SectionGlowProps {
  className?: string;
  position?: GlowPosition;
  variant?: GlowVariant;
}

const positionMap: Record<GlowPosition, string> = {
  top: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/3",
  bottom: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  left: "top-1/2 left-0 -translate-x-1/3 -translate-y-1/2",
  right: "top-1/2 right-0 translate-x-1/3 -translate-y-1/2",
};

const variantMap: Record<GlowVariant, { primary: string; secondary: string }> = {
  spot: {
    primary: "h-[500px] w-[500px] blur-[120px]",
    secondary: "h-[300px] w-[300px] blur-[80px]",
  },
  "band-h": {
    primary: "h-[220px] w-[160vw] blur-[140px] rounded-[100%]",
    secondary: "h-[140px] w-[120vw] blur-[100px] rounded-[100%]",
  },
  "band-v": {
    primary: "h-[70vh] w-[40vw] blur-[130px] rounded-[100%]",
    secondary: "h-[50vh] w-[25vw] blur-[90px] rounded-[100%]",
  },
};

export default function SectionGlow({
  className,
  position = "center",
  variant = "spot",
}: SectionGlowProps) {
  const sizes = variantMap[variant];

  const secondaryPosition =
    position === "left"
      ? "top-1/4 left-1/4"
      : position === "right"
        ? "bottom-1/4 right-1/4"
        : position === "top"
          ? "top-0 right-1/4"
          : position === "bottom"
            ? "bottom-0 left-1/4"
            : "top-1/3 right-1/4";

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <div
        className={cn(
          "absolute opacity-30 animate-glow-pulse bg-purple-600/40",
          sizes.primary,
          positionMap[position]
        )}
      />
      <div
        className={cn(
          "absolute opacity-20 bg-violet-500/30",
          sizes.secondary,
          secondaryPosition
        )}
      />
    </div>
  );
}
