import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Purest Peptides | Founder-Backed, Transparent Sourcing"
        description="Purest Peptides was built by a researcher tired of the opacity in the peptide market. We exist to bring lab-verified, transparently sourced research peptides to serious researchers."
        canonicalUrl="https://purestpeptides.com/about"
      />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-navy-500/15 rounded-full blur-2xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm font-medium rounded-full mb-6">
              Our Story
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-white leading-tight mb-6">
              Built by a Researcher.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                For Researchers.
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              We started Purest Peptides because we were tired of the same problem
              every serious researcher faces: opaque sourcing, no real COAs, and
              vendors you know nothing about. There's a better way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/peptides"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl font-medium hover:from-teal-600 hover:to-emerald-600 transition-all shadow-lg"
              >
                View Our Peptides
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/quality"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/20 rounded-xl font-medium hover:bg-white/20 transition-all"
              >
                Our Quality Standards
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-navy-50 text-navy-700 text-sm font-medium rounded-full mb-4">
                Why We Exist
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-6">
                The peptide market has a transparency problem.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Most peptide vendors are faceless operations — a domain name, a stock
                photo, and a PayPal button. You have no idea who made what you're
                receiving, where it came from, or whether the purity certificate they
                posted is even real.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                We've been on the research side of this. We've ordered from vendors
                who promised 99%+ purity and received something that barely worked.
                We've seen COAs that were fabricated, batch numbers that didn't exist,
                and "USA-made" claims that fell apart under scrutiny.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium text-navy-800">
                Purest Peptides exists to be the answer to that problem — a vendor
                with a real face, a real commitment to third-party testing, and
                sourcing practices we're willing to explain publicly.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  ),
                  color: 'emerald',
                  title: 'Third-Party Tested',
                  desc: 'Every batch sent to ISO 17025 accredited labs. No exceptions.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  color: 'teal',
                  title: 'Transparent Sourcing',
                  desc: 'We disclose manufacturing partners and supply chain details.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  ),
                  color: 'navy',
                  title: 'Founder-Accessible',
                  desc: 'Questions? You can reach the actual founder directly.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  ),
                  color: 'emerald',
                  title: 'Research-Grade Focus',
                  desc: 'Premium quality without premium price gouging.',
                },
              ].map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl border ${
                  item.color === 'emerald' ? 'bg-emerald-50 border-emerald-100' :
                  item.color === 'teal' ? 'bg-teal-50 border-teal-100' :
                  'bg-navy-50 border-navy-100'
                }`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    item.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                    item.color === 'teal' ? 'bg-teal-100 text-teal-600' :
                    'bg-navy-100 text-navy-700'
                  }`}>
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Founder Card */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 text-white sticky top-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center mb-6 shadow-lg text-3xl font-display font-bold text-white">
                  D
                </div>
                <h3 className="font-display text-2xl text-white mb-1">Dylan</h3>
                <p className="text-teal-300 text-sm font-medium mb-4">Founder, Purest Peptides</p>
                <div className="h-px bg-white/10 mb-4" />
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Researcher and entrepreneur with a background in biochemistry.
                  Built Purest Peptides after years of frustration with the opacity
                  of the existing peptide market.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <svg className="w-4 h-4 text-teal-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:dylan@peptidefoundry.com" className="hover:text-teal-300 transition-colors">
                      dylan@peptidefoundry.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <svg className="w-4 h-4 text-teal-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    United States
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Story */}
            <div className="lg:col-span-3">
              <span className="inline-block px-3 py-1 bg-navy-100 text-navy-700 text-sm font-medium rounded-full mb-4">
                Founder's Note
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-6">
                Why I built this
              </h2>

              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  I've been deep in peptide research for years. And for most of that
                  time, sourcing was the hardest part — not the science, not the
                  protocols, not even the cost. The hardest part was figuring out
                  whether what I was receiving was actually what I ordered.
                </p>
                <p>
                  The market is flooded with vendors who compete on price and
                  nothing else. COAs from unaccredited labs. Batch numbers that
                  look copy-pasted. "USA-manufactured" claims with no evidence.
                  And when things go wrong, you're emailing a support@ address
                  that nobody checks.
                </p>
                <p>
                  I wanted to build something different. Not a faceless storefront,
                  but a company where the person behind it is reachable, accountable,
                  and genuinely invested in the quality of what ships out the door.
                </p>
                <p>
                  That means third-party testing at ISO 17025 accredited labs for
                  every batch. It means publishing real COAs with verifiable lot
                  numbers. It means being willing to explain exactly where our
                  peptides are made and how they're handled. It means pricing that
                  respects researchers without padding margins to cover for opacity.
                </p>
                <p className="font-medium text-navy-800 bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                  "Premium but accessible" isn't a tagline — it's the actual
                  constraint I work within. Top-tier purity standards, at prices
                  that don't make serious research cost-prohibitive.
                </p>
                <p>
                  If you have questions about our sourcing, our testing process,
                  or anything else — reach out directly. I read every message.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:dylan@peptidefoundry.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white rounded-xl font-medium hover:bg-navy-800 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Dylan Directly
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy-900 border border-slate-300 rounded-xl font-medium hover:bg-slate-50 transition-colors"
                >
                  Contact Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment to Quality */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full mb-4">
              Commitment to Quality
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">
              What "quality" actually means here
            </h2>
            <p className="text-slate-600">
              Not marketing language. The actual practices and standards we hold
              ourselves to on every single batch.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'ISO 17025 Third-Party Testing',
                desc: 'Every batch tested by accredited independent labs — not our own facility, not our manufacturing partner\'s lab. Independent. No conflict of interest. We test for purity, identity, endotoxins, and heavy metals.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                ),
                color: 'emerald',
              },
              {
                number: '02',
                title: 'Verifiable COAs',
                desc: 'Our Certificates of Analysis are real documents from real labs. Lot numbers you can cross-reference. Accreditation numbers that check out. You can look up our testing labs — we encourage it.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
                color: 'teal',
              },
              {
                number: '03',
                title: 'Transparent Supply Chain',
                desc: 'We\'re willing to explain where our peptides are sourced, how they\'re synthesized, and what quality controls our manufacturing partners apply before the material even gets to us for independent testing.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                ),
                color: 'navy',
              },
            ].map((item) => (
              <div key={item.number} className="relative p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    item.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                    item.color === 'teal' ? 'bg-teal-50 text-teal-600' :
                    'bg-navy-50 text-navy-700'
                  }`}>
                    {item.icon}
                  </div>
                  <span className={`text-3xl font-display font-bold ${
                    item.color === 'emerald' ? 'text-emerald-100' :
                    item.color === 'teal' ? 'text-teal-100' :
                    'text-navy-100'
                  }`}>
                    {item.number}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-navy-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/quality"
              className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 transition-colors"
            >
              Read our full quality standards
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 bg-navy-100 text-navy-700 text-sm font-medium rounded-full mb-4">
              The Honest Comparison
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">
              Why researchers choose us over anonymous vendors
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-4 px-6 text-slate-500 font-medium text-sm w-1/3"></th>
                  <th className="text-center py-4 px-6 bg-navy-900 text-white rounded-t-2xl font-semibold">
                    Purest Peptides
                  </th>
                  <th className="text-center py-4 px-6 text-slate-500 font-medium text-sm">
                    Typical Vendor
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Third-party ISO 17025 testing', true, false],
                  ['Verifiable lot numbers on COAs', true, false],
                  ['Named founder you can contact', true, false],
                  ['Disclosed manufacturing source', true, false],
                  ['Endotoxin & heavy metal testing', true, false],
                  ['Honest pricing (no opacity markup)', true, 'maybe'],
                  ['US-based customer support', true, 'sometimes'],
                ].map(([label, us, them], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="py-4 px-6 text-navy-800 font-medium text-sm">{label as string}</td>
                    <td className="py-4 px-6 text-center bg-navy-900/5">
                      {us === true ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 bg-emerald-500 rounded-full">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-400 text-sm">{us as string}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {them === false ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 bg-slate-200 rounded-full">
                          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-400 text-sm italic">{them as string}</span>
                      )}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="py-4 px-6"></td>
                  <td className="py-4 px-6 text-center bg-navy-900/5 rounded-b-2xl"></td>
                  <td className="py-4 px-6"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center mx-auto mb-8 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-4">
            To make premium, verifiably pure research peptides accessible to
            serious researchers — without the opacity, the markup, or the
            guesswork that defines most of this industry.
          </p>
          <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto">
            We believe that a researcher should be able to trust what they're
            working with. That trust is built through transparency, not marketing.
            Every decision we make flows from that principle.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Direct Contact */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-navy-900 mb-2">Reach the Founder</h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                Questions about sourcing, testing, or our products? I respond
                personally. No support tickets, no bots.
              </p>
              <a
                href="mailto:dylan@peptidefoundry.com"
                className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 transition-colors"
              >
                dylan@peptidefoundry.com
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* General Contact */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="w-12 h-12 bg-navy-100 text-navy-700 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-navy-900 mb-2">General Questions</h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                Orders, shipping, COA verification, or anything else — use
                our contact form and we'll get back to you fast.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-navy-700 font-medium hover:text-navy-900 transition-colors"
              >
                Go to Contact Page
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 mb-4">
            Ready to work with a vendor you can actually trust?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/peptides"
              className="px-8 py-3 bg-navy-900 text-white rounded-xl font-medium hover:bg-navy-800 transition-colors"
            >
              Browse Our Peptides
            </Link>
            <Link
              to="/coa-lookup"
              className="px-8 py-3 bg-white text-navy-900 rounded-xl font-medium border border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Verify a COA
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
