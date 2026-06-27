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

/* The desktop row spreads tiers across x ±2.5 — outside a portrait phone's
   narrow horizontal field of view. Authored separately, kept near center-x
   and stacked vertically, where a tall phone screen has room to spare. */
const compactTiers = [
  {
    size: [0.4, 0.4, 0.4],
    color: '#A89B82',
    start: { pos: [0.9, 1.55, -1.8], rot: [0.18, 0.3, 0.08] },
    target: { pos: [0.65, 1.15, -1.4], rot: [0, 0, 0] }
  },
  {
    size: [0.5, 0.5, 0.5],
    color: '#2A2823',
    start: { pos: [-0.9, -1.5, -1.8], rot: [0.14, -0.28, -0.1] },
    target: { pos: [-0.65, -1.15, -1.4], rot: [0, 0, 0] }
  }
];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerpVec(a, b, t) {
  return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
}

function Block({ size, color, start, target, containerRef, speed, maxOpacity }) {
  const mesh = useRef();
  const progressRef = useRef(0);

  useFrame(() => {
    const target2 = Math.min(sectionProgress(containerRef.current) * 1.6, 1);
    progressRef.current += (target2 - progressRef.current) * speed;
    const t = progressRef.current;
    if (mesh.current) {
      mesh.current.position.set(...lerpVec(start.pos, target.pos, t));
      mesh.current.rotation.set(...lerpVec(start.rot, target.rot, t));
      mesh.current.material.opacity = maxOpacity * (0.5 + t * 0.5);
    }
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={size} />
      <meshBasicMaterial color={color} wireframe transparent opacity={maxOpacity * 0.5} />
    </mesh>
  );
}

export default function PackagesScene({ containerRef, density = 'full' }) {
  const compact = density === 'compact';
  const visibleTiers = compact ? compactTiers : tiers;

  return (
    <Canvas
      dpr={compact ? 1 : [1, 1.5]}
      gl={{ antialias: !compact, alpha: true, powerPreference: 'low-power' }}
      camera={{ position: [0, 0, 6], fov: 34 }}
      style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        {visibleTiers.map((tier, index) => (
          <Block
            key={index}
            {...tier}
            containerRef={containerRef}
            speed={compact ? 0.1 : 0.16}
            maxOpacity={compact ? 0.4 : 0.6}
          />
        ))}
      </Suspense>
    </Canvas>
  );
}
