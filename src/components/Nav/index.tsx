'use client';

import Link from 'next/link';
import styles from './index.module.scss';
import { useNav } from './hooks/useNav';

export default function Nav() {
  const {
    navItems,
    navRef,
    navBackgroundRef,
    handleMouseEnter,
    handleMouseLeave,
  } = useNav();

  return (
    <nav ref={navRef} className={styles.nav}>
      <div className={styles.container}>
        <Link href='/' className={styles.logo}>
          Petr Vybiral
        </Link>
        <div className={styles.links}>
          <div ref={navBackgroundRef} className={styles.background}></div>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={styles.button}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
