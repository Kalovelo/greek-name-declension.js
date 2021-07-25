export type Declension = {
  nominative: string;
  possesive: string;
  accusative: string;
  vocative: string;
};

export type Suffix = {
  simple: string;
  intonation: string;
};

export type Abnormal = {
  ligosyllabus: Suffix;
  polysyllabus: Suffix;
};

export type SuffixCases = {
  nominative: Suffix;
  possesive: Suffix;
  accusative: Suffix;
  vocative: Suffix | Abnormal;
};
