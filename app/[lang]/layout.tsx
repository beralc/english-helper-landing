import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { Lang } from '@/lib/content';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import CookieConsent from '@/components/CookieConsent';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bernardo\'s English Helper — Practica inglés sin presión',
  description: 'Tutor de conversación en inglés para personas de 50 años o más. Participa en el estudio de la UCM. Acceso completamente gratuito.',
  metadataBase: new URL('https://invitation-englishhelper.bernardomorales.com'),
  openGraph: {
    title: 'Practica inglés cuando quieras, a tu ritmo y sin presión',
    description: 'Tutor de conversación en inglés para personas de 50 años o más. Participa en el estudio de la UCM. Completamente gratuito.',
    url: 'https://invitation-englishhelper.bernardomorales.com',
    siteName: "Bernardo's English Helper",
    images: [
      {
        url: '/imageBerni1.jpg',
        width: 1200,
        height: 630,
        alt: 'Mujer mayor practicando inglés desde casa con un tutor de voz',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Practica inglés cuando quieras, a tu ritmo y sin presión',
    description: 'Tutor de conversación en inglés para personas de 50 años o más. Completamente gratuito.',
    images: ['/imageBerni1.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params as { lang: Lang };

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <GoogleAnalytics />
        <LanguageSwitcher currentLang={lang} />
        <main>{children}</main>
        <CookieConsent lang={lang} />
      </body>
    </html>
  );
}
