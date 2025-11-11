import Image from 'next/image';
import SpotifyPlayer from '@/components/SpotifyPlayer';
import styles from './index.module.scss';
import Link from 'next/link';

export default function Listen() {
  return (
    <div id='listen' className={styles.listen}>
      <div className={styles.background}>
        <Image
          src='/images/playlist-bg.png'
          alt='Spotify Player Background'
          fill
          className='object-cover rounded-lg'
        />
      </div>
      <SpotifyPlayer
        uri='spotify:playlist:5dtk1b5IxKLxrVU4rS3APH'
        width='352'
        height='352'
        styles={styles}
      />
      <Link href='/contact' className={styles.link}>
        Get in Touch
      </Link>
    </div>
  );
}
