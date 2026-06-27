import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { sectionProgress } from './scrollProgress';

/**
 * Three thin architectural lines at different depths, drifting at different
 * scroll-linked speeds — a Apple-style depth parallax built from pure
 * geometry, no imagery. There is no literal before/after gallery on this
 * site (no project photography exists yet), so this stands in as the
 * "subtle depth" section.
 */
function Layer({ containerRef, depth, color, opacity, y0 }) {
  const mesh = useRef();

  useFrame(() => {
    const p = sectionProgress(containerRef.current);
    if (mesh.current) {
      mesh.current.position.y = y0 + p * depth;
    }
  });

  return (
    <mesh ref={mesh} position={[0, y0, -depth * 2 - 1]}>
      <planeGeometry args={[9, 0.015]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

export default function DepthScene({ containerRef }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      camera={{ position: [0, 0, 5], fov: 40 }}
      style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        <Layer containerRef={containerRef} depth={0.6} color="#B8A06A" opacity={0.16} y0={1.2} />
        <Layer containerRef={containerRef} depth={1.1} color="#191817" opacity={0.09} y0={0} />
        <Layer containerRef={containerRef} depth={0.4} color="#191817" opacity={0.13} y0={-1.1} />
      </Suspense>
    </Canvas>
  );
}
