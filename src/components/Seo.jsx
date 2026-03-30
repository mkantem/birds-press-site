import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const SITE_NAME = 'BIRDs Press';
const SITE_URL = 'https://journals.b-institute.org';
const DEFAULT_IMAGE = `${SITE_URL}/assets/images/logo2.jpg`;

const normalizeUrl = (pathname) => {
  const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  return `${SITE_URL}${path}`;
};

const Seo = ({ title, description, image = DEFAULT_IMAGE, type = 'website' }) => {
  const location = useLocation();
  const { language } = useLanguage();

  const canonicalUrl = normalizeUrl(location.pathname);
  const locale = language === 'fr' ? 'fr_FR' : 'en_US';
  const alternateLocale = language === 'fr' ? 'en_US' : 'fr_FR';
  const fullTitle = `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      <html lang={language} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={locale} />
      <meta property="og:locale:alternate" content={alternateLocale} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;
