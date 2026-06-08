"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface OptionalImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function OptionalImage({ src, alt, className }: OptionalImageProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={cn("absolute inset-0 h-full w-full object-cover", className)}
      onError={() => setVisible(false)}
    />
  );
}
