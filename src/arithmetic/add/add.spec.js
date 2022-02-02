import add from "./add";

describe("Add", () => {
  const testData = {
    correct: [
      { left: 1, right: 2, result: 3 },
      { left: 12, right: 7, result: 19 },
      { left: -1, right: 5, result: 4 },
      { left: -1, right: -2, result: -3 },
    ],
    wrong: [{ left: 0, right: 0, result: 1 }],
    fail: [{ left: 1, right: undefined, result: NaN }],
  };

  it("Should add 2 numbers", () => {
    const { correct } = testData;
    correct.map(({ left, right, result }) => {
      expect(add(left, right)).toBe(result);
    });
  });

  it("Should not give wrong results when adding 2 numbers", () => {
    const { wrong } = testData;
    wrong.map(({ left, right, result }) => {
      expect(add(left, right)).not.toBe(result);
    });
  });

  it("Should expect two args when adding 2 numbers", () => {
    const { fail } = testData;
    fail.map(({ left, right, result }) => {
      expect(add(left, right)).toEqual(result);
    });
  });
});
