import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Gates mounting of a 3D scene behind: prefers-reduced-motion, a minimum
 * viewport width (skip on small/low-power devices), and IntersectionObserver
 * visibility (don't pay for WebGL contexts the user hasn't scrolled to yet).
 * Once active it stays mounted — sections are cheap enough not to need teardown.
 */
export function useLazyScene(targetRef, { minWidth = 0 } = {}) {
  const reduceMotion = useReducedMotion();
  const [wideEnough, setWideEnough] = useState(() => !minWidth || window.innerWidth >= minWidth);
  const [visible, setVisible] = useState(false);

  // Track viewport width live so resizing/rotating a device re-evaluates the gate,
  // rather than freezing whatever width happened to exist at first mount.
  useEffect(() => {
    if (!minWidth) return;

    function onResize() {
      setWideEnough(window.innerWidth >= minWidth);
    }

    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, [minWidth]);

  useEffect(() => {
    if (reduceMotion || !wideEnough) return;

    const el = targetRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '250px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduceMotion, wideEnough, targetRef]);

  return !reduceMotion && wideEnough && visible;
}
