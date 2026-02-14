export interface TestResult {
  test: string;
  method: string;
  specification: string;
  result: string;
  status: 'pass' | 'fail';
}

export interface BatchCOA {
  batchNumber: string;
  peptide: string;
  lotNumber: string;
  manufactureDate: string;
  expirationDate: string;
  quantity: string;
  purity: string;
  testDate: string;
  testedBy: string;
  certificateId: string;
  molecularWeight: {
    theoretical: string;
    observed: string;
  };
  appearance: string;
  solubility: string;
  storage: string;
  tests: TestResult[];
  notes?: string;
}

// Sample COA data - these are demonstration batches
// In production, this would come from a database
export const batches: BatchCOA[] = [
  {
    batchNumber: 'PP-BPC157-240115-A',
    peptide: 'BPC-157',
    lotNumber: 'LOT-2024-0115-001',
    manufactureDate: '2024-01-15',
    expirationDate: '2026-01-15',
    quantity: '5mg per vial',
    purity: '99.2%',
    testDate: '2024-01-16',
    testedBy: 'Chromak Research Labs',
    certificateId: 'COA-BPC-2024-0115-001',
    molecularWeight: {
      theoretical: '1419.53 Da',
      observed: '1419.51 Da',
    },
    appearance: 'White lyophilized powder',
    solubility: 'Soluble in sterile water, bacteriostatic water',
    storage: '-20°C, protect from light',
    tests: [
      {
        test: 'HPLC Purity',
        method: 'RP-HPLC C18 Column',
        specification: '≥98.0%',
        result: '99.2%',
        status: 'pass',
      },
      {
        test: 'Mass Spectrometry',
        method: 'ESI-MS',
        specification: '1419.53 ± 1.0 Da',
        result: '1419.51 Da',
        status: 'pass',
      },
      {
        test: 'Amino Acid Analysis',
        method: 'AAA',
        specification: 'Matches sequence',
        result: 'Confirmed',
        status: 'pass',
      },
      {
        test: 'Peptide Content',
        method: 'Nitrogen analysis',
        specification: '≥80%',
        result: '87.3%',
        status: 'pass',
      },
      {
        test: 'Water Content',
        method: 'Karl Fischer',
        specification: '≤8.0%',
        result: '4.2%',
        status: 'pass',
      },
      {
        test: 'Endotoxin',
        method: 'LAL',
        specification: '<5 EU/mg',
        result: '<1 EU/mg',
        status: 'pass',
      },
      {
        test: 'Sterility',
        method: 'USP <71>',
        specification: 'No growth',
        result: 'No growth',
        status: 'pass',
      },
    ],
    notes: 'This batch meets all specifications for research use.',
  },
  {
    batchNumber: 'PP-TB500-240118-A',
    peptide: 'TB-500',
    lotNumber: 'LOT-2024-0118-001',
    manufactureDate: '2024-01-18',
    expirationDate: '2026-01-18',
    quantity: '5mg per vial',
    purity: '98.7%',
    testDate: '2024-01-19',
    testedBy: 'Chromak Research Labs',
    certificateId: 'COA-TB5-2024-0118-001',
    molecularWeight: {
      theoretical: '4963.50 Da',
      observed: '4963.47 Da',
    },
    appearance: 'White to off-white lyophilized powder',
    solubility: 'Soluble in sterile water, bacteriostatic water',
    storage: '-20°C, protect from light',
    tests: [
      {
        test: 'HPLC Purity',
        method: 'RP-HPLC C18 Column',
        specification: '≥98.0%',
        result: '98.7%',
        status: 'pass',
      },
      {
        test: 'Mass Spectrometry',
        method: 'ESI-MS',
        specification: '4963.50 ± 1.0 Da',
        result: '4963.47 Da',
        status: 'pass',
      },
      {
        test: 'Amino Acid Analysis',
        method: 'AAA',
        specification: 'Matches sequence',
        result: 'Confirmed',
        status: 'pass',
      },
      {
        test: 'Peptide Content',
        method: 'Nitrogen analysis',
        specification: '≥80%',
        result: '85.1%',
        status: 'pass',
      },
      {
        test: 'Water Content',
        method: 'Karl Fischer',
        specification: '≤8.0%',
        result: '5.8%',
        status: 'pass',
      },
      {
        test: 'Endotoxin',
        method: 'LAL',
        specification: '<5 EU/mg',
        result: '<1 EU/mg',
        status: 'pass',
      },
      {
        test: 'Sterility',
        method: 'USP <71>',
        specification: 'No growth',
        result: 'No growth',
        status: 'pass',
      },
    ],
  },
  {
    batchNumber: 'PP-SEMA-240120-A',
    peptide: 'Semaglutide',
    lotNumber: 'LOT-2024-0120-001',
    manufactureDate: '2024-01-20',
    expirationDate: '2026-01-20',
    quantity: '3mg per vial',
    purity: '99.5%',
    testDate: '2024-01-21',
    testedBy: 'Chromak Research Labs',
    certificateId: 'COA-SEM-2024-0120-001',
    molecularWeight: {
      theoretical: '4113.58 Da',
      observed: '4113.55 Da',
    },
    appearance: 'White lyophilized powder',
    solubility: 'Soluble in sterile water',
    storage: '-20°C, protect from light and moisture',
    tests: [
      {
        test: 'HPLC Purity',
        method: 'RP-HPLC C18 Column',
        specification: '≥98.0%',
        result: '99.5%',
        status: 'pass',
      },
      {
        test: 'Mass Spectrometry',
        method: 'ESI-MS',
        specification: '4113.58 ± 1.0 Da',
        result: '4113.55 Da',
        status: 'pass',
      },
      {
        test: 'Amino Acid Analysis',
        method: 'AAA',
        specification: 'Matches sequence',
        result: 'Confirmed',
        status: 'pass',
      },
      {
        test: 'Peptide Content',
        method: 'Nitrogen analysis',
        specification: '≥80%',
        result: '89.2%',
        status: 'pass',
      },
      {
        test: 'Water Content',
        method: 'Karl Fischer',
        specification: '≤8.0%',
        result: '3.7%',
        status: 'pass',
      },
      {
        test: 'Endotoxin',
        method: 'LAL',
        specification: '<5 EU/mg',
        result: '<1 EU/mg',
        status: 'pass',
      },
      {
        test: 'Sterility',
        method: 'USP <71>',
        specification: 'No growth',
        result: 'No growth',
        status: 'pass',
      },
    ],
    notes: 'Premium batch with exceptional purity.',
  },
  {
    batchNumber: 'PP-CJC-240122-A',
    peptide: 'CJC-1295',
    lotNumber: 'LOT-2024-0122-001',
    manufactureDate: '2024-01-22',
    expirationDate: '2026-01-22',
    quantity: '2mg per vial',
    purity: '98.9%',
    testDate: '2024-01-23',
    testedBy: 'Chromak Research Labs',
    certificateId: 'COA-CJC-2024-0122-001',
    molecularWeight: {
      theoretical: '3367.90 Da',
      observed: '3367.88 Da',
    },
    appearance: 'White lyophilized powder',
    solubility: 'Soluble in sterile water, bacteriostatic water',
    storage: '-20°C, protect from light',
    tests: [
      {
        test: 'HPLC Purity',
        method: 'RP-HPLC C18 Column',
        specification: '≥98.0%',
        result: '98.9%',
        status: 'pass',
      },
      {
        test: 'Mass Spectrometry',
        method: 'ESI-MS',
        specification: '3367.90 ± 1.0 Da',
        result: '3367.88 Da',
        status: 'pass',
      },
      {
        test: 'Amino Acid Analysis',
        method: 'AAA',
        specification: 'Matches sequence',
        result: 'Confirmed',
        status: 'pass',
      },
      {
        test: 'Peptide Content',
        method: 'Nitrogen analysis',
        specification: '≥80%',
        result: '84.6%',
        status: 'pass',
      },
      {
        test: 'Water Content',
        method: 'Karl Fischer',
        specification: '≤8.0%',
        result: '5.2%',
        status: 'pass',
      },
      {
        test: 'Endotoxin',
        method: 'LAL',
        specification: '<5 EU/mg',
        result: '<1 EU/mg',
        status: 'pass',
      },
      {
        test: 'Sterility',
        method: 'USP <71>',
        specification: 'No growth',
        result: 'No growth',
        status: 'pass',
      },
    ],
  },
  {
    batchNumber: 'PP-IPA-240125-A',
    peptide: 'Ipamorelin',
    lotNumber: 'LOT-2024-0125-001',
    manufactureDate: '2024-01-25',
    expirationDate: '2026-01-25',
    quantity: '2mg per vial',
    purity: '99.1%',
    testDate: '2024-01-26',
    testedBy: 'Chromak Research Labs',
    certificateId: 'COA-IPA-2024-0125-001',
    molecularWeight: {
      theoretical: '711.85 Da',
      observed: '711.83 Da',
    },
    appearance: 'White lyophilized powder',
    solubility: 'Soluble in sterile water, bacteriostatic water',
    storage: '-20°C, protect from light',
    tests: [
      {
        test: 'HPLC Purity',
        method: 'RP-HPLC C18 Column',
        specification: '≥98.0%',
        result: '99.1%',
        status: 'pass',
      },
      {
        test: 'Mass Spectrometry',
        method: 'ESI-MS',
        specification: '711.85 ± 1.0 Da',
        result: '711.83 Da',
        status: 'pass',
      },
      {
        test: 'Amino Acid Analysis',
        method: 'AAA',
        specification: 'Matches sequence',
        result: 'Confirmed',
        status: 'pass',
      },
      {
        test: 'Peptide Content',
        method: 'Nitrogen analysis',
        specification: '≥80%',
        result: '86.8%',
        status: 'pass',
      },
      {
        test: 'Water Content',
        method: 'Karl Fischer',
        specification: '≤8.0%',
        result: '4.5%',
        status: 'pass',
      },
      {
        test: 'Endotoxin',
        method: 'LAL',
        specification: '<5 EU/mg',
        result: '<1 EU/mg',
        status: 'pass',
      },
      {
        test: 'Sterility',
        method: 'USP <71>',
        specification: 'No growth',
        result: 'No growth',
        status: 'pass',
      },
    ],
  },
];

export const getBatchByNumber = (batchNumber: string): BatchCOA | undefined => {
  return batches.find(
    (batch) => batch.batchNumber.toLowerCase() === batchNumber.toLowerCase()
  );
};

export const getBatchesByPeptide = (peptideName: string): BatchCOA[] => {
  return batches.filter(
    (batch) => batch.peptide.toLowerCase() === peptideName.toLowerCase()
  );
};

// Sample batch numbers for demo purposes (shown in UI)
export const sampleBatchNumbers = [
  'PP-BPC157-240115-A',
  'PP-TB500-240118-A',
  'PP-SEMA-240120-A',
  'PP-CJC-240122-A',
  'PP-IPA-240125-A',
];
