
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';

const News = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'News',
      metaDescription: 'Latest news and announcements from Bamako Institute Press.',
      posts: [
        {
          id: 1,
          title: 'Welcome to Bamako Institute Press',
          date: '2026-02-15',
          category: 'Press News',
          excerpt: 'We are excited to announce the launch of Bamako Institute Press, a new open access publisher dedicated to advancing African scholarship.',
          content: 'Bamako Institute Press is proud to announce its official launch. Our mission is to provide a platform for high-quality African research and to support African scholars in sharing their work with global audiences.'
        },
        {
          id: 2,
          title: 'RASP Journal Now Accepting Submissions',
          date: '2026-02-20',
          category: 'RASP',
          excerpt: 'The Revue Africaine de Sciences Politiques (RASP) is now accepting manuscript submissions for our inaugural issue.',
          content: 'RASP invites submissions of original research in political science, international relations, and public policy. Visit our journal website to submit your manuscript.'
        }
      ]
    },
    fr: {
      title: 'Actualités',
      metaDescription: 'Dernières nouvelles et annonces de la Presse de l\'Institut de Bamako.',
      posts: [
        {
          id: 1,
          title: 'Bienvenue à la Presse de l\'Institut de Bamako',
          date: '2026-02-15',
          category: 'Actualités de la Presse',
          excerpt: 'Nous sommes ravis d\'annoncer le lancement de la Presse de l\'Institut de Bamako, un nouvel éditeur en accès libre dédié à la promotion de la recherche africaine.',
          content: 'La Presse de l\'Institut de Bamako est fière d\'annoncer son lancement officiel. Notre mission est de fournir une plateforme pour la recherche africaine de haute qualité et de soutenir les chercheurs africains dans le partage de leur travail avec un public mondial.'
        },
        {
          id: 2,
          title: 'La Revue RASP Accepte Maintenant les Soumissions',
          date: '2026-02-20',
          category: 'RASP',
          excerpt: 'La Revue Africaine de Sciences Politiques (RASP) accepte maintenant les soumissions de manuscrits pour notre numéro inaugural.',
          content: 'RASP invite les soumissions de recherches originales en sciences politiques, relations internationales et politiques publiques. Visitez le site web de notre revue pour soumettre votre manuscrit.'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">{c.title}</h1>

          <div className="space-y-8">
            {c.posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="bg-[#1e3a5f] text-white px-3 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <span>{new Date(post.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{post.excerpt}</p>
                <p className="text-gray-700 leading-relaxed">{post.content}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
