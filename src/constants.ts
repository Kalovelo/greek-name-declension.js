import { Suffix } from "./types";

export const ALLOWED_SUFFIXES = [
  "ς",
  "α",
  "ά",
  "ι",
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

export const DOUBLE_SYLLABUS = ["ευ", "αυ", "ου"];

export const VOWELS = ["α", "ι", "ε", "η", "ο", "υ", "ω"];

export const SUFFIXES: Suffix[] = [
  {
    nominative: "ης",
    possesive: "η",
    accusative: "η",
    vocative: "η",
  },
  {
    nominative: "η",
    possesive: "ης",
    accusative: "η",
    vocative: "η",
  },
  {
    nominative: "ος",
    possesive: "ου",
    accusative: "ο",
    vocative: {
      ligosyllabus: "ο",
      polysyllabus: "ε",
    },
  },
  {
    nominative: "ας",
    possesive: "α",
    accusative: "α",
    vocative: "α",
  },
  {
    nominative: "α",
    possesive: "ας",
    accusative: "α",
    vocative: "α",
  },
  {
    nominative: "ων",
    possesive: "ονος",
    accusative: "ονα",
    vocative: "ων",
  },
  {
    nominative: "ω",
    possesive: "ως",
    accusative: "ω",
    vocative: "ω",
  },
  {
    nominative: "ις",
    possesive: "ιδος",
    accusative: "ιδα",
    vocative: "ις",
  },
];
