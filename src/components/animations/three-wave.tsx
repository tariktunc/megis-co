"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const SEPARATION = 40;
const AMOUNTX = 70;
const AMOUNTY = 70;

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();
  const [count, setCount] = useState(0);

  // Generate particle positions and colors
  const [positions, colors] = useMemo(() => {
    const numParticles = AMOUNTX * AMOUNTY;
    const positions = new Float32Array(numParticles * 3);
    const colors = new Float32Array(numParticles * 3);
    
    // Purple to blue AI gradient
    const colorInside = new THREE.Color("#A855F7"); // Lighter Purple
    const colorOutside = new THREE.Color("#3B82F6"); // Lighter Blue

    let i = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        // x, y, z
        positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        positions[i + 1] = 0; // z will be calculated in frame
        positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

        // Color based on x position to create a gradient
        const mixedColor = colorInside.clone().lerp(colorOutside, ix / AMOUNTX);
        colors[i] = mixedColor.r;
        colors[i + 1] = mixedColor.g;
        colors[i + 2] = mixedColor.b;

        i += 3;
      }
    }
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const positionsAttr = pointsRef.current.geometry.attributes.position;
    if (!positionsAttr) return;

    // Animate wave based on time and mouse position
    let i = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        // Create the mesmerizing wave equation
        const xDist = (ix + count) * 0.3;
        const yDist = (iy + count) * 0.5;
        
        // Mouse influence
        const mouseXOffset = mouse.x * 200;
        const mouseYOffset = mouse.y * 200;

        positionsAttr.setY(
          i / 3,
          Math.sin(xDist) * 50 + 
          Math.sin(yDist) * 50 + 
          Math.sin((ix + mouseXOffset * 0.01) * 0.1) * 20 +
          Math.sin((iy + mouseYOffset * 0.01) * 0.1) * 20
        );
        i += 3;
      }
    }
    
    positionsAttr.needsUpdate = true;
    
    // Subtle rotation to make it feel like floating in a void
    pointsRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;

    setCount((prev) => prev + 0.05);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={4}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ThreeWave() {
  return (
    <div className="fixed inset-0 z-0 opacity-100 pointer-events-none">
      <Canvas
        camera={{ position: [0, 400, 1000], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
