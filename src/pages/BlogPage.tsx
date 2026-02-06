import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ArticleCard from '../components/ArticleCard';
import CTA from '../components/CTA';
import { articles } from '../data/articles';

const BlogPage = () => {
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <>
      <SEO
        title="Research Resources & Articles"
        description="Explore our comprehensive library of peptide research articles. From beginner guides to in-depth analyses of specific peptides."
        canonicalUrl="https://purestpeptides.com/blog"
      />

      {/* Hero */}
      <Hero
        title="Research Resources"
        subtitle="In-depth articles on peptide science, research findings, and educational guides to help you understand the fascinating world of peptides."
        showCTA={false}
        backgroundVariant="minimal"
      />

      {/* Articles Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Article */}
          <div className="mb-12">
            <h2 className="font-semibold text-slate-500 text-sm uppercase tracking-wider mb-4">
              Featured Article
            </h2>
            <ArticleCard {...featuredArticle} featured />
          </div>

          {/* All Articles */}
          <div className="mb-4">
            <h2 className="font-semibold text-slate-500 text-sm uppercase tracking-wider mb-4">
              All Articles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherArticles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>

          {/* More articles coming message */}
          <div className="mt-12 text-center p-8 bg-white rounded-xl border border-slate-200">
            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="font-display text-xl text-navy-900 mb-2">
              More Articles Coming Soon
            </h3>
            <p className="text-slate-600 max-w-md mx-auto">
              We're constantly adding new research articles and educational
              content. Check back regularly for the latest peptide science.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl text-navy-900 mb-8 text-center">
            Browse by Category
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Education', 'Peptide Guides', 'Research Updates', 'Safety'].map(
              (category) => (
                <div
                  key={category}
                  className="p-6 bg-slate-50 rounded-xl text-center hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <h3 className="font-medium text-navy-900">{category}</h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {category === 'Education'
                      ? 'Foundational knowledge'
                      : category === 'Peptide Guides'
                      ? 'Deep dives on specific peptides'
                      : category === 'Research Updates'
                      ? 'Latest findings'
                      : 'Best practices'}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Need Research Peptides?"
        description="Peptide Foundry offers premium, lab-tested research peptides. Start your research with confidence."
      />
    </>
  );
};

export default BlogPage;
