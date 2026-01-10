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
        I&apos;m a Songwriter and Producer based in Manchester, England.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        I&apos;ve spent the last 15 years cutting my teeth in the trenches of
        music-making and I&apos;m keen to use everything I&apos;ve learnt along
        the way to get the best out of your music in the spirit of creative
        freedom - no assembly line attitudes involved.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <Link href='/contact'>Get in touch</Link> with me now to discuss your
        project and what I can do for you.
      </motion.p>
    </div>
  );
}
