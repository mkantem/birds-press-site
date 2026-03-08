import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Contact',
      metaDescription: 'Contact BIRDs Press for general inquiries or journal-related questions.',
      intro:
        'If you have questions regarding BIRDs Press, its journals, editorial policies, or data protection practices, please contact us using the information below.',
      addressTitle: 'Address',
      address: 'Sotuba ACI, Avenue des ArmÃ©es, Bamako, Mali',
      postalAddress: '03 BP 216 Bamako',
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
      address: 'Sotuba ACI, Avenue des ArmÃ©es, Bamako, Mali',
      postalAddress: '03 BP 216 Bamako',
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
