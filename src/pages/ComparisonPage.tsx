import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { peptides } from '../data/peptides';
import type { Peptide } from '../data/peptides';

// Popular comparison presets
const popularComparisons = [
  {
    a: 'BPC-157',
    b: 'TB-500',
    label: 'Regenerative Peptides',
    description: 'Compare the two most popular regenerative research peptides',
  },
  {
    a: 'Semaglutide',
    b: 'Tirzepatide',
    label: 'GLP-1 Agonists',
    description: 'Single vs dual incretin receptor agonists',
  },
  {
    a: 'CJC-1295',
    b: 'Ipamorelin',
    label: 'Growth Hormone Stack',
    description: 'GHRH analog vs GH secretagogue',
  },
  {
    a: 'Melanotan II',
    b: 'PT-141',
    label: 'Melanocortin Peptides',
    description: 'Compare melanocortin receptor agonists',
  },
];

// Helper to create URL-friendly slug
const toSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

// Helper to find peptide by name (case-insensitive)
const findPeptide = (name: string): Peptide | undefined => {
  const slug = toSlug(name);
  return peptides.find((p) => toSlug(p.name) === slug);
};

const ComparisonPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [peptideA, setPeptideA] = useState<Peptide | null>(null);
  const [peptideB, setPeptideB] = useState<Peptide | null>(null);

  // Initialize from URL params
  useEffect(() => {
    const a = searchParams.get('a');
    const b = searchParams.get('b');
    if (a) setPeptideA(findPeptide(a) || null);
    if (b) setPeptideB(findPeptide(b) || null);
  }, [searchParams]);

  // Update URL when selections change
  const updateComparison = (a: Peptide | null, b: Peptide | null) => {
    const params = new URLSearchParams();
    if (a) params.set('a', toSlug(a.name));
    if (b) params.set('b', toSlug(b.name));
    setSearchParams(params);
    setPeptideA(a);
    setPeptideB(b);
  };

  const handleSelectA = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = peptides.find((p) => p.name === e.target.value) || null;
    updateComparison(selected, peptideB);
  };

  const handleSelectB = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = peptides.find((p) => p.name === e.target.value) || null;
    updateComparison(peptideA, selected);
  };

  const handlePresetClick = (a: string, b: string) => {
    const pepA = findPeptide(a) || null;
    const pepB = findPeptide(b) || null;
    updateComparison(pepA, pepB);
  };

  const swapPeptides = () => {
    updateComparison(peptideB, peptideA);
  };

  // SEO title based on selection
  const pageTitle = useMemo(() => {
    if (peptideA && peptideB) {
      return `${peptideA.name} vs ${peptideB.name} Comparison | PurestPeptides`;
    }
    return 'Peptide Comparison Tool | Compare Research Peptides | PurestPeptides';
  }, [peptideA, peptideB]);

  const pageDescription = useMemo(() => {
    if (peptideA && peptideB) {
      return `Compare ${peptideA.name} and ${peptideB.name} side by side. View research applications, categories, and key differences between these peptides.`;
    }
    return 'Compare research peptides side by side. Our interactive comparison tool helps researchers understand the differences between BPC-157, TB-500, Semaglutide, Tirzepatide, and more.';
  }, [peptideA, peptideB]);

  // Check if both peptides are in the same category
  const sameCategory = peptideA && peptideB && peptideA.category === peptideB.category;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <link rel="canonical" href={`https://purestpeptides.com/compare${searchParams.toString() ? `?${searchParams.toString()}` : ''}`} />
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-20 md:py-28 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="compare-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#compare-grid)" />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 rounded-full text-teal-300 text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Research Tool
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Peptide <span className="text-teal-400">Comparison</span> Tool
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Compare research peptides side by side. Understand the differences in categories, 
                research applications, and key characteristics.
              </p>
            </div>
          </div>
        </section>

        {/* Popular Comparisons */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold text-navy-900 mb-4">Popular Comparisons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularComparisons.map((preset) => (
                <button
                  key={`${preset.a}-${preset.b}`}
                  onClick={() => handlePresetClick(preset.a, preset.b)}
                  className={`p-4 rounded-xl border-2 text-left transition-all hover:shadow-md ${
                    peptideA?.name === preset.a && peptideB?.name === preset.b
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-slate-200 hover:border-teal-300 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-navy-900">{preset.a}</span>
                    <span className="text-slate-400">vs</span>
                    <span className="text-sm font-semibold text-navy-900">{preset.b}</span>
                  </div>
                  <div className="text-xs font-medium text-teal-600 mb-1">{preset.label}</div>
                  <div className="text-xs text-slate-500">{preset.description}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Selectors */}
        <section className="py-8 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {/* Peptide A Selector */}
              <div className="w-full md:w-64">
                <label htmlFor="peptide-a" className="block text-sm font-medium text-slate-700 mb-2">
                  First Peptide
                </label>
                <select
                  id="peptide-a"
                  value={peptideA?.name || ''}
                  onChange={handleSelectA}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-navy-900 font-medium focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="">Select a peptide...</option>
                  {peptides.map((p) => (
                    <option key={p.name} value={p.name} disabled={p.name === peptideB?.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Swap Button */}
              <button
                onClick={swapPeptides}
                disabled={!peptideA || !peptideB}
                className="p-3 rounded-full bg-navy-100 text-navy-600 hover:bg-navy-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors mt-6 md:mt-6"
                title="Swap peptides"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </button>

              {/* Peptide B Selector */}
              <div className="w-full md:w-64">
                <label htmlFor="peptide-b" className="block text-sm font-medium text-slate-700 mb-2">
                  Second Peptide
                </label>
                <select
                  id="peptide-b"
                  value={peptideB?.name || ''}
                  onChange={handleSelectB}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-navy-900 font-medium focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="">Select a peptide...</option>
                  {peptides.map((p) => (
                    <option key={p.name} value={p.name} disabled={p.name === peptideA?.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Results */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {peptideA && peptideB ? (
              <div className="space-y-8">
                {/* Category Match Indicator */}
                {sameCategory && (
                  <div className="flex items-center justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Same Category: {peptideA.category}
                    </div>
                  </div>
                )}

                {/* Side by Side Comparison */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Peptide A Card */}
                  <PeptideCard peptide={peptideA} label="A" />

                  {/* Peptide B Card */}
                  <PeptideCard peptide={peptideB} label="B" />
                </div>

                {/* Benefits Comparison Table */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="px-6 py-4 bg-navy-50 border-b border-navy-100">
                    <h3 className="text-lg font-semibold text-navy-900">Research Applications Comparison</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-navy-800 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-teal-500 text-white text-xs flex items-center justify-center font-bold">A</span>
                          {peptideA.name}
                        </h4>
                        <ul className="space-y-2">
                          {peptideA.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600">
                              <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                              </svg>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-800 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-navy-600 text-white text-xs flex items-center justify-center font-bold">B</span>
                          {peptideB.name}
                        </h4>
                        <ul className="space-y-2">
                          {peptideB.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600">
                              <svg className="w-5 h-5 text-navy-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                              </svg>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-display text-white mb-4">
                    Ready to Start Your Research?
                  </h3>
                  <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                    Get premium quality {peptideA.name} and {peptideB.name} from Peptide Foundry. 
                    Lab-tested, verified purity, fast shipping.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={peptideA.shopUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-xl font-medium hover:bg-teal-600 transition-colors"
                    >
                      Shop {peptideA.name}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      href={peptideB.shopUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy-900 rounded-xl font-medium hover:bg-slate-100 transition-colors"
                    >
                      Shop {peptideB.name}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              /* Empty State */
              <div className="text-center py-16">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-100 flex items-center justify-center">
                  <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display text-navy-900 mb-3">
                  Select Two Peptides to Compare
                </h3>
                <p className="text-slate-600 max-w-lg mx-auto mb-6">
                  Choose from our selection of research peptides above, or click one of the popular 
                  comparison presets to get started.
                </p>
                <Link
                  to="/peptides"
                  className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700"
                >
                  View all peptides
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Educational Note */}
        <section className="py-12 bg-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-2">For Research Use Only</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    All peptides available through Peptide Foundry are sold strictly for research, 
                    laboratory, and educational purposes. They are not intended for human consumption, 
                    therapeutic use, or any other unauthorized applications. Researchers are responsible 
                    for ensuring compliance with all applicable regulations and institutional guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

// Peptide Card Component
const PeptideCard = ({ peptide, label }: { peptide: Peptide; label: 'A' | 'B' }) => {
  const bgColor = label === 'A' ? 'bg-teal-500' : 'bg-navy-600';
  const borderColor = label === 'A' ? 'border-teal-200' : 'border-navy-200';
  const headerBg = label === 'A' ? 'bg-teal-50' : 'bg-navy-50';

  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${borderColor}`}>
      <div className={`px-6 py-4 ${headerBg} flex items-center gap-3`}>
        <span className={`w-8 h-8 rounded-full ${bgColor} text-white text-sm flex items-center justify-center font-bold`}>
          {label}
        </span>
        <div>
          <h3 className="text-xl font-display text-navy-900">{peptide.name}</h3>
          <span className="text-sm font-medium text-slate-600">{peptide.category}</span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-slate-600 leading-relaxed mb-6">{peptide.description}</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-navy-800 uppercase tracking-wide mb-2">
              Category
            </h4>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
              {peptide.category}
            </span>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-navy-800 uppercase tracking-wide mb-2">
              Research Applications
            </h4>
            <p className="text-sm text-slate-500">
              {peptide.benefits.length} key research areas
            </p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-200">
          <a
            href={peptide.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
              label === 'A' 
                ? 'bg-teal-500 hover:bg-teal-600' 
                : 'bg-navy-600 hover:bg-navy-700'
            } text-white text-sm font-medium transition-colors`}
          >
            Shop {peptide.name}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage;
