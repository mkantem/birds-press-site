import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail } from 'lucide-react';

const People = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'People',
      metaDescription: 'Meet the team behind BIRDs Press (Bamako Institute for Research and Development Studies Press).',
      intro: 'BIRDs Press is supported by a team responsible for coordinating publishing operations and maintaining the digital infrastructure that hosts our journals and scholarly outputs.',
      governanceNote:
        'Each journal published by BIRDs Press maintains its own independent editorial board responsible for peer review and editorial decisions. The BIRDs Press team provides publishing infrastructure, coordination, and technical support for the journals hosted on the platform.',
      team: [
        {
          role: 'General Director',
          name: '[To be announced]',
          email: 'director@b-institute.org',
          bio: 'The General Director provides strategic oversight of BIRDs Press and ensures alignment with the mission of the Bamako Institute for Research and Development Studies.'
        },
        {
          role: 'Publishing Coordinator',
          name: '[To be announced]',
          email: 'editor@b-institute.org',
          bio: 'The Publishing Coordinator oversees day-to-day publishing operations, coordinates workflows across journals, and liaises with editorial teams.'
        },
        {
          role: 'Technical Editor',
          name: '[To be announced]',
          email: 'tech@b-institute.org',
          bio: 'The Technical Editor manages the digital publishing infrastructure, including the journal platform, metadata integrity, and integrations with indexing and archiving services.'
        }
      ]
    },
    fr: {
      title: 'Personnel',
      metaDescription: 'Rencontrez l’équipe de BIRDs Press (Bamako Institute for Research and Development Studies Press).',
      intro: 'BIRDs Press est soutenue par une équipe chargée de coordonner les activités de publication et de maintenir l’infrastructure numérique qui héberge les revues et productions scientifiques.',
      governanceNote:
        'Chaque revue publiée par BIRDs Press dispose de son propre comité éditorial indépendant responsable du processus d’évaluation par les pairs et des décisions éditoriales. L’équipe de BIRDs Press assure l’infrastructure de publication, la coordination et le support technique pour les revues hébergées sur la plateforme.',
      team: [
        {
          role: 'Directeur Général',
          name: '[À annoncer]',
          email: 'director@b-institute.org',
          bio: 'Le Directeur Général assure la supervision stratégique de BIRDs Press et veille à l’alignement de ses activités avec la mission du Bamako Institute for Research and Development Studies.'
        },
        {
          role: 'Coordinateur de Publication',
          name: '[À annoncer]',
          email: 'editor@b-institute.org',
          bio: 'Le Coordinateur de Publication supervise les opérations quotidiennes de publication, coordonne les flux de travail entre les revues et assure la liaison avec les équipes éditoriales.'
        },
        {
          role: 'Éditeur Technique',
          name: '[À annoncer]',
          email: 'tech@b-institute.org',
          bio: 'L’Éditeur Technique gère l’infrastructure numérique de publication, y compris la plateforme des revues, l’intégrité des métadonnées et l’intégration avec les services d’indexation.'
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

          <p className="text-lg text-gray-700 leading-relaxed mb-12">{c.intro}</p>

          <div className="space-y-8">
            {c.team.map((person, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">{person.role}</h2>
                <h3 className="text-xl text-gray-700 mb-4">{person.name}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{person.bio}</p>
                <a 
                  href={`mailto:${person.email}`}
                  className="flex items-center gap-2 text-[#1e3a5f] hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  {person.email}
                </a>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed mt-12">
            {c.governanceNote}
          </p>
        </div>
      </div>
    </>
  );
};

export default People;