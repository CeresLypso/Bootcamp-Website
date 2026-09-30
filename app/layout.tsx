import './globals.css';
import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RF Academy Tech Bootcamp — Bootcamp Teknologi Hybrid 3 Bulan',
  description:
    'Percepat karier teknologi Anda bersama RF Academy. Bootcamp hybrid 3 bulan dengan jalur Full-Stack, Python, AI, dan Data Science. Belajar, bangun, dan luncurkan karier Anda.',
  openGraph: {
    title: 'RF Academy Tech Bootcamp',
    description:
      'Bootcamp Teknologi Hybrid 3 Bulan — Jalur Full-Stack, Python, AI, dan Data Science.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
