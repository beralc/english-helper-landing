'use client';

import { Content, Lang } from '@/lib/content';
import { useState, FormEvent } from 'react';
import Link from 'next/link';

interface InvitationFormProps {
  content: Content['form'];
  lang: Lang;
}

export default function InvitationForm({ content, lang }: InvitationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [consentChecked, setConsentChecked] = useState(false);
  const [consentError, setConsentError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consentChecked) {
      setConsentError(true);
      return;
    }
    setConsentError(false);
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      age: formData.get('age'),
      location: formData.get('location'),
    };

    try {
      // TODO: Replace with actual form submission endpoint when available
      // For now, we'll simulate a successful submission
      console.log('Form data:', data);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setError(lang === 'es' ? 'Ha ocurrido un error. Por favor, inténtalo de nuevo.' : 'Something went wrong. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="invitation-form"
      className="py-20 bg-emerald-50"
      aria-labelledby="invitation-form-heading"
    >
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
          <h2
            id="invitation-form-heading"
            className="text-3xl font-extrabold text-gray-900 mb-8 text-center"
          >
            {content.title}
          </h2>

          {isSuccess && (
            <div
              className="mb-6 p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-lg text-center"
              role="alert"
              aria-live="polite"
            >
              <p className="text-base text-gray-800 font-semibold">{content.successMessage}</p>
            </div>
          )}

          {error && (
            <div
              className="mb-6 p-4 bg-red-50 border-2 border-red-300 rounded-lg text-center"
              role="alert"
              aria-live="assertive"
            >
              <p className="text-base text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-base font-semibold text-gray-700 mb-1"
              >
                {content.nameLabel}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="block w-full px-4 py-3 text-base bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition outline-none"
                aria-required="true"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-base font-semibold text-gray-700 mb-1"
              >
                {content.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="block w-full px-4 py-3 text-base bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition outline-none"
                aria-required="true"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-base font-semibold text-gray-700 mb-1"
              >
                {content.phoneLabel}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="block w-full px-4 py-3 text-base bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition outline-none"
                aria-required="true"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="age"
                  className="block text-base font-semibold text-gray-700 mb-1"
                >
                  {content.ageLabel}
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  min="50"
                  max="120"
                  required
                  className="block w-full px-4 py-3 text-base bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition outline-none"
                  aria-required="true"
                  placeholder="50+"
                />
              </div>

              <div className="flex-1">
                <label
                  htmlFor="location"
                  className="block text-base font-semibold text-gray-700 mb-1"
                >
                  {content.locationLabel}
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  className="block w-full px-4 py-3 text-base bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition outline-none"
                  aria-required="true"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={consentChecked}
                  onChange={(e) => {
                    setConsentChecked(e.target.checked);
                    if (e.target.checked) setConsentError(false);
                  }}
                  className="mt-1 w-6 h-6 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 flex-shrink-0"
                  aria-required="true"
                  aria-describedby={consentError ? 'consent-error' : undefined}
                />
                <span className="text-base text-gray-700 leading-relaxed">
                  {content.consentLabel}{' '}
                  <Link href={`/${lang}/privacy`} className="text-emerald-700 underline hover:text-emerald-900">
                    {lang === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
                  </Link>
                </span>
              </label>
              {consentError && (
                <p id="consent-error" className="mt-2 text-base font-semibold text-red-700" role="alert">
                  {content.consentRequired}
                </p>
              )}
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white font-bold py-4 rounded-xl text-lg uppercase tracking-wider shadow-lg hover:shadow-emerald-500/30 transition transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300 disabled:cursor-not-allowed"
                aria-label={isSubmitting ? (lang === 'es' ? 'Enviando...' : 'Sending...') : content.submitButton}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (lang === 'es' ? 'Enviando...' : 'Sending...') : content.submitButton}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
