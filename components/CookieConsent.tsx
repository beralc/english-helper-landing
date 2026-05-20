'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Lang } from '@/lib/content';

interface CookieConsentProps {
  lang: Lang;
}

const content = {
  en: {
    message: 'We use cookies to enhance your browsing experience. By continuing to use our site, you consent to our use of cookies in accordance with our',
    privacyPolicy: 'Privacy Policy',
    accept: 'Accept',
    reject: 'Reject',
    settings: 'Cookie Settings',
    necessary: 'Necessary cookies',
    necessaryDesc: 'Required for the website to function properly.',
    analytics: 'Analytics cookies',
    analyticsDesc: 'Help us understand how visitors interact with our website.',
    saveSettings: 'Save Settings',
    toggleOn: 'On',
    toggleOff: 'Off',
    back: 'Back',
  },
  es: {
    message: 'Usamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas su uso según nuestra',
    privacyPolicy: 'Política de Privacidad',
    accept: 'Aceptar',
    reject: 'Rechazar',
    settings: 'Configurar',
    necessary: 'Cookies necesarias',
    necessaryDesc: 'Imprescindibles para que la web funcione correctamente.',
    analytics: 'Cookies de análisis',
    analyticsDesc: 'Nos ayudan a entender cómo usas la web.',
    saveSettings: 'Guardar',
    toggleOn: 'Sí',
    toggleOff: 'No',
    back: 'Volver',
  },
};

export default function CookieConsent({ lang }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  const t = content[lang];

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({ necessary: true, analytics: true }));
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({ necessary: true, analytics: false }));
    setShowBanner(false);
  };

  const handleSaveSettings = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({ necessary: true, analytics: analyticsConsent }));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-lg p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={lang === 'es' ? 'Aviso de cookies' : 'Cookie notice'}
    >
      <div className="max-w-7xl mx-auto">
        {!showSettings ? (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-base text-gray-700 flex-1">
              {t.message}{' '}
              <Link href={`/${lang}/privacy`} className="text-emerald-700 underline hover:text-emerald-900">
                {t.privacyPolicy}
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowSettings(true)}
                className="min-h-[44px] px-5 py-2 text-base text-gray-700 hover:text-gray-900 font-medium border border-gray-300 rounded-lg transition-colors hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                {t.settings}
              </button>
              <button
                onClick={handleReject}
                className="min-h-[44px] px-5 py-2 text-base text-gray-700 hover:text-gray-900 font-medium border border-gray-300 rounded-lg transition-colors hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                {t.reject}
              </button>
              <button
                onClick={handleAccept}
                className="min-h-[44px] px-5 py-2 text-base text-white font-bold bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                {t.accept}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="text-base font-semibold text-gray-900">{t.necessary}</h3>
                <p className="text-base text-gray-600 mt-1">{t.necessaryDesc}</p>
              </div>
              <div
                className="w-14 h-8 bg-emerald-500 rounded-full flex items-center justify-end px-1 ml-4 flex-shrink-0"
                aria-hidden="true"
              >
                <div className="w-6 h-6 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="text-base font-semibold text-gray-900">{t.analytics}</h3>
                <p className="text-base text-gray-600 mt-1">{t.analyticsDesc}</p>
              </div>
              <button
                onClick={() => setAnalyticsConsent(!analyticsConsent)}
                className={`relative min-w-[56px] h-8 rounded-full flex items-center px-1 ml-4 flex-shrink-0 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
                  analyticsConsent ? 'bg-emerald-500 justify-end' : 'bg-gray-300 justify-start'
                }`}
                role="switch"
                aria-checked={analyticsConsent}
                aria-label={t.analytics}
              >
                <div className="w-6 h-6 bg-white rounded-full shadow-sm"></div>
                <span className="sr-only">{analyticsConsent ? t.toggleOn : t.toggleOff}</span>
              </button>
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowSettings(false)}
                className="min-h-[44px] px-5 py-2 text-base text-gray-700 hover:text-gray-900 font-medium border border-gray-300 rounded-lg transition-colors hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                {t.back}
              </button>
              <button
                onClick={handleSaveSettings}
                className="min-h-[44px] px-5 py-2 text-base text-white font-bold bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                {t.saveSettings}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
