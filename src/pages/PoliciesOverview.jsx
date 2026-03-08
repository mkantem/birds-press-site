
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronRight } from 'lucide-react';

const PoliciesOverview = () => {
  const { language, t } = useLanguage();

  const getLangPath = (path) => `/${language}${path}`;

  const content = {
    en: {
      title: 'Publishing Policies - Overview',
      metaDescription: 'Overview of publishing policies at Bamako Institute Press.',
      intro: 'BIRDs Press maintains comprehensive publishing policies to ensure the quality, integrity, and accessibility of our publications. Below you will find links to our detailed policies.',
      policies: [
        { name: 'Ethical Policies', path: '/policies/ethical', description: 'Our commitment to research ethics and integrity' },
        { name: 'Editorial Policy', path: '/policies/editorial', description: 'Editorial standards and decision-making processes' },
        { name: 'Peer Review Policy', path: '/policies/peer-review', description: 'Our peer review process and standards' },
        { name: 'Post-Decision Procedure', path: '/policies/post-decision', description: 'What happens after editorial decisions are made' },
        { name: 'Article Processing Fee', path: '/policies/apc', description: 'Information about publication charges' },
        { name: 'Open Access Policy', path: '/policies/open-access', description: 'Our commitment to open access publishing' },
        { name: 'Copyright & Licensing', path: '/policies/copyright', description: 'Copyright retention and Creative Commons licensing' },
        { name: 'Reviewer Guidelines', path: '/policies/reviewer-guidelines', description: 'Guidelines for peer reviewers' },
        { name: 'Advertising & Marketing Policy', path: '/policies/advertising', description: 'Our advertising and marketing standards' },
        { name: 'Privacy Policy', path: '/policies/privacy', description: 'How we protect your personal data' },
        { name: 'Archiving Policy', path: '/policies/archiving', description: 'Long-term preservation of published content' }
      ]
    },
    fr: {
      title: 'Politiques de Publication - Aperçu',
      metaDescription: 'Aperçu des politiques de publication à la Presse de l\'Institut de Bamako.',
      intro: 'BIRDs Press maintient des politiques de publication complètes pour assurer la qualité, l\'intégrité et l\'accessibilité de nos publications. Vous trouverez ci-dessous des liens vers nos politiques détaillées.',
      policies: [
        { name: 'Politiques Éthiques', path: '/policies/ethical', description: 'Notre engagement envers l\'éthique et l\'intégrité de la recherche' },
        { name: 'Politique Éditoriale', path: '/policies/editorial', description: 'Normes éditoriales et processus de prise de décision' },
        { name: 'Politique d\'Évaluation par les Pairs', path: '/policies/peer-review', description: 'Notre processus et normes d\'évaluation par les pairs' },
        { name: 'Procédure Post-Décision', path: '/policies/post-decision', description: 'Ce qui se passe après les décisions éditoriales' },
        { name: 'Frais de Traitement des Articles', path: '/policies/apc', description: 'Informations sur les frais de publication' },
        { name: 'Politique d\'Accès Libre', path: '/policies/open-access', description: 'Notre engagement envers la publication en accès libre' },
        { name: 'Droit d\'Auteur et Licence', path: '/policies/copyright', description: 'Rétention du droit d\'auteur et licence Creative Commons' },
        { name: 'Lignes Directrices pour les Évaluateurs', path: '/policies/reviewer-guidelines', description: 'Lignes directrices pour les évaluateurs par les pairs' },
        { name: 'Politique de Publicité et de Marketing', path: '/policies/advertising', description: 'Nos normes de publicité et de marketing' },
        { name: 'Politique de Confidentialité', path: '/policies/privacy', description: 'Comment nous protégeons vos données personnelles' },
        { name: 'Politique d\'Archivage', path: '/policies/archiving', description: 'Préservation à long terme du contenu publié' }
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

          <p className="text-lg text-gray-700 leading-relaxed mb-12">{c.intro}</p>

          <div className="space-y-4">
            {c.policies.map((policy, index) => (
              <Link
                key={index}
                to={getLangPath(policy.path)}
                className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2 group-hover:text-[#2a4a75] transition-colors">
                      {policy.name}
                    </h2>
                    <p className="text-gray-600">{policy.description}</p>
                  </div>
                  <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-[#1e3a5f] transition-colors flex-shrink-0 ml-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PoliciesOverview;
