import type { TargetAndTransition, Transition } from 'motion/react';

export type HeroScrollValues = {
  scale: number;
  opacity: number;
  y: number;
};

export type AnimationConfig = {
  initial: TargetAndTransition | false;
  animate: TargetAndTransition;
  transition: Transition;
};
