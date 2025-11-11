'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import styles from './index.module.scss';

export default function About() {
  return (
    <div id='about' className={styles.about}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        I&apos;m a Songwriter, Producer and Mixer based in Manchester, England.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        I&apos;ve spent the last 15 years in the trenches of music-making,
        gathering experience one day at a time. I&apos;m keen to use everything
        I&apos;ve learnt along the way to get the best out of your music in the
        spirit of creative freedom - no assembly line attitudes involved.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        If this resonates with you, <Link href='/contact'>get in touch</Link>{' '}
        with me.
      </motion.p>
    </div>
  );
}
