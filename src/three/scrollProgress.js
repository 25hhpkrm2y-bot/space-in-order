/**
 * Returns 0..1 for how far an element has travelled through the viewport:
 * 0 when its top edge reaches the bottom of the screen, 1 when its bottom
 * edge reaches the top. Read inside useFrame — never via React state — so
 * scroll-linked 3D motion never triggers a re-render.
 */
export function sectionProgress(el) {
  if (!el) return 0;
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || 1;
  const total = rect.height + vh;
  const traveled = vh - rect.top;
  return Math.min(Math.max(traveled / total, 0), 1);
}
