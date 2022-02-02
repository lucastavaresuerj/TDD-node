import addParser from "./add.parser.js";

describe("Parser of add", () => {
  it("Should check for sum operation and return the two operators", () => {
    expect(addParser("1 + 1")).toEqual(["1", "1"]);
  });
});
