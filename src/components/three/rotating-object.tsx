"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll, useTransform, motionValue } from "framer-motion";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface RotatingObjectProps {
  color?: string;
  distort?: number;
  speed?: number;
}

export function RotatingObject({
  color = "#6366f1",
  distort = 0.4,
  speed = 1,
}: RotatingObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 * speed;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.5 * speed;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}
