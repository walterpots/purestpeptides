import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      {/* CTA Section */}
      <div className="border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Ready to Start Your Research?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Explore premium research peptides at Peptide Foundry. Lab-tested,
              verified purity, fast shipping.
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-600 to-teal-500 flex items-center justify-center">
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
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5"
                  />
                </svg>
              </div>
              <span className="font-display text-xl text-white">
                Purest<span className="text-teal-400">Peptides</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted source for peptide education and research. Empowering
              informed decisions in peptide science.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/peptides"
                  className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Peptide Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/quality"
                  className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Quality Standards
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Articles */}
          <div>
            <h3 className="font-semibold text-white mb-4">Popular Articles</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/blog/what-are-peptides"
                  className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                >
                  What Are Peptides?
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/bpc-157-guide"
                  className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                >
                  BPC-157 Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/glp-1-peptides-explained"
                  className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                >
                  GLP-1 Peptides Explained
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-white mb-4">Shop Peptides</h3>
            <p className="text-slate-400 text-sm mb-4">
              Premium research peptides available at our partner store.
            </p>
            <a
              href="https://peptidefoundry.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors text-sm font-medium"
            >
              Visit Peptide Foundry
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} PurestPeptides. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            For research and educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
