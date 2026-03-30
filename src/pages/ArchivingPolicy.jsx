import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Seo from '@/components/Seo';

const ArchivingPolicy = () => {
  const { language } = useLanguage();
  const lastUpdated = language === 'fr' ? 'Dernière mise à jour : 30 mars 2026' : 'Last updated: March 30, 2026';

  const content = {
    en: {
      title: 'Archiving and Preservation Policy',
      metaDescription: 'Archiving and digital preservation policy of BIRDs Press.',
      intro:
        'BIRDs Press is committed to ensuring the long-term preservation and accessibility of the scholarly content published in its journals.',
      sections: [
        {
          title: 'Digital Preservation',
          text:
            'Published articles are preserved to ensure the long-term accessibility of the scholarly record, even in the event that a journal ceases publication.'
        },
        {
          title: 'PKP Preservation Network (PKP PN)',
          text:
            'Journals published by BIRDs Press participate in the PKP Preservation Network (PKP PN), a distributed digital preservation service developed by the Public Knowledge Project. This network ensures that journal content is securely archived and preserved across multiple preservation nodes.'
        },
        {
          title: 'Continued Access',
          text:
            'The PKP Preservation Network ensures that preserved journal content remains accessible to the scholarly community even if the original publishing platform becomes unavailable.'
        },
        {
          title: 'Author Self-Archiving',
          text:
            'Authors may deposit copies of their published work in institutional or subject repositories where permitted by the journal’s policies, further contributing to the long-term accessibility of scholarly outputs.'
        }
      ]
    },

    fr: {
      title: 'Politique d’archivage et de préservation',
      metaDescription: 'Politique d’archivage et de préservation numérique de BIRDs Press.',
      intro:
        'BIRDs Press s’engage à assurer la préservation à long terme et l’accessibilité durable du contenu scientifique publié dans ses revues.',
      sections: [
        {
          title: 'Préservation numérique',
          text:
            'Les articles publiés sont préservés afin de garantir l’accessibilité à long terme du dossier scientifique, y compris dans l’éventualité où une revue cesserait ses activités.'
        },
        {
          title: 'PKP Preservation Network (PKP PN)',
          text:
            'Les revues publiées par BIRDs Press participent au PKP Preservation Network (PKP PN), un service de préservation numérique distribué développé par le Public Knowledge Project. Ce réseau garantit que le contenu des revues est archivé et préservé de manière sécurisée à travers plusieurs nœuds de préservation.'
        },
        {
          title: 'Maintien de l’accès',
          text:
            'Le PKP Preservation Network permet d’assurer que le contenu archivé des revues reste accessible à la communauté scientifique même si la plateforme de publication originale devient indisponible.'
        },
        {
          title: 'Auto-archivage des auteurs',
          text:
            'Les auteurs peuvent également déposer une copie de leurs articles publiés dans des dépôts institutionnels ou thématiques lorsque les politiques de la revue le permettent, contribuant ainsi à la diffusion et à la préservation du savoir scientifique.'
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
              <div key={index} className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArchivingPolicy;
