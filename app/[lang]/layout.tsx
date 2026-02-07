import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { Lang } from '@/lib/content';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import CookieConsent from '@/components/CookieConsent';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bernardo\'s English Helper - English Conversation Practice for Seniors',
  description: 'AI-powered English conversation tutor for learners aged 55+. Practice naturally adaptive dialogues at your own pace.',
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
