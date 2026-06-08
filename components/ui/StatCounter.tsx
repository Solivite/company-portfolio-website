"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function StatCounter({
  value,
  suffix = "",
  label,
  duration = 2,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const step = value / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl font-bold text-white md:text-6xl lg:text-7xl">
        <span className="tabular-nums">{count}</span>
        <span className="text-gradient">{suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-400 md:text-base">
        {label}
      </p>
    </div>
  );
}

export function StatGrid({
  stats,
  className,
}: {
  stats: readonly { value: number; suffix?: string; label: string }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12",
        className
      )}
    >
      {stats.map((stat) => (
        <StatCounter
          key={stat.label}
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
        />
      ))}
    </div>
  );
}
