'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface BirthdayCakeProps {
  wishMade: boolean;
}

export function BirthdayCake({ wishMade }: BirthdayCakeProps) {
  const cakeRef = useRef<THREE.Group>(null);
  const flameRef = useRef<THREE.Mesh>(null);
  const [flameIntensity, setFlameIntensity] = useState(1);

  useFrame((state) => {
    if (cakeRef.current) {
      // Gentle rotation
      cakeRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }

    if (flameRef.current && !wishMade) {
      // Flickering flame effect
      const flicker = Math.sin(state.clock.elapsedTime * 8) * 0.1 + 1;
      flameRef.current.scale.setScalar(flicker);
      setFlameIntensity(0.8 + Math.sin(state.clock.elapsedTime * 6) * 0.2);
    }
  });

  return (
    <group ref={cakeRef} position={[0, -1, 0]}>
      {/* Cake Base */}
      <Cylinder args={[1.2, 1.2, 0.8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Cylinder>

      {/* Cake Frosting */}
      <Cylinder args={[1.25, 1.25, 0.2]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#FFB6C1" />
      </Cylinder>

      {/* Cake Top Layer */}
      <Cylinder args={[0.8, 0.8, 0.6]} position={[0, 0.8, 0]}>
        <meshStandardMaterial color="#DDA0DD" />
      </Cylinder>

      {/* Top Frosting */}
      <Cylinder args={[0.85, 0.85, 0.15]} position={[0, 1.2, 0]}>
        <meshStandardMaterial color="#F0E68C" />
      </Cylinder>

      {/* Candle */}
      <Cylinder args={[0.05, 0.05, 0.6]} position={[0, 1.6, 0]}>
        <meshStandardMaterial color="#FF69B4" />
      </Cylinder>

      {/* Flame */}
      {!wishMade && (
        <Sphere 
          ref={flameRef}
          args={[0.1]} 
          position={[0, 2, 0]}
        >
          <meshStandardMaterial 
            color="#FFA500"
            emissive="#FF4500"
            emissiveIntensity={flameIntensity}
          />
        </Sphere>
      )}

      {/* Decorative elements */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = Math.cos(angle) * 1.1;
        const z = Math.sin(angle) * 1.1;
        
        return (
          <Sphere key={i} args={[0.08]} position={[x, 0.6, z]}>
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#FF1493" : "#00CED1"}
              emissive={i % 2 === 0 ? "#FF1493" : "#00CED1"}
              emissiveIntensity={0.3}
            />
          </Sphere>
        );
      })}

      {/* Sparkles around the cake */}
      {wishMade && [...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 2 + Math.sin(i) * 0.5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(i * 2) * 0.5;
        
        return (
          <Sphere key={`sparkle-${i}`} args={[0.05]} position={[x, y + 1, z]}>
            <meshStandardMaterial 
              color="#FFD700"
              emissive="#FFD700"
              emissiveIntensity={1}
            />
          </Sphere>
        );
      })}
    </group>
  );
}