import parenthesesParser from "./parentheses";

describe("Parentheses", () => {
  it("Should separate in the bigger parentheses", () => {
    expect(
      parenthesesParser("1654 + (2 + (3 + (256 - 12)) + 4) + 8 - (26 - 10) - 5")
    ).toEqual([
      "1654 + ",
      { p: "2 + (3 + (256 - 12)) + 4" },
      " + 8 - ",
      { p: "26 - 10" },
      " - 5",
    ]);
  });
});
