"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";
import { FloatingParticles } from "@/components/three/floating-particles";
import { RotatingObject } from "@/components/three/rotating-object";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function HeroScene() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = !mounted || theme === "dark";

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={isDark ? 0.2 : 0.5} />
          <directionalLight position={[5, 5, 5]} intensity={isDark ? 0.4 : 0.7} />
          <pointLight position={[-5, -5, -5]} intensity={isDark ? 0.2 : 0.15} color={isDark ? "#6366f1" : "#4f46e5"} />
          <pointLight position={[5, 0, -3]} intensity={isDark ? 0.15 : 0.1} color={isDark ? "#818cf8" : "#6366f1"} />
          <RotatingObject color={isDark ? "#6366f1" : "#4f46e5"} distort={0.3} speed={0.6} />
          <FloatingParticles count={600} color={isDark ? "#52525b" : "#a1a1aa"} size={0.015} spread={15} />
          <Environment preset={isDark ? "night" : "city"} />
        </Suspense>
      </Canvas>
    </div>
  );
}
