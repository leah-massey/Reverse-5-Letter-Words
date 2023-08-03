const spinWords = require("./spinWords");

describe("spinWords", () => {
  test("it returns words that are 4 letters or less long", () =>
    expect(spinWords("brew")).toEqual("brew"));

  test("a five or more letter word is reversed", () =>
    expect(spinWords("logical")).toEqual("lacigol"));

  test("it returns a string of words that are 4 letters or less long", () =>
    expect(spinWords("My name is Leah")).toEqual("My name is Leah"));

  test("it reverses any words in a string that are more than 4 letters long", () =>
    expect(spinWords("My name is James")).toEqual("My name is semaJ"));
});
