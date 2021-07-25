export type NameCase = {
  nominative: string;
  possesive: string;
  accusative: string;
  vocative: string;
};

export type Abnormal = {
  ligosyllabus: string;
  polysyllabus: string;
};
export type Suffix = {
  nominative: string;
  possesive: string;
  accusative: string;
  vocative: string | Abnormal;
};
