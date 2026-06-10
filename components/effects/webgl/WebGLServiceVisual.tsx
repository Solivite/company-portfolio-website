"use client";

import dynamic from "next/dynamic";
import { usePreferWebGL } from "@/lib/hooks/usePreferWebGL";
import type { ServiceVisualType } from "@/lib/services-data";
import { cn } from "@/lib/utils";

const WebGLCanvas = dynamic(() => import("./WebGLCanvas"), { ssr: false });

const WEBGL_TYPES: ServiceVisualType[] = [
  "development",
  "web",
  "marketing",
  "ai",
  "meta",
];

export function supportsWebGLVisual(type: ServiceVisualType) {
  return WEBGL_TYPES.includes(type);
}

interface WebGLServiceVisualProps {
  type: ServiceVisualType;
  className?: string;
}

export default function WebGLServiceVisual({ type, className }: WebGLServiceVisualProps) {
  const preferWebGL = usePreferWebGL();

  if (!preferWebGL || !supportsWebGLVisual(type)) {
    return null;
  }

  return (
    <div className={cn("absolute inset-0 z-10", className)}>
      <WebGLCanvas type={type} className="h-full w-full" />
    </div>
  );
}
