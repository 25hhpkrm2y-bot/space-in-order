import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { sectionProgress } from './scrollProgress';

/* Thin wireframe lines only, in tones dark enough to read against the
   site's warm cream background — no filled "boxes". */
const palette = { charcoal: '#2A2823', gold: '#B8A06A', bronze: '#8C6F46', stone: '#A89B82' };

/**
 * Four waypoints per plank — one per process stage (CLEAR, ORGANISE,
 * TRANSFORM, OPTIMISE). Planks start scattered with loose rotation ("noise")
 * and settle into an aligned stack ("order") by the final stage.
 */
const keyframes = [
  [
    [[-1.7, 0.85, -1.2], [0.42, 0.55, 0.12]],
    [[-1.5, 0.32, -1], [0.12, 0.2, 0.04]],
    [[-1.05, 0.04, -0.5], [0, 0, 0]],
    [[-0.9, -0.28, 0], [0, 0, 0]]
  ],
  [
    [[1.5, -0.65, -1.5], [-0.32, -0.4, 0.2]],
    [[1.2, -0.22, -1], [-0.1, -0.1, 0.04]],
    [[0.6, -0.12, -0.4], [0, 0, 0]],
    [[0.3, -0.08, 0], [0, 0, 0]]
  ],
  [
    [[0.2, 1.35, -1.9], [0.5, -0.3, -0.18]],
    [[0.25, 0.62, -1.2], [0.15, -0.1, -0.05]],
    [[0.22, 0.2, -0.5], [0, 0, 0]],
    [[0.3, 0.18, 0], [0, 0, 0]]
  ],
  [
    [[-0.6, -1.25, -1.3], [-0.4, 0.32, 0.3]],
    [[-0.4, -0.6, -0.9], [-0.1, 0.1, 0.04]],
    [[-0.32, -0.38, -0.3], [0, 0, 0]],
    [[-0.3, -0.48, 0], [0, 0, 0]]
  ]
];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerpVec(a, b, t) {
  return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
}

function Plank({ frames, color, progressRef }) {
  const mesh = useRef();

  useFrame(() => {
    const p = progressRef.current * 3;
    const stage = Math.min(Math.floor(p), 2);
    const t = p - stage;
    const [posA, rotA] = frames[stage];
    const [posB, rotB] = frames[stage + 1];
    if (mesh.current) {
      mesh.current.position.set(...lerpVec(posA, posB, t));
      mesh.current.rotation.set(...lerpVec(rotA, rotB, t));
    }
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1.3, 0.22, 0.55]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.55} />
    </mesh>
  );
}

function Rig({ containerRef }) {
  const progressRef = useRef(0);
  const group = useRef();

  useFrame(() => {
    const target = sectionProgress(containerRef.current);
    progressRef.current += (target - progressRef.current) * 0.08;
    if (group.current) {
      group.current.rotation.y = progressRef.current * 0.22;
    }
  });

  return (
    <group ref={group}>
      <Plank frames={keyframes[0]} color={palette.stone} progressRef={progressRef} />
      <Plank frames={keyframes[1]} color={palette.bronze} progressRef={progressRef} />
      <Plank frames={keyframes[2]} color={palette.gold} progressRef={progressRef} />
      <Plank frames={keyframes[3]} color={palette.charcoal} progressRef={progressRef} />
    </group>
  );
}

export default function ProcessScene({ containerRef }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      camera={{ position: [0, 0, 6], fov: 36 }}
      style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        <Rig containerRef={containerRef} />
      </Suspense>
    </Canvas>
  );
}
