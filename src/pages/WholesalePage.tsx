import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const WholesalePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    orgName: '',
    contactName: '',
    email: '',
    phone: '',
    peptides: '',
    monthlyVolume: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'What is the minimum order for wholesale pricing?',
      a: 'Wholesale pricing begins at a $250 minimum order value. Orders in the $250–$499 range receive a 10% discount. Higher volume tiers unlock greater savings — up to 35% off for orders of $2,500 or more.',
    },
    {
      q: 'Do you provide Certificates of Analysis for bulk orders?',
      a: 'Yes, absolutely. Every bulk order ships with a batch-specific Certificate of Analysis (COA) documenting HPLC purity, mass spectrometry confirmation, lot number, and test date. Wholesale customers receive COA documentation for every line item in their order.',
    },
    {
      q: 'Can you accommodate custom vial sizes or concentrations?',
      a: 'Yes. Wholesale account holders can request custom vial sizes, lyophilized powder quantities (10mg to 10g+), and specific reconstitution volumes. Contact your dedicated account manager or submit the inquiry form to discuss your requirements.',
    },
    {
      q: 'How long does wholesale account setup take?',
      a: 'Wholesale accounts are typically reviewed and activated within 24–48 hours of receiving your inquiry. Once approved, you will be assigned a dedicated account manager who will reach out directly.',
    },
    {
      q: 'Do you ship internationally for research institutions?',
      a: 'At this time, we ship domestically within the United States only. We serve US-based research laboratories, academic institutions, wellness clinics, and compounding pharmacies. International availability may be expanded in the future.',
    },
  ];

  const pricingTiers = [
    { range: '$250–$499', discount: '10% off', leadTime: '2–3 business days', highlight: false },
    { range: '$500–$999', discount: '20% off', leadTime: '1–2 business days', highlight: false },
    { range: '$1,000–$2,499', discount: '28% off', leadTime: 'Same day', highlight: true },
    { range: '$2,500+', discount: '35% off', leadTime: 'Same day + priority', highlight: true },
  ];

  const benefits = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      ),
      title: 'Volume Pricing',
      desc: 'Tiered discounts starting at 10% for orders over $250, scaling to 35% off for $2,500+ accounts.',
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      ),
      title: 'Dedicated Account Manager',
      desc: 'A personal point of contact for reorders, custom requests, and expedited inquiries.',
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      ),
      title: 'Priority Fulfillment',
      desc: 'Same-day processing for approved account holders. Orders placed by 12pm EST ship the same day.',
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
        />
      ),
      title: 'Flexible Packaging',
      desc: 'Custom vial sizes, lyophilized bulk powder, and tailored concentrations available on request.',
    },
  ];

  const whoWeServe = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A18.003 18.003 0 0112 21c-2.54 0-4.979-.525-7.172-1.476-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      ),
      title: 'Research Laboratories',
      desc: 'Universities, biotech R&D teams, and academic research groups requiring consistent, verified peptide supply for ongoing studies.',
      tags: ['Academic Research', 'Biotech R&D', 'Preclinical Studies'],
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      ),
      title: 'Wellness Clinics & Medical Practices',
      desc: 'Integrative medicine clinics and physician-led practices sourcing research-grade peptides for supervised protocols.',
      tags: ['Integrative Medicine', 'Physician Practices', 'Wellness Centers'],
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      ),
      title: 'Compounding Pharmacies & Formulators',
      desc: 'Licensed compounding pharmacies and specialty formulators requiring bulk peptide raw material with full documentation.',
      tags: ['Compounding Pharmacies', 'Bulk Raw Material', 'Formulators'],
    },
  ];

  return (
    <>
      <SEO
        title="Wholesale Peptides | Bulk Research Peptide Supplier"
        description="Wholesale bulk peptides for research labs, clinics, and institutions. Volume pricing on BPC-157, TB-500, Semaglutide, and 40+ peptides. COA on every batch. Request wholesale pricing today."
        canonicalUrl="https://purestpeptides.com/wholesale"
      />

      {/* ── Hero ── */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-navy-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-teal-600/5 rounded-full blur-2xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 text-sm font-medium rounded-full mb-4">
              Wholesale &amp; Bulk Orders
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Research-Grade Peptides at Scale
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              Supplying research laboratories, academic institutions, and professional researchers
              with verified-purity peptides at volume. From 10mg to 10g+, every batch ships
              with a Certificate of Analysis.
            </p>

            <div className="flex flex-wrap gap-8 mb-10">
              {[
                { value: '500+', label: 'Research Customers' },
                { value: '10mg–10g+', label: 'Available Quantities' },
                { value: 'COA', label: 'On Every Batch' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-teal-400">{stat.value}</div>
                  <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#inquiry-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl"
              >
                Request Wholesale Pricing
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#pricing-tiers"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all border border-white/20"
              >
                View Pricing Tiers
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Wholesale ── */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">
              Why Wholesale with PurestPeptides
            </h2>
            <p className="text-slate-600">
              Built for volume buyers who can't compromise on quality, documentation, or reliability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-teal-200 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-navy-900 to-navy-800 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {benefit.icon}
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-navy-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Tiers ── */}
      <section id="pricing-tiers" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full mb-4">
              Volume Discounts
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">
              Volume Pricing Tiers
            </h2>
            <p className="text-slate-600">
              Discounts apply automatically based on order value. No codes needed — savings scale with your volume.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Desktop table */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-navy-900 to-navy-800">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Order Value</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Discount</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Lead Time</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Tier</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTiers.map((tier, i) => (
                    <tr
                      key={tier.range}
                      className={`border-t border-slate-100 transition-colors ${
                        tier.highlight
                          ? 'bg-teal-50/60'
                          : i % 2 === 0
                          ? 'bg-white'
                          : 'bg-slate-50/50'
                      }`}
                    >
                      <td className="px-6 py-5 font-semibold text-navy-900">{tier.range}</td>
                      <td className="px-6 py-5">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                          tier.highlight
                            ? 'bg-teal-100 text-teal-700'
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {tier.discount}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-slate-600">{tier.leadTime}</td>
                      <td className="px-6 py-5">
                        {tier.highlight ? (
                          <span className="inline-flex items-center gap-1 text-teal-600 text-sm font-medium">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Priority Account
                          </span>
                        ) : (
                          <span className="text-slate-400 text-sm">Standard</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.range}
                  className={`rounded-2xl border p-5 ${
                    tier.highlight ? 'border-teal-200 bg-teal-50' : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-navy-900 text-lg">{tier.range}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      tier.highlight ? 'bg-teal-100 text-teal-700' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {tier.discount}
                    </span>
                  </div>
                  <div className="text-slate-600 text-sm">Lead time: {tier.leadTime}</div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-slate-500 mt-6">
              Need a custom quote for recurring orders or specialty peptides?{' '}
              <a href="#inquiry-form" className="text-teal-600 hover:text-teal-700 font-medium">
                Submit an inquiry
              </a>{' '}
              and your account manager will follow up within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── Who We Serve ── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 text-sm font-medium rounded-full mb-4">
              Our Customers
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Who We Serve
            </h2>
            <p className="text-slate-400">
              From university research departments to clinical practices, we supply institutions that demand consistency and documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whoWeServe.map((segment) => (
              <div
                key={segment.title}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-teal-500/30 transition-all"
              >
                <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {segment.icon}
                  </svg>
                </div>
                <h3 className="font-semibold text-xl text-white mb-3">{segment.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{segment.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {segment.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-teal-500/10 text-teal-300 text-xs rounded-lg border border-teal-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quality Assurance ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full mb-4">
                Quality Assurance
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-6">
                Every Batch Verified. Every Shipment Documented.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Wholesale orders demand zero room for error. Every batch undergoes HPLC analysis and mass spectrometry confirmation before it ships, with a third-party-verified COA included for each lot — giving your institution the documentation it needs for research integrity.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'HPLC testing with &gt;98% purity guarantee',
                  'Mass spectrometry identity confirmation on every batch',
                  'Third-party independent laboratory verification',
                  'Batch-specific COA included with every order',
                  'Full traceability — lot number, test date, and analyst',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span
                      className="text-slate-600 text-sm"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </li>
                ))}
              </ul>
              <Link
                to="/quality"
                className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors"
              >
                View our full quality process
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Quality stats panel */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 md:p-10">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: '98%+', label: 'Minimum Purity', sub: 'HPLC Verified' },
                  { value: '3-Stage', label: 'Testing Protocol', sub: 'Per Batch' },
                  { value: '100%', label: 'COA Coverage', sub: 'Every Shipment' },
                  { value: '3rd Party', label: 'Independent Lab', sub: 'Verification' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 rounded-2xl p-5 text-center border border-white/10">
                    <div className="text-2xl font-bold text-teal-400 mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-white mb-0.5">{stat.label}</div>
                    <div className="text-xs text-slate-400">{stat.sub}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-teal-500/10 rounded-xl border border-teal-500/20">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    All wholesale shipments include digital COA access. Batch records are retained for 5+ years for institutional audit requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Inquiry Form ── */}
      <section id="inquiry-form" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left copy */}
            <div className="lg:col-span-2">
              <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full mb-4">
                Get Started
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-6">
                Wholesale Inquiry
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Tell us about your organization and research needs. A dedicated account manager will reach out within 24 hours with a custom pricing proposal.
              </p>
              <div className="space-y-4">
                {[
                  'Custom pricing tailored to your volume',
                  'Dedicated account manager assigned',
                  'COA documentation for all batches',
                  'Flexible packaging &amp; custom quantities',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span
                      className="text-slate-600 text-sm"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-10 p-5 bg-white rounded-2xl border border-slate-200">
                <p className="text-sm text-navy-900 font-medium mb-1">Urgent inquiry?</p>
                <a
                  href="mailto:wholesale@purestpeptides.com"
                  className="text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors"
                >
                  wholesale@purestpeptides.com
                </a>
                <p className="text-xs text-slate-500 mt-1">We respond within 24 hours.</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center shadow-sm">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-navy-900 mb-3">Inquiry Received</h3>
                  <p className="text-slate-600 max-w-sm mx-auto">
                    Thank you for your interest. A dedicated account manager will be in touch within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="orgName" className="block text-sm font-medium text-navy-900 mb-1.5">
                        Organization Name <span className="text-teal-500">*</span>
                      </label>
                      <input
                        id="orgName"
                        name="orgName"
                        type="text"
                        required
                        value={formData.orgName}
                        onChange={handleChange}
                        placeholder="Research Institute / Clinic"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactName" className="block text-sm font-medium text-navy-900 mb-1.5">
                        Contact Name <span className="text-teal-500">*</span>
                      </label>
                      <input
                        id="contactName"
                        name="contactName"
                        type="text"
                        required
                        value={formData.contactName}
                        onChange={handleChange}
                        placeholder="Dr. Jane Smith"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-1.5">
                        Email <span className="text-teal-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="contact@institution.edu"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-1.5">
                        Phone <span className="text-slate-400 font-normal">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="peptides" className="block text-sm font-medium text-navy-900 mb-1.5">
                      Peptides of Interest <span className="text-teal-500">*</span>
                    </label>
                    <textarea
                      id="peptides"
                      name="peptides"
                      required
                      rows={3}
                      value={formData.peptides}
                      onChange={handleChange}
                      placeholder="e.g., BPC-157 (500mg), TB-500 (200mg), Semaglutide (1g)..."
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="monthlyVolume" className="block text-sm font-medium text-navy-900 mb-1.5">
                      Estimated Monthly Volume <span className="text-teal-500">*</span>
                    </label>
                    <select
                      id="monthlyVolume"
                      name="monthlyVolume"
                      required
                      value={formData.monthlyVolume}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-colors bg-white"
                    >
                      <option value="" disabled>Select estimated volume...</option>
                      <option value="under-500">Under $500 / month</option>
                      <option value="500-2500">$500 – $2,500 / month</option>
                      <option value="2500-10000">$2,500 – $10,000 / month</option>
                      <option value="10000+">$10,000+ / month</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1.5">
                      Additional Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Custom packaging needs, recurring order frequency, specific purity requirements, or any other details..."
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    Submit Inquiry
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <p className="text-xs text-slate-500 text-center">
                    We respond within 24 hours. For urgent inquiries:{' '}
                    <a href="mailto:wholesale@purestpeptides.com" className="text-teal-600 hover:text-teal-700 font-medium">
                      wholesale@purestpeptides.com
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full mb-4">
              Common Questions
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">
              Wholesale FAQ
            </h2>
            <p className="text-slate-600">
              Everything you need to know about our wholesale program before submitting an inquiry.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-slate-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-medium text-navy-900 pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform ${
                    openFaq === i ? 'rotate-45' : ''
                  }`}>
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t border-slate-100">
                    <p className="text-slate-600 text-sm leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-teal-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Ready to Scale Your Research Supply?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Join 500+ research institutions and professionals who trust PurestPeptides for consistent, documented, research-grade supply.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#inquiry-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg"
            >
              Request Wholesale Pricing
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              to="/quality"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all border border-white/20"
            >
              View Quality Standards
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WholesalePage;
