import { cn } from "@/lib/utils";

interface ServicePillRowProps {
  tags: readonly string[];
  dark?: boolean;
  variant?: "inline" | "pills";
  className?: string;
}

export default function ServicePillRow({
  tags,
  dark = true,
  variant,
  className,
}: ServicePillRowProps) {
  const usePills = variant === "pills" || (!dark && variant !== "inline");

  if (usePills) {
    return (
      <div className={cn("flex flex-wrap gap-2", className)}>
        {tags.map((tag) => (
          <span key={tag} className="light-chip">
            {tag}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-wider md:text-sm",
        dark ? "text-gray-300" : "text-slate-600",
        className
      )}
    >
      {tags.map((tag, i) => (
        <span key={tag} className="flex items-center gap-4">
          {i > 0 && (
            <span
              className={cn(
                "hidden h-4 w-px sm:block",
                dark ? "bg-white/20" : "bg-purple-200"
              )}
              aria-hidden
            />
          )}
          <span>{tag}</span>
        </span>
      ))}
    </div>
  );
}
