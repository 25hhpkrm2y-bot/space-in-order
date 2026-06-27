import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

/* Thin wireframe lines only — charcoal/bronze, no filled "boxes". */
const lineColor = '#3A3530';
const accentColor = '#8C6F46';

/* Each frame module starts loosely scattered (tilted, offset) and settles
   into a tidy aligned shelving grid as the user scrolls — deterministic,
   slow, no autonomous floating or bobbing. */
const frameModules = [
  {
    size: [1.0, 0.7, 0.55],
    start: { pos: [3.3, 1.35, -3.4], rot: [0.32, 0.42, 0.1] },
    target: { pos: [2.6, 0.55, -3], rot: [0, 0, 0] }
  },
  {
    size: [0.7, 0.7, 0.5],
    start: { pos: [4.3, -0.15, -3.6], rot: [-0.26, -0.32, 0.16] },
    target: { pos: [3.6, 0.55, -3], rot: [0, 0, 0] }
  },
  {
    size: [1.0, 0.5, 0.55],
    start: { pos: [1.85, -1.15, -2.6], rot: [0.22, -0.36, -0.12] },
    target: { pos: [2.6, -0.35, -3], rot: [0, 0, 0] }
  },
  {
    size: [0.7, 0.5, 0.5],
    start: { pos: [4.05, -1.05, -2.8], rot: [-0.16, 0.26, 0.2] },
    target: { pos: [3.6, -0.35, -3], rot: [0, 0, 0] }
  }
];

const slatCluster = {
  bars: 5,
  start: { pos: [5.35, 0.95, -3.6], rot: [0, 0.5, 0] },
  target: { pos: [4.55, 0.1, -3.2], rot: [0, 0, 0] }
};

/* A portrait phone has a much narrower horizontal field of view than desktop
   (perspective fov is vertical; horizontal shrinks with aspect ratio), so the
   desktop modules' x positions (2.6–5.35) sit entirely outside the frustum on
   mobile. These are authored separately, kept close to center-x and spread
   vertically instead, where portrait screens actually have room to spare. */
const compactModules = [
  {
    size: [0.85, 0.6, 0.5],
    start: { pos: [0.95, 2.55, -3], rot: [0.3, 0.4, 0.1] },
    target: { pos: [0.55, 1.75, -3], rot: [0, 0, 0] }
  },
  {
    size: [0.6, 0.55, 0.45],
    start: { pos: [-0.95, -2.35, -3.2], rot: [-0.25, -0.3, 0.15] },
    target: { pos: [-0.5, -1.65, -3], rot: [0, 0, 0] }
  }
];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerpVec(a, b, t) {
  return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
}

/* Scroll-linked alignment progress (0 = scattered, 1 = perfectly ordered),
   eased toward target each frame so the motion stays calm and continuous.
   Compact (mobile) eases a touch slower — calmer on a smaller screen. */
function useAlignProgress(ease) {
  const progress = useRef(0);

  useFrame(() => {
    const max = (window.innerHeight || 1) * 1.1;
    const target = Math.min(Math.max(window.scrollY / max, 0), 1);
    progress.current += (target - progress.current) * ease;
  });

  return progress;
}

function Frame({ size, start, target, progressRef }) {
  const mesh = useRef();

  useFrame(() => {
    const t = progressRef.current;
    if (mesh.current) {
      mesh.current.position.set(...lerpVec(start.pos, target.pos, t));
      mesh.current.rotation.set(...lerpVec(start.rot, target.rot, t));
    }
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={size} />
      <meshBasicMaterial color={lineColor} wireframe transparent opacity={0.5} />
    </mesh>
  );
}

function SlatPanel({ progressRef }) {
  const group = useRef();

  useFrame(() => {
    const t = progressRef.current;
    if (group.current) {
      group.current.position.set(...lerpVec(slatCluster.start.pos, slatCluster.target.pos, t));
      group.current.rotation.set(...lerpVec(slatCluster.start.rot, slatCluster.target.rot, t));
    }
  });

  return (
    <group ref={group}>
      {Array.from({ length: slatCluster.bars }).map((_, index) => (
        <mesh key={index} position={[(index - (slatCluster.bars - 1) / 2) * 0.16, 0, 0]}>
          <boxGeometry args={[0.045, 1.1, 0.045]} />
          <meshBasicMaterial color={accentColor} wireframe transparent opacity={0.45} />
        </mesh>
      ))}
    </group>
  );
}

function Rig({ density }) {
  const compact = density === 'compact';
  const progressRef = useAlignProgress(compact ? 0.024 : 0.035);
  const modules = compact ? compactModules : frameModules;

  return (
    <>
      {modules.map((module, index) => (
        <Frame key={index} {...module} progressRef={progressRef} />
      ))}
      {!compact && <SlatPanel progressRef={progressRef} />}
    </>
  );
}

export default function HeroScene({ density = 'full' }) {
  const compact = density === 'compact';

  return (
    <Canvas
      dpr={compact ? 1 : [1, 1.5]}
      gl={{ antialias: !compact, alpha: true, powerPreference: 'low-power' }}
      camera={{ position: [0, 0, 6], fov: 36 }}
      style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        <Rig density={density} />
      </Suspense>
    </Canvas>
  );
}
