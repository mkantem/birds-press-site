import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const SubmissionGuidelines = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Instructions for authors',
      metaDescription:
        'journal-specific submission information and author guidelines for BIRDs Press journals.',
      intro:
        'BIRDs Press hosts multiple journals, each with its own scope and instructions for authors. Before submitting a manuscript, please consult the specific author guidelines of the journal you are targeting and use that journal’s own submission system.',
      noteTitle: 'important note',
      noteText:
        'Requirements concerning manuscript preparation, references, and submission procedures are defined individually by each journal.',
      tableTitle: 'journal submission links',
      columns: {
        journal: 'journal',
        guidelines: 'author guidelines',
        submission: 'submission portal',
      },
      journals: [
        {
          name: 'RASP',
          guidelinesLabel: 'view guidelines',
          submissionLabel: 'submit manuscript',
          guidelinesUrl: 'https://revue-rasp.org/rasp/about/submissions',
          submissionUrl: 'https://revue-rasp.org/rasp/information/authors',
        },
        {
          name: 'AJDI',
          guidelinesLabel: 'view guidelines',
          submissionLabel: 'submit manuscript',
          guidelinesUrl: 'https://press.b-institute.org/ajdi/about/submissions#authorGuidelines',
          submissionUrl: 'https://press.b-institute.org/ajdi/information/authors',
        },
      ],
      footerNote:
        'Editorial decisions are made independently by each journal’s editorial board.',
    },
    fr: {
      title: 'Instructions aux auteurs',
      metaDescription:
        'informations de soumission et consignes spécifiques aux revues publiées par BIRDs Press.',
      intro:
        'BIRDs Press héberge plusieurs revues, chacune ayant son propre champ thématique, et ses instructions aux auteurs. Avant toute soumission, veuillez consulter les consignes spécifiques de la revue visée et utiliser son propre système de soumission.',
      noteTitle: 'note importante',
      noteText:
        'Les exigences relatives à la préparation des manuscrits, aux références, et aux procédures de soumission sont définies individuellement par chaque revue.',
      tableTitle: 'liens de soumission par revue',
      columns: {
        journal: 'revue',
        guidelines: 'consignes aux auteurs',
        submission: 'portail de soumission',
      },
      journals: [
        {
          name: 'RASP',
          guidelinesLabel: 'voir les consignes',
          submissionLabel: 'soumettre un manuscrit',
          guidelinesUrl: 'https://revue-rasp.org/rasp/about/submissions',
          submissionUrl: 'https://revue-rasp.org/rasp/information/authors',
        },
        {
          name: 'AJDI',
          guidelinesLabel: 'voir les consignes',
          submissionLabel: 'soumettre un manuscrit',
          guidelinesUrl: 'https://press.b-institute.org/ajdi/about/submissions#authorGuidelines',
          submissionUrl: 'https://press.b-institute.org/ajdi/information/authors',
        },
      ],
      footerNote:
        'Les décisions éditoriales sont prises de manière indépendante par le comité éditorial de chaque revue.',
    },
  };

  const c = content[language];

  return (
    <>
      <Helmet>
        <title>{c.title} - BIRDs Press</title>
        <meta name="description" content={c.metaDescription} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{c.title}</h1>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">{c.intro}</p>

            <div className="border-l-4 border-[#1e3a5f] bg-gray-50 p-4 rounded-md">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">{c.noteTitle}</h2>
              <p className="text-gray-700 leading-relaxed">{c.noteText}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{c.tableTitle}</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      {c.columns.journal}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      {c.columns.guidelines}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      {c.columns.submission}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {c.journals.map((journal, index) => (
                    <tr key={index} className="border-t border-gray-200">
                      <td className="px-6 py-4 text-gray-900 font-medium">{journal.name}</td>
                      <td className="px-6 py-4">
                        <Button asChild variant="outline" className="w-full md:w-auto">
                          <a
                            href={journal.guidelinesUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {journal.guidelinesLabel}
                          </a>
                        </Button>
                      </td>
                      <td className="px-6 py-4">
                        <Button asChild className="w-full md:w-auto bg-[#1e3a5f] hover:bg-[#2a4a75]">
                          <a
                            href={journal.submissionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {journal.submissionLabel}
                          </a>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mt-8">{c.footerNote}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmissionGuidelines;