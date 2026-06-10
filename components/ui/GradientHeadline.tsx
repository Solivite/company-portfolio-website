import { cn } from "@/lib/utils";

interface GradientHeadlineProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  gradientClassName?: string;
}

export default function GradientHeadline({
  children,
  as: Tag = "h1",
  className,
  gradientClassName,
}: GradientHeadlineProps) {
  return (
    <Tag className={cn("font-display font-bold tracking-tight text-white", className)}>
      {children}
    </Tag>
  );
}

export function GradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("text-gradient", className)}>{children}</span>;
}

export function GradientTextLight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("text-gradient-light", className)}>{children}</span>;
}
