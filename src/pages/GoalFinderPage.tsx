import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { peptides, type Peptide } from '../data/peptides';

type Goal = 'muscle_recovery' | 'fat_loss' | 'sleep_quality' | 'anti_aging' | 'cognitive' | 'injury_healing';
type Experience = 'beginner' | 'intermediate' | 'advanced';
type Concern = 'budget' | 'convenience' | 'research';

interface QuizAnswers {
  goal: Goal | null;
  experience: Experience | null;
  concern: Concern | null;
}

interface Recommendation {
  peptide: Peptide;
  score: number;
  reason: string;
  tags: string[];
}

const goalOptions: { value: Goal; label: string; icon: string; description: string }[] = [
  { value: 'muscle_recovery', label: 'Muscle Recovery', icon: '💪', description: 'Faster recovery between training sessions' },
  { value: 'fat_loss', label: 'Fat Loss', icon: '🔥', description: 'Metabolic support and body composition' },
  { value: 'sleep_quality', label: 'Sleep Quality', icon: '🌙', description: 'Deeper sleep and better recovery' },
  { value: 'anti_aging', label: 'Anti-Aging & Skin', icon: '✨', description: 'Skin health, collagen, and longevity' },
  { value: 'cognitive', label: 'Cognitive Performance', icon: '🧠', description: 'Focus, neuroprotection, and mental clarity' },
  { value: 'injury_healing', label: 'Injury Healing', icon: '🩹', description: 'Tissue repair and wound recovery' },
];

const experienceOptions: { value: Experience; label: string; description: string }[] = [
  { value: 'beginner', label: 'New to Peptides', description: 'Just starting to research peptides' },
  { value: 'intermediate', label: 'Some Experience', description: 'Familiar with a few peptides already' },
  { value: 'advanced', label: 'Advanced Researcher', description: 'Deep knowledge of peptide science' },
];

const concernOptions: { value: Concern; label: string; icon: string; description: string }[] = [
  { value: 'budget', label: 'Budget-Friendly', icon: '💰', description: 'Best value for the research investment' },
  { value: 'convenience', label: 'Convenience', icon: '⏱️', description: 'Less frequent dosing, simpler protocols' },
  { value: 'research', label: 'Research Backing', icon: '📊', description: 'Most peer-reviewed data available' },
];

// Goal relevance scores per peptide slug (0-10)
const goalScores: Record<Goal, Record<string, number>> = {
  muscle_recovery: {
    'bpc-157': 10, 'tb-500': 9, 'cjc-1295': 7, 'ipamorelin': 6,
    'semaglutide': 2, 'tirzepatide': 2, 'melanotan-ii': 1, 'pt-141': 1,
  },
  fat_loss: {
    'semaglutide': 10, 'tirzepatide': 10, 'cjc-1295': 5, 'ipamorelin': 4,
    'bpc-157': 1, 'tb-500': 1, 'melanotan-ii': 3, 'pt-141': 1,
  },
  sleep_quality: {
    'ipamorelin': 10, 'cjc-1295': 8, 'bpc-157': 3, 'tb-500': 2,
    'semaglutide': 1, 'tirzepatide': 1, 'melanotan-ii': 1, 'pt-141': 1,
  },
  anti_aging: {
    'cjc-1295': 9, 'ipamorelin': 8, 'bpc-157': 7, 'melanotan-ii': 6,
    'tb-500': 4, 'semaglutide': 3, 'tirzepatide': 3, 'pt-141': 2,
  },
  cognitive: {
    'bpc-157': 9, 'pt-141': 7, 'ipamorelin': 6, 'cjc-1295': 5,
    'tb-500': 4, 'semaglutide': 2, 'tirzepatide': 2, 'melanotan-ii': 2,
  },
  injury_healing: {
    'bpc-157': 10, 'tb-500': 10, 'cjc-1295': 5, 'ipamorelin': 4,
    'semaglutide': 1, 'tirzepatide': 1, 'melanotan-ii': 1, 'pt-141': 1,
  },
};

// Experience modifiers — positive values boost, negative penalize
const experienceModifiers: Record<Experience, Record<string, number>> = {
  beginner: {
    'bpc-157': 2, 'semaglutide': 2, 'ipamorelin': 1,
    'tirzepatide': 0, 'tb-500': -1, 'cjc-1295': -1,
    'melanotan-ii': -2, 'pt-141': -2,
  },
  intermediate: {
    'bpc-157': 0, 'semaglutide': 0, 'tirzepatide': 1, 'tb-500': 1,
    'cjc-1295': 1, 'ipamorelin': 0, 'melanotan-ii': 0, 'pt-141': 0,
  },
  advanced: {
    'tirzepatide': 2, 'cjc-1295': 2, 'pt-141': 2, 'melanotan-ii': 1,
    'tb-500': 1, 'bpc-157': 0, 'semaglutide': 0, 'ipamorelin': 0,
  },
};

// Concern modifiers
const concernModifiers: Record<Concern, Record<string, number>> = {
  budget: {
    'bpc-157': 2, 'ipamorelin': 2, 'tb-500': 1, 'cjc-1295': 1,
    'semaglutide': -1, 'tirzepatide': -2, 'melanotan-ii': 0, 'pt-141': 0,
  },
  convenience: {
    'semaglutide': 3, 'tirzepatide': 2, 'cjc-1295': 2,
    'bpc-157': -1, 'tb-500': -1, 'ipamorelin': -1, 'melanotan-ii': 0, 'pt-141': 0,
  },
  research: {
    'bpc-157': 3, 'semaglutide': 3, 'tirzepatide': 2, 'tb-500': 1,
    'ipamorelin': 1, 'cjc-1295': 1, 'melanotan-ii': -1, 'pt-141': 0,
  },
};

// Reason templates per goal
const goalReasons: Record<Goal, Record<string, string>> = {
  muscle_recovery: {
    'bpc-157': 'Extensively researched for tissue repair and tendon/ligament healing — a top choice for recovery.',
    'tb-500': 'Promotes cell migration and tissue remodeling, complementing recovery protocols.',
    'cjc-1295': 'Supports GH release and IGF-1 production, key pathways for muscle repair.',
    'ipamorelin': 'Selective GH stimulation supports recovery without affecting cortisol levels.',
  },
  fat_loss: {
    'semaglutide': 'Gold-standard GLP-1 agonist with extensive clinical data on metabolic regulation.',
    'tirzepatide': 'Dual GLP-1/GIP mechanism offers enhanced metabolic effects over single-target peptides.',
    'cjc-1295': 'GH axis stimulation supports metabolic rate and body composition changes.',
    'ipamorelin': 'Clean GH release profile supports body composition without hormonal side effects.',
  },
  sleep_quality: {
    'ipamorelin': 'Promotes natural GH pulsatility linked to deep sleep cycles — the go-to for sleep research.',
    'cjc-1295': 'Enhances the GH pulse during sleep, supporting restorative overnight recovery.',
    'bpc-157': 'Neuroprotective properties may indirectly support sleep-related recovery.',
  },
  anti_aging: {
    'cjc-1295': 'Stimulates the GH/IGF-1 axis, central to age-related hormone decline research.',
    'ipamorelin': 'Selective GH release supports skin, bone density, and body composition studies.',
    'bpc-157': 'Regenerative and angiogenic properties relevant to tissue longevity research.',
    'melanotan-ii': 'Melanocortin activation studied for skin photoprotection and pigmentation.',
  },
  cognitive: {
    'bpc-157': 'Demonstrated neuroprotective effects across multiple preclinical models.',
    'pt-141': 'CNS melanocortin pathway activation influences dopaminergic signaling.',
    'ipamorelin': 'GH support for brain-derived neurotrophic factor (BDNF) pathways.',
    'cjc-1295': 'IGF-1 elevation linked to neurogenesis and cognitive function research.',
  },
  injury_healing: {
    'bpc-157': 'The most studied peptide for tissue repair — tendons, ligaments, GI, and more.',
    'tb-500': 'Thymosin Beta-4 fragment excels at wound healing and reducing inflammation.',
    'cjc-1295': 'GH/IGF-1 support accelerates tissue repair timelines in research models.',
    'ipamorelin': 'Clean GH stimulation supports the healing cascade without hormonal disruption.',
  },
};

function getRecommendations(answers: QuizAnswers): Recommendation[] {
  if (!answers.goal || !answers.experience || !answers.concern) return [];

  const scored: Recommendation[] = peptides.map((peptide) => {
    const baseScore = goalScores[answers.goal!][peptide.slug] ?? 0;
    const expMod = experienceModifiers[answers.experience!][peptide.slug] ?? 0;
    const conMod = concernModifiers[answers.concern!][peptide.slug] ?? 0;
    const totalScore = baseScore + expMod + conMod;

    const reason = goalReasons[answers.goal!][peptide.slug] ?? peptide.description;
    const tags: string[] = [];
    if (baseScore >= 9) tags.push('Top Match');
    if (expMod >= 2) tags.push('Great for Your Level');
    if (conMod >= 2) tags.push('Fits Your Priority');

    return { peptide, score: totalScore, reason, tags };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 3);
}

const TOTAL_STEPS = 3;

const GoalFinderPage = () => {
  const [step, setStep] = useState(0); // 0 = intro, 1-3 = questions, 4 = results
  const [answers, setAnswers] = useState<QuizAnswers>({ goal: null, experience: null, concern: null });
  const [transitioning, setTransitioning] = useState(false);

  const goToStep = useCallback((nextStep: number) => {
    setTransitioning(true);
    setTimeout(() => {
      setStep(nextStep);
      setTransitioning(false);
    }, 250);
  }, []);

  const selectGoal = (goal: Goal) => {
    setAnswers((prev) => ({ ...prev, goal }));
    goToStep(2);
  };

  const selectExperience = (experience: Experience) => {
    setAnswers((prev) => ({ ...prev, experience }));
    goToStep(3);
  };

  const selectConcern = (concern: Concern) => {
    setAnswers((prev) => ({ ...prev, concern }));
    goToStep(4);
  };

  const startOver = () => {
    setAnswers({ goal: null, experience: null, concern: null });
    goToStep(0);
  };

  const recommendations = step === 4 ? getRecommendations(answers) : [];
  const progressPercent = step === 0 ? 0 : step >= 4 ? 100 : Math.round((step / TOTAL_STEPS) * 100);

  return (
    <>
      <Helmet>
        <title>Peptide Goal Finder — Find Your Ideal Peptide | PurestPeptides</title>
        <meta
          name="description"
          content="Take our interactive quiz to find the best research peptide for your goals. Whether it's recovery, fat loss, sleep, or cognition — get personalized recommendations."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-slate-900 pt-24 pb-16">
        {/* Decorative background elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-navy-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          {/* Progress bar */}
          {step > 0 && step <= 4 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-400 font-medium">
                  {step >= 4 ? 'Your Results' : `Step ${step} of ${TOTAL_STEPS}`}
                </span>
                <span className="text-sm text-teal-400 font-medium">{progressPercent}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Step content with transition */}
          <div
            className={`transition-all duration-250 ease-out ${
              transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            {/* Step 0: Intro */}
            {step === 0 && (
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
                  <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span className="text-sm text-teal-300 font-medium">3 Quick Questions</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                  Peptide Goal <span className="text-teal-400">Finder</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-4 max-w-xl mx-auto">
                  Not sure which peptide is right for your research? Answer 3 quick questions and we'll match you with the best options.
                </p>
                <p className="text-sm text-slate-500 mb-10">Takes less than 30 seconds</p>

                <button
                  onClick={() => goToStep(1)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-xl text-lg font-semibold transition-all shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                >
                  Find My Peptide
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                <div className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto">
                  {[
                    { label: 'Personalized', desc: 'Tailored to your goals' },
                    { label: 'Research-Based', desc: 'Backed by data' },
                    { label: 'Instant', desc: 'Results in seconds' },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <p className="text-white font-semibold text-sm">{item.label}</p>
                      <p className="text-slate-500 text-xs mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: Primary Goal */}
            {step === 1 && (
              <div>
                <h2 className="font-display text-2xl md:text-3xl text-white mb-2 text-center">
                  What's your primary research goal?
                </h2>
                <p className="text-slate-400 text-center mb-8">Select the area you're most interested in exploring.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {goalOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => selectGoal(option.value)}
                      className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/50 rounded-xl p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/10"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform">{option.icon}</span>
                        <div>
                          <h3 className="text-white font-semibold text-lg">{option.label}</h3>
                          <p className="text-slate-400 text-sm mt-1">{option.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Experience Level */}
            {step === 2 && (
              <div>
                <h2 className="font-display text-2xl md:text-3xl text-white mb-2 text-center">
                  What's your experience level?
                </h2>
                <p className="text-slate-400 text-center mb-8">This helps us calibrate our recommendations.</p>

                <div className="space-y-4 max-w-lg mx-auto">
                  {experienceOptions.map((option, i) => (
                    <button
                      key={option.value}
                      onClick={() => selectExperience(option.value)}
                      className="group w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/50 rounded-xl p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/10"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 font-bold text-sm shrink-0">
                          {i + 1}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg">{option.label}</h3>
                          <p className="text-slate-400 text-sm mt-0.5">{option.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <button onClick={() => goToStep(1)} className="mt-6 mx-auto flex items-center gap-1 text-sm text-slate-500 hover:text-slate-300 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
              </div>
            )}

            {/* Step 3: Top Concern */}
            {step === 3 && (
              <div>
                <h2 className="font-display text-2xl md:text-3xl text-white mb-2 text-center">
                  What matters most to you?
                </h2>
                <p className="text-slate-400 text-center mb-8">We'll prioritize recommendations based on your top concern.</p>

                <div className="space-y-4 max-w-lg mx-auto">
                  {concernOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => selectConcern(option.value)}
                      className="group w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/50 rounded-xl p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/10"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl group-hover:scale-110 transition-transform">{option.icon}</span>
                        <div>
                          <h3 className="text-white font-semibold text-lg">{option.label}</h3>
                          <p className="text-slate-400 text-sm mt-0.5">{option.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <button onClick={() => goToStep(2)} className="mt-6 mx-auto flex items-center gap-1 text-sm text-slate-500 hover:text-slate-300 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
              </div>
            )}

            {/* Step 4: Results */}
            {step === 4 && (
              <div>
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-4">
                    <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-teal-300 font-medium">Quiz Complete</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl text-white mb-2">
                    Your Top Peptide Matches
                  </h2>
                  <p className="text-slate-400">
                    Based on{' '}
                    <span className="text-teal-400">{goalOptions.find((g) => g.value === answers.goal)?.label}</span>,{' '}
                    <span className="text-slate-300">{experienceOptions.find((e) => e.value === answers.experience)?.label.toLowerCase()}</span> level, prioritizing{' '}
                    <span className="text-slate-300">{concernOptions.find((c) => c.value === answers.concern)?.label.toLowerCase()}</span>.
                  </p>
                </div>

                <div className="space-y-6">
                  {recommendations.map((rec, index) => (
                    <div
                      key={rec.peptide.slug}
                      className="bg-white rounded-xl p-6 md:p-8 shadow-xl shadow-black/20 border border-slate-200"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-2xl font-bold text-navy-900">#{index + 1}</span>
                            <h3 className="font-display text-xl md:text-2xl text-navy-900">{rec.peptide.name}</h3>
                          </div>
                          <span className="inline-block px-3 py-1 bg-navy-50 text-navy-700 rounded-full text-xs font-medium">
                            {rec.peptide.category}
                          </span>
                        </div>
                        {rec.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 shrink-0">
                            {rec.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <p className="text-slate-600 mb-4 leading-relaxed">{rec.reason}</p>

                      <div className="mb-5">
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Research Applications</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {rec.peptide.benefits.slice(0, 4).map((benefit) => (
                            <li key={benefit} className="flex items-center gap-2 text-sm text-slate-600">
                              <svg className="w-4 h-4 text-teal-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          to={`/peptides/${rec.peptide.slug}`}
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white rounded-lg text-sm font-medium transition-all"
                        >
                          View Full Profile
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Link>
                        <a
                          href={rec.peptide.shopUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-lg text-sm font-medium transition-all"
                        >
                          Shop at Peptide Foundry
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={startOver}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/10 text-white rounded-xl text-sm font-medium transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Start Over
                  </button>
                  <Link
                    to="/peptides"
                    className="inline-flex items-center gap-2 px-6 py-3 text-slate-400 hover:text-white text-sm font-medium transition-colors"
                  >
                    Browse All Peptides
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>

                {/* Disclaimer */}
                <div className="mt-12 p-4 bg-white/5 border border-white/10 rounded-lg">
                  <p className="text-xs text-slate-500 text-center leading-relaxed">
                    These recommendations are for research purposes only. All peptides are sold strictly for in-vitro research and laboratory use.
                    Consult published literature and institutional guidelines before beginning any research protocol.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GoalFinderPage;
