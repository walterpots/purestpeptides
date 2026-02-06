import { Link } from 'react-router-dom';

interface PeptideCardProps {
  name: string;
  category: string;
  description: string;
  benefits: string[];
  articleSlug?: string;
  shopUrl?: string;
}

const PeptideCard = ({
  name,
  category,
  description,
  benefits,
  articleSlug,
  shopUrl,
}: PeptideCardProps) => {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-teal-200 transition-all duration-300">
      {/* Category Badge */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full">
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl text-navy-900 mb-3 group-hover:text-teal-700 transition-colors">
        {name}
      </h3>

      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Benefits */}
      <div className="mb-6">
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
          Key Research Areas
        </h4>
        <ul className="space-y-1.5">
          {benefits.slice(0, 3).map((benefit, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
              <svg
                className="w-4 h-4 text-teal-500 mt-0.5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4 border-t border-slate-100">
        {articleSlug && (
          <Link
            to={`/blog/${articleSlug}`}
            className="flex-1 px-4 py-2.5 text-center text-sm font-medium text-navy-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
          >
            Learn More
          </Link>
        )}
        {shopUrl && (
          <a
            href={shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2.5 text-center text-sm font-medium text-white bg-gradient-to-r from-navy-700 to-navy-800 rounded-lg hover:from-navy-800 hover:to-navy-900 transition-all"
          >
            Shop Now
          </a>
        )}
      </div>
    </div>
  );
};

export default PeptideCard;
