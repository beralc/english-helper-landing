import { Lang, getContent } from '@/lib/content';
import Link from 'next/link';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import DetailsSection from '@/components/DetailsSection';
import WhatYouWillGet from '@/components/WhatYouWillGet';
import InvitationForm from '@/components/InvitationForm';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params as { lang: Lang };
  const content = getContent(lang);

  return (
    <div className="min-h-screen">
      <main className="pt-16">
        <Hero content={content.hero} lang={lang} />
        <HowItWorks content={content.howItWorks} />
        <DetailsSection
          whyThisWorks={content.whyThisWorks}
          whoWeAreLookingFor={content.whoWeAreLookingFor}
          lang={lang}
        />
        <WhatYouWillGet content={content.whatYouWillGet} lang={lang} />
        <InvitationForm content={content.form} lang={lang} />
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-base text-gray-300">
              &copy; 2026 Bernardo&apos;s English Helper. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <Link
                href={`/${lang}/privacy`}
                className="inline-flex items-center min-h-[44px] px-3 text-base text-gray-300 hover:text-white underline transition-colors"
              >
                {lang === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
              </Link>
              <span className="text-gray-600">·</span>
              <a
                href="https://www.dadadadesign.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-h-[44px] px-3 text-base text-gray-400 hover:text-white transition-colors"
              >
                {lang === 'es' ? 'Sitio web por Dadada Design' : 'Site by Dadada Design'}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
