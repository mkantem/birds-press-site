import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';

const AuthorContributions = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Author Contribution Statements',
      metaDescription:
        'Guidance on author contribution statements and the CRediT taxonomy for journals published by BIRDs Press.',
      intro:
        'BIRDs Press supports transparency in authorship and contribution reporting. Journals published by BIRDs Press may invite authors to describe their contributions using the CRediT (Contributor Roles Taxonomy). The categories below are provided as a reference framework.',
      roles: [
        {
          name: 'Conceptualization',
          description:
            'Ideas; formulation or development of the overarching research goals and aims.'
        },
        {
          name: 'Data Curation',
          description:
            'Management activities to annotate, clean, maintain, and preserve research data for initial use and future reuse.'
        },
        {
          name: 'Formal Analysis',
          description:
            'Application of statistical, mathematical, computational, or other formal techniques to analyze or synthesize study data.'
        },
        {
          name: 'Funding Acquisition',
          description:
            'Acquisition of the financial support for the project leading to the publication.'
        },
        {
          name: 'Investigation',
          description:
            'Conducting the research and investigation process, including data or evidence collection.'
        },
        {
          name: 'Methodology',
          description:
            'Development or design of methodology; creation of models.'
        },
        {
          name: 'Project Administration',
          description:
            'Management and coordination responsibility for the planning and execution of the research activity.'
        },
        {
          name: 'Resources',
          description:
            'Provision of study materials, participants, data sources, instruments, computing resources, or other analytic tools.'
        },
        {
          name: 'Software',
          description:
            'Programming, software development, implementation of code, and testing of software components.'
        },
        {
          name: 'Supervision',
          description:
            'Oversight and leadership responsibility for the planning and execution of the research activity, including mentorship.'
        },
        {
          name: 'Validation',
          description:
            'Verification of the reproducibility, reliability, or overall consistency of the results and research outputs.'
        },
        {
          name: 'Visualization',
          description:
            'Preparation, creation, and/or presentation of the published work, particularly data visualization.'
        },
        {
          name: 'Writing – Original Draft',
          description:
            'Preparation and creation of the initial draft of the manuscript.'
        },
        {
          name: 'Writing – Review & Editing',
          description:
            'Critical review, commentary, and revision of the manuscript, including pre- or post-publication stages.'
        }
      ],
      note:
        'Where requested by the journal, authors should provide contribution statements that accurately reflect the role of each contributor. The use of the CRediT taxonomy does not replace authorship criteria or responsibility for the content of the work.'
    },

    fr: {
      title: 'Déclarations de contribution des auteurs',
      metaDescription:
        'Cadre de référence sur les déclarations de contribution des auteurs et la taxonomie CRediT pour les revues publiées par BIRDs Press.',
      intro:
        'BIRDs Press encourage la transparence dans la déclaration des contributions des auteurs. Les revues publiées par BIRDs Press peuvent inviter les auteurs à décrire leurs contributions à l’aide de la taxonomie CRediT (Contributor Roles Taxonomy). Les catégories ci-dessous sont fournies à titre de cadre de référence.',
      roles: [
        {
          name: 'Conceptualisation',
          description:
            'Idées ; formulation ou développement des objectifs et finalités généraux de la recherche.'
        },
        {
          name: 'Curation des données',
          description:
            'Activités de gestion visant à annoter, nettoyer, maintenir et préserver les données de recherche pour leur utilisation initiale et leur réutilisation future.'
        },
        {
          name: 'Analyse formelle',
          description:
            'Application de techniques statistiques, mathématiques, informatiques ou autres méthodes formelles pour analyser ou synthétiser les données de l’étude.'
        },
        {
          name: 'Acquisition de financement',
          description:
            'Obtention du soutien financier pour le projet ayant conduit à la publication.'
        },
        {
          name: 'Investigation',
          description:
            'Conduite du processus de recherche et d’investigation, y compris la collecte de données ou d’éléments de preuve.'
        },
        {
          name: 'Méthodologie',
          description:
            'Développement ou conception de la méthodologie ; création de modèles.'
        },
        {
          name: 'Administration du projet',
          description:
            'Responsabilité de gestion et de coordination pour la planification et l’exécution de l’activité de recherche.'
        },
        {
          name: 'Ressources',
          description:
            'Fourniture de matériels d’étude, de participants, de sources de données, d’instruments, de ressources informatiques ou d’autres outils d’analyse.'
        },
        {
          name: 'Logiciel',
          description:
            'Programmation, développement logiciel, mise en œuvre du code et test des composants logiciels.'
        },
        {
          name: 'Supervision',
          description:
            'Responsabilité de supervision et de leadership dans la planification et l’exécution de l’activité de recherche, y compris le mentorat.'
        },
        {
          name: 'Validation',
          description:
            'Vérification de la reproductibilité, de la fiabilité ou de la cohérence générale des résultats et autres productions de recherche.'
        },
        {
          name: 'Visualisation',
          description:
            'Préparation, création et/ou présentation du travail publié, notamment la visualisation des données.'
        },
        {
          name: 'Rédaction – version originale',
          description:
            'Préparation et rédaction de la première version du manuscrit.'
        },
        {
          name: 'Rédaction – révision et édition',
          description:
            'Révision critique, commentaires et réécriture du manuscrit, y compris aux étapes pré- ou post-publication.'
        }
      ],
      note:
        'Lorsque la revue le demande, les auteurs doivent fournir des déclarations de contribution reflétant fidèlement le rôle de chaque contributeur. L’utilisation de la taxonomie CRediT ne remplace pas les critères d’attribution de la qualité d’auteur ni la responsabilité scientifique relative au contenu du travail.'
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {c.roles.map((role, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">
                    {role.name}
                  </h3>
                  <p className="text-sm text-gray-700">{role.description}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <p className="text-sm text-gray-700">{c.note}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthorContributions;