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
  },
  es: {
    message: 'Utilizamos cookies para mejorar tu experiencia de navegación. Al continuar usando nuestro sitio, aceptas el uso de cookies de acuerdo con nuestra',
    privacyPolicy: 'Política de Privacidad',
    accept: 'Aceptar',
    reject: 'Rechazar',
    settings: 'Configurar Cookies',
    necessary: 'Cookies necesarias',
    necessaryDesc: 'Necesarias para el funcionamiento del sitio web.',
    analytics: 'Cookies de análisis',
    analyticsDesc: 'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio.',
    saveSettings: 'Guardar Configuración',
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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {!showSettings ? (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-gray-600 flex-1">
              {t.message}{' '}
              <Link href={`/${lang}/privacy`} className="text-emerald-600 hover:underline">
                {t.privacyPolicy}
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg transition-colors"
              >
                {t.settings}
              </button>
              <button
                onClick={handleReject}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg transition-colors"
              >
                {t.reject}
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 text-sm text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
              >
                {t.accept}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">{t.necessary}</h3>
                <p className="text-sm text-gray-500">{t.necessaryDesc}</p>
              </div>
              <div className="w-12 h-6 bg-emerald-500 rounded-full flex items-center justify-end px-1">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">{t.analytics}</h3>
                <p className="text-sm text-gray-500">{t.analyticsDesc}</p>
              </div>
              <button
                onClick={() => setAnalyticsConsent(!analyticsConsent)}
                className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                  analyticsConsent ? 'bg-emerald-500 justify-end' : 'bg-gray-300 justify-start'
                }`}
              >
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </button>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg transition-colors"
              >
                {lang === 'es' ? 'Volver' : 'Back'}
              </button>
              <button
                onClick={handleSaveSettings}
                className="px-4 py-2 text-sm text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
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
