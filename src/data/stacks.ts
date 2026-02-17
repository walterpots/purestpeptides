export interface StackPeptide {
  slug: string;
  name: string;
  role: string;
  briefDescription: string;
}

export interface ResearchStack {
  id: string;
  name: string;
  nickname?: string;
  goal: string;
  icon: string;
  description: string;
  peptides: StackPeptide[];
  synergyExplanation: string;
  researchHighlights: string[];
  considerations: string[];
  alternativeApproach?: {
    name: string;
    description: string;
    peptides: StackPeptide[];
  };
}

export const researchGoals = [
  {
    id: 'tissue-repair',
    name: 'Tissue Repair & Healing',
    icon: '🔬',
    description: 'Research into injury recovery, tendon/ligament repair, and gastrointestinal healing',
  },
  {
    id: 'metabolic',
    name: 'Metabolic & Weight Management',
    icon: '⚡',
    description: 'Studies on glucose metabolism, appetite regulation, and body composition',
  },
  {
    id: 'growth-hormone',
    name: 'Growth Hormone Optimization',
    icon: '📈',
    description: 'Research into GH axis stimulation and IGF-1 pathway modulation',
  },
  {
    id: 'recovery',
    name: 'Recovery & Performance',
    icon: '💪',
    description: 'Comprehensive research combining multiple regenerative pathways',
  },
  {
    id: 'skin-aesthetic',
    name: 'Skin & Aesthetic Research',
    icon: '✨',
    description: 'Studies on melanogenesis, pigmentation, and melanocortin pathways',
  },
];

export const stacks: ResearchStack[] = [
  {
    id: 'tissue-repair',
    name: 'The Wolverine Stack',
    nickname: 'BPC-157 + TB-500',
    goal: 'tissue-repair',
    icon: '🔬',
    description:
      'The most researched regenerative peptide combination, combining two peptides that work through complementary mechanisms to support tissue repair.',
    peptides: [
      {
        slug: 'bpc-157',
        name: 'BPC-157',
        role: 'Primary Healing Agent',
        briefDescription:
          'Derived from gastric juice protein, BPC-157 modulates growth factors (VEGF, EGF) and the nitric oxide system to promote angiogenesis and tissue repair.',
      },
      {
        slug: 'tb-500',
        name: 'TB-500',
        role: 'Cell Migration Promoter',
        briefDescription:
          'Synthetic fragment of thymosin beta-4, TB-500 regulates actin dynamics and promotes cell motility—essential for wound healing and tissue remodeling.',
      },
    ],
    synergyExplanation:
      'BPC-157 and TB-500 work through distinct but complementary mechanisms. BPC-157 primarily enhances angiogenesis (new blood vessel formation) and growth factor signaling, while TB-500 promotes cell migration and cytoskeletal reorganization. Together, they address multiple aspects of tissue repair: BPC-157 brings blood supply and growth signals, while TB-500 enables cells to migrate to injury sites and reorganize. This dual approach has made the combination popular in preclinical regenerative research.',
    researchHighlights: [
      'BPC-157: Accelerated tendon-to-bone healing in rat models (Staresinic et al.)',
      'TB-500: Enhanced cardiac recovery in ischemia-reperfusion studies',
      'Combined: Anecdotal reports suggest faster recovery timelines in various tissue types',
      'Both peptides demonstrate anti-inflammatory properties through different pathways',
      'BPC-157 shows gastric stability; TB-500 demonstrates systemic distribution',
    ],
    considerations: [
      'Research is primarily preclinical (animal models)',
      'No FDA-approved human clinical trials for this combination',
      'Individual responses may vary significantly',
      'Proper storage and reconstitution essential for peptide stability',
      'For research purposes only',
    ],
  },
  {
    id: 'metabolic',
    name: 'Incretin Optimization',
    goal: 'metabolic',
    icon: '⚡',
    description:
      'GLP-1 based approaches for metabolic research, ranging from single-target to dual-receptor strategies.',
    peptides: [
      {
        slug: 'semaglutide',
        name: 'Semaglutide',
        role: 'GLP-1 Receptor Agonist',
        briefDescription:
          'Long-acting GLP-1 agonist with weekly dosing profile. Stimulates glucose-dependent insulin secretion, slows gastric emptying, and acts on CNS appetite centers.',
      },
    ],
    synergyExplanation:
      'For metabolic research, semaglutide represents the gold standard single-target approach. Its once-weekly dosing (enabled by C18 fatty acid modification for albumin binding) makes it practical for extended studies. The peptide activates GLP-1 receptors in the pancreas (insulin secretion), gut (gastric emptying), and brain (appetite regulation), providing comprehensive metabolic effects through a single pathway.',
    researchHighlights: [
      'Extensive Phase 3 clinical data demonstrating efficacy and safety',
      'Significant effects on both glycemic control and body weight',
      'Cardiovascular outcome benefits in high-risk populations (SUSTAIN-6, SELECT trials)',
      'Once-weekly administration enabled by sophisticated peptide engineering',
      'Well-characterized dose-response relationship',
    ],
    considerations: [
      'GI side effects common during titration period in clinical studies',
      'Requires gradual dose escalation in most research protocols',
      'Effects are dose-dependent and reversible upon discontinuation',
      'Extensively studied with well-understood safety profile',
      'For research purposes only',
    ],
    alternativeApproach: {
      name: 'Dual Incretin Approach',
      description:
        'For research requiring enhanced metabolic effects, tirzepatide offers dual GLP-1/GIP receptor activation.',
      peptides: [
        {
          slug: 'tirzepatide',
          name: 'Tirzepatide',
          role: 'Dual GLP-1/GIP Agonist',
          briefDescription:
            'First-in-class dual agonist targeting both incretin receptors. Clinical trials show superior efficacy compared to GLP-1 agonists alone.',
        },
      ],
    },
  },
  {
    id: 'growth-hormone',
    name: 'GH Axis Optimization',
    nickname: 'CJC-1295 + Ipamorelin',
    goal: 'growth-hormone',
    icon: '📈',
    description:
      'The classic GHRH + GHRP combination for research into growth hormone release pathways, leveraging two complementary stimulation mechanisms.',
    peptides: [
      {
        slug: 'cjc-1295',
        name: 'CJC-1295',
        role: 'GHRH Analog',
        briefDescription:
          'Synthetic GHRH analog that stimulates pituitary somatotrophs. Available with/without DAC modification for different half-life profiles.',
      },
      {
        slug: 'ipamorelin',
        name: 'Ipamorelin',
        role: 'Selective GH Secretagogue',
        briefDescription:
          'Highly selective ghrelin receptor agonist. Stimulates GH release without affecting cortisol, prolactin, or aldosterone—uniquely clean profile.',
      },
    ],
    synergyExplanation:
      'CJC-1295 and Ipamorelin work through different receptor systems that converge on growth hormone release. CJC-1295 activates GHRH receptors, priming the pituitary for GH synthesis and release. Ipamorelin activates ghrelin receptors (GHS-R1a), triggering GH release through a separate pathway. When combined, they produce a synergistic effect—greater GH release than either alone. Importantly, this combination maintains physiological pulsatility rather than creating sustained elevation, which may be more favorable for long-term research.',
    researchHighlights: [
      'Synergistic GH release: combined effect exceeds sum of individual effects',
      'Maintains natural GH pulsatility patterns',
      'Ipamorelin: no significant cortisol or prolactin elevation at GH-stimulating doses',
      'CJC-1295 with DAC: enables less frequent dosing (weekly vs. daily)',
      'Both peptides well-characterized in preclinical and early clinical research',
    ],
    considerations: [
      'Timing of administration may affect GH pulse amplitude',
      'CJC-1295 with vs. without DAC: different dosing protocols',
      'Individual GH response varies based on age and other factors',
      'Long-term effects of sustained GH elevation under investigation',
      'For research purposes only',
    ],
  },
  {
    id: 'recovery',
    name: 'Comprehensive Recovery Protocol',
    goal: 'recovery',
    icon: '💪',
    description:
      'An advanced multi-peptide approach combining tissue repair with growth hormone optimization for comprehensive recovery research.',
    peptides: [
      {
        slug: 'bpc-157',
        name: 'BPC-157',
        role: 'Tissue Repair',
        briefDescription:
          'Promotes angiogenesis and modulates growth factor signaling for tissue healing.',
      },
      {
        slug: 'tb-500',
        name: 'TB-500',
        role: 'Cell Migration',
        briefDescription:
          'Enhances cell motility and cytoskeletal dynamics for tissue remodeling.',
      },
      {
        slug: 'cjc-1295',
        name: 'CJC-1295',
        role: 'GH Stimulation (GHRH)',
        briefDescription:
          'Stimulates growth hormone synthesis and release from the pituitary.',
      },
      {
        slug: 'ipamorelin',
        name: 'Ipamorelin',
        role: 'GH Stimulation (GHRP)',
        briefDescription:
          'Selective ghrelin receptor agonist for clean GH release without hormonal side effects.',
      },
    ],
    synergyExplanation:
      'This comprehensive approach combines the Wolverine Stack (BPC-157 + TB-500) with GH axis optimization (CJC-1295 + Ipamorelin). The rationale: tissue repair requires both local healing factors AND systemic support. BPC-157 and TB-500 work directly at injury sites, while elevated GH and IGF-1 from the CJC/Ipamorelin combination provide systemic anabolic support. Growth hormone is known to enhance protein synthesis, collagen production, and overall tissue remodeling—potentially amplifying the effects of the regenerative peptides.',
    researchHighlights: [
      'Addresses both local (tissue-specific) and systemic (hormonal) aspects of recovery',
      'GH/IGF-1 axis known to support collagen synthesis and tissue remodeling',
      'BPC-157 + TB-500 provide complementary regenerative mechanisms',
      'Theoretical synergy between local healing and systemic anabolic support',
      'Advanced protocol for comprehensive recovery research models',
    ],
    considerations: [
      'Complex protocol requiring careful planning and monitoring',
      'More variables to control in research design',
      'Cost and logistics of multi-peptide protocols',
      'Limited direct research on this specific combination',
      'For advanced research purposes only',
    ],
  },
  {
    id: 'skin-aesthetic',
    name: 'Melanocortin Research',
    goal: 'skin-aesthetic',
    icon: '✨',
    description:
      'Research into the melanocortin system, melanogenesis, and related CNS pathways.',
    peptides: [
      {
        slug: 'melanotan-ii',
        name: 'Melanotan II',
        role: 'Non-Selective MC Agonist',
        briefDescription:
          'Synthetic α-MSH analog that activates multiple melanocortin receptors (MC1R-MC5R). Primary research focus on melanogenesis and pigmentation.',
      },
    ],
    synergyExplanation:
      'Melanotan II acts primarily through MC1R on melanocytes, stimulating melanin production through the cAMP/PKA/tyrosinase pathway. Its non-selective nature means it also activates MC3R and MC4R in the CNS, which has led to observations of appetite and behavioral effects in research settings. For isolated melanogenesis research, MT-II remains the primary tool. For research specifically focused on CNS melanocortin effects, PT-141 (bremelanotide) offers a modified structure with different receptor selectivity.',
    researchHighlights: [
      'Well-characterized mechanism of melanin induction',
      'Foundation compound for melanocortin receptor research',
      'Extensive structure-activity relationship data available',
      'Photoprotective effects demonstrated through increased melanin',
      'Platform for understanding MC receptor biology',
    ],
    considerations: [
      'Non-selective receptor activation produces multiple effects',
      'Proper UV exposure research protocols required',
      'Individual pigmentation response varies significantly',
      'Research primarily preclinical; limited controlled human data',
      'For research purposes only',
    ],
    alternativeApproach: {
      name: 'CNS-Focused Melanocortin Research',
      description:
        'For research focused on central melanocortin pathways rather than pigmentation.',
      peptides: [
        {
          slug: 'pt-141',
          name: 'PT-141',
          role: 'CNS Melanocortin Agonist',
          briefDescription:
            'Modified from MT-II with different receptor selectivity. Primary activity at MC3R/MC4R in hypothalamus. Has completed Phase 3 clinical trials.',
        },
      ],
    },
  },
];

export const getStackByGoal = (goalId: string): ResearchStack | undefined => {
  return stacks.find((stack) => stack.goal === goalId);
};
