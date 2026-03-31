import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Seo from '@/components/Seo';

const JoinEditorialBoards = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Join Our Editorial Boards',
      metaDescription:
        'Information for researchers interested in contributing to editorial boards at BIRDs Press.',
      intro:
        'BIRDs Press welcomes expressions of interest from researchers who wish to contribute to the development and quality of its journals through editorial board service.',
      sections: [
        {
          title: 'Role of editorial boards',
          text:
            'Editorial boards play an important role in supporting the academic quality, credibility, and development of journals. Their involvement contributes to maintaining standards and ensuring relevance within the field.'
        },
        {
          title: 'Responsibilities',
          text:
            'Editorial board members may contribute by advising on journal development, supporting editorial quality, encouraging submissions, and, where appropriate, contributing to peer review or recommending reviewers.'
        },
        {
          title: 'Profile',
          text:
            'BIRDs Press welcomes interest from researchers with relevant expertise, including those with experience in publishing, peer review, or editorial work. Diversity in geography, institution, and perspective is encouraged.'
        },
        {
          title: 'Expression of interest',
          text:
            'Researchers interested in contributing are invited to contact ',
          linkLabel: 'infos@b-institute.org',
          linkHref: 'mailto:infos@b-institute.org',
          suffix: ' with a short message and a recent academic profile or CV.'
        }
      ],
      closing:
        'Appointments are made according to the needs of individual journals and in line with the publisher’s commitment to academic quality and integrity.'
    },
    fr: {
      title: 'Rejoindre nos comités éditoriaux',
      metaDescription:
        'Informations pour les chercheurs souhaitant contribuer aux comités éditoriaux des revues de BIRDs Press.',
      intro:
        'BIRDs Press accueille les manifestations d’intérêt de chercheurs souhaitant contribuer au développement et à la qualité de ses revues à travers une participation aux comités éditoriaux.',
      sections: [
        {
          title: 'Rôle des comités éditoriaux',
          text:
            'Les comités éditoriaux jouent un rôle essentiel dans la qualité scientifique, la crédibilité et le développement des revues.'
        },
        {
          title: 'Responsabilités',
          text:
            'Les membres peuvent contribuer en apportant des conseils éditoriaux, en soutenant la qualité scientifique, en encourageant des soumissions pertinentes et, le cas échéant, en participant à l’évaluation ou en suggérant des évaluateurs.'
        },
        {
          title: 'Profil',
          text:
            'BIRDs Press accueille les chercheurs disposant d’une expertise pertinente, y compris une expérience en publication scientifique ou en évaluation par les pairs. La diversité est encouragée.'
        },
        {
          title: 'Manifestation d’intérêt',
          text: 'Les chercheurs intéressés peuvent contacter ',
          linkLabel: 'infos@b-institute.org',
          linkHref: 'mailto:infos@b-institute.org',
          suffix: ' avec une courte présentation et un CV.'
        }
      ],
      closing:
        'Les nominations sont effectuées selon les besoins des revues et dans le respect des exigences de qualité et d’intégrité scientifique.'
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

export default JoinEditorialBoards;
