import Link from 'next/link';
import ContactForm from './ContactForm';
import styles from './page.module.scss';

export default function Contact() {
  return (
    <div>
      <main className={styles.main}>
        <ContactForm />
        <div>
          <Link href='/'>&larr; Back to Home</Link>
        </div>
      </main>
    </div>
  );
}
