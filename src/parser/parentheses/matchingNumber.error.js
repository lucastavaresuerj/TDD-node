export default class MatchingNumberError extends Error {
  constructor() {
    super("Number of parentheses did not match");
    this.name = "MatchingNumberError";
  }
}
