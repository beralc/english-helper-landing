export type Lang = 'en' | 'es';

export interface Content {
  hero: {
    headline: string;
    subheading: string;
    cta: string;
  };
  howItWorks: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  whyThisWorks: {
    title: string;
    benefits: string[];
  };
  whoWeAreLookingFor: {
    title: string;
    criteria: string[];
  };
  whatYouWillGet: {
    title: string;
    benefits: string[];
  };
  form: {
    title: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    ageLabel: string;
    locationLabel: string;
    submitButton: string;
    successMessage: string;
  };
  nav: {
    languageSwitch: string;
  };
}

export const content: Record<Lang, Content> = {
  en: {
    hero: {
      headline: 'Practice English Conversation Anytime, Without Pressure',
      subheading: 'An AI-powered English conversation tutor designed for learners aged 55+, offering naturally adaptive dialogues wherever you are, whenever you\'re ready.',
      cta: 'Request Your Invitation',
    },
    howItWorks: {
      title: 'How It Works',
      steps: [
        {
          title: 'Simply Start Talking',
          description: 'No buttons to press, just speak naturally',
        },
        {
          title: 'Get Personalized Support',
          description: 'AI detects your skill level and adjusts',
        },
        {
          title: 'Practice Real Conversations',
          description: 'Work, travel, family topics',
        },
      ],
    },
    whyThisWorks: {
      title: 'Why This Works for You',
      benefits: [
        'No pressure to keep up',
        'Speaks at a comfortable pace',
        'Available 24/7 on your phone',
        'Remembers your progress',
        'Designed specifically for older adults',
      ],
    },
    whoWeAreLookingFor: {
      title: 'Who We\'re Looking For',
      criteria: [
        'Age 55 or older',
        'Learning English (any level welcome)',
        'Own a smartphone (iPhone or Android)',
        'Live in or near Madrid, Spain',
        'Willing to try the app for 4 weeks',
      ],
    },
    whatYouWillGet: {
      title: 'What You\'ll Get',
      benefits: [
        'Free access to the app',
        'Personal onboarding session',
        'Ongoing support throughout the study',
        'Contribution to PhD research on senior language learning',
      ],
    },
    form: {
      title: 'Request Your Invitation',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone Number',
      ageLabel: 'Age',
      locationLabel: 'Location',
      submitButton: 'Request Invitation',
      successMessage: 'Thank you! We\'ll be in touch soon.',
    },
    nav: {
      languageSwitch: 'Español',
    },
  },
  es: {
    hero: {
      headline: 'Practica inglés cuando quieras, a tu ritmo y sin presión',
      subheading: 'Un tutor de conversación en inglés con inteligencia artificial diseñado para mayores de 55 años. Diálogos naturales donde estés, cuando quieras.',
      cta: 'Solicita tu invitación',
    },
    howItWorks: {
      title: '¿Cómo funciona?',
      steps: [
        {
          title: 'Empieza a hablar',
          description: 'Pulsa un botón y habla de forma natural',
        },
        {
          title: 'Recibe apoyo personalizado',
          description: 'La IA detecta tu nivel y se adapta a ti',
        },
        {
          title: 'Mantén conversaciones reales',
          description: '¿No sabes de qué hablar? Elige un tema: trabajo, viajes, familia...',
        },
      ],
    },
    whyThisWorks: {
      title: '¿Por qué funciona?',
      benefits: [
        'Sin presión',
        'Escucha con claridad',
        'Disponible en cualquier momento',
        'Recuerda tu progreso',
        'Pensado para ti',
      ],
    },
    whoWeAreLookingFor: {
      title: '¿A quién buscamos?',
      criteria: [
        'Personas de 55 años o más',
        'Con ganas de aprender inglés (cualquier nivel)',
        'Con móvil u ordenador',
        'Con disponibilidad para probar la aplicación durante 4 semanas',
      ],
    },
    whatYouWillGet: {
      title: '¿Qué recibirás?',
      benefits: [
        'Acceso gratuito a la aplicación',
        'Sesión de bienvenida y formación inicial',
        'Apoyo continuo durante todo el estudio',
        'Participación en una investigación de doctorado sobre el aprendizaje de idiomas en adultos',
      ],
    },
    form: {
      title: 'Solicita tu invitación',
      nameLabel: 'Nombre completo',
      emailLabel: 'Correo electrónico',
      phoneLabel: 'Teléfono',
      ageLabel: 'Edad',
      locationLabel: 'Ciudad',
      submitButton: 'Solicitar invitación',
      successMessage: '¡Gracias! Nos pondremos en contacto contigo pronto.',
    },
    nav: {
      languageSwitch: 'English',
    },
  },
};

export function getContent(lang: Lang): Content {
  return content[lang] || content.en;
}
