import parenthesesParser from "./parentheses";

describe("Parentheses", () => {
  const testData = {
    pass: [
      {
        input: "165 + 85",
        result: ["165 + 85"],
      },
      {
        input: "(165 + 85)",
        result: [{ p: "165 + 85" }],
      },

      {
        input: "((((165 + 85))))",
        result: [{ p: "(((165 + 85)))" }],
      },
      {
        input: "(165 + 85) + 8",
        result: [{ p: "165 + 85" }, " + 8"],
      },
      {
        input: "1654 + (2 + (3 + (256 - 12)) + 4) + 8 - (26 - 10) - 5",
        result: [
          "1654 + ",
          { p: "2 + (3 + (256 - 12)) + 4" },
          " + 8 - ",
          { p: "26 - 10" },
          " - 5",
        ],
      },
    ],
  };
  it("Should separate in the bigger parentheses", () => {
    const { pass } = testData;

    pass.map(({ input, result }) => {
      expect(parenthesesParser(input)).toEqual(result);
    });
  });
});
