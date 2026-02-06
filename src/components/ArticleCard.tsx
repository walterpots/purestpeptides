import { Link } from 'react-router-dom';

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured?: boolean;
}

const ArticleCard = ({
  slug,
  title,
  excerpt,
  category,
  readTime,
  date,
  featured = false,
}: ArticleCardProps) => {
  if (featured) {
    return (
      <Link
        to={`/blog/${slug}`}
        className="group block bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 md:p-10 text-white hover:shadow-2xl transition-all duration-300"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-medium rounded-full">
            {category}
          </span>
          <span className="text-slate-400 text-xs">Featured</span>
        </div>

        <h2 className="font-display text-2xl md:text-3xl mb-4 group-hover:text-teal-300 transition-colors">
          {title}
        </h2>

        <p className="text-slate-300 leading-relaxed mb-6 line-clamp-2">
          {excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span>{date}</span>
            <span>&middot;</span>
            <span>{readTime}</span>
          </div>
          <span className="flex items-center gap-2 text-teal-400 font-medium text-sm group-hover:gap-3 transition-all">
            Read Article
            <svg
              className="w-4 h-4"
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
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${slug}`}
      className="group block bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-teal-200 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
          {category}
        </span>
        <span className="text-slate-400 text-xs">{readTime}</span>
      </div>

      <h3 className="font-display text-xl text-navy-900 mb-2 group-hover:text-teal-700 transition-colors">
        {title}
      </h3>

      <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
        {excerpt}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <span className="text-xs text-slate-400">{date}</span>
        <span className="flex items-center gap-1.5 text-teal-600 font-medium text-sm">
          Read More
          <svg
            className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default ArticleCard;
