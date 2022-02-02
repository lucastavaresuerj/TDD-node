import sub from "./sub";

describe("sub", () => {
  const testData = {
    correct: [
      { left: 1, right: 2, result: -1 },
      { left: 12, right: 7, result: 5 },
      { left: -1, right: 5, result: -6 },
      { left: -1, right: -2, result: 1 },
    ],
    wrong: [{ left: 0, right: 0, result: 1 }],
    fail: [{ left: 1, right: undefined, result: NaN }],
  };

  it("Should sub 2 numbers", () => {
    const { correct } = testData;
    correct.map(({ left, right, result }) => {
      expect(sub(left, right)).toBe(result);
    });
  });

  it("Should not give wrong results when subtracting 2 numbers", () => {
    const { wrong } = testData;
    wrong.map(({ left, right, result }) => {
      expect(sub(left, right)).not.toBe(result);
    });
  });

  it("Should expect two args when subtracting 2 numbers", () => {
    const { fail } = testData;
    fail.map(({ left, right, result }) => {
      expect(sub(left, right)).toEqual(result);
    });
  });
});
