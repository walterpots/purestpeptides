import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Preset configurations for common peptides
const presets = [
  {
    name: 'BPC-157',
    vialSize: 5,
    typicalWater: 2,
    typicalDose: 250,
    description: 'Body Protection Compound - Regenerative',
  },
  {
    name: 'TB-500',
    vialSize: 5,
    typicalWater: 2,
    typicalDose: 2500,
    description: 'Thymosin Beta-4 - Tissue Repair',
  },
  {
    name: 'Semaglutide',
    vialSize: 3,
    typicalWater: 3,
    typicalDose: 250,
    description: 'GLP-1 Agonist - Metabolic Research',
  },
  {
    name: 'CJC-1295',
    vialSize: 2,
    typicalWater: 2,
    typicalDose: 100,
    description: 'GHRH Analog - Growth Hormone',
  },
  {
    name: 'Ipamorelin',
    vialSize: 5,
    typicalWater: 2.5,
    typicalDose: 200,
    description: 'GHRP - Growth Hormone Secretagogue',
  },
  {
    name: 'PT-141',
    vialSize: 10,
    typicalWater: 2,
    typicalDose: 1000,
    description: 'Bremelanotide - Melanocortin Peptide',
  },
];

// Common concentration reference
const concentrationReference = [
  { water: 1, vial: 5, concentration: 500 },
  { water: 2, vial: 5, concentration: 250 },
  { water: 2.5, vial: 5, concentration: 200 },
  { water: 1, vial: 10, concentration: 1000 },
  { water: 2, vial: 10, concentration: 500 },
  { water: 1, vial: 2, concentration: 200 },
  { water: 2, vial: 2, concentration: 100 },
];

const ReconstitutionCalculatorPage = () => {
  const [vialSize, setVialSize] = useState(5);
  const [waterAmount, setWaterAmount] = useState(2);
  const [desiredDose, setDesiredDose] = useState(250);
  const [showSteps, setShowSteps] = useState(false);

  // Calculate derived values
  const calculations = useMemo(() => {
    const totalMcg = vialSize * 1000; // Convert mg to mcg
    const concentrationPerMl = totalMcg / waterAmount; // mcg per mL
    const concentrationPer01Ml = concentrationPerMl / 10; // mcg per 0.1mL (10 units)
    const volumePerDose = desiredDose / concentrationPerMl; // mL needed per dose
    const unitsPerDose = volumePerDose * 100; // Insulin syringe units (100 units = 1mL)
    const dosesPerVial = totalMcg / desiredDose;

    return {
      totalMcg,
      concentrationPerMl,
      concentrationPer01Ml,
      volumePerDose,
      unitsPerDose,
      dosesPerVial,
    };
  }, [vialSize, waterAmount, desiredDose]);

  const applyPreset = (preset: typeof presets[0]) => {
    setVialSize(preset.vialSize);
    setWaterAmount(preset.typicalWater);
    setDesiredDose(preset.typicalDose);
  };

  return (
    <>
      <Helmet>
        <title>Peptide Reconstitution Calculator | Dilution & Dosing Tool | PurestPeptides</title>
        <meta
          name="description"
          content="Free peptide reconstitution calculator. Calculate bacteriostatic water amounts, concentrations, and dosing for BPC-157, TB-500, Semaglutide, and more. Includes step-by-step instructions."
        />
        <meta property="og:title" content="Peptide Reconstitution Calculator | PurestPeptides" />
        <meta
          property="og:description"
          content="Calculate peptide reconstitution ratios, concentrations, and injection volumes with our free research tool."
        />
        <link rel="canonical" href="https://purestpeptides.com/calculator" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Peptide Reconstitution Calculator',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'All',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            description:
              'Calculate peptide reconstitution ratios, bacteriostatic water amounts, and injection volumes for research purposes.',
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-20 md:py-28 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="calc-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#calc-grid)" />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-300 text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                Research Tool
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Reconstitution <span className="text-emerald-400">Calculator</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Calculate the precise amount of bacteriostatic water for peptide reconstitution. Get accurate
                concentrations and dosing volumes for your research.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Presets */}
        <section className="py-8 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-sm font-medium text-slate-500 mr-2">Quick Presets:</span>
              {presets.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => applyPreset(preset)}
                  className="px-4 py-2 bg-slate-100 hover:bg-emerald-100 hover:text-emerald-700 text-slate-700 rounded-lg text-sm font-medium transition-colors"
                  title={preset.description}
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Panel */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-lg">
                    1
                  </span>
                  Enter Your Values
                </h2>

                <div className="space-y-6">
                  {/* Vial Size */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Peptide Vial Size (mg)
                    </label>
                    <input
                      type="number"
                      value={vialSize}
                      onChange={(e) => setVialSize(Math.max(0.1, parseFloat(e.target.value) || 0))}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg"
                      step="0.5"
                      min="0.1"
                    />
                    <p className="mt-1 text-sm text-slate-500">
                      Amount of lyophilized peptide in your vial
                    </p>
                  </div>

                  {/* Water Amount */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Bacteriostatic Water (mL)
                    </label>
                    <input
                      type="number"
                      value={waterAmount}
                      onChange={(e) => setWaterAmount(Math.max(0.1, parseFloat(e.target.value) || 0))}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg"
                      step="0.5"
                      min="0.1"
                    />
                    <p className="mt-1 text-sm text-slate-500">
                      Amount of bacteriostatic water to add
                    </p>
                  </div>

                  {/* Desired Dose */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Desired Dose per Injection (mcg)
                    </label>
                    <input
                      type="number"
                      value={desiredDose}
                      onChange={(e) => setDesiredDose(Math.max(1, parseFloat(e.target.value) || 0))}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg"
                      step="10"
                      min="1"
                    />
                    <p className="mt-1 text-sm text-slate-500">
                      Your target dose in micrograms (mcg)
                    </p>
                  </div>
                </div>
              </div>

              {/* Results Panel */}
              <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg">
                    2
                  </span>
                  Your Results
                </h2>

                <div className="space-y-6">
                  {/* Concentration per mL */}
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-slate-400 text-sm mb-1">Concentration per mL</p>
                    <p className="text-3xl font-bold text-emerald-400">
                      {calculations.concentrationPerMl.toLocaleString()} mcg/mL
                    </p>
                  </div>

                  {/* Concentration per 0.1mL */}
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-slate-400 text-sm mb-1">Per 10 units (0.1mL) on syringe</p>
                    <p className="text-3xl font-bold text-white">
                      {calculations.concentrationPer01Ml.toLocaleString()} mcg
                    </p>
                  </div>

                  {/* Volume per Dose */}
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-slate-400 text-sm mb-1">Volume needed for {desiredDose} mcg dose</p>
                    <div className="flex items-baseline gap-4">
                      <p className="text-3xl font-bold text-white">
                        {calculations.volumePerDose.toFixed(3)} mL
                      </p>
                      <p className="text-xl text-emerald-400">
                        = {calculations.unitsPerDose.toFixed(1)} units
                      </p>
                    </div>
                  </div>

                  {/* Doses per Vial */}
                  <div className="bg-emerald-500/20 rounded-xl p-4 border border-emerald-500/30">
                    <p className="text-emerald-300 text-sm mb-1">Total doses per vial</p>
                    <p className="text-4xl font-bold text-emerald-400">
                      {Math.floor(calculations.dosesPerVial)} doses
                    </p>
                    <p className="text-sm text-slate-400 mt-1">
                      ({calculations.dosesPerVial.toFixed(1)} exact)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Syringe Reference */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Understanding Insulin Syringes</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Most peptide research uses standard U-100 insulin syringes. Here's how to read them correctly.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">100</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">100 Units = 1 mL</h3>
                <p className="text-slate-600 text-sm">
                  A full U-100 insulin syringe (100 units) equals exactly 1 milliliter of liquid.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">10</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">10 Units = 0.1 mL</h3>
                <p className="text-slate-600 text-sm">
                  Each major tick mark (10 units) on the syringe represents 0.1 mL or 100 microliters.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">1 Unit = 0.01 mL</h3>
                <p className="text-slate-600 text-sm">
                  Each small tick mark represents 1 unit or 0.01 mL (10 microliters).
                </p>
              </div>
            </div>

            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-800 mb-1">Important Note</h3>
                  <p className="text-amber-700 text-sm">
                    Always double-check your calculations before administration. Use fresh bacteriostatic water and
                    maintain sterile technique throughout the reconstitution process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Concentrations Reference */}
        <section className="py-12 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Quick Reference: Common Concentrations</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Standard reconstitution ratios for easy reference.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-navy-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Vial Size</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">BAC Water</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Concentration</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Per 10 Units</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {concentrationReference.map((ref, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-slate-900 font-medium">{ref.vial} mg</td>
                      <td className="px-6 py-4 text-slate-600">{ref.water} mL</td>
                      <td className="px-6 py-4 text-emerald-600 font-semibold">{ref.concentration} mcg/mL</td>
                      <td className="px-6 py-4 text-slate-600">{ref.concentration / 10} mcg</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Reconstitution Guide */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Step-by-Step Reconstitution Guide</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Follow these steps for proper peptide reconstitution in research settings.
              </p>
              <button
                onClick={() => setShowSteps(!showSteps)}
                className="mt-4 inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
              >
                {showSteps ? 'Hide' : 'Show'} Detailed Steps
                <svg
                  className={`w-5 h-5 transform transition-transform ${showSteps ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {showSteps && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-1">Gather Supplies</h3>
                      <p className="text-slate-600 text-sm">
                        Peptide vial, bacteriostatic water, alcohol swabs, insulin syringe (preferably 29-31 gauge),
                        and a clean workspace.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-1">Clean the Vial Tops</h3>
                      <p className="text-slate-600 text-sm">
                        Wipe the rubber stopper of both the peptide vial and bacteriostatic water vial with alcohol
                        swabs. Allow to dry.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-1">Draw Bacteriostatic Water</h3>
                      <p className="text-slate-600 text-sm">
                        Using a fresh syringe, draw the calculated amount of bacteriostatic water from its vial.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-1">Add Water Slowly</h3>
                      <p className="text-slate-600 text-sm">
                        Insert the needle into the peptide vial and slowly release the water along the inside wall.{' '}
                        <strong>Do not spray directly onto the powder.</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-1">Allow to Dissolve</h3>
                      <p className="text-slate-600 text-sm">
                        Let the vial sit for a few minutes. Gently swirl if needed—<strong>never shake</strong> as
                        this can denature the peptide.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-1">Verify Complete Dissolution</h3>
                      <p className="text-slate-600 text-sm">
                        The solution should be clear with no visible particles. Cloudiness may indicate contamination
                        or degradation.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                      7
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-1">Store Properly</h3>
                      <p className="text-slate-600 text-sm">
                        Refrigerate reconstituted peptides at 2-8°C (36-46°F). Most peptides remain stable for 2-4
                        weeks when properly stored.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                      8
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-1">Label Your Vial</h3>
                      <p className="text-slate-600 text-sm">
                        Write the reconstitution date, peptide name, and concentration on the vial for future
                        reference.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Storage & Shelf Life */}
        <section className="py-12 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Storage Guidelines</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Proper storage is critical for maintaining peptide integrity and research validity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900">Lyophilized (Powder)</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-600">Store at -20°C (-4°F) for long-term</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-600">Stable for 12-24 months when frozen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-600">Keep away from light and moisture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-600">Avoid repeated freeze-thaw cycles</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900">Reconstituted (Solution)</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-600">Refrigerate at 2-8°C (36-46°F)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-600">Use within 2-4 weeks typically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-600">Protect from light (wrap in foil if needed)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-600">Never freeze reconstituted peptides</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-emerald-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Research?</h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Get research-grade peptides with verified purity and fast shipping from our trusted partner.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://peptidefoundry.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-xl font-bold transition-colors hover:bg-teal-50 shadow-lg"
              >
                Shop at Peptide Foundry
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link
                to="/peptides"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors border border-white/20"
              >
                Browse Research Guides
              </Link>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-slate-100 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-slate-500">
              <strong>Research Use Only:</strong> This calculator is provided for educational and research planning
              purposes only. All peptides sold by PurestPeptides are for laboratory research use only and are not
              intended for human or veterinary use. Researchers should consult relevant literature and institutional
              protocols for specific research applications.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReconstitutionCalculatorPage;
