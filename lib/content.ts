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
    consentLabel: string;
    consentRequired: string;
  };
  nav: {
    languageSwitch: string;
  };
}

export const content: Record<Lang, Content> = {
  en: {
    hero: {
      headline: 'Practice English Conversation Anytime, Without Pressure',
      subheading: 'A friendly English conversation tutor designed for adults aged 50+. Practice real conversations at your own pace, from your phone or computer, whenever you feel ready.',
      cta: 'Request Your Invitation',
    },
    howItWorks: {
      title: 'How It Works',
      steps: [
        {
          title: 'Simply Start Talking',
          description: 'Just speak — the app listens and responds naturally',
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
        'Available any time, on your phone or computer',
        'Remembers your progress',
        'Designed specifically for older adults',
      ],
    },
    whoWeAreLookingFor: {
      title: 'Who We\'re Looking For',
      criteria: [
        'Age 50 or older',
        'Learning English (any level welcome)',
        'Own a smartphone or computer with internet access',
        'Live in or near Madrid, Spain',
        'Available to use the app for 8 to 12 weeks',
      ],
    },
    whatYouWillGet: {
      title: 'What You\'ll Get',
      benefits: [
        'Free access to the app',
        'Personal onboarding session',
        'Ongoing support throughout the study',
        'The satisfaction of contributing to real university research — and knowing your experience may help others like you learn English in the future',
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
      consentLabel: 'I have read and understood the study information and I agree to be contacted about my participation in this research study conducted by Universidad Complutense de Madrid (Ethics approval ref. 663_CE_20260312_35_HUM). I understand I may withdraw at any time.',
      consentRequired: 'You must accept the terms to submit.',
    },
    nav: {
      languageSwitch: 'Español',
    },
  },
  es: {
    hero: {
      headline: 'Practica inglés cuando quieras, a tu ritmo y sin presión',
      subheading: 'Un tutor amable de conversación en inglés, diseñado para personas de 50 años o más. Practica a tu ritmo, desde tu móvil u ordenador, cuando tú quieras.',
      cta: 'Solicita tu invitación',
    },
    howItWorks: {
      title: '¿Cómo funciona?',
      steps: [
        {
          title: 'Empieza a hablar',
          description: 'Habla con normalidad — la aplicación te escucha y responde',
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
        'Personas de 50 años o más',
        'Con ganas de aprender inglés (cualquier nivel)',
        'Con móvil u ordenador con acceso a internet',
        'Residentes en Madrid o alrededores',
        'Con disponibilidad para usar la aplicación durante 8 a 12 semanas',
      ],
    },
    whatYouWillGet: {
      title: '¿Qué recibirás?',
      benefits: [
        'Acceso gratuito a la aplicación',
        'Sesión de bienvenida y formación inicial',
        'Apoyo continuo durante todo el estudio',
        'La satisfacción de formar parte de una investigación real de la Universidad Complutense de Madrid — y de saber que tu experiencia puede ayudar a otras personas como tú a aprender inglés en el futuro',
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
      consentLabel: 'He leído y entendido la información del estudio y acepto ser contactado/a para participar en esta investigación realizada por la Universidad Complutense de Madrid (ref. aprobación ética: 663_CE_20260312_35_HUM). Entiendo que puedo retirarme en cualquier momento.',
      consentRequired: 'Debes aceptar los términos para enviar el formulario.',
    },
    nav: {
      languageSwitch: 'English',
    },
  },
};

export function getContent(lang: Lang): Content {
  return content[lang] || content.en;
}
