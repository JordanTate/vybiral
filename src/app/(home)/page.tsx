import Hero from './components/Hero';
import About from './components/About';
import Discography from './components/Discography';
import Listen from './components/Listen';

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <Listen />
        <Discography />
      </main>
    </div>
  );
}
