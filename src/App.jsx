
import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Page imports
import HomePage from '@/pages/HomePage';
import JournalsPage from '@/pages/JournalsPage';
import AboutPress from '@/pages/AboutPress';
import History from '@/pages/History';
import WhyPublishWithUs from '@/pages/WhyPublishWithUs';
import People from '@/pages/People';
import PoliciesOverview from '@/pages/PoliciesOverview';
import EthicalPolicies from '@/pages/EthicalPolicies';
import EditorialPolicy from '@/pages/EditorialPolicy';
import PeerReviewPolicy from '@/pages/PeerReviewPolicy';
import PostDecisionProcedure from '@/pages/PostDecisionProcedure';
import ArticleProcessingFee from '@/pages/ArticleProcessingFee';
import OpenAccessPolicy from '@/pages/OpenAccessPolicy';
import CopyrightLicensing from '@/pages/CopyrightLicensing';
import ReviewerGuidelines from '@/pages/ReviewerGuidelines';
import AdvertisingMarketing from '@/pages/AdvertisingMarketing';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import ArchivingPolicy from '@/pages/ArchivingPolicy';
import AIPolicy from '@/pages/AIPolicy';
import SubmissionGuidelines from '@/pages/SubmissionGuidelines';
import AuthorContributions from '@/pages/AuthorContributions';
import News from '@/pages/News';
import Contact from '@/pages/Contact';
import LatestArticles from '@/pages/LatestArticles';

const AppContent = () => {
  useEffect(() => {
    console.log("AppContent rendered successfully.");
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* Base Route directly renders HomePage without complex redirects */}
          <Route path="/" element={<HomePage />} />
          
          {/* Explicit English and French Home routes */}
          <Route path="/en/home" element={<HomePage />} />
          <Route path="/fr/accueil" element={<HomePage />} />
          <Route path="/fr/home" element={<HomePage />} />
          
          {/* Other shared routes mapped for both EN and FR structures */}
          <Route path="/:lang/journals" element={<JournalsPage />} />
          <Route path="/:lang/revues" element={<JournalsPage />} />
          
          <Route path="/:lang/about/press" element={<AboutPress />} />
          <Route path="/:lang/apropos/presse" element={<AboutPress />} />
          
          <Route path="/:lang/about/history" element={<History />} />
          <Route path="/:lang/apropos/histoire" element={<History />} />
          
          <Route path="/:lang/about/why-publish" element={<WhyPublishWithUs />} />
          <Route path="/:lang/apropos/pourquoi-publier" element={<WhyPublishWithUs />} />
          
          <Route path="/:lang/about/people" element={<People />} />
          <Route path="/:lang/apropos/personnel" element={<People />} />
          
          <Route path="/:lang/policies/overview" element={<PoliciesOverview />} />
          <Route path="/:lang/politiques/apercu" element={<PoliciesOverview />} />
          
          <Route path="/:lang/policies/ethical" element={<EthicalPolicies />} />
          <Route path="/:lang/politiques/ethique" element={<EthicalPolicies />} />
          
          <Route path="/:lang/policies/editorial" element={<EditorialPolicy />} />
          <Route path="/:lang/politiques/editoriale" element={<EditorialPolicy />} />
          
          <Route path="/:lang/policies/peer-review" element={<PeerReviewPolicy />} />
          <Route path="/:lang/politiques/evaluation-pairs" element={<PeerReviewPolicy />} />
          
          <Route path="/:lang/policies/post-decision" element={<PostDecisionProcedure />} />
          <Route path="/:lang/politiques/post-decision" element={<PostDecisionProcedure />} />
          
          <Route path="/:lang/policies/apc" element={<ArticleProcessingFee />} />
          <Route path="/:lang/politiques/frais-publication" element={<ArticleProcessingFee />} />
          
          <Route path="/:lang/policies/open-access" element={<OpenAccessPolicy />} />
          <Route path="/:lang/politiques/acces-libre" element={<OpenAccessPolicy />} />
          
          <Route path="/:lang/policies/copyright" element={<CopyrightLicensing />} />
          <Route path="/:lang/politiques/droit-auteur" element={<CopyrightLicensing />} />
          
          <Route path="/:lang/policies/reviewer-guidelines" element={<ReviewerGuidelines />} />
          <Route path="/:lang/politiques/directives-evaluateurs" element={<ReviewerGuidelines />} />
          
          <Route path="/:lang/policies/advertising" element={<AdvertisingMarketing />} />
          <Route path="/:lang/politiques/publicite" element={<AdvertisingMarketing />} />
          
          <Route path="/:lang/policies/privacy" element={<PrivacyPolicy />} />
          <Route path="/:lang/politiques/confidentialite" element={<PrivacyPolicy />} />
          
          <Route path="/:lang/policies/archiving" element={<ArchivingPolicy />} />
          <Route path="/:lang/politiques/archivage" element={<ArchivingPolicy />} />

          <Route path="/:lang/policies/ai-policy" element={<AIPolicy />} />
          <Route path="/:lang/politiques/politique-ia" element={<AIPolicy />} />
          
          <Route path="/:lang/submission" element={<SubmissionGuidelines />} />
          <Route path="/:lang/soumission" element={<SubmissionGuidelines />} />
          
          <Route path="/:lang/contributions" element={<AuthorContributions />} />
          
          <Route path="/:lang/news" element={<News />} />
          <Route path="/:lang/actualites" element={<News />} />
          
          <Route path="/:lang/contact" element={<Contact />} />
          
          <Route path="/:lang/latest-articles" element={<LatestArticles />} />
          <Route path="/:lang/derniers-articles" element={<LatestArticles />} />
          
          {/* Catch all route maps directly back to Home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  console.log("App mounting. Wrapping in LanguageProvider and Router.");
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
        <Toaster />
      </Router>
    </LanguageProvider>
  );
}
