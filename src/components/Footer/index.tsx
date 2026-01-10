import Link from 'next/link';
import { Copyright } from 'lucide-react';
import styles from './index.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        Petr Vybiral <Copyright width={12} height={12} />{' '}
        {new Date().getFullYear()}
      </div>
    </footer>
  );
}
