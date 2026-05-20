import { Content, Lang } from '@/lib/content';

interface DetailsSectionProps {
  whyThisWorks: Content['whyThisWorks'];
  whoWeAreLookingFor: Content['whoWeAreLookingFor'];
  lang: Lang;
}

export default function DetailsSection({ whyThisWorks, whoWeAreLookingFor, lang }: DetailsSectionProps) {
  return (
    <section className="py-20 bg-emerald-50" aria-label="Details">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* LEFT COLUMN: Why This Works (Spans 7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="mb-2">
              <h2 className="text-3xl font-extrabold text-gray-900">{whyThisWorks.title}</h2>
              <p className="text-gray-500 mt-2">
                {lang === 'es'
                  ? 'Diseñado para aprender sin estrés y ganar confianza a tu ritmo'
                  : 'Designed to eliminate stress and build confidence.'
                }
              </p>
            </div>

            {/* Main Benefit Card */}
            <div className="bento-card bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-200">
              {/* Modern Gradient Background Accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity -mr-10 -mt-10"></div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center relative z-10">
                <span className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center mr-3 shadow-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </span>
                {whyThisWorks.benefits[0]}
              </h3>
              <p className="text-gray-600 relative z-10">
                {lang === 'es'
                  ? 'Aprende a tu ritmo. La IA espera a que termines tu idea, sin importar cuánto tardes.'
                  : 'Relax and learn without judgment. The AI waits for you to finish your thought, no matter how long it takes.'
                }
              </p>
            </div>

            {/* Split Bento Items */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bento-card bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-200">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center mb-4 shadow-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{whyThisWorks.benefits[1]}</h3>
                <p className="text-base text-gray-600">
                  {lang === 'es'
                    ? 'Elige el acento que prefieras y escucha cada palabra con claridad. También puedes leer la transcripción.'
                    : 'Hear every word clearly. Adjust the speed to your liking.'
                  }
                </p>
              </div>
              <div className="bento-card bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-200">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center mb-4 shadow-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{whyThisWorks.benefits[3]}</h3>
                <p className="text-base text-gray-600">
                  {lang === 'es'
                    ? 'Continúa donde lo dejaste. La IA recuerda todo tu progreso.'
                    : 'Pick up exactly where you left off. It remembers your progress.'
                  }
                </p>
              </div>
            </div>

            {/* Long Bento Item */}
            <div className="bento-card bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-200">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{whyThisWorks.benefits[2]}</h3>
                <p className="text-base text-gray-600">
                  {lang === 'es'
                    ? 'Practica con el café de la mañana o antes de dormir.'
                    : 'Practice in the morning with coffee, or before bed.'
                  }
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center ml-4 shadow-sm flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Who We're Looking For (Spans 5 columns) */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl h-full relative overflow-hidden border border-gray-800">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>

              <h2 className="text-2xl font-bold mb-6 text-white relative z-10">{whoWeAreLookingFor.title}</h2>

              <ul className="space-y-6 relative z-10">
                {whoWeAreLookingFor.criteria.map((criterion, index) => (
                  <li key={index} className="flex items-start">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 ${index === 0 ? 'bg-emerald-400' : 'bg-emerald-500'}`}>
                      {index === 0 && (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                        </svg>
                      )}
                      {index === 3 && (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      )}
                    </div>
                    <div>
                      <strong className={`block text-lg ${index === 0 ? 'text-emerald-300' : 'text-white'}`}>{criterion}</strong>
                    </div>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
