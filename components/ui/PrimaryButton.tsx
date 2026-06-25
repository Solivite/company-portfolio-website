import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "filled" | "outline" | "dark";
  className?: string;
  showArrow?: boolean;
}

export default function PrimaryButton({
  href,
  children,
  variant = "filled",
  className,
  showArrow = true,
}: PrimaryButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300";

  const variants = {
    filled:
      "bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:from-purple-500 hover:to-violet-500 glow-purple",
    outline:
      "border border-white/20 text-white hover:border-purple-400/50 hover:bg-white/5",
    dark:
      "border border-white/15 bg-white/[0.06] text-white backdrop-blur-sm hover:border-purple-400/40 hover:bg-white/10",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </Link>
  );
}
