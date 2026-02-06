import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ArticleCard from '../components/ArticleCard';
import CTA from '../components/CTA';
import { articles } from '../data/articles';
import { peptides } from '../data/peptides';

const HomePage = () => {
  const featuredPeptides = peptides.slice(0, 4);
  const recentArticles = articles.slice(0, 3);

  return (
    <>
      <SEO
        title="Your Guide to Research Peptides"
        description="PurestPeptides is your comprehensive resource for peptide education. Learn about research peptides, their mechanisms, and the latest scientific findings."
        canonicalUrl="https://purestpeptides.com"
      />

      {/* Hero Section */}
      <Hero
        title="Your Guide to Research Peptides"
        subtitle="Comprehensive, science-based education on peptides. Explore mechanisms of action, research applications, and stay informed about the latest developments in peptide science."
      />

      {/* What Are Peptides Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full mb-4">
                Understanding Peptides
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-6">
                The Building Blocks of Life
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Peptides are short chains of amino acids that serve as signaling
                molecules throughout the body. These remarkable compounds play
                crucial roles in virtually every biological process, from
                metabolism and tissue repair to immune function and hormone
                regulation.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Research into peptides has exploded in recent years, revealing
                their potential applications in regenerative medicine, metabolic
                health, and beyond. Our educational resources help you
                understand the science behind these fascinating molecules.
              </p>
              <Link
                to="/blog/what-are-peptides"
                className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 transition-colors"
              >
                Read Our Complete Guide
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-navy-50 to-teal-50 rounded-3xl p-8 relative overflow-hidden">
                {/* Decorative molecular structure */}
                <svg
                  className="w-full h-full text-navy-200"
                  viewBox="0 0 400 400"
                  fill="none"
                >
                  {/* Amino acid chain representation */}
                  <circle cx="80" cy="200" r="30" fill="currentColor" className="text-teal-400" />
                  <circle cx="160" cy="140" r="25" fill="currentColor" className="text-navy-400" />
                  <circle cx="240" cy="180" r="28" fill="currentColor" className="text-teal-500" />
                  <circle cx="320" cy="140" r="22" fill="currentColor" className="text-navy-300" />
                  <circle cx="200" cy="260" r="32" fill="currentColor" className="text-teal-300" />
                  <circle cx="280" cy="300" r="26" fill="currentColor" className="text-navy-400" />
                  <circle cx="120" cy="300" r="24" fill="currentColor" className="text-teal-400" />

                  {/* Bonds */}
                  <line x1="80" y1="200" x2="160" y2="140" stroke="currentColor" strokeWidth="3" className="text-slate-300" />
                  <line x1="160" y1="140" x2="240" y2="180" stroke="currentColor" strokeWidth="3" className="text-slate-300" />
                  <line x1="240" y1="180" x2="320" y2="140" stroke="currentColor" strokeWidth="3" className="text-slate-300" />
                  <line x1="240" y1="180" x2="200" y2="260" stroke="currentColor" strokeWidth="3" className="text-slate-300" />
                  <line x1="200" y1="260" x2="280" y2="300" stroke="currentColor" strokeWidth="3" className="text-slate-300" />
                  <line x1="200" y1="260" x2="120" y2="300" stroke="currentColor" strokeWidth="3" className="text-slate-300" />
                  <line x1="80" y1="200" x2="120" y2="300" stroke="currentColor" strokeWidth="3" className="text-slate-300" />
                </svg>

                {/* Labels */}
                <div className="absolute top-8 left-8">
                  <span className="text-xs font-medium text-navy-600 bg-white/80 px-2 py-1 rounded">
                    Amino Acids
                  </span>
                </div>
                <div className="absolute bottom-8 right-8">
                  <span className="text-xs font-medium text-teal-600 bg-white/80 px-2 py-1 rounded">
                    Peptide Bonds
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Peptides Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 bg-navy-100 text-navy-700 text-sm font-medium rounded-full mb-4">
              Popular Research Peptides
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">
              Explore Key Peptides
            </h2>
            <p className="text-slate-600">
              Discover the most studied peptides in research, from regenerative
              compounds to metabolic regulators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPeptides.map((peptide) => (
              <div
                key={peptide.name}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-teal-200 transition-all group"
              >
                <span className="inline-block px-2.5 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full mb-3">
                  {peptide.category}
                </span>
                <h3 className="font-display text-xl text-navy-900 mb-2 group-hover:text-teal-700 transition-colors">
                  {peptide.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {peptide.description}
                </p>
                <div className="flex gap-2">
                  {peptide.articleSlug && (
                    <Link
                      to={`/blog/${peptide.articleSlug}`}
                      className="text-sm font-medium text-navy-600 hover:text-navy-800 transition-colors"
                    >
                      Learn More
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/peptides"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white rounded-lg font-medium hover:bg-navy-800 transition-colors"
            >
              View All Peptides
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Shop CTA */}
      <CTA
        title="Shop Premium Research Peptides"
        description="Ready to start your research? Visit Peptide Foundry for lab-tested, verified purity peptides with fast shipping."
      />

      {/* Recent Articles */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full mb-4">
                Latest Research
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-900">
                Educational Resources
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 transition-colors"
            >
              View All Articles
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>

          {/* Featured Article */}
          <div className="mb-8">
            <ArticleCard {...recentArticles[0]} featured />
          </div>

          {/* Other Articles */}
          <div className="grid md:grid-cols-2 gap-6">
            {recentArticles.slice(1).map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-display text-navy-900 mb-1">50+</div>
              <div className="text-sm text-slate-600">Research Articles</div>
            </div>
            <div>
              <div className="text-3xl font-display text-navy-900 mb-1">20+</div>
              <div className="text-sm text-slate-600">Peptides Covered</div>
            </div>
            <div>
              <div className="text-3xl font-display text-navy-900 mb-1">100%</div>
              <div className="text-sm text-slate-600">Science-Based</div>
            </div>
            <div>
              <div className="text-3xl font-display text-navy-900 mb-1">Free</div>
              <div className="text-sm text-slate-600">Educational Access</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
