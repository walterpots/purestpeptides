import SEO from '../components/SEO';

const TermsPage = () => {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Terms and conditions for using Purest Peptides website and purchasing research peptides. Important legal information for researchers."
        canonicalUrl="https://purestpeptides.com/terms"
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
              Terms of Service
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Please read these terms carefully before using our website or
              purchasing products.
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
          {/* Research Use Disclaimer - Most Important */}
          <div className="mb-12 bg-amber-50 border-2 border-amber-300 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="font-display text-xl text-amber-900 mb-3">
                  Important: Research Use Only
                </h2>
                <p className="text-amber-800 leading-relaxed">
                  All peptide products sold through Purest Peptides and our partner
                  Peptide Foundry are intended{' '}
                  <strong>strictly for laboratory research purposes only</strong>.
                  These products are not intended for human or animal consumption,
                  diagnostic use, therapeutic use, or any other purpose not
                  explicitly approved by applicable regulatory authorities.
                </p>
                <p className="text-amber-800 leading-relaxed mt-3">
                  By purchasing products through our Site, you confirm that you are
                  a qualified researcher or research institution and that you will
                  use all products solely for legitimate research purposes in
                  compliance with all applicable laws and regulations.
                </p>
              </div>
            </div>
          </div>

          {/* Agreement to Terms */}
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
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-navy-900">
                Agreement to Terms
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                These Terms of Service ("Terms") govern your access to and use of
                the Purest Peptides website located at purestpeptides.com (the
                "Site") and any related services provided by Purest Peptides
                ("Company," "we," "us," or "our").
              </p>
              <p>
                By accessing or using the Site, you agree to be bound by these
                Terms. If you do not agree with any part of these Terms, you may
                not access the Site or use our services.
              </p>
              <p>
                We reserve the right to modify these Terms at any time. Changes
                will be effective immediately upon posting to the Site. Your
                continued use of the Site following any changes constitutes your
                acceptance of those changes.
              </p>
            </div>
          </div>

          {/* Eligibility */}
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
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-navy-900">
                Eligibility & User Requirements
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>To use our Site and services, you must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Be at least 18 years of age</li>
                <li>
                  Be legally capable of entering into binding contracts in your
                  jurisdiction
                </li>
                <li>
                  Use the Site only for lawful purposes and in accordance with
                  these Terms
                </li>
                <li>
                  For product purchases: Be a qualified researcher, research
                  institution, or educational facility engaged in legitimate
                  scientific research
                </li>
              </ul>
              <p>
                We reserve the right to require verification of your status as a
                qualified researcher before processing any order. This may include
                providing institutional affiliation, research credentials, or a
                brief description of your research purpose.
              </p>
            </div>
          </div>

          {/* Products and Services */}
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
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5"
                  />
                </svg>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-navy-900">
                Products & Services
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <h3 className="font-semibold text-navy-900 text-lg">
                Product Information
              </h3>
              <p>
                We strive to provide accurate product descriptions, specifications,
                and pricing on our Site. However, we do not warrant that product
                descriptions, images, or other content on the Site is accurate,
                complete, reliable, current, or error-free.
              </p>

              <h3 className="font-semibold text-navy-900 text-lg">
                Product Use Restrictions
              </h3>
              <p>By purchasing products from our Site, you agree that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Products will be used solely for in-vitro research purposes
                </li>
                <li>
                  Products will not be used for human or animal consumption
                </li>
                <li>Products will not be used for diagnostic or therapeutic use</li>
                <li>
                  Products will not be resold to third parties without our written
                  consent
                </li>
                <li>
                  Products will be handled, stored, and disposed of in accordance
                  with all applicable safety regulations
                </li>
                <li>
                  All research conducted with our products will comply with
                  applicable laws, regulations, and ethical guidelines
                </li>
              </ul>

              <h3 className="font-semibold text-navy-900 text-lg">
                Quality Assurance
              </h3>
              <p>
                All peptides undergo rigorous quality control testing. Certificates
                of Analysis (COAs) are available for all products and include purity
                verification through HPLC and Mass Spectrometry analysis. For more
                information about our quality standards, please visit our{' '}
                <a href="/quality" className="text-teal-600 hover:text-teal-700">
                  Quality & Testing page
                </a>
                .
              </p>
            </div>
          </div>

          {/* Intellectual Property */}
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
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-navy-900">
                Intellectual Property
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                The Site and its entire contents, features, and functionality
                (including but not limited to all information, software, text,
                displays, images, video, audio, design, selection, and arrangement
                thereof) are owned by the Company, its licensors, or other providers
                of such material and are protected by United States and
                international copyright, trademark, patent, trade secret, and other
                intellectual property or proprietary rights laws.
              </p>
              <p>You may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Reproduce, distribute, modify, create derivative works of,
                  publicly display, or publicly perform any content from our Site
                  without prior written consent
                </li>
                <li>
                  Use any illustrations, photographs, video or audio sequences, or
                  any graphics separately from the accompanying text
                </li>
                <li>
                  Delete or alter any copyright, trademark, or other proprietary
                  rights notices from copies of materials from the Site
                </li>
              </ul>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-navy-900">
                Disclaimers
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <h3 className="font-semibold text-navy-900 text-lg">
                No Medical Advice
              </h3>
              <p>
                The content on this Site is provided for informational and
                educational purposes only and is not intended as medical advice. We
                do not provide medical diagnoses, treatment recommendations, or
                dosing guidance. Always consult with a qualified healthcare
                professional before making any decisions about medical treatments or
                therapies.
              </p>

              <h3 className="font-semibold text-navy-900 text-lg">
                Research Information
              </h3>
              <p>
                Information about peptides and research findings presented on this
                Site is for educational purposes only. Research findings cited are
                from published scientific literature and may not represent the
                efficacy or safety of products for any use. Results from in-vitro or
                animal studies do not necessarily translate to human applications.
              </p>

              <h3 className="font-semibold text-navy-900 text-lg">
                "As Is" Basis
              </h3>
              <div className="bg-slate-100 rounded-xl p-6">
                <p className="text-sm">
                  THE SITE AND ALL CONTENT, PRODUCTS, AND SERVICES PROVIDED THROUGH
                  THE SITE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS
                  WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
                  INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
                  NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE
                  UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL
                  COMPONENTS.
                </p>
              </div>
            </div>
          </div>

          {/* Limitation of Liability */}
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
                Limitation of Liability
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
                PUREST PEPTIDES, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES,
                AGENTS, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING
                WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER
                INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your access to or use of or inability to access or use the Site</li>
                <li>Any conduct or content of any third party on the Site</li>
                <li>Any content obtained from the Site</li>
                <li>
                  Unauthorized access, use, or alteration of your transmissions or
                  content
                </li>
                <li>Use or misuse of any products purchased through the Site</li>
              </ul>
              <p>
                Our total liability for any claim arising out of or relating to
                these Terms or the Site shall not exceed the amount paid by you to
                us in the twelve (12) months preceding the claim.
              </p>
            </div>
          </div>

          {/* Indemnification */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-navy-900 mb-6">
              Indemnification
            </h2>
            <p className="text-slate-600 leading-relaxed">
              You agree to defend, indemnify, and hold harmless Purest Peptides, its
              affiliates, licensors, and service providers, and its and their
              respective officers, directors, employees, contractors, agents,
              licensors, suppliers, successors, and assigns from and against any
              claims, liabilities, damages, judgments, awards, losses, costs,
              expenses, or fees (including reasonable attorneys' fees) arising out
              of or relating to your violation of these Terms or your use of the
              Site, including, but not limited to, any use of the Site's content,
              services, and products other than as expressly authorized in these
              Terms.
            </p>
          </div>

          {/* Governing Law */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-navy-900 mb-6">
              Governing Law & Dispute Resolution
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                These Terms shall be governed by and construed in accordance with
                the laws of the State of Georgia, United States, without regard to
                its conflict of law provisions.
              </p>
              <p>
                Any dispute arising from or relating to these Terms or your use of
                the Site shall first be attempted to be resolved through good faith
                negotiation. If the dispute cannot be resolved through negotiation
                within 30 days, either party may pursue resolution through binding
                arbitration in accordance with the rules of the American Arbitration
                Association.
              </p>
              <p>
                You agree that any arbitration or legal proceedings shall be
                conducted only on an individual basis and not in a class,
                consolidated, or representative action.
              </p>
            </div>
          </div>

          {/* Termination */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-navy-900 mb-6">
              Termination
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We may terminate or suspend your access to the Site immediately,
              without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach these Terms. Upon
              termination, your right to use the Site will immediately cease. All
              provisions of the Terms which by their nature should survive
              termination shall survive termination, including, without limitation,
              ownership provisions, warranty disclaimers, indemnity, and limitations
              of liability.
            </p>
          </div>

          {/* Severability */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-navy-900 mb-6">
              Severability
            </h2>
            <p className="text-slate-600 leading-relaxed">
              If any provision of these Terms is held to be unenforceable or
              invalid, such provision will be changed and interpreted to accomplish
              the objectives of such provision to the greatest extent possible under
              applicable law, and the remaining provisions will continue in full
              force and effect.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-navy-50 to-teal-50 rounded-2xl p-8 text-center">
            <h2 className="font-display text-2xl text-navy-900 mb-4">
              Questions About These Terms?
            </h2>
            <p className="text-slate-600 mb-6">
              If you have any questions about these Terms of Service, please contact
              us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:legal@purestpeptides.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-navy-900 rounded-xl font-medium hover:bg-slate-50 transition-colors shadow-sm"
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
                legal@purestpeptides.com
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-medium hover:from-teal-600 hover:to-teal-700 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
