"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      // smooth: true,
      lerp: 0.1, // Adjust scrolling interpolation
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  return <>{children}</>;
}
