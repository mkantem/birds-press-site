import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Seo from '@/components/Seo';

const PostDecisionProcedure = () => {
  const { language } = useLanguage();
  const lastUpdated = language === 'fr' ? 'Dernière mise à jour : 30 mars 2026' : 'Last updated: March 30, 2026';

  const content = {
    en: {
      title: 'Post-Decision Procedure',
      metaDescription:
        'Procedures followed after editorial decisions for journals published by BIRDs Press.',
      intro:
        'After an editorial decision is reached, authors are expected to follow the procedures outlined in the decision letter. The steps described below provide a general framework applied across journals published by BIRDs Press.',
      sections: [
        {
          title: 'Acceptance',
          text:
            'Manuscripts accepted for publication proceed to the production stage. Authors receive a formal acceptance notification and may be asked to review page proofs before publication to ensure the accuracy of the final version.'
        },
        {
          title: 'Minor Revisions',
          text:
            'When minor revisions are requested, authors are invited to submit a revised version of the manuscript within the timeframe indicated in the decision letter. Revisions should address all reviewer and editorial comments. Revised manuscripts are typically assessed by the editors to verify that the requested changes have been implemented.'
        },
        {
          title: 'Major Revisions',
          text:
            'When major revisions are requested, authors are invited to substantially revise the manuscript and provide a detailed response to reviewer and editorial comments. Revised manuscripts may undergo additional evaluation and may be returned to reviewers when necessary.'
        },
        {
          title: 'Reject Decision',
          text:
            'Manuscripts that do not meet the journal’s publication standards or scope may be rejected following editorial evaluation and peer review. Authors normally receive feedback explaining the reasons for the decision. A rejection decision concludes the evaluation of the submitted manuscript. Any subsequent submission must represent substantially new work that addresses the concerns identified during the review process.'
        },
        {
          title: 'Response to Reviewers',
          text:
            'When submitting a revised manuscript, authors are expected to provide a response document addressing reviewer and editorial comments point-by-point. Changes made to the manuscript should be clearly indicated in the revised version.'
        },
        {
          title: 'Appeals',
          text:
            'Authors who believe that an editorial decision was based on a misunderstanding or procedural issue may submit a reasoned appeal. Appeals must provide clear justification and supporting arguments. Concerns related to editorial handling or publication ethics may also be addressed to <a href="mailto:ethics@b-institute.org" class="text-[#1e3a5f] underline">ethics@b-institute.org</a>.'
        },
        {
          title: 'Production and Publication',
          text:
            'After acceptance, manuscripts enter the production process according to the workflow of the journal. Authors may be asked to review proofs and approve final corrections prior to publication. Published articles are assigned persistent identifiers and made accessible through the journal platform.'
        }
      ]
    },

    fr: {
      title: 'Procédure après décision éditoriale',
      metaDescription:
        'Procédures appliquées après les décisions éditoriales pour les revues publiées par BIRDs Press.',
      intro:
        'Une fois qu’une décision éditoriale est prise, les auteurs sont invités à suivre les instructions indiquées dans la lettre de décision. Les étapes décrites ci-dessous présentent le cadre général appliqué aux revues publiées par BIRDs Press.',
      sections: [
        {
          title: 'Acceptation',
          text:
            'Les manuscrits acceptés pour publication passent à l’étape de production. Les auteurs reçoivent une notification formelle d’acceptation et peuvent être invités à vérifier les épreuves afin de confirmer l’exactitude de la version finale avant publication.'
        },
        {
          title: 'Révisions mineures',
          text:
            'Lorsque des révisions mineures sont demandées, les auteurs sont invités à soumettre une version révisée du manuscrit dans le délai indiqué dans la lettre de décision. Les révisions doivent répondre à l’ensemble des commentaires des évaluateurs et des éditeurs. Les manuscrits révisés sont généralement examinés par les éditeurs afin de vérifier que les modifications demandées ont été apportées.'
        },
        {
          title: 'Révisions majeures',
          text:
            'Lorsque des révisions majeures sont demandées, les auteurs doivent réviser substantiellement le manuscrit et fournir une réponse détaillée aux commentaires des évaluateurs et des éditeurs. Les manuscrits révisés peuvent faire l’objet d’une nouvelle évaluation et être renvoyés aux évaluateurs lorsque cela est nécessaire.'
        },
        {
          title: 'Décision de rejet',
          text:
            'Les manuscrits qui ne répondent pas aux standards scientifiques ou au champ de la revue peuvent être rejetés après l’évaluation éditoriale et/ou l’examen par les pairs. Les auteurs reçoivent généralement des commentaires expliquant les raisons de la décision. Une décision de rejet met fin à l’évaluation du manuscrit soumis. Toute soumission ultérieure doit constituer un travail substantiellement nouveau répondant aux préoccupations identifiées lors de l’évaluation.'
        },
        {
          title: 'Réponse aux évaluateurs',
          text:
            'Lors de la soumission d’une version révisée, les auteurs doivent fournir un document de réponse détaillant point par point les commentaires des évaluateurs et des éditeurs. Les modifications apportées au manuscrit doivent être clairement indiquées dans la version révisée.'
        },
        {
          title: 'Recours',
          text:
            'Les auteurs qui estiment qu’une décision éditoriale repose sur un malentendu ou un problème procédural peuvent soumettre un recours motivé. Le recours doit présenter une justification claire et des arguments étayés. Les préoccupations liées à la gestion éditoriale ou à l’éthique de publication peuvent également être adressées à <a href="mailto:ethics@b-institute.org" class="text-[#1e3a5f] underline">ethics@b-institute.org</a>.'
        },
        {
          title: 'Production et publication',
          text:
            'Après acceptation, les manuscrits entrent dans la phase de production selon le flux de travail de la revue. Les auteurs peuvent être invités à vérifier les épreuves et à approuver les corrections finales avant publication. Les articles publiés reçoivent des identifiants persistants et sont mis à disposition sur la plateforme de la revue.'
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

export default PostDecisionProcedure;
