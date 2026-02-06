import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import TableOfContents from '../components/TableOfContents';
import CTA from '../components/CTA';
import ArticleCard from '../components/ArticleCard';
import { getArticleBySlug, articles } from '../data/articles';

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // Get related articles (excluding current)
  const relatedArticles = articles
    .filter((a) => a.slug !== slug)
    .slice(0, 2);

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        canonicalUrl={`https://purestpeptides.com/blog/${article.slug}`}
        article={{
          publishedTime: article.publishedTime,
          modifiedTime: article.modifiedTime,
          author: 'Purest Peptides',
          tags: article.tags,
        }}
      />

      {/* Article Header */}
      <header className="pt-24 md:pt-32 pb-12 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link to="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-teal-600 transition-colors">
              Resources
            </Link>
            <span>/</span>
            <span className="text-slate-700">{article.category}</span>
          </nav>

          {/* Category Badge */}
          <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full mb-4">
            {article.category}
          </span>

          {/* Title */}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy-900 leading-tight mb-6">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-slate-600">
            <span>{article.date}</span>
            <span className="w-1 h-1 bg-slate-400 rounded-full" />
            <span>{article.readTime}</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sidebar - TOC */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24">
                <TableOfContents items={article.toc} />

                {/* Sidebar CTA */}
                <div className="mt-8">
                  <CTA
                    variant="sidebar"
                    title="Shop This Peptide"
                    description="Get premium, lab-tested peptides for your research."
                  />
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-9 order-1 lg:order-2">
              {/* Excerpt */}
              <p className="text-xl text-slate-600 leading-relaxed mb-8 pb-8 border-b border-slate-200">
                {article.excerpt}
              </p>

              {/* Article Body */}
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Inline CTA */}
              <CTA
                variant="inline"
                title="Ready for Research?"
                description="Shop verified, lab-tested peptides at Peptide Foundry."
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author/Source */}
              <div className="mt-8 p-6 bg-slate-50 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy-700 to-teal-500 rounded-xl flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-900">
                      Purest Peptides Research Team
                    </h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Our articles are written and reviewed by experts in peptide
                      science. We strive to provide accurate, up-to-date
                      information based on current research.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl text-navy-900 mb-8">
            Continue Reading
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedArticles.map((relatedArticle) => (
              <ArticleCard key={relatedArticle.slug} {...relatedArticle} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTA />
    </>
  );
};

export default ArticlePage;
