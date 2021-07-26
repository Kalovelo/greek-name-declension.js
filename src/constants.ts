import { SuffixCases } from "./types";

export const ALLOWED_SUFFIXES = [
  "ς",
  "α",
  "ά",
  "ί",
  "ι",
  "η",
  "ή",
  "ο",
  "ό",
  "υ",
  "ύ",
  "ω",
  "ώ",
];

export const ALLOWED_DOUBLE_SUFFIXES = ["ων", "ών"];

export const DOUBLE_SYLLABUS = ["ευ", "αυ", "ου", "ιω", "ιο"];

export const VOWELS = ["α", "ι", "ε", "η", "ο", "υ", "ω"];

export const SUFFIXES: SuffixCases[] = [
  {
    nominative: {
      simple: "ης",
      intonation: "ής",
    },
    possesive: {
      simple: "η",
      intonation: "ή",
    },
    accusative: {
      simple: "η",
      intonation: "ή",
    },
    vocative: {
      simple: "η",
      intonation: "ή",
    },
  },
  {
    nominative: {
      simple: "η",
      intonation: "ή",
    },
    possesive: {
      simple: "ης",
      intonation: "ής",
    },
    accusative: {
      simple: "η",
      intonation: "ή",
    },
    vocative: {
      simple: "η",
      intonation: "ή",
    },
  },
  {
    nominative: {
      simple: "ος",
      intonation: "ός",
    },
    possesive: {
      simple: "ου",
      intonation: "ού",
    },
    accusative: {
      simple: "ο",
      intonation: "ό",
    },
    vocative: {
      ligosyllabus: {
        simple: "ο",
        intonation: "ό",
      },
      polysyllabus: {
        simple: "ε",
        intonation: "έ",
      },
    },
  },
  {
    nominative: {
      simple: "ας",
      intonation: "άς",
    },
    possesive: {
      simple: "α",
      intonation: "ά",
    },
    accusative: {
      simple: "α",
      intonation: "ά",
    },
    vocative: {
      simple: "α",
      intonation: "ά",
    },
  },
  {
    nominative: {
      simple: "α",
      intonation: "ά",
    },
    possesive: {
      simple: "ας",
      intonation: "άς",
    },
    accusative: {
      simple: "α",
      intonation: "ά",
    },
    vocative: {
      simple: "α",
      intonation: "ά",
    },
  },
  {
    nominative: {
      simple: "ων",
      intonation: "ών",
    },
    possesive: {
      simple: "ονος",
      intonation: "όνος",
    },
    accusative: {
      simple: "ονα",
      intonation: "όνα",
    },
    vocative: {
      simple: "ων",
      intonation: "ών",
    },
  },
  {
    nominative: {
      simple: "ω",
      intonation: "ώ",
    },
    possesive: {
      simple: "ψς",
      intonation: "ώς",
    },
    accusative: {
      simple: "ω",
      intonation: "ώ",
    },
    vocative: {
      simple: "ω",
      intonation: "ώ",
    },
  },
  {
    nominative: {
      simple: "ις",
      intonation: "ίς",
    },
    possesive: {
      simple: "ιδος",
      intonation: "ίδος",
    },
    accusative: {
      simple: "ιδα",
      intonation: "ίδα",
    },
    vocative: {
      simple: "ις",
      intonation: "ίς",
    },
  },
];
