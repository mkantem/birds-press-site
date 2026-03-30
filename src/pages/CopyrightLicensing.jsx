import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Seo from '@/components/Seo';

const CopyrightLicensing = () => {
  const { language } = useLanguage();
  const lastUpdated = language === 'fr' ? 'Dernière mise à jour : 30 mars 2026' : 'Last updated: March 30, 2026';

  const content = {
    en: {
      title: 'Copyright and Licensing',
      metaDescription:
        'Copyright and licensing policy for journals published by BIRDs Press.',
      intro:
        'BIRDs Press publishes scholarly work under open licenses while ensuring proper attribution and protection of author rights.',
      sections: [
        {
          title: 'Copyright Ownership',
          text:
            'Authors retain copyright of their work. By submitting and publishing with BIRDs Press, authors grant the publisher the right to publish, distribute, and archive the article as part of the journal.'
        },
        {
          title: 'Creative Commons License',
          text:
            'Articles published by BIRDs Press are distributed under the Creative Commons Attribution 4.0 International License (CC BY 4.0). This license permits unrestricted use, distribution, and reproduction in any medium, provided the original author and source are properly credited.'
        },
        {
          title: 'License Details',
          text:
            'The full terms of the license are available on the Creative Commons website:',
          link: 'https://creativecommons.org/licenses/by/4.0/'
        },
        {
          title: 'Permitted Uses',
          text:
            'Under the CC BY 4.0 license, users may read, download, copy, distribute, print, search, link to the full texts of articles, or use them for any lawful purpose, provided appropriate attribution to the authors and the journal is given.'
        },
        {
          title: 'Third-Party Material',
          text:
            'Authors are responsible for ensuring that permission has been obtained for any third-party material included in their manuscripts. Such material must be properly acknowledged and may be subject to different licensing conditions.'
        }
      ]
    },

    fr: {
      title: 'Droit d’auteur et licences',
      metaDescription:
        'Politique de droit d’auteur et de licences des revues publiées par BIRDs Press.',
      intro:
        'BIRDs Press publie les travaux scientifiques sous licences ouvertes tout en garantissant l’attribution appropriée et le respect des droits des auteurs.',
      sections: [
        {
          title: 'Titularité du droit d’auteur',
          text:
            'Les auteurs conservent le droit d’auteur sur leurs travaux. En soumettant et en publiant avec BIRDs Press, ils accordent au publisher le droit de publier, diffuser et archiver l’article dans le cadre de la revue.'
        },
        {
          title: 'Licence Creative Commons',
          text:
            'Les articles publiés par BIRDs Press sont distribués sous licence Creative Commons Attribution 4.0 International (CC BY 4.0). Cette licence autorise l’utilisation, la distribution et la reproduction du contenu dans tout support, à condition que les auteurs et la source originale soient correctement cités.'
        },
        {
          title: 'Détails de la licence',
          text:
            'Les conditions complètes de cette licence peuvent être consultées sur le site de Creative Commons :',
          link: 'https://creativecommons.org/licenses/by/4.0/'
        },
        {
          title: 'Utilisations autorisées',
          text:
            'Dans le cadre de la licence CC BY 4.0, les utilisateurs peuvent lire, télécharger, copier, distribuer, imprimer, rechercher ou créer des liens vers les textes intégraux des articles, ou utiliser le contenu à toute autre fin licite, à condition de citer correctement les auteurs et la source.'
        },
        {
          title: 'Contenu de tiers',
          text:
            'Les auteurs sont responsables d’obtenir les autorisations nécessaires pour tout contenu appartenant à des tiers inclus dans leurs manuscrits. Ce matériel doit être correctement attribué et peut être soumis à des conditions de licence différentes.'
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

                {section.link && (
                  <p className="mt-3">
                    <a
                      href={section.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1e3a5f] hover:underline"
                    >
                      {section.link}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyrightLicensing;
