import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

function HealthNode({ position, color, text, size = 0.3 }: { 
  position: [number, number, number], 
  color: string, 
  text: string,
  size?: number 
}) {
  const groupRef = useRef<THREE.Group>(null);
  const pulseRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
    if (pulseRef.current) {
      pulseRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Sphere ref={pulseRef} args={[size, 32, 32]}>
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          metalness={0.5}
          roughness={0.2}
        />
      </Sphere>
      <Sphere args={[size * 0.8, 32, 32]}>
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
      <Text
        position={[0, size * 2, 0]}
        fontSize={size * 0.8}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
}

function ConnectionLines({ points }: { points: [number, number, number][] }) {
  const lineRef = useRef<THREE.LineSegments>(null);

  useFrame((state) => {
    if (lineRef.current) {
      lineRef.current.rotation.y += 0.001;
    }
  });

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(
    points.map(point => new THREE.Vector3(...point))
  );

  return (
    <line ref={lineRef}>
      <bufferGeometry attach="geometry" {...lineGeometry} />
      <lineBasicMaterial attach="material" color="#8B5CF6" opacity={0.3} transparent linewidth={1} />
    </line>
  );
}

function DataFlow({ start, end }: { start: [number, number, number], end: [number, number, number] }) {
  const particleRef = useRef<THREE.Mesh>(null);
  const progress = useRef(0);

  useFrame(() => {
    if (particleRef.current) {
      progress.current += 0.01;
      if (progress.current > 1) progress.current = 0;

      const x = start[0] + (end[0] - start[0]) * progress.current;
      const y = start[1] + (end[1] - start[1]) * progress.current;
      const z = start[2] + (end[2] - start[2]) * progress.current;

      particleRef.current.position.set(x, y, z);
    }
  });

  return (
    <Sphere ref={particleRef} args={[0.05, 16, 16]} position={start}>
      <meshStandardMaterial
        color="#8B5CF6"
        emissive="#8B5CF6"
        emissiveIntensity={2}
      />
    </Sphere>
  );
}

function AINetwork() {
  const networkRef = useRef<THREE.Group>(null);
  const nodes = [
    { position: [0, 0, 0], color: "#8B5CF6", text: "AI Core", size: 0.4 },
    { position: [-2, 1, -2], color: "#EC4899", text: "Diagnostics" },
    { position: [2, 1, -2], color: "#3B82F6", text: "Monitoring" },
    { position: [-2, -1, 2], color: "#10B981", text: "Analysis" },
    { position: [2, -1, 2], color: "#F59E0B", text: "Prediction" }
  ];

  useFrame((state) => {
    if (networkRef.current) {
      networkRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={networkRef}>
      {nodes.map((node, i) => (
        <HealthNode key={i} {...node} />
      ))}
      
      <ConnectionLines 
        points={nodes.map(node => node.position as [number, number, number])} 
      />
      
      {nodes.slice(1).map((node, i) => (
        <DataFlow 
          key={i}
          start={nodes[0].position}
          end={node.position}
        />
      ))}
    </group>
  );
}

export default function HealthDashboard3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [6, 4, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <AINetwork />
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
        <fog attach="fog" args={['#000', 8, 16]} />
      </Canvas>
    </div>
  );
}