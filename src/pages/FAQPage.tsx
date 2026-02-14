import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQCategory {
  title: string;
  icon: React.ReactNode;
  items: FAQItem[];
}

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const faqCategories: FAQCategory[] = [
    {
      title: 'General Questions',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
      ),
      items: [
        {
          question: 'What are peptides?',
          answer: (
            <>
              <p>Peptides are short chains of amino acids, typically containing between 2 and 50 amino acids linked by peptide bonds. They are the building blocks of proteins and play essential roles in virtually every biological process in the human body.</p>
              <p className="mt-2">Unlike larger proteins, peptides are smaller molecules that can be more easily synthesized and studied in laboratory settings. For a comprehensive introduction, see our <Link to="/blog/what-are-peptides" className="text-teal-600 hover:underline">beginner's guide to peptides</Link>.</p>
            </>
          ),
        },
        {
          question: 'Are your peptides for human consumption?',
          answer: (
            <p><strong>No.</strong> All peptides sold through our partner, Peptide Foundry, are intended strictly for in vitro research and laboratory use only. They are not intended for human or veterinary use, food additives, or household purposes. Researchers are responsible for ensuring compliance with all applicable regulations.</p>
          ),
        },
        {
          question: 'What is purity and why does it matter?',
          answer: (
            <>
              <p>Purity refers to the percentage of the desired peptide present in a sample, versus impurities or degradation products. Higher purity (typically 98%+) means more reliable and reproducible research results.</p>
              <p className="mt-2">Impurities can interfere with experimental outcomes, making it difficult to attribute effects to the peptide being studied. That's why we provide Certificates of Analysis (COAs) with every batch. Learn more on our <Link to="/quality" className="text-teal-600 hover:underline">Quality & Testing</Link> page.</p>
            </>
          ),
        },
        {
          question: 'What is a Certificate of Analysis (COA)?',
          answer: (
            <>
              <p>A Certificate of Analysis is an official document that provides detailed analytical testing results for a specific batch of peptide. It typically includes:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>HPLC purity percentage</li>
                <li>Mass spectrometry molecular weight confirmation</li>
                <li>Peptide sequence verification</li>
                <li>Batch number and testing date</li>
              </ul>
              <p className="mt-2">Every order from Peptide Foundry includes a COA for full transparency and traceability.</p>
            </>
          ),
        },
      ],
    },
    {
      title: 'Ordering & Shipping',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
      items: [
        {
          question: 'Where can I purchase peptides?',
          answer: (
            <p>Research peptides are available through our partner store, <a href="https://peptidefoundry.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Peptide Foundry</a>. They offer a comprehensive selection of research-grade peptides with verified purity and fast shipping.</p>
          ),
        },
        {
          question: 'What are the shipping options?',
          answer: (
            <>
              <p>Peptide Foundry offers several shipping options:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Standard Shipping:</strong> 5-7 business days</li>
                <li><strong>Express Shipping:</strong> 2-3 business days</li>
                <li><strong>Priority Shipping:</strong> 1-2 business days</li>
              </ul>
              <p className="mt-2">Orders are typically processed within 24 hours. Tracking information is provided for all shipments.</p>
            </>
          ),
        },
        {
          question: 'Do you ship internationally?',
          answer: (
            <p>International shipping availability varies by destination due to regulatory restrictions. Please check with Peptide Foundry directly for shipping options to your specific location. Some countries may have import restrictions on research chemicals.</p>
          ),
        },
        {
          question: 'How are peptides packaged for shipping?',
          answer: (
            <>
              <p>Peptides are shipped in lyophilized (freeze-dried) form, which is the most stable format for storage and transport. Each vial is:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Sealed under sterile conditions</li>
                <li>Packaged with protective materials</li>
                <li>Shipped in temperature-resistant packaging when appropriate</li>
                <li>Accompanied by a Certificate of Analysis</li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      title: 'Quality & Testing',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5" />
        </svg>
      ),
      items: [
        {
          question: 'What testing methods are used?',
          answer: (
            <>
              <p>All peptides undergo a rigorous three-stage analytical process:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>HPLC (High-Performance Liquid Chromatography):</strong> Measures exact purity percentage</li>
                <li><strong>Mass Spectrometry:</strong> Confirms molecular weight and identity</li>
                <li><strong>Identity Testing:</strong> Verifies the amino acid sequence</li>
              </ul>
              <p className="mt-2">Learn more about our testing process on the <Link to="/quality" className="text-teal-600 hover:underline">Quality & Testing</Link> page.</p>
            </>
          ),
        },
        {
          question: 'What purity levels do you guarantee?',
          answer: (
            <p>All peptides from Peptide Foundry meet a minimum purity standard of 98%+, with many products exceeding 99% purity. The exact purity for each batch is documented on its Certificate of Analysis.</p>
          ),
        },
        {
          question: 'Are your peptides third-party tested?',
          answer: (
            <p>Yes. In addition to in-house testing, peptides undergo verification by independent third-party laboratories. This provides an additional layer of quality assurance and ensures unbiased verification of purity and identity claims.</p>
          ),
        },
        {
          question: 'How do I verify my peptide is authentic?',
          answer: (
            <>
              <p>Every peptide comes with a batch-specific Certificate of Analysis. You can:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Review the HPLC chromatogram for purity</li>
                <li>Check the mass spectrometry results for molecular weight</li>
                <li>Compare the batch number on your vial to the COA</li>
                <li>Contact Peptide Foundry support for any verification questions</li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      title: 'Storage & Handling',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
        </svg>
      ),
      items: [
        {
          question: 'How should I store peptides?',
          answer: (
            <>
              <p><strong>Lyophilized (powder) form:</strong></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Store at -20°C for long-term storage (years)</li>
                <li>Store at 2-8°C (refrigerator) for short-term storage (months)</li>
                <li>Keep away from light and moisture</li>
                <li>Keep vials sealed until ready for use</li>
              </ul>
              <p className="mt-3"><strong>Reconstituted (solution) form:</strong></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Store at 2-8°C (refrigerator)</li>
                <li>Use within 4-6 weeks for most peptides</li>
                <li>Avoid repeated freeze-thaw cycles</li>
              </ul>
            </>
          ),
        },
        {
          question: 'What is the shelf life of peptides?',
          answer: (
            <p>Lyophilized peptides stored at -20°C typically remain stable for 2+ years. At refrigerator temperatures (2-8°C), most peptides maintain stability for 6-12 months. Once reconstituted, peptides should generally be used within 4-6 weeks when refrigerated. Always check specific storage recommendations for individual peptides.</p>
          ),
        },
        {
          question: 'How do I reconstitute peptides?',
          answer: (
            <>
              <p>General reconstitution guidelines:</p>
              <ol className="list-decimal list-inside mt-2 space-y-1">
                <li>Allow the vial to reach room temperature</li>
                <li>Use bacteriostatic water or sterile saline</li>
                <li>Add solvent slowly to the side of the vial</li>
                <li>Gently swirl (do not shake vigorously)</li>
                <li>Allow complete dissolution before use</li>
                <li>Store reconstituted solution refrigerated</li>
              </ol>
              <p className="mt-2">Specific protocols may vary by peptide. Always follow your research protocol guidelines.</p>
            </>
          ),
        },
        {
          question: 'Can peptides be frozen after reconstitution?',
          answer: (
            <p>While some peptides tolerate freezing after reconstitution, it's generally not recommended. Repeated freeze-thaw cycles can cause degradation and reduced activity. If you must freeze reconstituted peptides, aliquot into single-use portions to minimize freeze-thaw cycles.</p>
          ),
        },
      ],
    },
    {
      title: 'Payment & Returns',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>
      ),
      items: [
        {
          question: 'What payment methods are accepted?',
          answer: (
            <>
              <p>Peptide Foundry accepts various payment methods including:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Credit/Debit Cards (Visa, Mastercard, American Express)</li>
                <li>Cryptocurrency (Bitcoin, Ethereum)</li>
                <li>Bank/Wire Transfer</li>
                <li>ACH Transfer</li>
              </ul>
              <p className="mt-2">Payment options may vary by region. Check the checkout page for available options.</p>
            </>
          ),
        },
        {
          question: 'What is your return policy?',
          answer: (
            <p>Due to the sensitive nature of research chemicals, returns are only accepted for damaged or incorrect orders. If you receive a damaged shipment or wrong product, contact Peptide Foundry support within 48 hours of delivery with photos of the issue. Unopened products may be eligible for replacement or refund at their discretion.</p>
          ),
        },
        {
          question: 'What if my order arrives damaged?',
          answer: (
            <>
              <p>If your order arrives damaged:</p>
              <ol className="list-decimal list-inside mt-2 space-y-1">
                <li>Document the damage with photos immediately</li>
                <li>Do not discard the packaging or products</li>
                <li>Contact Peptide Foundry support within 48 hours</li>
                <li>Provide order number, photos, and description of damage</li>
              </ol>
              <p className="mt-2">Damaged shipments are typically replaced at no additional cost.</p>
            </>
          ),
        },
        {
          question: 'Is my order discreet?',
          answer: (
            <p>Yes. All orders are shipped in plain, unmarked packaging with no external indication of the contents. Invoices and packing slips use discrete business names and do not list specific product names on the exterior.</p>
          ),
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to common questions about peptides, ordering, shipping, quality testing, storage, and more. Everything you need to know about research peptides."
        canonicalUrl="https://purestpeptides.com/faq"
      />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-navy-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 text-sm font-medium rounded-full mb-4">
              FAQ
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Find answers to common questions about peptides, ordering, quality testing, storage, and more. Can't find what you're looking for? <Link to="/contact" className="text-teal-400 hover:underline">Contact us</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={category.title} className={categoryIndex > 0 ? 'mt-12' : ''}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600">
                  {category.icon}
                </div>
                <h2 className="font-display text-2xl text-navy-900">
                  {category.title}
                </h2>
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const itemId = `${categoryIndex}-${itemIndex}`;
                  const isOpen = openItems[itemId];

                  return (
                    <div
                      key={itemId}
                      className="border border-slate-200 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                      >
                        <span className="font-medium text-navy-900 pr-4">
                          {item.question}
                        </span>
                        <svg
                          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl text-navy-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help with any questions about peptide research, ordering, or technical specifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-navy-700 to-navy-800 text-white rounded-xl font-medium hover:from-navy-800 hover:to-navy-900 transition-all shadow-md hover:shadow-lg"
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/quality"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-navy-700 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 transition-all"
            >
              View Quality Standards
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQPage;
