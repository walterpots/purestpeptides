export interface Peptide {
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  benefits: string[];
  mechanismOfAction: string;
  researchHighlights: string[];
  molecularInfo: {
    sequence?: string;
    molecularWeight?: string;
    halfLife?: string;
    storage?: string;
  };
  articleSlug?: string;
  shopUrl: string;
}

export const peptides: Peptide[] = [
  {
    slug: 'bpc-157',
    name: 'BPC-157',
    category: 'Regenerative',
    description:
      'Body Protection Compound-157 is a synthetic peptide derived from a protein found in human gastric juice. It has been extensively studied for its regenerative properties in preclinical research.',
    longDescription:
      'BPC-157, or Body Protection Compound-157, is a 15-amino acid synthetic peptide derived from a protective protein naturally present in human gastric juice. First isolated and characterized in the 1990s, BPC-157 has become one of the most extensively researched peptides in the field of regenerative medicine. Unlike many peptides that are rapidly degraded in acidic environments, BPC-157 demonstrates remarkable stability in gastric juice, making it unique among regenerative peptides. Over three decades of preclinical research have explored its potential applications in tissue repair, gastrointestinal protection, and wound healing.',
    benefits: [
      'Tissue repair and regeneration research',
      'Gastrointestinal protection studies',
      'Tendon and ligament healing research',
      'Angiogenesis and vascular studies',
    ],
    mechanismOfAction:
      'BPC-157 exerts its effects through multiple interconnected pathways. It modulates growth factors including VEGF (vascular endothelial growth factor) and EGF (epidermal growth factor), promoting angiogenesis and tissue repair. The peptide interacts with the nitric oxide system, influencing blood flow regulation and inflammation. Research has also demonstrated effects on the FAK-paxillin pathway, which is essential for cell migration and adhesion—key processes in wound healing. Additionally, BPC-157 appears to upregulate VEGFR2 receptor expression, potentially enhancing the body\'s response to vascular growth signals.',
    researchHighlights: [
      'Accelerated healing of transected tendons in rat models',
      'Enhanced recovery from muscle crush injuries',
      'Improved healing of gastric ulcers and GI lesions',
      'Demonstrated angiogenic properties promoting new blood vessel formation',
      'Neuroprotective effects observed in various preclinical models',
    ],
    molecularInfo: {
      sequence: 'Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val',
      molecularWeight: '1419.53 g/mol',
      halfLife: 'Approximately 4 hours',
      storage: 'Store lyophilized at -20°C. Reconstituted solution stable at 2-8°C for up to 4 weeks.',
    },
    articleSlug: 'bpc-157-guide',
    shopUrl: 'https://peptidefoundry.com/peptides/bpc-157',
  },
  {
    slug: 'semaglutide',
    name: 'Semaglutide',
    category: 'GLP-1 Agonist',
    description:
      'A long-acting GLP-1 receptor agonist with a weekly dosing profile. One of the most studied peptides for metabolic research applications.',
    longDescription:
      'Semaglutide is a groundbreaking long-acting glucagon-like peptide-1 (GLP-1) receptor agonist that has revolutionized metabolic research. Developed through sophisticated peptide engineering, semaglutide features strategic modifications that extend its half-life to approximately one week, enabling once-weekly dosing in clinical applications. The peptide mimics the action of naturally occurring GLP-1, an incretin hormone produced in the intestines that plays crucial roles in glucose homeostasis, appetite regulation, and metabolic function. Clinical trials have demonstrated remarkable efficacy in both glycemic control and weight management research.',
    benefits: [
      'Glucose metabolism research',
      'Weight regulation studies',
      'Cardiovascular outcome research',
      'Appetite signaling investigations',
    ],
    mechanismOfAction:
      'Semaglutide binds to and activates GLP-1 receptors, triggering a cascade of metabolic effects. It stimulates glucose-dependent insulin secretion from pancreatic beta cells while suppressing glucagon release, thereby lowering blood glucose levels. The peptide slows gastric emptying, contributing to feelings of satiety, and acts on brain centers involved in appetite regulation to reduce hunger and food intake. Key structural modifications include a C18 fatty acid chain enabling albumin binding for extended circulation, an Aib substitution at position 8 for DPP-4 resistance, and an amino acid change at position 34 to prevent fatty acid interference with receptor binding.',
    researchHighlights: [
      'Superior glycemic control in type 2 diabetes research models',
      'Significant weight reduction observed in obesity studies',
      'Cardiovascular outcome benefits demonstrated in high-risk populations',
      'Potential applications in non-alcoholic steatohepatitis (NASH) research',
      'Once-weekly dosing profile enabled by extended half-life engineering',
    ],
    molecularInfo: {
      molecularWeight: '4113.58 g/mol',
      halfLife: 'Approximately 7 days',
      storage: 'Store lyophilized at -20°C. Reconstituted solution stable at 2-8°C.',
    },
    articleSlug: 'glp-1-peptides-explained',
    shopUrl: 'https://peptidefoundry.com/peptides/semaglutide',
  },
  {
    slug: 'tirzepatide',
    name: 'Tirzepatide',
    category: 'Dual GLP-1/GIP Agonist',
    description:
      'A novel dual agonist targeting both GLP-1 and GIP receptors, representing the next generation of incretin-based research compounds.',
    longDescription:
      'Tirzepatide represents the next evolution in incretin-based research, featuring a novel dual mechanism that targets both GLP-1 and GIP (glucose-dependent insulinotropic polypeptide) receptors. This first-in-class dual agonist leverages the complementary actions of two incretin hormones to achieve enhanced metabolic effects. GIP, like GLP-1, is an incretin hormone that stimulates insulin secretion in response to food intake, but through distinct receptor pathways. By activating both receptor systems, tirzepatide provides a more comprehensive approach to metabolic modulation, with clinical research demonstrating superior outcomes compared to single-target GLP-1 agonists.',
    benefits: [
      'Dual incretin pathway research',
      'Enhanced metabolic studies',
      'Adipose tissue investigations',
      'Comparative incretin research',
    ],
    mechanismOfAction:
      'Tirzepatide functions as an imbalanced dual agonist, with stronger activity at GIP receptors relative to GLP-1 receptors. It stimulates glucose-dependent insulin secretion through both GLP-1 and GIP receptor activation, providing enhanced glycemic control through complementary pathways. The dual mechanism promotes greater effects on appetite regulation and weight management. Research suggests the GIP component may contribute additional effects on adipose tissue metabolism, potentially enhancing fat oxidation and metabolic adaptation beyond what is achieved with GLP-1 agonism alone.',
    researchHighlights: [
      'Superior glycemic control compared to GLP-1 agonists alone in clinical studies',
      'Greater weight reduction observed in comparative research',
      'Improvements in lipid profiles and blood pressure parameters',
      'First-in-class dual incretin mechanism',
      'Enhanced beta cell function preservation in metabolic research models',
    ],
    molecularInfo: {
      molecularWeight: '4813.45 g/mol',
      halfLife: 'Approximately 5 days',
      storage: 'Store lyophilized at -20°C. Reconstituted solution stable at 2-8°C.',
    },
    articleSlug: 'glp-1-peptides-explained',
    shopUrl: 'https://peptidefoundry.com/peptides/tirzepatide',
  },
  {
    slug: 'tb-500',
    name: 'TB-500',
    category: 'Regenerative',
    description:
      'Thymosin Beta-4 fragment, a synthetic version of a naturally occurring peptide present in high concentrations at wound sites.',
    longDescription:
      'TB-500 is a synthetic peptide representing the active region of thymosin beta-4 (Tβ4), a 43-amino acid protein found in virtually all human and animal cells. First identified in the 1960s, thymosin beta-4 is one of the most abundant peptides in human cells, present at concentrations of 100-500 μM in most cell types. Despite its name suggesting thymic origin, Tβ4 is produced throughout the body and plays fundamental roles in actin regulation, cell migration, and wound healing. TB-500 captures the key functional domain responsible for these activities, providing researchers with a powerful tool for studying regenerative processes.',
    benefits: [
      'Wound healing research',
      'Cell migration studies',
      'Anti-inflammatory investigations',
      'Tissue remodeling research',
    ],
    mechanismOfAction:
      'TB-500\'s primary mechanism involves its actin-binding domain (the LKKTETQ sequence), which sequesters G-actin monomers and regulates cytoskeletal dynamics. This enables the peptide to promote cell motility and migration—essential processes in wound healing and tissue repair. TB-500 also promotes angiogenesis through upregulation of VEGF and enhanced endothelial cell migration. Anti-inflammatory effects are achieved through modulation of cytokine expression and reduced inflammatory cell infiltration. The peptide\'s systemic distribution allows it to affect tissues throughout the body.',
    researchHighlights: [
      'Accelerated wound closure rates in preclinical models',
      'Enhanced cardiac recovery in ischemia-reperfusion studies',
      'Promotion of corneal healing with reduced inflammation',
      'Neuroprotective potential in CNS repair research',
      'Phase 1 and 2 clinical trials conducted with parent compound Tβ4',
    ],
    molecularInfo: {
      sequence: 'Full Tβ4: 43 amino acids with active LKKTETQ region',
      molecularWeight: '4963 g/mol (full Tβ4)',
      halfLife: 'Variable; tissue-dependent distribution',
      storage: 'Store lyophilized at -20°C. Reconstituted solution stable at 2-8°C for 2-4 weeks.',
    },
    articleSlug: 'tb-500-guide',
    shopUrl: 'https://peptidefoundry.com/peptides/tb-500',
  },
  {
    slug: 'cjc-1295',
    name: 'CJC-1295',
    category: 'Growth Hormone',
    description:
      'A synthetic growth hormone releasing hormone (GHRH) analog that stimulates GH release from the pituitary. Often studied with or without DAC modification.',
    longDescription:
      'CJC-1295 is a synthetic analog of growth hormone releasing hormone (GHRH) designed to stimulate the release of growth hormone from the pituitary gland. The peptide was developed to provide a more stable and long-acting alternative to natural GHRH, which has a very short half-life of only minutes. CJC-1295 is available in two forms: with and without Drug Affinity Complex (DAC). The DAC modification enables binding to serum albumin, extending the half-life from hours to approximately one week. Research with CJC-1295 focuses on understanding the growth hormone axis, IGF-1 production, and metabolic regulation.',
    benefits: [
      'Growth hormone axis research',
      'Pituitary function studies',
      'IGF-1 pathway investigations',
      'Metabolic rate research',
    ],
    mechanismOfAction:
      'CJC-1295 binds to and activates GHRH receptors on pituitary somatotroph cells, stimulating the synthesis and pulsatile release of growth hormone. This triggers downstream production of insulin-like growth factor 1 (IGF-1) from the liver and other tissues. The peptide\'s modifications include amino acid substitutions that confer resistance to enzymatic degradation and, in the DAC version, a reactive moiety that forms covalent bonds with serum albumin for extended circulation. Unlike direct GH administration, CJC-1295 maintains physiological pulsatility of growth hormone release.',
    researchHighlights: [
      'Sustained elevation of growth hormone and IGF-1 levels in preclinical studies',
      'Preservation of natural GH pulsatility patterns',
      'Extended half-life through DAC modification enabling weekly dosing',
      'Synergistic effects observed when combined with GHRP peptides',
      'Applications in age-related hormone research models',
    ],
    molecularInfo: {
      molecularWeight: '3367.9 g/mol (without DAC)',
      halfLife: '30 minutes (without DAC); 6-8 days (with DAC)',
      storage: 'Store lyophilized at -20°C. Reconstituted solution stable at 2-8°C.',
    },
    shopUrl: 'https://peptidefoundry.com/peptides/cjc-1295',
  },
  {
    slug: 'ipamorelin',
    name: 'Ipamorelin',
    category: 'Growth Hormone',
    description:
      'A selective growth hormone secretagogue that stimulates the release of growth hormone from the pituitary with high specificity.',
    longDescription:
      'Ipamorelin is a highly selective growth hormone secretagogue (GHS) that stimulates the release of growth hormone through activation of the ghrelin/growth hormone secretagogue receptor (GHS-R). Developed as a pentapeptide with improved selectivity over earlier secretagogues, ipamorelin stands out for its clean pharmacological profile. Unlike other GHS compounds, ipamorelin does not significantly affect cortisol, prolactin, or aldosterone levels at growth hormone-stimulating doses. This selectivity makes it particularly valuable for research applications where isolated growth hormone effects are desired without confounding hormonal changes.',
    benefits: [
      'Selective GH release studies',
      'Ghrelin receptor research',
      'Sleep cycle investigations',
      'Body composition studies',
    ],
    mechanismOfAction:
      'Ipamorelin binds to ghrelin receptors (GHS-R1a) in the pituitary gland and hypothalamus, triggering growth hormone release through mechanisms distinct from GHRH. The peptide mimics the action of ghrelin but with greater selectivity, stimulating GH secretion without the appetite-stimulating effects typically associated with ghrelin signaling. Ipamorelin produces dose-dependent increases in growth hormone with a characteristic pulse pattern. Its selectivity is attributed to its minimal activation of other receptor subtypes and downstream pathways that would otherwise affect cortisol and prolactin.',
    researchHighlights: [
      'Highly selective GH stimulation without cortisol or prolactin elevation',
      'Dose-dependent and predictable GH response patterns',
      'Synergistic effects when combined with GHRH analogs like CJC-1295',
      'Applications in circadian rhythm and sleep research',
      'Minimal desensitization observed with repeated administration',
    ],
    molecularInfo: {
      sequence: 'Aib-His-D-2-Nal-D-Phe-Lys-NH2',
      molecularWeight: '711.85 g/mol',
      halfLife: 'Approximately 2 hours',
      storage: 'Store lyophilized at -20°C. Reconstituted solution stable at 2-8°C.',
    },
    shopUrl: 'https://peptidefoundry.com/peptides/ipamorelin',
  },
  {
    slug: 'melanotan-ii',
    name: 'Melanotan II',
    category: 'Melanocortin',
    description:
      'A synthetic analog of alpha-melanocyte stimulating hormone (α-MSH) that has been studied for its effects on melanogenesis.',
    longDescription:
      'Melanotan II (MT-II) is a synthetic cyclic lactam analog of alpha-melanocyte stimulating hormone (α-MSH), originally developed at the University of Arizona for research into skin pigmentation and UV protection. The peptide is a non-selective agonist of melanocortin receptors, with activity at MC1R (melanogenesis), MC3R (energy homeostasis), MC4R (appetite and sexual function), and MC5R (exocrine function). This broad receptor profile has led to research interest across multiple fields, from dermatology to behavioral neuroscience. MT-II\'s effects on melanin production have been extensively characterized in both preclinical and clinical research settings.',
    benefits: [
      'Melanocortin pathway research',
      'Skin pigmentation studies',
      'MC receptor investigations',
      'Photoprotection research',
    ],
    mechanismOfAction:
      'Melanotan II activates melanocortin receptors, particularly MC1R on melanocytes in the skin. Receptor activation stimulates adenylyl cyclase, increasing cAMP levels and activating protein kinase A (PKA). This cascade upregulates tyrosinase, the rate-limiting enzyme in melanin synthesis, leading to increased production and distribution of melanin pigment. The cyclic structure of MT-II provides enhanced stability and receptor binding compared to linear α-MSH. Activity at MC4R in the hypothalamus contributes to effects on appetite suppression and sexual function observed in research studies.',
    researchHighlights: [
      'Demonstrated induction of melanogenesis and skin darkening',
      'Photoprotective effects through increased melanin production',
      'Central nervous system effects via MC3R and MC4R activation',
      'Extensive structure-activity relationship studies informing melanocortin drug design',
      'Foundation for development of selective melanocortin agonists',
    ],
    molecularInfo: {
      sequence: 'Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-NH2',
      molecularWeight: '1024.18 g/mol',
      halfLife: 'Approximately 1-2 hours',
      storage: 'Store lyophilized at -20°C protected from light. Reconstituted solution stable at 2-8°C.',
    },
    shopUrl: 'https://peptidefoundry.com/peptides/melanotan-ii',
  },
  {
    slug: 'pt-141',
    name: 'PT-141',
    category: 'Melanocortin',
    description:
      'Also known as Bremelanotide, PT-141 is a melanocortin receptor agonist studied for its central nervous system effects.',
    longDescription:
      'PT-141, also known as Bremelanotide, is a cyclic heptapeptide melanocortin receptor agonist developed from Melanotan II. While MT-II is a non-selective melanocortin agonist, PT-141 was designed with a modified structure that alters its receptor selectivity profile, with primary activity at MC3R and MC4R in the central nervous system. Originally investigated for its effects on sexual function, PT-141 works through CNS mechanisms rather than vascular pathways. The peptide has been the subject of extensive clinical research, including Phase 3 trials, making it one of the most clinically characterized melanocortin peptides.',
    benefits: [
      'CNS melanocortin research',
      'Behavioral studies',
      'Receptor binding investigations',
      'Neuroendocrine research',
    ],
    mechanismOfAction:
      'PT-141 activates melanocortin receptors, particularly MC3R and MC4R, in the central nervous system. Unlike treatments that work through peripheral vascular mechanisms, PT-141 acts on neural pathways involved in arousal and desire. Receptor activation in the hypothalamus triggers downstream signaling cascades affecting dopaminergic and oxytocinergic pathways. The peptide\'s cyclic structure (modified from MT-II by removal of the C-terminal amide) provides a distinct receptor binding profile and pharmacokinetic properties compared to its parent compound.',
    researchHighlights: [
      'CNS-mediated mechanism distinct from vascular approaches',
      'Completed Phase 3 clinical trials with regulatory approval for specific indications',
      'Activation of hypothalamic melanocortin pathways',
      'Well-characterized safety and tolerability profile from extensive clinical research',
      'Platform for understanding central melanocortin signaling',
    ],
    molecularInfo: {
      sequence: 'Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]',
      molecularWeight: '1025.18 g/mol',
      halfLife: 'Approximately 2-4 hours',
      storage: 'Store lyophilized at -20°C. Reconstituted solution stable at 2-8°C.',
    },
    shopUrl: 'https://peptidefoundry.com/peptides/pt-141',
  },
];

export const getPeptideBySlug = (slug: string): Peptide | undefined => {
  return peptides.find((peptide) => peptide.slug === slug);
};
