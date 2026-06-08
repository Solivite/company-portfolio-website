import { cn } from "@/lib/utils";

interface ServicePillRowProps {
  tags: readonly string[];
  dark?: boolean;
  className?: string;
}

export default function ServicePillRow({
  tags,
  dark = true,
  className,
}: ServicePillRowProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-wider md:text-sm",
        dark ? "text-gray-300" : "text-muted-foreground",
        className
      )}
    >
      {tags.map((tag, i) => (
        <span key={tag} className="flex items-center gap-4">
          {i > 0 && (
            <span
              className={cn(
                "hidden h-4 w-px sm:block",
                dark ? "bg-white/20" : "bg-border"
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
