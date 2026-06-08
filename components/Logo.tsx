"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "landscape" | "square";
  className?: string;
  showText?: boolean;
  light?: boolean;
}

function HexIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M20 2L36 11V29L20 38L4 29V11L20 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M20 10L28 15V25L20 30L12 25V15L20 10Z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
}

export default function Logo({
  variant = "landscape",
  className = "",
  showText = true,
  light = true,
}: LogoProps) {
  const textColor = light ? "text-white" : "text-foreground";

  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <div className="relative flex h-9 w-9 items-center justify-center">
        <HexIcon className={cn("h-9 w-9", light ? "text-purple-400" : "text-purple-600")} />
        <span
          className={cn(
            "absolute font-display text-sm font-bold",
            light ? "text-white" : "text-foreground"
          )}
        >
          S
        </span>
      </div>
      {showText && variant === "landscape" && (
        <div className="flex flex-col leading-none">
          <span className={cn("font-display text-sm font-bold tracking-widest uppercase", textColor)}>
            Solivite
          </span>
          <span className={cn("text-[10px] font-medium tracking-[0.15em] uppercase opacity-70", textColor)}>
            Solutions
          </span>
        </div>
      )}
    </Link>
  );
}
