import { Globe, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ContactBarProps {
  className?: string;
  variant?: "dark" | "light";
}

export default function ContactBar({
  className,
  variant = "dark",
}: ContactBarProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 border-t px-4 py-5 sm:flex-row sm:gap-8",
        isDark
          ? "border-purple-900/50 bg-surface-dark-elevated"
          : "border-border bg-secondary/50",
        className
      )}
    >
      <a
        href={`tel:${SITE.phone.replace(/\D/g, "")}`}
        className={cn(
          "flex items-center gap-3 text-sm font-medium transition-colors",
          isDark
            ? "text-gray-300 hover:text-white"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-600/80 text-white">
          <Phone className="h-4 w-4" />
        </span>
        {SITE.phone}
      </a>

      <span
        className={cn(
          "hidden h-5 w-px sm:block",
          isDark ? "bg-white/10" : "bg-border"
        )}
        aria-hidden
      />

      <a
        href={SITE.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center gap-3 text-sm font-medium transition-colors",
          isDark
            ? "text-gray-300 hover:text-white"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-600/80 text-white">
          <Globe className="h-4 w-4" />
        </span>
        {SITE.website}
      </a>
    </div>
  );
}
