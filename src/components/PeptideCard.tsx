import { Link } from 'react-router-dom';

interface PeptideCardProps {
  slug: string;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  articleSlug?: string;
}

const PeptideCard = ({
  slug,
  name,
  category,
  description,
  benefits,
  articleSlug,
}: PeptideCardProps) => {
  return (
    <Link
      to={`/peptides/${slug}`}
      className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-teal-200 transition-all duration-300 block"
    >
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

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <span className="text-sm font-medium text-teal-600 group-hover:text-teal-700 transition-colors flex items-center gap-1.5">
          View Details
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
        {articleSlug && (
          <span className="text-xs text-slate-500">
            Article available
          </span>
        )}
      </div>
    </Link>
  );
};

export default PeptideCard;
