import { useRef } from 'react';
import { useScroll, useTransform } from 'motion/react';

export default function useHeroScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref });

  const scale = useTransform(scrollY, [0, 1000], [1, 1.2]);
  const opacity = useTransform(scrollY, [0, 1000], [1, 0.5]);
  const y = useTransform(scrollY, [0, 1000], [0, -100]);

  return { ref, scale, opacity, y };
}
