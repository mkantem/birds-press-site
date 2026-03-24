
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';

const History = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'History',
      metaDescription: 'The history and development of Bamako Institute Press.',
      intro: 'Bamako Institute Press was founded in 2018 with a vision to advance African scholarship and amplify African voices in global academic discourse.',
      sections: [
        {
          title: 'Our founding',
          text: 'Established to address the underrepresentation of African research in global academic publishing, Bamako Institute Press was created by scholars committed to excellence, accessibility, and the advancement of knowledge produced on the African continent and by African researchers worldwide.'
        },
        {
          title: 'Growth and development',
          text: 'Since our founding, we have grown from a single journal to a multi-journal press, expanding our reach across disciplines while maintaining our commitment to rigorous peer review, open access, and African perspectives in scholarship.'
        },
        {
          title: 'Our impact',
          text: 'Today, Bamako Institute Press publishes research that reaches scholars, policymakers, and practitioners across Africa and around the world. We remain committed to our founding principles of academic excellence, accessibility, and the advancement of African scholarship.'
        },
        {
          title: 'Looking forward',
          text: 'As we continue to grow, we remain focused on our mission: to provide a platform for high-quality African research, to support African scholars in sharing their work with global audiences, and to contribute to the development of knowledge that serves African communities and the world.'
        }
      ]
    },
    fr: {
      title: 'Histoire',
      metaDescription: 'L\'histoire et le développement de la Presse de l\'Institut de Bamako.',
      intro: 'La Presse de l\'Institut de Bamako a été fondée en 2018 avec une vision de promouvoir la recherche africaine et d\'amplifier les voix africaines dans le discours académique mondial.',
      sections: [
        {
          title: 'Notre fondation',
          text: 'Établie pour remédier à la sous-représentation de la recherche africaine dans la publication académique mondiale, la Presse de l\'Institut de Bamako a été créée par des chercheurs engagés pour l\'excellence, l\'accessibilité et l\'avancement des connaissances produites sur le continent africain et par des chercheurs africains du monde entier.'
        },
        {
          title: 'Croissance et développement',
          text: 'Depuis notre fondation, nous sommes passés d\'une seule revue à une presse multi-revues, élargissant notre portée à travers les disciplines tout en maintenant notre engagement envers l\'évaluation rigoureuse par les pairs, l\'accès libre et les perspectives africaines dans la recherche.'
        },
        {
          title: 'Notre impact',
          text: 'Aujourd\'hui, la Presse de l\'Institut de Bamako publie des recherches qui atteignent les chercheurs, les décideurs et les praticiens à travers l\'Afrique et dans le monde entier. Nous restons fidèles à nos principes fondateurs d\'excellence académique, d\'accessibilité et de promotion de la recherche africaine.'
        },
        {
          title: 'Vers l\'avenir',
          text: 'Alors que nous continuons à grandir, nous restons concentrés sur notre mission : fournir une plateforme pour la recherche africaine de haute qualité, soutenir les chercheurs africains dans le partage de leur travail avec un public mondial, et contribuer au développement de connaissances qui servent les communautés africaines et le monde.'
        }
      ]
    }
  };

  const c = content[language];

  return (
    <>
      <Helmet>
        <title>{c.title} - Bamako Institute</title>
        <meta name="description" content={c.metaDescription} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{c.title}</h1>

          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">{c.intro}</p>

            {c.sections.map((section, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
