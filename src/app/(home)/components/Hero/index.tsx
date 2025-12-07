'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import useHeroScroll from './hooks/useHeroScroll';
import { handleScrollClick } from './utils/navigation';
import { animations, getAnimationProps } from './utils/animations';
import styles from './index.module.scss';

export default function Hero() {
  const { ref, scale, opacity, y } = useHeroScroll();

  const titleAnimationProps = getAnimationProps(animations.title);
  const subtitleAnimationProps = getAnimationProps(animations.subtitle);
  const listenButtonAnimationProps = getAnimationProps(
    animations.buttons.listen
  );
  const contactButtonAnimationProps = getAnimationProps(
    animations.buttons.contact
  );

  return (
    <div ref={ref} className={styles.hero}>
      <div className={styles.background}>
        <Image
          src='/images/texture.jpg'
          alt='Hero Background'
          fill
          className={styles.backgroundImage}
        />
      </div>
      <div className={styles.heroText}>
        <motion.h1
          className={styles.heroTitle}
          {...titleAnimationProps}
          style={{
            scale,
            opacity,
            y,
          }}
        >
          Petr Vybiral
        </motion.h1>
        <motion.p {...subtitleAnimationProps} className={styles.heroSubtitle}>
          Songwriter / Producer
        </motion.p>
        <div className={styles.heroButtons}>
          <motion.div {...contactButtonAnimationProps}>
            <Link href='/contact'>Contact</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
