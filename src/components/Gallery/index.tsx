import Image from 'next/image';
import { GalleryProps } from './types';
import styles from './index.module.scss';

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageContainer}>
          <div className={styles.imageInfo}>
            <p className={`${styles.artist} font-bold uppercase`}>
              {image.info.artist}
            </p>
            <p className={`${styles.track} uppercase mb-4`}>
              {image.info.track}
            </p>
            <p className={`${styles.credit}`}>{image.info.credit}</p>
          </div>
          <Image src={image.src} alt={image.alt} width={300} height={300} />
        </div>
      ))}
    </div>
  );
}
