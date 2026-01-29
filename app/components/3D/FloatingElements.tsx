'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingElementsProps {
  mousePosition: { x: number; y: number };
}

export function FloatingElements({ mousePosition }: FloatingElementsProps) {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle rotation based on time
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      
      // Slower parallax effect based on mouse position
      groupRef.current.position.x = mousePosition.x * 0.3;
      groupRef.current.position.y = mousePosition.y * 0.2;
    }

    // Individual sphere animations
    sphereRefs.current.forEach((sphere, index) => {
      if (sphere) {
        sphere.position.y = Math.sin(state.clock.elapsedTime * 0.8 + index) * 0.7;
        sphere.rotation.x = state.clock.elapsedTime * 0.3;
        sphere.rotation.z = state.clock.elapsedTime * 0.2;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Floating spheres */}
      {[...Array(8)].map((_, index) => (
        <Sphere
          key={index}
          ref={(el) => {
            sphereRefs.current[index] = el;
          }}
          args={[0.1 + Math.random() * 0.2]}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 4,
          ]}
        >
          <meshStandardMaterial
            color={index % 2 === 0 ? '#ec4899' : '#a855f7'}
            transparent
            opacity={0.6}
            emissive={index % 2 === 0 ? '#ec4899' : '#a855f7'}
            emissiveIntensity={0.2}
          />
        </Sphere>
      ))}

      {/* Floating cubes */}
      {[...Array(4)].map((_, index) => (
        <Box
          key={`cube-${index}`}
          args={[0.2, 0.2, 0.2]}
          position={[
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 3,
          ]}
        >
          <meshStandardMaterial
            color="#f8fafc"
            transparent
            opacity={0.4}
            emissive="#f8fafc"
            emissiveIntensity={0.1}
          />
        </Box>
      ))}
    </group>
  );
}