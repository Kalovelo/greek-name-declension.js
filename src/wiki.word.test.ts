import { DOUBLE_SYLLABUS } from "./constants";
import { getSyllabusTotal, getVowelPositions, getSuffixes } from "./wiki.utils";

const getSyllabusVowels = (word: string) => {
  const vowelPositions = getVowelPositions(word);
  vowelPositions.forEach((position, index) => {
    if (DOUBLE_SYLLABUS.includes(`${word[position]}${word[position + 1]}`))
      vowelPositions[index] = position + 1;
  });
  return vowelPositions;
};

const addIntonation = (word: string) => {
  const vowelPositions = getSyllabusVowels(word);
  const totalSyllabus = getSyllabusTotal(word);
  switch (totalSyllabus) {
    case 1:
      return word;
    case 2:
      return vowelPositions[0];
  }
};

it("adds intonation on 2-syllabus words on first syllabus", () =>
  expect(addIntonation("Ντουλης")).toBe(3));
it("Counts total syllabus", () =>
  expect(getSyllabusTotal("Απόστολος")).toBe(4));
it("Removes syllabus count on double", () =>
  expect(getSyllabusTotal("Έυη")).toBe(2));
it("Gets Vowel Positions", () =>
  expect(getVowelPositions("Απόστολος")).toEqual([0, 2, 5, 7]));

describe("getNamecases", () => {
  test.each([
    [
      "Απόστολος",
      {
        nominative: "Απόστολος",
        possesive: "Απόστολου",
        accusative: "Απόστολο",
        vocative: "Απόστολε",
      },
    ],
    [
      "Τάσος",
      {
        nominative: "Τάσος",
        possesive: "Τάσου",
        accusative: "Τάσο",
        vocative: "Τάσο",
      },
    ],
    [
      "Γεωργία",
      {
        nominative: "Γεωργία",
        possesive: "Γεωργίας",
        accusative: "Γεωργία",
        vocative: "Γεωργία",
      },
    ],
    [
      "Εύη",
      {
        nominative: "Εύη",
        possesive: "Εύης",
        accusative: "Εύη",
        vocative: "Εύη",
      },
    ],
    [
      "Αγαμέμνων",
      {
        nominative: "Αγαμέμνων",
        possesive: "Αγαμέμνονος",
        accusative: "Αγαμέμνονα",
        vocative: "Αγαμέμνων",
      },
    ],
    [
      "Νικολέτα",
      {
        nominative: "Νικολέτα",
        possesive: "Νικολέτας",
        accusative: "Νικολέτα",
        vocative: "Νικολέτα",
      },
    ],
    [
      "Πολυχρόνης",
      {
        nominative: "Πολυχρόνης",
        possesive: "Πολυχρόνη",
        accusative: "Πολυχρόνη",
        vocative: "Πολυχρόνη",
      },
    ],
    [
      "Αλέξανδρος",
      {
        nominative: "Αλέξανδρος",
        possesive: "Αλέξανδρου",
        accusative: "Αλέξανδρο",
        vocative: "Αλέξανδρε",
      },
    ],
    [
      "Σία",
      {
        nominative: "Σία",
        possesive: "Σίας",
        accusative: "Σία",
        vocative: "Σία",
      },
    ],
    [
      "Ευριπίδης",
      {
        nominative: "Ευριπίδης",
        possesive: "Ευριπίδη",
        accusative: "Ευριπίδη",
        vocative: "Ευριπίδη",
      },
    ],
    [
      "Διαγόρας",
      {
        nominative: "Διαγόρας",
        possesive: "Διαγόρα",
        accusative: "Διαγόρα",
        vocative: "Διαγόρα",
      },
    ],
    [
      "Αναξίμανδρος",
      {
        nominative: "Αναξίμανδρος",
        possesive: "Αναξίμανδρου",
        accusative: "Αναξίμανδρο",
        vocative: "Αναξίμανδρε",
      },
    ],
    [
      "Αφεντούλης",
      {
        nominative: "Αφεντούλης",
        possesive: "Αφεντούλη",
        accusative: "Αφεντούλη",
        vocative: "Αφεντούλη",
      },
    ],
  ])("(%s)", (name, suffixes) => expect(getSuffixes(name)).toEqual(suffixes));
});
