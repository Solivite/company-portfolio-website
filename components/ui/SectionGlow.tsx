import { cn } from "@/lib/utils";

interface SectionGlowProps {
  className?: string;
  position?: "top" | "bottom" | "center";
}

export default function SectionGlow({
  className,
  position = "center",
}: SectionGlowProps) {
  const positionClasses = {
    top: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
    bottom: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <div
        className={cn(
          "absolute h-[500px] w-[500px] rounded-full opacity-30 blur-[120px]",
          "bg-purple-600/40 animate-glow-pulse",
          positionClasses[position]
        )}
      />
      <div
        className={cn(
          "absolute h-[300px] w-[300px] rounded-full opacity-20 blur-[80px]",
          "bg-violet-500/30",
          position === "center" && "top-1/3 right-1/4",
          position === "top" && "top-0 right-1/3",
          position === "bottom" && "bottom-0 left-1/3"
        )}
      />
    </div>
  );
}
