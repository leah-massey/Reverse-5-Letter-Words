const spinWords = require("./spinWords");

describe("spinWords", () => {
  test("it returns words that are 4 letters or less long", () =>
    expect(spinWords("brew")).toEqual("brew"));

  test("a five letter word is reversed", () =>
    expect(spinWords("logical")).toEqual("lacigol"));

  // test("it returns a string of words that are 4 letters or less long", () =>
  // expect(spinWords("My name is Leah")).toEqual("My name is Leah"));
});
