import { DOUBLE_SYLLABUS, SUFFIXES, VOWELS } from "./constants";
import { Declension, Abnormal, Suffix, SuffixCases } from "./types";

const _removeDiacritics = (text: string): string =>
  text.normalize("NFD").replace(/\p{Diacritic}/gu, "");

const _formatWord = (word: string): string =>
  _removeDiacritics(word).toLowerCase();

const _getSyllabusTotal = (word: string): number => {
  word = _formatWord(word);
  let total = 0;
  const wordArray = word.split("");
  wordArray.forEach((letter) => (total += VOWELS.includes(letter) ? 1 : 0));
  DOUBLE_SYLLABUS.forEach((double) => (total -= word.includes(double) ? 1 : 0));
  return total;
};

const _getSuffixes = (
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

  if (!suffixes) return _getSuffixes(word, index + 1);

  return { suffixes, suffixIndex };
};

const _handleAbnormal = (possibleAbnormal: Suffix | Abnormal, word: string) => {
  if ((possibleAbnormal as Abnormal).ligosyllabus) {
    return _getSyllabusTotal(word) > 2
      ? (possibleAbnormal as Abnormal).polysyllabus
      : (possibleAbnormal as Abnormal).ligosyllabus;
  } else return possibleAbnormal as Suffix;
};

const _checkFormat = (word: string) => {
  if (word.length === 0) throw new Error("Greek names cannot be null.");
  if (/[^α-ωΑ-Ωά-ώΆ-Ώ]/gi.test(word))
    throw new Error("Greek names should only include greek letters.");
};

export const getDeclension = (word: string): Declension => {
  _checkFormat(word); // if format is bad, throw an error.
  try {
    // if format is good, try to find suffixes.
    const { suffixes, suffixIndex } = _getSuffixes(word);

    const { nominative, possesive, accusative } = { ...suffixes };
    const vocative = _handleAbnormal(suffixes.vocative, word);

    const wordBase = word.substr(0, suffixIndex);
    const isUPPERCASE = word.toLocaleUpperCase() === word;

    const hasIntonation = isUPPERCASE
      ? nominative.intonation.toLocaleUpperCase() ===
        word.substr(suffixIndex).toLocaleUpperCase()
      : nominative.intonation === word.substr(suffixIndex);

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
  } catch (e) {
    return {
      nominative: word,
      possesive: word,
      accusative: word,
      vocative: word,
    };
  }
};
