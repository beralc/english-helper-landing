import { Content, Lang } from '@/lib/content';
import Image from 'next/image';

interface HeroProps {
  content: Content['hero'];
  lang: Lang;
}

export default function Hero({ content, lang }: HeroProps) {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-start overflow-hidden" aria-labelledby="hero-heading">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imageBerni1.jpg"
          alt="Senior couple using tablet for English conversation practice"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlay - Lighter for more inviting feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 w-full">
        <div className="max-w-3xl text-white py-10 px-6 sm:px-0">
          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg"
          >
  {content.headline}
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl font-light mb-8 max-w-lg text-emerald-50 drop-shadow-md leading-relaxed">
            {content.subheading}
          </p>

          {/* CTA Subtext */}
          <p className="text-lg font-semibold mb-6 text-emerald-100">
            {lang === 'es'
              ? 'Participa en nuestro estudio y accede gratis a tu tutor personal de inglés'
              : 'Join our research study and get free access to your personal English tutor'
            }
          </p>

          {/* Primary CTA Button */}
          <a
            href="#invitation-form"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl text-lg uppercase tracking-wider border-2 border-transparent hover:border-emerald-300 shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
            aria-label={content.cta}
          >
            {content.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
