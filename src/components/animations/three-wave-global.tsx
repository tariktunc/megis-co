"use client";

import dynamic from "next/dynamic";

const ThreeWave = dynamic(() => import("@/components/animations/three-wave"), { 
  ssr: false,
});

export function ThreeWaveGlobal() {
  return <ThreeWave />;
}
