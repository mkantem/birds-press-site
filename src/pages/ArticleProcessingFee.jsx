import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';

const ArticleProcessingFee = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Article processing charges (APC)',
      metaDescription:
        'information about article processing charges for journals published by birds press.',
      intro:
        'BIRDs press is committed to supporting open-access scholarly publishing. Article processing charges (APCs), where applicable, help cover the costs associated with editorial administration, digital publishing infrastructure, hosting, production, and long-term dissemination of published content.',
      sections: [
        {
          title: 'Journal-specific fees',
          text:
            'Article processing charges may vary from one journal to another. authors are advised to consult the website of the relevant journal for the current apc information and any journal-specific payment instructions.'
        },
        {
          title: 'Purpose of APCs',
          text:
            'APCs contribute to the sustainability of the publishing programme and help support the operational costs of open-access publication. These may include platform maintenance, manuscript processing, copyediting or production support, hosting, metadata management, and online dissemination.'
        },
        {
          title: 'Editorial independence',
          text:
            'An author’s ability to pay an article processing charge has no influence on editorial evaluation, peer review, or publication decisions. Editorial decisions are made independently on the basis of scholarly merit and compliance with the journal’s standards.'
        },
        {
          title: 'Payment information',
          text:
            'where an APC applies, payment information is communicated after editorial acceptance and according to the procedures of the journal concerned. Authors should not interpret any payment-related communication as part of the editorial decision-making process.'
        },
        {
          title: 'Contact',
          text:
            'For general questions regarding article processing charges, authors may contact <a href="mailto:infos@b-institute.org" class="text-[#1e3a5f] underline">infos@b-institute.org</a>.'
        }
      ]
    },

    fr: {
      title: 'Frais de traitement d’article (APC)',
      metaDescription:
        'informations sur les frais de traitement d’article pour les revues publiées par birds press.',
      intro:
        'BIRDs press s’engage à soutenir la publication scientifique en libre accès. Les frais de traitement d’article (APC), lorsqu’ils s’appliquent, contribuent à couvrir les coûts liés à l’administration éditoriale, à l’infrastructure numérique de publication, à l’hébergement, à la production et à la diffusion durable des contenus publiés.',
      sections: [
        {
          title: 'Frais selon les revues',
          text:
            'Les frais de traitement d’article peuvent varier d’une revue à l’autre. Les auteurs sont invités à consulter le site de la revue concernée pour connaître le montant actualisé des apc ainsi que les éventuelles modalités de paiement propres à cette revue.'
        },
        {
          title: 'Finalité des APC',
          text:
            'Les APC contribuent à la pérennité du programme de publication et permettent de soutenir les coûts opérationnels de la publication en libre accès. Ils peuvent notamment couvrir la maintenance de la plateforme, le traitement des manuscrits, l’appui à la production éditoriale, l’hébergement, la gestion des métadonnées et la diffusion en ligne.'
        },
        {
          title: 'Indépendance éditoriale',
          text:
            'La capacité d’un auteur à payer des frais de traitement d’article n’a aucune incidence sur l’évaluation éditoriale, l’examen par les pairs ou la décision de publication. Les décisions éditoriales sont prises de manière indépendante sur la base de la qualité scientifique du manuscrit et de sa conformité aux standards de la revue.'
        },
        {
          title: 'Informations de paiement',
          text:
            'Lorsqu’un apc s’applique, les informations relatives au paiement sont communiquées après l’acceptation éditoriale et conformément aux procédures de la revue concernée. Les auteurs ne doivent pas interpréter les échanges relatifs au paiement comme faisant partie du processus de décision éditoriale.'
        },
        {
          title: 'Contact',
          text:
            'Pour toute question générale relative aux frais de traitement d’article, les auteurs peuvent contacter <a href="mailto:infos@b-institute.org" class="text-[#1e3a5f] underline">infos@b-institute.org</a>.'
        }
      ]
    }
  };

  const c = content[language];

  return (
    <>
      <Helmet>
        <title>{c.title} - birds press</title>
        <meta name="description" content={c.metaDescription} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{c.title}</h1>

          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 leading-relaxed mb-8">{c.intro}</p>

            {c.sections.map((section, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h2>
                <p
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: section.text }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleProcessingFee;