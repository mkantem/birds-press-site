import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';

const EthicalPolicies = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Ethical Policies',
      metaDescription: 'Ethical policies and publication ethics standards of BIRDs Press.',
      intro: `BIRDs Press is committed to maintaining high standards of publication ethics and integrity in scholarly publishing. 
Our journals follow internationally recognized principles of fairness, confidentiality, objectivity, transparency, and accountability. 
BIRDs Press supports ethical publishing practices in line with the core principles of the 
<a href="https://publicationethics.org" target="_blank" rel="noopener noreferrer" class="text-[#1e3a5f] underline">Committee on Publication Ethics (COPE)</a>.`,
      sections: [
        {
          title: 'General Principles',
          text: `BIRDs Press promotes ethical scholarly communication and responsible editorial practice across the journals it hosts. 
Publication decisions should be based on scholarly merit, originality, relevance, methodological soundness, and contribution to knowledge. 
Editorial processes must be conducted fairly and without discrimination based on nationality, ethnicity, gender, religion, institutional affiliation, or political views.`
        },
        {
          title: 'Responsibilities of Authors',
          text: `Authors are expected to submit original work that is not under consideration elsewhere and has not been published previously, unless clearly disclosed and justified. 
All sources must be properly cited and data and findings presented honestly. 
All listed authors must have made substantial contributions to the work, approve the final version, and agree to its submission. 
Where relevant, authors should disclose conflicts of interest, funding sources, ethical approval, informed consent, and data availability information in accordance with the policy of the journal concerned. 
Research involving human participants should comply with internationally recognized ethical standards such as the 
<a href="https://www.wma.net/what-we-do/medical-ethics/declaration-of-helsinki/" target="_blank" rel="noopener noreferrer" class="text-[#1e3a5f] underline">Declaration of Helsinki</a>.`
        },
        {
          title: 'Responsibilities of Reviewers',
          text: `Reviewers assist editors in making publication decisions. They should provide objective, constructive, and timely evaluations. 
Reviewers must decline invitations if they lack appropriate expertise or if a conflict of interest exists. 
Manuscripts received for review must be treated as confidential documents and must not be shared or used for personal advantage.`
        },
        {
          title: 'Responsibilities of Editors',
          text: `Editors manage the peer review process and ensure fair and independent editorial decisions. 
They must evaluate submissions solely on academic merit and ensure confidentiality throughout the review process. 
Editors should avoid conflicts of interest and should not handle manuscripts in which they have a personal, institutional, or professional interest.`
        },
        {
          title: 'Responsibilities of the Publisher',
          text: `BIRDs Press provides the publishing infrastructure, digital platform, visibility support, and long-term dissemination framework for the journals it hosts. 
The publisher supports ethical publishing standards and good editorial practice but does not interfere with journal-level editorial decisions or peer review outcomes. 
This separation helps preserve editorial independence and scholarly credibility.`
        },
        {
          title: 'Plagiarism and Publication Misconduct',
          text: `BIRDs Press and its journals do not tolerate plagiarism, self-plagiarism, data fabrication, data falsification, duplicate publication, simultaneous submission, citation manipulation, ghost authorship, or gift authorship. 
Journals may use similarity checking tools and editorial review to detect potential problems. 
When misconduct is suspected, editors may investigate the case and follow relevant guidance such as the 
<a href="https://publicationethics.org/guidance/Flowcharts" target="_blank" rel="noopener noreferrer" class="text-[#1e3a5f] underline">COPE flowcharts</a>.`
        },
        {
          title: 'Corrections and Retractions',
          text: `If significant errors, misleading information, or ethical breaches are discovered after publication, journals may issue corrections, clarifications, expressions of concern, or retractions depending on the seriousness of the case. 
Such actions are taken transparently and in accordance with recognized publication ethics standards including the 
<a href="https://publicationethics.org/retraction-guidelines" target="_blank" rel="noopener noreferrer" class="text-[#1e3a5f] underline">COPE Retraction Guidelines</a>.`
        },
        {
          title: 'Complaints and Appeals',
          text: `Authors, reviewers, readers, or other stakeholders may raise concerns regarding editorial handling, ethical issues, or publication conduct. 
Complaints and appeals should be submitted in writing with sufficient detail to allow proper examination. 
Such concerns may be sent to the BIRDs Press ethics contact at 
<a href="mailto:ethics@b-institute.org" class="text-[#1e3a5f] underline">ethics@b-institute.org</a>. 
All concerns will be thoroughly investigated in accordance with 
<a href="https://publicationethics.org/guidance/Guidelines" target="_blank" rel="noopener noreferrer" class="text-[#1e3a5f] underline">COPE complaints and appeals guidelines</a>.`
        },
        {
          title: 'Other Issues',
          text: `Issues not explicitly covered on this page may be handled according to the policies of the journal concerned and, where appropriate, with reference to relevant 
          <a href="https://publicationethics.org" target="_blank" rel="noopener noreferrer" class="text-[#1e3a5f] underline">COPE</a> guidance and best practices. 
          For general inquiries regarding publication ethics or publisher policies, please contact 
          <a href="mailto:infos@b-institute.org" class="text-[#1e3a5f] underline">infos@b-institute.org</a>.`
        }
      ]
    },

    fr: {
      title: 'Politiques éthiques',
      metaDescription: 'Politiques éthiques et standards de déontologie éditoriale de BIRDs Press.',
      intro: `BIRDs Press s’engage à maintenir des standards élevés d’éthique et d’intégrité dans la publication scientifique. 
Les revues hébergées suivent des principes internationalement reconnus d’équité, de confidentialité, d’objectivité, de transparence et de responsabilité. 
BIRDs Press soutient les bonnes pratiques éditoriales conformément aux principes du 
<a href="https://publicationethics.org" target="_blank" rel="noopener noreferrer" class="text-[#1e3a5f] underline">Committee on Publication Ethics (COPE)</a>.`,
      sections: [
        {
          title: 'Principes généraux',
          text: `BIRDs Press promeut une communication scientifique éthique et des pratiques éditoriales responsables au sein des revues qu’elle héberge. 
Les décisions de publication doivent être fondées sur la qualité scientifique, l’originalité, la pertinence et la contribution à la connaissance. 
Les processus éditoriaux doivent être menés équitablement et sans discrimination.`
        },
        {
          title: 'Responsabilités des auteurs',
          text: `Les auteurs doivent soumettre des travaux originaux qui ne sont pas soumis simultanément ailleurs et qui n’ont pas été publiés auparavant. 
Toutes les sources doivent être correctement citées et les résultats présentés de manière honnête. 
Tous les auteurs mentionnés doivent avoir contribué substantiellement au travail et approuver la version finale du manuscrit. 
Les auteurs doivent déclarer les conflits d’intérêts, les sources de financement et les approbations éthiques lorsque cela est applicable. 
Les recherches impliquant des participants humains doivent respecter les principes de la 
<a href="https://www.wma.net/what-we-do/medical-ethics/declaration-of-helsinki/" target="_blank" rel="noopener noreferrer" class="text-[#1e3a5f] underline">Déclaration d’Helsinki</a>.`
        },
        {
          title: 'Responsabilités des évaluateurs',
          text: `Les évaluateurs fournissent des avis scientifiques indépendants et constructifs pour aider les éditeurs à prendre leurs décisions. 
Ils doivent signaler tout conflit d’intérêts et traiter les manuscrits comme des documents strictement confidentiels.`
        },
        {
          title: 'Responsabilités des éditeurs',
          text: `Les éditeurs sont responsables de la gestion du processus d’évaluation par les pairs et des décisions éditoriales. 
Ils doivent garantir un processus équitable, confidentiel et fondé uniquement sur la qualité scientifique des manuscrits.`
        },
        {
          title: 'Responsabilités du publisher',
          text: `BIRDs Press fournit l’infrastructure de publication, la plateforme numérique et le cadre de diffusion des revues qu’elle héberge. 
Le publisher soutient les bonnes pratiques éthiques mais n’intervient pas dans les décisions éditoriales des revues.`
        },
        {
          title: 'Plagiat et mauvaise conduite scientifique',
          text: `BIRDs Press et ses revues ne tolèrent ni le plagiat, ni l’auto-plagiat, ni la fabrication ou la falsification de données, ni la soumission simultanée ou la publication en double. 
En cas de suspicion, les éditeurs peuvent examiner la situation en suivant les recommandations et les 
<a href="https://publicationethics.org/guidance/Flowcharts" target="_blank" rel="noopener noreferrer" class="text-[#1e3a5f] underline">organigrammes du COPE</a>.`
        },
        {
          title: 'Corrections et rétractations',
          text: `Lorsque des erreurs significatives ou des manquements éthiques sont identifiés après publication, la revue peut publier une correction, une clarification, une expression de préoccupation ou une rétractation conformément aux 
<a href="https://publicationethics.org/retraction-guidelines" target="_blank" rel="noopener noreferrer" class="text-[#1e3a5f] underline">directives de rétractation du COPE</a>.`
        },
        {
          title: 'Plaintes et recours',
          text: `Les auteurs, lecteurs, évaluateurs ou autres parties prenantes peuvent signaler toute préoccupation concernant les processus éditoriaux ou les questions d’éthique de publication. 
          Les plaintes doivent être soumises par écrit avec suffisamment de détails pour permettre leur examen. 
          Ces signalements peuvent être envoyés au point de contact éthique de BIRDs Press à l’adresse 
          <a href="mailto:ethics@b-institute.org" class="text-[#1e3a5f] underline">ethics@b-institute.org</a>. 
          Toutes les préoccupations seront examinées attentivement conformément aux 
          <a href="https://publicationethics.org/guidance/Guidelines" target="_blank" rel="noopener noreferrer" class="text-[#1e3a5f] underline">recommandations du COPE relatives aux plaintes et recours</a>.`
        },
        {
          title: 'Autres questions',
          text: `Les questions qui ne sont pas explicitement couvertes sur cette page peuvent être traitées conformément aux politiques de la revue concernée et aux recommandations du 
          <a href="https://publicationethics.org" target="_blank" rel="noopener noreferrer" class="text-[#1e3a5f] underline">COPE</a>. 
          Pour toute question générale concernant les politiques éditoriales ou éthiques de BIRDs Press, veuillez contacter 
          <a href="mailto:infos@b-institute.org" class="text-[#1e3a5f] underline">infos@b-institute.org</a>.`
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
            <p
              className="text-gray-700 leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: c.intro }}
            />

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

export default EthicalPolicies;
