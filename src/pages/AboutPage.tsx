import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Purest Peptides and our mission to provide comprehensive, science-based peptide education for researchers and enthusiasts."
        canonicalUrl="https://purestpeptides.com/about"
      />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-navy-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 text-sm font-medium rounded-full mb-4">
              About Purest Peptides
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">
              Empowering Peptide Education
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We believe in making peptide science accessible. Our mission is to
              provide accurate, comprehensive educational resources for
              researchers, students, and anyone curious about this fascinating
              field.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-6">
                Our Mission
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Purest Peptides was founded with a simple goal: to bridge the gap
                between complex peptide science and accessible education. We
                recognized that while peptide research was advancing rapidly, many
                people lacked access to clear, accurate information about these
                important molecules.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our team compiles research findings, explains mechanisms of
                action, and presents information in a way that's both scientifically
                rigorous and easy to understand. Whether you're a researcher looking
                for quick reference material or a student learning about peptides
                for the first time, our resources are designed to help.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We're committed to providing unbiased, evidence-based content that
                helps our readers make informed decisions about their research and
                education.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-slate-100 to-teal-50 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-navy-700 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-navy-900 mb-2">
                    Science-Based Education
                  </h3>
                  <p className="text-slate-600">
                    Every article backed by research
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">
              Our Values
            </h2>
            <p className="text-slate-600">
              These principles guide everything we do at Purest Peptides.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-navy-900 mb-3">
                Scientific Accuracy
              </h3>
              <p className="text-slate-600">
                We prioritize accuracy above all else. Our content is based on
                peer-reviewed research and current scientific understanding. When
                evidence is limited, we say so clearly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-navy-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-navy-900 mb-3">
                Accessibility
              </h3>
              <p className="text-slate-600">
                Complex science shouldn't mean complicated explanations. We break
                down difficult concepts into understandable terms without
                sacrificing accuracy or depth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-navy-900 mb-3">
                Integrity
              </h3>
              <p className="text-slate-600">
                We maintain editorial independence and clearly disclose any
                commercial relationships. Our educational content is never
                influenced by commercial interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 md:p-12 text-center">
            <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 text-sm font-medium rounded-full mb-4">
              Our Partner
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Peptide Foundry
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
              For researchers seeking high-quality peptides, we recommend our
              partner Peptide Foundry. They provide lab-tested, verified purity
              research peptides with comprehensive documentation.
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
        </div>
      </section>

      {/* Contact/Connect */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">
            Start Exploring
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Ready to learn more about peptides? Explore our educational resources
            and discover the science behind these remarkable molecules.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/peptides"
              className="px-8 py-4 bg-navy-900 text-white rounded-xl font-medium hover:bg-navy-800 transition-colors"
            >
              Browse Peptides
            </Link>
            <Link
              to="/blog"
              className="px-8 py-4 bg-white text-navy-900 rounded-xl font-medium border border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Read Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
