
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const JournalsPage = () => {
  const { language, t } = useLanguage();

  const content = {
    en: {
      title: 'Our Journals',
      metaDescription: 'Browse the journals published by Bamako Institute Press.',
      journals: [
        {
          id: 'rasp',
          title: 'RASP - Revue Africaine de Sciences Sociales et de la Sante Publique',
          //image: 'https://images.unsplash.com/photo-1687530449901-df6e7d72e07c',
          image: '/assets/images/africa.png',
          aims: 'An international, bilingual (English/French), double-blind peer-reviewed open access journal Created in January 2010 by a multidisciplinary team of African and European Sociologists, Anthropologists, Doctors, Pharmacists, Psychologists and Psychoanalysts, the RASP is a Pan-African open access journal. ',
          issn: '1987-071X',
          eissn: '1987-1023',
          frequency: 'Continuous publication (2 issues per year)',
          indexing: '[To be confirmed - under review for major databases]',
          website: 'https://revue-rasp.org'
        },
        {
          id: 'ajdi',
          title: 'AJDI - African Journal for Development Informatics',
          //image: 'https://images.unsplash.com/photo-1687530449901-df6e7d72e07c',
          image: '/assets/images/ajdi.png',
          aims: 'A multidisciplinary, open access journal that publishes original research articles and practices focusing on applying information systems in socio-economic development in the developing world.',
          issn: '1987-1236',
          eissn: '[To be confirmed]',
          frequency: 'Continuous publication (2 issues per year)',
          indexing: '[To be confirmed - application in progress]',
          website: 'https://press.b-institute.org/ajdi'
        }
      ]
    },
    fr: {
      title: 'Nos Revues',
      metaDescription: 'Parcourez les revues publiées par la Presse de l\'Institut de Bamako.',
      journals: [
        {
          id: 'rasp',
          title: 'RASP - Revue Africaine de Sciences Politiques',
          image: '/assets/images/africa.png',
          aims: 'Une revue internationale, bilingue (anglais/français), à comité de lecture en double aveugle et en accès libre dédiée à l\'avancement de la recherche en sciences politiques avec un accent sur les perspectives africaines et les études comparatives mondiales.',
          issn: '1987-071X',
          eissn: '1987-1023',
          frequency: 'Publication continue (2 numéros par an)',
          indexing: '[À confirmer - en cours d\'examen pour les principales bases de données]',
          website: 'https://revue-rasp.org/'
        },
        {
          id: 'ajdi',
          title: 'AJDI - African Journal of Development Issues',
          image: '/assets/images/ajdi.png',
          aims: 'Une revue multidisciplinaire en libre accès qui publie des articles de recherche originaux et des pratiques axées sur l\'application des systèmes dinformation au développement socio-économique dans les pays en développement.',
          issn: '1987-1236',
          eissn: '[À confirmer]',
          frequency: 'Publication continue (2 numéros par an)',
          indexing: '[À confirmer - en cours d\'examen pour les principales bases de données]',
          website: 'https://press.b-institute.org/ajdi'
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">{c.title}</h1>

          <div className="space-y-12">
            {c.journals.map((journal) => (
              <div key={journal.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={journal.image} 
                      alt={journal.title}
                      className="w-full h-64 md:h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">{journal.title}</h2>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {language === 'en' ? 'Aims & Scope' : 'Objectifs et Portée'}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{journal.aims}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900">ISSN: </span>
                        <span className="text-gray-600">{journal.issn}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">e-ISSN: </span>
                        <span className="text-gray-600">{journal.eissn}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">
                          {language === 'en' ? 'Frequency: ' : 'Fréquence: '}
                        </span>
                        <span className="text-gray-600">{journal.frequency}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">
                          {language === 'en' ? 'Indexing: ' : 'Indexation: '}
                        </span>
                        <span className="text-gray-600">{journal.indexing}</span>
                      </div>
                    </div>

                    <Button 
                      asChild 
                      className="bg-[#1e3a5f] hover:bg-[#2a4a75]"
                    >
                      <a href={journal.website} target="_blank" rel="noopener noreferrer">
                        {t('journals.visit')}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JournalsPage;
