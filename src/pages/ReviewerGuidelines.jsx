import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';

const ReviewerGuidelines = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Reviewer Guidelines',
      metaDescription: 'Guidelines for reviewers evaluating manuscripts for journals published by BIRDs Press.',
      intro:
        'Peer reviewers play an essential role in maintaining the quality, integrity, and credibility of scholarly publishing. BIRDs Press greatly values the expertise and time contributed by reviewers and encourages reviewers to follow the guidelines below when evaluating manuscripts.',
      sections: [
        {
          title: 'Ethical Responsibilities',
          text:
            'Reviewers are expected to follow the ethical standards outlined in the publisher’s Ethical Policies. In particular, reviewers should disclose any potential conflict of interest before accepting a review assignment and decline the invitation if their objectivity could be compromised. Reviews should be conducted objectively and without discrimination based on race, gender, age, nationality, institutional affiliation, political beliefs, or other personal characteristics of the authors.'
        },
        {
          title: 'Confidentiality',
          text:
            'Manuscripts received for review must be treated as confidential documents. Reviewers must not share, distribute, or discuss the manuscript with others without authorization from the editors. Information obtained during the review process must not be used for personal advantage or for the benefit of others.'
        },
        {
          title: 'Conducting the Review',
          text:
            'Reviews should be objective, constructive, and professional in tone. Critiques should focus on the scholarly content of the manuscript and avoid personal criticism of the authors. Reviewers are encouraged to clearly explain their comments and provide supporting arguments where necessary to help authors improve their work.'
        },
        {
          title: 'Assessment of the Manuscript',
          text:
            'When evaluating a manuscript, reviewers may consider whether the work falls within the scope of the journal and whether the research demonstrates sufficient originality, methodological rigor, and scholarly contribution. Reviewers should also assess the clarity of the writing, the organization of the manuscript, the relevance and adequacy of references, and the appropriateness of figures, tables, and supporting materials.'
        },
        {
          title: 'Ethical Concerns',
          text:
            'Reviewers should inform the editors if they identify potential ethical issues, including plagiarism, data fabrication or falsification, unethical research practices, or significant similarities with previously published work. Reviewers should also comment on ethical considerations related to the protection of human participants or animal subjects when relevant.'
        },
        {
          title: 'Communication with Editors',
          text:
            'If reviewers believe they are not sufficiently qualified to evaluate a manuscript, or if they cannot complete the review within the requested timeframe, they should inform the editors as soon as possible. Reviewers may also communicate confidential concerns to the editors separately from comments intended for the authors.'
        }
      ],
      closing:
        'BIRDs Press sincerely thanks reviewers for their valuable contribution to the scholarly community. Their expertise and commitment are essential to maintaining high academic standards.'
    },

    fr: {
      title: 'Directives pour les évaluateurs',
      metaDescription: 'Directives destinées aux évaluateurs des revues publiées par BIRDs Press.',
      intro:
        'Les évaluateurs jouent un rôle essentiel dans le maintien de la qualité, de l’intégrité et de la crédibilité de la publication scientifique. BIRDs Press remercie les chercheurs qui contribuent à ce processus et les encourage à suivre les recommandations ci-dessous lors de l’évaluation des manuscrits.',
      sections: [
        {
          title: 'Responsabilités éthiques',
          text:
            'Les évaluateurs sont invités à respecter les principes éthiques décrits dans la politique éthique du publisher. Avant d’accepter une invitation, ils doivent signaler tout conflit d’intérêts potentiel et décliner l’évaluation si leur objectivité pourrait être compromise. Les manuscrits doivent être évalués uniquement sur la base de leur contenu scientifique, sans discrimination liée à la race, au sexe, à l’âge, à l’orientation sexuelle, aux croyances religieuses, à l’origine ethnique, aux opinions politiques, à la citoyenneté ou à l’affiliation institutionnelle des auteurs.'
        },
        {
          title: 'Confidentialité',
          text:
            'Les manuscrits reçus pour évaluation doivent être considérés comme des documents confidentiels. Les évaluateurs ne doivent ni partager ni diffuser le contenu du manuscrit sans autorisation des éditeurs. Les informations obtenues dans le cadre de l’évaluation ne doivent pas être utilisées à des fins personnelles ou professionnelles.'
        },
        {
          title: 'Conduite de l’évaluation',
          text:
            'Les évaluations doivent être objectives, constructives et formulées dans un ton professionnel. Les critiques doivent porter sur le contenu scientifique du manuscrit et éviter toute critique personnelle de l’auteur. Les évaluateurs sont encouragés à exprimer clairement leurs observations et à fournir des arguments ou suggestions permettant d’améliorer le manuscrit.'
        },
        {
          title: 'Points à considérer lors de l’évaluation',
          text:
            'Lors de l’examen d’un manuscrit, les évaluateurs peuvent notamment déterminer si le sujet relève du champ de la revue et si la recherche présente une contribution scientifique suffisante. Ils peuvent également examiner l’originalité du travail, la solidité méthodologique, la pertinence de l’argumentation, la clarté de l’écriture et de l’organisation du texte, l’actualité et la pertinence des références ainsi que l’adéquation du titre, des figures et des tableaux.'
        },
        {
          title: 'Questions éthiques',
          text:
            'Les évaluateurs doivent informer les éditeurs de toute préoccupation éthique potentielle, notamment en cas de suspicion de plagiat, de fabrication ou de falsification de données, ou de similitudes substantielles avec des travaux publiés ou en cours d’évaluation ailleurs. Ils peuvent également commenter les normes éthiques relatives à la protection des participants humains ou des animaux lorsque cela est pertinent.'
        },
        {
          title: 'Communication avec les éditeurs',
          text:
            'Si un évaluateur estime ne pas disposer de l’expertise nécessaire pour examiner un manuscrit ou s’il ne peut pas réaliser l’évaluation dans le délai prévu, il doit en informer les éditeurs dans les plus brefs délais. Les évaluateurs peuvent également transmettre aux éditeurs des commentaires confidentiels distincts des remarques destinées aux auteurs.'
        }
      ],
      closing:
        'BIRDs Press remercie sincèrement les évaluateurs pour leur contribution essentielle à la communauté scientifique. Leur expertise et leur engagement contribuent à maintenir la qualité des publications académiques.'
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
              <p className="text-gray-700 italic">{c.closing}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewerGuidelines;