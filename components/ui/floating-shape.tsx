"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

type ShapeType =
  | "octahedron"
  | "icosahedron"
  | "torusKnot"
  | "dodecahedron"
  | "torus"
  | "tetrahedron";

interface FloatingShapeProps {
  shape?: ShapeType;
  color?: string;
  size?: number;
  speed?: number;
  wireOpacity?: number;
  fillOpacity?: number;
  className?: string;
}

function Shape({
  shape = "octahedron",
  color = "#6366f1",
  size = 1,
  speed = 0.5,
  wireOpacity = 0.35,
  fillOpacity = 0.04,
}: Omit<FloatingShapeProps, "className">) {
  const groupRef = useRef<THREE.Group>(null);

  const geometry = useMemo(() => {
    switch (shape) {
      case "icosahedron":
        return new THREE.IcosahedronGeometry(size, 1);
      case "torusKnot":
        return new THREE.TorusKnotGeometry(size * 0.7, size * 0.25, 64, 16);
      case "dodecahedron":
        return new THREE.DodecahedronGeometry(size, 0);
      case "torus":
        return new THREE.TorusGeometry(size * 0.8, size * 0.3, 16, 32);
      case "tetrahedron":
        return new THREE.TetrahedronGeometry(size, 0);
      case "octahedron":
      default:
        return new THREE.OctahedronGeometry(size, 0);
    }
  }, [shape, size]);

  const edgesGeometry = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    if (groupRef.current) {
      groupRef.current.rotation.x = t * 0.3;
      groupRef.current.rotation.y = t * 0.5;
      groupRef.current.rotation.z = t * 0.1;
    }
  });

  return (
    <Float speed={1.0 + speed} rotationIntensity={0.2} floatIntensity={0.6}>
      <group ref={groupRef}>
        {/* Wireframe edges */}
        <lineSegments geometry={edgesGeometry}>
          <lineBasicMaterial color={color} transparent opacity={wireOpacity} />
        </lineSegments>

        {/* Subtle fill */}
        <mesh geometry={geometry}>
          <meshStandardMaterial
            color={color}
            transparent
            opacity={fillOpacity}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Inner glow dot */}
        <mesh>
          <sphereGeometry args={[size * 0.15, 12, 12]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.2}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function FloatingShape({
  shape = "octahedron",
  color = "#6366f1",
  size = 1,
  speed = 0.5,
  wireOpacity = 0.35,
  fillOpacity = 0.04,
  className = "",
}: FloatingShapeProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[3, 3, 3]} intensity={0.4} color={color} />
        <Shape
          shape={shape}
          color={color}
          size={size}
          speed={speed}
          wireOpacity={wireOpacity}
          fillOpacity={fillOpacity}
        />
      </Canvas>
    </div>
  );
}
