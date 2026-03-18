"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface OrbProps {
  color?: string;
  size?: number;
  speed?: number;
}

function Orb({ color = "#6366f1", size = 1, speed = 0.5 }: OrbProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.LineSegments>(null);

  const geometry = React.useMemo(
    () => new THREE.OctahedronGeometry(size, 0),
    [size]
  );
  const edgesGeometry = React.useMemo(
    () => new THREE.EdgesGeometry(geometry),
    [geometry]
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.3;
      meshRef.current.rotation.y = t * 0.5;
      meshRef.current.rotation.z = t * 0.2;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = t * 0.3;
      wireRef.current.rotation.y = t * 0.5;
      wireRef.current.rotation.z = t * 0.2;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.8}>
      <group>
        <mesh ref={meshRef} geometry={geometry}>
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.06}
            side={THREE.DoubleSide}
          />
        </mesh>
        <lineSegments ref={wireRef} geometry={edgesGeometry}>
          <lineBasicMaterial color={color} transparent opacity={0.35} />
        </lineSegments>
        <mesh>
          <sphereGeometry args={[size * 0.3, 12, 12]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.4}
            transparent
            opacity={0.12}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function FloatingOrb({
  color = "#6366f1",
  size = 1,
  speed = 0.5,
}: OrbProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[3, 3, 3]} intensity={0.5} color={color} />
        <Orb color={color} size={size} speed={speed} />
      </Canvas>
    </div>
  );
}
