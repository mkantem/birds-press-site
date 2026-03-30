
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Seo from '@/components/Seo';

const AboutPress = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'About the press',
      metaDescription: 'Learn about Bamako Institute Press, our mission, and our commitment to advancing African scholarship.',
      mission: {
        title: 'Our mission',
        text: 'Bamako Institute Press is dedicated to advancing African scholarship by publishing world-class research that amplifies African voices and perspectives. We are committed to open access publishing, ensuring that knowledge is freely available to all.'
      },
      governance: {
        title: 'Governance structure',
        text: 'The press operates under the guidance of an editorial board comprising leading scholars from across Africa and the global academic community. Our governance structure ensures academic integrity, editorial independence, and adherence to the highest publishing standards.'
      },
      values: {
        title: 'Our values',
        list: [
          'Academic Excellence: We maintain rigorous peer review standards',
          'Open Access: Knowledge should be freely available to all',
          'African Perspectives: We prioritize research that centers African voices',
          'Ethical Publishing: We adhere to international best practices',
          'Innovation: We embrace new technologies and methodologies'
        ]
      }
    },
    fr: {
      title: 'À Propos de la Presse',
      metaDescription: 'Découvrez la Presse de l\'Institut de Bamako, notre mission et notre engagement envers la recherche africaine.',
      mission: {
        title: 'Notre mission',
        text: 'La Presse de l\'Institut de Bamako se consacre à la promotion de la recherche africaine en publiant des recherches de classe mondiale qui amplifient les voix et perspectives africaines. Nous nous engageons pour la publication en libre accès, garantissant que le savoir soit librement accessible à tous.'
      },
      governance: {
        title: 'Structure de gouvernance',
        text: 'La presse fonctionne sous la direction d\'un conseil éditorial composé de chercheurs de premier plan à travers l\'Afrique et la communauté académique mondiale. Notre structure de gouvernance assure l\'intégrité académique, l\'indépendance éditoriale et le respect des normes de publication les plus élevées.'
      },
      values: {
        title: 'Nos valeurs',
        list: [
          'Excellence Académique : Nous maintenons des normes rigoureuses d\'évaluation par les pairs',
          'Accès Libre : Le savoir devrait être librement accessible à tous',
          'Perspectives Africaines : Nous priorisons la recherche qui centre les voix africaines',
          'Publication Éthique : Nous adhérons aux meilleures pratiques internationales',
          'Innovation : Nous adoptons de nouvelles technologies et méthodologies'
        ]
      }
    }
  };

  const c = content[language];

  return (
    <>
      <Seo title={c.title} description={c.metaDescription} />

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{c.title}</h1>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{c.mission.title}</h2>
            <p className="text-gray-700 leading-relaxed">{c.mission.text}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{c.governance.title}</h2>
            <p className="text-gray-700 leading-relaxed">{c.governance.text}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{c.values.title}</h2>
            <ul className="space-y-3">
              {c.values.list.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#1e3a5f] mr-2">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPress;
