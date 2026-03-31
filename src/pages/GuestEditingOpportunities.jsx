import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Seo from '@/components/Seo';

const GuestEditingOpportunities = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Guest Editing Opportunities',
      metaDescription:
        'Information for researchers interested in proposing thematic issues or collections.',
      intro:
        'BIRDs Press welcomes expressions of interest from researchers who wish to contribute to its journals as guest editors.',
      sections: [
        {
          title: 'Scope',
          text:
            'Guest editors may propose thematic collections or special issues aligned with the scope of a journal.'
        },
        {
          title: 'Proposal expectations',
          text:
            'Proposals should demonstrate academic relevance, coherence, and the ability to attract quality contributions.'
        },
        {
          title: 'Role',
          text:
            'Guest editors may help define the theme, identify contributors, and collaborate with the editorial team. They are expected to follow the journal’s standards of quality, integrity, and transparency.'
        },
        {
          title: 'Editorial oversight',
          text:
            'All submissions are handled according to standard editorial and peer review processes. Final publication decisions remain with the journal editors.'
        },
        {
          title: 'Expression of interest',
          text: 'Researchers may contact ',
          linkLabel: 'infos@b-institute.org',
          linkHref: 'mailto:infos@b-institute.org',
          suffix: ' with a short concept note describing the proposed theme and its relevance.'
        }
      ],
      closing: 'Proposals are considered based on their scholarly value and feasibility.'
    },
    fr: {
      title: 'Opportunités d’édition invitée',
      metaDescription:
        'Informations pour les chercheurs souhaitant proposer des dossiers thématiques.',
      intro:
        'BIRDs Press accueille les manifestations d’intérêt de chercheurs souhaitant contribuer en tant qu’éditeurs invités.',
      sections: [
        {
          title: 'Champ',
          text:
            'Les éditeurs invités peuvent proposer des dossiers thématiques ou numéros spéciaux en lien avec la revue.'
        },
        {
          title: 'Attentes',
          text:
            'Les propositions doivent démontrer leur pertinence scientifique, leur cohérence et leur capacité à attirer des contributions de qualité.'
        },
        {
          title: 'Rôle',
          text:
            'Les éditeurs invités peuvent définir le thème, identifier des contributeurs et collaborer avec l’équipe éditoriale. Ils doivent respecter les standards de qualité et d’intégrité.'
        },
        {
          title: 'Supervision éditoriale',
          text:
            'Toutes les soumissions suivent les procédures standard d’évaluation. Les décisions finales relèvent des éditeurs de la revue.'
        },
        {
          title: 'Manifestation d’intérêt',
          text: 'Les chercheurs peuvent contacter ',
          linkLabel: 'infos@b-institute.org',
          linkHref: 'mailto:infos@b-institute.org',
          suffix: ' avec une note conceptuelle.'
        }
      ],
      closing: 'Les propositions sont évaluées selon leur pertinence et leur faisabilité.'
    }
  };

  const c = content[language];

  return (
    <>
      <Seo title={c.title} description={c.metaDescription} />

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{c.title}</h1>

          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">{c.intro}</p>

            <div className="space-y-8">
              {c.sections.map((section, index) => (
                <section key={index}>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">{section.title}</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {section.text}
                    {section.linkHref ? (
                      <>
                        <a href={section.linkHref} className="text-[#1e3a5f] underline">
                          {section.linkLabel}
                        </a>
                        {section.suffix}
                      </>
                    ) : null}
                  </p>
                </section>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a75] rounded-lg shadow-md p-8 text-white mt-8">
            <p className="leading-relaxed">{c.closing}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestEditingOpportunities;
