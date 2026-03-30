import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Seo from '@/components/Seo';

const AIPolicy = () => {
  const { language } = useLanguage();
  const lastUpdated = language === 'fr' ? 'Dernière mise à jour : 30 mars 2026' : 'Last updated: March 30, 2026';

  const content = {
    en: {
      title: 'Artificial Intelligence (AI) Policy',
      metaDescription: 'Policy on the use of artificial intelligence in manuscripts submitted to BIRDs Press journals.',
      intro:
        'BIRDs Press recognizes that artificial intelligence (AI) tools are increasingly used in research and academic writing. This policy aims to ensure that the use of such technologies remains transparent, responsible, and consistent with the principles of scholarly integrity.',

      sections: [
        {
          title: 'AI and Authorship',
          text:
            'Artificial intelligence tools cannot be listed as authors or co-authors of scholarly works. Authorship implies responsibility and accountability for the content of a manuscript, which can only be attributed to human authors.'
        },

        {
          title: 'Author Responsibility',
          text:
            'Authors remain fully responsible for the accuracy, originality, and integrity of the content of their manuscripts, including any parts where AI-assisted tools may have been used.'
        },

        {
          title: 'Permitted Use of AI Tools',
          text:
            'AI tools may be used as supportive instruments during the preparation of manuscripts. Examples of acceptable uses include language editing, grammar correction, formatting assistance, coding assistance, or limited analytical support under the supervision of the authors.'
        },

        {
          title: 'Transparency and Disclosure',
          text:
            'If generative AI tools are used during manuscript preparation, authors must disclose this use in the manuscript. The disclosure should specify the name of the tool, the purpose of its use, and confirm that the authors reviewed and verified the generated content.'
        },

        {
          title: 'Example Disclosure Statement',
          text:
            'Example statement: During the preparation of this manuscript, the authors used [NAME OF TOOL] for [PURPOSE]. The authors reviewed and edited the output as necessary and take full responsibility for the content of the published article.'
        },

        {
          title: 'Accuracy of Sources',
          text:
            'Authors must ensure that all references, citations, and factual statements are accurate. AI-generated or AI-suggested references must be verified by the authors prior to submission.'
        },

        {
          title: 'Use of AI by Editors and Reviewers',
          text:
            'Editors and reviewers must respect the confidentiality of submitted manuscripts. Manuscripts under review should not be uploaded to generative AI systems or external platforms that could compromise confidentiality.'
        }
      ]
    },

    fr: {
      title: 'Politique relative à l’intelligence artificielle (IA)',
      metaDescription: 'Politique concernant l’utilisation de l’intelligence artificielle dans les revues publiées par BIRDs Press.',
      intro:
        'BIRDs Press reconnaît que les outils d’intelligence artificielle (IA) sont de plus en plus utilisés dans la recherche et la rédaction scientifique. Cette politique vise à garantir que leur utilisation reste transparente, responsable et conforme aux principes d’intégrité scientifique.',

      sections: [
        {
          title: 'IA et attribution de la paternité scientifique',
          text:
            'Les outils d’intelligence artificielle ne peuvent pas être considérés comme auteurs ou co-auteurs d’un article scientifique. La qualité d’auteur implique une responsabilité intellectuelle et scientifique qui ne peut être attribuée qu’à des personnes physiques.'
        },

        {
          title: 'Responsabilité des auteurs',
          text:
            'Les auteurs restent pleinement responsables de l’exactitude, de l’originalité et de l’intégrité du contenu de leurs manuscrits, y compris lorsque des outils d’IA ont été utilisés dans certaines étapes de préparation.'
        },

        {
          title: 'Utilisations autorisées',
          text:
            'Les outils d’IA peuvent être utilisés comme instruments d’assistance lors de la préparation d’un manuscrit. Cela peut inclure par exemple la correction linguistique, l’amélioration de la clarté du texte, l’assistance au codage, ou certaines analyses techniques sous la supervision des auteurs.'
        },

        {
          title: 'Transparence et déclaration',
          text:
            'Lorsque des outils d’IA générative sont utilisés dans la préparation d’un manuscrit, leur utilisation doit être déclarée dans l’article. Cette déclaration doit préciser le nom de l’outil utilisé, l’objectif de son utilisation et confirmer que les auteurs ont vérifié et validé le contenu généré.'
        },

        {
          title: 'Exemple de déclaration',
          text:
            'Exemple : Lors de la préparation de ce manuscrit, les auteurs ont utilisé [NOM DE L’OUTIL] pour [OBJECTIF]. Les auteurs ont ensuite révisé et validé le contenu généré et assument l’entière responsabilité du contenu publié.'
        },

        {
          title: 'Vérification des sources',
          text:
            'Les auteurs doivent s’assurer de l’exactitude de toutes les références et citations utilisées dans leurs manuscrits. Les références suggérées ou générées par des outils d’IA doivent être vérifiées avant la soumission.'
        },

        {
          title: 'Utilisation de l’IA par les éditeurs et évaluateurs',
          text:
            'Les éditeurs et évaluateurs doivent respecter la confidentialité du processus d’évaluation. Les manuscrits soumis ne doivent pas être téléchargés dans des systèmes d’IA générative ou des plateformes externes susceptibles de compromettre cette confidentialité.'
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

export default AIPolicy;
