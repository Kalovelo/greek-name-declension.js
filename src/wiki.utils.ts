import { DOUBLE_SYLLABUS, SUFFIXES, VOWELS } from "./constants";
import { Declension, Abnormal, Suffix, SuffixCases } from "./types";

const getSyllabusVowels = (word: string) => {
  word = word.toLocaleLowerCase();
  const vowelPositions = getVowelPositions(word);
  vowelPositions.forEach((position, index) => {
    if (DOUBLE_SYLLABUS.includes(`${word[position]}${word[position + 1]}`))
      vowelPositions[index] = position + 1;
  });
  return vowelPositions;
};

export const removeDiacritics = (text: string): string =>
  text.normalize("NFD").replace(/\p{Diacritic}/gu, "");

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

const findSuffix = (
  word: string,
  index = 0
): { suffixes: SuffixCases; suffixIndex: number } => {
  if (index === word.length) throw Error("Suffix not found.");

  const suffixIndex = word.length - (1 + index);

  const suffixes = SUFFIXES.find((suffix) => {
    const formattedWord = word.toLocaleLowerCase().substr(suffixIndex);
    return (
      formattedWord === suffix.nominative.simple ||
      formattedWord === suffix.nominative.intonation
    );
  });

  if (!suffixes) return findSuffix(word, index + 1);

  return { suffixes, suffixIndex };
};

const handleAbnormal = (possibleAbnormal: Suffix | Abnormal, word: string) => {
  if ((possibleAbnormal as Abnormal).ligosyllabus) {
    return getSyllabusTotal(word) > 2
      ? (possibleAbnormal as Abnormal).polysyllabus
      : (possibleAbnormal as Abnormal).ligosyllabus;
  } else return possibleAbnormal as Suffix;
};

export const getDeclension = (word: string): Declension => {
  const { suffixes, suffixIndex } = findSuffix(word);

  const { nominative, possesive, accusative } = { ...suffixes };
  const vocative = handleAbnormal(suffixes.vocative, word);

  const wordBase = word.substr(0, suffixIndex);
  const isUPPERCASE = word.toLocaleUpperCase() === word;
  const hasIntonation = nominative.intonation === word.substr(suffixIndex);

  let nameCases = [
    ...[nominative, possesive, accusative, vocative as Suffix].map(
      (nameCase: Suffix) =>
        wordBase.concat(hasIntonation ? nameCase.intonation : nameCase.simple)
    ),
  ];

  if (isUPPERCASE)
    nameCases = nameCases.map((nameCase) => nameCase.toLocaleUpperCase());

  return {
    nominative: nameCases[0],
    possesive: nameCases[1],
    accusative: nameCases[2],
    vocative: nameCases[3],
  };
};
