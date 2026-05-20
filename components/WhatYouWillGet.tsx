import { Content, Lang } from '@/lib/content';

interface WhatYouWillGetProps {
  content: Content['whatYouWillGet'];
  lang: Lang;
}

const benefitDescriptions: Record<Lang, string[]> = {
  en: [
    'The app is completely free for all study participants. No subscriptions or hidden costs.',
    'A researcher will guide you through the app in a one-to-one session before you start.',
    'You can reach out to us by phone or email at any point during the study.',
    'Your participation helps advance knowledge about language learning for older adults at Universidad Complutense de Madrid.',
  ],
  es: [
    'La aplicación es completamente gratuita para todos los participantes del estudio. Sin suscripciones ni costes ocultos.',
    'Un investigador te guiará por la aplicación en una sesión individual antes de comenzar.',
    'Puedes contactarnos por teléfono o correo electrónico en cualquier momento durante el estudio.',
    'Tu participación contribuye al avance del conocimiento sobre el aprendizaje de idiomas en adultos mayores en la Universidad Complutense de Madrid.',
  ],
};

export default function WhatYouWillGet({ content, lang }: WhatYouWillGetProps) {
  const descriptions = benefitDescriptions[lang] ?? benefitDescriptions.en;

  return (
    <section className="py-20 bg-gray-900 border-y border-gray-800" aria-labelledby="what-you-will-get-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="what-you-will-get-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            {content.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition duration-300 group"
            >
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition shadow-sm">
                {index === 0 && (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                  </svg>
                )}
                {index === 1 && (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                )}
                {index === 2 && (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 11.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                )}
                {index === 3 && (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-bold text-emerald-300 mb-3">{benefit}</h3>
              <p className="text-base text-gray-300 leading-relaxed">{descriptions[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
