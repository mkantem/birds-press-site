import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Seo from '@/components/Seo';

const PeerReviewPolicy = () => {
  const { language } = useLanguage();
  const lastUpdated = language === 'fr' ? 'Dernière mise à jour : 30 mars 2026' : 'Last updated: March 30, 2026';

  const content = {
    en: {
      title: 'Peer Review Policy',
      metaDescription: 'Peer review policy for journals published by BIRDs Press.',
      intro:
        'BIRDs Press supports rigorous and fair peer review as a central mechanism for maintaining the scholarly quality, integrity, and credibility of the journals it hosts. The peer review process assists editors in assessing the originality, relevance, and scientific quality of submitted manuscripts while providing constructive feedback to authors.',
      sections: [
        {
          title: 'Double-Blind Peer Review',
          text:
            'Journals published by BIRDs Press generally operate a double-blind peer review process, in which authors and reviewers remain anonymous to one another during review. To support this process, authors must ensure that the main manuscript file is anonymized and that identifying information is removed from the manuscript text and file properties where required.'
        },
        {
          title: 'Submission and Editorial Screening',
          text:
            'All manuscripts submitted to journals hosted by BIRDs Press may undergo an initial editorial screening to ensure that they comply with the journal’s scope, submission requirements, and basic scholarly standards. Manuscripts that do not meet these criteria may be returned to the authors or declined at this stage. Manuscripts that pass the initial screening may proceed to peer review.'
        },
        {
          title: 'Reviewer Selection',
          text:
            'Editors select reviewers based on their subject expertise, academic competence, and ability to provide an objective assessment of the manuscript. As a general principle, manuscripts are evaluated by at least two independent reviewers before a final editorial decision is made.'
        },
        {
          title: 'Role and Purpose of Peer Review',
          text:
            'Peer review plays a critical role in scholarly publishing by helping editors determine whether a manuscript meets the academic standards of the journal. Reviewer comments are intended to provide constructive feedback that helps authors improve the clarity, rigor, and contribution of their work.'
        },
        {
          title: 'Reviewer Guidelines',
          text:
            'Detailed expectations regarding confidentiality, objectivity, conflicts of interest, timeliness, and the preparation of review reports are set out in the <a href="reviewer-guidelines/" target="_blank" rel="noopener noreferrer" class="text-[#1e3a5f] underline">Reviewer Guidelines</a>. Reviewers are encouraged to consult these guidelines before accepting or completing a review assignment.'
        },
        {
          title: 'Confidentiality and Conflicts of Interest',
          text:
            'The peer review process relies on confidentiality and professional integrity. Reviewers must not disclose, distribute, or use any part of an unpublished manuscript for personal or professional advantage. Any competing interest based on financial, institutional, collaborative, intellectual, or personal relationships must be disclosed to the editors.'
        },
        {
          title: 'Editorial Decisions',
          text:
            'Editorial decisions are made by the responsible editors of the journal after considering reviewer reports and editorial judgment. Possible decisions may include acceptance, minor revision, major revision, or rejection. Reviewer recommendations inform editorial decisions but do not automatically determine the final outcome.'
        },
        {
          title: 'Review Timeline',
          text:
            'Peer review timelines may vary depending on reviewer availability, the nature of the manuscript, and the number of revision rounds required. In general, the first round of peer review may take several weeks to a few months. Where revisions are requested, additional time may be required before a final decision is reached.'
        },
        {
          title: 'Appeals',
          text:
            'Authors who wish to contest an editorial decision may submit a reasoned appeal explaining the grounds for reconsideration. Appeals will be evaluated according to the editorial and ethical policies of the journal. Concerns regarding the integrity of the peer review process or publication ethics may also be submitted to <a href="mailto:ethics@b-institute.org" class="text-[#1e3a5f] underline">ethics@b-institute.org</a>.'
        }
      ]
    },

    fr: {
      title: 'Politique d’évaluation par les pairs',
      metaDescription: 'Politique d’évaluation par les pairs des revues publiées par BIRDs Press.',
      intro:
        'BIRDs Press soutient une évaluation par les pairs rigoureuse et équitable comme mécanisme central pour garantir la qualité scientifique, l’intégrité et la crédibilité des revues qu’elle héberge. Le processus d’évaluation par les pairs aide les éditeurs à apprécier l’originalité, la pertinence et la qualité académique des manuscrits soumis tout en fournissant aux auteurs des retours constructifs.',
      sections: [
        {
          title: 'Évaluation par les pairs en double aveugle',
          text:
            'Les revues publiées par BIRDs Press fonctionnent généralement selon un modèle d’évaluation par les pairs en double aveugle, dans lequel les auteurs et les évaluateurs demeurent anonymes les uns pour les autres pendant le processus d’évaluation. Pour permettre ce processus, les auteurs doivent s’assurer que le manuscrit soumis est correctement anonymisé et que toute information permettant d’identifier les auteurs est retirée du texte et des propriétés du fichier lorsque cela est requis.'
        },
        {
          title: 'Soumission et examen éditorial initial',
          text:
            'Tous les manuscrits soumis aux revues hébergées par BIRDs Press peuvent faire l’objet d’un examen éditorial initial afin de vérifier leur conformité avec le champ thématique de la revue, les exigences de soumission et les standards scientifiques de base. Les manuscrits qui ne répondent pas à ces critères peuvent être retournés aux auteurs ou refusés à ce stade. Les manuscrits qui franchissent cette étape peuvent être transmis pour évaluation par les pairs.'
        },
        {
          title: 'Sélection des évaluateurs',
          text:
            'Les évaluateurs sont sélectionnés par les éditeurs en fonction de leur expertise dans le domaine concerné, de leur compétence académique et de leur capacité à fournir une évaluation objective. En règle générale, les manuscrits sont évalués par au moins deux évaluateurs indépendants avant qu’une décision éditoriale finale ne soit prise.'
        },
        {
          title: 'Rôle et finalité de l’évaluation',
          text:
            'L’évaluation par les pairs constitue une étape essentielle du processus de publication scientifique. Elle permet aux éditeurs de déterminer si un manuscrit répond aux standards académiques de la revue et fournit aux auteurs des observations constructives destinées à améliorer la qualité, la rigueur et la contribution scientifique de leur travail.'
        },
        {
          title: 'Directives pour les évaluateurs',
          text:
            'Les attentes détaillées concernant la confidentialité, l’objectivité, les conflits d’intérêts, le respect des délais et la préparation des rapports d’évaluation sont présentées dans les <a href="reviewer-guidelines/" target="_blank" rel="noopener noreferrer" class="text-[#1e3a5f] underline">directives pour les évaluateurs</a>. Les évaluateurs sont encouragés à consulter ces directives avant d’accepter ou de réaliser une évaluation.'
        },
        {
          title: 'Confidentialité et conflits d’intérêts',
          text:
            'Le processus d’évaluation repose sur la confidentialité et l’intégrité professionnelle. Les évaluateurs ne doivent ni divulguer, ni diffuser, ni utiliser tout ou partie d’un manuscrit non publié à des fins personnelles ou professionnelles. Tout intérêt concurrent, qu’il soit financier, institutionnel, collaboratif, intellectuel ou personnel, doit être signalé aux éditeurs.'
        },
        {
          title: 'Décisions éditoriales',
          text:
            'Les décisions éditoriales sont prises par les éditeurs responsables de la revue après examen des rapports d’évaluation et appréciation éditoriale. Les décisions possibles incluent l’acceptation, la demande de révisions mineures, la demande de révisions majeures ou le rejet. Les recommandations des évaluateurs éclairent la décision éditoriale sans la déterminer automatiquement.'
        },
        {
          title: 'Délais d’évaluation',
          text:
            'Les délais d’évaluation peuvent varier en fonction de la disponibilité des évaluateurs, de la nature du manuscrit et du nombre de cycles de révision nécessaires. En général, le premier cycle d’évaluation peut prendre de plusieurs semaines à quelques mois. Lorsqu’une révision est demandée, un délai supplémentaire peut être nécessaire avant qu’une décision finale ne soit prise.'
        },
        {
          title: 'Recours',
          text:
            'Les auteurs qui souhaitent contester une décision éditoriale peuvent soumettre un recours motivé expliquant les raisons de la demande de réexamen. Les recours seront examinés conformément aux politiques éditoriales et éthiques de la revue. Les préoccupations relatives à l’intégrité du processus d’évaluation ou à l’éthique de publication peuvent également être adressées à <a href="mailto:ethics@b-institute.org" class="text-[#1e3a5f] underline">ethics@b-institute.org</a>.'
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

export default PeerReviewPolicy;
