
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRSSFeed } from '@/hooks/useRSSFeed';
import { formatArticleDate } from '@/lib/utils';
import { ExternalLink, FileText } from 'lucide-react';

const LatestArticles = () => {
  const { language, t } = useLanguage();
  const { articles, loading, error } = useRSSFeed([
    'https://revue-rasp.org/rasp/gateway/plugin/WebFeedGatewayPlugin/rss2',
    'https://press.b-institute.org/ajdi/gateway/plugin/WebFeedGatewayPlugin/rss2'
  ], 50);

  const content = {
    en: {
      title: 'Latest Articles',
      metaDescription: 'Browse the latest research articles published by Bamako Institute Press journals.'
    },
    fr: {
      title: 'Derniers Articles',
      metaDescription: 'Parcourez les derniers articles de recherche publiés par les revues de la Presse de l\'Institut de Bamako.'
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

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e3a5f]"></div>
              <p className="mt-4 text-gray-600">{t('latest.loading')}</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {!loading && !error && articles.length > 0 && (
            <div className="space-y-6">
              {articles.map((article, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    <a 
                      href={article.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-[#1e3a5f] transition-colors"
                    >
                      {article.title}
                    </a>
                  </h2>
                  
                  {article.authors && (
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">
                        {language === 'en' ? 'Authors: ' : 'Auteurs: '}
                      </span>
                      {article.authors}
                    </p>
                  )}
                  
                  {article.keywords && article.keywords.length > 0 && (
                    <p className="text-xs text-gray-500 mb-2">
                      <span className="font-medium">
                        {language === 'en' ? 'Keywords: ' : 'Mots-clés : '}
                      </span>
                      {article.keywords.join(', ')}
                    </p>
                  )}
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="font-medium bg-[#1e3a5f] text-white px-3 py-1 rounded">
                      {article.journal}
                    </span>
                    <span>{formatArticleDate(article.pubDate, language === 'fr' ? 'fr-FR' : 'en-US')}</span>
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={article.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#1e3a5f] hover:underline flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {language === 'en' ? 'View Article' : 'Voir l\'Article'}
                    </a>
                    
                    {article.doi && (
                      <a 
                        href={`https://doi.org/${article.doi}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#1e3a5f] hover:underline flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        DOI
                      </a>
                    )}
                    
                    {article.pdfLink && (
                      <a 
                        href={article.pdfLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#1e3a5f] hover:underline flex items-center gap-2"
                      >
                        <FileText className="h-4 w-4" />
                        PDF
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && !error && articles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                {language === 'en' ? 'No articles found.' : 'Aucun article trouvé.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LatestArticles;
