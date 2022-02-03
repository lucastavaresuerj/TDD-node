import parser from "./parser";

describe("Parser", () => {
  const testData = {
    pass: [
      {
        input: "1 + 1",
        result: 2,
      },
      {
        input: "1 + 2",
        result: 3,
      },
      {
        input: "1 + (2 + 3)",
        result: 6,
      },
      {
        input: "1 - 1",
        result: 0,
      },
      {
        input: "1 - 2",
        result: -1,
      },
      {
        input: "1 - (2 - 3)",
        result: 1,
      },
    ],
  };

  it("Should parse the string to math operations", () => {
    const { pass } = testData;

    pass.map(({ input, result }) => {
      expect(parser(input)).toBe(result);
    });
  });
});
