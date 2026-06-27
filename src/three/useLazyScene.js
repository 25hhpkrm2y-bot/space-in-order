import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Gates mounting of a 3D scene behind prefers-reduced-motion and
 * IntersectionObserver visibility (don't pay for a WebGL context the user
 * hasn't scrolled to yet). Runs on every viewport width — callers render a
 * lighter "compact" variant on narrow screens instead of skipping outright.
 * Once active it stays mounted — these scenes are cheap enough not to need
 * teardown.
 */
export function useLazyScene(targetRef) {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

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
  }, [reduceMotion, targetRef]);

  return !reduceMotion && visible;
}
