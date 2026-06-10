"use client";

import { useEffect, useState } from "react";

export function usePreferWebGL() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 767px)").matches;

    const canvas = document.createElement("canvas");
    const hasWebGL =
      !!canvas.getContext("webgl2") || !!canvas.getContext("webgl");

    setEnabled(hasWebGL && !reducedMotion && !mobile);
  }, []);

  return enabled;
}
