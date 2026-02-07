import Link from 'next/link';
import Image from 'next/image';
import { Lang, getContent } from '@/lib/content';

interface LanguageSwitcherProps {
  currentLang: Lang;
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const content = getContent(currentLang);
  const targetLang: Lang = currentLang === 'en' ? 'es' : 'en';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md" aria-label="Language navigation">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <Link href={`/${currentLang}`} className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Bernardo's English Helper"
              width={44}
              height={44}
              priority
              className="rounded-xl"
            />
            <span className="text-xl font-bold text-gray-900">
              Bernardo&apos;s English Helper
            </span>
          </Link>
          <Link
            href={`/${targetLang}`}
            className="text-gray-500 hover:text-emerald-500 transition-colors font-medium"
            aria-label={`Switch to ${targetLang === 'en' ? 'English' : 'Spanish'}`}
          >
            {content.nav.languageSwitch}
          </Link>
        </div>
      </div>
    </nav>
  );
}
