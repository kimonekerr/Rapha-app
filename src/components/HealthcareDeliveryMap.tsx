import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

function Vehicle({ position, rotation }: { position: [number, number, number], rotation: number }) {
  const vehicleRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (vehicleRef.current) {
      // Add gentle floating motion
      const time = clock.getElapsedTime();
      vehicleRef.current.position.y = Math.sin(time * 2) * 0.1;
    }
  });

  return (
    <group ref={vehicleRef} position={position} rotation={[0, rotation, 0]}>
      <mesh>
        <boxGeometry args={[0.4, 0.2, 0.6]} />
        <meshStandardMaterial color="#8B5CF6" metalness={0.8} roughness={0.2} />
      </mesh>
      {[
        [0.15, 0, 0.2],
        [-0.15, 0, 0.2],
        [0.15, 0, -0.2],
        [-0.15, 0, -0.2]
      ].map((wheelPos, index) => (
        <mesh key={index} position={wheelPos as [number, number, number]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#000000" metalness={0.5} roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function Location({ position, color, label }: { position: [number, number, number], color: string, label: string }) {
  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[0.3, 0.3, 0.1, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Text
        position={[0, 0.5, 0]}
        fontSize={0.3}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}

function DeliveryPath() {
  const pathRef = useRef<THREE.Line>(null);
  
  useFrame(({ clock }) => {
    if (pathRef.current) {
      pathRef.current.material.dashOffset = -clock.getElapsedTime() * 0.5;
    }
  });

  const points = [
    new THREE.Vector3(-2, 0, -2),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(2, 0, 2)
  ];
  
  const curve = new THREE.CatmullRomCurve3(points);
  const linePoints = curve.getPoints(50);

  return (
    <line ref={pathRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={linePoints.length}
          array={new Float32Array(linePoints.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineDashedMaterial
        color="#8B5CF6"
        dashSize={0.5}
        gapSize={0.2}
        linewidth={1}
      />
    </line>
  );
}

function MovingVehicle({ progress }: { progress: number }) {
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-2, 0, -2),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(2, 0, 2)
  ]);

  const point = curve.getPoint(progress);
  const tangent = curve.getTangent(progress);
  const rotation = Math.atan2(tangent.x, tangent.z);

  return (
    <Vehicle 
      position={[point.x, point.y, point.z]} 
      rotation={rotation}
    />
  );
}

function Grid() {
  return (
    <gridHelper
      args={[20, 20, '#8B5CF6', '#8B5CF6']}
      position={[0, -0.1, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export default function HealthcareDeliveryMap() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 1 ? 0 : prev + 0.002)); // Slowed down the movement
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-xl bg-gradient-to-b from-purple-900 to-gray-900">
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Grid />
        <DeliveryPath />
        <Location position={[-2, 0, -2]} color="#3B82F6" label="Doctor's Office" />
        <Location position={[2, 0, 2]} color="#10B981" label="Patient Home" />
        <MovingVehicle progress={progress} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
      
      <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Healthcare Provider En Route</h3>
            <p className="text-xs text-gray-600">Monitoring real-time delivery progress</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-purple-600 transition-all duration-300"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}