export interface Peptide {
  name: string;
  category: string;
  description: string;
  benefits: string[];
  articleSlug?: string;
  shopUrl: string;
}

export const peptides: Peptide[] = [
  {
    name: 'BPC-157',
    category: 'Regenerative',
    description:
      'Body Protection Compound-157 is a synthetic peptide derived from a protein found in human gastric juice. It has been extensively studied for its regenerative properties in preclinical research.',
    benefits: [
      'Tissue repair and regeneration research',
      'Gastrointestinal protection studies',
      'Tendon and ligament healing research',
      'Angiogenesis and vascular studies',
    ],
    articleSlug: 'bpc-157-guide',
    shopUrl: 'https://peptidefoundry.com/products/bpc-157',
  },
  {
    name: 'Semaglutide',
    category: 'GLP-1 Agonist',
    description:
      'A long-acting GLP-1 receptor agonist with a weekly dosing profile. One of the most studied peptides for metabolic research applications.',
    benefits: [
      'Glucose metabolism research',
      'Weight regulation studies',
      'Cardiovascular outcome research',
      'Appetite signaling investigations',
    ],
    articleSlug: 'glp-1-peptides-explained',
    shopUrl: 'https://peptidefoundry.com/products/semaglutide',
  },
  {
    name: 'Tirzepatide',
    category: 'Dual GLP-1/GIP Agonist',
    description:
      'A novel dual agonist targeting both GLP-1 and GIP receptors, representing the next generation of incretin-based research compounds.',
    benefits: [
      'Dual incretin pathway research',
      'Enhanced metabolic studies',
      'Adipose tissue investigations',
      'Comparative incretin research',
    ],
    articleSlug: 'glp-1-peptides-explained',
    shopUrl: 'https://peptidefoundry.com/products/tirzepatide',
  },
  {
    name: 'TB-500',
    category: 'Regenerative',
    description:
      'Thymosin Beta-4 fragment, a synthetic version of a naturally occurring peptide present in high concentrations at wound sites.',
    benefits: [
      'Wound healing research',
      'Cell migration studies',
      'Anti-inflammatory investigations',
      'Tissue remodeling research',
    ],
    articleSlug: 'tb-500-guide',
    shopUrl: 'https://peptidefoundry.com/products/tb-500',
  },
  {
    name: 'CJC-1295',
    category: 'Growth Hormone',
    description:
      'A synthetic growth hormone releasing hormone (GHRH) analog that stimulates GH release from the pituitary. Often studied with or without DAC modification.',
    benefits: [
      'Growth hormone axis research',
      'Pituitary function studies',
      'IGF-1 pathway investigations',
      'Metabolic rate research',
    ],
    shopUrl: 'https://peptidefoundry.com/products/cjc-1295',
  },
  {
    name: 'Ipamorelin',
    category: 'Growth Hormone',
    description:
      'A selective growth hormone secretagogue that stimulates the release of growth hormone from the pituitary with high specificity.',
    benefits: [
      'Selective GH release studies',
      'Ghrelin receptor research',
      'Sleep cycle investigations',
      'Body composition studies',
    ],
    shopUrl: 'https://peptidefoundry.com/products/ipamorelin',
  },
  {
    name: 'Melanotan II',
    category: 'Melanocortin',
    description:
      'A synthetic analog of alpha-melanocyte stimulating hormone (α-MSH) that has been studied for its effects on melanogenesis.',
    benefits: [
      'Melanocortin pathway research',
      'Skin pigmentation studies',
      'MC receptor investigations',
      'Photoprotection research',
    ],
    shopUrl: 'https://peptidefoundry.com/products/melanotan-ii',
  },
  {
    name: 'PT-141',
    category: 'Melanocortin',
    description:
      'Also known as Bremelanotide, PT-141 is a melanocortin receptor agonist studied for its central nervous system effects.',
    benefits: [
      'CNS melanocortin research',
      'Behavioral studies',
      'Receptor binding investigations',
      'Neuroendocrine research',
    ],
    shopUrl: 'https://peptidefoundry.com/products/pt-141',
  },
];
