'use client'
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useState, useRef } from 'react';
import * as random from 'maath/random/dist/maath-random.esm';

function ParticleNexus() {
  const ref = useRef<any>();
  const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 1.5 }) as Float32Array);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#6366f1"
          size={0.007}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#030014]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleNexus />
      </Canvas>
    </div>
  );
}