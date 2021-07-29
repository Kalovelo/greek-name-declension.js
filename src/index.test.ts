import { getDeclension } from ".";

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
      "Γιώργος",
      {
        nominative: "Γιώργος",
        possesive: "Γιώργου",
        accusative: "Γιώργο",
        vocative: "Γιώργο",
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
      "αγαμέμνων",
      {
        nominative: "αγαμέμνων",
        possesive: "αγαμέμνονος",
        accusative: "αγαμέμνονα",
        vocative: "αγαμέμνων",
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
      "ΒΑΓΓΕΛΑΣ",
      {
        nominative: "ΒΑΓΓΕΛΑΣ",
        possesive: "ΒΑΓΓΕΛΑ",
        accusative: "ΒΑΓΓΕΛΑ",
        vocative: "ΒΑΓΓΕΛΑ",
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
    [
      "ΑΦΕΝΤΟΥΛΗΣ",
      {
        nominative: "ΑΦΕΝΤΟΥΛΗΣ",
        possesive: "ΑΦΕΝΤΟΥΛΗ",
        accusative: "ΑΦΕΝΤΟΥΛΗ",
        vocative: "ΑΦΕΝΤΟΥΛΗ",
      },
    ],
    [
      "Φωφώ",
      {
        nominative: "Φωφώ",
        possesive: "Φωφώς",
        accusative: "Φωφώ",
        vocative: "Φωφώ",
      },
    ],
    [
      "ΑΛΕΞΑΝΔΡΟΣ",
      {
        nominative: "ΑΛΕΞΑΝΔΡΟΣ",
        possesive: "ΑΛΕΞΑΝΔΡΟΥ",
        accusative: "ΑΛΕΞΑΝΔΡΟ",
        vocative: "ΑΛΕΞΑΝΔΡΕ",
      },
    ],
    [
      "Λουκάρδος",
      {
        nominative: "Λουκάρδος",
        possesive: "Λουκάρδου",
        accusative: "Λουκάρδο",
        vocative: "Λουκάρδε",
      },
    ],
    [
      "Κούλης",
      {
        nominative: "Κούλης",
        possesive: "Κούλη",
        accusative: "Κούλη",
        vocative: "Κούλη",
      },
    ],
    [
      "Αστέρας",
      {
        nominative: "Αστέρας",
        possesive: "Αστέρα",
        accusative: "Αστέρα",
        vocative: "Αστέρα",
      },
    ],
    [
      "Δαβίδ",
      {
        nominative: "Δαβίδ",
        possesive: "Δαβίδ",
        accusative: "Δαβίδ",
        vocative: "Δαβίδ",
      },
    ],
  ])("(%s)", (name, suffixes) => expect(getDeclension(name)).toEqual(suffixes));
});

it("should throw error when a name contains a number", () =>
  expect(() => getDeclension("Σίσσ1")).toThrowError());
it("should throw error when a name contains space", () =>
  expect(() => getDeclension("Σίσ συ")).toThrowError());
it("should throw error when a name contains symbols", () =>
  expect(() => getDeclension("Σίσ!!@συ")).toThrowError());
it("should throw error when a name doesn't include a single letter", () =>
  expect(() => getDeclension("")).toThrowError());
