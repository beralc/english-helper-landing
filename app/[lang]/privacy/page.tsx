import { Lang } from '@/lib/content';
import Link from 'next/link';

const privacyContent = {
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: May 2026',
    backToHome: '← Back to Home',
    sections: [
      {
        title: '1. Data Controller',
        content: `Bernardo's English Helper is a research tool developed as part of a PhD study in English Linguistics at Universidad Complutense de Madrid (UCM), approved by the UCM Research Ethics Committee (ref. 663_CE_20260312_35_HUM).

Principal researcher: Bernardo Morales Mateo — bernardm@ucm.es
Thesis supervisor: Dra. Lara Moratón Gutiérrez — Departamento de Estudios Ingleses: Lingüística y Literatura, Facultad de Filología, UCM

If you have any questions about this privacy policy or our data practices, please contact us at: bernardm@ucm.es`
      },
      {
        title: '2. What Data We Collect',
        content: `When you use our service, we may collect the following personal data:
• Name
• Email address
• Phone number
• Age
• Location (city/region)

This data is collected when you voluntarily submit it through our contact form.`
      },
      {
        title: '3. Legal Basis for Processing',
        content: `We process your personal data based on:
• Your consent (Article 6(1)(a) GDPR) - when you submit the contact form
• Legitimate interests (Article 6(1)(f) GDPR) - to respond to your inquiries and improve our services`
      },
      {
        title: '4. How We Use Your Data',
        content: `We use your personal data to:
• Contact you about your participation in this research study
• Conduct academic research for a doctoral thesis at Universidad Complutense de Madrid
• Publish anonymised research findings in academic journals and conferences
• Improve the application and services used in the study
• Comply with legal obligations

Your data will never be used for commercial purposes. All published findings use anonymised data only.`
      },
      {
        title: '5. Data Sharing',
        content: `We do not sell your personal data. We may share your data with:
• Service providers who help us operate our website (hosting, email services)
• Legal authorities when required by law

All third-party providers are bound by data processing agreements that ensure GDPR compliance.`
      },
      {
        title: '6. Data Retention',
        content: `We retain your personal data for a maximum of 5 years after the conclusion of the research study, as required by UCM research ethics guidelines. Data is stored on encrypted servers with access restricted to the principal researcher and thesis supervisor. You may request deletion at any time by contacting bernardm@ucm.es.`
      },
      {
        title: '7. Your Rights',
        content: `Under GDPR, you have the right to:
• Access your personal data
• Rectify inaccurate data
• Erase your data ("right to be forgotten")
• Restrict processing
• Data portability
• Object to processing
• Withdraw consent at any time

To exercise these rights, contact us at: bernardm@ucm.es`
      },
      {
        title: '8. Cookies',
        content: `We use cookies to enhance your browsing experience:
• Necessary cookies: Required for the website to function (e.g., cookie consent preferences)
• Analytics cookies: Help us understand how visitors use our site (only with your consent)

You can manage cookie preferences through the cookie banner or your browser settings.`
      },
      {
        title: '9. Data Security',
        content: `We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.`
      },
      {
        title: '10. International Transfers',
        content: `Your data may be processed outside the European Economic Area (EEA). When this occurs, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission.`
      },
      {
        title: '11. Complaints',
        content: `If you believe your data protection rights have been violated, you have the right to lodge a complaint with the Spanish Data Protection Authority (AEPD):
Agencia Española de Protección de Datos
C/ Jorge Juan, 6
28001 Madrid
www.aepd.es`
      },
      {
        title: '12. Changes to This Policy',
        content: `We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated "Last updated" date.`
      }
    ]
  },
  es: {
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización: Mayo 2026',
    backToHome: '← Volver al Inicio',
    sections: [
      {
        title: '1. Responsable del Tratamiento',
        content: `Bernardo's English Helper es una herramienta de investigación desarrollada en el marco de un estudio de doctorado en Lingüística Inglesa en la Universidad Complutense de Madrid (UCM), aprobado por el Comité de Ética de la Investigación de la UCM (ref. 663_CE_20260312_35_HUM).

Investigador principal: Bernardo Morales Mateo — bernardm@ucm.es
Directora de tesis: Dra. Lara Moratón Gutiérrez — Departamento de Estudios Ingleses: Lingüística y Literatura, Facultad de Filología, UCM

Si tiene alguna pregunta sobre esta política de privacidad o nuestras prácticas de datos, contáctenos en: bernardm@ucm.es`
      },
      {
        title: '2. Qué Datos Recopilamos',
        content: `Cuando utiliza nuestro servicio, podemos recopilar los siguientes datos personales:
• Nombre
• Dirección de correo electrónico
• Número de teléfono
• Edad
• Ubicación (ciudad/región)

Estos datos se recopilan cuando los envía voluntariamente a través de nuestro formulario de contacto.`
      },
      {
        title: '3. Base Legal para el Tratamiento',
        content: `Tratamos sus datos personales basándonos en:
• Su consentimiento (Artículo 6(1)(a) RGPD) - cuando envía el formulario de contacto
• Intereses legítimos (Artículo 6(1)(f) RGPD) - para responder a sus consultas y mejorar nuestros servicios`
      },
      {
        title: '4. Cómo Usamos Sus Datos',
        content: `Utilizamos sus datos personales para:
• Contactarle en relación con su participación en este estudio de investigación
• Realizar investigación académica para una tesis doctoral en la Universidad Complutense de Madrid
• Publicar hallazgos anonimizados en revistas académicas y congresos
• Mejorar la aplicación y los servicios utilizados en el estudio
• Cumplir con obligaciones legales

Sus datos nunca se utilizarán con fines comerciales. Todos los hallazgos publicados utilizan únicamente datos anonimizados.`
      },
      {
        title: '5. Compartición de Datos',
        content: `No vendemos sus datos personales. Podemos compartir sus datos con:
• Proveedores de servicios que nos ayudan a operar nuestro sitio web (alojamiento, servicios de correo electrónico)
• Autoridades legales cuando lo requiera la ley

Todos los proveedores externos están vinculados por acuerdos de procesamiento de datos que garantizan el cumplimiento del RGPD.`
      },
      {
        title: '6. Retención de Datos',
        content: `Conservamos sus datos personales durante un máximo de 5 años tras la conclusión del estudio de investigación, según las directrices de ética de la investigación de la UCM. Los datos se almacenan en servidores encriptados con acceso restringido al investigador principal y a la directora de tesis. Puede solicitar la eliminación en cualquier momento contactando con bernardm@ucm.es.`
      },
      {
        title: '7. Sus Derechos',
        content: `Según el RGPD, tiene derecho a:
• Acceder a sus datos personales
• Rectificar datos inexactos
• Suprimir sus datos ("derecho al olvido")
• Limitar el tratamiento
• Portabilidad de datos
• Oponerse al tratamiento
• Retirar el consentimiento en cualquier momento

Para ejercer estos derechos, contáctenos en: bernardm@ucm.es`
      },
      {
        title: '8. Cookies',
        content: `Utilizamos cookies para mejorar su experiencia de navegación:
• Cookies necesarias: Requeridas para que el sitio web funcione (ej. preferencias de consentimiento de cookies)
• Cookies de análisis: Nos ayudan a entender cómo los visitantes usan nuestro sitio (solo con su consentimiento)

Puede gestionar las preferencias de cookies a través del banner de cookies o la configuración de su navegador.`
      },
      {
        title: '9. Seguridad de Datos',
        content: `Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso no autorizado, alteración, divulgación o destrucción.`
      },
      {
        title: '10. Transferencias Internacionales',
        content: `Sus datos pueden ser procesados fuera del Espacio Económico Europeo (EEE). Cuando esto ocurra, nos aseguramos de que existan las salvaguardas apropiadas, como las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea.`
      },
      {
        title: '11. Reclamaciones',
        content: `Si cree que se han violado sus derechos de protección de datos, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD):
Agencia Española de Protección de Datos
C/ Jorge Juan, 6
28001 Madrid
www.aepd.es`
      },
      {
        title: '12. Cambios en Esta Política',
        content: `Podemos actualizar esta política de privacidad de vez en cuando. Le notificaremos cualquier cambio significativo publicando la nueva política en esta página con una fecha de "Última actualización" actualizada.`
      }
    ]
  }
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params as { lang: Lang };
  const content = privacyContent[lang] || privacyContent.es;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${lang}`}
          className="inline-block mb-8 text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          {content.backToHome}
        </Link>

        <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            {content.title}
          </h1>
          <p className="text-gray-500 mb-8">{content.lastUpdated}</p>

          <div className="space-y-8">
            {content.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {section.title}
                </h2>
                <div className="text-gray-600 whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
