import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getPeptideBySlug, peptides } from '../data/peptides';
import { getArticleBySlug } from '../data/articles';

// Icon components
const BeakerIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
  </svg>
);

const DocumentIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

const CubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArchiveIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
  </svg>
);

const MagnifyingGlassIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

export default function PeptideDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const peptide = slug ? getPeptideBySlug(slug) : undefined;

  if (!peptide) {
    return <Navigate to="/peptides" replace />;
  }

  const relatedArticle = peptide.articleSlug
    ? getArticleBySlug(peptide.articleSlug)
    : undefined;

  // Get related peptides from same category
  const relatedPeptides = peptides
    .filter((p) => p.category === peptide.category && p.slug !== peptide.slug)
    .slice(0, 3);

  const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
    Regenerative: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      border: 'border-emerald-200',
    },
    'GLP-1 Agonist': {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
    },
    'Dual GLP-1/GIP Agonist': {
      bg: 'bg-indigo-50',
      text: 'text-indigo-700',
      border: 'border-indigo-200',
    },
    'Growth Hormone': {
      bg: 'bg-purple-50',
      text: 'text-purple-700',
      border: 'border-purple-200',
    },
    Melanocortin: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200',
    },
  };

  const colors = categoryColors[peptide.category] || {
    bg: 'bg-gray-50',
    text: 'text-gray-700',
    border: 'border-gray-200',
  };

  return (
    <>
      <Helmet>
        <title>{peptide.name} Research Peptide | PurestPeptides</title>
        <meta
          name="description"
          content={`${peptide.name} - ${peptide.description} High-purity research peptide with third-party testing and COA.`}
        />
        <meta
          name="keywords"
          content={`${peptide.name}, ${peptide.category}, research peptide, peptide research, ${peptide.name} peptide`}
        />
        <link rel="canonical" href={`https://purestpeptides.com/peptides/${peptide.slug}`} />
        <meta property="og:title" content={`${peptide.name} Research Peptide | PurestPeptides`} />
        <meta
          property="og:description"
          content={peptide.description}
        />
        <meta property="og:url" content={`https://purestpeptides.com/peptides/${peptide.slug}`} />
        <meta property="og:type" content="product" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-slate-500 hover:text-slate-700">
                Home
              </Link>
              <ChevronRightIcon className="h-4 w-4 text-slate-400" />
              <Link to="/peptides" className="text-slate-500 hover:text-slate-700">
                Peptides
              </Link>
              <ChevronRightIcon className="h-4 w-4 text-slate-400" />
              <span className="text-slate-900 font-medium">{peptide.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <Link
              to="/peptides"
              className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-6 group"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to All Peptides
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Peptide Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text} border ${colors.border}`}
                  >
                    <CubeIcon className="h-4 w-4 mr-1.5" />
                    {peptide.category}
                  </span>
                </div>

                <h1 className="font-display text-4xl lg:text-5xl text-navy-900 mb-4">
                  {peptide.name}
                </h1>

                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  {peptide.description}
                </p>

                {/* Key Benefits Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {peptide.benefits.slice(0, 4).map((benefit, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1.5 bg-teal-50 text-teal-700 rounded-full text-sm font-medium"
                    >
                      <CheckCircleIcon className="h-4 w-4 mr-1.5" />
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors shadow-sm"
                  >
                    <BeakerIcon className="h-5 w-5 mr-2" />
                    Request Quote
                  </Link>
                  <Link
                    to="/quality"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-700 font-semibold rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors"
                  >
                    <DocumentIcon className="h-5 w-5 mr-2" />
                    View COA Sample
                  </Link>
                </div>
              </div>

              {/* Right: Molecular Info Card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-navy-800 to-navy-900 px-6 py-4">
                  <h2 className="text-lg font-semibold text-white flex items-center">
                    <InfoIcon className="h-5 w-5 mr-2" />
                    Molecular Information
                  </h2>
                </div>
                <div className="p-6 space-y-4">
                  {peptide.molecularInfo.sequence && (
                    <div className="flex items-start">
                      <div className="shrink-0 w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                        <CubeIcon className="h-4 w-4 text-teal-600" />
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-slate-500">Sequence</dt>
                        <dd className="text-sm text-slate-900 font-mono mt-0.5 break-all">
                          {peptide.molecularInfo.sequence}
                        </dd>
                      </div>
                    </div>
                  )}
                  {peptide.molecularInfo.molecularWeight && (
                    <div className="flex items-start">
                      <div className="shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                        <SparklesIcon className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-slate-500">Molecular Weight</dt>
                        <dd className="text-sm text-slate-900 mt-0.5">
                          {peptide.molecularInfo.molecularWeight}
                        </dd>
                      </div>
                    </div>
                  )}
                  {peptide.molecularInfo.halfLife && (
                    <div className="flex items-start">
                      <div className="shrink-0 w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center mr-3">
                        <ClockIcon className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-slate-500">Half-Life</dt>
                        <dd className="text-sm text-slate-900 mt-0.5">
                          {peptide.molecularInfo.halfLife}
                        </dd>
                      </div>
                    </div>
                  )}
                  {peptide.molecularInfo.storage && (
                    <div className="flex items-start">
                      <div className="shrink-0 w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                        <ArchiveIcon className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-slate-500">Storage</dt>
                        <dd className="text-sm text-slate-900 mt-0.5">
                          {peptide.molecularInfo.storage}
                        </dd>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl text-navy-900 mb-6 flex items-center">
                <MagnifyingGlassIcon className="h-6 w-6 mr-3 text-teal-600" />
                Research Overview
              </h2>
              <div className="prose prose-lg text-slate-600">
                <p>{peptide.longDescription}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mechanism of Action */}
        <section className="py-16 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl text-navy-900 mb-6 flex items-center">
                <BeakerIcon className="h-6 w-6 mr-3 text-teal-600" />
                Mechanism of Action
              </h2>
              <div className="prose prose-lg text-slate-600">
                <p>{peptide.mechanismOfAction}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Highlights */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl text-navy-900 mb-8 flex items-center">
              <SparklesIcon className="h-6 w-6 mr-3 text-teal-600" />
              Key Research Highlights
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {peptide.researchHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl border border-teal-100"
                >
                  <div className="shrink-0 w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircleIcon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-slate-700 font-medium">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Article */}
        {relatedArticle && (
          <section className="py-16 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-2xl text-navy-900 mb-8">
                Learn More About {peptide.name}
              </h2>
              <Link
                to={`/blog/${relatedArticle.slug}`}
                className="block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <span className="bg-teal-100 text-teal-700 px-2.5 py-0.5 rounded-full font-medium">
                      {relatedArticle.category}
                    </span>
                    <span>•</span>
                    <span>{relatedArticle.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-teal-600 transition-colors mb-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-slate-600">{relatedArticle.excerpt}</p>
                  <span className="inline-flex items-center text-teal-600 font-medium mt-4 group-hover:translate-x-1 transition-transform">
                    Read Article
                    <ChevronRightIcon className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Related Peptides */}
        {relatedPeptides.length > 0 && (
          <section className="py-16 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-2xl text-navy-900 mb-8">
                Related {peptide.category} Peptides
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPeptides.map((related) => {
                  const relatedColors = categoryColors[related.category] || {
                    bg: 'bg-slate-50',
                    text: 'text-slate-700',
                    border: 'border-slate-200',
                  };
                  return (
                    <Link
                      key={related.slug}
                      to={`/peptides/${related.slug}`}
                      className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow group"
                    >
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${relatedColors.bg} ${relatedColors.text} border ${relatedColors.border} mb-3`}
                      >
                        {related.category}
                      </span>
                      <h3 className="text-lg font-bold text-navy-900 group-hover:text-teal-600 transition-colors mb-2">
                        {related.name}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-2">
                        {related.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Quality Assurance Banner */}
        <section className="py-16 bg-gradient-to-r from-navy-800 to-navy-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-display text-2xl text-white mb-4">
                Third-Party Tested. Verified Purity.
              </h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Every batch of {peptide.name} is tested by independent laboratories using HPLC
                and mass spectrometry. Certificates of Analysis available for all products.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/quality"
                  className="inline-flex items-center px-6 py-3 bg-white text-navy-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <DocumentIcon className="h-5 w-5 mr-2" />
                  Our Quality Standards
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Request a Quote
                  <ChevronRightIcon className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Research Disclaimer */}
        <section className="py-8 bg-amber-50 border-t border-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start">
              <InfoIcon className="h-6 w-6 text-amber-600 shrink-0 mr-3 mt-0.5" />
              <div className="text-sm text-amber-800">
                <p className="font-medium mb-1">Research Use Only</p>
                <p>
                  This product is intended for laboratory research purposes only. Not for
                  human or veterinary use. By purchasing, you agree to use this product
                  solely for research applications in accordance with all applicable laws
                  and regulations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
