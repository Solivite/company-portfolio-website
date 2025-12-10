"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
}

export default function ParallaxSection({ children, className = "" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

