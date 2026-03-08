
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language, t } = useLanguage();

  const getLangPath = (path) => {
    return `/${language}${path}`;
  };

  return (
    <footer className="bg-[#1e3a5f] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Bamako Institute for Research and Development Studies Press</h3>
            <p className="text-gray-300">
              {language === 'en' 
                ? 'Advancing African Scholarship'
                : 'Promouvoir la Recherche Africaine'}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Quick Links' : 'Liens Rapides'}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to={getLangPath('/policies/privacy')} className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link to={getLangPath('/policies/privacy')} className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to={getLangPath('/policies/privacy')} className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.cookies')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <p className="text-gray-300">
              <a href="mailto:infos@b-institute.org" className="hover:text-white transition-colors">
                infos@b-institute.org
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
