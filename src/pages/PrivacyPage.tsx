import SEO from '../components/SEO';

const PrivacyPage = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn how Purest Peptides collects, uses, and protects your personal information. Our commitment to your privacy and data security."
        canonicalUrl="https://purestpeptides.com/privacy"
      />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-navy-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 text-sm font-medium rounded-full mb-4">
              Legal
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect,
              use, and protect your information.
            </p>
            <p className="text-sm text-slate-400 mt-4">
              Last updated: February 11, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-slate-600 leading-relaxed">
              Purest Peptides ("we," "our," or "us") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website
              purestpeptides.com (the "Site") or make a purchase through our
              partner, Peptide Foundry. Please read this privacy policy carefully.
              By using the Site, you agree to the collection and use of
              information in accordance with this policy.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-teal-600"
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
              <h2 className="font-display text-2xl md:text-3xl text-navy-900">
                Information We Collect
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <h3 className="font-semibold text-navy-900 text-lg">
                Information You Provide to Us
              </h3>
              <p>
                We may collect information you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Contact Information:</strong> Name, email address, phone
                  number, and mailing address when you contact us or sign up for
                  our newsletter
                </li>
                <li>
                  <strong>Account Information:</strong> Username, password, and
                  account preferences if you create an account
                </li>
                <li>
                  <strong>Communication Data:</strong> Any information you provide
                  when you contact us through our contact form, email, or other
                  communication channels
                </li>
                <li>
                  <strong>Research Verification:</strong> Professional credentials,
                  institutional affiliation, and research purpose when required for
                  verification
                </li>
              </ul>

              <h3 className="font-semibold text-navy-900 text-lg">
                Information Collected Automatically
              </h3>
              <p>
                When you visit our Site, we may automatically collect certain
                information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Device Information:</strong> IP address, browser type,
                  operating system, device identifiers, and mobile network
                  information
                </li>
                <li>
                  <strong>Usage Information:</strong> Pages viewed, links clicked,
                  referring URLs, and browsing patterns
                </li>
                <li>
                  <strong>Location Information:</strong> General geographic
                  location based on IP address
                </li>
                <li>
                  <strong>Cookies and Similar Technologies:</strong> We use cookies
                  and similar tracking technologies to collect and track
                  information and to improve our Site
                </li>
              </ul>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-navy-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-navy-900">
                How We Use Your Information
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our Site and services</li>
                <li>
                  Respond to your comments, questions, and customer service
                  requests
                </li>
                <li>
                  Send you newsletters, educational content, and marketing
                  communications (with your consent)
                </li>
                <li>
                  Process and verify researcher credentials for product access
                </li>
                <li>
                  Monitor and analyze trends, usage, and activities on our Site
                </li>
                <li>
                  Detect, investigate, and prevent fraudulent transactions and
                  other illegal activities
                </li>
                <li>
                  Personalize and improve your experience on our Site
                </li>
                <li>
                  Comply with legal obligations and enforce our terms and policies
                </li>
              </ul>
            </div>
          </div>

          {/* Cookies */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
                  />
                </svg>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-navy-900">
                Cookies & Tracking Technologies
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                We use cookies and similar tracking technologies to track activity
                on our Site and store certain information. Tracking technologies
                used include beacons, tags, and scripts to collect and track
                information and to improve and analyze our Site.
              </p>

              <h3 className="font-semibold text-navy-900 text-lg">
                Types of Cookies We Use
              </h3>
              <div className="bg-slate-50 rounded-2xl p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-navy-900">Essential Cookies</h4>
                  <p className="text-sm">
                    Required for the Site to function properly. Cannot be disabled.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900">Analytics Cookies</h4>
                  <p className="text-sm">
                    Help us understand how visitors interact with our Site by
                    collecting and reporting information anonymously.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900">
                    Functional Cookies
                  </h4>
                  <p className="text-sm">
                    Enable enhanced functionality and personalization, such as
                    remembering your preferences.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900">Marketing Cookies</h4>
                  <p className="text-sm">
                    Used to track visitors across websites to display relevant
                    advertisements.
                  </p>
                </div>
              </div>

              <p>
                You can instruct your browser to refuse all cookies or to indicate
                when a cookie is being sent. However, if you do not accept cookies,
                you may not be able to use some portions of our Site.
              </p>
            </div>
          </div>

          {/* Sharing Information */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-navy-900">
                Sharing Your Information
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>We may share your information in the following situations:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>With Service Providers:</strong> We may share your
                  information with third-party service providers who perform
                  services on our behalf, such as payment processing, email
                  delivery, hosting, and analytics.
                </li>
                <li>
                  <strong>With Peptide Foundry:</strong> When you make a purchase,
                  we share necessary information with our partner Peptide Foundry
                  to fulfill your order.
                </li>
                <li>
                  <strong>For Legal Purposes:</strong> We may disclose your
                  information if required to do so by law or in response to valid
                  requests by public authorities.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with any
                  merger, sale of company assets, financing, or acquisition of all
                  or a portion of our business.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share your information
                  for any other purpose with your consent.
                </li>
              </ul>

              <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
                <p className="text-sm text-teal-800">
                  <strong>We do not sell your personal information.</strong> We do
                  not sell, rent, or trade your personal information to third
                  parties for their marketing purposes.
                </p>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-emerald-600"
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
              <h2 className="font-display text-2xl md:text-3xl text-navy-900">
                Data Security
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                We implement appropriate technical and organizational security
                measures designed to protect the security of any personal
                information we process. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>SSL/TLS encryption for data in transit</li>
                <li>Encrypted storage for sensitive data</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication requirements</li>
                <li>Employee training on data protection</li>
              </ul>
              <p>
                However, please note that no method of transmission over the
                Internet or method of electronic storage is 100% secure. While we
                strive to use commercially acceptable means to protect your
                personal information, we cannot guarantee its absolute security.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-navy-900">
                Your Privacy Rights
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Depending on your location, you may have certain rights regarding
                your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Access:</strong> Request access to the personal
                  information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or
                  incomplete personal information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information, subject to certain exceptions
                </li>
                <li>
                  <strong>Opt-Out:</strong> Opt out of marketing communications at
                  any time
                </li>
                <li>
                  <strong>Data Portability:</strong> Request a copy of your
                  personal information in a structured, machine-readable format
                </li>
                <li>
                  <strong>Restriction:</strong> Request restriction of processing
                  of your personal information
                </li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at{' '}
                <a
                  href="mailto:privacy@purestpeptides.com"
                  className="text-teal-600 hover:text-teal-700"
                >
                  privacy@purestpeptides.com
                </a>
                . We will respond to your request within 30 days.
              </p>
            </div>
          </div>

          {/* Third-Party Links */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-navy-900 mb-6">
              Third-Party Links
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Our Site may contain links to third-party websites that are not
                operated by us. If you click on a third-party link, you will be
                directed to that third party's site. We strongly advise you to
                review the Privacy Policy of every site you visit.
              </p>
              <p>
                We have no control over and assume no responsibility for the
                content, privacy policies, or practices of any third-party sites or
                services.
              </p>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-navy-900 mb-6">
              Children's Privacy
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our Site is not intended for children under 18 years of age. We do
              not knowingly collect personal information from children under 18. If
              you are a parent or guardian and believe your child has provided us
              with personal information, please contact us immediately. If we
              discover that we have collected personal information from a child
              under 18, we will take steps to delete that information.
            </p>
          </div>

          {/* Changes to Policy */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-navy-900 mb-6">
              Changes to This Privacy Policy
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page and
              updating the "Last updated" date at the top of this policy. You are
              advised to review this Privacy Policy periodically for any changes.
              Changes to this Privacy Policy are effective when they are posted on
              this page.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-navy-50 to-teal-50 rounded-2xl p-8 text-center">
            <h2 className="font-display text-2xl text-navy-900 mb-4">
              Questions About Privacy?
            </h2>
            <p className="text-slate-600 mb-6">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us.
            </p>
            <a
              href="mailto:privacy@purestpeptides.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-medium hover:from-teal-600 hover:to-teal-700 transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              privacy@purestpeptides.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
