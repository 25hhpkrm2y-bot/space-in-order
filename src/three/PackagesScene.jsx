import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { sectionProgress } from './scrollProgress';

/* One thin wireframe frame per tier — RESET, RESET+, SIGNATURE SPACE — sized
   to match scale of offer. Each starts slightly offset/tilted and settles
   into an even aligned row as the section scrolls into view. */
const tiers = [
  {
    size: [0.55, 0.55, 0.55],
    color: '#A89B82',
    start: { pos: [-2.5, 0.55, -1.6], rot: [0.18, 0.3, 0.08] },
    target: { pos: [-2.2, 0.1, -1], rot: [0, 0, 0] }
  },
  {
    size: [0.78, 0.78, 0.78],
    color: '#B8A06A',
    start: { pos: [0.3, -0.55, -2], rot: [-0.16, -0.24, 0.1] },
    target: { pos: [0, -0.1, -1.4], rot: [0, 0, 0] }
  },
  {
    size: [1.05, 1.05, 1.05],
    color: '#2A2823',
    start: { pos: [2.55, 0.5, -1.6], rot: [0.14, -0.28, -0.1] },
    target: { pos: [2.2, 0.05, -1], rot: [0, 0, 0] }
  }
];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerpVec(a, b, t) {
  return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
}

function Block({ size, color, start, target, containerRef }) {
  const mesh = useRef();

  useFrame(() => {
    const t = Math.min(sectionProgress(containerRef.current) * 1.6, 1);
    if (mesh.current) {
      mesh.current.position.set(...lerpVec(start.pos, target.pos, t));
      mesh.current.rotation.set(...lerpVec(start.rot, target.rot, t));
      mesh.current.material.opacity = 0.3 + t * 0.3;
    }
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={size} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.3} />
    </mesh>
  );
}

export default function PackagesScene({ containerRef }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      camera={{ position: [0, 0, 6], fov: 34 }}
      style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        {tiers.map((tier, index) => (
          <Block key={index} {...tier} containerRef={containerRef} />
        ))}
      </Suspense>
    </Canvas>
  );
}
