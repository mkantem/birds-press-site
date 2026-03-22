
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [policiesDropdownOpen, setPoliciesDropdownOpen] = useState(false);
  const [showLanguageBanner, setShowLanguageBanner] = useState(false);
  const [mobileMenuTop, setMobileMenuTop] = useState(0);
  const headerRef = useRef(null);
  const { language, switchLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem('languageBannerDismissed');
      if (!dismissed) {
        setShowLanguageBanner(true);
      }
    } catch (e) {
      setShowLanguageBanner(true);
    }
  }, []);

  useEffect(() => {
    setAboutDropdownOpen(false);
    setPoliciesDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = '';
      return undefined;
    }

    const updateMobileMenuTop = () => {
      if (headerRef.current) {
        setMobileMenuTop(headerRef.current.getBoundingClientRect().bottom);
      }
    };

    document.body.style.overflow = 'hidden';
    updateMobileMenuTop();
    window.addEventListener('resize', updateMobileMenuTop);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', updateMobileMenuTop);
    };
  }, [mobileMenuOpen, showLanguageBanner]);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'fr' : 'en';
    switchLanguage(newLang);
    
    // Update URL to reflect language change
    const currentPath = location.pathname;
    const pathParts = currentPath.split('/').filter(Boolean);
    
    if (pathParts.length > 0 && (pathParts[0] === 'en' || pathParts[0] === 'fr')) {
      pathParts[0] = newLang;
      navigate('/' + pathParts.join('/'));
    } else {
      navigate(`/${newLang}/home`);
    }
  };

  const getLangPath = (path) => {
    return `/${language}${path}`;
  };

  const dismissLanguageBanner = () => {
    try {
      localStorage.setItem('languageBannerDismissed', 'true');
    } catch (e) {}
    setShowLanguageBanner(false);
  };

  return (
    <header ref={headerRef} className="bg-[#1e3a5f] text-white sticky top-0 z-50 shadow-lg">
      {showLanguageBanner && (
        <div className="border-b border-white/10 bg-[#27486f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-start justify-between gap-3 text-sm">
            <p className="text-white/95 pr-2">
              {language === 'fr'
                ? 'Astuce : vous pouvez changer la langue dans le menu en utilisant le bouton EN/FR.'
                : 'Tip: You can switch languages from the menu using the EN/FR button.'}
            </p>
            <button
              type="button"
              onClick={dismissLanguageBanner}
              className="shrink-0 rounded p-1 hover:bg-white/10 transition-colors"
              aria-label={language === 'fr' ? 'Fermer le message de langue' : 'Dismiss language message'}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to={getLangPath('/home')} className="flex items-center space-x-3">
            <div className="text-2xl font-bold">BIRDs Press</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link to={getLangPath('/home')} className="px-4 py-2 rounded hover:bg-white/10 transition-colors">
              {t('nav.home')}
            </Link>
            
            <Link to={getLangPath('/journals')} className="px-4 py-2 rounded hover:bg-white/10 transition-colors">
              {t('nav.journals')}
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setAboutDropdownOpen(false);
                }
              }}
            >
              <button className="px-4 py-2 rounded hover:bg-white/10 transition-colors flex items-center">
                {t('nav.about')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 bg-white text-gray-900 rounded-md shadow-lg py-2 min-w-[200px]">
                  <Link to={getLangPath('/about/press')} className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    {t('about.press')}
                  </Link>
                  <Link to={getLangPath('/about/history')} className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    {t('about.history')}
                  </Link>
                  <Link to={getLangPath('/about/why-publish')} className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    {t('about.why')}
                  </Link>
                  <Link to={getLangPath('/about/people')} className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    {t('about.people')}
                  </Link>
                </div>
              )}
            </div>

            {/* Policies Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPoliciesDropdownOpen(true)}
              onMouseLeave={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setPoliciesDropdownOpen(false);
                }
              }}
            >
              <button className="px-4 py-2 rounded hover:bg-white/10 transition-colors flex items-center">
                {t('nav.policies')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {policiesDropdownOpen && (
                <div className="absolute top-full left-0 bg-white text-gray-900 rounded-md shadow-lg py-2 min-w-[240px]">
                  <Link to={getLangPath('/policies/overview')} className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    {t('policies.overview')}
                  </Link>
                  <Link to={getLangPath('/policies/ethical')} className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    {t('policies.ethical')}
                  </Link>
                  <Link to={getLangPath('/policies/editorial')} className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    {t('policies.editorial')}
                  </Link>
                  <Link to={getLangPath('/policies/peer-review')} className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    {t('policies.peer')}
                  </Link>
                  <Link to={getLangPath('/policies/post-decision')} className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    {t('policies.postdecision')}
                  </Link>
                  <Link to={getLangPath('/policies/apc')} className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    {t('policies.apc')}
                  </Link>
                  <Link to={getLangPath('/policies/open-access')} className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    {t('policies.openaccess')}
                  </Link>
                  <Link to={getLangPath('/policies/copyright')} className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    {t('policies.copyright')}
                  </Link>
                  <Link to={getLangPath('/policies/reviewer-guidelines')} className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    {t('policies.reviewer')}
                  </Link>
                  <Link to={getLangPath('/policies/advertising')} className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    {t('policies.advertising')}
                  </Link>
                  <Link to={getLangPath('/policies/privacy')} className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    {t('policies.privacy')}
                  </Link>
                  <Link to={getLangPath('/policies/archiving')} className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    {t('policies.archiving')}
                  </Link>
                  <Link to={getLangPath('/policies/ai-policy')} className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    {t('policies.ai')}
                  </Link>
                </div>
              )}
            </div>

            <Link to={getLangPath('/submission')} className="px-4 py-2 rounded hover:bg-white/10 transition-colors">
              {t('nav.submission')}
            </Link>
            
            <Link to={getLangPath('/contributions')} className="px-4 py-2 rounded hover:bg-white/10 transition-colors">
              {t('nav.contributions')}
            </Link>
            
            <Link to={getLangPath('/contact')} className="px-4 py-2 rounded hover:bg-white/10 transition-colors">
              {t('nav.contact')}
            </Link>

            {/* Language Switcher */}
            <Button
              onClick={toggleLanguage}
              variant="outline"
              className="ml-4 border-white text-white hover:bg-white hover:text-[#1e3a5f]"
            >
              {language === 'en' ? 'FR' : 'EN'}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-x-0 bottom-0 z-40 lg:hidden overflow-y-auto overscroll-contain bg-[#1e3a5f] px-4 pb-4 pt-4 shadow-2xl"
            style={{ top: `${mobileMenuTop}px` }}
          >
            <div className="mx-auto flex max-w-7xl flex-col space-y-2">
              <div className="mb-2 rounded-xl border border-white/20 bg-white/10 p-4">
                <div className="mb-3 text-sm font-semibold text-white">
                  {language === 'fr' ? 'Choisir la langue' : 'Choose language'}
                </div>
                <Button
                  onClick={toggleLanguage}
                  variant="outline"
                  className="w-full border-white bg-white text-[#1e3a5f] hover:bg-gray-100 hover:text-[#1e3a5f]"
                >
                  {language === 'en' ? 'Switch to French (FR)' : 'Passer en anglais (EN)'}
                </Button>
              </div>

              <Link to={getLangPath('/home')} className="px-4 py-2 rounded hover:bg-white/10 transition-colors">
                {t('nav.home')}
              </Link>
              <Link to={getLangPath('/journals')} className="px-4 py-2 rounded hover:bg-white/10 transition-colors">
                {t('nav.journals')}
              </Link>
              
              {/* Mobile About Section */}
              <div className="px-4 py-2 font-semibold">{t('nav.about')}</div>
              <Link to={getLangPath('/about/press')} className="pl-8 pr-4 py-2 rounded hover:bg-white/10 transition-colors">
                {t('about.press')}
              </Link>
              <Link to={getLangPath('/about/history')} className="pl-8 pr-4 py-2 rounded hover:bg-white/10 transition-colors">
                {t('about.history')}
              </Link>
              <Link to={getLangPath('/about/why-publish')} className="pl-8 pr-4 py-2 rounded hover:bg-white/10 transition-colors">
                {t('about.why')}
              </Link>
              <Link to={getLangPath('/about/people')} className="pl-8 pr-4 py-2 rounded hover:bg-white/10 transition-colors">
                {t('about.people')}
              </Link>

              {/* Mobile Policies Section */}
              <div className="px-4 py-2 font-semibold">{t('nav.policies')}</div>
              <Link to={getLangPath('/policies/overview')} className="pl-8 pr-4 py-2 rounded hover:bg-white/10 transition-colors">
                {t('policies.overview')}
              </Link>
              <Link to={getLangPath('/policies/ethical')} className="pl-8 pr-4 py-2 rounded hover:bg-white/10 transition-colors">
                {t('policies.ethical')}
              </Link>
              <Link to={getLangPath('/policies/editorial')} className="pl-8 pr-4 py-2 rounded hover:bg-white/10 transition-colors">
                {t('policies.editorial')}
              </Link>
              <Link to={getLangPath('/policies/peer-review')} className="pl-8 pr-4 py-2 rounded hover:bg-white/10 transition-colors">
                {t('policies.peer')}
              </Link>
              <Link to={getLangPath('/policies/post-decision')} className="pl-8 pr-4 py-2 rounded hover:bg-white/10 transition-colors">
                {t('policies.postdecision')}
              </Link>
              <Link to={getLangPath('/policies/apc')} className="pl-8 pr-4 py-2 rounded hover:bg-white/10 transition-colors">
                {t('policies.apc')}
              </Link>
              <Link to={getLangPath('/policies/open-access')} className="pl-8 pr-4 py-2 rounded hover:bg-white/10 transition-colors">
                {t('policies.openaccess')}
              </Link>
              <Link to={getLangPath('/policies/copyright')} className="pl-8 pr-4 py-2 rounded hover:bg-white/10 transition-colors">
                {t('policies.copyright')}
              </Link>
              <Link to={getLangPath('/policies/reviewer-guidelines')} className="pl-8 pr-4 py-2 rounded hover:bg-white/10 transition-colors">
                {t('policies.reviewer')}
              </Link>
              <Link to={getLangPath('/policies/advertising')} className="pl-8 pr-4 py-2 rounded hover:bg-white/10 transition-colors">
                {t('policies.advertising')}
              </Link>
              <Link to={getLangPath('/policies/privacy')} className="pl-8 pr-4 py-2 rounded hover:bg-white/10 transition-colors">
                {t('policies.privacy')}
              </Link>
              <Link to={getLangPath('/policies/archiving')} className="pl-8 pr-4 py-2 rounded hover:bg-white/10 transition-colors">
                {t('policies.archiving')}
              </Link>
              <Link to={getLangPath('/policies/ai-policy')} className="pl-8 pr-4 py-2 rounded hover:bg-white/10 transition-colors">
                {t('policies.ai')}
              </Link>
              
              <Link to={getLangPath('/submission')} className="px-4 py-2 rounded hover:bg-white/10 transition-colors">
                {t('nav.submission')}
              </Link>
              <Link to={getLangPath('/contributions')} className="px-4 py-2 rounded hover:bg-white/10 transition-colors">
                {t('nav.contributions')}
              </Link>
              <Link to={getLangPath('/contact')} className="px-4 py-2 rounded hover:bg-white/10 transition-colors">
                {t('nav.contact')}
              </Link>

            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
