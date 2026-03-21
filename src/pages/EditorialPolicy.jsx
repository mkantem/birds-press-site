import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';

const EditorialPolicy = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Editorial Policy',
      metaDescription: 'Editorial policies governing journals published by BIRDs Press.',
      intro:
        'BIRDs Press is committed to maintaining transparent, fair, and rigorous editorial practices across the journals it hosts. This editorial policy outlines the general principles guiding editorial governance, manuscript evaluation, and publication integrity while respecting the editorial independence of each journal.',
      sections: [
        {
          title: 'Editorial Independence',
          text:
            'Editorial decisions are made independently by the editorial leadership of each journal hosted by BIRDs Press. Decisions regarding acceptance, revision, or rejection of manuscripts are based solely on scholarly merit, originality, relevance to the journal, and methodological soundness. The publisher does not interfere in editorial decision-making.'
        },
        {
          title: 'Journal Scope and Suitability',
          text:
            'Each journal maintains clearly defined aims and scope describing the subject areas and types of scholarship it publishes. Submitted manuscripts are assessed for their relevance to the journal’s scope, their scholarly quality, clarity of presentation, and compliance with submission requirements.'
        },
        {
          title: 'Initial Editorial Screening',
          text:
            'All submitted manuscripts may undergo an initial editorial assessment before being considered for further evaluation. During this stage, manuscripts may be returned to authors for technical corrections, declined if they fall outside the scope of the journal, or rejected without further evaluation if they do not meet minimum scholarly, ethical, or editorial standards.'
        },
        {
          title: 'Evaluation of Submissions',
          text:
            'Manuscripts that pass the initial editorial screening may proceed to peer review in accordance with the peer review policy of the journal concerned. Final editorial decisions are made by the responsible editors of the journal after consideration of reviewer input and editorial judgment.'
        },
        {
          title: 'Editors and Editorial Boards',
          text:
            'Each journal is supported by its own editorial leadership and editorial board composed of recognized scholars. Editors oversee the editorial process, ensure fair and impartial manuscript handling, and maintain the scholarly quality of the journal. Editorial board members contribute expertise, guidance, and support to the development of the journal’s academic direction.'
        },
        {
          title: 'Conflicts of Interest',
          text:
            'Editors, editorial board members, guest editors, and reviewers must disclose any conflicts of interest that could influence the handling of a manuscript. When a conflict exists, the manuscript must be reassigned or handled through an alternative editorial arrangement to ensure fairness and transparency.'
        },
        {
          title: 'Special Issues',
          text:
            'Where journals hosted by BIRDs Press accept proposals for special issues, such proposals are evaluated on the basis of scholarly merit, relevance, and editorial feasibility. Guest editors are expected to follow the same editorial and ethical standards that apply to regular issues. Final responsibility for publication decisions remains with the journal’s editorial leadership.'
        },
        {
          title: 'Corrections and Retractions',
          text:
            'Journals published by BIRDs Press are expected to preserve the integrity of the scholarly record. Where necessary, corrections, clarifications, expressions of concern, or retractions may be issued in a transparent manner, depending on the seriousness of the issue and in accordance with recognised publication ethics standards.'
        },
        {
          title: 'Article Withdrawal',
          text:
            'In exceptional circumstances, an article may be withdrawn when removal of the full text is necessary to protect the integrity of the scholarly record or to address serious legal, ethical, or publication concerns. In such cases, the original content will be removed and replaced with a clearly marked withdrawal notice stating that the article has been withdrawn and linking readers to this policy. To preserve the continuity of the published record and avoid altering pagination, the replacement page will retain the article\'s original page numbers, and those page numbers will be displayed on the notice itself. If a withdrawal request is made after the final full version of the paper has been published, and the author is found to be at fault, the authors may be required to pay a penalty fee equivalent to half of the APC of the corresponding journal, where an APC applies.'
        },
        {
          title: 'Complaints and Appeals',
          text:
            'Authors or other stakeholders who are not satisfied with the editorial process or outcome may submit a detailed complaint or appeal to <a href="mailto:ethics@b-institute.org" class="text-[#1e3a5f] underline">ethics@b-institute.org</a>. All concerns will be thoroughly investigated in accordance with relevant <a href="https://publicationethics.org/guidance/Flowcharts" target="_blank" rel="noopener noreferrer" class="text-[#1e3a5f] underline">COPE flowcharts and guidelines</a>.'
        }
      ]
    },

    fr: {
      title: 'Politique éditoriale',
      metaDescription: 'Politiques éditoriales régissant les revues publiées par BIRDs Press.',
      intro:
        'BIRDs Press s’engage à maintenir des pratiques éditoriales transparentes, équitables et rigoureuses pour les revues qu’elle héberge. Cette politique éditoriale décrit les principes généraux qui encadrent la gouvernance éditoriale, l’évaluation des manuscrits et l’intégrité de la publication scientifique, tout en respectant l’indépendance éditoriale de chaque revue.',
      sections: [
        {
          title: 'Indépendance éditoriale',
          text:
            'Les décisions éditoriales sont prises de manière indépendante par la direction éditoriale de chaque revue hébergée par BIRDs Press. Les décisions d’acceptation, de révision ou de rejet reposent uniquement sur la qualité scientifique, l’originalité, la pertinence par rapport à la revue et la rigueur méthodologique. Le publisher n’intervient pas dans les décisions éditoriales.'
        },
        {
          title: 'Champ de la revue et adéquation des soumissions',
          text:
            'Chaque revue dispose d’objectifs et d’un champ thématique clairement définis décrivant les domaines et types de contributions qu’elle publie. Les manuscrits soumis sont évalués en fonction de leur pertinence par rapport au champ de la revue, de leur qualité scientifique, de leur clarté et de leur conformité aux exigences de soumission.'
        },
        {
          title: 'Examen éditorial initial',
          text:
            'Tous les manuscrits soumis peuvent faire l’objet d’une première évaluation éditoriale avant toute étape d’évaluation supplémentaire. À ce stade, les manuscrits peuvent être retournés aux auteurs pour correction technique, refusés s’ils ne correspondent pas au champ de la revue, ou rejetés sans évaluation supplémentaire s’ils ne répondent pas aux standards scientifiques, éthiques ou éditoriaux minimaux.'
        },
        {
          title: 'Évaluation des soumissions',
          text:
            'Les manuscrits qui franchissent l’examen éditorial initial peuvent être soumis à l’évaluation par les pairs conformément à la politique d’évaluation de la revue concernée. Les décisions éditoriales finales sont prises par les éditeurs responsables de la revue après examen des avis d’évaluation et appréciation éditoriale.'
        },
        {
          title: 'Éditeurs et comités éditoriaux',
          text:
            'Chaque revue dispose de sa propre direction éditoriale et de son propre comité éditorial composé de chercheurs reconnus. Les éditeurs supervisent le processus éditorial, veillent à un traitement équitable des manuscrits et maintiennent la qualité scientifique de la revue. Les membres du comité éditorial contribuent à l’orientation scientifique et au développement académique de la revue.'
        },
        {
          title: 'Conflits d’intérêts',
          text:
            'Les éditeurs, les membres des comités éditoriaux, les éditeurs invités et les évaluateurs doivent déclarer tout conflit d’intérêts susceptible d’influencer le traitement d’un manuscrit. Lorsqu’un conflit existe, le manuscrit doit être confié à un autre éditeur ou traité selon une procédure alternative afin de préserver l’équité et la transparence.'
        },
        {
          title: 'Numéros spéciaux',
          text:
            'Lorsque les revues hébergées par BIRDs Press acceptent des propositions de numéros spéciaux, celles-ci sont évaluées en fonction de leur mérite scientifique, de leur pertinence et de leur faisabilité éditoriale. Les éditeurs invités doivent respecter les mêmes standards éditoriaux et éthiques que pour les numéros ordinaires. La responsabilité finale des décisions de publication appartient à la direction éditoriale de la revue.'
        },
        {
          title: 'Corrections et rétractations',
          text:
            'Les revues publiées par BIRDs Press doivent préserver l’intégrité du dossier scientifique publié. Lorsque nécessaire, des corrections, clarifications, expressions de préoccupation ou rétractations peuvent être publiées de manière transparente, selon la gravité de la situation et conformément aux standards reconnus en matière d’éthique de publication.'
        },
        {
          title: 'Retrait d article',
          text:
            'Dans des circonstances exceptionnelles, un article peut etre retire lorsque la suppression du texte integral est necessaire pour proteger l integrite du dossier scientifique ou pour repondre a des problemes juridiques, ethiques ou editoriaux graves. Dans ce cas, le contenu original sera retire et remplace par un avis clairement identifiable indiquant que l article a ete retire, avec un lien vers la presente politique. Afin de preserver la continuite du dossier publie et de ne pas modifier la pagination, la page de remplacement conservera les numeros de pages d origine de l article, et ces numeros figureront explicitement sur l avis. Si une demande de retrait intervient apres la publication de la version finale complete de l article, et que la responsabilite de l auteur est etablie, les auteurs peuvent etre tenus de payer une penalite equivalente a la moitie des APC de la revue concernee, lorsqu un APC est applicable.'
        },
        {
          title: 'Plaintes et recours',
          text:
            'Les auteurs ou toute autre partie prenante qui ne sont pas satisfaits du processus éditorial ou de son issue peuvent soumettre une plainte ou un recours détaillé à <a href="mailto:ethics@b-institute.org" class="text-[#1e3a5f] underline">ethics@b-institute.org</a>. Toutes les préoccupations seront examinées attentivement conformément aux <a href="https://publicationethics.org/guidance/Flowcharts" target="_blank" rel="noopener noreferrer" class="text-[#1e3a5f] underline">organigrammes et recommandations du COPE</a>.'
        }
      ]
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

export default EditorialPolicy;
