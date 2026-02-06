import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PeptideCard from '../components/PeptideCard';
import CTA from '../components/CTA';
import { peptides } from '../data/peptides';

const PeptidesPage = () => {
  // Group peptides by category
  const categories = peptides.reduce((acc, peptide) => {
    if (!acc[peptide.category]) {
      acc[peptide.category] = [];
    }
    acc[peptide.category].push(peptide);
    return acc;
  }, {} as Record<string, typeof peptides>);

  return (
    <>
      <SEO
        title="Peptide Research Guide"
        description="Explore our comprehensive guide to research peptides. Learn about BPC-157, Semaglutide, Tirzepatide, and more. Understand mechanisms, research applications, and key findings."
        canonicalUrl="https://purestpeptides.com/peptides"
      />

      {/* Hero */}
      <Hero
        title="Research Peptide Guide"
        subtitle="Comprehensive information on the most studied peptides in biomedical research. Explore mechanisms of action, research applications, and current scientific findings."
        showCTA={false}
        backgroundVariant="minimal"
      />

      {/* Overview Section */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl text-navy-900 mb-4">
              Understanding Research Peptides
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Research peptides are synthetic versions of naturally occurring
              peptides used in scientific research to study biological processes,
              develop new treatments, and understand disease mechanisms. These
              compounds are strictly for laboratory and research purposes.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Below you'll find information on the most commonly studied peptides,
              organized by their primary research applications. Each peptide
              includes links to in-depth articles and verified sources for
              research-grade compounds.
            </p>
          </div>
        </div>
      </section>

      {/* Peptides by Category */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(categories).map(([category, categoryPeptides]) => (
            <div key={category} className="mb-16 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-display text-2xl text-navy-900">
                  {category}
                </h2>
                <div className="flex-1 h-px bg-slate-300" />
                <span className="text-sm text-slate-500">
                  {categoryPeptides.length} peptide
                  {categoryPeptides.length > 1 ? 's' : ''}
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryPeptides.map((peptide) => (
                  <PeptideCard key={peptide.name} {...peptide} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Guidelines */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl text-navy-900 mb-4">
              Research Best Practices
            </h2>
            <p className="text-slate-600">
              When working with research peptides, following proper protocols
              ensures reliable, reproducible results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">
                Verify Purity
              </h3>
              <p className="text-slate-600 text-sm">
                Always obtain certificates of analysis and verify peptide purity
                before use in research applications.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-navy-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">
                Proper Storage
              </h3>
              <p className="text-slate-600 text-sm">
                Store lyophilized peptides at recommended temperatures and protect
                from light and moisture to maintain stability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">
                Document Everything
              </h3>
              <p className="text-slate-600 text-sm">
                Maintain detailed records of reconstitution, storage conditions,
                and experimental protocols for reproducibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200">
            <div className="shrink-0">
              <svg
                className="w-6 h-6 text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-navy-900 mb-1">
                Research Use Only
              </h3>
              <p className="text-slate-600 text-sm">
                The peptides described on this website are for research and
                educational purposes only. They are not intended for human
                consumption. Always consult relevant regulations and guidelines
                for your jurisdiction before conducting research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Source Your Research Peptides"
        description="Peptide Foundry provides verified, high-purity research peptides with full documentation. Start your research with confidence."
      />
    </>
  );
};

export default PeptidesPage;
