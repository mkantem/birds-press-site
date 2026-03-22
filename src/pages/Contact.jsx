import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();
  const mapUrl =
    'https://www.google.com/maps?ll=12.663245,-7.914349&z=15&t=m&hl=en&gl=ML&mapclient=embed&cid=1883266775357810643';
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15571.069921525144!2d-7.914349!3d12.663245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe51d300621b7f57%3A0x1a22b5277a7f67d3!2sAvenue%20des%20Arm%C3%A9es%2C%20Sotuba%20ACI!5e0!3m2!1sen!2sml!4v1774138953765!5m2!1sen!2sml';

  const content = {
    en: {
      title: 'Contact',
      metaDescription: 'Contact BIRDs Press for general inquiries or journal-related questions.',
      intro:
        'If you have questions regarding BIRDs Press, its journals, editorial policies, or data protection practices, please contact us using the information below.',
      addressTitle: 'Address',
      address: 'Sotuba ACI, Avenue des Armées, Bamako, Mali',
      postalAddress: '03 BP 216 Bamako',
      mapTitle: 'Map',
      openMap: 'Open in Google Maps',
      hoursTitle: 'Office hours',
      hours: 'Monday – Friday, 09:00 – 17:00 (GMT)',
      emailsTitle: 'Email contacts',
      emails: [
        {
          label: 'General inquiries',
          email: 'infos@b-institute.org'
        },
        {
          label: 'Privacy and data protection',
          email: 'privacy@b-institute.org'
        },
        {
          label: 'Ethics concerns or complaints',
          email: 'ethics@b-institute.org'
        },
        {
          label: 'RASP Journal',
          email: 'revue-rasp@revue-rasp.org'
        },
        {
          label: 'AJDI Journal',
          email: 'ajdi@b-institute.org'
        }
      ]
    },
    fr: {
      title: 'Contact',
      metaDescription: 'Contactez BIRDs Press pour toute question générale ou relative aux revues.',
      intro:
        'Pour toute question concernant BIRDs Press, ses revues, ses politiques éditoriales ou la protection des données, veuillez utiliser les informations ci-dessous.',
      addressTitle: 'Adresse',
      address: 'Sotuba ACI, Avenue des Armées, Bamako, Mali',
      postalAddress: '03 BP 216 Bamako',
      mapTitle: 'Carte',
      openMap: 'Ouvrir dans Google Maps',
      hoursTitle: 'Heures d’ouverture',
      hours: 'Lundi – Vendredi, 09h00 – 17h00',
      emailsTitle: 'Contacts e-mail',
      emails: [
        {
          label: 'Demandes générales',
          email: 'infos@b-institute.org'
        },
        {
          label: 'Confidentialité et protection des données',
          email: 'privacy@b-institute.org'
        },
        {
          label: 'Questions éthiques ou réclamations',
          email: 'ethics@b-institute.org'
        },
        {
          label: 'Revue RASP',
          email: 'revue-rasp@revue-rasp.org'
        },
        {
          label: 'Revue AJDI',
          email: 'ajdi@b-institute.org'
        }
      ]
    }
  };

  const c = content[language];

  return (
    <>
      <Helmet>
        <title>{c.title} - BIRDs Press</title>
        <meta name="description" content={c.metaDescription} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <h1 className="text-4xl font-bold text-gray-900 mb-8">{c.title}</h1>

          <div className="bg-white rounded-lg shadow-md p-8">

            <p className="text-gray-700 leading-relaxed mb-8">
              {c.intro}
            </p>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {c.addressTitle}
              </h2>
              <p className="text-gray-700">
                {c.address}
              </p>
              <p className="text-gray-700">
                {c.postalAddress}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {c.mapTitle}
              </h2>
              <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                <iframe
                  title={`${c.title} map`}
                  src={mapEmbedUrl}
                  className="h-80 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-[#1e3a5f] hover:underline"
              >
                {c.openMap}
              </a>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {c.hoursTitle}
              </h2>
              <p className="text-gray-700">
                {c.hours}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {c.emailsTitle}
              </h2>

              <ul className="space-y-4">
                {c.emails.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    <span className="font-medium">{item.label}:</span>{' '}
                    <a
                      href={`mailto:${item.email}`}
                      className="text-[#1e3a5f] hover:underline"
                    >
                      {item.email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
