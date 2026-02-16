import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Search,
  FileText,
  CheckCircle,
  XCircle,
  Shield,
  Beaker,
  Calendar,
  Building2,
  Download,
  Printer,
  AlertCircle,
  ChevronRight,
  Microscope,
  Scale,
  Droplets,
  FlaskConical,
} from 'lucide-react';
import type { BatchCOA } from '../data/batches';
import { getBatchByNumber, sampleBatchNumbers } from '../data/batches';

const COALookupPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState('');
  const [searchedBatch, setSearchedBatch] = useState<string | null>(null);
  const [result, setResult] = useState<BatchCOA | null>(null);
  const [notFound, setNotFound] = useState(false);

  // Check for batch param on load
  useEffect(() => {
    const batchParam = searchParams.get('batch');
    if (batchParam) {
      setSearchInput(batchParam);
      performSearch(batchParam);
    }
  }, []);

  const performSearch = (batchNumber: string) => {
    const trimmed = batchNumber.trim();
    if (!trimmed) return;

    setSearchedBatch(trimmed);
    const foundBatch = getBatchByNumber(trimmed);

    if (foundBatch) {
      setResult(foundBatch);
      setNotFound(false);
      setSearchParams({ batch: trimmed });
    } else {
      setResult(null);
      setNotFound(true);
      setSearchParams({});
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(searchInput);
  };

  const handleSampleClick = (batchNumber: string) => {
    setSearchInput(batchNumber);
    performSearch(batchNumber);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>
          {result
            ? `COA: ${result.batchNumber} - ${result.peptide} | Purest Peptides`
            : 'COA Batch Verification | Purest Peptides'}
        </title>
        <meta
          name="description"
          content="Verify the authenticity and purity of your peptides with our Certificate of Analysis (COA) lookup tool. Enter your batch number to view complete test results."
        />
        <link rel="canonical" href="https://purestpeptides.com/coa-lookup" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_50%)]" />
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Quality Verification
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Certificate of Analysis{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Lookup
                </span>
              </h1>

              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                Enter your batch number to verify the authenticity and view
                complete test results for your peptide. Every batch is
                third-party tested to ensure the highest quality for your
                research.
              </p>

              {/* Search Form */}
              <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Enter batch number (e.g., PP-BPC157-240115-A)"
                    className="w-full pl-12 pr-32 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all"
                  >
                    Verify
                  </button>
                </div>
              </form>

              {/* Sample Batch Numbers */}
              <div className="text-sm text-slate-400 mb-4">
                Try a sample batch number:
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {sampleBatchNumbers.map((batch) => (
                  <button
                    key={batch}
                    onClick={() => handleSampleClick(batch)}
                    className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm hover:bg-slate-700 hover:text-white transition-all font-mono"
                  >
                    {batch}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        {(result || notFound) && (
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              {notFound ? (
                <div className="max-w-2xl mx-auto">
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-8 text-center">
                    <AlertCircle className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-3">
                      Batch Not Found
                    </h2>
                    <p className="text-slate-300 mb-6">
                      We couldn't find a Certificate of Analysis for batch
                      number{' '}
                      <span className="font-mono text-amber-400">
                        "{searchedBatch}"
                      </span>
                      .
                    </p>
                    <div className="text-left bg-slate-800/50 rounded-xl p-6 mb-6">
                      <h3 className="font-semibold text-white mb-3">
                        This could mean:
                      </h3>
                      <ul className="space-y-2 text-slate-300 text-sm">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                          The batch number may be entered incorrectly
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                          This batch may not yet be in our system
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                          The product may not have been purchased from Purest
                          Peptides
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm text-slate-400">
                      Need help? Contact us at{' '}
                      <a
                        href="mailto:support@purestpeptides.com"
                        className="text-emerald-400 hover:underline"
                      >
                        support@purestpeptides.com
                      </a>{' '}
                      with your order details.
                    </p>
                  </div>
                </div>
              ) : result ? (
                <div className="max-w-4xl mx-auto">
                  {/* COA Header */}
                  <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden mb-8 print:border-slate-300 print:bg-white">
                    <div className="bg-emerald-500/10 border-b border-emerald-500/20 px-6 py-4 flex items-center justify-between print:bg-emerald-50">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-500/20 rounded-lg print:bg-emerald-100">
                          <FileText className="w-6 h-6 text-emerald-400 print:text-emerald-600" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-white print:text-slate-900">
                            Certificate of Analysis
                          </h2>
                          <p className="text-sm text-emerald-400 print:text-emerald-600">
                            {result.certificateId}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 print:hidden">
                        <button
                          onClick={handlePrint}
                          className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 hover:text-white transition-all"
                          title="Print COA"
                        >
                          <Printer className="w-5 h-5" />
                        </button>
                        <button
                          className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 hover:text-white transition-all"
                          title="Download PDF"
                        >
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Product Info Grid */}
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {/* Left Column - Product Info */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Beaker className="w-5 h-5 text-cyan-400 print:text-cyan-600" />
                            <div>
                              <p className="text-xs text-slate-400 uppercase tracking-wider print:text-slate-500">
                                Product Name
                              </p>
                              <p className="text-lg font-semibold text-white print:text-slate-900">
                                {result.peptide}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-cyan-400 print:text-cyan-600" />
                            <div>
                              <p className="text-xs text-slate-400 uppercase tracking-wider print:text-slate-500">
                                Batch Number
                              </p>
                              <p className="font-mono text-white print:text-slate-900">
                                {result.batchNumber}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Scale className="w-5 h-5 text-cyan-400 print:text-cyan-600" />
                            <div>
                              <p className="text-xs text-slate-400 uppercase tracking-wider print:text-slate-500">
                                Quantity
                              </p>
                              <p className="text-white print:text-slate-900">
                                {result.quantity}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <FlaskConical className="w-5 h-5 text-cyan-400 print:text-cyan-600" />
                            <div>
                              <p className="text-xs text-slate-400 uppercase tracking-wider print:text-slate-500">
                                Appearance
                              </p>
                              <p className="text-white print:text-slate-900">
                                {result.appearance}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Right Column - Dates & Testing */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-cyan-400 print:text-cyan-600" />
                            <div>
                              <p className="text-xs text-slate-400 uppercase tracking-wider print:text-slate-500">
                                Manufacture Date
                              </p>
                              <p className="text-white print:text-slate-900">
                                {new Date(
                                  result.manufactureDate
                                ).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                })}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-cyan-400 print:text-cyan-600" />
                            <div>
                              <p className="text-xs text-slate-400 uppercase tracking-wider print:text-slate-500">
                                Expiration Date
                              </p>
                              <p className="text-white print:text-slate-900">
                                {new Date(
                                  result.expirationDate
                                ).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                })}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Building2 className="w-5 h-5 text-cyan-400 print:text-cyan-600" />
                            <div>
                              <p className="text-xs text-slate-400 uppercase tracking-wider print:text-slate-500">
                                Tested By
                              </p>
                              <p className="text-white print:text-slate-900">
                                {result.testedBy}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Microscope className="w-5 h-5 text-cyan-400 print:text-cyan-600" />
                            <div>
                              <p className="text-xs text-slate-400 uppercase tracking-wider print:text-slate-500">
                                Test Date
                              </p>
                              <p className="text-white print:text-slate-900">
                                {new Date(result.testDate).toLocaleDateString(
                                  'en-US',
                                  {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                  }
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Purity Highlight */}
                      <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-xl p-6 mb-8 text-center print:border-emerald-300 print:bg-emerald-50">
                        <p className="text-sm text-slate-400 uppercase tracking-wider mb-2 print:text-slate-500">
                          HPLC Verified Purity
                        </p>
                        <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 print:text-emerald-600">
                          {result.purity}
                        </p>
                        <p className="text-sm text-emerald-400 mt-2 print:text-emerald-600">
                          Exceeds 98% purity standard
                        </p>
                      </div>

                      {/* Molecular Weight */}
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="bg-slate-800/50 rounded-xl p-4 print:bg-slate-100">
                          <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 print:text-slate-500">
                            Theoretical MW
                          </p>
                          <p className="font-mono text-lg text-white print:text-slate-900">
                            {result.molecularWeight.theoretical}
                          </p>
                        </div>
                        <div className="bg-slate-800/50 rounded-xl p-4 print:bg-slate-100">
                          <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 print:text-slate-500">
                            Observed MW
                          </p>
                          <p className="font-mono text-lg text-white print:text-slate-900">
                            {result.molecularWeight.observed}
                          </p>
                        </div>
                      </div>

                      {/* Test Results Table */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-white mb-4 print:text-slate-900">
                          Test Results
                        </h3>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-slate-700 print:border-slate-300">
                                <th className="text-left py-3 px-4 text-xs font-medium text-slate-400 uppercase tracking-wider print:text-slate-500">
                                  Test
                                </th>
                                <th className="text-left py-3 px-4 text-xs font-medium text-slate-400 uppercase tracking-wider print:text-slate-500">
                                  Method
                                </th>
                                <th className="text-left py-3 px-4 text-xs font-medium text-slate-400 uppercase tracking-wider print:text-slate-500">
                                  Specification
                                </th>
                                <th className="text-left py-3 px-4 text-xs font-medium text-slate-400 uppercase tracking-wider print:text-slate-500">
                                  Result
                                </th>
                                <th className="text-center py-3 px-4 text-xs font-medium text-slate-400 uppercase tracking-wider print:text-slate-500">
                                  Status
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {result.tests.map((test, index) => (
                                <tr
                                  key={index}
                                  className="border-b border-slate-800 last:border-0 hover:bg-slate-800/30 print:border-slate-200 print:hover:bg-transparent"
                                >
                                  <td className="py-3 px-4 text-white font-medium print:text-slate-900">
                                    {test.test}
                                  </td>
                                  <td className="py-3 px-4 text-slate-300 text-sm print:text-slate-600">
                                    {test.method}
                                  </td>
                                  <td className="py-3 px-4 text-slate-300 font-mono text-sm print:text-slate-600">
                                    {test.specification}
                                  </td>
                                  <td className="py-3 px-4 text-white font-mono text-sm print:text-slate-900">
                                    {test.result}
                                  </td>
                                  <td className="py-3 px-4 text-center">
                                    {test.status === 'pass' ? (
                                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full print:bg-emerald-100 print:text-emerald-600">
                                        <CheckCircle className="w-3 h-3" />
                                        Pass
                                      </span>
                                    ) : (
                                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-500/20 text-red-400 text-xs font-medium rounded-full print:bg-red-100 print:text-red-600">
                                        <XCircle className="w-3 h-3" />
                                        Fail
                                      </span>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-slate-800/50 rounded-xl p-4 print:bg-slate-100">
                          <div className="flex items-center gap-2 mb-2">
                            <Droplets className="w-4 h-4 text-cyan-400 print:text-cyan-600" />
                            <p className="text-xs text-slate-400 uppercase tracking-wider print:text-slate-500">
                              Solubility
                            </p>
                          </div>
                          <p className="text-slate-300 text-sm print:text-slate-700">
                            {result.solubility}
                          </p>
                        </div>
                        <div className="bg-slate-800/50 rounded-xl p-4 print:bg-slate-100">
                          <div className="flex items-center gap-2 mb-2">
                            <Beaker className="w-4 h-4 text-cyan-400 print:text-cyan-600" />
                            <p className="text-xs text-slate-400 uppercase tracking-wider print:text-slate-500">
                              Storage
                            </p>
                          </div>
                          <p className="text-slate-300 text-sm print:text-slate-700">
                            {result.storage}
                          </p>
                        </div>
                      </div>

                      {/* Notes */}
                      {result.notes && (
                        <div className="bg-slate-800/50 rounded-xl p-4 print:bg-slate-100">
                          <p className="text-xs text-slate-400 uppercase tracking-wider mb-2 print:text-slate-500">
                            Notes
                          </p>
                          <p className="text-slate-300 text-sm print:text-slate-700">
                            {result.notes}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="bg-slate-800/30 border-t border-slate-700 px-6 py-4 print:bg-slate-50 print:border-slate-200">
                      <p className="text-xs text-slate-400 text-center print:text-slate-500">
                        This Certificate of Analysis is provided for research
                        purposes only. Products are not for human consumption.
                        For questions about this COA, contact{' '}
                        <a
                          href="mailto:support@purestpeptides.com"
                          className="text-emerald-400 hover:underline print:text-emerald-600"
                        >
                          support@purestpeptides.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </section>
        )}

        {/* Info Section */}
        <section className="py-12 md:py-16 print:hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white text-center mb-8">
                Understanding Your COA
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Microscope className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">HPLC Purity</h3>
                  <p className="text-sm text-slate-400">
                    High-Performance Liquid Chromatography confirms peptide
                    purity. We guarantee ≥98% purity on all products.
                  </p>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Scale className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    Mass Spectrometry
                  </h3>
                  <p className="text-sm text-slate-400">
                    MS confirms molecular identity by matching observed mass to
                    theoretical values within tight tolerances.
                  </p>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    Third-Party Testing
                  </h3>
                  <p className="text-sm text-slate-400">
                    All batches are tested by independent laboratories to ensure
                    unbiased, accurate results.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  to="/quality"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Learn more about our testing process
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Shop CTA */}
        <section className="py-12 md:py-16 print:hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                Verified Quality. Ready to Order?
              </h2>
              <p className="text-teal-100 mb-6">
                Every batch is third-party tested. Shop research-grade peptides with confidence.
              </p>
              <a
                href="https://peptidefoundry.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-700 font-bold rounded-lg hover:bg-teal-50 transition-all shadow-lg"
              >
                Shop at Peptide Foundry
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="py-12 md:py-16 print:hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Can't Find Your Batch?
              </h2>
              <p className="text-slate-300 mb-6">
                If you can't locate your COA, our support team is here to help.
                Please have your order number or batch number ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all"
                >
                  Contact Support
                </Link>
                <Link
                  to="/quality"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-all"
                >
                  View Quality Standards
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default COALookupPage;
