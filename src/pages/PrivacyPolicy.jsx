import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Privacy Policy',
      metaDescription: 'Privacy policy of BIRDs Press.',
      intro:
        'BIRDs Press is committed to handling personal data responsibly and with due regard for applicable data protection principles. This policy explains how personal information may be collected, used, stored, and protected in connection with our publishing activities and websites.',
      sections: [
        {
          title: 'Data We May Collect',
          text:
            'BIRDs Press may collect personal information necessary for journal and publishing operations. This may include names, institutional affiliations, email addresses, ORCID identifiers, account details, manuscript-related information, and correspondence associated with submissions, peer review, and publication activities. Limited technical information may also be collected through website operation, such as session data or other essential website usage information.'
        },
        {
          title: 'Use of Personal Data',
          text:
            'Personal data may be used for purposes directly related to scholarly publishing and journal management. These purposes may include processing submissions, administering peer review, communicating with authors, reviewers, editors, and readers, managing published records, maintaining website functionality, and complying with legal or institutional obligations.'
        },
        {
          title: 'Data Sharing',
          text:
            'BIRDs Press does not sell or rent personal data. Personal information may be shared only where necessary for the operation of the publishing process, for example with journal editors, editorial staff, and service providers supporting the journal platform or related publishing infrastructure. Information associated with published articles, such as author names, affiliations, and article metadata, may appear publicly as part of the scholarly record.'
        },
        {
          title: 'Data Security',
          text:
            'Reasonable technical and organizational measures are implemented to protect personal data against unauthorized access, loss, misuse, alteration, or disclosure. Access to personal information is restricted to individuals who require it for legitimate publishing or administrative purposes.'
        },
        {
          title: 'Data Retention',
          text:
            'Personal data may be retained for as long as necessary to support legitimate publishing, administrative, archival, and scholarly record-keeping purposes. In particular, information associated with published articles may be retained as part of the permanent scholarly record.'
        },
        {
          title: 'Your Rights',
          text:
            'Where applicable, individuals may request access to their personal data, correction of inaccurate information, or clarification regarding how their information is used. Requests relating to personal data will be considered in light of applicable legal, editorial, and archival obligations.'
        },
        {
          title: 'Cookies and Website Functionality',
          text:
            'BIRDs Press websites may use cookies or similar technologies necessary for core website functionality, user sessions, security, and system performance. Users may control certain cookie settings through their browser, although disabling essential cookies may affect site functionality.'
        },
        {
          title: 'Changes to This Policy',
          text:
            'This policy may be updated from time to time to reflect changes in publishing practices, website operations, or legal and regulatory requirements. The most recent version will be made available on this website.'
        }
      ],
      contact: 'For privacy-related questions, please contact: privacy@b-institute.org'
    },

    fr: {
      title: 'Politique de confidentialité',
      metaDescription: 'Politique de confidentialité de BIRDs Press.',
      intro:
        'BIRDs Press s’engage à traiter les données personnelles de manière responsable et conformément aux principes applicables en matière de protection des données. Cette politique explique comment des informations personnelles peuvent être collectées, utilisées, conservées et protégées dans le cadre de nos activités éditoriales et de nos sites web.',
      sections: [
        {
          title: 'Données susceptibles d’être collectées',
          text:
            'BIRDs Press peut collecter les informations personnelles nécessaires au fonctionnement des revues et des activités de publication. Cela peut inclure les noms, affiliations institutionnelles, adresses e-mail, identifiants ORCID, informations de compte, données liées aux manuscrits, ainsi que les correspondances associées aux soumissions, à l’évaluation par les pairs et aux activités de publication. Des informations techniques limitées peuvent également être collectées dans le cadre du fonctionnement du site, telles que des données de session ou d’autres informations nécessaires à l’utilisation du site.'
        },
        {
          title: 'Utilisation des données personnelles',
          text:
            'Les données personnelles peuvent être utilisées à des fins directement liées à la publication scientifique et à la gestion des revues. Ces finalités peuvent inclure le traitement des soumissions, l’administration de l’évaluation par les pairs, la communication avec les auteurs, évaluateurs, éditeurs et lecteurs, la gestion du dossier scientifique publié, le maintien du bon fonctionnement du site web, ainsi que le respect d’obligations légales ou institutionnelles.'
        },
        {
          title: 'Partage des données',
          text:
            'BIRDs Press ne vend ni ne loue de données personnelles. Les informations personnelles ne peuvent être partagées que dans la mesure nécessaire au fonctionnement du processus éditorial, par exemple avec les éditeurs, le personnel éditorial et les prestataires techniques soutenant la plateforme ou l’infrastructure de publication. Les informations associées aux articles publiés, telles que les noms des auteurs, leurs affiliations et les métadonnées des articles, peuvent être rendues publiques dans le cadre du dossier scientifique.'
        },
        {
          title: 'Sécurité des données',
          text:
            'Des mesures techniques et organisationnelles raisonnables sont mises en œuvre afin de protéger les données personnelles contre l’accès non autorisé, la perte, l’usage abusif, l’altération ou la divulgation. L’accès aux informations personnelles est limité aux personnes qui en ont besoin pour des finalités légitimes liées à la publication ou à l’administration.'
        },
        {
          title: 'Conservation des données',
          text:
            'Les données personnelles peuvent être conservées aussi longtemps que nécessaire pour répondre à des finalités légitimes de publication, d’administration, d’archivage et de tenue du dossier scientifique. En particulier, les informations associées aux articles publiés peuvent être conservées comme partie intégrante du dossier scientifique permanent.'
        },
        {
          title: 'Vos droits',
          text:
            'Lorsque cela est applicable, les personnes concernées peuvent demander l’accès à leurs données personnelles, la correction d’informations inexactes ou des éclaircissements sur l’utilisation de leurs données. Les demandes relatives aux données personnelles seront examinées au regard des obligations légales, éditoriales et archivistiques applicables.'
        },
        {
          title: 'Cookies et fonctionnement du site',
          text:
            'Les sites de BIRDs Press peuvent utiliser des cookies ou technologies similaires nécessaires au fonctionnement essentiel du site, aux sessions utilisateurs, à la sécurité et aux performances techniques. Les utilisateurs peuvent gérer certains paramètres via leur navigateur, étant entendu que la désactivation des cookies essentiels peut affecter le fonctionnement du site.'
        },
        {
          title: 'Modifications de la présente politique',
          text:
            'Cette politique peut être mise à jour périodiquement afin de refléter l’évolution des pratiques éditoriales, du fonctionnement du site ou des exigences légales et réglementaires. La version la plus récente sera disponible sur ce site.'
        }
      ],
      contact: 'Pour toute question relative à la confidentialité, veuillez contacter : privacy@b-institute.org'
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{c.title}</h1>

          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 leading-relaxed mb-8">{c.intro}</p>

            {c.sections.map((section, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed">{section.text}</p>
              </div>
            ))}

            <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <p className="text-sm text-gray-700">{c.contact}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;