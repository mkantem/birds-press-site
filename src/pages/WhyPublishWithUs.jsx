
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Seo from '@/components/Seo';
import { CheckCircle } from 'lucide-react';

const WhyPublishWithUs = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Why publish with us',
      metaDescription:
        'Reasons to publish your research with Bamako Institute for Research and Development Studies Press (BIRDs Press).',
      intro:
        'Bamako Institute for Research and Development Studies Press (BIRDs Press) offers authors and editors a unique platform for publishing high-quality African scholarship.',
      forAuthors: {
        title: 'For Authors',
        benefits: [
          'Open access publication ensuring maximum visibility and impact',
          'Rigorous but supportive peer review process',
          'Medium publication timelines',
          'No hidden fees - transparent article processing charges',
          'Retain copyright of your work',
          'International editorial boards with African representation',
          'Support for early career researchers',
          'Bilingual publishing options (English/French)',
          'Professional copyediting and production services',
          'Promotion through our networks and social media',
          'Immediate DOI assignment and indexing',
          'Long-term digital preservation'
        ]
      },
      forEditors: {
        title: 'For Editors',
        benefits: [
          'Editorial independence and control over journal content',
          'Modern, user-friendly manuscript management system',
          'Technical and administrative support',
          'Training and resources for editorial teams',
          'Flexible publishing models',
          'Support for building diverse editorial boards',
          'Marketing and promotional assistance',
          'Commitment to ethical publishing practices',
          'Financial sustainability through transparent fee structures',
          'Global reach with local relevance'
        ]
      },
      commitment: {
        title: 'Our Commitment',
        text: 'We are committed to advancing African scholarship, supporting African researchers, and ensuring that African voices are heard in global academic conversations. We believe in accessible, ethical, and high-quality publishing that serves both local and international communities.'
      }
    },
    fr: {
      title: 'Pourquoi publier avec nous',
      metaDescription:
        'Raisons de publier votre recherche avec Bamako Institute for Research and Development Studies Press (BIRDs Press).',
      intro:
        'Bamako Institute for Research and Development Studies Press (BIRDs Press) offre aux auteurs et aux éditeurs une plateforme unique pour publier des recherches africaines de haute qualité.',
      forAuthors: {
        title: 'Pour les Auteurs',
        benefits: [
          'Publication en accès libre garantissant une visibilité et un impact maximaux',
          'Processus d\'évaluation par les pairs rigoureux mais favorable',
          'Délais de publication medium',
          'Pas de frais cachés - frais de traitement des articles transparents',
          'Conservez le droit d\'auteur de votre travail',
          'Conseils éditoriaux internationaux avec représentation africaine',
          'Soutien aux chercheurs en début de carrière',
          'Options de publication bilingue (anglais/français)',
          'Services professionnels de révision et de production',
          'Promotion via nos réseaux et médias sociaux',
          'Attribution immédiate de DOI et indexation',
          'Préservation numérique à long terme'
        ]
      },
      forEditors: {
        title: 'Pour les Éditeurs',
        benefits: [
          'Indépendance éditoriale et contrôle du contenu de la revue',
          'Système moderne et convivial de gestion des manuscrits',
          'Soutien technique et administratif',
          'Formation et ressources pour les équipes éditoriales',
          'Modèles de publication flexibles',
          'Soutien pour construire des conseils éditoriaux diversifiés',
          'Assistance marketing et promotionnelle',
          'Engagement envers les pratiques de publication éthiques',
          'Viabilité financière grâce à des structures de frais transparentes',
          'Portée mondiale avec pertinence locale'
        ]
      },
      commitment: {
        title: 'Notre Engagement',
        text: 'Nous nous engageons à promouvoir la recherche africaine, à soutenir les chercheurs africains et à garantir que les voix africaines soient entendues dans les conversations académiques mondiales. Nous croyons en une publication accessible, éthique et de haute qualité qui sert à la fois les communautés locales et internationales.'
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

          <p className="text-lg text-gray-700 leading-relaxed mb-12">{c.intro}</p>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{c.forAuthors.title}</h2>
            <ul className="space-y-3">
              {c.forAuthors.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{c.forEditors.title}</h2>
            <ul className="space-y-3">
              {c.forEditors.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a75] rounded-lg shadow-md p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">{c.commitment.title}</h2>
            <p className="leading-relaxed">{c.commitment.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyPublishWithUs;
