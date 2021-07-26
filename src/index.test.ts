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
  ])("(%s)", (name, suffixes) => expect(getDeclension(name)).toEqual(suffixes));

  it("throws an Error when name suffix is not found", () =>
    expect(() => getDeclension("asdasds")).toThrowError());
});
