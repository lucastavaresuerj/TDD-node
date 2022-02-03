import addParser from "./add.parser.js";

describe("Parser of add", () => {
  const testData = {
    pass: [
      { input: "165+79", result: ["165", "79"] },
      { input: "861+ 981231", result: ["861", "981231"] },
      { input: "681 + 68651+ 6886151", result: ["681", "68651+ 6886151"] },
      { input: "1+2+3+8", result: ["1", "2+3+8"] },
      { input: "2   + 984", result: ["2", "984"] },
      { input: "2 - 5", result: ["2 - 5"] },
      { input: "2 - 3 + 5", result: ["2 - 3 + 5"] },
    ],
    fail: [
      { input: "+165+79", result: ["165", "79"] },
      { input: "861 981231", result: ["861", "981231"] },
    ],
  };
  it("Should return the two side operators", () => {
    const { pass } = testData;

    pass.map(({ input, result }) => {
      expect(addParser(input)).toEqual(result);
    });
  });

  it("Should not return the two side operators", () => {
    const { fail } = testData;

    fail.map(({ input, result }) => {
      expect(addParser(input)).not.toEqual(result);
    });
  });
});
