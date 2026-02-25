import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

type Category = 'All' | 'Healing & Recovery' | 'Growth & Body Composition' | 'Skin & Anti-Aging' | 'Metabolic' | 'Cognitive & Neuropeptides';

interface Protocol {
  id: string;
  name: string;
  fullName?: string;
  category: Exclude<Category, 'All'>;
  overview: string;
  dose: string;
  frequency: string;
  cycleLength: string;
  timing: string;
  notes: string;
  mechanism: string;
  color: string;
  accentColor: string;
}

const protocols: Protocol[] = [
  {
    id: 'bpc-157',
    name: 'BPC-157',
    fullName: 'Body Protection Compound 157',
    category: 'Healing & Recovery',
    overview: 'A synthetic pentadecapeptide derived from human gastric juice protein, most extensively studied for accelerating tissue repair in gut, tendon, ligament, and bone models.',
    dose: '250–500 mcg',
    frequency: 'Twice daily (AM/PM)',
    cycleLength: '4–12 weeks',
    timing: 'Subcutaneous injection, administered away from the injury site',
    notes: 'Research has used both systemic (subcutaneous) and local injection protocols. Most studied for gut healing and tendon repair. Some protocols use oral administration for gastrointestinal applications.',
    mechanism: 'VEGFR2 / nitric oxide pathway',
    color: 'from-teal-600/20 to-navy-800/40',
    accentColor: 'teal-400',
  },
  {
    id: 'tb-500',
    name: 'TB-500',
    fullName: 'Thymosin Beta-4 Fragment',
    category: 'Healing & Recovery',
    overview: 'A synthetic analog of the naturally occurring Thymosin Beta-4 protein, studied for its role in actin regulation, angiogenesis, and broad-spectrum tissue regeneration.',
    dose: '2–5 mg',
    frequency: '2× per week (loading phase 4–6 wk), then 1× per week (maintenance)',
    cycleLength: '6–12 weeks',
    timing: 'Subcutaneous injection',
    notes: 'Frequently studied alongside BPC-157 for synergistic healing effects. Loading/maintenance split is the standard research protocol. Promotes angiogenesis and reduces inflammation.',
    mechanism: 'Actin-sequestering / G-actin binding',
    color: 'from-navy-700/20 to-teal-600/20',
    accentColor: 'teal-300',
  },
  {
    id: 'cjc-1295',
    name: 'CJC-1295 (DAC)',
    fullName: 'Growth Hormone Releasing Hormone Analog with Drug Affinity Complex',
    category: 'Growth & Body Composition',
    overview: 'A modified GHRH analog with the Drug Affinity Complex (DAC) modification that extends plasma half-life to approximately 8 days, enabling once-weekly dosing in research models.',
    dose: '1–2 mg',
    frequency: 'Once weekly (long half-life with DAC)',
    cycleLength: '8–12 weeks',
    timing: 'Subcutaneous injection, any time of day',
    notes: 'GHRH analog that stimulates pituitary GH release via a sustained "bleed" effect. Commonly studied in combination with Ipamorelin for synergistic GH secretion. The DAC modification is key to its extended action.',
    mechanism: 'GHRH receptor agonist / pituitary GH release',
    color: 'from-navy-600/20 to-navy-900/40',
    accentColor: 'navy-400',
  },
  {
    id: 'ipamorelin',
    name: 'Ipamorelin',
    fullName: 'Ipamorelin Pentapeptide',
    category: 'Growth & Body Composition',
    overview: 'A selective growth hormone secretagogue and ghrelin mimetic with high specificity for the GH-releasing pathway, minimal cortisol or prolactin stimulation relative to other GHRPs.',
    dose: '200–300 mcg',
    frequency: '2–3× daily',
    cycleLength: '8–12 weeks',
    timing: 'Subcutaneous, ideally in a fasted state — pre-sleep dose most common in research',
    notes: 'GHRP that works synergistically with CJC-1295 — the combination is among the most studied GH-axis protocols. Pre-sleep dosing aligns with natural GH pulse timing. Selective receptor profile makes it a preferred GHRP in research.',
    mechanism: 'Ghrelin receptor (GHS-R1a) agonist',
    color: 'from-navy-700/25 to-slate-800/40',
    accentColor: 'slate-300',
  },
  {
    id: 'ghk-cu',
    name: 'GHK-Cu',
    fullName: 'Glycyl-L-histidyl-L-lysine Copper Complex',
    category: 'Skin & Anti-Aging',
    overview: 'A naturally occurring copper peptide that declines with age, researched extensively for its role in collagen/elastin synthesis, wound healing, angiogenesis, and gene expression modulation.',
    dose: '0.5–2 mg',
    frequency: 'Daily',
    cycleLength: 'Ongoing or 8-week cycles with 4-week breaks',
    timing: 'Subcutaneous injection (most common in research) or topical application',
    notes: 'Well-researched for skin regeneration and wound healing. Promotes collagen synthesis, angiogenesis, and antioxidant defenses. Topical concentration typically 0.05–1% in cosmetic research. Subcutaneous protocols use lower mcg-range doses.',
    mechanism: 'Copper-mediated collagen induction / TGF-β modulation',
    color: 'from-amber-600/15 to-navy-800/40',
    accentColor: 'amber-400',
  },
  {
    id: 'semaglutide',
    name: 'Semaglutide',
    fullName: 'Semaglutide GLP-1 Receptor Agonist',
    category: 'Metabolic',
    overview: 'A long-acting GLP-1 receptor agonist with structural modifications for extended half-life (~7 days), studied primarily for metabolic effects, glucose homeostasis, and weight management protocols.',
    dose: 'Start 0.25 mg/week → titrate to 0.5–2.4 mg/week',
    frequency: 'Once weekly',
    cycleLength: 'Ongoing with periodic assessment intervals',
    timing: 'Subcutaneous injection, same day each week (rotate injection sites)',
    notes: 'Titration schedule is critical — rapid escalation is associated with GI side effects in research subjects. Standard research titration: 0.25 mg/wk × 4 wks, then 0.5 mg/wk × 4 wks, then assess. GLP-1 receptor agonist studied for metabolic effects and weight management.',
    mechanism: 'GLP-1 receptor agonist / incretin mimetic',
    color: 'from-emerald-600/15 to-navy-800/40',
    accentColor: 'emerald-400',
  },
  {
    id: 'aod-9604',
    name: 'AOD-9604',
    fullName: 'Anti-Obesity Drug 9604 — hGH Fragment (176–191)',
    category: 'Metabolic',
    overview: 'A synthetic fragment of the C-terminal region of human growth hormone (residues 176–191), studied for its selective lipolytic properties without the growth-promoting or insulin-desensitizing effects of intact hGH.',
    dose: '300–500 mcg/day',
    frequency: 'Once daily (AM, fasted)',
    cycleLength: '12 weeks',
    timing: 'Subcutaneous injection in the fasted state, morning preferred to align with natural lipolytic windows',
    notes: 'Isolated from hGH to retain fat-metabolizing activity while avoiding IGF-1 elevation. Research models show adipose-selective effects via β3-adrenergic receptor stimulation. No significant effect on blood glucose in published studies at research doses.',
    mechanism: 'Lipolytic β3-adrenergic receptor stimulation',
    color: 'from-emerald-700/20 to-navy-800/40',
    accentColor: 'emerald-300',
  },
  {
    id: 'cagrilintide',
    name: 'Cagrilintide',
    fullName: 'Long-Acting Amylin Analog (AM833)',
    category: 'Metabolic',
    overview: 'A once-weekly, long-acting amylin analog engineered with fatty-acid conjugation for extended half-life, studied in combination with semaglutide (CagriSema) for additive effects on satiety and metabolic regulation.',
    dose: '0.16 mg/week (starting) → escalating to 2.4 mg/week',
    frequency: 'Once weekly',
    cycleLength: 'Ongoing (with escalation phase over ~16 weeks)',
    timing: 'Subcutaneous injection, same day each week; rotate injection sites',
    notes: 'Amylin is a pancreatic peptide co-secreted with insulin. Cagrilintide acts on hypothalamic amylin receptors to promote satiety independently of GLP-1. CagriSema combination phase-III data shows superior weight reduction vs. either agent alone. Titration is critical to tolerability.',
    mechanism: 'Amylin receptor agonist / hypothalamic satiety signaling',
    color: 'from-teal-700/20 to-emerald-800/30',
    accentColor: 'teal-400',
  },
  {
    id: 'dsip',
    name: 'DSIP',
    fullName: 'Delta Sleep-Inducing Peptide (Nonapeptide)',
    category: 'Cognitive & Neuropeptides',
    overview: 'A naturally occurring nonapeptide isolated from cerebral venous blood of sleeping rabbits, researched for its role in sleep architecture modulation, particularly delta-wave (slow-wave) sleep induction and circadian rhythm regulation.',
    dose: '100–300 mcg/dose',
    frequency: 'Once at bedtime',
    cycleLength: '5–10 days on, then a rest interval',
    timing: 'Subcutaneous injection 30–60 min before intended sleep; intranasal protocols also described in literature',
    notes: 'Endogenous neuropeptide that promotes delta-wave sleep stages without sedative receptor occupancy. Research also documents antioxidant properties, stress modulation (via LH/ACTH axis), and potential role in pain threshold regulation. Not a direct GABA agonist.',
    mechanism: 'Hypothalamic neuropeptide / delta EEG modulation',
    color: 'from-indigo-700/20 to-navy-800/40',
    accentColor: 'indigo-400',
  },
  {
    id: 'epithalon',
    name: 'Epithalon',
    fullName: 'Epithalamin Tetrapeptide (Ala-Glu-Asp-Gly)',
    category: 'Skin & Anti-Aging',
    overview: 'A synthetic tetrapeptide derived from the pineal gland extract epithalamin, studied extensively by Khavinson et al. for telomerase activation, melatonin restoration, and life-extension effects in cell and animal models.',
    dose: '5–10 mg/day',
    frequency: 'Daily injections during a course',
    cycleLength: '10-day intensive course, repeated 2× per year',
    timing: 'Subcutaneous or intravenous injection; evening administration may complement melatonin-regulatory effects',
    notes: 'One of the most extensively studied peptides in Soviet-era and post-Soviet longevity research. Documented to activate telomerase in somatic cells in vitro, restore melatonin secretion in aging models, and extend lifespan in rodent studies. The 10-day course model is the established research protocol.',
    mechanism: 'Telomerase activation / pineal gland regulation',
    color: 'from-violet-600/15 to-navy-800/40',
    accentColor: 'violet-400',
  },
  {
    id: 'tirzepatide',
    name: 'Tirzepatide',
    fullName: 'GLP-1 2TZ — Dual GIP/GLP-1 Receptor Agonist',
    category: 'Metabolic',
    overview: 'A once-weekly dual glucose-dependent insulinotropic polypeptide (GIP) and GLP-1 receptor agonist, distinguished from GLP-1 mono-agonists by its co-agonism of GIP receptors, which appears to augment adipose lipolysis and energy expenditure.',
    dose: '2.5 mg/week (start) → titrate to 5–15 mg/week',
    frequency: 'Once weekly',
    cycleLength: 'Ongoing; titration phase ~20 weeks to maintenance dose',
    timing: 'Subcutaneous injection, same day each week; abdomen, thigh, or upper arm',
    notes: 'Phase III SURMOUNT trials demonstrated superior weight reduction vs. semaglutide in head-to-head research. GIP co-agonism is the key mechanistic differentiation — GIP receptors on adipocytes may mediate enhanced fat mobilization beyond GLP-1 pathway alone. Titration is essential to limit GI effects.',
    mechanism: 'Dual GIP receptor + GLP-1 receptor agonist',
    color: 'from-emerald-600/20 to-slate-800/40',
    accentColor: 'emerald-400',
  },
  {
    id: 'retatrutide',
    name: 'Retatrutide',
    fullName: 'GLP-3RT — Triple GIP/GLP-1/Glucagon Receptor Agonist',
    category: 'Metabolic',
    overview: 'An investigational once-weekly triple incretin agonist targeting GIP, GLP-1, and glucagon receptors simultaneously. Phase II data shows the highest weight reduction observed to date in pharmaceutical metabolic research — up to ~24% body weight loss.',
    dose: '1 mg/week (start) → escalating to 12 mg/week',
    frequency: 'Once weekly',
    cycleLength: 'Ongoing clinical research protocols; titration over ~24 weeks',
    timing: 'Subcutaneous injection, same day each week; rotate sites',
    notes: 'Glucagon receptor co-agonism distinguishes retatrutide from dual agonists — glucagon signaling increases hepatic glucose output and thermogenesis. Phase III trials are ongoing. The triple mechanism may produce additive energy expenditure effects via different receptor distributions in liver, adipose, and CNS.',
    mechanism: 'Triple incretin receptor agonist (GIP + GLP-1 + glucagon)',
    color: 'from-teal-600/20 to-navy-900/35',
    accentColor: 'teal-300',
  },
  {
    id: 'glutathione',
    name: 'Glutathione',
    fullName: 'Reduced L-Glutathione — Master Antioxidant Tripeptide (GSH)',
    category: 'Skin & Anti-Aging',
    overview: 'The most abundant endogenous antioxidant tripeptide (γ-L-glutamyl-L-cysteinyl-glycine), studied for melanogenesis inhibition via tyrosinase suppression, systemic oxidative stress reduction, and its role as a cofactor for glutathione peroxidase enzymes.',
    dose: '600–1200 mg (IV infusion) or 250–500 mg (oral liposomal/sublingual)',
    frequency: '2–3× per week (IV) or daily (oral forms)',
    cycleLength: '8-week courses with rest intervals',
    timing: 'IV infusion over 15–30 min; oral forms taken on empty stomach; timing relative to oxidative stressors (exercise, sun exposure) matters in research design',
    notes: 'Bioavailability of oral GSH is limited by gut degradation — liposomal and sublingual formulations show improved tissue uptake vs. standard oral. IV protocols bypass first-pass degradation entirely. Skin-brightening effects documented via melanocyte tyrosinase inhibition in multiple RCTs. Cofactor recycling with vitamins C and E is standard in research designs.',
    mechanism: 'Endogenous antioxidant / glutathione peroxidase cofactor / tyrosinase inhibition',
    color: 'from-amber-600/15 to-slate-800/35',
    accentColor: 'amber-300',
  },
  {
    id: 'igf-1-lr3',
    name: 'IGF-1 LR3',
    fullName: 'Insulin-Like Growth Factor-1 Long Arg3 Analog',
    category: 'Growth & Body Composition',
    overview: 'A recombinant analog of IGF-1 with an N-terminal 13-amino-acid extension and Arg3 substitution that dramatically reduces binding to IGF-binding proteins, extending its half-life from minutes to ~20–30 hours compared to native IGF-1.',
    dose: '20–50 mcg/day',
    frequency: 'Daily (post-exercise in research models)',
    cycleLength: '4–6 weeks',
    timing: 'Subcutaneous or intramuscular injection; post-workout timing leverages exercise-induced IGF-1 receptor upregulation in muscle tissue',
    notes: 'The LR3 modification reduces IGFBP-3 binding affinity ~5-fold, increasing bioavailable fraction dramatically. Acts via mTOR/PI3K/Akt signaling to promote protein synthesis and anti-apoptotic cell survival. Hypoglycemia risk at higher doses due to insulin receptor cross-reactivity — research protocols require glucose monitoring.',
    mechanism: 'IGF-1 receptor agonist / mTOR–PI3K–Akt pathway activation',
    color: 'from-navy-600/20 to-slate-800/35',
    accentColor: 'slate-300',
  },
  {
    id: 'melanotan-2',
    name: 'Melanotan 2',
    fullName: 'Cyclic Alpha-MSH Analog (MT-II)',
    category: 'Skin & Anti-Aging',
    overview: 'A synthetic cyclic lactam analog of α-MSH developed at University of Arizona, studied for its potent melanocortin receptor agonism producing eumelanin-driven tanning, with additional research into sexual arousal pathways via MC4R CNS activity.',
    dose: '0.5–1 mg (loading phase); 0.25–0.5 mg (maintenance)',
    frequency: 'Daily (loading, 2–4 wk) → every 2–3 days (maintenance)',
    cycleLength: 'Loading 2–4 weeks; maintenance as-needed',
    timing: 'Subcutaneous injection; evening administration may reduce nausea (common initial side effect); UV exposure enhances melanogenic response',
    notes: 'MT-II acts on MC1R for melanogenesis and MC4R for sexual and appetite effects. The cyclic structure confers approximately 1000× greater potency than linear α-MSH analogs. Nausea and facial flushing are the most commonly reported initial effects in research subjects. Darker Fitzpatrick skin types respond with greater pigmentation per dose.',
    mechanism: 'MC1R / MC4R agonist (melanocortin receptor)',
    color: 'from-amber-700/20 to-navy-900/40',
    accentColor: 'amber-400',
  },
  {
    id: 'mots-c',
    name: 'MOTS-c',
    fullName: 'Mitochondrial Open Reading Frame of the 12S rRNA-c',
    category: 'Metabolic',
    overview: 'A 16-amino-acid mitochondria-derived peptide encoded within the 12S ribosomal RNA gene of the mitochondrial genome, studied as an exercise mimetic for its role in AMPK activation, glucose utilization, and mitochondrial biogenesis.',
    dose: '5–10 mg/week',
    frequency: '2–3× per week',
    cycleLength: '8–12 weeks',
    timing: 'Subcutaneous injection; pre- or peri-exercise timing explored in research models for synergy with exercise-induced AMPK signaling',
    notes: 'One of a growing class of mitochondria-derived peptides (MDPs). MOTS-c levels decline with age and are acutely increased by exercise. Research in rodent models shows improved insulin sensitivity, reduced adiposity, and extended lifespan. Human pharmacokinetic data is limited but emerging. AMPK activation is the primary proposed mechanism.',
    mechanism: 'AMPK activation / mitochondrial biogenesis enhancement',
    color: 'from-emerald-800/20 to-navy-700/40',
    accentColor: 'emerald-300',
  },
  {
    id: 'nad-plus',
    name: 'NAD+',
    fullName: 'Nicotinamide Adenine Dinucleotide (Oxidized Form)',
    category: 'Metabolic',
    overview: 'A critical coenzyme in cellular energy metabolism and redox signaling whose intracellular levels decline with age. Studied for its role in sirtuin (SIRT1–7) deacetylase activation, PARP-mediated DNA repair, and mitochondrial electron transport chain efficiency.',
    dose: '500–1000 mg (IV infusion) or 250–500 mg/day (oral NMN/NR precursor)',
    frequency: 'Weekly IV infusion or daily oral precursor',
    cycleLength: 'Ongoing supplementation or periodic infusion courses',
    timing: 'IV infusion over 1–4 hours (rate-dependent on tolerability); oral precursors taken in morning with food',
    notes: 'IV NAD+ bypasses the rate-limiting Preiss-Handler and salvage pathways that constrain oral bioavailability. Flushing, nausea, and chest tightness are common IV side effects managed by slow infusion rates. NMN and NR are the most studied oral precursors — debate exists on relative tissue uptake. Sirtuin activation downstream of NAD+ links to epigenetic regulation.',
    mechanism: 'Sirtuin (SIRT1-7) activation / PARP-mediated DNA repair / mitochondrial ETC substrate',
    color: 'from-amber-700/15 to-emerald-900/30',
    accentColor: 'amber-300',
  },
  {
    id: 'pt-141',
    name: 'PT-141',
    fullName: 'Bremelanotide — Melanocortin CNS Arousal Peptide',
    category: 'Cognitive & Neuropeptides',
    overview: 'A synthetic cyclic heptapeptide melanocortin receptor agonist (metabolite of Melanotan II) that acts centrally via MC3R and MC4R in hypothalamic arousal circuits, studied for sexual dysfunction independently of vascular mechanisms.',
    dose: '1–2 mg/dose',
    frequency: 'As needed (minimum 3-day interval between doses)',
    cycleLength: 'As needed; not for daily use',
    timing: 'Subcutaneous injection 45–75 min before anticipated activity; administered in deltoid or abdomen',
    notes: 'Unlike PDE5 inhibitors, PT-141 acts centrally rather than on peripheral vasculature. MC4R activation in the hypothalamic paraventricular nucleus is the primary proposed arousal mechanism. FDA-approved (Vyleesi) for hypoactive sexual desire disorder in premenopausal women. Nausea is the most common adverse effect — managed with pre-dosing antiemetics in clinical protocols.',
    mechanism: 'MC3R / MC4R agonist / hypothalamic arousal pathway',
    color: 'from-purple-700/20 to-navy-800/40',
    accentColor: 'purple-400',
  },
  {
    id: 'selank',
    name: 'Selank',
    fullName: 'Tuftsin Analog Heptapeptide Anxiolytic (TP-7)',
    category: 'Cognitive & Neuropeptides',
    overview: 'A synthetic heptapeptide analog of the immunomodulatory tetrapeptide tuftsin, developed at the Institute of Molecular Genetics (Moscow), studied for anxiolytic and nootropic properties via GABAergic modulation without classical benzodiazepine side effects.',
    dose: '250–500 mcg/dose',
    frequency: '1–3× daily',
    cycleLength: '10–14 days on, 10–14 days off',
    timing: 'Intranasal administration is the primary research route; 1–2 drops per nostril per dose',
    notes: 'Selank potentiates GABA-A receptor function and stabilizes endogenous enkephalins (endorphins) by inhibiting enkephalinase. Unlike benzodiazepines, it does not produce dependence, sedation, or memory impairment in published animal models. Also documented to modulate IL-6 and other cytokines, reflecting its tuftsin-derived immunomodulatory lineage.',
    mechanism: 'GABA-A potentiation / enkephalin stabilization (enkephalinase inhibition)',
    color: 'from-indigo-600/15 to-slate-800/35',
    accentColor: 'indigo-300',
  },
  {
    id: 'semax',
    name: 'Semax',
    fullName: 'ACTH(4–7) Pro-Gly-Pro Synthetic Analog',
    category: 'Cognitive & Neuropeptides',
    overview: 'A synthetic heptapeptide analog of the ACTH(4–7) fragment with a Pro-Gly-Pro C-terminal extension for metabolic stability, developed in Russia and studied for cognitive enhancement, neuroprotection, and BDNF/VEGF upregulation following ischemic events.',
    dose: '300–600 mcg/dose (intranasal)',
    frequency: '1–2× daily',
    cycleLength: '10–14 days on, 7+ days off',
    timing: 'Intranasal administration; applied to nasal mucosa for rapid CNS delivery via olfactory pathway; morning dosing preferred for cognitive applications',
    notes: 'Semax robustly upregulates BDNF, VEGF, and trkB receptor expression in hippocampal and cortical models. Dopamine and serotonin system modulation contributes to reported cognitive and mood effects. Used clinically in Russia for stroke rehabilitation and ADHD. The Pro-Gly-Pro extension prevents rapid degradation and extends CNS half-life vs. ACTH(4–7).',
    mechanism: 'BDNF/VEGF upregulation / dopaminergic–serotonergic system modulation',
    color: 'from-violet-600/20 to-navy-900/35',
    accentColor: 'violet-300',
  },
  {
    id: 'sermorelin',
    name: 'Sermorelin',
    fullName: 'GHRH(1–29) — Growth Hormone Releasing Hormone Fragment',
    category: 'Growth & Body Composition',
    overview: 'A synthetic 29-amino-acid analog corresponding to the N-terminal active fragment of endogenous GHRH, studied for restoration of pulsatile GH secretion in aging models where hypothalamic GHRH output has declined.',
    dose: '200–500 mcg/dose',
    frequency: 'Daily (pre-sleep)',
    cycleLength: '3–6 months',
    timing: 'Subcutaneous injection 30–60 min before sleep; fasted state enhances pulsatile GH release; avoid dosing with high-carbohydrate meals',
    notes: 'Unlike exogenous GH, sermorelin stimulates the pituitary gland to produce GH physiologically, preserving the negative-feedback loop and pulsatile release pattern. Pre-sleep dosing aligns with the largest natural GH pulse occurring during slow-wave sleep. Longer cycles (3–6 months) are characteristic in published protocols due to the gradual axis restoration mechanism.',
    mechanism: 'GHRH receptor agonist / pulsatile pituitary GH secretion stimulation',
    color: 'from-navy-700/25 to-teal-900/30',
    accentColor: 'teal-300',
  },
  {
    id: 'tesamorelin',
    name: 'Tesamorelin',
    fullName: 'Stabilized GHRH Analog with Trans-3-hexenoic Acid Modification',
    category: 'Growth & Body Composition',
    overview: 'A modified synthetic GHRH analog with a trans-3-hexenoic acid conjugate at the N-terminus that significantly enhances plasma stability vs. native GHRH(1–44), enabling once-daily dosing. FDA-approved for HIV-associated lipodystrophy visceral adiposity reduction.',
    dose: '1–2 mg/day',
    frequency: 'Daily',
    cycleLength: '3–6 months',
    timing: 'Subcutaneous injection to the abdomen, alternating sides; inject on empty stomach or ≥2 hrs after last meal',
    notes: 'The N-terminal modification protects against DPP-IV cleavage, dramatically extending half-life vs. unmodified GHRH. FDA-approved under the name Egrifta for visceral fat reduction in HIV lipodystrophy — the only GHRH analog with this regulatory status. GH/IGF-1 axis stimulation leads to lipolysis in visceral adipose depots. Monitor IGF-1 levels during extended protocols.',
    mechanism: 'GHRH receptor agonist / GH–IGF-1 axis stimulation',
    color: 'from-slate-700/20 to-navy-900/40',
    accentColor: 'slate-400',
  },
];

const CATEGORIES: Category[] = ['All', 'Healing & Recovery', 'Growth & Body Composition', 'Skin & Anti-Aging', 'Metabolic', 'Cognitive & Neuropeptides'];

const categoryIcons: Record<Category, string> = {
  'All': '⬡',
  'Healing & Recovery': '✦',
  'Growth & Body Composition': '▲',
  'Skin & Anti-Aging': '◈',
  'Metabolic': '⬡',
  'Cognitive & Neuropeptides': '◉',
};

export default function ProtocolsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered = activeCategory === 'All'
    ? protocols
    : protocols.filter(p => p.category === activeCategory);

  return (
    <>
      <SEO
        title="Peptide Research Protocols"
        description="Structured dosing frameworks used in published peptide research. Protocols for BPC-157, TB-500, CJC-1295, Ipamorelin, GHK-Cu, and Semaglutide — including dose, frequency, cycle length, and timing notes from peer-reviewed studies."
        canonicalUrl="https://purestpeptides.com/protocols"
      />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 bg-navy-950 overflow-hidden">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(var(--color-teal-400) 1px, transparent 1px),
                              linear-gradient(90deg, var(--color-teal-400) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-medium tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Research-Grade Reference
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Peptide Research{' '}
              <span className="text-teal-400">Protocols</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              Structured dosing frameworks used in published research studies. Each protocol reflects parameters drawn from peer-reviewed literature — dose, frequency, cycle length, and administration timing.
            </p>
          </div>

          {/* Stats bar */}
          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { label: 'Peptides Covered', value: '22' },
              { label: 'Categories', value: '5' },
              { label: 'Research Grade', value: '100%' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="font-display text-3xl text-teal-400">{stat.value}</div>
                <div className="text-slate-500 text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-start gap-3">
          <svg className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-amber-800 text-sm leading-relaxed">
            <strong>Research Use Only.</strong> All protocols on this page are derived from published animal and in-vitro research studies. These parameters are provided for educational and research reference purposes only. Not intended for human use. Consult applicable regulations and a qualified researcher before conducting any studies.
          </p>
        </div>
      </div>

      {/* ── Filter Tabs ── */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy-700 hover:bg-slate-100'
                }`}
              >
                <span className="text-xs opacity-70">{categoryIcons[cat]}</span>
                {cat}
                {cat !== 'All' && (
                  <span className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${
                    activeCategory === cat ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {protocols.filter(p => p.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Protocol Cards ── */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {filtered.map((protocol, idx) => (
              <ProtocolCard key={protocol.id} protocol={protocol} index={idx} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              No protocols found for this category.
            </div>
          )}
        </div>
      </section>

      {/* ── Stack Guidance ── */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-3">
              Commonly Studied Combinations
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              Research frequently examines peptides in combination protocols. These pairings appear across multiple peer-reviewed publications.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: 'Healing Stack',
                pair: 'BPC-157 + TB-500',
                description: 'Complementary mechanisms — BPC-157 via VEGFR2/nitric oxide, TB-500 via actin sequestration. Published research reports synergistic tissue repair outcomes.',
                tag: 'Healing & Recovery',
              },
              {
                label: 'GH Axis Stack',
                pair: 'CJC-1295 + Ipamorelin',
                description: 'GHRH analog + GHRP combination produces supra-additive GH release in published pituitary research. CJC provides sustained baseline, Ipamorelin amplifies pulsatile release.',
                tag: 'Growth & Body Composition',
              },
              {
                label: 'Skin Research',
                pair: 'GHK-Cu (topical + SC)',
                description: 'Dual-route protocols appear in wound healing literature — topical for surface regeneration, subcutaneous for systemic collagen induction. Often studied at different concentrations.',
                tag: 'Skin & Anti-Aging',
              },
            ].map(combo => (
              <div key={combo.pair} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <span className="inline-block px-2.5 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full mb-4">
                  {combo.tag}
                </span>
                <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">{combo.label}</div>
                <h3 className="font-display text-xl text-navy-900 mb-3">{combo.pair}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{combo.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--color-teal-400) 1px, transparent 1px),
                              linear-gradient(90deg, var(--color-teal-400) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Ready to Proceed?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Use our tools to prepare your research materials accurately — reconstitute peptides with precision and verify certificate of analysis before use.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/calculator"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-teal-500 hover:bg-teal-400 text-white rounded-xl font-medium text-base transition-all shadow-lg shadow-teal-500/20 hover:shadow-teal-400/30"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Reconstitution Calculator
            </Link>
            <Link
              to="/coa-lookup"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white rounded-xl font-medium text-base transition-all border border-white/20"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Verify COA / Batch
            </Link>
            <Link
              to="/research"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white rounded-xl font-medium text-base transition-all border border-white/20"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Research Library
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ── Protocol Card Component ──────────────────────────────────────────────────

function ProtocolCard({ protocol, index }: { protocol: Protocol; index: number }) {
  const [expanded, setExpanded] = useState(false);

  const categoryBadgeColors: Record<string, string> = {
    'Healing & Recovery': 'bg-teal-50 text-teal-700 border-teal-200',
    'Growth & Body Composition': 'bg-navy-50 text-navy-700 border-navy-200',
    'Skin & Anti-Aging': 'bg-amber-50 text-amber-700 border-amber-200',
    'Metabolic': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'Cognitive & Neuropeptides': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  };

  return (
    <article
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-md transition-all duration-200"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Card Header */}
      <div className={`bg-gradient-to-br ${protocol.color} px-6 py-5 border-b border-slate-200/50`}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="font-display text-2xl text-navy-900">{protocol.name}</h2>
              <span className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full border ${categoryBadgeColors[protocol.category]}`}>
                {protocol.category}
              </span>
            </div>
            {protocol.fullName && (
              <p className="text-slate-500 text-xs">{protocol.fullName}</p>
            )}
          </div>
          <div className="shrink-0 w-10 h-10 rounded-xl bg-white/70 border border-slate-200 flex items-center justify-center">
            <svg className="w-5 h-5 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="px-6 py-5">
        <p className="text-slate-600 text-sm leading-relaxed mb-5">{protocol.overview}</p>

        {/* Key Parameters Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <ProtocolStat label="Typical Research Dose" value={protocol.dose} icon="⚖" />
          <ProtocolStat label="Frequency" value={protocol.frequency} icon="⏱" />
          <ProtocolStat label="Cycle Length" value={protocol.cycleLength} icon="📅" />
          <ProtocolStat label="Route / Timing" value={protocol.timing} icon="💉" />
        </div>

        {/* Mechanism chip */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs text-slate-400 uppercase tracking-widest">Mechanism</span>
          <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-full text-xs font-mono">
            {protocol.mechanism}
          </span>
        </div>

        {/* Expandable Notes */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors"
        >
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          {expanded ? 'Hide' : 'Show'} Research Notes
        </button>

        {expanded && (
          <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-slate-600 text-sm leading-relaxed">
            <p>{protocol.notes}</p>
          </div>
        )}
      </div>

      {/* Research grade footer */}
      <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center gap-2">
        <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-slate-400 text-xs">
          Research use only — parameters sourced from peer-reviewed literature. Not for human use.
        </span>
      </div>
    </article>
  );
}

function ProtocolStat({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
      <div className="flex items-center gap-1.5 mb-1">
        <span className="text-xs" aria-hidden>{icon}</span>
        <span className="text-slate-400 text-xs uppercase tracking-wide">{label}</span>
      </div>
      <p className="text-navy-800 text-sm font-medium leading-snug">{value}</p>
    </div>
  );
}
