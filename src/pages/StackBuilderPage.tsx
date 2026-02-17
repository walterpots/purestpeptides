import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { researchGoals, stacks, ResearchStack, StackPeptide } from '../data/stacks';

const StackBuilderPage = () => {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [showAlternative, setShowAlternative] = useState(false);

  const selectedStack = selectedGoal ? stacks.find((s) => s.goal === selectedGoal) : null;

  const handleGoalSelect = (goalId: string) => {
    setSelectedGoal(goalId);
    setShowAlternative(false);
    // Scroll to results after a brief delay for state update
    setTimeout(() => {
      document.getElementById('stack-results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleReset = () => {
    setSelectedGoal(null);
    setShowAlternative(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Peptide Stack Builder | Research Tool | Purest Peptides</title>
        <meta
          name="description"
          content="Interactive research tool to identify optimal peptide combinations based on your research goals. Explore scientifically-backed stacks with synergy explanations."
        />
        <meta
          name="keywords"
          content="peptide stacks, BPC-157 TB-500, peptide combinations, research peptides, peptide synergy"
        />
        <link rel="canonical" href="https://purestpeptides.com/stack-builder" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-6 border border-amber-500/20">
                🧬 Research Tool
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Peptide Stack Builder
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Identify optimal peptide combinations for your research goals
              </p>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Select your research focus to discover scientifically-backed peptide stacks with
                detailed synergy explanations, research highlights, and important considerations.
              </p>
            </div>
          </div>
        </section>

        {/* Research Goals Selection */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">
                {selectedGoal ? 'Your Research Goal' : 'Select Your Research Goal'}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {researchGoals.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => handleGoalSelect(goal.id)}
                    className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                      selectedGoal === goal.id
                        ? 'bg-amber-500/20 border-amber-500 shadow-lg shadow-amber-500/10'
                        : selectedGoal
                        ? 'bg-gray-800/30 border-gray-700/50 opacity-50'
                        : 'bg-gray-800/50 border-gray-700 hover:border-amber-500/50 hover:bg-gray-800'
                    }`}
                  >
                    <div className="text-3xl mb-3">{goal.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{goal.name}</h3>
                    <p className="text-gray-400 text-sm">{goal.description}</p>
                  </button>
                ))}
              </div>

              {selectedGoal && (
                <div className="mt-6 text-center">
                  <button
                    onClick={handleReset}
                    className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
                  >
                    ← Choose a different goal
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Stack Results */}
        {selectedStack && (
          <section id="stack-results" className="py-12 scroll-mt-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Stack Header */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 mb-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-4xl mb-4 block">{selectedStack.icon}</span>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {selectedStack.name}
                      </h2>
                      {selectedStack.nickname && (
                        <p className="text-amber-400 font-medium">{selectedStack.nickname}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg">{selectedStack.description}</p>
                </div>

                {/* Peptides in Stack */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="text-amber-400">🧪</span>
                    {showAlternative && selectedStack.alternativeApproach
                      ? 'Alternative Peptides'
                      : 'Recommended Peptides'}
                  </h3>
                  <div className="grid gap-4">
                    {(showAlternative && selectedStack.alternativeApproach
                      ? selectedStack.alternativeApproach.peptides
                      : selectedStack.peptides
                    ).map((peptide: StackPeptide) => (
                      <div
                        key={peptide.slug}
                        className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-amber-500/30 transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="text-xl font-semibold text-white">{peptide.name}</h4>
                              <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium">
                                {peptide.role}
                              </span>
                            </div>
                            <p className="text-gray-400">{peptide.briefDescription}</p>
                          </div>
                          <Link
                            to={`/peptides/${peptide.slug}`}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition-colors text-sm font-medium whitespace-nowrap"
                          >
                            Learn More →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Alternative Approach Toggle */}
                {selectedStack.alternativeApproach && (
                  <div className="mb-8 p-4 bg-gray-800/30 rounded-xl border border-gray-700">
                    <button
                      onClick={() => setShowAlternative(!showAlternative)}
                      className="w-full text-left"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-medium">
                            {showAlternative ? '← Back to Primary Approach' : '💡 Alternative Approach Available'}
                          </h4>
                          {!showAlternative && (
                            <p className="text-gray-400 text-sm mt-1">
                              {selectedStack.alternativeApproach.name}: {selectedStack.alternativeApproach.description}
                            </p>
                          )}
                        </div>
                        <span className="text-amber-400 text-xl">
                          {showAlternative ? '↩' : '→'}
                        </span>
                      </div>
                    </button>
                  </div>
                )}

                {/* Synergy Explanation */}
                <div className="mb-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-6 border border-amber-500/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span>🔗</span>
                    Why These Peptides Work Together
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{selectedStack.synergyExplanation}</p>
                </div>

                {/* Research Highlights */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="text-amber-400">📚</span>
                    Research Highlights
                  </h3>
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <ul className="space-y-3">
                      {selectedStack.researchHighlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-amber-400 mt-1">•</span>
                          <span className="text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Considerations */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="text-amber-400">⚠️</span>
                    Important Considerations
                  </h3>
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-orange-500/20">
                    <ul className="space-y-3">
                      {selectedStack.considerations.map((consideration, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-orange-400 mt-1">•</span>
                          <span className="text-gray-300">{consideration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 text-center">
                  <h3 className="text-xl font-bold text-white mb-3">Ready to Explore Further?</h3>
                  <p className="text-gray-400 mb-6">
                    Dive deeper into each peptide's research profile, molecular information, and
                    scientific literature.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/research"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold transition-colors"
                    >
                      📚 Research Library
                    </Link>
                    <Link
                      to="/peptides"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-semibold transition-colors"
                    >
                      🧬 All Peptides
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Research Disclaimer */}
        <section className="py-12 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span>📋</span>
                  Research Use Disclaimer
                </h4>
                <div className="text-gray-400 text-sm space-y-3">
                  <p>
                    The information provided by this tool is intended for educational and research
                    purposes only. Peptide "stacks" or combinations discussed are based on
                    theoretical mechanisms and preclinical research findings.
                  </p>
                  <p>
                    <strong className="text-gray-300">Important:</strong> Most peptide research has
                    been conducted in animal models or in vitro. Human clinical data is limited for
                    many peptide combinations. This information should not be interpreted as medical
                    advice or recommendations for human use.
                  </p>
                  <p>
                    All peptides are sold strictly for research purposes. Consult relevant
                    regulations in your jurisdiction before conducting any research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StackBuilderPage;
