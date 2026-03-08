import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';

const AdvertisingPolicy = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Advertising and Marketing Policy',
      metaDescription: 'Advertising and marketing policy of BIRDs Press.',
      intro:
        'BIRDs Press is committed to maintaining the independence and integrity of scholarly publishing.',
      sections: [
        {
          title: 'Advertising',
          text:
            'BIRDs Press currently does not host commercial advertising on its publishing platforms or journal websites.'
        },
        {
          title: 'Editorial Independence',
          text:
            'Editorial decisions are made solely on the basis of scholarly merit and the peer-review process. Advertising or commercial considerations do not influence editorial decisions.'
        },
        {
          title: 'Future Advertising',
          text:
            'If advertising is introduced in the future, it will be clearly distinguished from editorial content and will not influence editorial policies, peer review, or publication decisions.'
        },
        {
          title: 'Marketing and Promotion',
          text:
            'Promotion of journals and published articles may occur through academic networks, indexing services, conferences, or scholarly communication channels. Such activities aim to increase the visibility and dissemination of published research.'
        }
      ]
    },

    fr: {
      title: 'Politique de publicité et de promotion',
      metaDescription: 'Politique de publicité et de promotion de BIRDs Press.',
      intro:
        'BIRDs Press s’engage à préserver l’indépendance et l’intégrité de la publication scientifique.',
      sections: [
        {
          title: 'Publicité',
          text:
            'BIRDs Press n’héberge actuellement aucune publicité commerciale sur ses plateformes de publication ou sur les sites de ses revues.'
        },
        {
          title: 'Indépendance éditoriale',
          text:
            'Les décisions éditoriales sont prises uniquement sur la base de la qualité scientifique et du processus d’évaluation par les pairs. Les considérations commerciales ou publicitaires n’influencent pas les décisions éditoriales.'
        },
        {
          title: 'Publicité future',
          text:
            'Si de la publicité devait être introduite à l’avenir, elle serait clairement distinguée du contenu éditorial et n’aurait aucune influence sur les politiques éditoriales, le processus d’évaluation ou les décisions de publication.'
        },
        {
          title: 'Promotion et diffusion',
          text:
            'La promotion des revues et des articles publiés peut se faire à travers les réseaux académiques, les services d’indexation, les conférences ou d’autres canaux de communication scientifique afin d’accroître la visibilité des travaux publiés.'
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
              <div key={index} className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvertisingPolicy;