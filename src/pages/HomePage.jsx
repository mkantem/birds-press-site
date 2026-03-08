
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRSSFeed } from '@/hooks/useRSSFeed';
import { Button } from '@/components/ui/button';
import { formatArticleDate } from '@/lib/utils';
import { ExternalLink, FileText } from 'lucide-react';

const HomePage = () => {
  const { language, t } = useLanguage();
  
  const { articles, loading, error } = useRSSFeed([
    'https://revue-rasp.org/rasp/gateway/plugin/WebFeedGatewayPlugin/rss2',
    'https://press.b-institute.org/ajdi/gateway/plugin/WebFeedGatewayPlugin/rss2'
  ], 10);

  const [cookieAccepted, setCookieAccepted] = useState(true);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem('cookieAccepted');
      if (!accepted) {
        setCookieAccepted(false);
      }
    } catch (e) {
      setCookieAccepted(true);
    }
  }, []);

  const acceptCookies = () => {
    try {
      localStorage.setItem('cookieAccepted', 'true');
    } catch (e) {}
    setCookieAccepted(true);
  };

  const getLangPath = (path) => `/${language}${path}`;

  const journals = {
    en: [
      {
        id: 'rasp',
        title: 'RASP - Revue Africaine de Sciences Sociales et de la Santé Publique',
        description: 'An international, bilingual (English/French), double-blind peer-reviewed open access journal created in January 2010 by a multidisciplinary team of African and European Sociologists, Anthropologists, Doctors, Pharmacists, Psychologists and Psychoanalysts, the RASP is a Pan-African open access journal.',
        scope: 'Sociology, Anthropology, Public Health, Psychology, Psychoanalysis',
        languages: 'English, French',
        openAccess: 'Open Access',
        website: 'https://revue-rasp.org',
        currentUrl: 'https://revue-rasp.org/rasp/issue/current',
        archiveUrl: 'https://revue-rasp.org/rasp/issue/archive',
        submitUrl: 'https://revue-rasp.org/rasp/user/register'
      },
      {
        id: 'ajdi',
        title: 'AJDI - African Journal for Development Informatics',
        description: 'The African Journal of Development Informatics (AJDI) is a multi-disciplinary journal in information and communication technology (ICT). The focus of AJDI is to introduce a broad audience to the variety of intellectual traditions encompassed by the rubric of ICT in the developing world, especially sub-Saharan Africa. ',
        scope: 'Information systems, development, computer science, ICT, sustainability',
        languages: 'English, French',
        openAccess: 'Open Access',
        website: 'https://press.b-institute.org/ajdi',
        currentUrl: 'https://press.b-institute.org/ajdi/issue/current',
        archiveUrl: 'https://press.b-institute.org/ajdi/issue/archive',
        submitUrl: 'https://press.b-institute.org/ajdi/user/register'
      }
    ],
    fr: [
      {
        id: 'rasp',
        title: 'RASP - Revue Africaine des Sciences Sociales et de la Santé Publique',
        description: 'Une revue internationale, bilingue (anglais/français), à comité de lecture en double aveugle et en accès libre dédiée à la recherche en sciences politiques.',
        scope: 'Sciences politiques, relations internationales, politique publique, politique africaine',
        languages: 'Anglais, Français',
        openAccess: 'Accès Libre',
        website: 'https://revue-rasp.org',
        currentUrl: 'https://revue-rasp.org/rasp/issue/current',
        archiveUrl: 'https://revue-rasp.org/rasp/issue/archive',
        submitUrl: 'https://revue-rasp.org/rasp/user/register'
      },
      {
        id: 'ajdi',
        title: 'AJDI - African Journal of Development Informatics',
        description: 'L’African Journal of Development Informatics (AJDI) est une revue multidisciplinaire spécialisée dans les technologies de l’information et de la communication (TIC). L’AJDI a pour objectif de présenter à un large public la diversité des traditions intellectuelles englobées par le domaine des TIC dans les pays en développement, et plus particulièrement en Afrique subsaharienne.',
        scope: 'Systèmes d’information, développement, informatique, TIC, durabilité',
        languages: 'Anglais, Français',
        openAccess: 'Accès Libre',
        website: 'https://press.b-institute.org/ajdi',
        currentUrl: 'https://press.b-institute.org/ajdi/issue/current',
        archiveUrl: 'https://press.b-institute.org/ajdi/issue/archive',
        submitUrl: 'https://press.b-institute.org/ajdi/user/register'
      }
    ]
  };

  const currentJournals = journals[language] || journals['en'];

  return (
    <>
      <Helmet>
        <title>Bamako Institute - {t('hero.title')}</title>
        <meta name="description" content={t('hero.tagline')} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            // backgroundImage: 'url(https://images.unsplash.com/photo-1615829875421-acafafe4aa0a)',
            backgroundImage: 'url(/assets/images/logo2.jpg)',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/80 to-[#2a4a75]/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            {t('hero.tagline')}
          </p>
        </div>
      </div>

      {/* Journals Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('journals.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentJournals.map((journal) => (
              <div key={journal.id} className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">{journal.title}</h3>
                <p className="text-gray-700 mb-4">{journal.description}</p>
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <p><span className="font-semibold">{language === 'en' ? 'Scope:' : 'Portée:'}</span> {journal.scope}</p>
                  <p><span className="font-semibold">{language === 'en' ? 'Languages:' : 'Langues:'}</span> {journal.languages}</p>
                  <p><span className="font-semibold">{language === 'en' ? 'Access:' : 'Accès:'}</span> {journal.openAccess}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button asChild className="bg-[#1e3a5f] hover:bg-[#2a4a75]">
                    <a href={journal.website} target="_blank" rel="noopener noreferrer">
                      {t('journals.visit')}
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white">
                    <a href={journal.currentUrl} target="_blank" rel="noopener noreferrer">
                      {t('journals.current')}
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white">
                    <a href={journal.archiveUrl} target="_blank" rel="noopener noreferrer">
                      {t('journals.archives')}
                    </a>
                  </Button>
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <a href={journal.submitUrl} target="_blank" rel="noopener noreferrer">
                      {t('journals.submit')}
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('latest.title')}
          </h2>
          
          {loading && (
            <div className="text-center py-12">
              <p className="text-gray-600">{t('latest.loading')}</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {!loading && !error && articles.length > 0 && (
            <div className="space-y-6 mb-8">
              {articles.map((article, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <a href={article.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#1e3a5f] transition-colors">
                      {article.title}
                    </a>
                  </h3>
                  {article.authors && (
                    <p className="text-gray-600 mb-2">{article.authors}</p>
                  )}
              {article.keywords && article.keywords.length > 0 && (
                <p className="text-xs text-gray-500 mb-2">
                  <span className="font-semibold">
                    {language === 'en' ? 'Keywords: ' : 'Mots-clés : '}
                  </span>
                  {article.keywords.join(', ')}
                </p>
              )}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="font-medium bg-[#1e3a5f] text-white px-2 py-0.5 rounded text-xs">{article.journal}</span>
                    <span>{formatArticleDate(article.pubDate, language === 'fr' ? 'fr-FR' : 'en-US')}</span>
                  </div>
                  <div className="flex gap-3">
                    {article.doi && (
                      <a href={`https://doi.org/${article.doi}`} target="_blank" rel="noopener noreferrer" className="text-[#1e3a5f] hover:underline flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" />
                        DOI
                      </a>
                    )}
                    {article.pdfLink && (
                      <a href={article.pdfLink} target="_blank" rel="noopener noreferrer" className="text-[#1e3a5f] hover:underline flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        PDF
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center">
            <Button asChild className="bg-[#1e3a5f] hover:bg-[#2a4a75]">
              <Link to={getLangPath('/latest-articles')}>
                {t('latest.viewmore')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cookie Banner */}
      {!cookieAccepted && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm">
              {t('cookie.message')}{' '}
              <Link to={getLangPath('/policies/privacy')} className="underline hover:text-gray-300">
                {t('cookie.privacy')}
              </Link>
            </p>
            <Button onClick={acceptCookies} variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              {t('cookie.accept')}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
