import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const QualityPage = () => {
  return (
    <>
      <SEO
        title="Quality & Testing"
        description="Learn about our rigorous quality testing process including HPLC analysis, mass spectrometry, and third-party verification. Every peptide ships with a Certificate of Analysis."
        canonicalUrl="https://purestpeptides.com/quality"
      />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-navy-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 text-sm font-medium rounded-full mb-4">
              Quality Assurance
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">
              Research-Grade Quality You Can Trust
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Every peptide undergoes multi-stage analytical testing before it
              reaches your lab. Our commitment to purity, identity, and
              consistency sets the standard for research-grade peptides.
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { value: '98%+', label: 'Minimum Purity' },
                { value: '3-Stage', label: 'Testing Process' },
                { value: 'Every Batch', label: 'COA Included' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-teal-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full mb-4">
              Our Testing Process
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">
              Three Pillars of Verification
            </h2>
            <p className="text-slate-600">
              Each peptide is subjected to a rigorous three-stage analytical
              process to confirm purity, identity, and structural integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* HPLC */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all">
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
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-navy-900 mb-3">
                HPLC Analysis
              </h3>
              <p className="text-slate-600 mb-4">
                High-Performance Liquid Chromatography separates and quantifies
                each component in a peptide sample, providing a precise purity
                percentage.
              </p>
              <ul className="space-y-2">
                {[
                  'Measures exact purity percentage',
                  'Detects impurities and degradation',
                  'Industry gold-standard method',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg
                      className="w-5 h-5 text-teal-500 shrink-0 mt-0.5"
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mass Spectrometry */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all">
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
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A18.003 18.003 0 0112 21c-2.54 0-4.979-.525-7.172-1.476-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-navy-900 mb-3">
                Mass Spectrometry
              </h3>
              <p className="text-slate-600 mb-4">
                Mass Spectrometry confirms molecular weight and structural
                composition, ensuring the peptide matches its expected molecular
                formula.
              </p>
              <ul className="space-y-2">
                {[
                  'Confirms molecular weight (MW)',
                  'Verifies amino acid sequence',
                  'Detects structural anomalies',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg
                      className="w-5 h-5 text-teal-500 shrink-0 mt-0.5"
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Identity Verification */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all">
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
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-navy-900 mb-3">
                Identity Verification
              </h3>
              <p className="text-slate-600 mb-4">
                Cross-referencing analytical data against reference standards
                confirms that the peptide is exactly what it claims to be —
                no substitutions, no mislabeling.
              </p>
              <ul className="space-y-2">
                {[
                  'Confirms peptide identity',
                  'Cross-checks reference standards',
                  'Eliminates mislabeling risk',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg
                      className="w-5 h-5 text-teal-500 shrink-0 mt-0.5"
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate of Analysis */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full mb-4">
                Certificates of Analysis
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-6">
                Full Transparency with Every Order
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Every batch of peptides ships with a detailed Certificate of
                Analysis (COA). This document provides the complete analytical
                profile of your specific batch, so you can verify quality before
                starting your research.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                A COA isn't just a formality — it's your assurance that the
                peptide in your hands has been rigorously tested and meets our
                strict quality standards.
              </p>

              <h3 className="font-semibold text-lg text-navy-900 mb-4">
                What's Included in Every COA
              </h3>
              <div className="space-y-3">
                {[
                  {
                    title: 'HPLC Purity Results',
                    desc: 'Exact purity percentage with chromatogram data',
                  },
                  {
                    title: 'Mass Spec Confirmation',
                    desc: 'Observed vs. expected molecular weight',
                  },
                  {
                    title: 'Appearance & Solubility',
                    desc: 'Physical characteristics and dissolution profile',
                  },
                  {
                    title: 'Batch & Lot Number',
                    desc: 'Full traceability for every vial',
                  },
                  {
                    title: 'Test Date & Analyst',
                    desc: 'When and by whom the analysis was performed',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-teal-600"
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
                    </div>
                    <div>
                      <span className="font-medium text-navy-900">
                        {item.title}
                      </span>
                      <span className="text-slate-500"> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COA Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-700 to-teal-500 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900">
                      Certificate of Analysis
                    </div>
                    <div className="text-sm text-slate-500">
                      Sample Report
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-slate-500 mb-1">Product</div>
                      <div className="font-medium text-navy-900">
                        BPC-157 (5mg)
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-500 mb-1">Batch #</div>
                      <div className="font-medium text-navy-900">
                        BPC-240815-A
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-slate-500 mb-1">Molecular Weight</div>
                      <div className="font-medium text-navy-900">
                        1419.53 g/mol
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-500 mb-1">Sequence</div>
                      <div className="font-medium text-navy-900 text-xs">
                        GEPPPGKPADDAGLV
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-slate-500">HPLC Purity</span>
                      <span className="font-bold text-emerald-600">99.2%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-teal-500 to-emerald-500 h-2.5 rounded-full"
                        style={{ width: '99.2%' }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                    <div>
                      <div className="text-slate-500 mb-1">Appearance</div>
                      <div className="font-medium text-navy-900">
                        White Powder
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-500 mb-1">MS Confirmed</div>
                      <div className="font-medium text-emerald-600 flex items-center gap-1">
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Verified
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 text-xs text-slate-400">
                    Tested: Aug 15, 2024 &middot; Analyst: QC Lab
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Read a COA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">
              How to Read a COA
            </h2>
            <p className="text-slate-600">
              Understanding your Certificate of Analysis helps you evaluate
              peptide quality with confidence. Here's what to look for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Check Purity',
                desc: 'Look for HPLC purity of 98% or higher. This indicates minimal impurities and high-quality synthesis.',
                color: 'teal',
              },
              {
                step: '02',
                title: 'Verify Identity',
                desc: 'Confirm the observed molecular weight matches the expected value. A close match verifies correct peptide identity.',
                color: 'navy',
              },
              {
                step: '03',
                title: 'Review Appearance',
                desc: 'Peptides should appear as described (typically white to off-white lyophilized powder). Discoloration may signal issues.',
                color: 'emerald',
              },
              {
                step: '04',
                title: 'Confirm Batch Info',
                desc: 'Each COA should reference a specific batch or lot number. This ensures traceability and consistency.',
                color: 'teal',
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-slate-100 mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg text-navy-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third-Party Testing */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 md:p-10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      ),
                      label: 'Independent Verification',
                    },
                    {
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        />
                      ),
                      label: 'Unbiased Results',
                    },
                    {
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      ),
                      label: 'Full Documentation',
                    },
                    {
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"
                        />
                      ),
                      label: 'Ongoing Monitoring',
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-white/10 backdrop-blur rounded-xl p-5 text-center"
                    >
                      <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <svg
                          className="w-6 h-6 text-teal-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          {item.icon}
                        </svg>
                      </div>
                      <div className="text-sm font-medium text-white">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full mb-4">
                Independent Testing
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-6">
                Third-Party Verification
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We don't just test internally — we also submit samples to
                independent third-party laboratories for unbiased verification.
                This extra layer of accountability ensures that our quality
                claims are backed by objective, external data.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Third-party labs operate independently from our manufacturing
                and supply chain, eliminating any potential conflicts of
                interest. Their results are documented and available for review.
              </p>
              <div className="bg-teal-50 border border-teal-100 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-teal-600 shrink-0 mt-0.5"
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
                  <p className="text-sm text-teal-800">
                    Third-party test results are cross-referenced with our
                    internal data to ensure consistency. Any discrepancies
                    trigger a full batch review before release.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full mb-4">
              Our Standards
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">
              Quality at Every Stage
            </h2>
            <p className="text-slate-600">
              From synthesis to shipping, every step of our process is designed
              to maintain the highest quality standards for research peptides.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Purity */}
            <div className="flex gap-5 p-6 bg-slate-50 rounded-2xl">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
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
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A18.003 18.003 0 0112 21c-2.54 0-4.979-.525-7.172-1.476-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-navy-900 mb-2">
                  98%+ Purity Guarantee
                </h3>
                <p className="text-slate-600 text-sm">
                  Every peptide must meet or exceed 98% purity as confirmed by
                  HPLC analysis. Batches that fall below this threshold are
                  rejected and never shipped.
                </p>
              </div>
            </div>

            {/* Sterile Handling */}
            <div className="flex gap-5 p-6 bg-slate-50 rounded-2xl">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
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
                    d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-navy-900 mb-2">
                  Sterile Handling Protocols
                </h3>
                <p className="text-slate-600 text-sm">
                  Peptides are handled under strict cleanroom conditions to
                  prevent contamination. All equipment is sterilized and
                  personnel follow rigorous hygiene protocols.
                </p>
              </div>
            </div>

            {/* Proper Storage */}
            <div className="flex gap-5 p-6 bg-slate-50 rounded-2xl">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
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
                    d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-navy-900 mb-2">
                  Temperature-Controlled Storage
                </h3>
                <p className="text-slate-600 text-sm">
                  All peptides are stored in temperature-controlled environments
                  (-20°C for long-term, 2-8°C for short-term) to preserve
                  stability and prevent degradation.
                </p>
              </div>
            </div>

            {/* Packaging */}
            <div className="flex gap-5 p-6 bg-slate-50 rounded-2xl">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
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
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-navy-900 mb-2">
                  Sealed & Protected Packaging
                </h3>
                <p className="text-slate-600 text-sm">
                  Each vial is sealed under inert gas (nitrogen or argon) to
                  prevent oxidation. Tamper-evident packaging ensures product
                  integrity from our facility to your lab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  ),
                  title: 'Verified Purity',
                  desc: 'Every batch independently verified to exceed 98% purity standards',
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  ),
                  title: 'COA with Every Order',
                  desc: 'Complete analytical documentation ships with every peptide purchase',
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  ),
                  title: 'Third-Party Tested',
                  desc: 'Independent labs confirm our results for complete transparency',
                },
              ].map((item) => (
                <div key={item.title}>
                  <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-7 h-7 text-teal-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Explore our peptide guides for detailed research information, or
            visit Peptide Foundry for lab-tested, verified-purity peptides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/peptides"
              className="px-8 py-4 bg-navy-900 text-white rounded-xl font-medium hover:bg-navy-800 transition-colors"
            >
              Browse Peptides
            </Link>
            <a
              href="https://peptidefoundry.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-medium hover:from-teal-600 hover:to-teal-700 transition-all shadow-md hover:shadow-lg"
            >
              Shop Peptide Foundry
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default QualityPage;
