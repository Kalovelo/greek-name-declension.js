import {
  ALLOWED_DOUBLE_SUFFIXES,
  ALLOWED_SUFFIXES,
  DOUBLE_SYLLABUS,
  SUFFIXES,
  VOWELS,
} from "./constants";
import { NameCase, Abnormal } from "./types";

export const delay = (ms: number): Promise<unknown> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export function formatText(text: string): string {
  return text.replace(/(\&\s.*)|(.?n)/gm, "").trim();
}

export const removeDiacritics = (text: string): string =>
  text.normalize("NFD").replace(/\p{Diacritic}/gu, "");

export const useNameFilter = (name: string): boolean =>
  name.split(" ").length === 1 &&
  (ALLOWED_DOUBLE_SUFFIXES.includes(name.slice(-2)) ||
    ALLOWED_SUFFIXES.includes(name.slice(-1)));

export async function fetchHTML(url: string): Promise<string> {
  const res = await fetch(url);
  const html = await res.text();
  return html;
}

export const formatWord = (word: string): string =>
  removeDiacritics(word).toLowerCase();

export const getSyllabusTotal = (word: string): number => {
  word = formatWord(word);
  let total = 0;
  const wordArray = word.split("");
  wordArray.forEach((letter) => (total += VOWELS.includes(letter) ? 1 : 0));
  DOUBLE_SYLLABUS.forEach((double) => (total -= word.includes(double) ? 1 : 0));
  return total;
};

export const getVowelPositions = (word: string): number[] => {
  word = formatWord(word);
  const positions: number[] = [];
  const wordArray = word.split("");
  wordArray.forEach((letter, index) => {
    if (VOWELS.includes(letter)) positions.push(index);
  });
  return positions;
};

export const getSuffixes = (word: string, index = 0): NameCase => {
  if (index === word.length) throw Error("Suffix not found.");

  const presuffixes = SUFFIXES.find(
    (suffix) => suffix.nominative === word.substr(word.length - (1 + index))
  );

  if (!presuffixes) return getSuffixes(word, index + 1);

  const suffixes = { ...presuffixes };

  if ((<Abnormal>suffixes.vocative).ligosyllabus) {
    const polysyllabus = (suffixes.vocative as Abnormal).polysyllabus;
    const ligosyllabus = (suffixes.vocative as Abnormal).ligosyllabus;
    suffixes.vocative =
      getSyllabusTotal(word) > 2 ? polysyllabus : ligosyllabus;
  }

  const wordBase = word.substr(0, word.length - (1 + index));

  const nameCase: NameCase = {
    nominative: wordBase + suffixes.nominative,
    possesive: wordBase + suffixes.possesive,
    accusative: wordBase + suffixes.accusative,
    vocative: wordBase + suffixes.vocative,
  };

  return nameCase;
};
