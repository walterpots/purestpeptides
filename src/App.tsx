import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';
import PeptidesPage from './pages/PeptidesPage';
import PeptideDetailPage from './pages/PeptideDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import QualityPage from './pages/QualityPage';
import COALookupPage from './pages/COALookupPage';
import ComparisonPage from './pages/ComparisonPage';
import ShippingPage from './pages/ShippingPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import FAQPage from './pages/FAQPage';
import ReconstitutionCalculatorPage from './pages/ReconstitutionCalculatorPage';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<ArticlePage />} />
              <Route path="/peptides" element={<PeptidesPage />} />
              <Route path="/peptides/:slug" element={<PeptideDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/quality" element={<QualityPage />} />
              <Route path="/coa-lookup" element={<COALookupPage />} />
              <Route path="/compare" element={<ComparisonPage />} />
              <Route path="/shipping" element={<ShippingPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/calculator" element={<ReconstitutionCalculatorPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
