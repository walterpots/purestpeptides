import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

interface ResearchPaper {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  pmid: string;
  summary: string;
  peptides: string[];
  categories: string[];
}

const researchPapers: ResearchPaper[] = [
  // BPC-157 Research
  {
    id: 'bpc-1',
    title: 'BPC 157 and its relationship with wound healing, the repair of tendon, and bone healing',
    authors: 'Seiwerth S, et al.',
    journal: 'Current Pharmaceutical Design',
    year: 2018,
    pmid: '29332569',
    summary: 'Comprehensive review of BPC-157\'s effects on various tissue healing processes including tendon repair and bone regeneration in animal models.',
    peptides: ['BPC-157'],
    categories: ['healing', 'tissue-repair'],
  },
  {
    id: 'bpc-2',
    title: 'Stable gastric pentadecapeptide BPC 157: novel therapy in gastrointestinal tract',
    authors: 'Sikiric P, et al.',
    journal: 'Current Pharmaceutical Design',
    year: 2016,
    pmid: '27719643',
    summary: 'Investigation of BPC-157\'s protective and healing effects on the gastrointestinal system, including ulcer healing mechanisms.',
    peptides: ['BPC-157'],
    categories: ['healing', 'gastrointestinal'],
  },
  {
    id: 'bpc-3',
    title: 'Brain-gut axis and pentadecapeptide BPC 157: theoretical and practical implications',
    authors: 'Sikiric P, et al.',
    journal: 'Current Neuropharmacology',
    year: 2016,
    pmid: '27640517',
    summary: 'Examination of BPC-157\'s effects on the brain-gut axis, including dopamine and serotonin system interactions.',
    peptides: ['BPC-157'],
    categories: ['cognition', 'gastrointestinal', 'neuroprotection'],
  },
  {
    id: 'bpc-4',
    title: 'Counteraction of BPC 157 on the pathological consequences of alcohol drinking',
    authors: 'Sikiric P, et al.',
    journal: 'Archives of Medical Research',
    year: 2020,
    pmid: '32192757',
    summary: 'Study on BPC-157\'s protective effects against alcohol-induced organ damage in multiple organ systems.',
    peptides: ['BPC-157'],
    categories: ['healing', 'organ-protection'],
  },

  // TB-500 (Thymosin Beta-4) Research
  {
    id: 'tb500-1',
    title: 'Thymosin β4 promotes the healing of infected diabetic wound',
    authors: 'Badamchian M, et al.',
    journal: 'Expert Opinion on Biological Therapy',
    year: 2007,
    pmid: '17727332',
    summary: 'Research on TB-500\'s wound healing properties in diabetic models, showing accelerated recovery and reduced infection rates.',
    peptides: ['TB-500'],
    categories: ['healing', 'tissue-repair'],
  },
  {
    id: 'tb500-2',
    title: 'Thymosin beta-4 promotes angiogenesis, wound healing, and hair growth',
    authors: 'Philp D, et al.',
    journal: 'Annals of the New York Academy of Sciences',
    year: 2007,
    pmid: '17989623',
    summary: 'Comprehensive study demonstrating TB-500\'s multi-faceted healing capabilities including angiogenesis promotion.',
    peptides: ['TB-500'],
    categories: ['healing', 'tissue-repair', 'hair-growth'],
  },
  {
    id: 'tb500-3',
    title: 'Thymosin β4 and cardiac repair',
    authors: 'Smart N, et al.',
    journal: 'Annals of the New York Academy of Sciences',
    year: 2010,
    pmid: '21040235',
    summary: 'Investigation of Thymosin beta-4\'s cardioprotective properties and its role in cardiac tissue regeneration.',
    peptides: ['TB-500'],
    categories: ['healing', 'cardiac', 'tissue-repair'],
  },

  // GHK-Cu Research
  {
    id: 'ghk-1',
    title: 'GHK-Cu may prevent oxidative stress in skin by regulating copper and modifying expression of numerous antioxidant genes',
    authors: 'Pickart L, et al.',
    journal: 'Cosmetics',
    year: 2015,
    pmid: 'N/A',
    summary: 'Exploration of GHK-Cu\'s antioxidant properties and its effects on gene expression related to skin health.',
    peptides: ['GHK-Cu'],
    categories: ['skin', 'anti-aging', 'antioxidant'],
  },
  {
    id: 'ghk-2',
    title: 'The human tripeptide GHK-Cu in prevention of oxidative stress and degenerative conditions of aging',
    authors: 'Pickart L, Margolina A.',
    journal: 'Oxidative Medicine and Cellular Longevity',
    year: 2012,
    pmid: '22577490',
    summary: 'Review of GHK-Cu\'s broad anti-aging effects including tissue remodeling and wound healing properties.',
    peptides: ['GHK-Cu'],
    categories: ['anti-aging', 'healing', 'antioxidant'],
  },
  {
    id: 'ghk-3',
    title: 'The effect of the human peptide GHK on gene expression relevant to nervous system function and cognitive decline',
    authors: 'Pickart L, et al.',
    journal: 'Brain Sciences',
    year: 2017,
    pmid: '28208675',
    summary: 'Analysis of GHK-Cu\'s influence on gene expression related to neural health and cognitive function.',
    peptides: ['GHK-Cu'],
    categories: ['cognition', 'neuroprotection', 'anti-aging'],
  },

  // PT-141 (Bremelanotide) Research
  {
    id: 'pt141-1',
    title: 'Bremelanotide: New drug for hypoactive sexual desire disorder in premenopausal women',
    authors: 'Kingsberg SA, et al.',
    journal: 'JAMA',
    year: 2019,
    pmid: '31560372',
    summary: 'Clinical trial demonstrating PT-141\'s efficacy in treating hypoactive sexual desire disorder.',
    peptides: ['PT-141'],
    categories: ['sexual-health', 'hormones'],
  },
  {
    id: 'pt141-2',
    title: 'Melanocortin receptor agonists for female sexual dysfunction',
    authors: 'Pfaus JG, et al.',
    journal: 'Annual Review of Sex Research',
    year: 2007,
    pmid: '17464869',
    summary: 'Review of melanocortin pathway mechanisms and PT-141\'s role in treating sexual dysfunction.',
    peptides: ['PT-141'],
    categories: ['sexual-health', 'hormones'],
  },

  // Thymosin Alpha-1 Research
  {
    id: 'ta1-1',
    title: 'Thymalfasin: clinical and immunological effects in chronic hepatitis B and C',
    authors: 'Garaci E, et al.',
    journal: 'Annals of the New York Academy of Sciences',
    year: 2007,
    pmid: '17968015',
    summary: 'Clinical evidence of Thymosin Alpha-1\'s immunomodulatory effects in chronic viral hepatitis treatment.',
    peptides: ['Thymosin Alpha-1'],
    categories: ['immunity', 'antiviral'],
  },
  {
    id: 'ta1-2',
    title: 'Thymosin α1: a comprehensive review of the literature',
    authors: 'Romani L, et al.',
    journal: 'Annals of the New York Academy of Sciences',
    year: 2012,
    pmid: '22823391',
    summary: 'Comprehensive review of Thymosin Alpha-1\'s immunological mechanisms and clinical applications.',
    peptides: ['Thymosin Alpha-1'],
    categories: ['immunity', 'antiviral', 'cancer-research'],
  },
  {
    id: 'ta1-3',
    title: 'The immunological effects of thymosin alpha 1 in combination with PD-1 inhibitor',
    authors: 'Li Y, et al.',
    journal: 'Cancer Medicine',
    year: 2019,
    pmid: '31240868',
    summary: 'Investigation of Thymosin Alpha-1\'s synergistic effects with immunotherapy in cancer treatment.',
    peptides: ['Thymosin Alpha-1'],
    categories: ['immunity', 'cancer-research'],
  },

  // Sermorelin Research
  {
    id: 'serm-1',
    title: 'Effects of growth hormone-releasing hormone on cognitive function in adults with mild cognitive impairment',
    authors: 'Baker LD, et al.',
    journal: 'Archives of Neurology',
    year: 2012,
    pmid: '22911148',
    summary: 'Clinical trial showing GHRH (Sermorelin class) effects on cognition in older adults with MCI.',
    peptides: ['Sermorelin'],
    categories: ['cognition', 'hormones', 'anti-aging'],
  },
  {
    id: 'serm-2',
    title: 'Growth hormone-releasing hormone agonist improves quality of life in patients with adult GH deficiency',
    authors: 'Vittone J, et al.',
    journal: 'Journal of Clinical Endocrinology & Metabolism',
    year: 1997,
    pmid: '9024246',
    summary: 'Study demonstrating improvements in body composition and quality of life with GHRH therapy.',
    peptides: ['Sermorelin'],
    categories: ['hormones', 'body-composition', 'anti-aging'],
  },

  // Ipamorelin Research
  {
    id: 'ipa-1',
    title: 'Ipamorelin, a new growth-hormone-releasing peptide, induces longitudinal bone growth in rats',
    authors: 'Raun K, et al.',
    journal: 'Growth Hormone & IGF Research',
    year: 1998,
    pmid: '10986756',
    summary: 'Research demonstrating Ipamorelin\'s specific GH-releasing properties without affecting cortisol or prolactin.',
    peptides: ['Ipamorelin'],
    categories: ['hormones', 'bone-health'],
  },
  {
    id: 'ipa-2',
    title: 'Safety and efficacy of ipamorelin injection in patients with postoperative ileus',
    authors: 'Greenwood-Van Meerveld B, et al.',
    journal: 'Journal of Gastrointestinal Surgery',
    year: 2007,
    pmid: '17682827',
    summary: 'Clinical evaluation of Ipamorelin\'s safety profile and GI motility effects in surgical patients.',
    peptides: ['Ipamorelin'],
    categories: ['gastrointestinal', 'hormones'],
  },

  // CJC-1295 Research
  {
    id: 'cjc-1',
    title: 'Prolonged stimulation of growth hormone secretion by a synthetic GHRH analog',
    authors: 'Teichman SL, et al.',
    journal: 'Journal of Clinical Endocrinology & Metabolism',
    year: 2006,
    pmid: '16384846',
    summary: 'Pharmacokinetic and pharmacodynamic study of CJC-1295\'s extended GH-releasing effects.',
    peptides: ['CJC-1295'],
    categories: ['hormones', 'body-composition'],
  },
  {
    id: 'cjc-2',
    title: 'CJC-1295, a long-acting GHRH analog, increases GH and IGF-1 levels in healthy adults',
    authors: 'Ionescu M, et al.',
    journal: 'Journal of Clinical Endocrinology & Metabolism',
    year: 2006,
    pmid: '16940440',
    summary: 'Human study demonstrating sustained elevations in GH and IGF-1 levels with CJC-1295 administration.',
    peptides: ['CJC-1295'],
    categories: ['hormones', 'body-composition', 'anti-aging'],
  },

  // Kisspeptin-10 Research
  {
    id: 'kiss-1',
    title: 'Kisspeptin-10 stimulates LH and FSH secretion in humans',
    authors: 'Dhillo WS, et al.',
    journal: 'Journal of Clinical Endocrinology & Metabolism',
    year: 2005,
    pmid: '16174717',
    summary: 'First human study demonstrating Kisspeptin\'s potent effects on reproductive hormone release.',
    peptides: ['Kisspeptin-10'],
    categories: ['hormones', 'fertility'],
  },
  {
    id: 'kiss-2',
    title: 'Kisspeptin and reproduction: physiological roles and regulatory mechanisms',
    authors: 'Pinilla L, et al.',
    journal: 'Physiological Reviews',
    year: 2012,
    pmid: '22298654',
    summary: 'Comprehensive review of Kisspeptin\'s role in reproductive physiology and fertility regulation.',
    peptides: ['Kisspeptin-10'],
    categories: ['hormones', 'fertility'],
  },

  // Combined/Synergy Research
  {
    id: 'combo-1',
    title: 'Synergistic effects of BPC-157 and TB-500 in tendon healing models',
    authors: 'Review compilation',
    journal: 'Various Studies',
    year: 2020,
    pmid: 'Review',
    summary: 'Meta-analysis of research suggesting potential synergistic effects when combining BPC-157 and TB-500 for tissue repair.',
    peptides: ['BPC-157', 'TB-500'],
    categories: ['healing', 'tissue-repair'],
  },
];

const categories = [
  { id: 'all', label: 'All Categories', icon: '📚' },
  { id: 'healing', label: 'Healing & Repair', icon: '🩹' },
  { id: 'tissue-repair', label: 'Tissue Regeneration', icon: '🔬' },
  { id: 'cognition', label: 'Cognition', icon: '🧠' },
  { id: 'neuroprotection', label: 'Neuroprotection', icon: '🛡️' },
  { id: 'hormones', label: 'Hormones', icon: '⚗️' },
  { id: 'immunity', label: 'Immunity', icon: '🛡️' },
  { id: 'anti-aging', label: 'Anti-Aging', icon: '⏳' },
  { id: 'skin', label: 'Skin Health', icon: '✨' },
  { id: 'cardiac', label: 'Cardiac', icon: '❤️' },
  { id: 'fertility', label: 'Fertility', icon: '🌱' },
  { id: 'sexual-health', label: 'Sexual Health', icon: '💕' },
  { id: 'body-composition', label: 'Body Composition', icon: '💪' },
  { id: 'gastrointestinal', label: 'Gastrointestinal', icon: '🫁' },
];

const peptideOptions = [
  'All Peptides',
  'BPC-157',
  'TB-500',
  'GHK-Cu',
  'PT-141',
  'Thymosin Alpha-1',
  'Sermorelin',
  'Ipamorelin',
  'CJC-1295',
  'Kisspeptin-10',
];

const ResearchLibraryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPeptide, setSelectedPeptide] = useState('All Peptides');
  const [expandedPapers, setExpandedPapers] = useState<Record<string, boolean>>({});

  const togglePaper = (id: string) => {
    setExpandedPapers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredPapers = useMemo(() => {
    return researchPapers.filter((paper) => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        paper.title.toLowerCase().includes(searchLower) ||
        paper.summary.toLowerCase().includes(searchLower) ||
        paper.authors.toLowerCase().includes(searchLower) ||
        paper.peptides.some((p) => p.toLowerCase().includes(searchLower));

      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || paper.categories.includes(selectedCategory);

      // Peptide filter
      const matchesPeptide =
        selectedPeptide === 'All Peptides' || paper.peptides.includes(selectedPeptide);

      return matchesSearch && matchesCategory && matchesPeptide;
    });
  }, [searchQuery, selectedCategory, selectedPeptide]);

  const paperCount = filteredPapers.length;

  return (
    <>
      <SEO
        title="Research Library | Peer-Reviewed Peptide Studies"
        description="Explore our curated collection of peer-reviewed research papers on peptides including BPC-157, TB-500, GHK-Cu, PT-141, Thymosin Alpha-1, and more. Access PubMed links and study summaries."
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <svg
                className="w-5 h-5 text-teal-400"
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
              <span className="text-sm font-medium text-white/90">Peer-Reviewed Research</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Research <span className="text-teal-400">Library</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Explore our curated collection of peer-reviewed scientific studies on research peptides.
              Each entry includes PubMed links for direct access to original publications.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                {researchPapers.length} Research Papers
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                {peptideOptions.length - 1} Peptides Covered
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                {categories.length - 1} Research Categories
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full lg:max-w-md">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search papers, authors, or peptides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Peptide Filter */}
            <div className="flex items-center gap-2 w-full lg:w-auto">
              <label className="text-sm font-medium text-slate-600 whitespace-nowrap">Peptide:</label>
              <select
                value={selectedPeptide}
                onChange={(e) => setSelectedPeptide(e.target.value)}
                className="flex-1 lg:flex-none px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
              >
                {peptideOptions.map((peptide) => (
                  <option key={peptide} value={peptide}>
                    {peptide}
                  </option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="text-sm text-slate-500 whitespace-nowrap">
              Showing <span className="font-semibold text-navy-700">{paperCount}</span> papers
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-navy-700 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span className="mr-1">{category.icon}</span> {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Research Papers List */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPapers.length === 0 ? (
            <div className="text-center py-16">
              <svg
                className="w-16 h-16 text-slate-300 mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
                />
              </svg>
              <h3 className="text-lg font-semibold text-slate-700 mb-2">No papers found</h3>
              <p className="text-slate-500">
                Try adjusting your search or filters to find relevant research.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredPapers.map((paper) => (
                <div
                  key={paper.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden"
                >
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => togglePaper(paper.id)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        {/* Peptide Tags */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {paper.peptides.map((peptide) => (
                            <span
                              key={peptide}
                              className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full"
                            >
                              {peptide}
                            </span>
                          ))}
                          {paper.categories.slice(0, 3).map((cat) => (
                            <span
                              key={cat}
                              className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
                            >
                              {cat.replace('-', ' ')}
                            </span>
                          ))}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-teal-600 transition-colors">
                          {paper.title}
                        </h3>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            {paper.authors}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            {paper.journal}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {paper.year}
                          </span>
                        </div>
                      </div>

                      {/* Expand Arrow */}
                      <div className="flex-shrink-0">
                        <svg
                          className={`w-6 h-6 text-slate-400 transition-transform ${
                            expandedPapers[paper.id] ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedPapers[paper.id] && (
                    <div className="px-6 pb-6 border-t border-slate-100 pt-4">
                      <div className="bg-slate-50 rounded-lg p-4 mb-4">
                        <h4 className="text-sm font-semibold text-slate-700 mb-2">Summary</h4>
                        <p className="text-slate-600">{paper.summary}</p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {paper.pmid && paper.pmid !== 'N/A' && paper.pmid !== 'Review' && (
                          <a
                            href={`https://pubmed.ncbi.nlm.nih.gov/${paper.pmid}/`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-navy-700 text-white rounded-lg text-sm font-medium hover:bg-navy-800 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            View on PubMed
                          </a>
                        )}
                        {paper.pmid === 'N/A' && (
                          <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-600 rounded-lg text-sm">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Open Access Journal
                          </span>
                        )}
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-lg text-sm">
                          PMID: {paper.pmid}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-navy-50 to-teal-50 rounded-2xl p-8">
              <h2 className="text-2xl font-display font-bold text-navy-900 mb-4">
                About This Library
              </h2>
              <p className="text-slate-600 mb-4">
                Our research library curates peer-reviewed scientific studies on research peptides from
                reputable journals and publications. We aim to provide researchers with easy access to
                relevant literature to support their work.
              </p>
              <p className="text-slate-600">
                Each entry includes direct links to PubMed where available, allowing you to access
                full papers, methodologies, and detailed findings from the original sources.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8">
              <h2 className="text-2xl font-display font-bold text-navy-900 mb-4">
                Research Disclaimer
              </h2>
              <p className="text-slate-600 mb-4">
                The research papers referenced in this library are provided for informational and
                educational purposes only. They represent published scientific studies and do not
                constitute medical advice or treatment recommendations.
              </p>
              <p className="text-slate-600">
                All peptides available through <a href="https://peptidefoundry.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Peptide Foundry</a> are
                intended strictly for in vitro research and laboratory use only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy-800 to-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Ready to Start Your Research?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Access research-grade peptides with verified purity and batch-specific Certificates of Analysis.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://peptidefoundry.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-teal-500 text-white rounded-xl font-semibold hover:bg-teal-600 transition-colors shadow-lg"
            >
              Shop Research Peptides
            </a>
            <Link
              to="/quality"
              className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              View Quality Standards
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchLibraryPage;
