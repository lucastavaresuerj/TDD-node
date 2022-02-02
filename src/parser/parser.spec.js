import parser from "./parser";

describe("Parser", () => {
  it("Should parse the string to math operations", () => {
    expect(parser("1 + 1")).toBe(2);
  });
});
