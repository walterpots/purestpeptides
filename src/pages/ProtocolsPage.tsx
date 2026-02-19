import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

type Category = 'All' | 'Healing & Recovery' | 'Growth & Body Composition' | 'Skin & Anti-Aging' | 'Metabolic';

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
];

const CATEGORIES: Category[] = ['All', 'Healing & Recovery', 'Growth & Body Composition', 'Skin & Anti-Aging', 'Metabolic'];

const categoryIcons: Record<Category, string> = {
  'All': '⬡',
  'Healing & Recovery': '✦',
  'Growth & Body Composition': '▲',
  'Skin & Anti-Aging': '◈',
  'Metabolic': '⬡',
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
              { label: 'Peptides Covered', value: '6' },
              { label: 'Categories', value: '4' },
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
