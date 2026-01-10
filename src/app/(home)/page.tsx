import Link from 'next/link';
import Hero from './components/Hero';
import About from './components/About';
import Discography from './components/Discography';
import Listen from './components/Listen';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Listen />
        <About />
        <Discography />
        <Link href='/contact' className={styles.link}>
          Get in Touch
        </Link>
      </main>
    </div>
  );
}
