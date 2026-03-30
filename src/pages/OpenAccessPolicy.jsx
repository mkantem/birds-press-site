import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Seo from '@/components/Seo';

const OpenAccessPolicy = () => {
  const { language } = useLanguage();
  const lastUpdated = language === 'fr' ? 'Dernière mise à jour : 30 mars 2026' : 'Last updated: March 30, 2026';

  const content = {
    en: {
      title: 'Open Access Policy',
      metaDescription: 'Open access publishing policy of BIRDs Press.',
      intro:
        'BIRDs Press is committed to the open dissemination of scholarly research. All articles published in journals hosted by BIRDs Press are made freely available online without subscription or paywall barriers.',
      sections: [
        {
          title: 'Immediate Open Access',
          text:
            'All research published by BIRDs Press is freely accessible online immediately upon publication. Readers may access, read, download, and share published articles without subscription requirements.'
        },
        {
          title: 'Global Access to Knowledge',
          text:
            'By publishing research without access barriers, BIRDs Press seeks to ensure that scholarly work can reach researchers, students, practitioners, policymakers, and the wider public worldwide. This approach is particularly important for expanding access to scientific knowledge in regions where institutional subscription resources may be limited.'
        },
        {
          title: 'Reuse and Licensing',
          text:
            'Articles are published under open licenses that enable broad dissemination and reuse of research while ensuring appropriate attribution to authors. Specific licensing terms are indicated on each article and explained in the publisher’s licensing policy.'
        },
        {
          title: 'Visibility and Discoverability',
          text:
            'Open access publication enhances the visibility and accessibility of research outputs. Journals published by BIRDs Press aim to maximize discoverability through indexing services, metadata dissemination, and integration with scholarly information systems.'
        },
        {
          title: 'Long-Term Preservation',
          text:
            'BIRDs Press is committed to ensuring the long-term accessibility of published research. Digital preservation strategies are implemented to safeguard scholarly content and maintain permanent access to published articles.'
        }
      ]
    },

    fr: {
      title: 'Politique d’accès libre',
      metaDescription: 'Politique d’accès libre de BIRDs Press.',
      intro:
        'BIRDs Press s’engage à favoriser la diffusion ouverte des connaissances scientifiques. Tous les articles publiés dans les revues hébergées par BIRDs Press sont accessibles gratuitement en ligne sans abonnement ni barrière payante.',
      sections: [
        {
          title: 'Accès libre immédiat',
          text:
            'Tous les travaux publiés par BIRDs Press sont accessibles gratuitement en ligne dès leur publication. Les lecteurs peuvent consulter, lire, télécharger et partager les articles sans exigence d’abonnement.'
        },
        {
          title: 'Accès mondial aux connaissances',
          text:
            'En publiant la recherche sans barrière d’accès, BIRDs Press vise à permettre aux chercheurs, étudiants, praticiens, décideurs et au grand public d’accéder librement aux résultats scientifiques à l’échelle mondiale. Cette approche est particulièrement importante pour élargir l’accès au savoir dans les contextes où les ressources d’abonnement institutionnel sont limitées.'
        },
        {
          title: 'Réutilisation et licences',
          text:
            'Les articles sont publiés sous des licences ouvertes permettant une large diffusion et réutilisation des travaux tout en garantissant l’attribution appropriée aux auteurs. Les conditions précises de licence sont indiquées pour chaque article et détaillées dans la politique de licence du publisher.'
        },
        {
          title: 'Visibilité et découvrabilité',
          text:
            'La publication en accès libre favorise la visibilité et l’accessibilité des travaux scientifiques. Les revues publiées par BIRDs Press visent à maximiser la découvrabilité des articles grâce à l’indexation dans des bases de données, la diffusion des métadonnées et l’intégration dans les systèmes d’information scientifiques.'
        },
        {
          title: 'Préservation à long terme',
          text:
            'BIRDs Press s’engage à assurer la préservation à long terme des publications scientifiques. Des stratégies de préservation numérique sont mises en place afin de garantir l’accès durable aux articles publiés.'
        }
      ]
    }
  };

  const c = content[language];

  return (
    <>
      <Seo title={c.title} description={c.metaDescription} />

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{c.title}</h1>
          <p className="-mt-4 mb-8 text-sm font-medium uppercase tracking-wide text-gray-500">{lastUpdated}</p>

          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 leading-relaxed mb-8">{c.intro}</p>

            {c.sections.map((section, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenAccessPolicy;
