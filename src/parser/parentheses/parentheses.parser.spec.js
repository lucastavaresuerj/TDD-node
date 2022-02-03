import parentheses from "./parentheses.parser.js";
import MatchingNumberError from "./matchingNumber.error.js";
import MatchingSeparatorError from "./matchingSeparator.error.js";

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
    error: [
      {
        input: "17 + (78",
        error: new MatchingNumberError(),
      },
      {
        input: "17 + (78))",
        error: new MatchingNumberError(),
      },
      {
        input: "17 + (78}",
        error: new MatchingSeparatorError("}", ")"),
      },
    ],
  };
  it("Should separate in the bigger parentheses", () => {
    const { pass } = testData;

    pass.map(({ input, result }) => {
      expect(parentheses(input)).toEqual(result);
    });
  });

  it("Should throw error when the parentheses dont match", () => {
    const { error } = testData;

    error.map(({ input, error }) => {
      expect(() => parentheses(input)).toThrow(error.message);
    });
  });
});
