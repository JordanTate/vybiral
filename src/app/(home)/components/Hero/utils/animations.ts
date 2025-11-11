import type { AnimationConfig } from '../types';

export const animations = {
  title: {
    initial: { y: 20, opacity: 0, letterSpacing: '0.2em' },
    animate: { y: 0, opacity: 1, letterSpacing: '0.3em' },
    transition: { duration: 2, ease: 'easeInOut' },
  },
  subtitle: {
    initial: { x: 20, opacity: 0, filter: 'blur(10px)', scale: 0.95 },
    animate: { x: 0, opacity: 1, filter: 'blur(0px)', scale: 1 },
    transition: { duration: 2, ease: 'easeInOut' },
  },
  buttons: {
    listen: {
      initial: { y: 30, opacity: 0, filter: 'blur(10px)' },
      animate: { y: 0, opacity: 1, filter: 'blur(0px)' },
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        delay: 0.8,
      },
    },
    contact: {
      initial: { y: 30, opacity: 0, filter: 'blur(10px)' },
      animate: { y: 0, opacity: 1, filter: 'blur(0px)' },
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        delay: 1.0,
      },
    },
  },
} as const;

export const getAnimationProps = (
  animation: AnimationConfig
): AnimationConfig => ({
  initial: animation.initial,
  animate: animation.animate,
  transition: animation.transition,
});
