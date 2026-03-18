"use client";

import React, { useRef, useMemo, useCallback, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// --------------------------------------------------------------------------
// Generate points on a sphere using fibonacci distribution
// --------------------------------------------------------------------------
function fibonacciSphere(count: number, radius: number): Float32Array {
  const positions = new Float32Array(count * 3);
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  for (let i = 0; i < count; i++) {
    const theta = (2 * Math.PI * i) / goldenRatio;
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }
  return positions;
}

const PARTICLE_COUNT = 300;
const GLOBE_RADIUS = 2.2;
const CONNECTION_DISTANCE = 0.9;

function ParticleGlobe() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);
  const mouseTarget = useRef({ x: 0, y: 0 });
  const mouseCurrent = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const positions = useMemo(() => fibonacciSphere(PARTICLE_COUNT, GLOBE_RADIUS), []);

  const linePositions = useMemo(() => {
    const lines: number[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < CONNECTION_DISTANCE) {
          lines.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );
        }
      }
    }
    return new Float32Array(lines);
  }, [positions]);

  // Build geometries imperatively to avoid R3F declarative issues
  const pointsGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  const linesGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    return geo;
  }, [linePositions]);

  const particleTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d")!;
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(129, 140, 248, 1)");
    gradient.addColorStop(0.3, "rgba(99, 102, 241, 0.6)");
    gradient.addColorStop(1, "rgba(99, 102, 241, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
  }, []);

  const handleMouse = useCallback((e: MouseEvent) => {
    mouseTarget.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouseTarget.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [handleMouse]);

  useFrame(() => {
    mouseCurrent.current.x += (mouseTarget.current.x - mouseCurrent.current.x) * 0.03;
    mouseCurrent.current.y += (mouseTarget.current.y - mouseCurrent.current.y) * 0.03;

    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x = mouseCurrent.current.y * 0.3;
      groupRef.current.rotation.z = mouseCurrent.current.x * -0.15;
      groupRef.current.position.x = mouseCurrent.current.x * viewport.width * 0.04;
      groupRef.current.position.y = mouseCurrent.current.y * viewport.height * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef} geometry={pointsGeometry}>
        <pointsMaterial
          size={0.06}
          map={particleTexture}
          transparent
          opacity={0.9}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          color="#818cf8"
        />
      </points>

      <lineSegments ref={linesRef} geometry={linesGeometry}>
        <lineBasicMaterial
          color="#6366f1"
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.08} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[GLOBE_RADIUS + 0.15, GLOBE_RADIUS + 0.2, 128]} />
        <meshBasicMaterial
          color="#6366f1"
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

export default function HeroModel() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ParticleGlobe />
      </Canvas>
    </div>
  );
}
