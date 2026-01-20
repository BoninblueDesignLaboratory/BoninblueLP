"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Environment } from "@react-three/drei";

function FloatingShape({ position, rotationSpeed, scale }: { position: [number, number, number], rotationSpeed: [number, number, number], scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed[0] * delta;
      meshRef.current.rotation.y += rotationSpeed[1] * delta;
      meshRef.current.rotation.z += rotationSpeed[2] * delta;

      // Add a gentle floating motion
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.002;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <tetrahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color="#8888aa" wireframe transparent opacity={0.1} />
    </mesh>
  );
}

function FloatingShapes() {
    const count = 50;
    const shapes = useMemo(() => {
        return new Array(count).fill(0).map(() => ({
            position: [
                (Math.random() - 0.5) * 20, // Spread across x
                (Math.random() - 0.5) * 20, // Spread across y
                (Math.random() - 0.5) * 10 - 5 // Spread across z, pushing them back a bit
            ] as [number, number, number],
            rotationSpeed: [
                Math.random() * 0.2, 
                Math.random() * 0.2, 
                Math.random() * 0.2
            ] as [number, number, number],
            scale: Math.random() * 0.5 + 0.2
        }));
    }, []);

    return (
        <>
            {shapes.map((shape, i) => (
                <FloatingShape key={i} {...shape} />
            ))}
        </>
    );
}

export default function WireframeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
