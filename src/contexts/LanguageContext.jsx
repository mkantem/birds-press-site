
import React, { createContext, useState, useEffect, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.journals': 'Journals',
    'nav.about': 'About',
    'nav.authors': 'For Authors',
    'nav.policies': 'Publishing Policies',
    'nav.submission': 'Submission Guidelines',
    'nav.contributions': 'Author Contributions',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.search': 'Search',
    'about.press': 'About the Press',
    'about.history': 'History',
    'about.why': 'Why Publish With Us',
    'about.people': 'People',
    'about.editors': 'Information for Editors',
    'about.editors.join': 'Join Our Editorial Boards',
    'about.editors.guest': 'Guest Editing Opportunities',
    'policies.overview': 'Overview',
    'policies.ethical': 'Ethical Policies',
    'policies.editorial': 'Editorial Policy',
    'policies.peer': 'Peer Review Policy',
    'policies.postdecision': 'Post-Decision Procedure',
    'policies.apc': 'Article Processing Fee',
    'policies.openaccess': 'Open Access Policy',
    'policies.copyright': 'Copyright & Licensing',
    'policies.reviewer': 'Reviewer Guidelines',
    'policies.advertising': 'Advertising & Marketing Policy',
    'policies.privacy': 'Privacy Policy',
    'policies.archiving': 'Archiving Policy',
    'policies.ai': 'AI Policy',
    'hero.title': 'Advancing African Scholarship',
    'hero.tagline': 'Publishing world-class research that amplifies African voices and perspectives',
    'journals.title': 'Our Journals',
    'journals.visit': 'Visit Journal',
    'journals.current': 'Current Issue',
    'journals.archives': 'Archives',
    'journals.submit': 'Submit',
    'latest.title': 'Latest Articles',
    'latest.viewmore': 'View More',
    'latest.loading': 'Loading articles...',
    'latest.error': 'Failed to load articles',
    'cookie.message': 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.',
    'cookie.privacy': 'Privacy Policy',
    'cookie.accept': 'Accept',
    'footer.terms': 'Terms',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookies Policy',
    'footer.copyright': '© 2026 Bamako Institute. All rights reserved.',
    'footer.contact': 'Contact us',
    'contact.title': 'Contact Us',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Failed to send message. Please try again.',
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.journals': 'Revues',
    'nav.about': 'À Propos',
    'nav.authors': 'Pour les auteurs',
    'nav.policies': 'Politiques de Publication',
    'nav.submission': 'Lignes Directrices de Soumission',
    'nav.contributions': 'Contributions des Auteurs',
    'nav.news': 'Actualités',
    'nav.contact': 'Contact',
    'nav.search': 'Recherche',
    'about.press': 'À Propos de la Presse',
    'about.history': 'Histoire',
    'about.why': 'Pourquoi Publier Avec Nous',
    'about.people': 'Personnel',
    'about.editors': 'Informations pour les éditeurs',
    'about.editors.join': 'Rejoindre nos comités éditoriaux',
    'about.editors.guest': 'Opportunités d’édition invitée',
    'policies.overview': 'Aperçu',
    'policies.ethical': 'Politiques Éthiques',
    'policies.editorial': 'Politique Éditoriale',
    'policies.peer': 'Politique d\'Évaluation',
    'policies.postdecision': 'Procédure Post-Décision',
    'policies.apc': 'Frais de Traitement des Articles',
    'policies.openaccess': 'Politique d\'Accès Libre',
    'policies.copyright': 'Droit d\'Auteur et Licence',
    'policies.reviewer': 'Guide pour les Évaluateurs',
    'policies.advertising': 'Politique de Publicité',
    'policies.privacy': 'Politique de Confidentialité',
    'policies.archiving': 'Politique d\'Archivage',
    'policies.ai': 'Politique IA',
    'hero.title': 'Promouvoir la Recherche Africaine',
    'hero.tagline': 'Publier des recherches de classe mondiale qui amplifient les voix et perspectives africaines',
    'journals.title': 'Nos Revues',
    'journals.visit': 'Visiter la Revue',
    'journals.current': 'Numéro Actuel',
    'journals.archives': 'Archives',
    'journals.submit': 'Soumettre',
    'latest.title': 'Derniers Articles',
    'latest.viewmore': 'Voir Plus',
    'latest.loading': 'Chargement des articles...',
    'latest.error': 'Échec du chargement des articles',
    'cookie.message': 'Nous utilisons des cookies pour améliorer votre expérience. En continuant à visiter ce site, vous acceptez notre utilisation des cookies.',
    'cookie.privacy': 'Politique de Confidentialité',
    'cookie.accept': 'Accepter',
    'footer.terms': 'Conditions',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.cookies': 'Politique de Cookies',
    'footer.copyright': '© 2026 BIRDs Press. Tous droits réservés.',
    'footer.contact': 'Nous contacter',
    'contact.title': 'Nous Contacter',
    'contact.name': 'Nom',
    'contact.email': 'E-mail',
    'contact.subject': 'Sujet',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le Message',
    'contact.success': 'Message envoyé avec succès !',
    'contact.error': 'Échec de l\'envoi du message. Veuillez réessayer.',
    'common.loading': 'Chargement...',
    'common.error': 'Une erreur s\'est produite',
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('language');
      if (saved && (saved === 'en' || saved === 'fr')) {
        return saved;
      }
      const browserLang = navigator.language.split('-')[0];
      return browserLang === 'fr' ? 'fr' : 'en';
    } catch (e) {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('language', language);
    } catch (e) {
      console.warn('Failed to save language to localStorage');
    }
    console.log(`LanguageContext initialized with language: ${language}`);
  }, [language]);

  const t = (key) => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };

  const switchLanguage = (lang) => {
    if (lang === 'en' || lang === 'fr') {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
