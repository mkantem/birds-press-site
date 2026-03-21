
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
          indexingLabel: 'Included in the following databases and indexing services, listed here by general relevance in scholarly communication:',
          indexingList: [
            {
              name: 'Crossref',
              url: 'https://search.crossref.org/search/works?q=Revue+Africaine+des+Sciences+Sociales+et+de+la+Sante+Publique&from_ui=yes'
            },
            {
              name: 'EBSCO',
              url: 'https://openurl.ebsco.com/results?sid=ebsco:ebsco.com:search&bquery=Revue%20Africaine%20des%20Sciences%20Sociales%20et%20de%20la%20Sant%C3%A9%20Publique&linkOrigin=https://openurl.ebsco.com/'
            },
            {
              name: 'African Index Medicus (WHO)',
              url: 'https://indexmedicus.afro.who.int/Journals/Journals%20datails/Revue%20Africaine%20des%20Sciences%20Sociales%20et%20de%20la%20Sant%C3%A9%20Publique.html'
            },
            {
              name: 'AJOL',
              url: 'https://www.ajol.info/index.php/rasp'
            },
            {
              name: 'OpenAIRE',
              url: 'https://explore.openaire.eu/search/dataprovider?datasourceId=openaire____::0dad5cea296e6d91aeb7868b1d975f4c'
            }
          ],
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
          indexingLabel: 'Included in the following databases and indexing services:',
          indexingList: [
            {
              name: 'OpenAIRE',
              url: 'https://explore.openaire.eu/search/dataprovider?datasourceId=openaire____::e0478d1c8d0a5027748d4965b55adcff'
            }
          ],
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
          indexingLabel: 'Répertoriée dans les bases de données et services d’indexation suivants, présentés ici selon leur pertinence générale dans la communication scientifique :',
          indexingList: [
            {
              name: 'Crossref',
              url: 'https://search.crossref.org/search/works?q=Revue+Africaine+des+Sciences+Sociales+et+de+la+Sante+Publique&from_ui=yes'
            },
            {
              name: 'EBSCO',
              url: 'https://openurl.ebsco.com/results?sid=ebsco:ebsco.com:search&bquery=Revue%20Africaine%20des%20Sciences%20Sociales%20et%20de%20la%20Sant%C3%A9%20Publique&linkOrigin=https://openurl.ebsco.com/'
            },
            {
              name: 'African Index Medicus (OMS)',
              url: 'https://indexmedicus.afro.who.int/Journals/Journals%20datails/Revue%20Africaine%20des%20Sciences%20Sociales%20et%20de%20la%20Sant%C3%A9%20Publique.html'
            },
            {
              name: 'AJOL',
              url: 'https://www.ajol.info/index.php/rasp'
            },
            {
              name: 'OpenAIRE',
              url: 'https://explore.openaire.eu/search/dataprovider?datasourceId=openaire____::0dad5cea296e6d91aeb7868b1d975f4c'
            }
          ],
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
          indexingLabel: 'Répertoriée dans les bases de données et services d’indexation suivants :',
          indexingList: [
            {
              name: 'OpenAIRE',
              url: 'https://explore.openaire.eu/search/dataprovider?datasourceId=openaire____::e0478d1c8d0a5027748d4965b55adcff'
            }
          ],
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
                        {journal.indexingList ? (
                          <div className="mt-2">
                            <p className="text-gray-600 mb-2">{journal.indexingLabel}</p>
                            <ol className="list-decimal list-inside space-y-1 text-gray-600">
                              {journal.indexingList.map((entry) => (
                                <li key={entry.name}>
                                  <a
                                    href={entry.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#1e3a5f] hover:underline"
                                  >
                                    {entry.name}
                                  </a>
                                </li>
                              ))}
                            </ol>
                          </div>
                        ) : (
                          <span className="text-gray-600">{journal.indexing}</span>
                        )}
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
