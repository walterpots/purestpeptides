import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import CTA from '../components/CTA';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'Peptide Basics',
    question: 'What are peptides?',
    answer:
      'Peptides are short chains of amino acids, typically consisting of 2 to 50 amino acids linked together by peptide bonds. They serve as signaling molecules in the body, playing crucial roles in biological processes including metabolism, immune function, tissue repair, and hormone regulation. Peptides are smaller than proteins and can be more easily absorbed and utilized by cells. Learn more in our <a href="/blog/what-are-peptides" class="text-teal-600 hover:text-teal-700 underline">complete guide to peptides</a>.',
  },
  {
    category: 'Peptide Basics',
    question: 'How do peptides work in the body?',
    answer:
      'Peptides function by binding to specific receptors on cell surfaces, triggering targeted cellular responses. When a peptide binds to its receptor, it initiates a cascade of biological events—such as activating signaling pathways, modulating gene expression, triggering hormone release, or stimulating tissue repair. The high specificity of peptide-receptor interactions allows them to influence precise biological processes.',
  },
  {
    category: 'Peptide Basics',
    question: 'What is the difference between peptides and proteins?',
    answer:
      'The primary distinction is size: peptides contain fewer than 50 amino acids, while proteins are larger molecules with 50 or more amino acids and more complex three-dimensional structures. Proteins often serve structural functions (like collagen) or enzymatic roles, while peptides typically act as signaling molecules that communicate instructions between cells. Peptides can also be more easily synthesized in laboratories and may be absorbed more readily by cells.',
  },
  {
    category: 'Peptide Categories',
    question: 'What are GLP-1 peptides and why are they significant?',
    answer:
      'GLP-1 (glucagon-like peptide-1) receptor agonists are peptides that mimic the natural incretin hormone GLP-1. They stimulate insulin secretion, suppress glucagon, slow gastric emptying, and regulate appetite. Synthetic GLP-1 peptides like semaglutide and tirzepatide have become major subjects of metabolic research due to their effects on glucose metabolism and body weight regulation. Read our <a href="/blog/glp-1-peptides-explained" class="text-teal-600 hover:text-teal-700 underline">in-depth comparison of semaglutide and tirzepatide</a>.',
  },
  {
    category: 'Peptide Categories',
    question: 'What are regenerative peptides?',
    answer:
      'Regenerative peptides are compounds studied for their potential to promote tissue repair and healing. The two most widely researched are <a href="/blog/bpc-157-guide" class="text-teal-600 hover:text-teal-700 underline">BPC-157</a> (Body Protection Compound-157), derived from a protein in gastric juice that supports gastrointestinal and musculoskeletal healing research, and <a href="/blog/tb-500-thymosin-beta-4-guide" class="text-teal-600 hover:text-teal-700 underline">TB-500</a> (Thymosin Beta-4 fragment), which promotes cell migration and wound healing. These peptides work through distinct mechanisms and are often studied together.',
  },
  {
    category: 'Peptide Categories',
    question: 'What are growth hormone secretagogues?',
    answer:
      'Growth hormone secretagogues (GHS) are peptides that stimulate the release of growth hormone from the pituitary gland. Examples include CJC-1295, a GHRH (growth hormone releasing hormone) analog, and Ipamorelin, a selective ghrelin receptor agonist. These peptides are studied for their effects on the GH/IGF-1 axis, body composition, sleep quality, and metabolic function. They are often researched individually and in combination.',
  },
  {
    category: 'Peptide Categories',
    question: 'What are melanocortin peptides?',
    answer:
      'Melanocortin peptides interact with melanocortin receptors (MC1R through MC5R) and are involved in diverse biological processes. Melanotan II is a synthetic analog of alpha-melanocyte stimulating hormone (α-MSH) studied for its effects on melanogenesis and skin pigmentation. PT-141 (Bremelanotide) is a melanocortin receptor agonist researched for its central nervous system effects. These peptides are subjects of ongoing neuroendocrine research.',
  },
  {
    category: 'Research & Applications',
    question: 'Are peptides used for therapeutic purposes?',
    answer:
      'Some peptides have been developed into approved therapeutic agents—insulin is a well-known example, and more recently, GLP-1 receptor agonists like semaglutide have been approved for specific medical conditions. However, many research peptides are still in preclinical or early clinical investigation stages. It is important to distinguish between FDA-approved peptide medications and research peptides, which are intended for scientific investigation purposes.',
  },
  {
    category: 'Research & Applications',
    question: 'What is the current state of peptide research?',
    answer:
      'Peptide research is one of the fastest-growing areas in biomedical science. Active research areas include metabolic disease (GLP-1 agonists), regenerative medicine (BPC-157, TB-500), neuroscience (neuroprotective peptides), immunology (antimicrobial peptides), and oncology (peptide-based targeting). Advances in peptide synthesis, delivery technology, and structural biology continue to expand the possibilities for peptide-based research and development.',
  },
  {
    category: 'Research & Applications',
    question: 'Can peptides be combined in research?',
    answer:
      'Yes, researchers frequently study peptide combinations to investigate potential synergistic or complementary effects. For example, BPC-157 and TB-500 are often studied together in regenerative research because they work through different mechanisms—BPC-157 through growth factor modulation and the nitric oxide system, while TB-500 operates through actin regulation and cell migration. Similarly, CJC-1295 and Ipamorelin are commonly paired in growth hormone research. Combination studies require careful experimental design.',
  },
  {
    category: 'Quality & Purity',
    question: 'Why does peptide purity matter?',
    answer:
      'Peptide purity directly impacts experimental reproducibility and reliability. Impurities—such as truncated sequences, deletion products, or synthesis byproducts—can introduce confounding variables and lead to inconsistent results. For research applications, a purity level of 98% or higher (as measured by HPLC) is generally recommended. Always request and review Certificates of Analysis (CoA) that include HPLC purity data and mass spectrometry verification.',
  },
  {
    category: 'Quality & Purity',
    question: 'How can I verify the quality of research peptides?',
    answer:
      'Quality verification involves several key steps: (1) Request a Certificate of Analysis (CoA) from the supplier showing HPLC purity and mass spectrometry data confirming molecular identity, (2) Verify that the supplier follows Good Manufacturing Practices (GMP) or equivalent quality standards, (3) Check for third-party testing documentation, and (4) Consider independent testing through a qualified analytical laboratory if conducting critical research. Reputable suppliers like <a href="https://peptidefoundry.com" target="_blank" rel="noopener noreferrer" class="text-teal-600 hover:text-teal-700 underline">Peptide Foundry</a> provide comprehensive quality documentation with every order.',
  },
  {
    category: 'Storage & Handling',
    question: 'How should research peptides be stored?',
    answer:
      'Proper storage is essential for maintaining peptide integrity. Lyophilized (freeze-dried) peptides should be stored at -20°C for long-term preservation and can remain stable for months to years under these conditions. Once reconstituted in solution, peptides should be refrigerated at 2-8°C and used within a reasonable timeframe (typically days to weeks, depending on the peptide). Avoid repeated freeze-thaw cycles, protect from light exposure, and use sterile technique during reconstitution.',
  },
  {
    category: 'Storage & Handling',
    question: 'What is the best way to reconstitute peptides?',
    answer:
      'Reconstitution procedures vary by peptide, but general best practices include: (1) Allow the lyophilized peptide to reach room temperature before opening, (2) Use bacteriostatic water or sterile saline as the reconstitution solvent, (3) Add the solvent slowly along the vial wall rather than directly onto the powder, (4) Gently swirl the vial—never shake vigorously, as this can damage peptide structure, and (5) Allow the peptide to dissolve completely before use. Always refer to peptide-specific documentation for recommended solvents and concentrations.',
  },
  {
    category: 'Storage & Handling',
    question: 'How long do reconstituted peptides remain stable?',
    answer:
      'Stability varies significantly between peptides. In general, reconstituted peptides stored at 2-8°C remain viable for days to several weeks. Factors affecting stability include the specific peptide sequence, pH of the solution, solvent used, temperature, and exposure to light or oxygen. Some peptides like BPC-157 are notably stable, while others degrade more rapidly. For critical experiments, fresh reconstitution is recommended. Aliquoting into single-use portions can help avoid repeated freeze-thaw cycles.',
  },
  {
    category: 'Getting Started',
    question: 'Where can I learn more about specific peptides?',
    answer:
      'PurestPeptides offers free, science-based educational articles on a wide range of research peptides. Start with our <a href="/blog/what-are-peptides" class="text-teal-600 hover:text-teal-700 underline">beginner\'s guide to peptides</a>, then explore in-depth guides on specific compounds like <a href="/blog/bpc-157-guide" class="text-teal-600 hover:text-teal-700 underline">BPC-157</a>, <a href="/blog/tb-500-thymosin-beta-4-guide" class="text-teal-600 hover:text-teal-700 underline">TB-500</a>, and <a href="/blog/glp-1-peptides-explained" class="text-teal-600 hover:text-teal-700 underline">GLP-1 peptides</a>. Our <a href="/peptides" class="text-teal-600 hover:text-teal-700 underline">peptide reference guide</a> also provides quick overviews of each compound we cover.',
  },
  {
    category: 'Getting Started',
    question: 'Where can I purchase research peptides?',
    answer:
      'For high-quality research peptides with verified purity and comprehensive documentation, we recommend <a href="https://peptidefoundry.com" target="_blank" rel="noopener noreferrer" class="text-teal-600 hover:text-teal-700 underline">Peptide Foundry</a>. They offer lab-tested peptides with full Certificates of Analysis, fast shipping, and a wide selection of research compounds. When choosing any supplier, prioritize those who provide third-party testing, transparent quality documentation, and proper handling and storage during shipping.',
  },
];

const categories = [...new Set(faqs.map((faq) => faq.category))];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredFaqs = activeCategory
    ? faqs.filter((faq) => faq.category === activeCategory)
    : faqs;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEO
        title="Frequently Asked Questions About Peptides"
        description="Get answers to common questions about research peptides—what they are, how they work, proper storage and handling, quality considerations, and more."
        canonicalUrl="https://purestpeptides.com/faq"
      />

      <Hero
        title="Frequently Asked Questions"
        subtitle="Get answers to the most common questions about research peptides, their applications, proper handling, and quality considerations."
        backgroundVariant="minimal"
        showCTA={false}
      />

      {/* FAQ Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            <button
              onClick={() => {
                setActiveCategory(null);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === null
                  ? 'bg-teal-500 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Questions
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-teal-500 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-colors hover:border-slate-300"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-block px-2.5 py-0.5 bg-teal-50 text-teal-700 text-xs font-medium rounded-full mt-0.5 shrink-0 hidden sm:inline-block">
                        {faq.category}
                      </span>
                      <h3 className="font-medium text-navy-900 text-base">
                        {faq.question}
                      </h3>
                    </div>
                    <svg
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
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
                    <div className="px-6 pb-5">
                      <div className="pl-0 sm:pl-[calc(2.5rem+0.75rem)]">
                        <p
                          className="text-slate-600 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-navy-900 mb-4">
            Want to Learn More?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Explore our in-depth articles and peptide guides for detailed, science-based information on specific compounds and research topics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/blog"
              className="px-6 py-3 bg-navy-900 text-white rounded-lg font-medium hover:bg-navy-800 transition-colors"
            >
              Browse Articles
            </Link>
            <Link
              to="/peptides"
              className="px-6 py-3 bg-white text-navy-900 rounded-lg font-medium border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              Peptide Guide
            </Link>
            <a
              href="https://peptidefoundry.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-medium hover:from-teal-600 hover:to-teal-700 transition-all"
            >
              Shop at Peptide Foundry
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default FAQPage;
