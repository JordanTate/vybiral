import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Image from 'next/image';
import ScrollSmootherProvider from '@/providers/ScrollSmootherProvider';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Petr Vybiral',
  description: 'Songwriter, Producer, Mixer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={`${montserrat.variable} antialiased relative`}>
        <div className='fixed w-full w-full h-full bg-noise opacity-15 pointer-events-none'>
          <Image
            width={1920}
            height={1080}
            src='/images/scratches.jpg'
            alt='Noise Texture'
            className='object-cover w-full h-full'
          />
        </div>
        <Nav />
        <ScrollSmootherProvider>{children}</ScrollSmootherProvider>
      </body>
    </html>
  );
}
