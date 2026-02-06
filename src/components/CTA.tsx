interface CTAProps {
  variant?: 'inline' | 'banner' | 'sidebar';
  title?: string;
  description?: string;
}

const CTA = ({
  variant = 'banner',
  title = 'Shop Premium Research Peptides',
  description = 'Lab-tested, verified purity. Get your research peptides from Peptide Foundry.',
}: CTAProps) => {
  if (variant === 'inline') {
    return (
      <div className="my-8 p-6 bg-gradient-to-r from-navy-50 to-teal-50 rounded-xl border border-teal-100">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-lg text-navy-900 mb-1">{title}</h3>
            <p className="text-slate-600 text-sm">{description}</p>
          </div>
          <a
            href="https://peptidefoundry.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 bg-gradient-to-r from-navy-700 to-navy-800 text-white rounded-lg font-medium hover:from-navy-800 hover:to-navy-900 transition-all shadow-md hover:shadow-lg whitespace-nowrap"
          >
            Visit Store
          </a>
        </div>
      </div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
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
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>
        <h3 className="font-display text-xl text-navy-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm mb-4">{description}</p>
        <a
          href="https://peptidefoundry.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full px-4 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-medium text-center hover:from-teal-600 hover:to-teal-700 transition-all"
        >
          Shop Now
        </a>
      </div>
    );
  }

  // Banner variant (default)
  return (
    <section className="py-16 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
          {title}
        </h2>
        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <a
          href="https://peptidefoundry.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-medium hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl"
        >
          Visit Peptide Foundry
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
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default CTA;
